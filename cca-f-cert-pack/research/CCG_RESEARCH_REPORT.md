# claudecertificationguide.com（CCG）竞品深度研究报告

> 研究对象：claudecertificationguide.com — CCA-F（Claude Certified Architect Foundations）认证免费备考站整站镜像
> 素材：69 个页面正文 + 239 道完整题库 JSON（`research/extracted/`）
> 研究日期：2026-07-08
> 用途：为 cca-f-cert-pack（US$399 中文考试直通包）提供考点大纲底稿、出题规律参考与产品机制借鉴

---

## 1. 站点全貌与学习闭环机制

### 1.1 定位与基本盘

- **独立社区资源**，页面反复声明 "not affiliated with, endorsed by, or sponsored by Anthropic"，内容声称基于官方文档、Skilljar 课程和 published exam guide。
- **完全免费 + 免注册**：30 节课、239 道题（对外宣传 "150+ questions"）、mock exam、build exercises、quick reference 全部无需登录即可使用。免注册本质是 SEO / 流量策略——降低进入门槛，靠 blog + 认证关键词吃搜索流量。
- **变现钩子**：首页 "Request access to the official exam" CTA（导流官方考试报名）；另有姊妹站 "Cowork Certification Guide"（同一引擎、面向非技术人群），说明这是一套**可复制的认证备考站模板**。
- **社会证明**："Learners active in the last 30 minutes" 实时人数展示。
- **内容生产管线**（about 页自述）：research briefing → lesson drafting → technical accuracy review → copy-editing → **humanisation pass**（专门去 AI 味的一道工序）。

### 1.2 考试结构（他们对 CCA-F 的理解）

| Domain | 权重 | 课程数 | 主题 |
|---|---|---|---|
| 1. Agentic Architecture & Orchestration | **27%** | 7 | agentic loop、orchestration patterns、guardrails、Agent SDK |
| 2. Tool Design & MCP Integration | 18% | 5 | tool schema、MCP server/client、tool routing |
| 3. Claude Code Configuration & Workflows | 20% | 6 | settings、CLAUDE.md、hooks、permissions、CI/CD |
| 4. Prompt Engineering & Structured Output | 20% | 6 | system prompts、structured output、few-shot、output validation |
| 5. Context Management & Reliability | 15% | 6 | context window、caching、long conversations、production reliability |

- 共 **30 task statements / 30 节课**；通过线 **720/1000**（加权计分）。
- 备考时长指引：有 Claude 经验 15-20 小时，零基础 30-40 小时。
- 官方建议学习路径（blog）：Week 1 = D1+D3（合计 47% 权重）→ Week 2 = D4+D2 → Week 3 = D5 + 诊断 + 全真模拟。

### 1.3 学习闭环（核心产品机制）

```
入口分流：首页三个 CTA
  ├─ 没准备好 → Diagnostic（诊断测试，定位弱项 domain）
  ├─ 系统学习 → 30 Lessons（每节课含 exam traps + 课后练习 + build exercise）
  └─ 碎片刷题 → Drill Mode（间隔重复 spaced-repetition）

学习中：Lesson → 课内嵌题（同一题库按 lesson 切片）→ quick-reference 速查 → glossary
考前：Mock Exam（计时 + 720/1000 加权计分）→ Gap Analysis 定位弱项 → 回到弱项 lesson
```

**关键工程事实**（从 JSON 数据验证）：diagnostic、mock exam、lesson 课内练习、drill **共用同一个 239 题题库**（`all-questions-v2.json` 中 diagnostic 页与 mock-exam 页各挂全部 239 题，与 `question-bank-unique.json` 100% 重合；`all-questions.json` 按 30 个 lesson 页切片分发）。一套题库、四个消费界面，生产成本被摊薄到极致。

---

## 2. 5 Domain × 30 课知识点地图

> 本节是中文精析考点大纲的底稿。每节课列出：核心考点（考什么）、独特技术细节（"真用过才知道"）、他们强调的误区/陷阱。

> 逐课完整细节（每节课的全部独特技术细节、原文精确数字、build exercise 验收标准）见 `research/domain-notes/DOMAIN1_NOTES.md` ~ `DOMAIN5_NOTES.md`，本节为压缩版考点大纲。

### Domain 1 — Agentic Architecture & Orchestration（27%，7 节）

**1.1 Agentic Loops**
- Loop 四步生命周期：发请求 → 查 `stop_reason` → `"tool_use"` 则执行工具并把 tool result 追加进 history 再发回 → `"end_turn"` 终止
- `stop_reason` 是循环控制的唯一可靠信号；Claude 可在同一响应里同时返回 text + tool_use block，所以检查 `content[0].type` 必错（premature termination 经典 bug）
- Iteration cap 只能做 safety net（如 `MAX_ITERATIONS = 20` + warning log），永远不能做 primary stopping mechanism
- `tool_choice: "any"` 防不了"返回文本"——反而在任务真完成时制造 infinite loop
- Model-driven 决策优于预配置 decision tree；例外：financial / security / regulatory 场景要 programmatic enforcement（衔接 1.4）

**1.2 Multi-Agent Orchestration**
- Hub-and-spoke：coordinator 居中做任务分解 / subagent 选择 / context 传递 / 结果聚合 / 错误处理；**subagent 之间永不直接通信**（理由：observability、一致错误处理、受控信息流）
- Isolation 原则（最易误解）：subagent 不继承 coordinator 历史、system prompt、其他 subagent 结果，同一 subagent 两次调用间也无记忆——一切 context 必须显式传
- Narrow decomposition failure 诊断：输出在**广度**上缺失时根因几乎总在 coordinator 的 decomposition（renewable energy 只拆 solar+wind 案例），不是下游 subagent，加 subagent 也没用
- Coordinator 的 iterative refinement loop：评估 synthesis 缺口 → 定向 re-delegate → 重跑直到覆盖足够

