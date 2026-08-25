# AI Engineer Bootcamp 第七期正式大纲

> 版本：Cohort 7 · 2026-08-25
> 学制：理论 12 周 + 实践 13 周
> 正式直播：25 场（12 场理论 Live + 13 场实践 Live）
> 贯穿项目：CareKind AI · Australian Aged Care
> 课程内容唯一数据源：[`public/outline.json`](public/outline.json)

## 1. 第七期课程结构

第七期保留现有 10 个 Phase 的知识体系，但改变交付方式：阶段入口、架构判断和现场反馈放在 Live；稳定知识转为课前录播；代码练习保留为 Lab；阶段作业保留为 Quest。

每周两条线独立排课：

- **理论 Live（90 分钟）**：讲清心智模型、架构取舍、面试重点和本阶段的技术边界。
- **实践 Live（120 分钟）**：现场实现、调试、评审和交付，不重复理论课。

第七期的核心变化不是“理论课后附带一个 Lab”，而是建立一条独立、连续的实践主线：学生从 W1 的 CareKind starter repository、ADLC、产品范围和开发规则开始，逐周完成 UI、非 AI workflow、Voice、Structured Documentation、RAG、MCP、Bounded Agent、Memory、Production Harness、Model Routing，最后完成 production readiness review。每周都在同一个项目上继续建设，不做互不相关的一次性 Demo。

W1–W12 每周一场理论 Live 和一场实践 Live；理论线在 W12 结束，W13 只增加一场 180 分钟最终实践。全期正式直播共 45 小时。录播、Lab、Quest 和 Office Hour 不计入 25 场正式直播。

第七期宣传资产：

- 可分享网页版：[`public/cohort-7.html`](./public/cohort-7.html)，课程卡片从 `outline.json` 动态渲染。
- 3:4 主宣传海报：[`public/posters/poster-cohort-7.html`](./public/posters/poster-cohort-7.html)，支持下载 1242×1660 PNG。
- 对外主张只使用已确认事实：每周理论 + 独立实践双 Live、25 场/45 小时、同一个 CareKind 项目从零搭建 production Agent；不使用薪资、Offer 或就业保证。

## 2. W1–W13 正式排课

| 周 | 理论 Live · 90 分钟 | 实践 Live · 120 分钟 | 当周交付 |
|---|---|---|---|
| W1 | `L16` **GenAI Foundations & AI Engineer Landscape** | `C7P01` **AI Coding + ADLC**：理解 starter repo，完成产品范围、workflow、acceptance criteria、开发规则和任务拆分 | CareKind workflow map、PRD、acceptance criteria、task board；不要求业务/AI vertical slice |
| W2 | `L28` **How LLMs Work: Transformer, Tokens & API Behaviour** | `C7P02` **CareKind Product UI & Design System**：完整 Dashboard、Resident、Shift/Task、Care Activity、Documentation、Review/Confirm、Audit UI | `DESIGN.md`、design tokens、完整信息架构和 Product Design Review |
| W3 | `L37` **Context Engineering & Reasoning Patterns**：Context Contract、assembly、structured output、reasoning patterns 与 trust boundary | `C7P03` **CareKind Application & Care Workflow Foundation**：基于 starter 完成非 AI vertical slice | Resident → Shift → Task → Care Activity → Progress Note → Review → Confirm、role、version、audit |
| W4 | `L58` **RAG Fundamentals: Embeddings, Retrieval & Grounding**：embedding、chunk、metadata、retrieval、grounding、citation 与 no-answer | `C7P04` **CareKind Voice AI: Speech-to-Text**：第一次接 AI，只完成 Voice → Editable Transcript → Human Confirmed Transcript | 录音、STT、transcript edit/confirm、失败处理和 manual fallback |
| W5 | `C7T05` **RAG Quality, Testing & Improvement**：failure taxonomy、golden cases、RAGAS 指标、人工抽检与单变量优化 | `C7P05` **CareKind Structured Care Documentation**：Confirmed Input → Structured Facts → Context → Progress Note Draft → Human Review | input/output schema、Context Builder、structured Draft、validation 与人工确认 |
| W6 | `L101` **Tool Calling, MCP & CLI Integration**：tool schema、MCP server/client、CLI、stdio、权限与排错 | `L60` **CareKind Policy RAG from Scratch** | policy corpus、local vector index、retrieved context、programmatic citation 与 no-answer |
| W7 | `L112` **Agents 基础 + ReAct Framework**：Agent 决策、Action/Observation loop、state、停止条件、failure modes 与 human approval | `C7P07` **RAG Testing & CareKind MVP Completion**：RAGAS、单变量改进、人工抽检和全链路验收 | Voice/Manual → Transcript → Facts → Policy RAG → Draft + Citation → Human Confirm → Version/Audit |
| W8 | `L122` **Multi-Agent Architectures**：单/多 Agent 边界、orchestrator、handoff、shared state、termination、成本和 human escalation | `L104` **Build and Connect a CareKind MCP Server**：将 W7 MVP 包装为四个 MCP tools 并连接本地 CLI | MCP server、4 个 tools、CLI 配置、permission matrix、audit log 与 troubleshooting notes |
| W9 | `L133` **Agent Memory & State Management**：task/session/long-term memory、read/write policy、scope、lifecycle、provenance、冲突和 poisoning | `L119` **Build a Bounded CareKind Agent**：使用 W8 MCP tools 实现受控单 Agent | state/action/observation schema、tool loop、allowlist、termination、reliability、human-review gate 与 trace |
| W10 | `L138` **Harness Engineering for Production AI Agents**：runtime、tool loop、context lifecycle、hooks、permission、budget、checkpoint、retry/replay、idempotency、human approval 与 trace | `C7P10` **Build Safe Long-Term Memory for the CareKind Agent**：为 W9 bounded agent 加入有 write gate、scope、lifecycle、permission 与 audit 的长期 Memory | memory contract、confirmed-fact write gate、scoped retrieval、conflict/correction/delete、poisoning tests 与跨 session recall |
| W11 | `L171a` **AI Governance、Evals & Risk Management**：AI risk register、eval gate、privacy、accountability、incident response | `C7P11` **Build the CareKind Production Agent Harness**：run lifecycle、adapters、hooks、budgets、checkpoint/replay、idempotency、human approval 与 trace | AgentHarness、RunStateStore、Hook/Policy middleware、checkpoint、idempotency protection、approval gate 与 failure-path trace |
| W12 | `L183` **Production AI System Design & Model Routing**：CareKind 全景架构、router 位置、任务/能力映射、质量/成本/延迟/隐私取舍、fallback、router evaluation 与系统设计答辩 | `C7P12` **Build the CareKind Model Router inside the Agent Harness**：model adapter、routing policy、provider allowlist、fallback、escalation、trace 与 router eval | ModelAdapter、ModelRegistry、RoutingPolicy、fallback chain、decision log、router eval set 与 quality/cost/latency report |
| W13 | — 理论线已结束 | `L171` **CareKind Production Readiness Review & Demo Day**（180 分钟）：验收软件工程前置，完成 production eval、AI safety/failure drill、release decision 与最终答辩 | eval/trace/red-team/release evidence pack、production demo 与 System Design Defense |

