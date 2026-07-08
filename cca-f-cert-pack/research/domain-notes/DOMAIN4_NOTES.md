SendMessage 无法送达（没有名为 `general-purpose` 的可达 agent，也没有它的 agentId）。由于我的最终文本输出就是返回给调用方的结果，我直接在此原样重发完整提炼，调用方可从本消息获取：

# Domain 4: Prompt Engineering & Structured Output（20%）竞品课程知识点提炼

Domain 概览页只列了 6 个 Task Statement 标题 + 一句 domain 描述，无正文内容。以下按课逐节。

---

## 1. 每节课详解

### 4.1 — System Prompts with Explicit Criteria

**核心考点**
- 生产 prompt 最大错误 = 模糊指令（"be conservative" / "only report high-confidence findings" / "use your best judgement"），它们没有给模型可执行的 decision boundary——正因为"听起来合理"，考试专门拿它们当 distractor
- 正确做法 = explicit categorical criteria：明确定义 what to flag（bugs、security vulnerabilities）+ what to skip（style preferences、local patterns）+ 具体触发条件（如"comment 声称的行为与实际代码行为矛盾时才 flag"）
- False Positive Trust Problem：一个类别的高误报率会摧毁开发者对**所有**类别的信任——信任不是 category-specific 的，会跨类别扩散
- Trust recovery 策略：**临时禁用**高误报类别，同时迭代改进其 prompt，精度达标后再启用；这不是放弃类别，而是"系统级信任优先于类别完整性"
- Severity 校准必须用具体 code example，不能用 prose 描述（prose 迫使模型自行解释"可能导致系统故障"是什么意思，code example 完全消除歧义）
- 层级顺序：explicit criteria 第一，confidence-based routing 第二——LLM 自报 confidence 校准很差（对错误发现常常高置信、对正确发现反而不确定），confidence 只能用于 routing（低置信送人工审），不能替代 criteria

**独特技术细节（原文精确值）**
- Severity code example 示范：Critical = `query = f"SELECT * FROM users WHERE id = {user_input}"`（未消毒 SQL 输入）；Minor = 同模块内 `userName` vs `user_name` 命名不一致
- Practice scenario 中的具体数字：documentation mismatch 类误报率 40% 导致开发者忽略包括 98% 准确的 security 类在内的全部输出
- Build exercise 量化阈值：vague prompt 应产生 30-50% 不一致率，explicit criteria 版本应低于 15%；误报率超过 **25%** 的类别要临时禁用

**常见误区（考试陷阱）**
- 选"be conservative / only report high-confidence findings"作为有效 prompt 改进 ❌
- 以为 confidence threshold 能修复误报问题 ❌（校准差；criteria + code examples 才是根因修复）
- 迭代高误报类别时保持所有类别在线 ❌（应临时禁用问题类别以恢复系统级信任）
- 干扰项还包括：加第二遍模型验证、调高 temperature 取样过滤

---

### 4.2 — Structured Output with Tool Use

**核心考点**
- 可靠性层级：`tool_use` + JSON schema（完全消除 JSON 语法错误）> prompt-based JSON（可能产出 malformed JSON，生产中会周期性出现不可解析输出）
- `tool_choice` 三模式：`"auto"`（默认，模型可返回纯文本不调用工具）/ `"any"`（必须调用工具但自选哪个——document type 未知时保证结构化输出的正确选择）/ `{"type": "tool", "name": "..."}`（强制调用指定工具，用于强制必经步骤如 metadata 提取先于 enrichment）
- **tool_use 消除语法错误但不消除语义错误**：sum discrepancy（行项目加总≠stated total）、field placement error（值放错字段）、fabrication（源文档缺信息时模型为 required 字段编造值）——schema 保证结构，不保证正确性
- Schema 设计防错模式：optional/nullable 字段是防 fabrication 的**首要防线**（required 字段会施压模型编值，nullable 允许诚实返回 null）
- `"unclear"` enum 值（证据模糊时不强行分类）+ `"other"` enum 配对 freeform detail string（捕获预定义类别外的边界情况）
- Format normalisation 规则写在 prompt 里而非 schema 里（schema 管结构，prompt 管格式一致性，如 "All dates in ISO 8601 format"）