**1.3 Subagent Invocation and Context Passing**
- Agent tool 是 spawn subagent 的机制，coordinator `allowedTools` 必须含 `"Agent"`（SDK v2.1.63 由 Task 更名，"Task" 保留为向后兼容别名）
- Context passing 三规则：完整传递前序 findings；结构化分离 content 与 metadata（claim / source_url / document_name / page_number / confidence）；coordinator prompt 写目标不写流程
- Attribution failure（报告无引用）根因 = coordinator 传递时剥掉 metadata，不是 synthesis agent 的 prompt
- 独立任务应在**单次响应中并行发多个 Agent tool call**（"in a single response" 是答案信号词），不要跨 turn 串行
- `fork_session`（共享基线开独立分支做方案对比）vs `--resume`（继续同一 session），混淆是常设陷阱

**1.4 Workflow Enforcement and Handoff**
- Enforcement spectrum：prompt-based = probabilistic（约 90-95% 生效，标志性数字：写了 "always verify" 仍有 8% failure rate，强化 prompt 只能降到 3-4% 永远不归零）；programmatic（hooks / prerequisite gates）= deterministic 100%
- 决策规则：financial / security / compliance → 必选 programmatic；格式风格类 low-stakes → prompt 可接受
- Prerequisite gate：代码级阻断——`process_refund` 在 `get_customer` 返回 verified ID 前物理不可执行
- Subagent 可在 AgentDefinition frontmatter 定义 scoped 的 PreToolUse/PostToolUse hooks；frontmatter 里的 Stop hooks 运行时自动转为 `SubagentStop`
- Handoff summary 必须自包含（人工客服看不到 transcript）：Customer ID / 对话摘要 / 根因 / 金额 / 建议动作五字段

**1.5 Agent SDK Hooks**
- 方向性是考点核心：PreToolUse = 工具执行**前**，可 block/modify/redirect；PostToolUse = 执行**后**、模型看到结果**前**，做数据变换——**用 PostToolUse 去 block 违规是本节最强陷阱**（动作已发生）
- PostToolUse 典型用途 = data normalisation：统一异构工具输出（Unix timestamp → ISO 8601、"S"/"P" 单字符状态码 → 可读字符串、货币格式统一）
- PreToolUse 典型用途 = policy enforcement：refund > $500 拦截转人工、`transfer_funds` 需本 session `aml_check` pass、discount > 20% 走审批
- 决策框架：必须 100% 遵守（单次失败 = 金钱/法律风险）→ hooks；偏好类 → prompts

**1.6 Task Decomposition Strategies**
- Fixed sequential pipeline（可预测结构化任务：code review、文档处理）vs dynamic adaptive decomposition（open-ended：legacy 探索、security audit、陌生代码库 debug）——按任务特征选型
- Attention dilution：单 pass 处理 10+ item 时前几个分析细致、后面越来越浅（标志性 14-file code review 案例：Files 1-5 详细、10-14 漏掉 null pointer 和 SQL injection；同样代码 File 3 被标、File 11 零评论）
- 修法 = multi-pass 架构：per-item local analysis pass + cross-item integration pass；只分 batch 不加 integration pass 仍漏跨批问题
- 这是架构问题不是模型能力问题：换更强模型 / 更大 context window / 更细 prompt 都不解决（高频干扰项）

**1.7 Session State and Resumption**
- 三选项决策矩阵：文件没变继续干 → `--resume`；对比多方案 divergent exploration → `fork_session`；文件改过 / 长 session 退化 → fresh start + summary injection
- Stale context problem：resume 恢复全部旧 tool results，文件改过后模型同时基于新旧内容推理 → 矛盾建议；resume 后"重读文件"也不够（旧 result 仍在 history）
- **fork_session 治不了 stale context**（fork 从现有 session 分支，继承 stale tool results）——高频陷阱
- Targeted re-analysis：50 文件只改 3 个 → summary 覆盖未变部分 + 只重析 3 个文件，不全量重扫

### Domain 2 — Tool Design & MCP Integration（18%，5 节）

**2.1 Tool Interface Design**
- Tool description 是 LLM 做工具选择的 **PRIMARY mechanism**（比名字、参数 schema 更重要）；production 级 description 五要素：做什么 / 期望输入格式 / example queries / 不做什么 / 与相邻工具的 explicit boundary
- 修 misrouting 的第一步**永远是 expand descriptions**（low effort, high leverage）；few-shot / routing classifier / tool consolidation 都是错误的第一步
- System prompt 关键词会**静默覆盖** tool descriptions（"always analyse content" 让查询错误关联到 `analyze_content` 工具）——改 description 后必须回查 system prompt 冲突
- 泛职责工具拆分（`analyze_document` → `extract_data_points` / `summarize_content` / `verify_claim_against_source`）与改名消除接口重叠
- 全 domain 元规则："the exam favours the simplest fix that works"

**2.2 Structured Error Responses**
- MCP 用 `isError` flag 传达失败；结构化错误三字段：`errorCategory` / `isRetryable` / `description`
- 四类错误分类（recall 直考）：transient（retry 原样）/ validation（改输入再 retry）/ business（**绝不 retry**，escalate）/ permission（换 principal 或升级）
- `isRetryable` 语义 = "有没有任何 retry 成功路径"，不承诺原样重发会成功
- **Access failure vs valid empty result**（本 domain 最核心区分）：空数组 + success = 查询成功但无匹配，不该 retry；裸 "Operation failed" 让 agent 分不清 transient 和 business（$850 退款超 $500 上限被重试 3 次的标志性案例）
- 多 agent 错误传播：local recovery with selective propagation，上报必须带 partial results + 已尝试操作

**2.3 Tool Distribution & Tool Choice**
- Tool overload：每 agent 最优 **4-5 个工具**、按角色 scoped；18 个工具给单 agent 是反模式；synthesis agent 拿到 `web_search` 会自己重跑搜索（越权工具必被误用）
- `tool_choice` 三模式：`auto`（默认，可回文本）/ `any`（必调工具但自选——schema 不确定时保证结构化输出）/ forced `{"type":"tool","name":"..."}`（强制 mandatory first step，之后 turn 切回 auto）
- Scoped cross-role tool：85% 简单查询直接给受限版工具，避免每次绕 coordinator 的 2-3 个 round trip / 40%+ 延迟；15% 复杂情形仍走 coordinator
- Least privilege 用于工具设计：`fetch_url`（任意抓取）→ `load_document`（只校验 document URL）