## 3. 10 个 Phase

| Phase | 主题 | 第七期定位 |
|---|---|---|
| 1 | Foundation & Setup | GenAI、Transformer、API 和开发环境基础 |
| 2 | Context Engineering | Context assembly、structured output 和 prompt failure analysis |
| 3 | RAG Systems | W6 从零搭建 Policy RAG，W7 用 RAGAS 做基础测试与改进；RAG 主线最多两周 |
| 4 | Capability Engineering | Tool calling、MCP、CLI 接入和后续生产系统集成 |
| 5 | Agent Systems | Agents 基础、ReAct、bounded agent 和 human approval |
| 6 | Multi-Agent Systems | Orchestration、handoff、角色权限与多 Agent RAG |
| 7 | Memory Systems | W9 建立 state/memory 心智模型，W10 为 CareKind Agent 实现安全的长期 Memory |
| 8 | Agent Harness Engineering | W10 Live 讲 production agent runtime、hooks、reliability、permission、human approval 与 observability hooks |
| 9 | Model Layer & Customization | Model selection、routing、open-weight models 与 Fine-Tuning 决策 |
| 10 | Governance, Safety, Observability & Evals | 风险治理、privacy、guardrails、red team、release gate、incident response |

## 4. CareKind AI 贯穿项目

CareKind 用 Australian aged care 场景训练学生做“有合规约束的 AI 产品”，不是医学诊断系统。

核心工作流：

```text
现场事实或语音
  → AI draft
  → PCW / EN / RN 人工检查与修改
  → 明确确认
  → audit trail
  → export / write-back
```

全期产品边界：

- 课堂只使用 synthetic 或 de-identified data。
- AI 只生成草稿、引用和风险提示，不作临床判断。
- 不由 AI 自动确定或提交 SIRS。
- CareKind 不是 system of record。
- 保存或写回前必须经过角色适当的 human confirmation。
- 每次模型调用、人工修改、确认、失败和升级都要留下可审计记录。

## 5. 当前确认的 W1–W13 实践线

这条实践线取代下方保留的旧实践提案。理论线独立排课并保留此前确认结果：W3 Context Engineering、W4 RAG Fundamentals、W5 RAG Quality/RAGAS、W6 Tool Calling/MCP/CLI、W7 Agents/ReAct、W8 Multi-Agent Architectures、W9 Agent Memory & State Management。理论与实践不要求同周实现同一能力。

| 周 | 实践课 | 新增能力 | 明确不做 |
|---|---|---|---|
| W1 | `C7P01 AI Coding + ADLC` | 理解 starter repo，完成产品范围、workflow、acceptance criteria、开发规则和任务拆分 | 不要求业务或 AI vertical slice |
| W2 | `C7P02 CareKind Product UI & Design System` | 完整产品信息架构与 UI；Voice 只是 Documentation 的一组输入状态 | 不接真实 backend 或 AI |
| W3 | `C7P03 CareKind Application & Care Workflow Foundation` | 基于 starter 完成 Resident → Shift → Task → Care Activity → Progress Note → Review → Confirm | 不调用任何 AI 模型 |
| W4 | `C7P04 CareKind Voice AI: Speech-to-Text` | 第一次接 AI：Voice → Editable Transcript → Human Confirmed Transcript | 不生成 Care Note，不做 Context/RAG |
| W5 | `C7P05 CareKind Structured Care Documentation` | Confirmed Input → Structured Facts → Context → Progress Note Draft → Human Review | 不做 RAG、Tools、Agent |
| W6 | `L60 CareKind Policy RAG from Scratch` | synthetic policy → chunk/embed/index/retrieve → grounded Draft + citation | 不做 RAGAS、GraphRAG、Agent |
| W7 | `C7P07 RAG Testing & CareKind MVP Completion` | RAGAS baseline、单变量改进、人工抽检、完整 MVP 集成与验收 | 不从零建设完整 eval framework/CI gate |
| W8 | `L104 Build and Connect a CareKind MCP Server` | 将 resident、shift/task、policy RAG 与 Draft services 包装为 MCP tools，并连接本地 CLI | 不做 Agent loop、Remote MCP、OAuth、自动 Confirm 或真实系统写回 |
| W9 | `L119 Build a Bounded CareKind Agent` | 使用 W8 MCP tools 完成 task state、最小 tool loop、allowlist、termination、reliability、human review 与 trace | 不做长期 resident memory、Multi-Agent、自动 Confirm 或真实系统写回 |
| W10 | `C7P10 Build Safe Long-Term Memory for the CareKind Agent` | confirmed-fact write gate、scoped retrieval、TTL、冲突/更正/删除、permission、audit 与跨 session recall | 不把 transcript、AI Draft 或模型推断直接写成事实；不做自动 Confirm 或真实系统写回 |
| W11 | `C7P11 Build the CareKind Production Agent Harness` | run lifecycle、model/tool/memory/policy adapters、hooks、budgets、checkpoint/replay、idempotency、human approval 与 trace | 不做 Model Routing、Remote MCP、云部署或完整 production evaluation |
| W12 | `C7P12 Build the CareKind Model Router inside the Agent Harness` | task/capability matrix、risk/privacy policy、model adapter、routing、fallback、escalation、trace 与 router eval | 不做 Remote MCP、云部署、production operations 或 Demo Day |
| W13 | `L171 CareKind Production Readiness Review & Demo Day` | 验收学生自助完成的软件工程前置；完成 production eval、tracing、AI red team、failure drill、release decision 与最终 Demo | 不在 Live 逐行教学 Remote MCP/Auth、部署、CI/CD、queue 或 health check |

W7 验收链路：

```text
Resident / Shift / Task
  → Voice or Manual Input
  → Human-Confirmed Transcript / Observation
  → Structured Facts
  → Policy Retrieval
  → Progress Note Draft + Citation
  → Human Review and Confirm
  → Version + Audit Trail
```

W7 结束时完成的是 CareKind 核心 Progress Note MVP。W8 将已完成能力标准化为本地 MCP tools；W9 构建 bounded Agent，W10 加入安全长期 Memory。Model Routing、完整 AI Evaluation 和 Governance 的后续落点继续单独确认。

### W8 · Multi-Agent Theory + CareKind MCP Practice

理论 Live（90 分钟）：

- 单 Agent 与 Multi-Agent 的边界（10 分钟）
- 什么时候不应该使用 Multi-Agent（10 分钟）
- Supervisor / Orchestrator（15 分钟）
- handoff 与 role-based routing（15 分钟）
- shared state、message contract 与 context isolation（15 分钟）
- 循环、重复工作、冲突与 token cost（10 分钟）
- human escalation、termination 与 auditability（10 分钟）
- CareKind PCW / EN / RN 架构判断（5 分钟）

实践 Live（120 分钟）：

