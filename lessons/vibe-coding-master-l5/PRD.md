# PRD — Vibe Coding 大师课 · 第五节课 deck（vibe-coding-master-l5）

> 内容 SoT：本 PRD + `lessons/VIBE_CODING_MASTER_L5_BLUEPRINT.md`（课程蓝图，先于本 PRD 存在）。deck 不新增事实，只把蓝图里已经定好的内容做视觉化 + 工作坊框架。

## 业务背景

- 对应课程：`curriculum/ai-builder`（Vibe Coding / AI Builder Bootcamp），第五节 ~125 min 动手工作坊（原 120 min，加了组成格式/渐进式披露后略微加长，能长就长）。
- 系列定位：前四节完成了「人 / 产品 / 视觉」三层 Source of Truth + 一条前后端交付链路。本节把学员在 L4 里对 Agent 反复说的话（scaffold plan / CI / PR body 等）固化成 **Skill** —— 从「每次都讲一遍」升级到「一次定义、处处复用」。
- 一句话定位：前四节一直在「手把手指挥」Agent；第五节教你把重复的指挥，沉淀成 Agent 自带的能力。
- 主题延续：Skill 是「能力层」的 Source of Truth——改一处 `SKILL.md`，所有用到它的地方一起变（L1 人的 SoT / L2 产品的 SoT / L3 视觉的 SoT / L4 交付的 SoT / L5 能力的 SoT）。

## 学习目标（deck 要带学员到达的状态）

1. 说清 Skill 是什么：一段打包好的、可复用的「做某类事的专长」（`SKILL.md` + 可选模板/脚本），Agent 在需要时自动调用。
2. 分清 Skill vs 一次性 prompt vs rules/记忆：什么值得做成 Skill（重复出现 + 有固定步骤/标准）。
3. 读懂一个真实 Skill 的组成格式：frontmatter（必填 `name`/`description`，可选 `argument-hint`）+ 正文（步骤、规则、模板）+ 可选的同目录支持文件（模板/脚本）。
4. 说清「渐进式披露」——Skill 分三层加载（常驻的 name+description / 触发时的正文 / 按需的支持文件），这是 Skill 库能一直攒下去而不拖慢 Agent 的原因，也是用 Skill 好过把所有规则塞进 CLAUDE.md 全量加载的地方。
5. 从零写一个 Skill：把 L4 的某个重复动作（如「出 scaffold plan」或「填 PR body」）固化下来。
6. 触发 / 调用 Skill：靠 `description` 被自动匹配，或显式 `/name` 调用。
7. 写好 `description` —— 这是 Skill「该出现时才出现」的命门。
8. 迭代 Skill：用 → 发现不足 → 改 `SKILL.md` → 再用（Skill 也是 SoT，改一处全局生效）。
9. 看懂「指挥 Agent 的话」为什么这样组词：上下文先行 / 产出形态先定 / 结构化字段拆开要 / 检查点前置——这四条原理不止用在写 Skill 上。
10. 知道国内环境用不了 Claude Code 时的三条退而求其次路线，以及各自跟 Claude Code 的差距在哪，而不是卡在「装不上就学不下去」。

## 非目标（deck 明确不讲）

- 不讲 MCP / Hooks / Schedule / Subagent（那些是别的能力层，放后续）。
- 不讲把 Skill 打包发布成公开插件 / marketplace 的工程。
- 不做复杂多文件、多脚本的重型 Skill；本节只做「一个 `SKILL.md` + 顶多一个模板」。
- 不追求做很多 Skill，只求做透一个、真正调用起来。
- 不对国内替代工具做量化 benchmark 对比（避免引用会过期的跑分/定价），只讲生态成熟度的定性差异。

## 节奏表（~125 min 工作坊，可延长）

| 时间 | 章节 | 页 | 内容 |
|---|---|---|---|
| 0–10 | 开场 | P01 | 回放 L4：你重复说了多少遍同样的话 → 该做成 Skill 的共识 |
| 10–20 | Skill 是什么 | P02–P04 | 概念 + 与 prompt/rules 的区别 + 判断线 |
| 20–35 | 拆真实 Skill | P05–P06b | Anthropic 官方文档给的真实 Skill 例子（summarize-changes / pdf-processing / fix-issue）的 SKILL.md 组成格式 + 渐进式披露/好处 |
| 35–47 | description 是命门 | P07–P09 | 好/坏对比 + 触发机制 + 元例子 |
| 47–69 | 动手：写第一个 Skill | P10–P12 | 挑 L4 一个重复动作 → 指挥 Agent 起草 SKILL.md →（原理：为什么这样组词）→ 你改 |
| 69–74 | 休息 | — | 口头 |
| 74–89 | 调用它 | P13 | 触发 Skill 跑一次真实任务 |
| 89–104 | 迭代 | P14 | 发现不足 → 改 SKILL.md → 再跑 |
| 104–120 | 边界与坑 | P15–P17b | 什么时候别用 Skill；常见坑；国内环境替代方案 |
| 120–125+ | 收尾 | P18–P19 | 小结 + 作业 + 下节预告 |