**2.4 MCP Server Integration**
- 两级 scoping：project `.mcp.json`（repo 根、进 git、团队共享）vs user `~/.claude.json`（个人实验）；团队工具放错级别是常考点
- `${VARIABLE_NAME}` 环境变量展开：config 可安全 commit、secrets 不进 repo、token rotation 不改 config
- 所有已配置 server 的工具在 connection time 一次性发现，无手动激活步骤
- MCP Resources 给可见性（前置暴露 schema/目录，省探索性 tool call）、tools 给行动力
- Build-vs-use：标准集成（Jira/GitHub/Slack）先评估 community server，只有专有系统才自建；MCP 工具 description 稀疏时 agent 会偏好 description 更丰富的 built-in 工具（如 Grep）

**2.5 Built-in Tools**
- 六个 built-in：Read / Write / Edit / Bash / Grep / Glob；核心区分一句话："Grep finds what is INSIDE files. Glob finds files by their NAMES."
- Edit 是修改的默认工具，靠 unique text matching；多处匹配时 fail 是 safety mechanism 不是 bug
- Edit 失败恢复顺序（考试双重惩罚）：加宽 `old_string` 上下文 → 或 `replace_all: true` → 最后才 Read + Write 整读整写；既罚"默认 Read+Write"也罚"一失败就跳 Read+Write"
- Incremental discovery：禁止上来读全部文件（200 文件 = 烧光 context）；Grep 找 entry point → Read 顺 import → Grep 追 usage
- Deprecation 场景工具序列：**Grep（找 caller）→ Glob（按命名约定找 test 文件）→ Grep again（追 wrapper/barrel file 的间接引用）**，不是 Glob first

### Domain 3 — Claude Code Configuration & Workflows（20%，6 节）

**3.1 CLAUDE.md Hierarchy, Scoping, and Modular Organisation**
- 三级：user（`~/.claude/CLAUDE.md`）/ project（`.claude/CLAUDE.md` 或 repo 根，两个路径都合法）/ directory-level（只作用于该子目录）
- **CLAUDE.md 没有覆盖优先级**：官方文档明确所有发现的文件 "concatenated into context rather than overriding each other"，冲突时 "Claude may pick one arbitrarily"——"更具体覆盖更宽"是流传最广的错误认知，也是最强 distractor
- CLAUDE.md 以 user message 形式交付、无强制保证；硬性规则要放 `settings.json`（客户端强制，有严格优先级链 managed policy > local > project > user）或 hook
- `@path` import 是 eager 加载（原地 inline），拆文件不省 context；要省 context 用 `.claude/rules/` path 作用域；`CLAUDE.local.md` 同目录追加在后、按惯例 gitignore
- 经典场景：新成员 clone 后 Claude 行为不一致 → 规则写在老成员 user-level config，移到 project-level
- `/memory` 是诊断命令（显示已加载哪些 memory 文件），不触发加载

**3.2 Custom Slash Commands and Skills**
- Commands 与 Skills 已合并：`.claude/commands/deploy.md` 和 `.claude/skills/deploy/SKILL.md` 都创建 `/deploy`；skills 是 canonical 路径，多出 supporting files、intent 自动发现、同名优先三个能力
- 两级 scoping 贯穿 Domain 3：`.claude/`（项目、git 共享）vs `~/.claude/`（个人）；团队命令放 `~/.claude/` 是标准错误选项
- 三个 frontmatter：`context: fork`（隔离跑、verbose 输出不污染主对话）/ `allowed-tools`（**只是预批准免提示，不是限制工具集**——真正边界是 deny 规则）/ `argument-hint`
- Skills（on-demand 任务型，body 调用时才加载）vs CLAUDE.md（always-loaded 通用标准）：任务型流程不进 CLAUDE.md，常驻约定不做 skill
- `disable-model-invocation: true` = 只能用户显式调用

**3.3 Path-Specific Rules**
- 机制：`.claude/rules/*.md` + YAML frontmatter `paths: ["**/*.test.ts", ...]` glob，仅编辑匹配文件时加载（token 效率是关键考点）
- 解决 root CLAUDE.md（每 session 全量烧 token）和 directory-level（50+ 目录 = 50+ 份拷贝必 drift）都搞不定的场景：一种文件类型散布多目录
- 四选一决策表：全局标准 → root CLAUDE.md；单目录 → directory CLAUDE.md；跨目录文件类型 → path rules；按需任务 → skills
- 验证法：编辑 `.test.ts` 时 `/memory` 应列出 `testing.md` 而不出现 `terraform.md`（对应官方 Sample Question 6）

**3.4 Plan Mode vs Direct Execution**
- 核心判据 = **ambiguity 而非 difficulty**：难但定义清晰（单文件 NPE + stack trace）→ direct；看似简单但多方案/多模块 → plan
- Plan mode 五适用：大规模改动、多合理方案、架构决策、多文件修改、需探索 codebase；plan 只读不改
- Hybrid = plan THEN direct（30 文件库迁移：plan 阶段映射 API 差异，execute 阶段逐文件套用）；复杂度已写在需求里就 upfront 选 plan，不要"等复杂度浮现再切"
- Explore subagent：把 verbose 探索输出隔离在外、只回传 summary（对应官方 Sample Question 5）

**3.5 Iterative Refinement Techniques**
- 三技术选型：具体 input/output 例子（对付 prose 每次被解读不一样，2-3 个 before/after 即可）/ 测试驱动迭代（"Expected X, got Y" 零解释空间）/ interview pattern（不熟领域让 Claude 先提问，逼出 cache invalidation、TTL 这类漏掉的考量）
- Batch vs sequential 反馈：问题**相互影响 → 一条消息批量给**；相互独立 → 逐条给（混批独立问题模型分不清反馈对应哪段代码）
- 解读不一致时继续打磨 prose 是标准错误选项——答案永远是先上例子；"不是例子越多越好"