- 定义 `get_resident_context`、`get_shift_tasks`、`search_policy`、`create_progress_note_draft` tool schema（20 分钟）
- 构建本地 MCP server（20 分钟）
- 将现有 services 接入 MCP tools（20 分钟）
- 配置 CLI client、stdio、command、args 与 env（15 分钟）
- 完成 tool discovery 与 manual calls（10 分钟）
- 加入 validation、role permission 与 audit log（15 分钟）
- 修复 path、env 与 protocol output 三类错误（10 分钟）
- MCP demo、permission matrix 与 troubleshooting notes（10 分钟）

`create_progress_note_draft` 只能创建 Draft。W8 不允许 Agent 自主循环、自动 Confirm、真实 aged-care system write-back、Remote MCP、OAuth 或云部署。

### W9 · Agent Memory Theory + Bounded Agent Practice

理论 Live（90 分钟）：

- Agent State 与 Memory 的区别（10 分钟）
- Task State、Working Memory 与 Session Memory（15 分钟）
- Episodic、Semantic 与 Preference Memory（15 分钟）
- memory read/write policy（10 分钟）
- user、resident、team、organisation scope 与权限（10 分钟）
- TTL、retention、update、delete 与 consent（10 分钟）
- 冲突、过期、provenance 与 memory poisoning（10 分钟）
- CareKind Memory architecture 与面试表达（10 分钟）

实践 Live（120 分钟）：

- 验证 W8 MCP tools 与权限边界（10 分钟）
- 定义 Agent State、Action 与 Observation schema（15 分钟）
- 实现最小 ReAct/tool loop（25 分钟）
- 加入 tool allowlist 与参数 validation（10 分钟）
- 加入 maximum steps、termination 与循环检测（15 分钟）
- 加入 timeout、retry 与 fallback（15 分钟）
- 接入 Human Review 与副作用边界（15 分钟）
- 测试失败路径并检查完整 trace（15 分钟）

W9 实践只使用 task/session state，不实现 long-term resident memory。未经确认的 transcript、AI Draft 或模型推断不得写成 resident fact；Agent 不能自动 Confirm、启动其他 Agent 或写入真实 aged-care system。

### W10 · Production Agent Harness Theory + Safe Memory Practice

理论 Live（90 分钟）：

- Agent、Agent SDK、Framework 与 Harness 的边界（10 分钟）
- 受控 model/tool loop 与 runtime lifecycle（10 分钟）
- Context assembly、truncation、compaction 与 result injection（10 分钟）
- Tool registry、schema validation 与 pre/post hooks（10 分钟）
- Permission、sandbox、side-effect boundary 与 human approval（10 分钟）
- Token、cost、time、step budget 与 termination（10 分钟）
- Checkpoint、retry、resume、replay 与 idempotency（10 分钟）
- Structured trace、metrics、evaluation hooks 与 model-routing insertion point（10 分钟）
- Production agent architecture review 与面试表达（10 分钟）

实践 Live（120 分钟）：

- 复查 W9 task/session state，确定哪些信息允许跨 session 保存（10 分钟）
- 设计 memory contract：type、source、scope、owner、status、TTL 与 provenance（20 分钟）
- 实现 write gate：只写入 human-confirmed facts（20 分钟）
- 实现按 resident、user、team、role 隔离的 scoped retrieval（20 分钟）
- 实现过期检测、冲突标记、更正、删除与禁止静默覆盖（20 分钟）
- 加入 permission、consent、audit log 与 memory-poisoning 防护（15 分钟）
- 接入 CareKind Agent，并测试跨 session recall、越权、过期和冲突路径（15 分钟）

W10 不把 vector store 等同于 Memory。未经人工确认的 transcript、AI Draft 和模型推断不能进入长期 resident memory；任何 memory 必须可追溯、可更正、可删除，并在读取时重新执行 scope 与 permission 检查。

### W11 · Governance Theory + Production Agent Harness Practice

实践 Live（120 分钟）：

1. 把 W9 Agent loop 重构成明确的 run lifecycle（15 分钟）
2. 拆分 model、tool、memory 与 policy adapter 接口（15 分钟）
3. 加入 pre-model、pre-tool、post-tool 与 post-output hooks（15 分钟）
4. 加入 step、token、cost、time budget、termination 与 cancellation（15 分钟）
5. 实现 durable checkpoint、resume 与 replay（20 分钟）
6. 实现 retry、idempotency key 与副作用保护（15 分钟）
7. 加入 permission policy、human approval 与 escalation（15 分钟）
8. 输出 structured trace，并测试 crash、replay 与 duplicate-call 路径（10 分钟）

当周交付为 `AgentHarness`、`RunStateStore`、model/tool/memory adapters、`HookRegistry`、policy middleware、checkpoint store、idempotency protection、human approval gate 与 structured trace。

### W12 · Production AI System Design + Model Routing Practice

理论 Live（90 分钟）：

1. CareKind production architecture 全景（10 分钟）
2. Model Router 在 Agent Harness 中的位置（10 分钟）
3. Task taxonomy 与 model capability matrix（15 分钟）
4. Quality、cost、latency、privacy 与 data residency 取舍（15 分钟）
5. Timeout、fallback、refusal、provider failure 与 human escalation（10 分钟）
6. Router evaluation 与 routing decision evidence（10 分钟）
7. Prompt、RAG、Tools、Memory、Routing 与 Fine-Tuning 的选择边界（10 分钟）
8. Production AI system design 答辩（10 分钟）

实践 Live（120 分钟）：

1. 定义 CareKind task taxonomy 与 model capability matrix（15 分钟）
2. 定义 risk、privacy、data residency 与 provider allowlist（15 分钟）
3. 建立统一 model adapter contract（15 分钟）
4. 实现 rule-based router 与 routing policy（20 分钟）
5. 实现 timeout、fallback、refusal 与 human escalation（15 分钟）
6. 把 router 接入 W11 Harness 的 hooks、budgets 与 trace（15 分钟）
7. 建立 router eval cases，测试错误路由与 provider failure（15 分钟）
8. 输出 quality、cost、latency 与 routing decision report（10 分钟）

W12 不包含 Career Readiness、薪资或简历内容，也不做 Demo Day。Remote MCP、部署、production operations 与最终答辩进入延长实践线。

### W13 · CareKind Production Readiness Review & Demo Day

W13 是一场 180 分钟最终实践，不再增加理论课。Remote MCP transport、Auth、secrets、部署、CI/CD、queue、health checks 等标准软件工程工作由学生课前自行完成，提交 deployed URL、CI 状态、health check、auth/permission test 与运行说明；Live 只验收证据，不逐行教学。

实践 Live（180 分钟）：

