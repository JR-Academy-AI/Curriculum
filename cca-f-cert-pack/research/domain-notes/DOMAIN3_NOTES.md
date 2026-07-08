SendMessage 无法送达（"No agent named 'general-purpose' is reachable"，且我没有该 agent 的 ID）。因此将完整提炼结果直接作为本条最终输出重发，调用方可直接取用：

---

# Domain 3: Claude Code Configuration & Workflows（占比 20%）

Domain 概览页很薄：只列出 6 个 Task Statement（3.1 CLAUDE.md Hierarchy / 3.2 Custom Slash Commands and Skills / 3.3 Path-Specific Rules / 3.4 Plan Mode vs Direct Execution / 3.5 Iterative Refinement / 3.6 CI/CD Integration）+ 一句 domain 描述（settings、hooks、permissions、CI/CD 集成）。

---

## 3.1 — CLAUDE.md Hierarchy, Scoping, and Modular Organisation

**核心考点**
- 三级层次：User-level（`~/.claude/CLAUDE.md`，不进 git、不共享）/ Project-level（`.claude/CLAUDE.md` 或 repo 根 `CLAUDE.md`，两个路径都合法，考试可能出任一个）/ Directory-level（子目录 CLAUDE.md，只作用于该目录）。
- **CLAUDE.md 不是严格优先级配置**：官方文档明确 "All discovered files are concatenated into context rather than overriding each other"——所有文件拼接进同一 context，互不覆盖；冲突时 "Claude may pick one arbitrarily"。
- 加载顺序（load order ≠ precedence）：从最宽 scope 到最具体；目录树上 "content is ordered from the filesystem root down to your working directory"，离启动目录越近读得越晚；同目录内 `CLAUDE.local.md` 追加在 `CLAUDE.md` 之后。
- 硬性规则不能靠 CLAUDE.md：必须每次生效的规则（禁用工具、必跑 formatter、权限策略）要放 `settings.json`（客户端强制执行）或 hook（固定生命周期触发）。settings.json 才有严格优先级链：managed policy > local > project > user。
- `@` path import 做模块化拆分：`@./standards/naming-conventions.md`，**没有 `@import` 关键字**；import 是 eager 加载（load 时原地 inline），拆文件不省 context——要省 context 用 `.claude/rules/` 的 path 作用域。
- `/memory` 命令 = 诊断工具，显示当前 session 已加载哪些 memory 文件；**不触发加载**。
- 经典考场景：新成员 clone 同一 repo 但 Claude 行为不一致 → 根因永远是规则写在了老成员的 user-level config 里，修法 = 移到 project-level。

**独特技术细节（原文精确）**
- CLAUDE.md 以 **user message** 形式交付，不进 system prompt；官方原话 "there's no guarantee of strict compliance"。
- 官方原话："Settings rules are enforced by the client regardless of what Claude decides to do. CLAUDE.md instructions shape Claude's behavior but are not a hard enforcement layer."
- `CLAUDE.local.md` 三特征：同级追加在 CLAUDE.md 之后（同目录内有"最后发言权"）、按惯例 gitignore（`.local` 后缀）、定位 = "project-scoped 版的 `~/.claude/CLAUDE.md`"。
- `.claude/rules/` 示例文件名：`testing.md`、`api-conventions.md`、`deployment.md`；无 frontmatter 时对所有 session 加载。

**常见误区 / distractor**
- ❌ "更具体 scope 覆盖更宽 scope" / "user-level 覆盖 project-level"——官方文档从未这么说；docs-honest 答案是"谁都不保证赢，把规则移到 settings.json 或 hook"。
- ❌ 以为 `/memory` 会触发配置加载。
- ❌ 跨目录约定用 directory-level CLAUDE.md（正确答案是 `.claude/rules/` + glob）。

---

## 3.2 — Custom Slash Commands and Skills