**独特技术细节（原文精确值）**
- 代码示例用 `model: "claude-sonnet-4-20250514"`、`max_tokens: 4096`
- nullable 写法：`"payment_terms": { "type": ["string", "null"] }`，`required` 数组只放必有字段
- enum 示例：`["invoice", "receipt", "contract", "unclear", "other"]` + `category_detail` nullable string
- tool_choice any 成功的验证标志：每个响应 `stop_reason` 为 `tool_use`
- 多 schema 场景示例：`extract_invoice` / `extract_receipt` / `extract_contract` 三工具 + `tool_choice: { type: "any" }`

**常见误区（考试陷阱）**
- 以为 tool_use + JSON schema 防止**所有**提取错误 ❌（只防语法错误）
- 混淆 `auto` 和 `any` ❌（auto 不保证结构化输出）
- 把所有字段设 required 以"保证数据完整" ❌（恰恰导致 fabrication；诚实 null 永远优于貌似合理的编造数据）
- 干扰项：改回 prompt-based JSON"更灵活"、加一句"don't hallucinate"指令

---

### 4.3 — Prompt Chaining and Validation-Retry Loops

**核心考点**
- Retry-with-error-feedback 三要素：**原始文档 + 失败的提取结果 + 具体 validation error**——缺 error 的 naive retry 模型无从下手、通常复现同样错误
- **Retry 有效性边界**（本课"考试考得最狠"的概念）：retry 有效于 format mismatch / structural error（值在错误字段、嵌套错）/ misplaced value / mathematical error（漏行项目导致总数错）；retry **无效**于源文档中根本不存在的信息、只存在于未提供的外部文档的数据、需要模型没有的知识——不可修复的应转人工审或返回 null
- 自纠正 schema 设计：同时提取 `calculated_total`（模型从行项目算出）与 `stated_total`（文档声明），差异即自动 discrepancy flag，无需外部逻辑；`conflict_detected` boolean 标记源文档内部矛盾（两处提取都保留，不静默选一个）
- `detected_pattern` 字段追踪每条 finding 由哪个代码构造触发 → 分析开发者 dismissal 模式 → 系统性 prompt 改进闭环（extract → validate → 收集 dismissal 数据 → 改 prompt → 重复）
- Schema syntax errors（malformed JSON、缺 required 字段、类型错——tool_use 完全消除）vs semantic validation errors（结构对但值错——需要 schema 外的 validation 逻辑 + retry loop）；与 4.2 的重叠是刻意的考点

**独特技术细节（原文精确值）**
- Retry message 范例文案："Line items sum to £450 but stated_total is £500. Please re-extract, ensuring all line items are captured."
- 自纠正 JSON 示例：`calculated_total: 450.00, stated_total: 500.00, total_discrepancy: true`
- 冲突示例：文档一处写 "payment due: 30 days"、另一处写 "payment terms: net 60" → 两个都提取 + `conflict_detected: true`
- detected_pattern 示例：`"detected_pattern": "string concatenation in SQL query"`、`"file": "user_service.py", "line": 42`；被反复 dismiss 的示例 pattern："variable shadowing in nested scope"
- Build exercise：可修复文档应在 **1-2 次 retry** 内成功

**常见误区（考试陷阱）**
- 假设 retry 对一切提取失败都有效 ❌（无法凭空造出源文档没有的信息）
- retry 不带具体 validation error ❌（naive retry 复现同样错误）
- 只靠 schema validation 不做 semantic check ❌
- Practice scenario 标准答案形态：Document A（总数不符）带错误 retry；Document B（department 字段源文本中根本没有）直接转人工审——不能两个都 retry，也不能两个都不 retry

---

### 4.4 — Few-Shot Prompting

