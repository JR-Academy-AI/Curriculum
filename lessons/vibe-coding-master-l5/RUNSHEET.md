# 第五节课 Runsheet《Skills》· 直接照讲

> 主题：**把你反复对 Agent 说的套路，固化成一句话就能调用的能力** —— 承接 L4：那节课里你一遍遍对 Agent 说几乎一样的话（scaffold plan / CI / PR body），这节把它们变成 Skill。
> 时长：~140 分钟（各段建议时长加总；同 L4，能长就长，别硬卡点）。
> 全程口径：**Vibe Coding —— 写 Skill 本身也是指挥 Agent**，你说需求、Agent 起草 `SKILL.md`，你盯的是「这个 Skill 该什么时候触发、边界在哪」。
> 工具：本机 Claude Code（或 Cursor），`.claude/skills/` 目录。deck 23 页，`?page=N` 跳页。
> 红线：过关标准不是「SKILL.md 文件存在」，是**真的被调用一次、迭代一次**。

## 课前（老师）先备好

- 一份 **L4 重复 prompt 清单**（scaffold plan / CI / PR body 三段原文），给没做完 L4 的学员当练习原料。
- 一个**做好的示范 Skill**（如 `scaffold-plan`），现场能从零写一遍 + 调用一次的完整演示。
- 提前打开 Anthropic 官方文档页面 `code.claude.com/docs/en/skills` 和 `platform.claude.com/docs/en/agents-and-tools/agent-skills/overview`，投屏直接切换到 `summarize-changes` / `pdf-processing` / `fix-issue` 那几段真实例子；网络不稳的话提前截图或把代码块复制成本地文件备用。
- 好 / 坏 `description` 对比示例（一个太泛、一个太窄、一个刚好）。
- 一次 Skill「不触发」和「乱触发」的翻车录屏或截图，备用救场。
- 上课前刷一遍 page 17b 提到的国内工具现状（Trae / 通义灵码 / Comate / CodeGeeX 等更新很快）——deck 里只给到品类和定性差异，具体产品口碑/功能有变化就当场口头补充，别照本宣科念旧信息。

---

## 1. 分钟级 runsheet（建议节奏，可延长）

| 段 | 建议时长 | deck 页 | 干什么 |
|----|------|--------|--------|
| ① 开场 · 回放 L4 | 10' | 1 | 你重复说了多少遍同样的话 → 该做成 Skill 的共识（§2） |
| ② Skill 是什么 | 10' | 2–4 | 概念 + 与 prompt/rules 的区别 + 判断线（§3） |
| ③ 拆真实 Skill | 19' | 5–6b | 打开 Anthropic 官方文档给的真实 SKILL.md 例子，讲组成格式 + 渐进式披露 + Project/Global Skill 区别（§4） |
| ④ description 是命门 | 12' | 7–9 | 好/坏对比 + 触发机制 + 元例子（§5） |
| ⑤ 动手：写第一个 Skill | 24' | 10–12（含 11b） | 挑重复动作 → 指挥 Agent 起草 →（原理：为什么这样组词）→ 你改，落地前先定 Project/Global（§6） |
| ☕ 休息 | 5' | — | 口头 |
| ⑥ 调用它 | 15' | 13 | 触发 Skill 跑一次真实任务（§7） |
| ⑦ 迭代 | 15' | 14 | 发现不足 → 改 SKILL.md → 再跑（§8） |
| ⑧ 边界与坑与环境 | 16' | 15–17b | 什么时候别用 Skill；常见坑；国内环境替代方案（§9） |
| ⑨ 收尾 + 作业 | 13' | 18–19 | 小结 + 布置作业 + 预告下节（§10） |

---

## 2. ① 开场（念，约 3 分钟，page 1）

先问一个问题：上节课，你对 Agent 说过多少遍几乎一样的话？

「先读 PRD/CLAUDE.md/tokens，别实现完整功能，先出一份 scaffold plan……」——这句话你在每个项目开头都要讲一遍。「帮我加一个最小 CI，push/PR 时 typecheck+build，任一失败标红……」——每次要 CI 都要讲一遍。「按团队模板把这个 PR 的 body 填好……」——每次开 PR 都要讲一遍。

