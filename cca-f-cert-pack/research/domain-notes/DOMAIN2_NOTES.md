# Domain 2: Tool Design & MCP Integration（考试占比 18%）竞品课程知识点提炼

来源目录：`/Users/lightman/Documents/sites/jr-academy-ai/curriculum/cca-f-cert-pack/research/extracted/lessons-text/`

---

## 一、5 节课逐课提炼

### 2.1 — Tool Interface Design

**核心考点**
- Tool description 是 LLM 做 tool selection 的 **PRIMARY mechanism**（比 tool name 更重要），不是补充性 metadata
- Production-grade description 必含 5 要素：(1) 工具做什么 (2) 期望输入（数据类型/格式/约束/required vs optional）(3) 能处理好的 example queries (4) edge cases 与 limitations（工具**不做**什么）(5) explicit boundaries（何时用本工具 vs 同 toolkit 里的相似工具）
- 修 misrouting 的优先级排序：**expand descriptions 永远是第一步**（low effort, high leverage）；few-shot examples / routing classifier / tool consolidation 都是错误的第一步
- Tool splitting：把泛职责工具（`analyze_document`）拆成目的明确的工具（`extract_data_points` / `summarize_content` / `verify_claim_against_source`），每个有窄的 input/output contract
- Tool renaming：名字相似导致混淆时，改名（如 `analyze_content` → `extract_web_results`）可在不改实现的情况下消除接口层重叠
- System prompt 与 description 的交互：system prompt 里 keyword-sensitive 的指令（如 "always check customer details before proceeding"）会**静默覆盖**写好的 tool descriptions，造成非预期的工具关联——更新 description 后必须回查 system prompt 冲突

**独特技术细节（原文精确）**
- 示例工具对：`get_customer` / `lookup_order`，minimal description 分别为 "Retrieves customer information" / "Retrieves order details"
- 好的 description 明确标注 identifier 格式：order number `format: #NNNNN`，并含 boundary 语句 "Do NOT use for order-specific queries — use lookup_order for those."
- 该 misrouting 场景对应 exam 的 **Q2**；触发查询示例 "check my order #12345"
- Build exercise 的量化验证标准：10 条测试 query，改前应观察到至少 2-3 条 misrouted，改后 selection accuracy 达到 9/10 或 10/10；改写后每条 description 应为 3-5 句
- 考试整体倾向："low-effort, high-leverage fixes"——better descriptions before routing classifiers, scoped access before full access, community servers before custom builds

**常见误区（distractors）**
- 用 few-shot examples 修 misrouting → 只加 token overhead，不治根因（"treating symptoms, not the disease"）
- 第一步就上 routing classifier → over-engineered，绕过 LLM 的自然语言理解、增加基础设施复杂度
- 第一步就做 tool consolidation → 长期是合理架构选择，但比改 description 工作量大得多
- 改完 description 却忽略 system prompt 措辞冲突

---

### 2.2 — Structured Error Responses

**核心考点**
- MCP 协议用 **`isError` flag** 向 agent 传达工具失败；设了这个 flag 模型才会把返回当失败去推理 recovery，而不是当正常结果
- **四类错误分类**，每类对应不同 recovery：
  - **transient**（timeout/服务不可用/rate limit）→ 延迟后原样 retry，`isRetryable: true`
  - **validation**（输入格式错/缺必填/越界）→ 修正输入后 retry，`isRetryable: true`
  - **business**（policy violation/超限额）→ **绝不 retry**，走 escalation 或替代 workflow，`isRetryable: false`
  - **permission**（access denied/凭证不足）→ 换 principal（更高权限账号）或升级，`isRetryable: false`
- `isRetryable` 的精确语义：回答"通过 retry 有没有任何成功路径"，**不承诺同一请求原样重发会成功**——transient 原样重试，validation 要先改输入；再读 `errorCategory` 决定具体怎么恢复（resend / self-correct / escalate / alternative route）
- **Access failure vs valid empty result**——本 domain 最核心的区分，考试直接考：access failure = 没够到数据源（`isError: true`）；valid empty result = 查询成功但无匹配（`isError: false` + `resultCount: 0`），后者**不应 retry**，"no results found" 就是答案
- 多 agent 系统的错误传播原则：**local recovery with selective propagation**——subagent 本地处理 transient 重试；只有本地无法解决才向上报；上报时必须带 partial results + 已尝试的操作（例："I searched 3 of 5 sources successfully. Sources 4 and 5 timed out."）