## 逐页 spec（23 页 · 与 RUNSHEET 一致）

| # | 文件 | 内容 |
|---|---|---|
| P00 | `L5P00_Cover` | 封面：Skills · 让 Agent 学会你的套路 |
| P01 | `L5P01_RepeatedPrompts` | 钩子：回放 L4 里学员对 Agent 说过 ≥3 遍的话（scaffold plan / CI / PR body） |
| P02 | `L5P02_WhatIsSkill` | Skill 是什么：打包的可复用专长，Agent 自动调；配文字流程图 |
| P03 | `L5P03_SkillVsPromptVsRules` | 分清 Skill / 一次性 prompt / rules 三者的适用场景 |
| P04 | `L5P04_WhenToSkill` | 什么值得做成 Skill：判断线（重复 ≥3 次 + 固定套路 + 会漂 + 值得共享） |
| P05 | `L5P05_RealSkillTeardown` | 拆一个真实 Skill：Anthropic 官方文档给的两个真实例子（`summarize-changes` 无 name 字段 / `pdf-processing` 有 name+支持文件）的 frontmatter |
| P06 | `L5P06_SkillMdStructure` | `SKILL.md` 组成格式：frontmatter（必填 name/description，可选 argument-hint）+ 正文（步骤/规则/模板）+ 支持文件三类（Instructions 参考文档 / Code 脚本，代码不进 context 只有运行结果进 / Resources 素材模板示例）；frontmatter 用官方 `fix-issue` + `argument-hint: [issue-number]` 举例，支持文件用官方 `pdf-processing` 的真实目录树举例 |
| P06b | `L5P06b_ProgressiveDisclosure`（新增）| **原理页**：渐进式披露三层加载模型（常驻 name+description / 触发时读正文 / 按需读支持文件）+ Skill 好处速览（可复用/一致性/高效/团队共享/可版本管理） |
| P07 | `L5P07_DescriptionIsKey` | description 是命门：好 / 坏对比（太泛 / 太窄 / 刚好） |
| P08 | `L5P08_HowTriggered` | Skill 怎么被调用：描述匹配自动触发 / 显式 `/name` 调用 |
| P09 | `L5P09_MetaExample` | 元例子：Claude Code 官方自带的 `/run-skill-generator`——一个专门用来生成别的 Skill 的 Skill，把「怎么跑起这个项目」固化成 `.claude/skills/run-<name>/` |
| P10 | `L5P10_PickYourRepeat` | 动手准备：挑一个 L4 的重复动作（或本周重复 ≥3 次的活）当素材 |
| P11 | `L5P11_AgentDraftsSkill` | 投屏指令：让 Agent 起草 SKILL.md（vibe 口径，你 review） |
| P11b | `L5P11b_PromptAnatomy`（新增）| **原理页**：拆解 P11 那段提示词——上下文先行 / 产出形态先定 / 结构化字段拆开要 / 检查点前置，四条组词原理逐句对应 |
| P12 | `L5P12_WriteSkillMd` | 写 SKILL.md：name + description + 步骤，落地成文件 |
| P13 | `L5P13_FirstInvocation` | 第一次调用它：触发 + 跑一次真实任务 |
| P14 | `L5P14_Iterate` | 迭代：用 → 发现不足 → 改 SKILL.md → 再用（Skill 也是 SoT） |
| P15 | `L5P15_WhenNotToSkill` | 边界：什么时候别用 Skill（压力测试反例） |
| P16 | `L5P16_SkillLibraryGrows` | Skill 库越攒越强：Claude Code 自带的 9 个真实 bundled skill（/doctor /code-review /batch /debug /loop /claude-api /run /verify /run-skill-generator）+ 官方开源 `github.com/anthropics/skills` 仓库 + 插件市场安装 |
| P17 | `L5P17_CommonPitfalls` | 常见坑：description 太泛/太窄、塞太多事、不触发/乱触发怎么办 |
| P17b | `L5P17b_DomesticAlternatives`（新增）| **环境页**：国内用不了 Claude Code 时的三条路线（国产模型+开源 agent 壳 / 国内一体化编程工具 / 合规渠道访问 Claude）及各自与 Claude Code 的生态差距 |
| P18 | `L5P18_Summary` | 小结：一次定义、处处复用（能力层的 SoT 兑现） |
| P19 | `L5P19_HomeworkAndNext` | 作业 + 下节预告 |

## 教学口径：Vibe Coding，不是"背 Skill 语法"

写 Skill 本身也用「指挥 Agent」：你说「把这个重复套路做成一个 skill」，Agent 起草 `SKILL.md`，你 review + 调它的 `description` 和步骤。你盯的是 Agent 定不了的：**这个 Skill 到底什么时候该触发、边界在哪**。这一段延续 L4 的锚点心智模型：你说人话 → Agent 执行 → 你 review + 验证。

## 核心教学决策

