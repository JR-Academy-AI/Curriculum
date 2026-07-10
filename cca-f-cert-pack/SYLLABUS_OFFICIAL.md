# 官方考纲事实表 · Claude Certified Architect – Foundations

> **来源**：Anthropic 官方《Claude Certified Architect – Foundations Exam Guide》**Version 1.0 · Effective July 2026**，39 页，由 Lightman 从 Partner Academy 下载（2026-07-09）。
>
> **原件位置**：`curriculum/_cert-official-guides/CCAR-F_Architect-Foundations_v1.0_Jul2026.pdf`（+ 提取文本；四门考纲统一存放于此，见该目录 `README.md`）。**该目录已 gitignore** —— Anthropic 版权材料，与竞品 mirror 同等对待：只做写作 ground truth，**不进 git、不整篇翻译、不转载给学员**。
>
> **本文件的定位**：官方**事实**（数字、政策、考纲结构）的记录，不是考纲的翻译件。事实不受版权保护，表达受保护。需要细读 30 条 task statement 的 "Knowledge of / Skills in" 明细时，读本地那份 PDF，不要把明细粘进任何对外内容。
>
> **与 `DESIGN.md` 的关系**：`DESIGN.md` 仍是**话术真相源**（对外怎么说）。本文件是**事实真相源**（客观事实是什么）。两者冲突时以本文件为准，并回头修 `DESIGN.md`。

---

## 一、这份考纲推翻了我们之前的哪些判断

我们此前是在没有 blueprint 的情况下靠公开资料 + 社区整理拼出来的。官方考纲到手后，逐条对照结果如下。

| # | 我们之前写的 | 官方考纲实际 | 影响面 |
|---|---|---|---|
| 1 | 考试代码 **CCA-F**；「Pearson VUE 页面上的 CCAR-F 是笔误，不要跟着改」 | **CCAR-F**。考纲页眉与 Exam Details 表两处都是 CCAR-F，**全篇 0 次出现 CCA-F** | 🔴 我们那条"别跟着改"的红线是错的，方向反了 |
| 2 | 60 题 / 120 分钟 / 720 分 / 6 抽 4 = **社区口径，未经官方公布** | **全部官方确认**，逐条写在 Exam Details 表里 | 🟡 60 处"社区口径"标注现在过度保守，可以升级 |
| 3 | 五域权重 = **社区口径，禁止写成"官方权重"** | **就是官方 blueprint 权重**，百分比一字不差 | 🟡 同上。community 把百分比传对了 |
| 4 | Domain 3 = Claude Code Configuration（**权重最高**） | Claude Code 是 **20%**；权重最高的是 Domain 1 Agentic Architecture **27%** | 🔴 事实错误，已写进 L02/L08 标题和销售页 |
| 5 | 认证有效期 —— **从未提及** | **12 个月**。到期前免费非监考续证；过期则全价重考 | 🔴 重大遗漏，学员会误以为终身有效 |
| 6 | 考试费 —— **从未提及** | **$125 USD**，且"结账价按 partner tier 折扣" | 🔴 直接关系我们 $399/$299 的定价叙事 |
| 7 | 报名路径 = 匠人给"官方考试名额" | 考纲写的是：考生自己在 **Partner Academy 页面 register + checkout**，再建 Pearson VUE 账号约考 | 🔴 **已核实：匠人不能代发/代购名额**，只能开通账号。全线话术已改写 |
| 8 | Domain 5 = Context Management | 官方全名 **Context Management & Reliability**，6 条 task statement 里 3 条是 Reliability（升级、错误传播、人工复审校准） | 🔴 L10 漏了半个域 |

**未被推翻、原样成立的**：Pearson VUE 承办、OnVUE/线下双通道、闭卷监考、认证归属个人、重考 14/30/90 天且滚动 12 个月内最多 4 次、改期取消须在考前 24 小时之外（进入最后 24 小时改不了、缺考费用不退）。

---

## 二、Exam Details（官方原表，逐字核对过图像，非仅文本提取）

| 项 | 官方值 |
|---|---|
| Credential | Claude Certified Architect – Foundations |
| **Exam code** | **CCAR-F** |
| Number of items | **60** |
| Item format | 单选 + 多选混合；**每题会标明该选几个** |
| Exam structure | **从 6 个场景里抽 4 个**（"4 scenarios drawn from a bank of 6"） |
| Time limit | **120 分钟** |
| Delivery | 监考制：线上监考 和/或 考场，依 program policy |
| Passing score | **100–1,000 量表分，720 及格** |
| **Exam fee** | **$125 USD**（结账价反映 partner tier 折扣） |
| **Validity period** | **自授予日起 12 个月** |
| Result reporting | 通过/不通过 + 量表分；**成绩单附各 domain 的答对百分比** |