1. 验收 Remote MCP/Auth、部署、CI/CD、health check 与运行证据（15 分钟）
2. 运行 production eval cases、deterministic checks 与 LLM-as-a-Judge 人工校准（20 分钟）
3. 检查 Agent regression gate、Langfuse/等价 trace 与 latency/cost/tool-failure thresholds（15 分钟）
4. 测试 prompt injection、memory poisoning、越权和 PII 泄露（20 分钟）
5. 演练 model/provider/tool/memory failure、human escalation 与 kill switch（15 分钟）
6. 执行 release go/no-go、rollback 与 incident response tabletop（15 分钟）
7. CareKind production demo 与 System Design Defense（65 分钟）
8. 提交 eval、trace、red-team、release 与 architecture evidence pack（15 分钟）

没有达到 eval、security 或运行 threshold 的版本不能报告 production ready；学生可以展示 blocked release，但必须提供失败证据、影响范围与修复计划。

## 5A. Legacy：已被当前实践线取代的旧提案

以下内容仅保留讨论历史，不进入第七期当前排课。凡与“当前确认的 W1–W7 实践线”冲突，以当前实践线和 `public/outline.json` 为准。

### W1 · AI Coding + ADLC

第一周先建立受控开发循环，不把 AI Coding 简化成“让 Agent 多写代码”。

交付物：

- CareKind repository scaffold
- problem frame、PRD 与 non-goals
- repository rules / agent instructions
- acceptance criteria 与 test plan
- synthetic data boundary
- ADLC task board
- 最小 vertical slice

### W2 · Design System、UI & Animation

继续使用 W1 的 CareKind 仓库，不另做一次性 UI Demo。W2 只完成 `Care Note Drafting` 主流程，不同时扩展 Dashboard、Roster、Medication、Incident 或 Care Plan。

课前录播：

- `L29 The Transformer Architecture`（30 分钟）
- `L30 Input Embeddings`（15 分钟）

理论 Live（90 分钟）：

- 文本如何变成 token 与 embedding（10 分钟）
- Transformer 数据流：input → attention → layers → logits → next token（20 分钟）
- Attention 的工程直觉，不做矩阵推导（15 分钟）
- context window、lost-in-the-middle 与 hallucination（15 分钟）
- API anatomy：model、messages、system/user、structured output（15 分钟）
- temperature、top_p、max tokens 现场实验（10 分钟）
- Applied AI Engineer 面试表达（5 分钟）

课后完成 `L31 Transformer & Attention Lab`。完整 provider SDK、rate limit、retry、observability 与 API wrapper 不占 W2 Live。

实践 Live（120 分钟）：

- 检查 W1 CareKind vertical slice（10 分钟）
- 确定 PCW、EN、RN 的任务与界面权限（15 分钟）
- 建立 `DESIGN.md`、design tokens 与组件规则（20 分钟）
- 实现事实输入、AI Draft、Review 与 Confirmation（30 分钟）
- 补齐 generating、review、confirmed、failed、escalated 状态（20 分钟）
- 加入状态动画、loading feedback、reduced motion 与 accessibility（15 分钟）
- 现场 Design Review（10 分钟）

交付物：

- `DESIGN.md` 与 design tokens
- PCW / EN / RN role/permission matrix
- Care Note Drafting 可交互界面
- generating / AI Draft / Human Review / Confirmed / Failed / Escalated 状态
- accessibility、responsive 与 reduced-motion 规则
- Design Review 截图或录屏

界面验收：

- `AI Draft` 标签始终可见，Draft 不能直接成为正式记录。
- 显示 reviewer、review time 与修改记录。
- PCW、EN、RN 的可操作权限不同。
- Confirmed 与 Draft 在颜色、文案和操作上不能混淆。
- 模型失败时仍保留人工完成任务的路径。
- 只使用 synthetic data，不显示 AI 自动作出临床或 SIRS 判断。
- 动画只解释状态变化，不装饰高风险确认操作。

### W3 · Context Engineering + Single-model Baseline

W3 在 W2 Care Note UI 上接入真实模型，但不做 RAG。先建立可重复测试的 Context baseline，W4 才能据实比较加入 retrieval 后发生了什么。

理论 Live（90 分钟）：

- Prompt Engineering 与 Context Engineering 的区别（10 分钟）
- System Policy、User Role、Task、Runtime Data、Output Contract（15 分钟）
- Context Assembly：select → structure → order → compress → validate（15 分钟）
- Structured Output、JSON Schema 与 runtime validation（15 分钟）
- Chain of Thought、task decomposition、plan-then-execute、self-check（15 分钟）
- 不可信输入、冲突指令、过期信息与 prompt injection 预告（10 分钟）
- CareKind Context Blueprint 与面试表达（10 分钟）

Chain of Thought 保留为重要 reasoning pattern，但不要求向用户展示或持久化模型的隐藏推理。产品记录 input、output、decision、evidence 与 human action；ReAct 在 Agent 周继续展开。

实践 Live（120 分钟）：

- 检查 W2 Care Note Drafting UI（10 分钟）
- 定义 CareKind Context Contract（15 分钟）
- 编写 versioned system policy 与禁止自动化边界（20 分钟）
- 实现 role、synthetic resident snapshot、facts、task、schema context builder（20 分钟）
- 接入模型、JSON Schema 与 runtime validation（20 分钟）
- 接入 AI Draft → Review → Edit / Reject / Confirm 与版本记录（20 分钟）
- 运行 10 条 synthetic baseline cases 并记录 failure log（15 分钟）

W3 不包括 policy retrieval、vector database、long-term memory、tool calling 或真实 external write-back。

当周交付：

- CareKind Context Architecture 与 versioned system policy
- role context、context builder、JSON Schema 与 validation
- AI Draft → Human Review → Confirmed workflow
- 10 条 synthetic baseline cases 与 failure log
- `L37a CareKind Context Blueprint Quest`

验收条件：

- 只使用 synthetic data，AI 输出默认标记为 Draft。
- schema validation 失败不能进入 Review。
- 不允许 AI 作诊断、用药决定或 SIRS 判断。
- Confirm 前记录 reviewer，修改 Confirmed 记录时生成新版本。
- model、context、prompt 版本可追溯；模型失败后仍可人工填写。

### W4 · RAG Fundamentals + CareKind Policy RAG

W4 在 W3 Context Contract 上增加 retrieved policy chunks、document metadata 与 citation identifiers。Resident snapshot 和 observation facts 仍由 W3 context builder 按任务注入，不放入 vector store。

课前：

- `L54 Introduction to Embeddings`（30 分钟）
- `L55 RAG 基础 Lab`（30 分钟）
- `L57 Embedding Models vs LLM Chat Models`由 Ada 选择历史最佳 20–30 分钟片段；完整 90 分钟版本作为选修

理论 Live（90 分钟）：

- RAG 在 Context Architecture 中的位置，以及与 Memory、Fine-Tuning 的区别（10 分钟）
- Embedding、vector 与 semantic similarity（15 分钟）
- ingestion、chunking、metadata 与 indexing（15 分钟）
- retrieval、top-k、similarity score 与 access boundary（15 分钟）
- grounding、programmatic citation 与 no-answer policy（15 分钟）
- Naive RAG failure modes；Hybrid、Rewrite、Reranking 预告（10 分钟）
- RAG 系统设计面试题与 CareKind architecture review（10 分钟）