**3.6 CI/CD Integration**
- **`-p`（`--print`）= 非交互 print 模式**，CI 没键盘不加 `-p` 无限挂起——"Domain 3 单个最直接可考的事实"（官方 Sample Question 10）；`CLAUDE_HEADLESS=true` 和 `--batch` 是**编造的不存在 flag**（考试陷阱）
- 结构化输出：`--output-format json` + `--json-schema` 约束（findings[].file/line/severity/message），供 inline PR comment / severity 过滤
- Session isolation：同 session 生成又自审效果差（保留自我论证 context）→ 两次独立 `claude -p` 调用
- Incremental review：把上轮 findings 塞进 context、只报新问题——重复报"开发者已看过选择不改"的问题会摧毁信任
- System prompt 四 flag：`--system-prompt`（整体替换）vs `--append-system-prompt`（追加保留默认）+ 各自 file 版；混淆 append/replace 是考点
- Batch API 省 50% 但最长 24h 无 SLA：阻塞性 pre-merge 必须 real-time，overnight 报告用 batch（官方 Sample Question 11）

### Domain 4 — Prompt Engineering & Structured Output（20%，6 节）

**4.1 System Prompts with Explicit Criteria**
- 最大错误 = 模糊指令（"be conservative" / "only report high-confidence findings"）——没有可执行 decision boundary，考试专拿它们当 distractor；正确 = explicit categorical criteria（flag 什么 / skip 什么 / 具体触发条件）
- Severity 校准必须用具体 code example（Critical = 未消毒 SQL 拼接；Minor = 命名风格不一致），prose 描述迫使模型自行解释
- False positive trust problem：一个类别 40% 误报会摧毁开发者对**所有**类别的信任（包括 98% 准的 security 类）；恢复策略 = **临时禁用**问题类别边改边验，不是保持全部在线
- LLM 自报 confidence 校准很差，只能用于 routing（低置信送人审），不能替代 criteria

**4.2 Structured Output with Tool Use**
- 可靠性层级：`tool_use` + JSON schema（消除 JSON 语法错误）> prompt-based JSON（生产中周期性产出不可解析输出）
- **tool_use 消除语法错误但不消除语义错误**：加总不符、值放错字段、fabrication——schema 保证结构不保证正确性（本课最核心的边界认知）
- 防 fabrication 首要防线 = optional/nullable 字段（`"type": ["string","null"]`）：全 required 会施压模型编值，诚实 null 优于貌似合理的编造
- `"unclear"` + `"other"` enum 值兜住边界情况；格式规则（ISO 8601 日期）写 prompt 不写 schema
- `auto` vs `any` vs forced 的复用考点（与 2.3 重叠）：document type 未知用 `any`，强制首步用 forced

**4.3 Prompt Chaining and Validation-Retry Loops**
- Retry-with-error-feedback 三要素：原始文档 + 失败结果 + **具体 validation error**（naive retry 无从下手、复现同样错误）
- **Retry 有效性边界**（考得最狠）：有效于 format/structural/misplaced value/数学错误；**无效**于源文档根本没有的信息——不可修复的转人工或返回 null；标准答案形态 = Document A（总数不符）retry、Document B（字段源文本没有）转人工，不能一刀切
- 自纠正 schema：同时提取 `calculated_total` 与 `stated_total`，差异即自动 discrepancy flag；`conflict_detected` 标记源文档内部矛盾（两处都保留不选边）
- `detected_pattern` 字段 → 收集开发者 dismissal 数据 → 系统性 prompt 改进闭环

**4.4 Few-Shot Prompting**
- Few-shot 是达成格式一致输出的最有效技术；三触发条件：详细指令已存在但格式仍不一致 / 模糊案例判断不一致 / 信息在文档里却提取出 null
- 构造规则：**2-4 个** targeted examples（<2 建立不了 pattern，>4 浪费 token）；每例**必须含 reasoning**——有 reasoning 学到可泛化原则（"specific identifiers route to specific lookup tools"），没有只学到表面 pattern
- 技术选型对照表（考试核心）：格式不一致 → few-shot；malformed JSON → tool_use；缺字段被编造 → nullable schema；工具选错 → 先改 description；加总不匹配 → validation-retry
- 例子要同时演示 what to flag 和 what to ignore（降 false positive 双重作用）

**4.5 Batch Processing and Prompt Optimisation**
- Batch API 硬约束五连：50% 成本节省 / 最长 24h 窗口 / 无延迟 SLA / **单 batch 内不支持 multi-turn tool calling** / `custom_id` 关联 request-response
- Matching rule（最高频）：blocking workflow（pre-merge、实时 review）必须同步 API；latency-tolerant（隔夜报告、周审计）才走 batch——"经理提议全切 batch 省钱"题的答案永远是只迁移后者
- 按 24h 最大值设计不按 best-case；SLA 倒推：30h SLA − 24h 窗口 = 6h buffer，每 4-6h 提交一批
- 失败处理：按 `custom_id` 只重提交失败项 + 针对性修改；大批量前先在 5-10 个样本上打磨 prompt（90% vs 60% 首过率 = 重试成本 4 倍）

**4.6 Multi-Instance Review and Output Validation**
- Self-review limitation：同 session 审自己的输出有结构性劣势（保留生成时的 reasoning context，倾向 confirm 而非 challenge）——"加 please review carefully"和"同 session extended thinking"都是错误选项；正确 = 独立 instance、全新 messages 只含代码本身
- Attention dilution 三症状 + multi-pass 修复：Pass 1 per-file 独立分析（`Promise.all` 并行）+ Pass 2 cross-file integration（查跨文件数据流 + per-file findings 自身矛盾）
- **更大 context window 修不了 attention dilution**：问题是 attention quality 不是容量（考试专用干扰项）
- Confidence routing 前必须用 labelled validation set 校准；生产五层架构：Generation → Per-file review → Integration review → Confidence routing → Calibration loop

### Domain 5 — Context Management & Reliability（15%，6 节）

