# Domain 5: Context Management & Reliability（15%）— 竞品课程知识点提炼

Domain 概览页副标题："Manage context windows effectively, implement caching strategies, handle long conversations, and build reliable production systems." 下辖 6 个 Task Statement（5.1–5.6）。

---

## 1. 逐课提炼

### 5.1 — Context Window Management

**核心考点**
- Progressive summarisation trap：对话摘要会系统性摧毁交易类数据（金额、日期、订单号、百分比、客户明确表达的期望），这是摘要用于 transactional data 的默认行为，不是偶发 bug
- 修法 = **persistent case facts block**：把交易事实抽成结构化块，放在每个 prompt 里、置于被摘要的历史之外，永不被摘要——被称为"context window management 最重要的单一 pattern"
- **"Lost in the middle" effect**：模型对长输入的开头和结尾处理可靠，中间信息可能被忽略或降权；修法是结构性的（key findings summary 放输入开头 + 显式 section headers），不是 prompt 提醒
- **Tool result trimming**：工具返回的冗余字段是"silent context budget killer"，必须在结果进入 conversation history 之前裁剪到相关字段
- **API 无状态**：Claude API 是 stateless，每次请求必须带完整 conversation history，服务端没有 session state；选择性截断会破坏对话连贯性
- **Prompt caching**：cache 从 prompt 开头逐 prefix 匹配，静态内容（system instructions、tool definitions、长参考文档）放前面，`cache_control` breakpoint 放静态块末尾，易变内容放后面；顺序错则完全没有命中

**独特技术细节（原文精确值）**
- 示例贯穿全课：$247.83 refund、order #8891、March 3rd——摘要后变成 "Customer wants a refund for a recent order"，三个关键事实全丢
- Order lookup 返回 **40+ 字段**（internal audit timestamps、warehouse codes、shipping carrier IDs、fulfilment centre identifiers），实际只需 **5 个字段**（order_id, order_date, total_amount, return_eligible, item_description）；裁剪后应缩小 **80–90%**
- Trimming 应发生在 **PostToolUse hook** 或工具实现本身里，赶在结果进入 conversation history 之前
- Ephemeral cache breakpoint 有效期"**约五分钟（自上次使用起）**"——适合突发的关联请求，不适合隔几小时复用的内容
- 多 issue 会话：每个 issue 独立 entry（orderId/amount/status）放独立 context layer，防止摘要时 issue 之间交叉污染
- Upstream agent 优化：上游 subagent 应返回结构化数据（key facts、citations、relevance scores + 元数据 dates/source locations/methodological context），不是 verbose reasoning chains

**常见误区（distractor）**
- 以为 progressive summarisation 对 transactional data 是安全的
- 以为 "lost in the middle" 靠 prompt 里叫模型"注意所有内容"能解决（位置效应的 prompt 提醒不可靠）
- 以为完整 tool results 该留在 context 里"以防模型以后要用"
- 以为 conversation history 可以选择性截断而无后果
- Practice scenario 干扰项：外部数据库按需检索历史轮次 / 单纯加大 context window——正确答案是 persistent case facts block

---

### 5.2 — Escalation & Ambiguity Resolution

**核心考点**
- **仅有三个 valid escalation triggers**：(1) 客户明确要求人工——立即执行、绝对规则、不许先尝试解决；(2) policy exceptions/gaps——政策对该情况沉默；(3) inability to make meaningful progress——必须先实际尝试过并失败，"可能处理不了"不够格
- **Policy gap ≠ policy violation**：violation 有文档化答案（如超退货窗口 → "no"），不用升级；gap 是政策沉默，必须升级
- **两个 unreliable triggers（考试专门考反面）**：sentiment-based escalation（挫败感与案件复杂度不相关）和 self-reported confidence scores（LLM 自报置信度 poorly calibrated——难题上错误地自信、简单题上不必要地犹豫）
- **Frustration nuance 三分支**：问题简单 + 客户挫败 → 认可情绪 + 直接给解决方案，不升级；提供帮助后客户重申要人工 → 此时升级；开口就说要人工 → 立即升级，零调查
- **Ambiguous customer matching**：搜索返回多条匹配（如三个 "John Smith"）时只能索要额外标识（email/phone/order number），禁止按最近/最活跃/任何 heuristic 选择——错选导致隐私泄露或错误操作
- 校准升级的最有效手段：system prompt 加 explicit escalation criteria + few-shot examples——**prompt 优化永远先于架构改动**（classifier model、sentiment analysis 之前）