**核心考点**
- Few-shot examples 是达成一致、格式规范输出的**最有效技术**——不是更多指令、不是 confidence threshold、不是调 temperature；考试反复出"加更详细指令 vs 加 few-shot"的选择题，答案几乎总是后者
- 三个部署触发条件：(1) 详细指令已存在但格式仍不一致（一会列表一会表格一会散文）；(2) 模糊案例上判断不一致（同样的 variable shadowing 一处 critical 一处 minor；同类 query 因措辞不同路由到不同工具）；(3) 信息明明存在于文档（叙述文本中、跨段落）但提取出空/null 字段
- 构造规则：**2-4 个** targeted examples（<2 建立不了 pattern，>4 浪费 token 无成比例收益）；每个例子**必须含 reasoning**（不止 input-output pair）——有 reasoning 模型学到可泛化的决策原则，没有则只学到表面 pattern matching；examples 要覆盖正在失败的具体场景
- Hallucination reduction 次生效应：展示从多样文档结构（inline citation vs bibliography、叙述 vs 表格、header vs 嵌入文本）正确提取的例子，模型学会处理结构多样性而不编造数据
- 降 false positive 双重作用：例子同时演示 what to flag 和 what to ignore（区分可接受 pattern 与真实问题）
- 技术选型对照表（考试核心）：格式不一致→few-shot；malformed JSON→tool_use；缺失字段被编造→nullable schema；工具选错→先改 tool description 再 few-shot；叙述文本漏提取→few-shot；加总不匹配→validation-retry loop

**独特技术细节（原文精确值）**
- Reasoning 范例："check my order #12345" → 选 `lookup_order` 而非 `get_customer`，理由是具体 order identifier 路由到具体 lookup 工具——没有 reasoning 模型只学到"提到订单号就走 lookup_order"，有 reasoning 学到"specific identifiers route to specific lookup tools"这条通用原则
- Variable shadowing 判例：arrow function 内部 shadow 外层 `result`、作用域有限、不造成 bug → severity 定 **minor**，"这是 style preference 不是 defect，只在 style consistency 属于 scope 时才 flag"
- Build exercise 基线：10 个结构多样的文档、3 个针对失败 pattern 的 few-shot 例子（各覆盖 table / narrative / mixed 一种结构）

**常见误区（考试陷阱）**
- 格式不一致时选"加更详细指令" ❌
- 以为 few-shot 只教字面 pattern-matching ❌（含 reasoning 的例子教会泛化）
- 用 confidence threshold 修判断不一致 ❌
- 干扰项：预处理把叙述全转成表格、加大 context window、对空字段做后处理重提取

---

### 4.5 — Batch Processing and Prompt Optimisation

**核心考点**
- Message Batches API 硬约束：**50% 成本节省**（相对同步调用）/ **最长 24 小时**处理窗口（可能几分钟也可能 24 小时）/ **无延迟 SLA 保证** / **单个 batch request 内不支持 multi-turn tool calling** / 用 `custom_id` 字段关联 request-response 对
- **Matching rule**（本课最高频考点）：blocking workflow（有人/系统在等结果——pre-merge check、实时 code review）必须留同步 API；latency-tolerant workflow（隔夜技术债报告、每周 code audit、夜间测试生成、批量文档提取）才走 batch。经理提议"全部切 batch 省钱"的场景题，正确答案是只迁移 latency-tolerant 部分
- SLA 倒推计算：30 小时 SLA − 24 小时最大处理窗口 = 6 小时 buffer；在 buffer 内每 4-6 小时提交一批，保证始终有 fresh batch in flight
- Batch 失败处理三步：(1) 按 `custom_id` 识别失败项；(2) **只重提交失败项**并带针对性修改（超长文档 chunking、简化提取 prompt、为特殊结构补 format-specific few-shot）；(3) 提交大批量**之前**先在 sample set 上打磨 prompt
- Multi-turn tool calling 限制是直接考点：batch 内不能定义工具让模型中途调用、不能处理 tool result 继续对话、不能跑 agentic loop——需要中途执行工具的步骤必须走同步 API

**独特技术细节（原文精确值）**
- API 形态：`client.batches.create({ requests: [...] })`，每项含 `custom_id`（如 `debt-report-${i}`）+ `params`；取结果 `client.batches.results(batchId)`，失败项 `r.result.type === "errored"`；重试项 custom_id 命名 `${id}-retry-1`，示例中 max_tokens 从 4096 提到 **8192** 应对超长文档
- Sample set 规格：**5-10 个**有代表性文档（覆盖格式范围和边界情况）
- 成本量化：1000 文档 90% 首过率 = 100 次重试；60% 首过率 = 400 次重试，重提交成本 4 倍