**5.1 Context Window Management**
- **Progressive summarisation trap**（全站最强调的单一概念）：摘要系统性摧毁交易类数据——$247.83 / order #8891 / March 3rd 被压成 "a recent order"，模型带着全份自信给错答案
- 修法 = persistent case facts block：交易事实抽成结构化块放在被摘要历史之外、永不摘要（"最重要的单一 pattern"）
- Lost-in-the-middle：模型对长输入首尾可靠、中间降权（第 45 行 32% margin 被选而第 142 行 47% 被漏的题）；修法是结构性的（key findings 放开头 + section headers），prompt 提醒不可靠
- Tool result trimming：40+ 字段裁到 5 个相关字段（缩 80-90%），在 PostToolUse hook 或工具实现里、进 history 之前完成
- API 是 stateless 的，每请求带全量 history；prompt caching 逐 prefix 匹配——静态内容放前、`cache_control` breakpoint 放静态块末尾、ephemeral cache 约 5 分钟 TTL

**5.2 Escalation & Ambiguity Resolution**
- 仅三个 valid escalation triggers：客户明确要人工（立即执行，不许 "let me try first"）/ policy gap（政策沉默）/ 实际尝试后无法推进
- **Policy gap ≠ policy violation**：violation 有文档化答案（"no"）不用升级；gap 才升级
- 两个 unreliable triggers（考反面）：sentiment-based escalation（挫败感与复杂度不相关）和 self-reported confidence score（校准差：难题自信、简单题犹豫）——55% vs 80% FCR 的场景题答案是加 explicit criteria + few-shot，不是 sentiment analysis 也不是 confidence threshold
- 歧义客户匹配（三个 "John Smith"）：只能索要额外标识，禁止按最近/最活跃 heuristic 选（隐私泄露风险）
- Prompt 优化永远先于架构改动（classifier、sentiment model）

**5.3 Error Propagation in Multi-Agent Systems**
- Structured error context 四要素：failure type / what was attempted / **partial results**（超时前已取到的不能丢）/ potential alternatives
- 两大 anti-pattern：**silent suppression**（`{"results": [], "status": "success"}`——最坏的一种，coordinator 以为查过没结果；order 系统宕机却报 "no orders found" 导致 agent 说"你没有账户"）和 workflow termination（一个挂杀全部）
- Access failure vs valid empty result 再次出现（跨 domain 母题）：前者考虑重试，后者本身就是答案
- 陷阱选项进阶版："重试 + backoff 耗尽后返回 generic 'search unavailable'" 也是错的——generic 状态隐藏了 query/partial results/alternatives
- Coverage annotations：synthesis 输出显式标注哪些主题因数据源不可用有缺口，优于静默省略；local recovery 先行、只上抛本地解决不了的

**5.4 Codebase Exploration & Context Degradation**
- Context degradation 可观察症状：从引用具体类名/方法/路径退化为 "typical patterns" 泛指（无 scratchpad 对照组在探索 4-5 个 module 后退化）
- 关键洞察：不是 token limit 问题，加大 context window 治不了——机制是 verbose 输出累积把早期精确发现推远
- Scratchpad files = 首要缓解：关键发现写入文件、后续引用文件，对 degradation 免疫，**从探索一开始就维护**（刻意策略不是 fallback）
- Subagent delegation 本质是 **context isolation 而非 parallelisation**（考点表述）；phase 间做 summary injection 防 cold start
- `/compact` 应主动用于维持质量，不是撞 limit 才用；crash recovery 用结构化 state manifest（sessionId / exploredPaths / keyFindings / nextSteps）

**5.5 Human Review & Confidence Calibration**
- **Aggregate metrics trap**：97% 总体准确率掩盖国际格式 45.2% / 手写收据 60.1% 的灾难（volume-weighted 掩盖）——自动化前必须按 document type × field 分层验证
- Stratified sampling 必须包含 high-confidence extractions（novel error pattern 只有分层抽样能发现，低置信项本来就有人审）
- Confidence calibration 定义（recall 直考）：验证"模型报 X% 置信时约 X% 真的对"，需 labelled validation set；同一 0.90 在 date 字段 = 94% 准、在 amount 字段 = 82% 准
- Reviewer capacity：最高不确定性优先、队列动态重排，禁止平摊
- Validation before automation 五步序列，直接跳到"减人工"是陷阱

**5.6 Information Provenance & Multi-Source Synthesis**
- Structured claim-source mapping 五要素：claim / source URL / document name / excerpt / publication date
- "Attribution dies during summarisation"：synthesis 压缩改写天然丢来源，必须显式指令保留映射（多步 pipeline 中 synthesis 是最常见失守点）
- **Conflict handling（本课最核心陷阱）**：两个可信来源数字冲突时，选更新的 / 取平均 / 选更权威**都是错的**——正确做法是双值标注 + 完整来源 + 日期，让 consumer 判断
- Temporal awareness：不同 publication date 的不同数字可能是趋势不是矛盾（2023 报 8%、2024 报 12% = 增长），所有结构化输出必须带日期
- Content-appropriate rendering：财务数据 → 表格、新闻 → prose、技术发现 → 结构化列表，强行统一格式是错误选项

### 辅助资产形态（跨 domain 高度一致的模板）

- **每节课固定六段骨架**：What You Need to Know → Key Concept 高亮框 → **Exam Traps（每课 3-5 个，专拆 distractor 为什么诱人）** → Practice Scenario（1 道四选一）→ Build Exercise → Sources（每课约 3 条 Anthropic 官方文档/Skilljar 链接）。正文直接点名官方 sample question 编号（Q2/Q5/Q6/Q7/Q9/Q10/Q11）。
- **Quick-reference（每 domain 一页，print-friendly）**：主题分块表格 + 固定收尾两张应试表——"If the question says X → the answer is likely Y" Decision Rules 表（10-12 行）+ "Trap → Correct Answer" 对照表（约 7 行）。这两张表是全站信息密度最高的应试资产，值得做中文对应物。
- **Glossary（每 domain 10-12 词条）**：每条固定三段——定义（2-4 句、40-70 词、含机制细节）+ **"Exam context:"（这个词怎么被考，甚至标注 "less frequently tested" 考频信号）** + "See also" 链回课程。
- **Build exercises（每课 1 个，30-60 分钟，全部动手型）**：拆 5-6 step，每 step 三件套——任务 + "Why"（挂钩考点）+ **"You should see"（可观察验收标准，常带量化阈值，如"裁剪后缩小 80-90%"、"selection accuracy 达 9/10"）** + "Stuck? Get a nudge" 提示按钮。固定教学法 = 先复现失败场景再修复并量化对比。