实践 Live（120 分钟）：

- 准备 synthetic CareKind policy corpus（10 分钟）
- 实现 chunking 与 metadata schema（20 分钟）
- 生成 embeddings 并建立 local vector index（20 分钟）
- 实现 top-k similarity retrieval（20 分钟）
- 把 retrieved chunks 接入 W3 context builder（15 分钟）
- 生成 grounded answer 并绑定 document/chunk citation（15 分钟）
- 实现 no-answer fallback 与 retrieval failure log（10 分钟）
- 复用 W3 baseline cases，记录加入 RAG 后的实际结果（10 分钟）

W4 不使用 LangChain，不预设“准确率提升”百分比。W5 只通过 RAGAS、failure analysis 和单变量实验做基础改进；完整 production evaluation、observability、GraphRAG 和云部署留到后续阶段。

当周交付：

- synthetic policy corpus、chunker 与 metadata schema
- embedding/index pipeline、local vector index 与 retriever
- grounded answer、programmatic citation 与 no-answer policy
- W3 vs W4 实际结果对比与 retrieval failure log

验收条件：

- vector store 不保存 resident personal data。
- 答案必须绑定真实 retrieved chunk；citation 由程序绑定 document/chunk ID。
- 没有足够证据时返回“不足以回答”，不允许模型发明 citation。
- 政策文本不自动触发临床、用药或 SIRS 决策。

### W5 · RAG Quality, Testing & Improvement

W5 是第二个也是最后一个 RAG 主线周。目标不是从零建设完整 evaluation platform，而是让学生能运行 RAGAS、读懂结果、定位 failure，并用单变量实验改善 W4 的 CareKind RAG。

课前必修：

- `L90 RAGAS Framework`（45–60 分钟）：evaluation dataset、Faithfulness、Answer Relevancy、Context Precision、Context Recall 与人工抽检边界

理论 Live（90 分钟）：

- 回顾 W4 RAG 数据流与 baseline（10 分钟）
- retrieval、answer、citation 与 no-answer failure taxonomy（15 分钟）
- golden cases 与 RAGAS 四项基础指标（20 分钟）
- 读懂指标、识别误判并进行人工抽检（15 分钟）
- chunk、top-k 与 metadata filter 的单变量实验（15 分钟）
- Hybrid Retrieval、Reranking 与 production evaluation 预告（10 分钟）
- RAG 测试与优化的面试表达（5 分钟）

实践 Live（120 分钟）：

- 运行 W4 CareKind RAG baseline（10 分钟）
- 导入老师提供的 10 条 golden cases 与 RAGAS starter（15 分钟）
- 运行 RAGAS 并保存 baseline 指标（20 分钟）
- 定位 retrieval、answer 与 citation failure（15 分钟）
- 只修改 chunk、top-k、metadata filter 或 prompt 中一个变量（25 分钟）
- 重新运行 RAGAS并比较实际结果（15 分钟）
- 人工抽检两条指标与实际质量不一致的案例（10 分钟）
- 提交简短 RAG testing and improvement report（10 分钟）

W5 延后内容：LLM-as-a-Judge 深入、完整 evaluation framework、dataset versioning、CI regression gate、GraphRAG、Langfuse 与 AWS/OpenSearch 部署。它们在后续 AI Evaluation、Production Integration 或进阶录播/Lab 中处理，不增加第三个 RAG Live 周。

### W6 · Tool Calling, MCP & CLI Integration

W6 把 W5 已测试的能力包装为标准工具，但不引入 Agent 自主循环。调用顺序仍由代码或用户明确控制。

理论 Live（90 分钟）：

- Function/tool calling：schema、arguments 与 structured result（15 分钟）
- MCP server、client、tools、resources 与 prompts（15 分钟）
- MCP 与普通 API、tool calling、Agent 的边界（10 分钟）
- CLI integration：command、args、env 与 working directory（15 分钟）
- stdio lifecycle、stdout protocol 与 stderr logging（10 分钟）
- tool discovery、manual call 与结构化结果检查（10 分钟）
- secrets、permission、tool allowlist 与 human confirmation（10 分钟）
- path、env、启动和协议输出故障（5 分钟）

实践 Live（120 分钟）：

- 定义 `search_policy` 与 `get_resident_context` tool contract（15 分钟）
- 构建 CareKind MCP server 与结构化返回值（25 分钟）
- 加入参数 validation、最小权限与 synthetic data boundary（15 分钟）
- 从终端启动 server 并验证 stdio transport（15 分钟）
- 配置 CLI client，完成 tool discovery 与 manual calls（20 分钟）
- 制造并修复 path、env 与 stdout protocol 三类错误（15 分钟）
- 加入 audit log 并提交 CLI troubleshooting notes（15 分钟）

W6 延后内容：Remote MCP、HTTP transport、OAuth、production secrets、云部署、circuit breaker 和集中式 tracing。以上内容留到后续 Production Integration。

### W7 · Agents 基础 + ReAct Framework

W7 当前只确认理论课，实践课尚未确定。现有 `L119 Build a Bounded CareKind Agent` 保留为候选，不进入已确认排课。

理论 Live（90 分钟）：

- Workflow、tool-using application 与 Agent 的区别（10 分钟）
- ReAct：Action、Observation 与下一步决策（15 分钟）
- Agent state、task state 与 tool result（15 分钟）
- maximum steps、停止条件与循环检测（15 分钟）
- timeout、retry、fallback 与 partial failure（15 分钟）
- side effects、human approval 与权限边界（10 分钟）
- Agent failure modes 与系统设计面试表达（10 分钟）

W7 不要求向用户展示或持久化模型隐藏推理。实践主题、范围、CareKind 交付和验收条件将在下一轮讨论后补充。

### W4 之后仍需排定的重要内容

- **Long-term Memory**：保留为重要 Live 候选，放在 Agent 基础之后；不与 W4 RAG 混讲。具体周次待讨论。
- **Tool Calling**：已排入 W6，与 MCP 和 CLI 一起讲；W6 使用确定性调用，W7 才进入 Agent 决策与 ReAct loop。
- **Prompt Injection**：W3 只建立 context trust boundary；W11 完整讲 indirect injection、tool poisoning、data exfiltration 与 red team。
- **Chain of Thought**：W3 保留 reasoning patterns；Agent 周继续讲 ReAct 的 reason/act loop，不把展示隐藏推理作为产品要求。
- **W7 实践课**：尚未确认；`L119` 只作为候选，不能视为正式安排。

## 6. Legacy：旧 W0–W4 学习顺序与 Lesson Pool 快照

本节是重排前快照，不能继续作为学生 Required 顺序。W3–W7 已重排，完整 Pool 将在 W8 讨论前重新核算。

W0–W4 当前涉及 Phase 1、Phase 2、Phase 3（截至 W4）和三节新增实践课，共 94 个 lesson 条目。第七期不把这 94 个条目全部推给学生：