**独特技术细节（原文精确）**
- 结构化错误的三个 metadata 字段名：`errorCategory` / `isRetryable` / `description`（外加 MCP 的 `isError` + `content` 数组）
- validation 错误示例：期望格式 `#NNNNN (e.g. #12345)`，收到 `'order-abc'`
- business 错误示例数值：退款 £750 超过 £500 automatic refund limit，需 manager approval
- transient 错误示例：连接 customer database "timed out after 5 seconds. The query did not execute."
- 经典反例场景：工具返回空数组 → agent retry 3 次后升级人工 → 实际是客户账号根本不存在（工具其实执行成功了）
- Build exercise 的 agent loop 标准：transient 最多 retry 3 次带 backoff；validation 重新格式化输入；business 升级人工；permission 请求 elevated credentials

**常见误区（distractors）**
- 对成功查询的 empty result 做 retry（同样的空结果会一直重现）
- 返回 "Operation failed" 这类 generic error string，缺 errorCategory/isRetryable/description → agent 无法区分 transient 与 business
- 把 business error 当 retryable（policy violation 每次都会触发）
- Subagent 把错误静默吞掉、以空结果冒充 success → coordinator 分不清 "found nothing" 和 "could not search"
- 练习题干扰项思路：以为"提高 retry 上限 / 调 escalation 阈值 / system prompt 禁止 retry"能解决——真正根因是响应结构没区分两种空

---

### 2.3 — Tool Distribution & Tool Choice

**核心考点**
- **Tool overload**：工具越多 selection reliability 越差；最优范围 **4-5 tools per agent**，按 agent 角色 scoped（18 个工具给单 agent 是已知反模式）
- 相关性原则：synthesis agent 不该有 web search 工具，反之亦然——越权工具会被误用（synthesis agent 拿到 `web_search` 会自己跑搜索而不是用已提供的结果，重复劳动 + 浪费 context）
- **`tool_choice` 三种模式**：
  - `{"type": "auto"}`（默认）— 模型自行决定调工具还是回文本；适合一般 agentic loop
  - `{"type": "any"}` — 必须调某个工具但自选哪个；用于"保证结构化输出但 schema 不确定"（如 invoice/receipt/contract 多 schema 抽取管线、文档类型未知）
  - `{"type": "tool", "name": "..."}`（forced）— 必须调指定工具；用于强制 mandatory first step / workflow ordering（如强制先 `extract_metadata`，之后的 turn 再切回 `auto`）
- **Scoped cross-role tool 模式**：agent 偶尔需要别的角色的能力时，给它一个受限版工具直接用，而不是每次都绕 coordinator——避免 round-trip 延迟；复杂情形仍走 coordinator
- **Least privilege 应用于工具设计**：用受限替代品换掉泛化工具——`fetch_url`（任意抓取）→ `load_document`（只校验 document URL）：防误用、目的更清晰、减少副作用

**独特技术细节（原文精确）**
- 具体数字：coordinator round-trip 每请求加 **2-3 round trips**、延迟增加 **40% or more**；**85%** 的 verification 是简单查询（毫秒级），**15%** 复杂情形走完整 pipeline
- scoped cross-role tool 场景对应 exam 的 **Q9**（"Know it cold"）
- 4 agent 工具分配示例表：Web Search = `search_web, fetch_page, extract_links, save_snippet`；Document Analysis = `extract_metadata, extract_data_points, summarize_content, verify_claim`；Synthesis = `compile_report, verify_fact (scoped), format_citation, assess_coverage`；Coordinator = `Agent (formerly Task, used to spawn subagents), review_output, request_revision`
- forced selection 的 JSON 形态：`{ "tool_choice": { "type": "tool", "name": "extract_metadata" } }`

**常见误区（distractors）**
- 85% 简单查询仍全部经 coordinator 路由（应加 scoped tool）
- 需要结构化输出时用 `auto`（可能返回对话文本；该用 `any` 或 forced）
- 给单 agent 18 个工具还期望可靠选择
- 该给 `load_document` 时给了泛化 `fetch_url`
- 练习题干扰项：加大 coordinator 并行度 / 干脆删掉 fact verification / 在 coordinator 层做缓存——都不是正解

---

### 2.4 — MCP Server Integration

**核心考点**
- **两级 scoping**：project-level `.mcp.json`（repo 根，version-controlled，全队共享，放 Jira/GitHub/内部 API 这类团队工具）vs user-level `~/.claude.json`（个人，不进版本控制、不共享，放实验/个人集成）
- 发现机制：所有已配置 server（两级都算）的工具在 **connection time 一次性发现、同时可用**，没有手动激活步骤
- **`${VARIABLE_NAME}` 环境变量展开**：config 文件只引用变量名不含值 → 配置可安全 commit、各人本地设自己的 token、token rotation 不用改 config、secrets 不进 repo history
- **MCP Resources**：向 agent 前置暴露内容目录（issue 摘要 / 文档层级 / database schema），省掉探索性 tool call（否则 agent 要 `list_tables` 再对每张表 `describe_table`）；resources 给可见性、tools 给行动力
- **Build-vs-use 决策**：标准集成（Jira/GitHub/Slack/Linear/Notion）**先评估 community server**；只有团队特有 workflow / 需要嵌入自定义业务逻辑 / 专有内部系统无社区 server 时才自建——考试永远偏向务实选择
- MCP 工具 description 稀疏时，agent 会**偏好 built-in 工具**（如 Grep），因为 built-in 的 description 更丰富——必须把 MCP description 写详细才能竞争选择优先级