---

## 3. 题库深度分析（239 题）

### 3.1 分布统计

**题型**：239 题全部为单选（single），4 选项，恰好 1 个正确答案。每题字段齐全：id / domain / taskStatement / stem / options（每个选项含独立 explanation）/ rationale / difficulty / sources（1-3 条，直链 lesson 锚点）/ scenarioId。

**Domain × 难度分布**：

| Domain | recall | application | scenario-analysis | 合计 | 占比 | 官方权重 |
|---|---|---|---|---|---|---|
| D1 Agentic Architecture | 12 | 27 | 21 | **60** | 25.1% | 27% |
| D2 Tool Design & MCP | 8 | 25 | 10 | **43** | 18.0% | 18% |
| D3 Claude Code Config | 10 | 25 | 14 | **49** | 20.5% | 20% |
| D4 Prompt Engineering | 9 | 20 | 11 | **40** | 16.7% | 20% |
| D5 Context Management | 8 | 27 | 12 | **47** | 19.7% | 15% |
| **合计** | **47 (20%)** | **124 (52%)** | **68 (28%)** | **239** | | |

→ 题库分布**刻意对齐官方 domain 权重**（除 D5 略超配）。难度配比约 **2:5:3**（recall : application : scenario-analysis）。

### 3.2 难度分层逻辑（从抽读 20 题验证）

| 难度 | 题干均长 | 形态特征 |
|---|---|---|
| recall | 25 词 | 定义/字段名/枚举直问，如 "structured error metadata 的四个标准 errorCategory 是什么？"（transient / validation / business / permission） |
| application | 46 词 | **单一症状 → 诊断 + 修复**：给一段有 bug 的做法（如用 `response.content[0].type == 'text'` 判断循环结束），问 "bug 是什么、怎么修" |
| scenario-analysis | 51 词 | **多约束权衡**：带 deadline、部分失败、多方案对比的复合情境，如 "4 个 subagent 一个失败一个只回一半数据，报告 2 小时后要交，coordinator 怎么办" |

值得注意：recall 题也大多包着场景外壳（"The content moderation system uses an agentic loop... what field should the loop inspect"），纯 trivia 极少。这与他们 blog 里对真实考试的判断一致："questions are almost entirely scenario-based"。

### 3.3 taskStatement 覆盖地图与高频考点 Top 15

239 题标了 **158 个细粒度考点 slug**（`taskStatement` 格式：`1.1 agentic-loops / lifecycle`）。按 lesson 聚合的出题量 Top 15：

| # | 考点（taskStatement 前缀） | 题量 | 高频子考点 |
|---|---|---|---|
| 1 | 1.3 guardrails-safety | 11 | parallel-spawning、posttooluse-hooks、delegation |
| 2 | 1.2 orchestration-patterns | 10 | coordinator、isolation、decomposition |
| 3 | 1.5 multi-agent-systems | 10 | posttooluse-normalisation、pretooluse-enforcement、scoped-tools |
| 4 | 2.1 tool-schema-design | 10 | **descriptions（单一子考点全库最高 5 题）**、system-prompt 关键词串扰 |
| 5 | 3.1 configuration-settings | 9 | path-rules、hierarchy、enforcement |
| 6 | 3.2 claude-md-files | 9 | hooks（4 题）、modular-import、commands-vs-skills |
| 7 | 3.4 permissions-security | 9 | plan-mode、explore-subagent、hybrid 工作流 |
| 8 | 2.3 mcp-client-integration | 9 | config-scope、role-scoping、tool_choice |
| 9 | 5.1 context-window-management | 9 | lost-in-the-middle、facts-block、progressive-summarisation、token-budget |
| 10 | 5.4 rate-limiting-quotas | 9 | scratchpad、batch-vs-realtime、subagent-delegation |
| 11 | 5.6 production-reliability | 9 | conflict-handling、claim-source-mapping、structured-provenance |
| 12 | 1.1 agentic-loops | 8 | lifecycle（stop_reason）、anti-patterns |
| 13 | 1.4 claude-agent-sdk | 8 | prerequisite-gates、confidence-routing、handoff |
| 14 | 2.2 mcp-server-implementation | 8 | error-categories、transient-error、access-vs-empty |
| 15 | 2.4/2.5/3.5/5.5（并列 8 题） | 8 | tool-error-handling、grep-vs-glob、slash-commands、aggregate-metrics-trap |

**跨 domain 复现的高频子考点**（同一概念在多个 domain 出题）：`descriptions`（7 题）、`path-rules`（5 题）、`scoped-tools`（4）、`access-vs-empty`（"没权限"和"查了是空"必须区分表达，4 题）、`hooks`（4）、`scratchpad`（4）。这些是他们判断的**考试母题**。

⚠️ 有趣的考古发现：题库 `taskStatement` 用的是**旧版大纲命名**（1.3 guardrails-safety、5.4 rate-limiting-quotas），与现行课程 slug（1-3 subagent-invocation-context、5-4 codebase-exploration）**不一致**，但 sources 链接指向新课程锚点——说明题库先于课程改版且靠 sources 字段续命，也说明这套大纲他们自己迭代过至少一轮。

### 3.4 干扰项设计规律（717 个错误选项 + 抽读 20 题验证）

CCG 的错误选项不是随机凑数，而是**系统性地把"听起来对但不解决问题"的工程直觉做成陷阱**。8 条可复用规律：

1. **Prompt 万能论**（约 44 处，最高频）：用"往 system prompt 加更强指令/大写强调"来冒充对程序性保障（hooks、prerequisite gate、tool_choice 强制）的替代。
   *例 q-1-4-001：8% 的退款没验证账户 → 错误项 B "Add stronger instructions to the system prompt emphasising the importance of verification"；正确答案是 programmatic prerequisite gate。*
2. **盲目重试 / 静默重试**（约 31 处）：不看错误类别就 retry，尤其对 business error（不可重试）重试。
   *例 q-2-2-002：$850 退款超 $500 策略上限，agent 收到裸 "Operation failed" 重试三次；正确答案是返回 `errorCategory: 'business', isRetryable: false` 的结构化错误。*