**核心考点**
- Commands 和 Skills 已合并为统一 Skills 系统：`.claude/commands/deploy.md` 和 `.claude/skills/deploy/SKILL.md` 都创建同一个 `/deploy`；`.claude/skills/` 是 canonical 路径，`.claude/commands/` 是向后兼容 alias。
- skills 路径比 commands alias 多三个能力：SKILL.md 旁的 supporting-files 目录、自动发现（intent 匹配时自动加载）、同名时 skill 优先于 command。
- 两级 scoping：project（`.claude/skills/`、`.claude/commands/`，git 共享）vs user（`~/.claude/skills/`、`~/.claude/commands/`，个人不共享）。这套 `.claude/` vs `~/.claude/` 模式贯穿整个 Domain 3。
- 三个 frontmatter 选项：`context: fork`（隔离 sub-agent 跑，verbose 输出不污染主对话）、`allowed-tools`（预批准列出的工具免权限提示）、`argument-hint`（无参调用时提示所需参数）。
- Skills vs CLAUDE.md 的关键区分：skill = on-demand 任务型 workflow（description 常驻 context，body 仅在调用时加载；可显式 `/skill-name` 或模型按 intent / `paths` frontmatter 自动调用）；CLAUDE.md = always-loaded 通用标准。任务型流程不进 CLAUDE.md，常驻参考不做 skill。

**独特技术细节（原文精确）**
- `/analyse-feature` 的文件位置精确到 `.claude/skills/analyse-feature/SKILL.md`。
- **`allowed-tools` 不是限制工具集**：只是预批准免提示，其它工具仍可调用、仍受正常权限设置管；真正的安全边界是 `disallowed-tools` 或权限设置里的 deny 规则。（注意：本课 build exercise 部分和 quick-reference 页却把 allowed-tools 说成 "restricts"——同一站内两处说法自相矛盾，正文 lesson 的说法更精确。）
- `disable-model-invocation: true` 的 skill 只能用户显式调用。
- 个人变体做法：在 `~/.claude/skills/` 用**不同名字**（如团队有 `/analyse`，个人建 `/deep-analyse`），不覆盖不冲突。
- 三个 frontmatter（`context: fork`、`allowed-tools`、`argument-hint`）在 commands 文件里也生效。

**常见误区 / distractor**
- ❌ 团队命令放 `~/.claude/`（个人路径不进 git，clone 拿不到）。
- ❌ 以为 skill 像 CLAUDE.md 一样 always-on——always-on 约定的答案永远是 CLAUDE.md 或 `.claude/rules/`。
- ❌ 不知道 verbose 输出场景（brainstorm / codebase analysis）该用 `context: fork`。
- ❌ 把任务型工作流写进 CLAUDE.md。

---

## 3.3 — Path-Specific Rules for Conditional Convention Loading

**核心考点**
- 机制：`.claude/rules/` 下每个文件用 YAML frontmatter 的 `paths` 字段 + glob 模式；仅当编辑匹配文件时加载，其余时刻不可见。
- 解决 root CLAUDE.md 和 directory-level CLAUDE.md 都搞不定的场景：**一种文件类型散布在多个目录**（如测试文件与源码共置于 50+ 个目录）。
- 为什么不用 directory-level：50+ 目录 = 50+ 份拷贝，改一条约定要改 50+ 处，必然 drift。
- 为什么不用 root CLAUDE.md：每个 session 都加载，编辑 React 组件时 Terraform 规则也在烧 token；path-scoped rules 只在匹配时加载，token 效率是关键考点。
- 四选一决策表：全局标准 → root CLAUDE.md；单个 package 目录 → directory-level CLAUDE.md；跨目录文件类型 → path-specific rules；按需任务 workflow → skills。

**独特技术细节（原文精确）**
- frontmatter 精确写法：`paths: ["terraform/**/*"]`、`paths: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"]`、`paths: ["src/api/**/*", "**/routes/**/*", "**/*.controller.ts"]`。
- 验证方法：编辑 `.test.ts` 文件时 `/memory` 应列出 `.claude/rules/testing.md`，而 api-conventions.md / terraform.md 不出现；切到 API handler 时反过来。
- rules 与 skills 都能通过 `paths` frontmatter 自动激活，但性质不同：rules 是随匹配文件常驻 context 的背景指导（shape every edit）；skills 是按需触发的任务单元。
- 来源标注该考点对应官方 Sample Question 6。

**常见误区 / distractor**
- ❌ 跨目录约定选 directory-level CLAUDE.md。
- ❌ 文件类型专属约定放 root CLAUDE.md（浪费 token）。
- ❌ 用 skill 做"自动、always-on 的文件类型约定加载"——正确答案是 path-specific rules。