**独特技术细节（原文精确）**
- `.mcp.json` 结构：`mcpServers` 对象，每个 server 有 `command`（如 `npx`）+ `args`（如 `["-y", "@modelcontextprotocol/server-github"]`）+ `env`；示例包名 `@modelcontextprotocol/server-github`、`@community/mcp-server-jira`；env 变量示例 `${GITHUB_TOKEN}` / `${JIRA_URL}` / `${JIRA_TOKEN}` / `${DATABASE_URL}`
- Resource 定义要素：URI（示例 `db://schema/main`）+ name + description + mimeType
- 增强版 description 范例：`search_codebase` 写明 "AST-aware indexing"、返回 file path/line numbers/surrounding code、并显式对比 "Use this instead of Grep when searching for code by intent rather than exact string match"
- Build exercise 验证点：`git diff` 确认没有 secrets 被 staged；description 3-5 句

**常见误区（distractors）**
- 为 Jira 这类标准集成直接自建 custom MCP server（应先评估 community server）
- 团队级 server 配置放进 `~/.claude.json`
- 把 credentials 明文写进 `.mcp.json`（应用 `${ENV_VAR}`）
- MCP 工具 description 留白，导致 agent 总选 built-in
- 练习题干扰项：直接用 Bash 调 Jira REST API 绕过 MCP

---

### 2.5 — Built-in Tools

**核心考点**
- Claude Code 六个 built-in 工具：**Read, Write, Edit, Bash, Grep, Glob**，每个有特定用途，用错浪费时间或 context token
- **Grep vs Glob 核心区分**（本 task 最重要）：Grep 搜文件**内容**（函数调用者/错误信息/import 语句/变量赋值）；Glob 按**路径命名模式**匹配文件（test 文件/config/某目录下所有 .ts）。一句话："Grep finds what is INSIDE files. Glob finds files by their NAMES."
- **Edit 是修改的默认工具**：靠 unique text matching 做定点修改；文本在文件中多处出现时 Edit 会 fail——这是 safety mechanism 不是 bug
- **Edit 失败的正确恢复顺序**：(1) 用最短可能唯一的 anchor 试 Edit → (2) non-unique 时**加宽 `old_string` 的上下文**直到锁定单一位置，或想全改就用 **`replace_all: true`** → (3) 两者都不行才 fallback 到 Read + Write（整读整写，烧一整个文件的 token）
- **Incremental codebase discovery**：禁止"上来读全部文件"（context-budget killer，最大反模式）；正确流程：Grep 找 entry point → Read 顺 import 追流程 → Grep 追 usage → 只读被上一步证明相关的文件
- **Deprecation 场景的工具序列**：Grep 函数名找所有 caller（含直接 import 的 tests）→ Glob 按命名约定找 sibling test 文件（如 `OrderProcessor.ts` → `**/OrderProcessor.test.*`，即使 test 里从未提函数名）→ 再 Grep wrapper 名找间接覆盖的 test。**Grep, then Glob, then Grep again — not Glob first**
- Wrapper/barrel file 追踪：函数经 wrapper 或 barrel file（如 `index.ts`）re-export 时，单次 Grep 原函数名会漏掉经 wrapper 引入的 consumer——要 Grep 定义 → Read 定义文件找 exported names → 对每个 exported name 再 Grep

**独特技术细节（原文精确）**
- Grep 示例 pattern：`"processLegacyOrder"`、`"timeout"`、`"import.*from 'utils/auth'"`
- Glob 示例 pattern：`"**/*.test.tsx"`、`"**/config.*"`、`"content/domains/**/*.mdx"`
- Edit 失败报错样例："old_string matches 3 locations"
- 反模式量化：200 个文件的 codebase 全读 = 消耗整个 context window
- wrapper 具体例子：`applyLegacyOrder` 内部调用 `processLegacyOrder`
- 考试**双重惩罚**：既罚"每次修改都默认 Read + Write"，也罚"Edit 一报 non-unique 就直接跳 Read + Write"（documented recovery 是加宽 anchor 或 replace_all）