3. **Few-shot 错层修复**（约 14 处）：用加例子修根因在别处的问题（tool description 差导致的 misrouting、缺程序性 gate）。
4. **解析自然语言当信号**（约 9 处）：靠扫描 "I have completed" 这类文本关键词判断循环结束/任务状态，替代 `stop_reason` / 结构化字段。
5. **拍脑袋加上限/阈值**（约 7 处）：加 iteration cap、fixed threshold 掩盖根因（"cap of 10 要么杀死需要 12 轮的任务，要么浪费"）。
6. **换更大模型解决设计问题**（约 7 处）：升级模型/调 temperature 来治结构性缺陷。
7. **过度工程**（约 7 处）：自建 routing classifier、独立验证 pipeline、推倒重来——违反他们贯穿全站的 "**the exam favours the simplest fix that works**" 原则。
8. **一刀切禁用**（约 10 处）：直接移除工具/禁用功能，而不是修配置或收窄权限。

另有一个**高难度题专用手法**：两个几乎相同的选项只差完整度（如 q-4-2-002 的 C/D 都是 "加 2-4 个 few-shot 例子"，只有 D 提到覆盖 async/error-handling 边界情况），逼考生读完每个字。

**每个错误选项都带独立 explanation（均长 32 词）**，解释"为什么这个看起来对但不对"——错误选项的解释本身就是教学内容，这是题库质量最高的部分。

**质量硬伤（我们要避免的）**：正确答案字母分布严重偏斜——**B 占 156/239（65%）**，A 27、C 46、D 仅 10。刷题刷多了"闭眼选 B"能蒙对大半，这是自动化生成/未做 shuffle 的指纹。

### 3.5 题干场景模板：10 个"场景宇宙"

全部 239 题挂在 **10 个复用场景（scenarioId s1-s10）**上，每题继承一个连贯的产品世界观，而不是每题新编背景：

| ID | 场景宇宙 | 题量 |
|---|---|---|
| s1 | 电商客服 agent（退款、账户验证、政策上限、escalation） | 37 |
| s2 | 多 agent 研究/报告系统（coordinator + subagents、部分失败、来源归因） | 30 |
| s4 | developer productivity 平台（文档 agent、guardrails、SDK 编排） | 29 |
| s3 | TypeScript monorepo 代码评审/测试生成（Claude Code 深度使用） | 22 |
| s6 | 财务文档数据抽取 pipeline（JSON schema、置信度、校验） | 21 |
| s7 | 企业数据平台（Snowflake/PostgreSQL/Slack 的 MCP 集成、22 个工具） | 20 |
| s8 | Java monolith → microservices 重构团队 | 20 |
| s9 | 文档团队维护 50 万行代码库（CLAUDE.md、批量更新、审计） | 20 |
| s5 | CI/CD pipeline 里的 headless Claude（-p flag、code review 自动化） | 20 |
| s10 | 内容审核 moderation 系统（分类循环、hub-and-spoke） | 20 |

场景设计的固定配方：**具体数字制造真实感**（8% 的案例、$850 vs $500 上限、45 分钟、500,000 行、22 个工具、第 45 行 vs 第 142 行 margin），加一个可观测的**症状**（"escalates straightforward cases while attempting complex ones"），问"最有效的修复/最可能的原因"。

---

## 4. 值得借鉴的产品机制清单

1. **一套题库、四个消费界面**：同一 239 题按 lesson 切片做课内练习、整库做 diagnostic、整库做 mock（计时+加权计分）、再做 drill 间隔重复。内容生产一次，产品面翻四倍。
2. **诊断先行的分流漏斗**：首页第一句就问 "Not ready yet? Take a quick diagnostic test"——先测后学，弱项定向，缩短用户到 aha moment 的距离。
3. **免注册全免费**：零门槛换 SEO 流量与口碑；变现靠官方考试报名导流 + 姊妹站模板复制（Cowork 版）。
4. **每题双向可溯源**：每题 sources 直链到 lesson 的具体章节锚点（`#the-agentic-loop-lifecycle`），做错 → 一键跳回对应知识点，学练闭环在题目粒度上打通。
5. **错误选项也有解释**：每个干扰项独立写"为什么看起来对但不对"，把刷题变成 anti-pattern 教学。
6. **10 个场景宇宙复用**：题目共享连贯的产品世界观，降低出题成本同时提高真实感——这是可以直接抄的方法论。
7. **Quick-reference 按"决策规则 + 考试陷阱"组织**：不是知识点罗列，而是 decision rules 表 + exam traps 表，print-friendly（Ctrl+P 单页打印），定位"考前最后一晚"。
8. **Glossary 带 exam context**：每个词条除定义外附"这个词会怎么出现在考题里"的提示 + See also 链回 lesson。
9. **每课配 build exercise**：动手项目让概念落地（也是和官方 Skilljar 课的差异化——about 页明说官方课 "don't go deep on the scenario-based questions"）。
10. **内容管线含 humanisation pass**：专门一道去 AI 味工序 + 技术准确性 review，值得写进我们的内容 SOP。
11. **社会证明轻量化**："active in the last 30 minutes" 实时人数，免注册站也能做氛围。
12. **Blog 做 SEO 喂料**：10 篇 blog 全部瞄准 Claude 生态高搜索词（MCP explained、CLAUDE.md guide、Sonnet 4.6 what's new、how to pass exam），文内链回 lesson，是获客层。

### 4.1 竞品的内部矛盾清单（我们能明确超越的点）

CCG 的正课（新、准确）与辅助页（quick-reference / glossary / 题库元数据，旧版残留）之间存在多处**直接冲突**，暴露"多页面各自生成、缺全局校对"的生产方式。逐条记录（详细出处见 `domain-notes/`）：