- **固定主线 29 个**：所有学生按下面顺序完成。
- **条件前置 14 个**：只在诊断未通过时补齐，不计入所有人的固定周计划。
- **Lesson Pool 51 个**：没有进入 W0–W4 学习顺序；后续逐周讨论时再取用、转录播、设为选修或保留 Legacy。

同一个 lesson 只能出现在一个位置。Pool 中的课不允许同时出现在学生的 Required 列表。

### W0 · 开课前

| 顺序 | Lesson | 形式 | 作用 |
|---|---|---|---|
| 1 | `L01 Pre-work：必要知识储备` | Information | 看懂入学标准和补基础方式 |
| 2 | `L11 Preparation：开发环境配置` | Information | 配置本地开发环境 |
| 3 | `L21 开课讲解会` | Video | 了解第七期节奏、CareKind 项目与交付规则 |
| 4 | `L16a 装好你的 AI Engineer 工作台` | Quest | 验证 repo、terminal、runtime 与基本工具可用 |

条件前置：

- Python / Git 未通过诊断：`L02–L07`
- Python API 未通过诊断：`L12`
- AI/ML 基础未通过诊断：`L22–L26`
- Prompt 基础未通过诊断：`L35 Zero-shot`、`L36 Few-shot`

### W1 · 固定顺序

| 顺序 | Lesson | 时机 |
|---|---|---|
| 1 | `L17 Lab: 第一次 LLM 体验` | 理论课前 |
| 2 | `L18 Lab: LLM 核心概念` | 理论课前 |
| 3 | `L16 GenAI Foundations & AI Engineer Landscape` | 理论 Live |
| 4 | `C7P01 AI Coding + ADLC：CareKind 项目启动` | 实践 Live |

W1 Required 预计 270 分钟（4.5 小时）。W0 与条件前置另计。

### W2 · 固定顺序

| 顺序 | Lesson | 时机 |
|---|---|---|
| 1 | `L29 The Transformer Architecture` | 理论课前录播 |
| 2 | `L30 Input Embeddings` | 理论课前录播 |
| 3 | `L28 How LLMs Work: Transformer, Tokens & API Behaviour` | 理论 Live |
| 4 | `L31 Lab: Transformer & Attention` | 理论课后 |
| 5 | `L32 Lab: 模型参数调优` | 理论课后 |
| 6 | `C7P02 CareKind UI System` | 实践 Live |
| 7 | `L19 Lab: LLM API 实操` | W3 前置作业 |
| 8 | `L13 Lab: Python JSON 处理` | W3 前置作业 |

W2 Required 预计 375 分钟（6.25 小时），其中两场 Live 共 210 分钟。

### W3 · 固定顺序

| 顺序 | Lesson | 时机 |
|---|---|---|
| 1 | `L37b 自学：Context Engineering 基础` | 理论课前 |
| 2 | `L37 Context Engineering & Reasoning Patterns` | 理论 Live |
| 3 | `L38 Lab: Context Engineering` | 理论课后 |
| 4 | `L40 Lab: Chain of Thought 推理` | 理论课后 |
| 5 | `L41 Lab: System Prompt 设计` | 实践课前 |
| 6 | `L43 Lab: JSON Schema 结构化输出` | 实践课前 |
| 7 | `C7P03 CareKind Context Engine` | 实践 Live |
| 8 | `L37a Quest: CareKind Context Blueprint` | 课后验收 |

W3 Required 预计 395 分钟（6 小时 35 分钟），其中两场 Live 共 210 分钟。

### W4 · 固定顺序

| 顺序 | Lesson | 时机 |
|---|---|---|
| 1 | `L54 Introduction to Embeddings` | 理论课前录播 |
| 2 | `L55 Lab: RAG 基础` | 理论课前 |
| 3 | `L58 RAG Fundamentals: Embeddings, Retrieval & Grounding` | 理论 Live |
| 4 | `L60 CareKind Policy RAG from Scratch` | 实践 Live |
| 5 | `L60a Quest: 本机跑通你的第一个 RAG` | 课后验收 |

W4 Required 预计 315 分钟（5 小时 15 分钟），其中两场 Live 共 210 分钟。

### W5 · 已确认顺序

| 顺序 | Lesson | 时机 |
|---|---|---|
| 1 | `L90 RAGAS Framework` | 理论课前必修录播 |
| 2 | `C7T05 RAG Quality, Testing & Improvement` | 理论 Live |
| 3 | `L69 CareKind RAG Testing with RAGAS` | 实践 Live |

W5 Required 预计 255–270 分钟，其中两场 Live 共 210 分钟。W5 是最后一个 RAG 主线周。

### W6 · 已确认顺序

| 顺序 | Lesson | 时机 |
|---|---|---|
| 1 | `L98 Function Calling + Tool Use` | 理论课前录播 |
| 2 | `L101 Tool Calling, MCP & CLI Integration` | 理论 Live |
| 3 | `L104 Build and Connect a CareKind MCP Server` | 实践 Live |

W6 从确定性 tool calling 进入本地 MCP server/client 与 CLI integration；不引入 Agent 自主循环。Remote MCP、OAuth 与生产部署不进入本周。

### W7 · 当前确认范围

| 顺序 | Lesson | 时机 |
|---|---|---|
| 1 | `L111 Agents 基础` | 理论课前录播 |
| 2 | `L112 Agents 基础 + The ReAct Framework` | 理论 Live |
| 3 | W7 Practice Workshop | **待讨论** |

`L119 Build a Bounded CareKind Agent` 保留为实践候选，不计为已确认内容。

### Lesson Pool · 51 个未排条目

| Pool | Lesson codes | 后续处理原则 |
|---|---|---|
| Infrastructure / Production Pool | `L08, L09, L10, L14, L64, L65, L66, L66a, L66b, L68, L68a, L68b` | AWS、PDF ingestion、rate limit、成本与部署；W5 以后按需要取用 |
| Recording / Reference Pool | `L15, L15a, L27, L27a, L29a, L34, L34a, L39, L41a, L41b, L42, L47, L47a, L47b, L48, L50, L52, L52a, L52b, L53, L53a, L53b, L56, L57, L59, L60b, L61, L61a, L62` | Ada 审核历史录像；去重后作为补充、选修或教师参考，不进入当前 Required 顺序 |
| Evaluation Pool | `L49` | 留到 W6 Evals 讨论，不提前塞进 W3 |
| Replaced / Legacy Pool | `L20, L33, L33a, L44, L45, L46, L51, L63, L67` | 已被第七期 Live/Practice、CareKind 主线替代，或不适合 W1–W4；内容保留但不进入当前期主线 |

Pool 不是删除列表。后续讨论 W5–W12 时，每取出一个 lesson，就必须从 Pool 移到对应周并写清前置/后置；仍未安排的课继续留在 Pool。

## 7. Live、录播、Lab 与 Quest

### 必须 Live 的阶段课