**常见误区（考试陷阱）**
- 为省钱把所有 workflow 切 batch ❌
- 因为 batch 结果"经常很快到"就按 best-case 设计 ❌（必须按 24 小时最大值设计）
- 需要 multi-turn tool calling 的 workflow 用 batch ❌
- 干扰项：batch + timeout fallback 回退实时、batch + status polling、"避免结果乱序所以都用实时"

---

### 4.6 — Multi-Instance Review and Output Validation

**核心考点**
- **Self-review limitation**：同一 session 内模型审自己的输出有结构性劣势——保留了生成时的 reasoning context，"记得"每个决定的理由，倾向于 confirm 而非 challenge。这不是 bug，是同 session 自审的固有属性
- 正确做法 = independent instance：单独的 Claude 调用、无先前 reasoning context，只基于看到的东西评估；考试选项里"加 please review carefully 指令"或"同 session 内用 extended thinking"都是错的
- Attention dilution 三症状（大型多文件 review 单次处理）：部分文件反馈详细部分肤浅、review 中间的明显 bug 被漏、矛盾发现（同一 pattern 在一个文件被 flag 在另一个文件被 approve）
- Multi-pass 架构修复：**Pass 1 per-file local analysis**（每次调用只看一个文件，保证一致深度）+ **Pass 2 cross-file integration**（接收全部 per-file findings，查模块间数据流、跨服务 API 一致性、依赖冲突、以及 per-file findings 自身的矛盾）
- **更大 context window 修不了 attention dilution**（考试专用干扰项）：问题不是 context 容量而是 attention quality，模型装得下更多文本但注意力仍不均——只有 focused per-file pass 能保证一致深度
- Confidence-based routing：高置信 findings 直接报给开发者，低置信路由到人工审；raw uncalibrated confidence 不能用于自动决策（anti-pattern），必须用 **labelled validation set** 校准（跑已知答案的样本、测量 reported confidence 与实际 accuracy 的关系、据此调 routing threshold）

**独特技术细节（原文精确值）**
- Anti-pattern 代码：同一 messages 数组内 user→assistant(generatedCode)→user "Now review your code for bugs"；正确写法是全新 messages 只含代码本身
- Pass 1 实现用 `Promise.all(files.map(...))` 并行 per-file 调用
- Confidence routing JSON 示例：`"confidence": 0.65`、`"route": "human_review"`，附 reasoning 说明为何不确定（"unlock timing depends on an async callback whose ordering I cannot fully verify"）
- Practice scenario 具体数字：**14 个文件**的 PR 出现三症状；Build exercise 用 10 文件 mock PR，症状典型分布是"首尾文件详细、中间文件肤浅"
- 完整生产架构五层：Generation → Per-file review（independent instances）→ Integration review → Confidence routing → Calibration loop；明确承认此架构比 single-pass 贵，值得用于 CI/CD、金融提取、合规分析等"漏检有下游后果"的系统

**常见误区（考试陷阱）**
- 同 session self-review 当作可行策略 ❌
- 大型多文件 review 用单次 pass ❌
- 换更大 context window 的高阶模型来修 attention dilution ❌
- 用未校准的 confidence score 做自动 routing ❌
- 干扰项还有：跑 3 次全量独立 review 取"至少 2/3 命中"、强制开发者拆小 PR

---

## 2. Quick-reference 页形态

一页可打印（有 "Print this page" 按钮）的浓缩 cheat sheet。组织方式：按技术主题分小节，每节 3-6 条要点混合短表格；最有特色的是结尾两张**应试速查表**——"题干出现某关键词 → 答案大概率是什么"的 Decision Rules 表（10 行，如 "guaranteed schema compliance"→forced tool_choice；"real-time / user-facing"→NOT Batch API），以及 Trap→Correct Answer 对照表（7 行）。分节标题：

1. System Prompts
2. Structured Output — tool_use vs Text
3. Schema Design for Structured Output
4. Few-Shot Examples
5. Prompt Chaining
6. Retry Pattern — retry-with-error-feedback
7. Batch API
8. Self-Review Limitation
9. Decision Rules for the Exam
10. Common Exam Traps