1. **用 Anthropic 官方文档给的真实 Skill 当教材，不用本仓库的 `.claude/skills/`**——不讲空概念，但例子全部来自 `code.claude.com/docs/en/skills` 和 `platform.claude.com/.../agent-skills/overview` 原文给出的真实例子（`summarize-changes`、`pdf-processing`、`fix-issue`、`run-skill-generator` 等），刻意不引用本课程仓库自己的 Skill 目录——保持课程内容和"这个仓库长什么样"解耦，换到任何项目/任何仓库去讲都成立。
2. **原料来自 L4 的重复 prompt**——不凭空造练习，直接拿 L4 里学员反复说过的话当素材。
3. **延续 Vibe Coding 口径**——写 Skill 本身也是「指挥 Agent」，不是背语法。
4. **Skill = 能力层的 SoT**——一次定义、处处复用、改一处全局变。
5. **判断线：不是所有事都该做成 Skill**——避免学员把一切都 Skill 化。
6. **原理不止讲"照做"，还讲"为什么"**——P11b 把 P11 的投屏 prompt 逐句拆解成四条组词原理（上下文先行 / 产出形态先定 / 结构化字段拆开要 / 检查点前置），让学员以后自己组词也有章法，不是只会背这一句话。
7. **正视国内环境的现实约束**——P17b 不回避「装不上 Claude」这个真实问题，给三条退而求其次的路线 + 各自和 Claude Code 的生态差距，而不是假装所有学员都能无障碍访问。
8. **组成格式用官方真实字段和真实例子，不编字段、不用本仓库**——P06 的 `argument-hint`、支持文件三类，全部对照官方文档原文举例（`fix-issue`、`pdf-processing`），不是杜撰的「可能存在」的字段，也不引用本课程仓库自己的 Skill。
9. **渐进式披露解释"为什么 Skill 比塞进 CLAUDE.md 更好"**——P06b 把「为什么要做成 Skill」这件事从「主观上更整洁」升级为「客观上更省 context」，呼应 P03 里 Skill vs rules 的区分：rules 是全量常驻，Skill 是按需加载。

## 数据纪律

- 无外部统计数据。**deck 里所有 Skill 例子均来自 Anthropic 官方文档原文，不引用本课程仓库自己的 `.claude/skills/`**：
  - `summarize-changes`、`pdf-processing`：`platform.claude.com/docs/en/agents-and-tools/agent-skills/overview`（Level 1/2/3 渐进式披露章节的原始例子）。
  - `fix-issue`、`migrate-component`、`codebase-visualizer`、bundled skills 列表：`code.claude.com/docs/en/skills`（Claude Code Skills 完整参考）。
  - `run-skill-generator`：同上文档「Run and verify your app」章节。
  - `github.com/anthropics/skills`、`claude-plugins-official` 插件市场：同上文档「Share skills」「Run evals with skill-creator」章节提到的真实公开资源。
- 官方依据：Claude Code · Agent Skills 文档（`SKILL.md` frontmatter 机制、`argument-hint` 字段、支持文件三类、渐进式披露的三层加载模型、`description` 触发匹配、显式 `/name` 调用）。
- **P06 `fix-issue` + `argument-hint: [issue-number]`**：`fix-issue` 本身是官方文档「Pass arguments to skills」章节的真实例子（`/fix-issue 123` → `$ARGUMENTS` 展开成 123）；`argument-hint: [issue-number]` 是官方字段说明里给的示例格式（原文示例是 `[issue-number]` 或 `[filename] [format]`），加在 `fix-issue` 上是我们为了完整演示拼的教学示例，不是官方文档里逐字出现的同一个代码块，PRD 在此如实说明，slide 上也不称其为"官方原文一字不差"。
- **P06 支持文件三类（Instructions / Code / Resources）+ 目录树**：`code.claude.com/docs/en/skills`「Add supporting files」+ `platform.claude.com/.../agent-skills/overview`「Level 3+: Resources」两处的分类和原话（Code 类明确写「脚本代码本身不进 context，只有运行结果进」）；目录树直接用官方 `pdf-processing` 的真实结构（`FORMS.md` / `REFERENCE.md` / `scripts/fill_form.py`），不是我们编的通用占位符。
- **P06b「有没有 YAML，Level 1 token 上限是否一样」**：官方依据同一份 `code.claude.com/docs/en/skills` 里 description 字段「若省略则退到正文第一段」+「skill 列表文字封顶 1536 字符」两条规则的组合推论，通用结论，不举任何具体项目的 Skill 为例。
- **P09 `/run-skill-generator`**、**P16 bundled skills 列表**：均为 `code.claude.com/docs/en/skills` 原文提到的真实功能/真实命令名，非杜撰。
- **P17b 国内替代工具**：只提工具/品类名称（Cline / Continue / Roo Code / Kimi K3 / DeepSeek / 智谱 GLM / 通义 Qwen / 字节 Trae / 通义灵码 / 百度文心快码 Comate / 智谱 CodeGeeX），不引用具体跑分、价格、版本号——这类数字变化快，容易讲完就过期；对比只做「生态成熟度」定性描述（Agent 自主能力 / Skills·MCP 支持程度），老师可按上课当天的最新情况口头补充具体产品。