这不是巧合，这是**你已经沉淀出了一套套路**，只是它还锁在你脑子里，每次都要重新打字。

第三次说同一段话的时候，你就该停下来问一句：**为什么不把它变成一个「技能」，以后一句话调用？** 这就是今晚的主题——Skills。

一句话定位：前四节你一直在「手把手指挥」Agent；这节教你把重复的指挥，沉淀成 Agent 自带的能力。

---

## 3. ② Skill 是什么（念 + page 2–4）

（page 2）一句话：Skill 是打包好的一套「做某类事的专长」，放在 `.claude/skills/{name}/SKILL.md`。Agent 遇到匹配的任务时，靠 description 判断，自动把它调出来照做。它不是一次性 prompt，是可复用、可版本管理、可共享的能力。

（page 3）容易混的三个概念，一次讲清：**一次性 prompt** 只用一次，没有固定套路，讲完就完；**Rules / 记忆**（比如 CLAUDE.md）是长期生效的「永远这样做」的约束，被动生效，不是「调用」；**Skill** 是重复出现 + 有固定步骤的专长，主动被匹配调用，可版本管理、可共享。

（page 4）那什么值得做成 Skill？看四条，满足多条才值得：这件事你重复做了 ≥3 次；它有相对固定的步骤/标准/模板；每次靠临时 prompt 质量会漂；值得团队里其他人也照同一套做。反过来，一次性的、每次都不一样、没有固定套路的活——直接 prompt 就好，别为了显得专业硬 Skill 化。这条判断线，待会儿第 15 页还会回来考一遍。

---

## 4. ③ 拆真实 Skill（念 + page 5–6b，投屏切到真实文件，~15'）

（page 5）不讲空概念，直接投屏 Anthropic 官方文档给的两个真实例子：`summarize-changes`（总结未提交改动、标出风险）和 `pdf-processing`（处理 PDF、填表单）。看它们真实的 frontmatter——注意 `summarize-changes` 那个例子**连 `name` 字段都没写**，靠目录名当调用名，这也印证了「frontmatter 全部字段可选」这条规则。

（page 6，组成格式，讲细一点）SKILL.md 的组成格式，两块必填、两块可选：

- **frontmatter · 必填**：`name`（短横线命名，其实也能省略）+ `description`（干嘛 + 何时用）。
- **frontmatter · 可选**：`argument-hint`——给 `/name` 显式调用时提示参数长什么样。官方文档给的真实例子是 `fix-issue` 这个 Skill（用 `/fix-issue 123` 调用，123 就是 issue 号），配上 `argument-hint: [issue-number]`，Agent 就知道该问你要哪个参数、自动补全时也提示得出来。
- **正文 · 必填**：步骤 / 规则 / 模板，你希望 Agent 每次照做的那套动作。
- **支持文件 · 可选，分三类**：
  - **Instructions**：更多参考文档（官方 `pdf-processing` 例子里的 `FORMS.md`），内容详细但不是每次都要用，按需读。
  - **Code**：脚本（`pdf-processing` 例子里的 `scripts/fill_form.py`）。这里有个容易漏掉但很值钱的点：**脚本的代码本身从不进 context**——Claude 用 bash 把它跑起来，只有**运行结果**（比如「校验通过」或某条具体报错）会进 context。比起让 Claude 现场生成一遍等价代码，这样省下的 token 是实打实的。
  - **Resources**：素材类——模板、示例输出、数据库 schema、API 文档（`pdf-processing` 例子里的 `REFERENCE.md`），供 Claude 查阅，不执行。
  - `pdf-processing` 这一个官方例子三类都用上了，是个很好的「五脏俱全」范本；但也别觉得每个 Skill 都得搞这么复杂——大多数重复套路，一个 `.md` 文件就说得清楚，从最简单的开始，需要了再加。

（page 6b，原理：渐进式披露——这是 Anthropic 官方文档里的原话，不是我自己起的名字）这里有一个问题：如果以后你攒了几十个 Skill，Agent 会不会每次都要把几十份 SKILL.md 全读一遍，把 context 撑爆？答案是不会，官方文档把这套机制叫 **progressive disclosure（渐进式披露）**，分三层加载，而且给了具体数字：

