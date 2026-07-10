# 官方考纲事实表 · Claude Certified Developer – Foundations（CCDV-F）

> **来源**：Anthropic 官方《Claude Certified Developer – Foundations Exam Guide》**Version 1.0 · Effective July 2026**，14 页。原件：`curriculum/_cert-official-guides/CCDV-F_Developer-Foundations_v1.0_Jul2026.pdf`（gitignore，版权材料）。
>
> **四门证共用的报名链路、考试政策、合规红线不在本文件里** —— 见 [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md)。本文件只写 CCDV-F 独有的事实。
>
> 本文件是**事实真相源**；`DESIGN.md` 是**话术真相源**。冲突以本文件为准。

---

## 一、Exam Details（官方原表）

| 项 | 官方值 |
|---|---|
| Credential | Claude Certified Developer – Foundations |
| **Exam code** | **CCDV-F** |
| Number of items | **53**（⚠️ 不是 60） |
| Item format | 单选 + 多选混合；每题标明该选几个 |
| Time limit | **120 分钟** |
| Delivery | 监考制：线上监考 和/或 考场 |
| Passing score | 100–1,000 量表分，**720** 及格 |
| **Exam fee** | **$125 USD** |
| Validity period | 自授予日起 **12 个月** |
| Result reporting | 通过/不通过 + 量表分；成绩单附各 domain 答对百分比 |

**无场景抽题结构。无前置要求**（"There are no mandatory prerequisites or courses required to sit this exam."）。

**53 题 / 120 分钟 = 每题约 2.26 分钟**，比 CCAR-F（60 题）宽裕，比 CCAR-P（63 题）宽裕更多。

---

## 二、Blueprint（官方八域权重 + 子技能权重）

这是四门里唯一给到**子技能级权重**的考纲。百分比精确到小数位。

| Domain | Content Domain | Weight |
|---|---|---|
| 1 | Agents and Workflows | 14.7% |
| 2 | **Applications and Integration** | **33.1%** ← 权重压倒性最高 |
| 3 | Claude Code | **3.1%** |
| 4 | Eval, Testing, and Debugging | **2.6%** ← 最低 |
| 5 | Model Selection and Optimization | 16.8% |
| 6 | Prompt and Context Engineering | 11.0% |
| 7 | Security and Safety | 8.1% |
| 8 | Tools and MCPs | 10.6% |

### 子技能权重（决定复习时间怎么分）

| Domain | 子技能 | 权重 |
|---|---|---|
| 1 | Agent Architecture | 4.5% |
| 1 | Agent Construction with Claude | 5.3% |
| 1 | Agent Patterns and Frameworks | 4.9% |
| **2** | Understanding Requirements | 3.4% |
| **2** | Systems Life Cycle | 2.8% |
| **2** | Claude API Mechanics | **6.8%** |
| **2** | Software Engineering Foundations | **7.4%** |
| **2** | **Claude Application Design** | **8.6%** ← 单项最高 |
| **2** | Configuration Management | 4.1% |
| 3 | Claude Code Operation | 3.1% |
| 4 | Debugging and Error Handling | 2.6% |
| 5 | LLM Fundamentals | 5.2% |
| 5 | Technical Fundamentals | 6.1% |
| 5 | Model Selection and Tradeoffs | 2.7% |
| 5 | Cost and Token Management | 2.8% |
| 6 | Context Engineering | 3.8% |
| 6 | Prompt Engineering | 4.6% |
| 6 | Output Handling | 2.6% |
| 7 | AI Application Security | 3.2% |
| 7 | Guardrails and Safe Deployment | 2.3% |
| 7 | Claude Hooks | 1.0% |
| 7 | Identity, Secrets, and Key Management | 1.6% |
| 8 | Tool Implementation | 4.4% |
| 8 | MCP Server Development | 2.1% |
| 8 | Agentic Customization | 4.1% |

### 🚨 三个反直觉的权重事实

1. **Claude Code 只占 3.1%。** 这门叫"Developer"的考试里，Claude Code 几乎不考。谁要是照着 CCAR-F 的复习方法猛刷 Claude Code，方向就跑偏了（CCAR-F 里 Claude Code 是 20%）。
2. **Eval / Testing / Debugging 只占 2.6%**，是全考纲最低。
3. **Applications and Integration 独占 33.1%**——三分之一。其中 Software Engineering Foundations（7.4%，REST / JSON / 异步 / 版本控制 / 代码审查 / 重构）和 Claude Application Design（8.6%）两项就顶得上整个 Domain 1。**这门考的与其说是"Claude 知识"，不如说是"会不会做软件工程的人怎么用 Claude"。**

