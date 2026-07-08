以下为 Domain 1: Agentic Architecture & Orchestration（占比 27%，7 个 Task Statement）的完整提炼。所有细节均忠实原文。

---

## 一、逐节课提炼

### 1.1 Agentic Loops

**核心考点**
- Agentic loop 四步生命周期：发请求（Messages API，含 system prompt + 历史消息 + 上轮 tool results）→ 检查 `stop_reason` → 若 `"tool_use"` 则执行工具、把 tool result **追加进 conversation history** 后再发回 → 若 `"end_turn"` 则终止并返回最终响应
- `stop_reason` 是 loop 控制的**唯一可靠信号**（deterministic、unambiguous），禁止用自然语言解析、文本内容检查或迭代上限作为主要终止机制
- Model-driven decision-making（模型自主选工具）vs 预配置 decision tree / 固定工具序列——考试偏向 model-driven（灵活性），**例外**：涉及 financial / security / regulatory 时 programmatic enforcement 优先（衔接 1.4）
- 迭代上限（iteration cap）的正确定位：只能做 safety net（防 runaway agent 的最大边界），永远不能做 primary stopping mechanism
- 经典 bug 场景：用 `response.content[0].type == "text"` 判断完成 → premature termination（因为 Claude 可以在同一响应里同时返回 text + tool_use block）

**独特技术细节**
- `stop_reason` 与 loop 相关的两个值：`"tool_use"`（继续）、`"end_turn"`（终止）
- Claude 可在同一响应中返回解释性 text（如 "Let me look up your order"）+ `tool_use` block，所以 `content[0]` 位置检查必错
- 把 `tool_choice` 强制设为 `"any"` 会导致 agent 真正完成时也被迫调工具 → **infinite loop**
- 处理 tool_use 时消息格式：追加 assistant response + 一条含 `tool_result` 的 user message
- Build exercise 中的安全上限示例值：`MAX_ITERATIONS = 20`，触发时打 warning log，正常查询应远早于 20 就经 stop_reason 终止

**常见误区（distractor）**
- "加大迭代上限修 premature termination" → 错，caps 治 runaway 不治 premature exit，正确修法永远是查 `stop_reason`
- 解析 "I'm done" / "task complete" 这类自然语言 → 歧义（"I've finished analysing the first file" 可能还要继续）
- `tool_choice: "any"` 防止返回文本 → 制造死循环

---

### 1.2 Multi-Agent Orchestration

**核心考点**
- Hub-and-spoke 架构：coordinator 居中（任务分解、选择 subagent、传 context、聚合结果、错误处理、路由信息），subagent 为 spoke（各司专职）
- **铁律：所有 subagent 间通信必须经 coordinator，subagent 之间永不直接通信**——理由三点：observability / consistent error handling / controlled information flow
- **Isolation 原则**（本 domain 最易被误解的概念）：subagent 不继承 coordinator 的 conversation history、system prompt、其他 subagent 的结果、任何 shared memory；同一 subagent 两次调用之间也无记忆——一切 context 必须显式写进 prompt
- Coordinator 四大职责：① dynamic subagent selection（不是每个 query 都走全 pipeline）② research scope partitioning（分配不重叠的 subtopic / source type）③ iterative refinement loops（评估 synthesis 缺口 → 定向 re-delegate → 重跑 synthesis 直到覆盖足够）④ centralised communication routing
- **Narrow decomposition failure** 诊断模式：输出在**广度**（scope）上缺失时，根因几乎总是 coordinator 的 decomposition，不是下游 subagent

**独特技术细节**
- 原文点名这是样题集里的 **Q7**：把 "impact of AI on creative industries" 只拆成 visual arts 子题，music / writing / film 全漏
- Renewable energy 标准案例：coordinator 只拆 solar + wind，geothermal / tidal / biomass / nuclear fusion 全缺——修法不是更好的 search query、不是更强的 synthesis agent、也不是加 subagent，而是改 decomposition 逻辑
- Build exercise 要求分解出**至少 5 个** subtopic 覆盖全广度