- **Level 1 · 常驻元数据**：每个 Skill 只留 `name` + `description`，官方给的数字是**每个 Skill 大约 100 token**——哪怕装了一百个，常驻的也就一万 token 左右，几乎不占地方。
- **Level 2 · 触发时读正文**：description 匹配上任务，Agent 才把**完整的 SKILL.md 正文**读进来，官方建议控制在**5000 token 以内**（对应 `.claude/skills` 那份文档说的「SKILL.md 别超过 500 行，细节挪到别的文件」）——而且只读匹配到的这一个，不会把其他 99 个也读一遍。
- **Level 3 · 按需读支持文件**：正文里引用的模板、脚本、参考资料，官方说的是「读之前 0 token」——Agent 真走到那一步才去读那个文件。

跟它对比一下 `CLAUDE.md` / rules——那种是**每次都全量加载**，不管这次任务用不用得上；Skill 是**用得上才加载**。这也是为什么你的 Skill 库可以一直往上攒，不用担心「Skill 太多会拖慢 Agent」。

（容易问到的一个问题，提前讲清楚）有没有写 YAML frontmatter，Level 1 占的 token 是不是不一样？**答案是：token 上限一样，差的不是 token，是匹配精度。** Level 1 的成本取决于「最终展示的那段 description 文字有多长」，而这段文字不管来源是哪，都有统一上限——官方写的是这段列表文字封顶在 1536 个字符。这段文字从哪来不影响这个上限：写了 YAML 的 `description`，用你写的这段（截到上限为止）；完全没写 frontmatter，官方会退到「正文第一段」当 description 用（一样截到上限为止）。所以有没有 YAML，本质上不改变 Level 1 占多少 context——两边都被同一把尺子卡住。真正的差别在**匹配质量**：你手写的 description 是专门为「匹配」设计的（干嘛+何时用，措辞精炼）；没写的话退到正文第一段，那段话通常是给人看的开场白，不是为匹配设计的，很可能啰嗦、跑题，甚至被硬生生截在句子中间——触发准确率打折，但不代表它占用的 context 一定更小。

顺带把 Skill 的好处捋一遍：**可复用**（一次定义处处调用）、**一致性不漂**（不再每次讲的都不太一样）、**高效**（刚讲的渐进式披露，不占用不必要的 context）、**团队共享**（改一处全团队受益）、**可版本管理**（Skill 是文件，能 git 追踪、review、回滚）。

（口头补充，不对应新 slide，别漏讲）刚才看的两个例子只演示了 SKILL.md 长什么样，没交代它们放在哪。这就带出 Skill 还有另一个维度——**你是为「这个项目」定制的，还是为「你自己」定制的？**

- **Project Skill**：放在项目根目录下的 `.claude/skills/{name}/SKILL.md`。跟着这个仓库走，只有打开这个项目的人才用得到，会被 git 追踪、团队共享。适合「离开这个项目就没意义」的套路——比如一个专门讲某个代码库内部约定的 Skill，脱离那个项目的目录规范，它就没法用。
- **Global / 个人 Skill**：放在你自己电脑用户主目录下的 `~/.claude/skills/{name}/SKILL.md`（不在任何一个项目仓库里）。不管你打开哪个项目、切到哪个仓库，Claude Code 都看得到它——因为它挂在「你」身上，不挂在某个项目上。适合「跟哪个项目无关，你个人一直这么干」的套路——比如你自己习惯的 commit message 风格、你个人的周报模板、你写 PR body 一贯的语气。

两者格式完全一样（都是 `SKILL.md` + frontmatter + 正文），**唯一区别是放的位置**。怎么设置：项目级就是我们今晚一直在做的事——直接让 Agent 落地到当前项目的 `.claude/skills/` 里；个人级你只需要明确告诉 Agent「把这个存到我用户目录下的 `~/.claude/skills/`，不要放进当前项目仓库」，Agent 就会落到那边，不会被这个项目的 git 追踪到。

（老实说一句，别把话说死）今晚只讲这两层，是因为对个人和小团队来说这两层最常用。官方文档里其实还有另外两层：**Enterprise**（组织级，走公司统一配置，管理员管）和 **Plugin**（插件自带的 Skill，装了插件就有）。同名冲突时官方的优先级是 Enterprise > Personal > Project。这两层今晚不展开，用得到时再去查文档。