**独特技术细节**
- Practice scenario 数字：first-contact resolution 55% vs 目标 80%；症状为"升级简单的换货案、却自主处理复杂政策例外"——这正是 confidence miscalibration 的典型失败模式
- Policy gap 示例：客户要求 competitor price matching，而政策只覆盖 own-site price adjustments
- 升级 handoff 格式：structured handoff，含 customer ID + root cause + recommended action

**常见误区**
- sentiment-based escalation 看似合理实则不可靠（愤怒客户 + 晚送达 = 简单案；冷静客户 + policy gap = 需人工）
- 自报 confidence score（1-10）低于阈值就转人工——考试直接考它是 anti-pattern
- 在明确要人工的客户面前先"let me try first"
- 从歧义匹配里选 most recent / most active 记录

---

### 5.3 — Error Propagation in Multi-Agent Systems

**核心考点**
- Subagent 失败必须返回 **structured error context 的四要素**：(1) failure type；(2) what was attempted（具体 query、参数、目标系统）；(3) partial results（超时前已取到的部分结果不能丢）；(4) potential alternative approaches（subagent 懂自己的 domain，给 coordinator 恢复建议）
- **Failure type 四分类**：transient（timeout、rate limit——重试可能成功）/ validation（bad input——改 query）/ business（规则冲突——升级或找替代）/ permission（access denied——不改授权重试无用）
- **两个 anti-pattern**：silent suppression（空结果标 success——最坏的一种，coordinator 以为查过没结果，不会重试、不会找替代，最终产出看似完整实则缺整个研究区域）和 workflow termination（一个 subagent 挂就杀掉整个 pipeline，浪费其他已完成 subagent 的成果）
- **Access failure vs valid empty result**：前者是工具没触达数据源（timeout/connection error/permission denial），查询没执行，考虑重试；后者是查询执行成功但没有匹配——**这本身就是答案**，不需要重试
- **Coverage annotations**：synthesis 输出要标注哪些主题覆盖充分、哪些因数据源不可用有缺口（如 "Section on geothermal energy is limited due to unavailable journal access during research."），远优于静默省略
- **Local recovery**：subagent 先本地处理 transient failure（retry、fallback source、degraded response），只把本地解决不了的错误上抛，降低 coordinator 复杂度

**独特技术细节**
- Silent suppression 的具体形态：`{ "results": [], "status": "success" }`；客服场景例子——order lookup 系统实际宕机却报 "no orders found"，导致 agent 告诉客户"你没有账户"
- 结构化对照示例：access failure = `status: "error", failureType: "transient", "Connection timeout after 30s", shouldRetry: True`；valid empty = `status: "success", results: [], shouldRetry: False`
- Build exercise 指定 retry 参数：**3 次重试 + exponential backoff（1s, 2s, 4s）**，重试间保留 partial results
- Practice scenario 干扰项 D 值得注意：**"自动重试 + backoff、耗尽后返回 generic 'search unavailable'" 也是错的**——generic status 隐藏 query/partial results/alternatives，阻断 informed recovery

**常见误区**
- catch timeout 后返回标记为 success 的空结果
- 一个 subagent 超时就终止整个 research pipeline
- 重试耗尽后返回 generic 错误状态（看似稳健，实为陷阱选项）
- 把 valid empty result 当失败去重试（浪费资源查一个永远为空的 query）

---

### 5.4 — Codebase Exploration & Context Degradation