**计分口径**（官方 §10）：标准参照考试（criterion-referenced），跟固定标准比、不跟其他考生比。720 这个 cut score 来自正式的 standard-setting 研究。**domain 分段百分比仅供诊断，不参与判定通过与否** —— 通过与否只看总量表分。

---

## 三、Blueprint（官方五域权重）

| Domain | Content Domain | Weight |
|---|---|---|
| 1 | Agentic Architecture & Orchestration | **27%** |
| 2 | Tool Design & MCP Integration | **18%** |
| 3 | Claude Code Configuration & Workflows | **20%** |
| 4 | Prompt Engineering & Structured Output | **20%** |
| 5 | Context Management & Reliability | **15%** |

> 注意 domain **编号**顺序：官方 D2 = Tool Design & MCP（18%），D3 = Claude Code（20%）。我们 L06–L10 的编号恰好与官方一致，不用改编号，只需改"权重最高"这类描述。

---

## 四、6 个考试场景（抽 4 考）

| # | 场景 | 主考 domain |
|---|---|---|
| 1 | Customer Support Resolution Agent（退货/账单争议，MCP 工具 get_customer / lookup_order / process_refund / escalate_to_human，目标 80%+ 一次解决率） | D1, D2, D5 |
| 2 | Code Generation with Claude Code（自定义 slash command、CLAUDE.md、plan mode vs 直接执行） | D3, D5 |
| 3 | Multi-Agent Research System（coordinator 调度 搜索/分析/综合/报告 四个 subagent） | D1, D2, D5 |
| 4 | Developer Productivity with Claude（探索陌生代码库，内置工具 + MCP） | D2, D3, D1 |
| 5 | Claude Code for CI/CD（自动 code review、生成测试、PR 反馈、降低误报） | D3, D4 |
| 6 | Structured Data Extraction（非结构化文档抽取 + JSON schema 校验） | D4, D5 |

---

## 五、30 条 Task Statement × 我们的覆盖率

标题为官方原文（客观结构），明细见本地 PDF。覆盖状态 = 对 `drafts/L06–L10.html` 做关键词检索 + 人工复核所得。

### Domain 1 · Agentic Architecture & Orchestration (27%) → L06

| TS | 官方标题 | 覆盖 |
|---|---|---|
| 1.1 | Design and implement agentic loops for autonomous task execution | ✅ |
| 1.2 | Orchestrate multi-agent systems with coordinator-subagent patterns | ✅ |
| 1.3 | Configure subagent invocation, context passing, and spawning | ✅ |
| 1.4 | Implement multi-step workflows with enforcement and handoff patterns | ✅ |
| 1.5 | Apply Agent SDK hooks for tool call interception and data normalization | ✅ |
| 1.6 | Design task decomposition strategies for complex workflows | ✅ |
| 1.7 | Manage session state, resumption, and forking | ❌ **缺**（`--resume` / `fork_session` / 何时另起新会话注入摘要） |

### Domain 2 · Tool Design & MCP Integration (18%) → L07

| TS | 官方标题 | 覆盖 |
|---|---|---|
| 2.1 | Design effective tool interfaces with clear descriptions and boundaries | ✅ |
| 2.2 | Implement structured error responses for MCP tools | ⚠️ 泛泛提到 `is_error`，缺 `errorCategory` / `isRetryable` / 四类错误分型 |
| 2.3 | Distribute tools appropriately across agents and configure tool choice | ✅ |
| 2.4 | Integrate MCP servers into Claude Code and agent workflows | ✅ |
| 2.5 | Select and apply built-in tools (Read, Write, Edit, Bash, Grep, Glob) effectively | ❌ **缺**（整条没写） |

### Domain 3 · Claude Code Configuration & Workflows (20%) → L08

| TS | 官方标题 | 覆盖 |
|---|---|---|
| 3.1 | Configure CLAUDE.md files with appropriate hierarchy, scoping, and modular organization | ✅ |
| 3.2 | Create and configure custom slash commands and skills | ✅ |
| 3.3 | Apply path-specific rules for conditional convention loading | ✅ |
| 3.4 | Determine when to use plan mode vs direct execution | ❌ **缺**（只把 plan 当权限模式提了一句，没讲决策框架 / Explore subagent） |
| 3.5 | Apply iterative refinement techniques for progressive improvement | ❌ **缺**（输入输出示例 / 测试驱动迭代 / interview pattern） |
| 3.6 | Integrate Claude Code into CI/CD pipelines | ❌ **缺**（`-p` / `--output-format json` / `--json-schema`） |

### Domain 4 · Prompt Engineering & Structured Output (20%) → L09