> 官方依据：`https://code.claude.com/docs/en/skills`（Claude Code Skills 完整参考，含 frontmatter 字段表、四层位置、优先级规则）+ `https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview`（Progressive Disclosure 三层加载模型的原始定义与 token 数字）。以上两条渐进式披露和 Project/Personal 位置的讲法，都是本节写讲稿时核对过这两份文档确认的，不是凭印象写的。

判断该放哪，问自己一句话：**「离开这个项目，这套路还有意义吗？」** 有意义 → 个人 Skill；没有这个项目的上下文就用不了 → 项目 Skill。今晚练习做的这一个，大概率是项目 Skill（多半跟你当前这个代码库的规范挂钩）；但你以后自己的写作习惯、review 习惯这些，更适合放进个人 Skill。

### ▶ 操作

投屏打开官方文档对应章节：

```
code.claude.com/docs/en/skills（看 fix-issue 的 argument-hint、
  pdf-processing 的支持文件结构）
platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
（看 summarize-changes / pdf-processing 的 frontmatter）
```

带学员读一遍 description 那一行，问：「这句话，Agent 靠它判断什么？」——答案是「现在这个任务，算不算该调用我」。再带学员看一下 `fix-issue` 的 `argument-hint: [issue-number]`，问：「这个字段是给谁看的？」——答案是「给显式 `/fix-issue` 调用时的你看的，提示该传什么参数」。

---

## 5. ④ description 是命门（念 + page 7–9）

（page 7）这是 Skill 里最重要的一行。看反例：太泛——「帮忙做设计」，什么都能匹配上，乱套；太窄或只写做什么不写何时用——「生成小红书海报」没写场景，该用时它不出现。好的写法：写清**这个 Skill 是干嘛的 + 什么场景该用**（Use when …），两句都不能少。

（page 8）Skill 怎么被调用？两条路：**路径 A** 描述匹配自动触发——Agent 读你的任务，跟每个 Skill 的 description 对一遍，匹配上就自动调出来；**路径 B** 显式 `/name` 调用——你明确知道要用哪个，直接喊名字，跳过匹配。两条路都行。

（page 9，元例子，点破全场）Skill 不只能替你做事，还能替你**记住怎么把一件事做起来**。Claude Code 官方自带一个真实功能——`/run-skill-generator`：它先从一个干净环境把你的项目摸一遍（装什么依赖、配什么环境变量、怎么起服务），然后把这套摸索出来的流程**固化成一个新 Skill**，存在 `.claude/skills/run-<name>/` 里。跑过一次之后，`/run`、`/verify`，甚至这个仓库里任何其他 Agent，都直接照着这份记录走，不用每次重新摸索一遍。Skill 不是玩具，它可以是项目真实的生产设施——一次记录，处处复用。

---

## 6. ⑤ 动手：写第一个 Skill（念 + page 10–12、11b，投屏动手 ~22'）

（page 10）现在挑一个你要固化的重复动作。没做完 L4 的，直接拿老师给的重复 prompt 清单——scaffold plan / CI / PR body 任选一个；做完 L4 的，也可以挑一件**本周重复 ≥3 次的活**——写周报、改简历、生成某类固定格式文件、某套代码规范检查……都行。

（page 11，示范怎么开口）写 Skill 本身还是指挥 Agent，不是你去背 SKILL.md 的语法。看我投屏这段：

```
我在 L4 里每个项目都要对你说同样一段话来生成 scaffold plan。
把它做成一个 Claude Code Skill：
- 起个名字，写清 description（什么时候该用它）
- 正文放固定步骤：先读 PRD/CLAUDE.md/tokens，先出 plan 再生成，等等
先给我 SKILL.md 草稿，我改完 description 再落地。
```

Agent 起草，你 review + 调它的 description 和步骤——你盯的是 Agent 定不了的：这个 Skill 到底什么时候该触发、边界在哪。

（page 11b，原理页，别一翻而过）停一下，把刚才那段提示词拆开看——它为什么这样组词？不是随便写的，背后有四条道理，以后你自己开口指挥 Agent，套这四条就行：