---

## 3.4 — Plan Mode vs Direct Execution

**核心考点**
- Plan mode 适用五种情形：大规模改动（monolith → microservices）、存在多个合理方案、需要架构决策、多文件修改（如 45+ 文件的库迁移）、需要探索 codebase。Plan mode 只读不改文件。
- Direct execution 适用：well-scoped（单文件 bug + 清晰 stack trace）、方案已知、范围有限（一个函数/一个文件）。
- **核心判据 = ambiguity（模糊度）而非 difficulty（难度）**：难但定义清晰的修复 → direct；看似简单但有三种实现方式、影响多模块 → plan。
- Explore subagent：把 verbose 的发现阶段输出（文件列表、依赖图、代码摘录）隔离在外，只回传 summary，保持主对话 context 干净。
- Hybrid 模式 = **plan THEN direct**（不是 or）：库迁移 30 个文件 → plan 阶段找全 import、映射 API 差异、设计迁移模式；execute 阶段逐文件套用。
- 复杂度已写在需求里（如 "restructure the monolith"）就要**立即**选 plan mode，不要先 direct 等复杂度"浮现"再切。

**独特技术细节（原文精确）**
- 决策表逐行给出：架构重构 → Plan；库迁移（多文件）→ Plan（然后 direct）；多个合理方案 → Plan；需探索 → Plan（配 Explore subagent）；单文件 bug + stack trace / 单函数加 validation / 改配置值 / 已知修法已知位置 → Direct。
- 练习场景三件套（考题原型）：(1) monolith 拆微服务 → plan；(2) 单函数 NPE + 清晰 stack trace → direct；(3) 30 文件 logging 库迁移 → plan-then-execute。
- 来源标注对应官方 Sample Question 5。

**常见误区 / distractor**
- ❌ 多文件架构改动默认 direct execution。
- ❌ 给单文件明确 bug 上 plan mode（多余开销）。
- ❌ 不认识 plan-then-execute hybrid 模式。
- ❌ 先 direct、"等复杂度出现再切 plan"——复杂度已声明就该 upfront 选 plan。

---

## 3.5 — Iterative Refinement Techniques

**核心考点**
- 技术分层（考"先用哪个"）：① **具体 input/output 例子**——对付"prose 描述每次被解读不一样"，2-3 个 before/after 对足以建立 pattern，模型自己泛化，不需要穷举；② **测试驱动迭代**——对付复杂转换，测试覆盖 happy path / edge case / 性能要求，把 fail 输出喂回去，"Expected X, got Y" 零解释空间；③ **Interview pattern**——对付不熟悉领域，让 Claude 先提问再实现，逼出你会漏掉的考量（cache invalidation、TTL、一致性、failure mode）。
- Batch vs Sequential 反馈：**问题相互影响 → 一条消息批量给**（模型需要同时看到所有相互约束）；**问题相互独立 → 逐条顺序给**（混批独立问题会让模型搞不清哪条反馈对应哪段代码）。
- 例子驱动的四步法：观察不一致 → 换成 2-3 个具体例子 → 用新 case 验证泛化 → 需要时补 edge case 例子。

**独特技术细节（原文精确）**
- 示例转换原文：`getUserData(userId: string): Promise<UserData>` → `Promise<Result<UserData, ApiError>>`。
- 测试失败消息范例：`FAIL: testMigrationHandlesNullValues / Expected: null preserved in output JSON / Actual: null replaced with empty string ""`。
- Interview pattern 触发句式："Before implementing, ask me questions about the requirements, edge cases, and constraints I should consider."
- 明确说"不是例子越多越好"——2-3 个覆盖标准 case + 关键 edge case 即可。
- ⚠️ 注意：quick-reference 页把 batch/sequential 写反了（"Batch independent fixes... Sequence dependent ones"），与本课正文（batch 给 interacting、sequential 给 independent）矛盾；正文 + exam trap 都以"interact → batch"为准。

**常见误区 / distractor**
- ❌ 解读不一致时继续打磨 prose——更精确的 prose 仍靠解读；答案永远是先上例子。
- ❌ 分不清 batch vs sequential 的适用条件。
- ❌ 混淆 interview pattern（不熟领域、怕漏考量）和 examples（转换明确但模型误读）——不同问题不同解法。