| TS | 官方标题 | 覆盖 |
|---|---|---|
| 4.1 | Design prompts with explicit criteria to improve precision and reduce false positives | ❌ **缺** |
| 4.2 | Apply few-shot prompting to improve output consistency and quality | ✅ |
| 4.3 | Enforce structured output using tool use and JSON schemas | ✅ |
| 4.4 | Implement validation, retry, and feedback loops for extraction quality | ✅ |
| 4.5 | Design efficient batch processing strategies | ✅ |
| 4.6 | Design multi-instance and multi-pass review architectures | ✅ |

### Domain 5 · Context Management & Reliability (15%) → L10

| TS | 官方标题 | 覆盖 |
|---|---|---|
| 5.1 | Manage conversation context to preserve critical information across long interactions | ✅ |
| 5.2 | Design effective escalation and ambiguity resolution patterns | ❌ **缺** |
| 5.3 | Implement error propagation strategies across multi-agent systems | ❌ **缺** |
| 5.4 | Manage context effectively in large codebase exploration | ✅ |
| 5.5 | Design human review workflows and confidence calibration | ❌ **缺** |
| 5.6 | Preserve information provenance and handle uncertainty in multi-source synthesis | ✅ |

**合计：30 条里 20 条已覆盖、8 条完全没写、2 条只沾边。** 缺口集中在 L08（Domain 3 缺 3 条 / 共 6 条）和 L10（Domain 5 的 "Reliability" 半边整个没写）。

---

## 六、官方备考路径（§7 §8）

官方给的是**动手清单**，不是读物清单 —— 这一点值得在我们的 L05 路线图里引用：

1. 用 Agent SDK 建一个完整 agent：agentic loop + 工具调用 + 错误处理 + 会话管理；练 subagent 生成与上下文传递
2. 给一个真实项目配 Claude Code：CLAUDE.md 层级、`.claude/rules/` 路径规则、带 frontmatter 的 skill、至少接一个 MCP server
3. 设计并测试 MCP 工具：可区分的工具描述、带错误分类与 retryable 标志的结构化错误、用模糊请求测选工具的可靠性
4. 建结构化抽取流水线：`tool_use` + JSON schema、校验重试环、可空字段、Message Batches 批处理
5. 练 prompt 工程：模糊场景的 few-shot、明确的复审标准、大型 code review 的多轮架构
6. 练上下文管理：从冗长工具输出里抽结构化事实、scratchpad 文件、subagent 隔离
7. 复盘升级与 human-in-the-loop：何时升级（政策空白 / 客户要求 / 无法推进）vs 自主解决

官方另附 **4 个 Preparation Exercise**（多工具 agent + 升级逻辑 / 团队版 Claude Code 配置 / 结构化抽取流水线 / 多 agent 研究流水线调试），每个都标注了对应 domain。这 4 个练习是免费的、公开的 —— **我们的差异化不能是"把这 4 个练习翻译一遍"**。

---

## 七、报名、政策、续证（§11–§16）

**报名链路（官方 §11 六步）**：Partner Academy 认证页 → 下载考纲 + 阅读条款 → **在 Partner Academy 注册并完成结账**（价格含 partner tier 折扣）→ 按确认邮件建 Pearson VUE 账号 → 选日期 + 选线上监考或考场 → 考前 **24 小时**外可改期/取消，**24 小时内改动 = 考试费作废**。

**证件**：政府签发、未过期的带照片证件，姓名须与报名**完全一致**。改名走 `certifications-support@anthropic.com`，且必须在约考前处理。

**特殊便利（Accommodations）**：须由 Pearson VUE **事先批准**，批准前不要约考。

**重考**：不通过者第 1 次后等 14 天、第 2 次后 30 天、第 3 次后 90 天；滚动 12 个月内同一门最多 4 次；**每次都要重新付费**。限制按单门计，这门没过不影响报另一门。

**缺考/迟到**：费用作废，必须重新报名。

**考场纪律**：全程在摄像头视野内；桌面清空（禁纸笔笔记书本手机手表耳机副屏）；禁与任何人交流；**禁以任何形式记录、复制、拍摄考题**。作弊或泄题 → 成绩作废 + 吊销证书 + 禁考。

**保密协议**：开考前须接受 NDA，考题/选项/场景均为 Anthropic 机密财产。不接受则终止考试且不退费。

**续证（§15，我们完全漏掉的一节）**：证书**有效期 12 个月**。按时续证 = 复习变更点 + 在 Partner Academy 完成一次**免费、非监考**的评估，**不收费**。**一旦过期，必须全价重考**。若考纲发生重大变更，Anthropic 可要求持证人重考而非走续证评估。

**申诉**：收到通知起 14 天内（对成绩的异议自考试日起 14 天内）向 Pearson VUE 提出。**standard-setting 结果与单题内容不可申诉。**

---

## 八、In-Scope / Out-of-Scope（§17，划重点用）