**核心考点**
- **Context degradation 的可观察症状**：模型开始引用 "typical patterns" 而不是早前发现的具体类名/方法/依赖链（如说 "typical repository pattern" 而不是 "OrderRepository at src/repos/order.ts implements Repository\<T\> with custom caching in findById"）
- **关键洞察：这不是 token limit 问题**——加大 context window 治不了；机制是每步探索产生 verbose 输出累积，早期精确发现被推远，注意力转向近期输出
- **Scratchpad files = 首要缓解手段**：把关键发现写入文件、后续问题引用文件，知识持久化在 conversation context 之外，对 degradation 免疫；应从 extended exploration 一开始就维护，是刻意策略不是 fallback
- **Subagent delegation = 第二大手段，本质是 context isolation 而非 parallelisation**：subagent 在隔离 context 里 verbose 探索，只回传结构化 summary，主 agent context 保持干净
- **Summary injection between phases**：Phase 1 发现摘要注入 Phase 2 subagent 初始 context，防止 "cold start" 重复探索
- **/compact 命令**：Claude Code 提供的减 context 命令，应在长会话中**主动**用于维持 context quality，不是撞到 limit 才用
- **Crash recovery via structured state manifests**：agent 把状态（explored paths / key findings / current phase & next steps / pending questions）导出到已知文件位置，resume 时 coordinator 载入并注入 prompt

**独特技术细节**
- Scratchpad 示例内容含具体数据：RefundProcessor 对 Stripe API 无 retry logic；OrderRepository 按 orderId 缓存但缺 status change 的 cache invalidation；测试覆盖 OrderService **87%** vs RefundProcessor **12%**
- Build exercise 验证标准："无 scratchpad 的对照组在探索 **4-5 个 module** 后退化为 generic 引用"
- Manifest JSON 字段：sessionId / phase / exploredPaths / keyFindings / nextSteps

**常见误区**
- 用加大 context window 解决 context degradation
- 以为 subagent delegation 只是为了并行化
- 不存状态就重启 session（丢掉全部积累的知识）
- /compact 只在撞 context limit 时才用

---

### 5.5 — Human Review & Confidence Calibration

**核心考点**
- **Aggregate metrics trap**：97% 总体准确率可掩盖特定文档类型的灾难性失败率；铁律 = 自动化前必须按 **document type AND field segment** 分层验证准确率，绝不凭聚合指标做自动化决策
- **Stratified random sampling 必须包含 high-confidence extractions**：低置信项本来就走人工审核，高置信项被自动化——若模型出现影响高置信项的 novel error pattern，只有分层抽样能发现；双重目的 = 持续准确率测量 + 新错误模式检测
- **Raw model confidence 未校准**：置信分是相对值不是绝对值；校准需要 labelled validation sets（ground truth），建 calibration curve 后才能定路由阈值
- **Reviewer capacity 分配**：最高不确定性项优先（低置信字段 / 歧义或矛盾源文档 / 历史低准确率文档类型 / 模型表达多种可能解释的字段）；禁止把 reviewer 平摊到所有 extraction；队列排序要**动态**按不确定性重排，不按时间顺序
- **Validation Before Automation 五步序列**：(1) 按 type+field 分段测准确率 →(2) 用标注集校准置信分 →(3) 设校准后的阈值 →(4) 对自动化部分实施分层抽样 →(5) 只对持续验证达标的 segment 减人工——直接跳到第 5 步就是陷阱

**独特技术细节（原文精确数字）**
- 分类型准确率表：标准发票 date accuracy **99.5%**、手写收据 **60.1%**、扫描 PDF **72.4%**、国际格式 **45.2%**；aggregate **97.0%**（因标准发票占量大而被 volume-weighted average 掩盖）；amount/name 列同表给出（如手写收据 amount 55.3%、国际 name 63.4%）
- 校准举例："模型在 date 字段报 0.90 置信 → 实际正确 **94%**；在 amount 字段报 0.90 → 实际只有 **82%**"——同一个分数在不同 field-document 组合意义不同
- Field-level confidence 输出示例：vendorName 0.98 / invoiceDate 0.95 / totalAmount 0.72 / lineItems 0.61
- 路由三档：高于校准阈值 → 自动化（配分层抽样）；低于 → 人工审；ambiguous zone → 优先人工审