- GenAI Foundations & AI Engineer Landscape
- How LLMs Work: Transformer, Tokens & API Behaviour
- Context Engineering
- RAG 基础
- Agents 基础
- ReAct Framework
- Multi-Agent Architectures
- MCP/CLI、Agents/ReAct、Multi-Agent、Model Routing、Governance 和每周实践课

这些课承担阶段切换、架构判断、面试表达和现场问答。历史录像只能作为预习或复习，不能替代第七期 Live。

### 转为录播的稳定知识

不再占用正式直播的理论课保留在大纲中，并由 Ada 从前五期录像中选最佳版本。第一批审核范围：

- The Four Prototyping Patterns
- Introduction to Embeddings
- Embedding Models vs LLM Chat Models
- Rate limits、retries 与 API 操作基础
- LangChain constructs、LCEL 与 tracing 基础
- RAG metrics、RAGAS、Langfuse 基础
- Function Calling 与 Agent SDK 对比
- A2A、Agent Ops 与 Memory 基础
- Skills / Claude Skills 概念与配置
- Synthetic Data Generation 基础
- Fine-Tuning 的角色、PEFT、LoRA、QLoRA 原理
- Model weights、GPU loading、Sentence Transformers 操作基础
- AI Evaluation 的 eval set、baseline、regression gate 方法

录像选择标准：技术正确、讲解清楚、音画质量、案例完整。工具 UI、SDK API 或模型版本明显过时的录像不得直接复用，需要重录局部内容或补一段更新说明。

### Lab 与 Quest

- 代码操作、工具熟悉和可自动验收的练习进入 Lab。
- Proposal、architecture review、eval report、governance evidence 和阶段项目进入 Quest。
- 深度 LoRA / QLoRA / Unsloth 训练实操作为选修，不占 25 场正式直播。

## 8. Model Routing 与 Fine-Tuning

### Model Routing

Model Routing 是 Applied AI Engineer 面试和生产系统设计的重点，不删除。W10 Harness 理论先讲 router insertion point，`L149` 必修录播覆盖模型选择与 Fine-Tuning 决策；W12 用 `L183` 理论 Live 和 `C7P12` 实践 Live 完成系统设计与代码实现。学生必须能解释并实现：

- 为什么某类任务进入某个模型。
- 如何在质量、成本、延迟和数据要求之间取舍。
- fallback、timeout、rate limit 和 provider failure 如何处理。
- router 本身如何 evaluation，而不是只评估下游模型。
- 高风险任务何时必须转人工或拒绝自动处理。

### Fine-Tuning

Fine-Tuning 不删除，但从大段工具实操简化成工程决策能力：

- Prompt、RAG、tool use 与 Fine-Tuning 的边界。
- 数据量、标签质量、隐私、训练成本和维护成本。
- SFT、PEFT、LoRA、QLoRA 的原理与适用场景。
- 如何设计 baseline 和 eval，证明 Fine-Tuning 值得做。

学生不需要在正式直播中追逐某个短期工具版本。LoRA / QLoRA / Unsloth 的完整训练流程保留为录播与选修 Lab。

## 9. Governance 的定义与落点

Governance 不是一节“合规介绍”，而是贯穿 ADLC 的责任和证据系统：

- **风险分类**：识别 intended use、affected users、harm、misuse 和禁止场景。
- **数据治理**：consent、privacy、retention、access、data residency 和 deletion。
- **模型治理**：model/vendor selection、版本记录、变更评审和已知限制。
- **评估治理**：eval set、threshold、release gate、regression 和人工审批。
- **运行治理**：monitoring、audit log、incident response、rollback 和责任人。
- **供应商治理**：第三方模型/工具风险、SLA、数据处理和退出方案。

W3 开始执行 governance by design；W10 把 retention、consent、permission、provenance 和 deletion 写进 Agent Memory；W11 将治理控制接入 Production Agent Harness；W13 形成并展示完整 Governance Pack 与 release evidence。

## 10. 第七期完成标准

学生毕业时必须能提交并解释：

1. 一个可运行的 CareKind AI 产品切片。
2. RAG 与 Agent 的 architecture diagram。
3. 可重复运行的 eval harness 与结果。
4. Model Routing policy、fallback、router eval 与成本/质量/延迟取舍证据。
5. Human-in-the-loop、role permission 和 audit trail。
6. Risk register、red-team report、release checklist 与 incident runbook。
7. 面向面试的系统设计表达和项目复盘。

## 11. 与第五期对比

第五期冻结基线保存在 [`V4_V5_AUDIT.md`](V4_V5_AUDIT.md)。第七期的主要变化是：

- 10 个 Phase 保留，不删除过去五期积累的知识内容。
- 正式直播为 25 场：W1–W12 每周一场理论与实践，W13 增加一场 180 分钟最终实践。
- W1 即进入 AI Coding + ADLC，W2 完成完整产品 UI，W3 交付非 AI Care Workflow，W7 完成 CareKind MVP。
- RAG、Agents、ReAct、Multi-Agent 继续 Live。
- Model Routing 在 W12 完成理论与实践；Fine-Tuning 深度实操转录播/选修。
- Governance 从 Phase 10 的总结课前移为 W3 开始执行的贯穿要求。

本文件是第七期正式排课与交付视图；lesson 的字段、步骤、类型和直播标记以 [`public/outline.json`](public/outline.json) 为准。

## 12. 第七期最终结构总结

### 12.1 课程规模

| 项目 | 当前确认值 |
|---|---:|
| 理论 Live | 12 场 × 90 分钟 = 18 小时 |
| 实践 Live | 12 场 × 120 分钟 + W13 180 分钟 = 27 小时 |
| 正式直播 | 25 场，共 45 小时 |
| 理论周期 | W1–W12 |
| 实践周期 | W1–W13 |
| 贯穿项目 | CareKind AI · Australian Aged Care |

### 12.2 学习依赖链

```text
W1  AI Coding + ADLC
 → W2  Product UI & Design System
 → W3  Non-AI Care Workflow Foundation
 → W4  Voice AI / Confirmed Transcript
 → W5  Structured Care Documentation
 → W6  Policy RAG
 → W7  RAGAS + CareKind MVP
 → W8  MCP Tools
 → W9  Bounded Agent
 → W10 Safe Long-Term Memory
 → W11 Production Agent Harness
 → W12 Model Routing
 → W13 Production Readiness Review & Demo Day
```

理论和实践是独立轨道：理论可以先建立架构心智模型，实践按 CareKind repository 的真实依赖逐步落地，不为了同周对齐而提前实现尚无基础的能力。

### 12.3 最终交付

学生最终必须提交：可运行 CareKind 产品、RAG/MCP/Agent/Memory/Harness/Router 架构、eval dataset 与结果、structured traces、human approval 与 audit evidence、red-team report、release decision、rollback/incident runbook，以及现场 System Design Defense。

CareKind 始终使用 synthetic 或 de-identified data；AI 只创建 Draft，不作临床判断，不自动 Confirm，不自动确定 SIRS，也不作为 aged-care system of record。

## 13. 第七期大纲质量审计 · 2026-08-25

### 13.1 审计范围与结论