**常见误区（distractors）**
- 用 Glob 找函数调用者（Glob 匹配路径不搜内容，会 fail）
- 用 Grep 找文件名/扩展名（技术上可能凑效，但 Glob 才是 purpose-built，考试要选正确工具）
- 上来读所有源文件
- 每次修改默认 Read + Write
- Edit non-unique 一失败就直奔 Read + Write（漏掉 widen anchor / replace_all 这一步）
- 练习题干扰项：用 Bash `find` + `xargs grep` 代替专用工具

---

## 二、Quick Reference 页形态

单页速查卡（带 "Print this page" 按钮），把 domain 内 5 节课压缩为规则表 + 决策表，重表格轻叙述。最有特色的是两张考试导向的映射表：**Decision Rules for the Exam**（"题干说 X → 答案大概率是 Y"，共 10 行）和 **Common Exam Traps**（"陷阱说法 → 正确认知"，共 7 行）。分节标题：

1. Tool Description Design
2. Schema Design Rules
3. tool_choice Modes（3 行模式对照表）
4. MCP Architecture（Client ↔ Host ↔ Server 三层表 + 协议 JSON-RPC 2.0 over stdio 或 HTTP/SSE + 两个配置文件）
5. Tool Error Handling（注意：这里的 errorCategory 枚举是 `authentication | not_found | rate_limit | validation | internal`，还多了 `retryAfterMs: 5000` / `partialResult` / `suggestion` 字段——**与 2.2 课文的四分类 transient/validation/business/permission 不一致**，是竞品自身的内容矛盾点，值得留意）
6. Tool Selection in Claude Code（5 工具用途表）
7. Decision Rules for the Exam
8. Common Exam Traps

## 三、Glossary 页形态

共 **10 个词条**：Tool Schema、MCP Server、MCP Client、MCP Transport、JSON Schema、Tool Selection、Tool Routing、Resources (MCP)、Prompts (MCP)、Tool Error Handling。每条固定三段结构：
- **定义**：2-4 句（约 40-70 词），中性技术定义
- **Exam context**：1 段专门的考点提示（如 JSON Schema 条目提示 "confusing `required` (an array at the object level) with individual property attributes" 和 `additionalProperties: false` 的作用；Prompts 条目还标注"less frequently tested"，给出考频信号）
- **See also**：链回具体 lesson

注意：glossary 的 lesson 编号体系（2.2 MCP Server Implementation / 2.3 MCP Client Integration / 2.4 Tool Error Handling / 2.5 Tool Selection & Routing）与实际 5 节课的编号**不对应**，疑似旧版大纲残留。

## 四、Exercises 页形态

**5 个 build exercise**（每节课 1 个），全部是**动手实操型**（要真跑 MCP server / 多 agent 配置 / Claude Code 工具），不是纸面题。每个含：难度标签（Beginner ×2：2.1、2.4；Intermediate ×3：2.2、2.3、2.5）+ 预计时长（30 或 45 分钟）+ 4-5 条 learning objectives。汇总页只列目标；**完整验证标准在各 lesson 页的 Build Exercise 段**——每一步配三件套：步骤指令 + "Why"（解释该步对应哪个考点）+ "You should see"（可观察的具体验收标准，如 "Selection accuracy improves to 9/10 or 10/10"、"Edit fails with an error like: old_string matches 3 locations"）+ "Stuck? Get a nudge" 提示入口。

## 五、本 Domain 整体教学风格观察

1. **一切围绕考试反推教学**：每课固定结构 What You Need to Know → Key Concept → Exam Traps（每课 4-5 个，专讲 distractor 为什么错）→ Practice Scenario（1 道完整 4 选项模拟题）→ Build Exercise → Sources；正文频繁点名 "the exam tests this directly"、甚至直接引用题号（Q2、Q9），并总结出可迁移的答题元规则——"exam 永远偏向 low-effort, high-leverage 的第一步"。
2. **具体数字和字段名密度极高、可背诵**：4-5 tools per agent、85%/15%、2-3 round trips、40% 延迟、retry 3 次、£750 vs £500、`#NNNNN`、`isRetryable`、`${GITHUB_TOKEN}`——每个抽象原则都锚定到一个可复述的具体数值或字段，天然适合出题也适合记忆。
3. **动手练习与考点一一对齐且验收可观察**：每个 exercise 步骤都写明"这一步练的是哪个考点 + 你应该看到什么输出"，把"复现失败场景（先造出 misrouting/错误响应）再修复并量化对比"作为固定教学法；但辅助页存在**内部不一致**（quick-reference 的 errorCategory 枚举、glossary 的课号体系都与正课冲突），说明多页面各自生成、缺全局校对——我们自建时应引以为戒。