**明确考**（18 条，摘要）：agentic loop 控制流、多 agent 编排与并行、subagent 上下文显式传递与崩溃恢复 manifest、工具描述设计与拆分合并、MCP 资源 vs 工具、MCP server 作用域与环境变量展开、结构化错误与本地恢复、升级决策、CLAUDE.md 层级与 `@import`、`.claude/rules/` glob、命令与 skill 的作用域与 frontmatter、plan mode vs 直接执行、迭代改进、`tool_use` schema 设计与 `tool_choice`、few-shot、Message Batches 适用性与 `custom_id`、上下文裁剪与位置效应、人工复审校准与分层抽样、信息溯源。

**明确不考**（14 条）：微调/训练模型、API 鉴权计费账号管理、具体语言框架实现细节、MCP server 部署与基础设施、Claude 内部架构与权重、Constitutional AI / RLHF / 安全训练、embedding 与向量库、computer use、视觉/图像分析、streaming / SSE、限流配额与价格计算、OAuth 与密钥轮换、具体云厂商配置、性能基准与模型对比、prompt caching 实现细节（知道有这东西即可）、token 计数与分词细节。

> **这份 out-of-scope 清单是我们最好用的原创素材之一** —— 备考者最怕白学。L05 路线图里应当明确写"这些别看"。

---

## 九、官方样题（§9）：12 道，带解析

考纲第 27–33 页给了 12 道样题（含正确答案与逐项解析），来源标注为 "drawn from the **practice test**" —— 即**官方存在一套 practice test**。

🚨 **红线**：这 12 道题是 Anthropic 的版权内容。
- **禁止**把它们（原文或翻译）放进 L14/L15 的模拟考。
- **禁止**照抄它们的题干情境、选项措辞、干扰项设计。
- 可以做的：把它们当作**难度与命题风格的校准样本**，用来检验我们自己原创的 60 题是否在同一档位（考"最有效的第一步"、考"根因归属"、考"程序性强制 vs 提示词约束"这类判断，而不是背 API 名字）。

样题反映出的命题风格（可安全用于我们的教学）：
- 大量出现「**most effective first step**」「**most likely root cause**」—— 考的是**优先级判断**，四个选项常常都"能用"，但只有一个是**成比例的第一步**
- 高频错误答案类型：过度工程（另训分类器 / 加路由层）、依赖概率性遵从（靠 system prompt 保证合规）、把责任错误归给下游 agent、误信 LLM 自评置信度、把"上下文窗口更大"当成注意力稀释的解法
- 高频正确答案类型：程序性强制 > 提示词约束（涉及金钱/身份时）、先修根因（工具描述太薄）再加 few-shot、最小权限的 scoped 工具、按延迟容忍度匹配 API

---

## 十、对我们产品的直接影响（待 Lightman 决策）

1. **考试代码要不要全线改成 CCAR-F**。目录名 `cca-f-cert-pack` 与线上 URL `/curriculum/cca-f-cert-pack/` 按 URL 冻结铁律**不动**；但正文里 27 处 "CCA-F" 属于我们自造的代码，官方文档零出现。建议：正文凡指"考试代码"处改 CCAR-F，品牌主称呼用全名「Claude 认证架构师 – Foundations」。
2. **定价叙事必须重写**。官方考试费 $125 USD，我们卖 $399/$299。原话术"这个包 = 一个官方考试名额 + 路线 + 模拟"在学员算出 $125 后会显得溢价 3 倍。诚实且更强的说法是把 $125 摊开讲，明说我们收的是"路线 + 原创冲刺件 + 陪跑"的钱。
3. ~~**"官方考试名额"这个词需要重新核实**~~ → **已核实定案（2026-07-09 Lightman）**：匠人**不能代发、代购**考试名额。真实链路 = 匠人在 CPN 后台为学员开通 Partner Academy 账号（该平台不对个人开放自助注册）→ 学员本人注册考试并直接向官方支付考试费 → 学员建 Pearson VUE 账号约考。所有对外内容已改写为"开通账号 / 打通报名准入 / 全程陪跑"。用词对照表见 [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md) 第三节。
4. **有效期 12 个月是新卖点也是新责任**。必须在 L01/L02 讲清楚，并可衍生"续证提醒 + 免费续证陪跑"的留存钩子。
5. **补 8 条缺失 task statement**（L06 的 1.7、L07 的 2.5、L08 的 3.4/3.5/3.6、L09 的 4.1、L10 的 5.2/5.3/5.5），另修 2 条只沾边的（2.2、L08 的 plan mode 深度）。
6. **修"权重最高"事实错误**：L02 描述、L08 标题、销售页三处把 Claude Code 说成权重最高。
7. **60 处"社区口径"标注可以升级为"官方考纲"** —— 我们现在有一手依据了。