**第一，上下文先行。** 「我在 L4 里每个项目都要对你说同样一段话来生成 scaffold plan」——先讲背景和动机，Agent 才知道为什么要做这件事，而不是接到一个凭空冒出来的指令。

**第二，产出形态先定。** 「把它做成一个 Claude Code Skill」——一句话锁定你要的到底是什么类型的东西。不锁定，Agent 会自己猜——猜错了，返工。

**第三，结构化字段拆开要。** 「起个名字，写清 description（什么时候该用它）；正文放固定步骤」——把你想要的每个部分点名列出来，而不是笼统说「写个 Skill」。字段越具体，Agent 漏项越少。

**第四，检查点前置。** 「先给我 SKILL.md 草稿，我改完 description 再落地」——明确说「先给草稿、我审完再落地」，决定权留在你手里，不让 Agent 一步做到「生效」。

这四条不止用在写 Skill 上——你回头看 L4 那几段重复 prompt（scaffold plan / CI / PR body），会发现它们全都是按这个套路组的词。以后你自己面对新场景开口指挥 Agent，也照这四条检查一遍，而不是想到哪说到哪。

（page 12）落地前先做一个决定（回顾 §4 讲过的）：这个 Skill 存到当前项目的 `.claude/skills/`（Project Skill，团队共享），还是存到你用户主目录的 `~/.claude/skills/`（个人 Skill，跟着你走）？问自己「离开这个项目，它还有意义吗」。今晚多数人做的这个大概率是 Project Skill——直接告诉 Agent 存进当前项目即可；如果你的例子其实是「不管什么项目我都这么干」，就明确让 Agent 存到 `~/.claude/skills/`。决定好位置，再把确认好的内容存进对应的 `SKILL.md`。核对三件事：name 是不是短横线命名、description 是不是「干嘛 + 何时用」都写了、步骤是不是具体到能照做。

### ▶ 操作

给 Agent（以 scaffold-plan 为例）：

```
我在每个项目开头都要对你说同样一段话来生成 scaffold plan
（先读 PRD.md、CLAUDE.md、tokens.css，先别实现完整功能，
先出一份 scaffold plan 让我确认，再生成最小可运行框架）。
把它做成一个 Claude Code Skill：
- name: scaffold-plan
- description 写清干嘛 + 什么时候用（Use when 开始新项目或新 feature 需要先出计划时）
- 正文放这套固定步骤
先给我 SKILL.md 草稿，我确认后你再落地到 .claude/skills/scaffold-plan/SKILL.md。
```

1. Agent 出草稿，检查 description 是不是「干嘛 + 何时用」都有。
2. 确认后落地保存。

---

## 7. ⑥ 调用它（念 + page 13，投屏动手 ~15'）

现在验证它真的能用。**过关标准不是文件建好了，是它真的被调用、真的跑出结果。**

开一个新任务，别显式提 Skill 名字，就说人话：「帮我出个 scaffold plan」。观察 Agent 是不是自动匹配调出你刚写的 Skill。再核对产出——是不是照着你写的步骤走的。

如果没被自动调用，先别怀疑步骤，先怀疑 description：九成是没写清「何时用」。

### ▶ 操作

1. 开新对话，说：「帮我出个 scaffold plan」（不点名 Skill）。
2. 观察它有没有自动带出你的 Skill；没带出就显式 `/scaffold-plan` 跑一次，确认步骤本身没问题。
3. 检查产出是否包含你写的固定步骤（先读三份文件、先出 plan、等确认）。

---

## 8. ⑦ 迭代（念 + page 14，投屏动手 ~15'）

调用一次之后，几乎一定会发现点不足——比如「它漏了让我确认计划这一步，直接就生成代码了」。这时候你改的不是这次的 prompt，你改的是 `SKILL.md` 本身。

打开 SKILL.md，补一句「必须等用户明确确认计划后才能生成代码」，保存。再跑一次，验证这次它记得等确认了。

这就是「用 → 改 → 再用」的循环，也是本节最重要的心智模型：**你维护的是那一份 SKILL.md，不是每次重打的 prompt**。改一处，以后所有调用它的地方一起变——这就是能力层的 SoT，跟 L1 的人的 SoT、L2 的产品 SoT、L3 的视觉 SoT、L4 的交付 SoT 是同一套逻辑。