注意：quick-reference 含少量正课没展开的增量信息——system prompt 四段结构（Role/Rules/Output format/Calibration examples）、"system prompt 可被 prompt caching 缓存复用所以最划算"、prompt chaining 的 extract→validate→format→synthesise 四步 pattern、"不同 chain step 可用不同模型做成本优化"、few-shot 递减收益（0→2 提升最大，4→8 几乎无益）、escalate 条件（>2 次 retry 失败 / confidence 低于阈值 / 根本性理解错误）、"schema 尽量扁平——深嵌套增加提取错误"、"每个 property 加 description"。

## 3. Glossary 页形态

**共 10 个词条**：System Prompt / Structured Output / Prompt Chaining / Few-Shot Examples / Prompt Optimisation / Output Validation / Prefilling / XML Tags / Chain of Thought / Temperature（前 6 个对应 6 节课，后 4 个是课内未单独成课的补充概念——Prefilling、XML Tags、CoT、Temperature 只在 glossary 出现）。每条结构固定三段：**定义**（2-4 句，约 40-70 词）+ **"Exam context:" 考点提示段**（明确说考试测什么，如 few-shot "may test how many examples are typically needed (2-5 is usually sufficient)"、temperature "temperature 0 does not guarantee identical outputs"、prefilling "requires direct API access"）+ **"See also:" 链回对应课节**。注意 glossary 的 few-shot 数量说 "2-5"，与正课/quick-ref 的 "2-4" 有轻微不一致。

## 4. Exercises 页形态

**6 个 build exercise**（每节课一个，与课内嵌的 Build Exercise 完全同源），全部是**动手型**（写 prompt / 定义 JSON schema / 写 retry loop / 调 Batch API / 搭 multi-pass review），不是纸面题。汇总页只列：标题 + 难度标签（4 个 Intermediate、2 个 Advanced——4.3 和 4.6 是 Advanced）+ 时长（Intermediate 45 分钟、Advanced 60 分钟）+ 4-5 条 "What you'll learn"。完整验证标准在各课页内：每个 exercise 拆成 5 个 step，每 step 三件套——**Why**（挂钩考点）+ **"You should see"**（可观察的验证标准，常带量化阈值，如 "vague prompt 30-50% 不一致、explicit criteria <15%"、"每个响应 stop_reason 为 tool_use"）+ **"Stuck? Get a nudge"** 提示入口。

## 5. 本 domain 整体教学风格观察

1. **彻底的应试反向工程导向**：每课固定骨架 "What You Need to Know → Key Concept 高亮框 → Exam Traps（每课 3-4 个）→ Practice Scenario（1 道四选一场景题）→ Build Exercise → Sources"；行文反复出现 "the exam tests / the exam's preferred pattern / Question 11 in the sample questions" 这类直接对题的话术，甚至把"为什么这个选项是 distractor"当正文教——教的不只是技术，是出题人思路。
2. **每个概念都配"边界/反例"而不只是正例**：tool_use 消除什么/不消除什么、retry 修得了什么/修不了什么、few-shot 适用/不适用哪类问题、batch 的硬约束清单——大量以 "X 解决 A 但不解决 B" 的二分结构呈现，且刻意让 4.2/4.3 考点互相重叠（"The overlap between these task statements is intentional"）。
3. **动手练习带量化验收 + 生产味场景**：所有 exercise 用真实生产语境（CI/CD code review、发票提取、技术债报告），验收标准给具体数字阈值（25% 误报禁用线、90% vs 60% 首过率成本对比、1-2 次 retry 内成功），强调"用数据而非直觉论证"。另一个值得留意的细节：各课页脚 Sources 标注的 Task Statement 编号与课号**不完全对应**（4.2 课引 Task Statement 4.3、4.3 课引 4.4、4.4 课引 4.2），说明他们的课程编排顺序与官方考纲 task statement 顺序做过重排。

---

注：向 `general-purpose` 的 SendMessage 送达失败（提示无此名的可达 agent，也未提供 agentId）。上述完整结果已作为本次回复原样重发，调用方可直接从这里取用。