---

## 3.6 — CI/CD Integration

**核心考点**
- **`-p` flag（即 `--print`）= 非交互 print 模式**：处理 prompt → 输出到 stdout → 退出。CI 里没键盘，不加 `-p` 任务无限挂起。原文明确这是"Domain 3 单个最直接可考的事实"，对应官方 Sample Question 10。
- 结构化输出：`--output-format json` 强制 JSON + `--json-schema` 约束结构（示例 schema 字段：findings[].file/line/severity/message），供下游发 inline PR comment、按 severity 过滤、跨 run 追踪。
- Session context isolation：同一 session 生成又自审的效果更差——它保留了自我论证的 reasoning context，不愿质疑自己的决定；修法 = 两次独立 `claude -p` 调用（生成一次、评审一次，不共享 context）。关联 Domain 4（多实例评审）和 Domain 5（context 管理）。
- Incremental review：每次 push 全量重扫会重复报"开发者看过但选择不改"的问题（真修好的问题自己会消失）；修法 = 把上轮 findings 塞进 context，指示只报"新问题 + 仍未解决的问题"。重复评论摧毁开发者信任。
- CLAUDE.md 在 CI 中照常被读取 = 给 CI 调用注入项目上下文的机制（测试标准、可用 fixtures、review 严重度标准、已有覆盖）；没有它，CI 生成的测试是低价值 boilerplate。
- Batch API vs Real-time：Message Batches API 省 50% 成本，但处理最长 24 小时、无延迟 SLA → **阻塞性 pre-merge check 必须 real-time**；overnight 技术债报告 / 周度审计 / 夜间测试生成用 Batch。对应官方 Sample Question 11。

**独特技术细节（原文精确）**
- System prompt 四个 flag（考 append vs replace）：`--system-prompt "<text>"`（整体替换默认 system prompt）/ `--system-prompt-file <path>` / `--append-system-prompt "<text>"`（追加，保留默认工具指导和安全指令）/ `--append-system-prompt-file <path>`。Append 用于"还是 coding assistant 只加规则"；replace 用于身份/权限模型完全不同的场景（替换后默认 prompt 全没了，一切自己负责）。
- Headless flags：`--output-format text|json|stream-json`、`--input-format text|stream-json`、`--json-schema '<schema>'`、`--max-turns <n>`（封顶 agentic turns 后退出）、`--verbose`。
- 权限/工具 flags：`--permission-mode <mode>`（可选值 default / acceptEdits / plan / auto / dontAsk / bypassPermissions）、`--allowedTools "<rules>"`（示例 `"Bash(git diff *)" "Read"`）、`--disallowedTools`（裸工具名 = 从 context 整个移除该工具）、`--tools "Bash,Edit,Read"`（限制可用内置工具全集）、`--add-dir <path>`（授予文件读写，不做配置发现）、`--model <alias|name>`（sonnet / opus 或全名）。
- Session flags：`-c` / `--continue`（恢复当前目录最近会话）、`-r` / `--resume <id|name>`。
- `--bare` 最小模式：跳过 hooks、skills、plugins、MCP servers、auto memory、CLAUDE.md 的自动发现，只留 Bash + 文件读/编辑工具，适合快而可预测的脚本化运行。
- 明确点名**不存在**的 distractor：`CLAUDE_HEADLESS=true`（不存在）、`--batch`（不存在）、stdin 重定向 `/dev/null`（不解决交互模式问题）。

**常见误区 / distractor**
- ❌ CI 挂起选 `CLAUDE_HEADLESS=true` / `--batch` / stdin 重定向——正确答案只有 `-p`。
- ❌ 以为同 session 自审和独立评审一样有效。
- ❌ 用 Batch API 跑 pre-merge 阻塞检查。
- ❌ 后续 review 不带上轮 findings（重复评论 → 开发者不再看）。
- ❌ 以为 `--append-system-prompt` 会替换 system prompt（它是追加；替换的是 `--system-prompt`）。

---

## 2. Quick-reference 页形态