### ▶ 操作

1. 用刚才调用的结果，找一个不满意的地方。
2. 打开 `.claude/skills/{name}/SKILL.md`，改一句规则或步骤。
3. 再跑一次，验证改进生效——这就是「亲眼看见迭代成立」。

---

## 9. ⑧ 边界与坑与环境（念 + page 15–17b）

（page 15，压力测试）学完 Skill 最容易犯的错，是把一切都 Skill 化。回到判断线：只做一次的活、每次需求都不一样、步骤简单到一句话讲清楚比读 SKILL.md 还快、你自己都说不清什么时候该用它——这几种，直接 prompt 就好，别硬做成 Skill。

（page 16）Skill 库不是一个人的。Claude Code 自己就随包带了一批真实 Skill——`/doctor`、`/code-review`、`/batch`、`/debug`、`/loop`、`/claude-api`、`/run`、`/verify`、`/run-skill-generator`，`/` 菜单里直接能看到。Anthropic 自己还维护一个公开的开源 Skill 仓库 `github.com/anthropics/skills`，任何人都能拉取、能贡献；甚至有插件市场，一行 `/plugin install skill-creator@claude-plugins-official` 就能装一整套别人写好的 Skill。你自己团队的 `.claude/skills/` 也是同一个道理——一开始一两个，用着用着就会像这样越攒越多，你改进一次，所有人跟着变好。

（page 17，常见坑）死活不触发 → 先查 description，九成是没写清何时用；乱触发/抢戏 → description 太泛，收窄场景；一个 Skill 塞太多事 → 拆成小而专的多个；看不到 skills 目录 → 用显式 `/name` 调用先跑通，目录问题课后排。

（page 17b，正视一个真实问题）讲到这里，得停下来聊一个很多同学心里都在打鼓的问题：**如果我在国内网络环境下用不了 Claude Code，今晚学的这套还有用吗？**

有用——但工具会不一样。「把重复套路打包成一份可复用的说明」这个原理，跟具体用哪个工具没关系；`SKILL.md` / `description` / `.claude/skills/` 是 Claude Code 的具体实现，换个工具，原理照样成立，只是落地方式不同。给你三条退而求其次的路线：

**路线 A：国产模型 + 开源 Agent 壳。** 用 Cline、Continue、Roo Code 这类开源的「Agent 外壳」，接 Kimi K3、DeepSeek、智谱 GLM、通义 Qwen 这些国产模型。这条路的 agent loop 体验最接近 Claude Code，壳是开源的，模型可以自由换。差距在哪？Skills / MCP 这套生态还在追赶，复杂长任务的自主可靠性通常还有一段距离。

**路线 B：国内一体化编程工具。** 字节 Trae、通义灵码、百度文心快码 Comate、智谱 CodeGeeX 这类开箱即用的产品，中文生态和本地工具链集成得很顺手。差距在哪？Agent 自主执行能力和插件生态通常不如 Claude Code 丰富，「Skill 化」这套机制大多数还没有对应的东西。

**路线 C：合规渠道访问 Claude。** 机构或企业通过有资质的渠道采购 Claude API 或 Claude Code 的访问权限，拿到的还是 Claude 本体的能力。这里必须提醒一句：**别为了图方便，用来路不明的「中转 / 代理」服务处理真实项目的代码和密钥**——数据安全和合规风险是你自己担，不值得为了省事去冒这个险。

选型看你的场景：图省事、图生态全，就想办法用回 Claude Code；图合规、图顺手，路线 A/B 也能把「Skill 化」这套方法论跑起来，只是生态成熟度还在追——心里有数就行，别卡在「装不上就学不下去」。

---

## 10. ⑨ 收尾 + 作业（念，约 3 分钟，page 18–19）

（page 18）回头看今晚做的事：把「每次都讲一遍」的重复劳动，变成了「一次定义、处处复用」的能力。Skill = 打包好的可复用专长；判断线是重复≥3次+固定套路+值得共享；description 是命门；Skill 也是 SoT，改一处全局变。