**常见误区**
- 覆盖缺口甩锅给下游 subagent（search 太窄 / synthesis 没发现 gap）→ 错，追溯到 coordinator decomposition
- 以为 subagent 共享内存或继承 coordinator 历史
- 提议 subagent 直连提效 → 破坏三大保障，任何理由都不行
- "加更多 subagent 修 decomposition 问题" → 它们只会拿到同样窄的任务

---

### 1.3 Subagent Invocation and Context Passing

**核心考点**
- **Agent tool** 是 coordinator spawn subagent 的具体机制（SDK 层面），coordinator 的 `allowedTools` 必须包含 `"Agent"`（或向后兼容别名 `"Task"`）——这是 binary gate，缺了物理上无法 spawn
- `AgentDefinition` 三要素：description（coordinator 据此决定何时调用）/ system prompt / tool restrictions（按角色收窄）
- Context passing 三规则：① 完整传递前序 agent 的 findings；② 用**结构化格式把 content 与 metadata 分离**（claim + source_url / document_name / page_number）；③ coordinator prompt 写**目标不写流程**（goals, not procedures——保留 subagent 适应性）
- Attribution failure 诊断模式：synthesis 报告无引用 → 根因是 coordinator 传 content 时剥掉了 metadata，不是 synthesis agent 的 prompt 问题
- **Parallel spawning**：独立任务应在 coordinator **单次响应中发多个 Agent tool call**，而非跨 turn 逐个调用（降低 latency）
- `fork_session` vs `--resume`：fork = 从共享分析基线开出独立分支做 divergent exploration（分支互不可见）；resume = 继续同一条命名 session

**独特技术细节**
- Agent tool 在 **Claude Agent SDK v2.1.63** 中由 Task tool 更名而来，"Task" 仍作为 backward-compatible alias 保留，旧代码不 break
- 结构化 metadata 示例 JSON 字段（原文精确）：`findings[]` 内含 `claim` / `source_url` / `document_name` / `page_number` / `confidence` / `retrieved_by`
- 考试答案选项中出现 "in a single response" / "simultaneously" 字样 → 指向 parallel pattern 的信号词

**常见误区**
- 以为 subagent 自动能访问 coordinator 历史或其他 subagent 输出
- 无引用问题归咎 synthesis agent prompt，或提议给它 direct tool access 自己去查 → 都错
- 独立任务用 sequential invocation
- 混淆 `fork_session` 与 `--resume`

---

### 1.4 Workflow Enforcement and Handoff

**核心考点**
- Enforcement spectrum：**prompt-based guidance = probabilistic**（约 90-95% 生效，失败率非零）vs **programmatic enforcement（hooks / prerequisite gates / code-level checks）= deterministic**（100% 生效）
- 考试决策规则：financial（退款/转账/支付）、security（身份验证/访问控制）、compliance（AML/监管）→ 必选 programmatic enforcement；low-stakes（格式偏好/风格/输出顺序）→ prompt-based 可接受
- Prerequisite gate 机制：代码级检查阻断下游工具——`process_refund` 在 `get_customer` 返回 verified customer ID 之前物理不可执行，模型无法绕过
- Subagent 生命周期 hook：`SubagentStart`（subagent 被 Agent tool spawn 时触发——限流/日志/校验 context）与 `SubagentStop`（subagent 结束返回结果时触发——schema 校验/脱敏/性能监控）
- Multi-concern request 正确处理：分解为独立事项 → 用 shared context **并行**调查 → 合成单一统一答复（不是顺序处理、不是只答第一项）
- Structured handoff protocol：人工客服**看不到 conversation transcript**，handoff summary 必须自包含，五字段：Customer ID / Conversation summary / Root cause analysis / Refund amount（如适用，写具体数字）/ Recommended action