**常见误区**
- 用 97% aggregate accuracy 论证自动化所有高置信 extraction
- 只抽样低置信项做人工复核
- 直接用 raw confidence score 不做校准
- 把 reviewer 产能均匀铺到所有 extraction
- Practice scenario 干扰项："所有自动化输出都必须人工审"（过度）、"阈值从 95% 提到 99%"（没抓住本质）、"模型会随时间过度自信需定期重训"——正确答案是 aggregate 掩盖 + 置信分需先对标注集校准

---

### 5.6 — Information Provenance & Multi-Source Synthesis

**核心考点**
- **Structured claim-source mapping 五要素（全部必填）**：claim / source URL / document name / relevant excerpt / publication date
- **"Attribution dies during summarisation"**：synthesis agent 压缩改写时天然丢来源；必须显式指令保留并合并 claim-source mappings——subagent 结构化输出 → synthesis 保持映射 → 最终输出 inline citations 或 structured reference section
- **Conflict handling**：两个可信来源数字冲突时，错误做法 = 选更近的 / 取平均 / 选更权威出版方；正确做法 = **两个值都标注 + 完整来源归属，让 consumer 自己判断**——任意选一个 = 销毁信息 + 呈现虚假确定性
- **Temporal awareness**：不同 publication/data collection date 解释不同数字——那不是矛盾而是趋势（2023 报 8%、2024 报 12% = 增长加速）；所有结构化输出必须带日期，否则合法趋势被误判为数据质量问题
- **Content-appropriate rendering**：financial data → tables；news/current events → prose；technical findings → structured lists；强行统一格式降低可读性
- **多步 pipeline 中 attribution 逐级保真**：research → analysis（加评估但保留原映射）→ synthesis（最常见的失守点，step 3）→ report（inline citations）；报告要区分 well-established vs contested findings（三个独立来源支持 ≠ 单一报告）
- **Completing analysis with conflicts intact**：分析 agent 遇冲突值要带着显式标注完成工作，**不自行裁决**——裁决权在 coordinator 或 consumer

**独特技术细节**
- Claim-source 示例："Global renewable energy investment reached $495 billion in 2023"，来源 IEA World Energy Investment Report 2024，publicationDate 2024-06-15
- 冲突标注示例揭示"方法论差异"维度：12%（IEA，2024 年 6 月发布，用 2023 日历年数据）vs 8%（Bloomberg NEF，2024 年 3 月发布，用 2022 年 7 月–2023 年 6 月数据）——差异可能来自 reporting period + 方法论
- Conflict JSON 结构：`conflictDetected: true` + values 数组（各带 value/source/context）+ `possibleExplanation`；示例是 $4.2M（audited annual report，fiscal year）vs $3.8M（SEC filing，preliminary unaudited，calendar year）

**常见误区**
- 来源冲突时选 most recent source（这是本课最核心的陷阱选项）
- 把不同来源的不同数字当矛盾（其实是时间上下文）
- 允许 synthesis agent 改写时不保留 claim-source mappings
- 所有内容统一渲染成一种格式
- Practice scenario 干扰项：升级给人工裁决、取平均报 10%——正确答案是双值标注 + 来源 + 日期

---

## 2. Quick-reference 页形态

约 130 行的"考前速查"单页（带 "Print this page" 按钮），按主题分块组织：每块先一句"最常见错误/核心原则"，再给 pattern 步骤、对照表或代码块。最有特色的是结尾两个应试速查表——**"If the question says... → The answer is likely..."** 决策规则表（10 行，如"details lost over long conversation → persistent fact blocks"）和 **"Trap → Correct Answer"** 陷阱表（7 行）。分节标题：

1. Progressive Summarisation Trap
2. Scratchpad Files
3. Error Propagation
4. Valid Empty Results vs Access Failures（6 行情境判定表，含 401/429/timeout/空结果）
5. Confidence Calibration & Stratified Validation
6. Source Attribution（含"structured mapping 能活过 synthesis / inline links 不能"对照表）
7. Monitoring & Observability（lesson 里没展开的补充：per-type error rates、"2% overall drop 可能 = 某类别 30% drop"）
8. Context Window Strategies（5 策略适用表 + context pressure 信号：模型重复自己/自相矛盾/忽略近期信息）
9. Decision Rules for the Exam
10. Common Exam Traps