---

## 三、八个 Domain 的考核内容（据官方 skill descriptions 归纳，非原文转载）

**Domain 1 · Agents and Workflows (14.7%)**
- *Agent Architecture (4.5%)*：agent 与 workflow 架构的原理、模式与取舍；什么时候用 workflow 什么时候用 agent；manager/supervisor 层级结构；subagent 如何改善任务执行。
- *Agent Construction with Claude (5.3%)*：构建 Claude agent 的方法与平台——Claude Agent SDK、自定义 agent loop 与 harness、托管部署形态（自托管 vs Anthropic 托管）、用于确定性动作的 hooks。
- *Agent Patterns and Frameworks (4.9%)*：常见 agent 设计模式（工具调用循环、subagent、记忆、上下文窗口管理）与 agentic 抽象框架（如 Strands、LangGraph、PydanticAI）。

**Domain 2 · Applications and Integration (33.1%)**
- *Understanding Requirements (3.4%)*：从业务需求与方案架构推导功能性与基础设施需求。
- *Systems Life Cycle (2.8%)*：系统生命周期管理的概念与框架。
- *Claude API Mechanics (6.8%)*：messages、tools、streaming、vision、thinking、caching；通过第三方厂商调用 Claude；Messages API 的数据访问模式；批处理 API；实时 vs 批处理的取舍。
- *Software Engineering Foundations (7.4%)*：REST API、JSON、异步编程、版本控制、SDLC 集成、代码审查、大小规模重构。
- *Claude Application Design (8.6%)*：Claude 在不同界面（Claude Code / Desktop / claude.ai / API / SDK）如何解读指令；内容边界；schema 设计；session 卫生；plugin 管理。
- *Configuration Management (4.1%)*：CLAUDE.md、settings.json、模型版本锁定、prompt 版本管理、plugin 依赖。

**Domain 3 · Claude Code (3.1%)**
核心组件（Rules、Skills、Commands、Agents、Agent Memory）；功能（会话管理、内建与自定义 slash command、headless 模式、streaming 模式、auto 模式）；CLAUDE.md 层级；仓库初始化；settings.json 配置。

**Domain 4 · Eval, Testing, and Debugging (2.6%)**
错误类型识别；恢复策略选择；trace 分析定位失败模式；把问题根源在集成层与模型输出之间隔离开。

**Domain 5 · Model Selection and Optimization (16.8%)**
- *LLM Fundamentals (5.2%)*：token、上下文窗口、采样、非确定性、下一 token 生成；模型选项（fast mode、extended thinking、adaptive thinking、effort levels）；zero-shot / single-shot / multi-shot。
- *Technical Fundamentals (6.1%)*：支撑 AI 应用开发的基础技术（与包装 REST API 的 SDK 集成、websockets）。
- *Model Selection and Tradeoffs (2.7%)*：Opus / Sonnet / Haiku 的适用场景；adaptive thinking 支持情况；质量 / 延迟 / 成本的权衡；模型版本升级带来的破坏性行为变化。
- *Cost and Token Management (2.8%)*：token 预算与成本管理；用量追踪；成本建模；缓存技术（prompt caching、cache check-pointing）。

**Domain 6 · Prompt and Context Engineering (11.0%)**
- *Context Engineering (3.8%)*：上下文窗口管理；防止上下文漂移与膨胀（工具输出裁剪、compaction）；通过 subagent 或多步 agentic 工作流做上下文隔离。
- *Prompt Engineering (4.6%)*：指令清晰度、few-shot 示例、system vs user 位置、输出约束、指令在各组件间的摆放、迭代改进、输入净化。
- *Output Handling (2.6%)*：结构化输出模式、响应校验、防御式解析、**对"自信的输出"保持怀疑**。