| # | 冲突点 | 正课说法 | 辅助页说法 |
|---|---|---|---|
| 1 | CLAUDE.md 优先级 | 3.1 引官方文档：文件拼接**不互相覆盖**，冲突时任意取 | D3 quick-ref 声称 4 级 override（"more specific scopes override broader ones"）；glossary 同错 |
| 2 | Batch vs sequential 反馈 | 3.5：相互影响 → 批量给；独立 → 逐条给 | D3 quick-ref 把规则**写反**（"Batch independent fixes... Sequence dependent ones"） |
| 3 | `allowed-tools` 语义 | 3.2 正文：只是预批准免提示，**不限制**工具集 | 同课 build exercise 与 quick-ref 说成 "restricts" |
| 4 | errorCategory 枚举 | 2.2：transient / validation / business / permission 四分类 | D2 quick-ref 给了另一套 `authentication / not_found / rate_limit / validation / internal` + 额外字段 |
| 5 | 来源冲突处理 | 5.6：双值标注、不选边 | D5 quick-ref 示例反而给出 "Source A is newer and authoritative" 的裁决 |
| 6 | Few-shot 例子数量 | 4.4 正课 + quick-ref：2-4 个 | D4 glossary：2-5 个 |
| 7 | 课程编号体系 | 现行 30 课 slug（如 1-3 subagent-invocation-context） | 全部 5 个 glossary 的 See also、题库全部 239 题的 taskStatement、D4 各课 Sources 的 Task Statement 编号均用**旧版大纲命名**（1.3 guardrails-safety、5.4 rate-limiting-quotas 等） |
| 8 | 内容覆盖错位 | D3 六节课没讲 hooks 细节；D5 六节课没展开 rate limit / quota / extended thinking | 但对应 quick-ref 和 glossary 大讲这些（按旧大纲写的），glossary 还把 Agent SDK 说成 "Python framework" |
| 9 | 正确答案分布 | —— | 239 题正确答案 65% 落在 B（自动化生成未 shuffle 的指纹，见 3.4） |
| 10 | 对外题量口径 | 首页/about 宣称 "150+ questions" | 实际题库 239 题（口径未更新，属小问题但同源） |

**对我们的意义**：这是付费产品对免费竞品最硬的差异化论据之一——我们的中文精析、速查卡、题库共用同一套考点 ID 与术语表（single source of truth + 交叉校对），承诺"课-卡-题-解析零冲突"。也提醒我们：内容管线必须有跨资产一致性检查这道工序，否则规模化生产必然重演 CCG 的错位。

---

## 5. 对 cca-f-cert-pack 的行动建议

> 我们的产品：US$399 中文考试直通包 = 官方考试名额 + 2 套原创模拟题 + 5 domain 中文精析。

### 5.1 🚨 版权红线（先说最重要的）

- **绝对禁止翻译、复制、改写 CCG 的任何题目**——题干、选项、解释、rationale 一个都不能碰。239 题 JSON 只作为"出题规律研究样本"，不进任何生产内容。
- **绝对禁止翻译/搬运它的课程文案、quick-reference、glossary 词条**。我们能学习的只有两样：**知识点的组织方式**（哪些考点、什么顺序、什么粒度）和**出题规律**（难度配比、干扰项套路、场景化手法）。
- 知识本身以 **Anthropic 官方文档、官方 exam guide、Skilljar 官方课**为一手来源（这也正是 CCG 自己的做法——它的权威性同样来自官方文档，我们没有必要二手转运）。精析中的引用一律指向官方文档，不指向 CCG。
- 我们的模拟题必须**自建场景宇宙**（用我们自己的业务语感：电商小程序客服、跨境支付、中文 SaaS 的 CI/CD 等），确保题干世界观与 CCG 零重合。
- 上线前做一轮**相似度自查**：任何一道题与 CCG 题库的题干/选项做语义比对，防止创作时无意识趋同。

### 5.2 内容生产优先级

1. **P0 — D1 精析（27% 权重 + 60 题最大题量 + 陷阱最密）**：先写 agentic loop lifecycle（stop_reason 语义）、orchestration patterns、guardrails（hooks vs prompt）、Agent SDK。这是 blog 明说的 "most weight and most traps"。
2. **P0 — D3 精析（20%，Claude Code 实操层）**：settings 三层 hierarchy、CLAUDE.md 作用域、hooks、permissions、`-p` headless/CI 集成。D1+D3 = 47% 权重，对应我们精析第一批交付。
3. **P1 — D4、D2**：按 top 15 考点表优先覆盖 tool descriptions（全库最高频子考点）、结构化错误四分类、tool_choice、few-shot 边界。
4. **P1 — 2 套原创模拟题**：严格按 3.1 的分布配比出题（domain 比例对齐官方权重；难度 2:5:3），每题 4 选项 + 每个选项独立中文解析 + 链回我们精析章节。**正确答案字母必须均匀分布**（避开 CCG 的 65% B 硬伤）。
5. **P2 — D5 精析 + 中文速查卡**：每 domain 一页"决策规则 + 考试陷阱"双表，print-friendly，作为 $399 包的交付物之一（考前最后一晚场景）。

### 5.3 差异化打法

- **中文是第一差异化**：CCG 全英文，中文考生读英文场景题的负担正是我们的空间。精析用中文讲透、术语保留英文（考试是英文的，术语必须原样训练）。
- **官方名额代办是 CCG 没有的硬价值**：CCG 只能导流 "Request access"，我们直接交付考试席位——落地页要把这一点放在 CCG 类免费资源对比表里讲。
- **付费深度 vs 免费广度**：CCG 免费但无人服务；我们补上错题诊断报告、答疑、以及（依托考证匠小程序）中文 drill 刷题体验。
- **借鉴其"anti-pattern 教学法"**：中文精析每节课设"考试陷阱"小节，把 3.4 干扰项 8 条规律反向变成教学内容——教学员识别"听起来对但不解决问题"的选项。
- **用"零内部矛盾"打免费竞品**：针对 4.1 的矛盾清单，我们的精析/速查卡/题库共用同一套考点 ID 和术语 SoT，并在内容管线里加一道跨资产一致性检查；宣传语可直接落地为"免费资源自相矛盾之处，我们逐条校对过"。
- **两套模拟题错开定位**：一套按 diagnostic 用法（做完出弱项 domain 报告），一套按全真 mock 用法（计时 + 720/1000 加权计分），复刻 CCG 的"一库四用"思路但以付费深度呈现。

---

*报告基于 2026-07 整站镜像；CCG 站点内容可能持续更新。数据分析脚本可在 `research/extracted/` 目录对 JSON 复跑验证。*