注意：quick-reference 用了与 lesson 略不同的例子（95% aggregate 掩盖 60% 类别；error context 四字段为 failure type / partial results / alternatives tried / suggested action），且它的冲突处理示例反而给了 "Source A is newer and authoritative, Source B is outdated" 的 resolution——与 5.6 lesson 的"不选边"立场存在细微张力，提炼考点时以 lesson 为准。

## 3. Glossary 页形态

**10 个词条**：Context Window / Prompt Caching / Rate Limiting / Quotas / Monitoring / Observability / Token Counting / Cache Breakpoints / Extended Thinking / Batches API。每条固定三段结构：**定义**（2-4 句，含具体机制如 `cache_control: { type: "ephemeral" }`、429 状态码、"3-4 characters per token"、"Batches API 约 50% 便宜 + 24 小时窗口"）+ **Exam context**（明确说考什么，如"考 breakpoint 放置规则"）+ **See also** 链接到 task。值得注意：glossary 的 See also 指向 "5.2 Prompt Caching / 5.4 Rate Limiting & Quotas / 5.5 Monitoring & Observability" 等编号，与实际 6 节课的标题对不上——glossary 像是按另一版大纲写的，覆盖了 lesson 里没有的 API 运维类知识（rate limit/quota/batches/extended thinking）。

## 4. Exercises 页形态

**6 个 build exercises（每课一个），全部是动手编码型**，各带难度（5.1/5.2 Intermediate，5.3–5.6 Advanced）+ 时长（40–60 分钟）+ 5 条学习目标。在各 lesson 页内，每个 exercise 拆成 4-5 个 step，每 step 有三层结构：任务描述 + **Why**（并明确挂钩"考试考这个"）+ **You should see**（可验证的具体产出标准，如"裁剪后结果比原始小 80-90%"、"6-8 轮对话、第 4 轮后摘要仍能引用 $247.83"、"对照两次运行：无 scratchpad 在 4-5 个 module 后退化"），另有 "Stuck? Get a nudge" 提示入口。exercises 汇总页只列目标清单，验证标准在 lesson 页内。

## 5. 本 domain 整体教学风格观察

1. **强"exam-first"逆向设计**：每课固定结构（What You Need to Know → Key Concept 总结框 → 4 个 Exam Traps → 1 个四选一 Practice Scenario → Build Exercise → Sources），Exam Trap 直接以 distractor 语言写出错误选项的诱惑逻辑；连 build exercise 的 Why 都反复说"the exam tests..."。教的不只是知识，是选项间的判别边界。
2. **锚定在可复述的具体数字/实例上**：$247.83 / order #8891、40+ 字段裁到 5 个、97% aggregate 藏 45.2%、0.90 置信 = 94% vs 82%、55% vs 80% FCR、约 5 分钟 cache TTL——每个抽象原则都配一个精确到小数点的 canonical example，方便做成考题也方便记忆。
3. **偏"生产系统设计判断"而非 API 语法**：6 节课几乎全是架构层 pattern（persistent facts block、structured error schema、scratchpad、stratified sampling、claim-source mapping），大量"两个 anti-pattern / 三个 valid trigger / 四要素"式的可数框架；API 细节（caching、rate limit、batches）被压到 5.1 尾部和 glossary。典型考法是"看似合理但错"的工程直觉纠偏（如"重试耗尽后返回 generic 错误"也是错误选项）。

**来源文件**（均在 `/Users/lightman/Documents/sites/jr-academy-ai/curriculum/cca-f-cert-pack/research/extracted/lessons-text/`）：`learn__5-context-management.txt`、`learn__5-context-management__5-1` 至 `5-6` 共 6 课、`learn__quick-reference__domain-5.txt`、`learn__glossary__domain-5.txt`、`learn__exercises__5-context-management.txt`。