一页可打印（带 "Print this page"）的速查表，以表格为主体，按主题分块，每块 = 表格 + 一两行 "Key rule/Critical property" 加粗提示。最有考试价值的是最后两个表：「题干关键词 → 答案」的 Decision Rules 映射表（12 行，如 "guaranteed enforcement" → Hooks、"CI/CD, non-interactive" → -p）和「错误说法 → 纠正」的 Common Exam Traps 表（7 行）。分节标题：
- Configuration Hierarchy
- .claude/rules/ — Conditional Rules
- Skills System
- Commands
- Hooks — Deterministic Enforcement
- Working Modes
- CLI Flags (Headless & Non-Interactive)
- Feedback Techniques
- Permissions & Security
- Decision Rules for the Exam
- Common Exam Traps

⚠️ 内部矛盾值得注意（做竞品分析时是他们的质量弱点）：quick-reference 声称 CLAUDE.md 有 4 级 override 优先级（"More specific scopes override broader ones"），而 3.1 正文引官方文档明确否认存在 override；feedback 一节的 batch/sequential 规则也与 3.5 正文相反；hooks / PreToolUse-PostToolUse 内容在 6 节 lesson 里没讲，只出现在 quick-reference 和 glossary。

## 3. Glossary 页形态

**10 个词条**：CLAUDE.md、Hooks、Permissions、Slash Commands、CI/CD Integration、Configuration Scope、Allowlist/Denylist、settings.json、.claude Directory、Subagents。每条固定三段结构：① 定义（2-4 句，约 40-70 词）；② **Exam context** 段（明确说"考什么"，如 "A non-zero exit code from a PreToolUse hook blocks the tool call"、CI/CD 需要 `ANTHROPIC_API_KEY` 环境变量）；③ "See also" 链接到对应 lesson。⚠️ glossary 的 lesson 编号（3.2 CLAUDE.md Files / 3.3 Hooks & Automation / 3.4 Permissions & Security / 3.5 Slash Commands & MCP）与实际 6 节课的编号对不上，且 CLAUDE.md 词条声称 "more specific files taking priority"、".claude/CLAUDE.md 是 local 不 commit"，均与 3.1 正文矛盾——疑似旧版大纲残留。

## 4. Exercises 页形态

**6 个 build exercise**（每节课 1 个），全部是**动手实操型**（在真实 repo 里建配置文件 / 跑命令 / 观察行为），标注难度（Beginner ×2：3.1、3.5；Intermediate ×3：3.2、3.3、3.4；Advanced ×1：3.6）和时长（30 分钟 ×4，45 分钟 ×2：3.4、3.6）。汇总页只列每个练习的 5 条 learning objectives；完整步骤内嵌在各 lesson 页里——每个练习 5-6 个 step，每 step 三件套：**Why**（对应哪个考点）+ **You should see**（明确的可观察验证标准，如 "/memory 输出列出 testing.md 但不出现 terraform.md"）+ "Stuck? Get a nudge" 提示入口。验证标准全部是行为可验证的，不是纸面自查。

## 5. 本 domain 整体教学风格观察

1. **彻底的应试导向（teach-to-the-test）**：每课固定骨架 = What You Need to Know → Key Concept 框 → Exam Traps（3-4 个，每个 = 错误认知 + 纠正）→ Practice Scenario（1 道四选一）→ Build Exercise → Sources。直接点名官方 sample question 编号（Q5/Q6/Q10/Q11）、预告"考试最爱的 trap 场景"（新成员收不到指令、50+ 目录测试文件、CI 挂起），甚至标注哪些 distractor 选项是编造的不存在的 flag。
2. **docs-honest 的反常识纠偏**：最强的一课是 3.1——不满足于复述"层级"，而是引官方原文推翻流传最广的"更具体覆盖更宽"误解，并给出工程结论（硬规则进 settings.json/hooks）。这种"纠正网上二手教程"的写法是其差异化卖点。
3. **一致性是短板**：正文 lesson（新、准确）与 quick-reference / glossary（旧、含已被正文推翻的说法、编号错位）之间存在多处直接矛盾（CLAUDE.md 优先级、batch vs sequential、allowed-tools 是否限制工具），说明辅助页更新滞后于正文重写——做我们自己的 cert pack 时这是可以明确超越的点。