**独特技术细节**
- 标志性数字场景：system prompt 已写明 "always verify identity"，生产数据仍有 **8% failure rate**（92% 生效）；强化 prompt 可能降到 3-4% 但**永远到不了 0%**；prerequisite gate 才能归零
- Subagent 可在自己的 **AgentDefinition frontmatter** 里定义 scoped 的 PreToolUse / PostToolUse hooks——只拦截该 subagent 自己的工具调用（例：billing subagent 有阈值拦截 hook，technical support subagent 没有）
- **Stop hook auto-conversion**：subagent frontmatter 里定义的 Stop hooks 在运行时自动转换为 `SubagentStop` 事件
- Gate 被触发时的错误消息模式："Cannot process refund — customer identity not verified. Please call get_customer first."

**常见误区**
- "加强 system prompt 指令" / "加 few-shot 示例" 作为高风险场景修法 → 一律拒绝，只提升概率不消除失败率
- "上 routing classifier" → classifier 管路由，compliance 失败发生在 agent 执行序列内部，不在路由层
- Handoff summary 漏 customer ID 或 recommended action 等关键字段

---

### 1.5 Agent SDK Hooks

**核心考点**
- 两类 hook 的方向性（考试重点）：**PostToolUse** = 工具执行**后**、模型处理结果**前**，做数据变换/归一化；**PreToolUse** = 工具执行**前**，可 block / modify / redirect，被 block 的工具根本不会运行
- PostToolUse 典型用途——data normalisation：把异构 MCP 工具输出统一（Unix timestamp → ISO 8601、数字状态码 → 可读字符串、货币统一小数格式+币种码、各地区日期格式 → 单一标准），让模型每轮都拿到一致数据，消除解释误差
- PreToolUse 典型用途——policy enforcement：即 1.4 prerequisite gate 的实现机制（退款阈值拦截、AML 前置门、经理审批流）
- 决策框架（核心心智模型）：必须 100% 遵守 → Hooks（deterministic）；偏好、偶尔偏离可接受 → Prompts（probabilistic）；判据 = 单次失败是否造成金钱损失 / 法律风险

**独特技术细节**
- 三个精确用例数字：refund 超过 **$500** 拦截转人工；`transfer_funds` 需 `aml_check` 在本 session 返回 pass 才放行；discount 超过 **20%** 走 manager approval queue
- AML prompt 方案原文给的失败率：约 **95%** 生效，5% 漏检 = 监管违规
- Data format chaos 案例三工具的精确格式：`get_customer` 返回 Unix timestamp + 数字状态码；`lookup_order` 返回 ISO 8601 + 英文字符串状态；`check_shipping` 返回 "DD/MM/YYYY" + 单字符状态码（"S" = shipped, "P" = pending，模型可能把 "P" 误读为 "processed"）

**常见误区**
- **用 PostToolUse 去 block 违规操作** → 本节最强 distractor：PostToolUse 触发时动作已发生，blocking 只能用 PreToolUse
- "PostToolUse hook 标记已完成的违规转账供人工复查" → 同上，事后补救不满足 100% 要求
- 让模型自己做数据格式转换（model-side transformation）而非 PostToolUse hook → 引入不一致
- 混淆两类 hook 的方向

---

### 1.6 Task Decomposition Strategies

**核心考点**
- 两种分解模式的选型：**Fixed sequential pipeline（prompt chaining）**——步骤预先确定、逐步传递输出，适合可预测结构化任务（code review、文档处理、数据抽取、compliance check），优点是一致/可靠/易调试易监控，缺点是无法响应意外发现；**Dynamic adaptive decomposition**——根据每步发现生成后续子任务、计划随认知演进，适合 open-ended 任务（legacy 系统探索、security audit、research、陌生代码库 debug），缺点是不可预测、耗时难估、难 debug
- 选型对照：multi-file code review → fixed；legacy codebase exploration → dynamic；document extraction → fixed；debugging unfamiliar system → dynamic
- **Attention dilution**：单 pass 处理过多 item 时注意力被摊薄——前几个 item 分析细致、后面越来越浅、同样代码在不同文件得到矛盾评价
- 修法 = **multi-pass architecture** 两层：per-item local analysis pass（每个 item 独占全部 attention budget）+ cross-item integration pass（专查跨 item 的 data flow / API consistency / pattern usage 一致性）