**Domain 7 · Security and Safety (8.1%)**
- *AI Application Security (3.2%)*：prompt injection 认知与缓解、越狱防御、不可信输入处理、数据泄露防范、PII 处理、认证授权与保密完整性。
- *Guardrails and Safe Deployment (2.3%)*：内容政策、护栏分层、secure-by-design（隐私、身份与访问管理、最小权限）。
- *Claude Hooks (1.0%)*：用 hooks 做护栏与安全控制，阻止破坏性动作。
- *Identity, Secrets, and Key Management (1.6%)*：密钥与凭证管理、身份校验、访问审批与监控。

**Domain 8 · Tools and MCPs (10.6%)**
- *Tool Implementation (4.4%)*：tool use 与 function calling、外部系统对接配置、工具描述撰写、错误处理、工具使用模式（agentic harness dispatch、客户端 vs 服务端工具、审批模式）、工具集构建实践。
- *MCP Server Development (2.1%)*：MCP server 编写、部署、集成；MCP resources / tools / prompts；通信模式（stdio、sockets、client vs server）。
- *Agentic Customization (4.1%)*：内建 Tools、自定义 Tools、Skills、MCP 之间的取舍与选型。

---

## 四、目标受众与最低合格考生（MQC）

**受众**：动手构建、集成并交付生产级 Claude 应用的技术人员——AI/ML 工程师、技术负责人、资深软件工程师。

**MQC 画像**：能把技术需求变成可工作的应用；能用 Claude Agent SDK 与 agentic 框架搭 agent 与 workflow；能通过 API 与客户端 SDK 集成 Claude。

**建议经验**：
- 1–5 年软件工程经验
- 至少 6 个月 Claude 或同类 LLM 系统的实战
- 熟练 Python 和/或 TypeScript
- 熟悉 REST API 与 CLI 工具
- 对 LLM 基础、agent、上下文管理、MCP 有可用的理解

---

## 五、官方备考建议（§7）

"**没有任何一门必修课。Anthropic 不保证任何特定资源能确保你通过。**"

1. 逐条研读 blueprint，对着每个目标自评
2. 读官方文档：Claude API、模型、prompt engineering、Claude Code、Skills、MCP
3. **搭并运行至少一个 Claude 应用**：调用 API、集成一个以上工具、做基础的 prompt 与上下文工程、包含简单的安全与评估实践
4. 练开发者核心能力：写 prompt 与 system instruction、构建 agent

---

## 六、官方样题（§8）

若干道 illustrative items，明确标注 "**not drawn from the live item bank**"，附答案与解析。

🚨 **红线**：Anthropic 版权内容。禁止原文或翻译放进我们的模拟考，禁止照抄题干情境、选项措辞、干扰项设计。只可当难度校准样本。

**命题风格观察**（可安全用于教学）：跟 CCAR-F 一样考**取舍判断**而非记忆。典型题——一万份文档要在隔夜跑完出分析报告，成本是首要约束，结果第二天早上才要，该怎么做？正确答案是用 Message Batches API（24 小时窗口内异步处理、成本更低），而不是"并行同步调用抢速度"或"无脑换最小模型"。另一道考 prompt injection：agent 去总结用户提交的网页，某个网页里嵌了指令——这是 Domain 7 的典型考法。

---

## 七、对我们产品的直接影响

1. **不能照搬 CCAR-F 的课程结构。** 题量 53 不是 60；八个域不是五个；没有场景抽题机制。
2. **复习时间分配必须按官方子技能权重来，否则严重跑偏。** 最刺眼的是 Claude Code 只有 3.1%——一个只学过 CCAR-F 打法的人会把 20% 的精力砸在这上面。Applications and Integration 独占 33.1%，其中 Software Engineering Foundations（7.4%）考的是 REST / JSON / 异步 / 版本控制 / 重构这些**传统软件工程功底**，不是 Claude 知识。
3. **这一点可以做成非常锋利的营销钩子**：「这门考试里 Claude Code 只占 3.1%，而基础软件工程占 7.4% —— 你以为在考 AI，其实在考你是不是个好工程师。」（数字来自官方 blueprint，可放心引用。）
4. **必须覆盖第三方 agentic 框架**（Strands、LangGraph、PydanticAI）—— 官方 blueprint 点名了。这是 CCAR-F 完全没有的考点。
5. 分流话术：**"你不写代码 → CCAO-F；你写代码交付应用 → CCDV-F；你做架构决策与取舍 → CCAR-F。"** 四门互不设前置。