（page 19）作业，一个完整闭环：挑一件你本周重复做了 ≥3 次的活，做成一个 Skill（description 写清何时用），真调用一次完成一件真实任务，用完改一次 SKILL.md 再调用一次，提交 SKILL.md + 一次调用截图 + 一句话说明它省了你哪类重复劳动。

最后留一句：这五节课，你的能力一直在升级——L1 到 L4 教你怎么把「人 / 产品 / 视觉 / 交付」写成 Agent 能懂的真相源，这节教你把「反复讲的话」也变成一份真相源。下节课，我们让产品从「能看」变成「能用」——接上 Auth 和 Database，让它能登录、能存、只看得到自己的。下节课见。

---

## 附一：现场卡住了怎么降级

- 学员想不出做啥 Skill → 直接发 L4 重复 prompt 清单，任选一个；连 L4 都没做的，给「写周报」这种万能例子兜底。
- 拆真实 Skill（page 5–6）时网络不好、打不开官方文档页面 → 提前准备好 `summarize-changes`/`pdf-processing`/`fix-issue` 的 frontmatter 截图或复制好的文本，直接投屏念，不依赖当场联网。
- 学员分不清 Project Skill 该放 `.claude/skills/` 还是 Global Skill 该放 `~/.claude/skills/`（口头补充的内容，没有对应 slide 可回看）→ 用一句话拉回：「离开这个项目，这套路还有意义吗？有意义放个人（`~/`），没意义放项目（`./`）」；今晚练习的例子不确定的，一律先放项目级，个人级课后自己判断。
- description 好坏对比（page 7）学员觉得抽象、没代入感 → 别只讲外部例子，直接对着学员自己正在写的那份 SKILL.md 草稿念一遍好坏对比。
- Skill 死活不触发 → 先检查 description——九成是没写清「何时用」；改完别急着从头走一遍完整流程，先显式 `/name` 调用验证 Skill 本身没问题，再回头单独调 description。
- Skill 乱触发/抢戏 → description 太泛，收窄场景描述；不要因为一次乱触发就推翻整个 Skill，先缩小触发范围重试一次。
- 一个 Skill 塞太多事 → 拆成小而专的多个，别做「万能 Skill」；现场来不及拆的，先记下来留作课后作业的一部分。
- 环境里看不到 skills 目录 → 用显式 `/name` 调用演示；目录问题课后排。
- 学员本机确实没有 Claude Code 环境（国内网络限制，当场装不上）→ 不卡在「装环境」这一步：让学员用文本编辑器把 SKILL.md 写出来、讲清楚思路即可，调用环节（page 13）改成老师用自己的环境现场代跑一次给全班看；学员课后按 page 17b 的三条路线之一（哪怕先用开源 agent 壳接国产模型）自己补跑一次真调用，作业照交不误。
- Agent 起草的 SKILL.md（page 11）内容太长/太复杂，学员看不懂该改哪 → 换成老师的示范 Skill（`scaffold-plan`）当基准，先跑通一个简单版，复杂版留课后自己迭代。
- 学员挑的「重复动作」（page 10）其实只做过一次，不满足判断线 → 别在「算不算够格」上纠结太久，直接换成 L4 清单里现成的一个，把时间留给动手。
- 迭代环节（page 14）学员不知道该往 SKILL.md 里加哪一句 → 给一句万能提示模板：「用刚才调用结果里最不满意的一点，反推该给 SKILL.md 加哪条规则」。
- 国内替代工具（page 17b）讲到一半，学员开始争论「哪个工具更好」→ 拉回主线：今晚讲的是原理，工具怎么选因人而异，不在课堂上下定论，留到课后小群讨论；老师也别被拽进去比较具体产品优劣。
- 原理页（page 11b）时间紧张、学员已经能自己组词了 → 可以压缩成一句话带过（「上下文先行、产出形态先定、字段拆开要、检查点前置」），不必四条逐一展开。
- 时间不够，只能保一条主干 → 优先级从高到低：①「写一个 + 调用一次」（page 10–13）> ② 迭代一次（page 14）> ③ 判断线与常见坑（page 4、15、17）> ④ 原理页 / 国内替代方案（page 11b、17b，可老师口头带过或留作课后阅读）。