本次审核覆盖 25 场正式 Live、W1–W13 学习顺序、第五期冻结基线、录播候选、CareKind 交付链、JSON 机器字段和 production readiness 边界。按 `training-outline-optimizer` 的通用六维规则，正式 Live 层得分为 **78.1/100（GOOD）**。

| 维度 | 得分 | 审核结论 |
|---|---:|---|
| Description Quality | 60.4 | 摘要具体但偏短；详细内容已进入 `learningMaterial` 和 steps |
| Knowledge Points | 100 | 25 场 Live 均已从具体步骤生成 5–8 个知识点 |
| Metadata Completeness | 100 | duration、英文标题、level、week、track、session order 和确认状态齐全 |
| Lesson Type Diversity | 20 | 注册外壳统一为 `Lesson`；课堂内部实际包含 24 种 step type，不应为刷分改坏课程 schema |
| Course Info Quality | 100 | objective、highlights、features、suitable 与 description 齐全 |
| Ordering & Structure | 100 | 25 场 session 有唯一 week、track 和 chronological order，依赖链完整 |

结论：核心 Live 主线不缺新的必修周次。当前缺口集中在课前交付包、真实录像选择、最终验收用例和旧文档清理，不建议继续增加概念课。

### 13.2 已确认的新亮点

1. **每周一场理论 + 一场独立实践**：理论负责模型、架构和工程判断；实践不是附属 Lab，而是一条从 0 开始搭建完整 Agent 产品的连续 Live 主线。
2. **一个 repository 从产品底座长成 production Agent**：W1 从 CareKind starter、ADLC、scope、acceptance criteria 和 repo rules 启动，之后不换项目，持续加入 UI、workflow、Voice、RAG、MCP、Agent、Memory、Harness、Routing 和 production evidence。
3. **第一次 AI 接入有明确边界**：W4 只完成 Voice → Editable Transcript → Human Confirmed Transcript，避免首次调用模型就跨越到 RAG、Agent 和自动写回。
4. **RAG 主线收束为两周**：W6 从零搭建，W7 用 RAGAS 做基础测试与 MVP 验收；GraphRAG、OpenSearch 和完整云平台不挤占主线。
5. **Agent 工程形成连续阶梯**：MCP Tools → Bounded Agent → Long-Term Memory → Production Harness → Model Routing → Production Review。
6. **Harness Engineering 成为正式 Live 和代码实践**：不把“用了 Agent SDK”误写成 production agent，要求 lifecycle、hooks、budget、checkpoint/replay、idempotency、approval 和 trace。
7. **Governance by design**：从 W3 trust boundary 开始，延伸到 Memory lifecycle、permission、eval threshold、release decision、rollback 和 incident evidence。
8. **保留面试重点，降低工具追逐**：Model Routing 进入 W12 理论与实践；Fine-Tuning 保留工程决策和必修录播，LoRA/QLoRA/Unsloth 深度操作转选修。
9. **标准软件工程与 AI-specific production 分开**：Remote MCP/Auth、部署和 CI/CD 由学生按模板完成；Live 时间用于 eval、Agent security、failure drill 和 release judgement。
10. **合规型真实场景贯穿**：CareKind 用 Australian aged care paperwork、role permission、human confirmation、version 和 audit trail 约束每个 AI 能力。

### 13.3 仍需完成的 P0/P1 工作

| 优先级 | 缺口 | 完成标准 |
|---|---|---|
| P0 | W13 Production Starter Pack 尚未制作 | deployment/CI/env/health/permission/release/incident templates 可下载并能在 starter repo 跑通 |
| P0 | Ada 前五期录像审核尚未执行 | 每个必修录播填入选中期次、视频 ID、技术时效结论、需补录片段和负责人 |
| P0 | W13 Demo rubric 尚未按班级组数落定 | 明确每组 Demo/Q&A 时间、评分权重、production-ready/blocked/fail 判定和必交 evidence |
| P1 | Voice AI production cases 尚未进入最终 dataset | 覆盖澳洲口音、背景噪声、长录音/中断、edit rate、consent、retention/delete、PII 和 manual fallback |
| P1 | Agent prompt-injection 测试仍需细化 | 增加 untrusted source → sensitive sink、tool-result injection、data exfiltration 和 silent side-effect cases |
| P1 | MCP/Auth 虽不占 Live，安全验收还需模板化 | 检查 least privilege、token audience、禁止 token passthrough、secret storage 和 role scope |
| P1 | Aged-care information-management cases 需补入 eval | 覆盖 accurate/current records、consent withdrawal、correction、right information/right role 和 offline fallback |
| P2 | Legacy 快照仍有旧 W7/W12 说法 | 保留历史但统一标记，不允许搜索结果把 Legacy 当正式排课 |

### 13.4 Advanced Track，不属于核心缺失

- Multi-Agent 实践：理论保留 Live；CareKind 默认使用 bounded single Agent，只有出现可证明的独立角色、隔离和 handoff 需求才进入选修。
- GraphRAG、AWS/OpenSearch：作为大型图关系或云检索部署选修，不是基础 Policy RAG 的毕业门槛。
- Open-weight/vLLM self-hosting：作为有 GPU、data residency 或成本需求时的进阶路线。
- Fine-Tuning、LoRA、QLoRA、A2A：保留录播与 Lab，不增加核心 Live 周次。

### 13.5 外部依据与审计判断

- OpenAI 的 Agent 指南把 model、tools、instructions、guardrails、eval baseline 和 human intervention 作为基本组成；当前 W7–W13 已覆盖这些边界：[A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)。
- Anthropic 建议优先使用简单、可组合的模式而非不必要的复杂框架；这支持 CareKind 默认 bounded single Agent、Multi-Agent 实践转选修的决定：[Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)。
- MCP 官方授权规范要求 HTTP transport 使用 OAuth 安全实践、resource/audience binding，并禁止危险的 token 处理方式；因此即使 Auth 不占 Live，也必须进入 W13 前置验收：[MCP Authorization](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization)。
- NIST AI RMF/GAI Profile强调在 AI 生命周期内持续 govern、map、measure、manage 风险；这支持 Governance 从 W3 贯穿到 W13，而不是只放一节合规介绍：[NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)。
- 澳洲 Aged Care Quality Standards 要求信息准确、完整、及时可访问并按 informed consent 管理；这支持 confirmed-fact write gate、role scope、correction/delete 和 offline fallback：[Information management](https://www.agedcarequality.gov.au/strengthened-quality-standards/organisation/information-management)。
- OAIC 要求 privacy by design、数据准确性和与风险相称的测试；这支持 Voice/Memory/PII cases 进入最终 eval dataset：[OAIC generative AI privacy guidance](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-developing-and-training-generative-ai-models)。
- Prompt injection 不能只靠输入分类器，必须限制攻击成功后的影响、敏感 actions 和 data sinks；W13 仍需补 source-to-sink 与 exfiltration cases：[Designing AI agents to resist prompt injection](https://openai.com/index/designing-agents-to-resist-prompt-injection/)。