**独特技术细节**
- 标志性 **14-file code review** 案例的精确分层：Files 1-5 详细反馈（带行号、bug 识别）；Files 6-9 中等；Files 10-14 浅表、漏掉明显的 null pointer bug 和 SQL injection 漏洞；`forEach` loop 在 File 3 被标低效、File 11 相同代码零评论
- Attention dilution 是**架构问题不是模型能力问题**：换更强模型、更大 context window、更细 prompt 都不解决
- Build exercise 阈值：**10+ 文件**是 attention dilution 可观察到的规模
- 只分 batch 但不加 cross-file integration pass → 仍会漏 cross-batch 问题（跨批 data flow、pattern 不一致）

**常见误区**
- "换更强模型 / 更大 context window" 修 attention dilution → 错，结构问题
- "更好的 prompt 的单 pass 等价于 multi-pass" → 错，无法保证每 item 专注度
- 给 open-ended 任务套 fixed pipeline（或反之）——按任务特征选，不按"哪个听起来更高级"选
- 分批但省略 integration pass

---

### 1.7 Session State and Resumption

**核心考点**
- 三种 session 管理选项及各自适用场景：**`--resume <session-name>`**（恢复命名 session 全部历史——用于文件没变、prior context 仍有效的继续）；**`fork_session`**(从共享分析基线开独立分支——用于对比多种方案的 divergent exploration，分支互不影响、互不可见）；**Fresh start + summary injection**（全新 session + 注入前次结论的结构化摘要——用于 tool results 已 stale 或长 session context 退化）
- **Stale context problem**（本节中心概念）：resume 会恢复全部旧 tool results；文件改过后模型同时基于旧文件内容（stale tool result）和新读取推理 → 矛盾建议（推荐已修复的修复、引用已不存在的代码）
- Naive fix 为何不够：resume 后让 agent 重读改过的文件——旧 tool results 仍留在 history，仍可能影响 tangential 推理；正确修法 = fresh start + summary + 指明改动文件
- **Targeted re-analysis vs full re-exploration**：50 文件只改 3 个 → 不要全库重扫，摘要覆盖未变部分，只重析 3 个改动文件
- 决策矩阵：昨天继续且没改文件 → resume；对比两种 refactoring 方案 → fork；改了 3/50 文件 → fresh+summary；长 session 历史杂乱 → fresh+summary；测试策略 vs 文档策略两路探索 → fork；依赖升级后 → fresh+summary（多文件可能间接受影响）

**独特技术细节**
- 标志性案例数字：**50-file codebase、改 3 个文件**（auth.ts / session.ts / middleware.ts，或 auth.ts / database.ts / api-routes.ts）
- Summary injection 的实操句式（原文）："Prior analysis identified three authentication issues in auth.ts, session.ts, and middleware.ts. All three have been fixed. Please re-analyse these three files to verify the fixes and check for any new issues introduced by the changes."
- Stale context 的表现特征：一会引用旧代码（来自 stale tool result）一会引用新代码（来自新读取），前后矛盾

**常见误区**
- 文件改动后仍推荐 `--resume`
- 改 3 个文件却全量重扫 50 文件 → 浪费
- 用 `fork_session` 处理 stale context → **fork 从现有 session 分支，会继承 stale tool results**，不解决问题
- 混淆 fork（divergence）与 resume（continuation）

---

## 二、Quick Reference 页形态

单页 cheat sheet（带 "Print this page" 按钮），**分节 + 表格混排**：概念先用 2-4 行短句压缩，然后大量二至三列速查表（Anti-Pattern/Why It Fails、Pattern/When to Use/Key Characteristic、Mechanism/Type/Enforcement/Use For 等），收尾两张纯考试导向表——"题干出现 X 字眼 → 答案大概率是 Y" 的 Decision Rules 表和 Trap/Correct Answer 对照表。约 120 行覆盖全 domain。分节标题共 9 个：

1. The Agentic Loop
2. Orchestration Patterns（此处比课程页多列了 Sequential / Parallel / Pipeline / Dynamic Adaptive / Hub-and-Spoke 五模式表）
3. Guardrails Hierarchy
4. Claude Agent SDK（含课程页没细讲的 "allowedTools 每 agent 收敛到 4-5 个工具" 上限）
5. Multi-Agent Systems
6. Human-in-the-Loop
7. Error Recovery & Resilience（fork_session / fresh start / retry with error feedback / graceful degradation 四策略表）
8. Decision Rules for the Exam
9. Common Exam Traps

## 三、Glossary 页形态

**12 个词条**：Agentic Loop、Orchestration Pattern、Guardrail、Claude Agent SDK、Multi-Agent System、Human-in-the-Loop、Error Recovery、stop_reason、tool_use、end_turn、Fan-Out/Fan-In、Routing Pattern。每条固定三段结构：① 定义（2-4 句，约 40-70 词，含机制层细节而非一句话名词解释）；② **"Exam context:"** 考点提示（1-2 句，说明这个词怎么被考——如 "must know all stop_reason values"）；③ **"See also:"** 回链到对应课程。⚠️ 值得注意：glossary 的 See also 链接指向的是一套**旧版课程编号**（1.3 Guardrails & Safety / 1.4 Claude Agent SDK / 1.5 Multi-Agent Systems / 1.6 Human-in-the-Loop / 1.7 Error Recovery），与现行 7 节课标题不一致，且把 Agent SDK 描述为 "Python framework"——说明该页由早期版本大纲遗留，未与正课同步更新。

## 四、Exercises 页形态

**7 个 build exercise（每节课 1 个，全部动手编码型，非纸面题）**。该汇总页只列元信息：标题（如 "Build a Prerequisite Gate for Financial Operations"）+ 难度标签（Intermediate ×4：1.1/1.2/1.3/1.7；Advanced ×3：1.4/1.5/1.6）+ 时长（45-60 分钟）+ 5 条 "what you'll learn"。完整版内嵌在各课程页底部：每个 exercise 拆成 5-6 个 step，**每 step 三件套**——任务描述、"Why"（点明该步对应哪个考点）、**"You should see"（明确可验证的预期结果，如 "A MAX_ITERATIONS constant... a warning log if the cap is hit"）**，外加 "Stuck? Get a nudge" 交互提示按钮。即：有逐步验证标准，且验证标准直接绑定考试论点（如"对比 single-pass vs multi-pass 的 issue 数量表"）。

## 五、本 domain 整体教学风格观察

1. **极度考试导向、场景驱动**：每节课围绕 1-2 个"标志性故障场景"展开（8% 退款失败率、14 文件 code review、50 文件改 3 个、renewable energy 只拆 solar+wind），并直接点名样题编号（Q7）、给出精确数字锚点（$500、20%、95%、v2.1.63）；每课固定含 4 条 "Exam Trap"（专拆 distractor）+ 1 道四选一 Practice Scenario，甚至教"看到题干某字眼选某类答案"的应试启发式。
2. **每课固定五段模板 + 交互入口**：What You Need to Know → Key Concept 高亮框 → Exam Trap → Practice Scenario → Build Exercise → Sources，页头统一挂 "Learn this interactively | Concept Check | Exam Sim | Build Coach" 四个交互模式入口，动手练习占每课约一半篇幅。
3. **每课末尾引 3 条 Anthropic 官方来源**（Claude Agent SDK Overview、Messages API Reference、多门 Skilljar 课程、MCP Specification 等），把考点锚在官方教材上；语言风格为英式拼写（favours / normalise / centre）、断言式短句（"Never. Not for efficiency, not for convenience."）、大量"错误答案为什么错"的负面教学，几乎无营销腔。

一个可供你报告引用的可靠性注脚：glossary 页与正课存在版本错位（见第三节），说明该竞品的辅助页更新滞后于正课迭代。
