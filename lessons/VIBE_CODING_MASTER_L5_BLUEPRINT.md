# Vibe Coding 大师课 · 第五节蓝图（草稿）

> 状态：DRAFT 0.1
> 主题：Skills —— 把你反复用的套路，固化成 Agent 的可复用能力
> 课型：120 分钟动手工作坊
> 本文只定义课程，不包含 deck 实现。
> 承接第四节：L4 里你一遍遍对 Agent 说几乎一样的话；L5 把这些套路变成 Skill，一句话调用。

## 1. 课程定位

回想第四节，你对 Agent 说过多少遍几乎一样的话：

- 「先读 PRD/CLAUDE.md/tokens，别实现完整功能，先出一份 scaffold plan……」
- 「帮我加一个最小 CI，push/PR 时 typecheck+build，任一失败标红……」
- 「按团队模板把这个 PR 的 body 填好：概述、issue、类型、风险、测试计划……」

第三次说同一段话的时候，你就该停下来问一句：**为什么不把它变成一个"技能"，以后一句话调用？** 这就是 Skills。

```text
你反复对 Agent 说的话（每个项目 / 每个 PR 都要说一遍）
                  ↓  第 3 次说同一段时
        把它打包成一个 Skill
   （SKILL.md：name + description + 步骤 / 模板 / 规则）
                  ↓
   以后一句话触发，Agent 自动照这套做
                  ↓
   你的 Skill 库 = Agent 越用越强的"专长"，还能全团队共享
```

一句话定位：

> 前几节你一直在"手把手指挥"Agent；第五节教你把重复的指挥，沉淀成 Agent 自带的能力 —— 从"每次都讲一遍"升级到"一次定义、处处复用"。

> 这也是 SoT 主线的再一次兑现：**Skill 是"能力层"的 Source of Truth**，改一处 `SKILL.md`，所有用到它的地方一起变。

## 2. 学员起点

学员上课前应有：

- 前四节的体感，尤其 **L4 里那些重复出现的 prompt**（scaffold plan / CI / PR body 等）—— 它们就是本节的原料。
- 本机可运行 Claude Code（或 Cursor），能看到 `.claude/skills/` 目录。
- 一个"自己本周重复做了 ≥3 次"的活（写周报、改简历、生成某类文件、某套代码规范检查……）当练习素材。

不熟悉 L4 的学员用老师提供的**重复 prompt 清单**当原料，照样能做出第一个 Skill。

## 3. 学习目标

课程结束后，学员能够：

1. 说清 **Skill 是什么**：一段打包好的、可复用的"做某类事的专长"（`SKILL.md` + 可选模板/脚本），Agent 在需要时自动调用。
2. 分清 **Skill vs 一次性 prompt vs rules/记忆**：什么值得做成 Skill（重复出现 + 有固定步骤/标准）。
3. 读懂一个**真实 Skill 的结构**：frontmatter（`name` / `description` / 何时用）+ 正文（步骤、规则、模板）。
4. 从零**写一个 Skill**：把 L4 的某个重复动作（如"出 scaffold plan"或"填 PR body"）固化下来。
5. **触发/调用** Skill：靠 `description` 被自动匹配，或显式 `/name` 调用。
6. 写好 `description` —— 这是 Skill "该出现时才出现"的命门。
7. **迭代** Skill：用 → 发现不足 → 改 `SKILL.md` → 再用（Skill 也是 SoT，改一处全局生效）。

## 4. 非目标

本节明确不做：

- 不讲 MCP / Hooks / Schedule / Subagent（那些是别的能力层，放后续）。
- 不讲把 Skill 打包发布成公开插件 / marketplace 的工程。
- 不做复杂多文件、多脚本的重型 Skill；本节只做"一个 `SKILL.md` + 顶多一个模板"。
- 不追求做很多 Skill，只求**做透一个、真正调用起来**。

## 5. 核心教学决策

### 5.1 用本仓库真实的 Skill 当教材
不讲空概念。直接翻开 `.claude/skills/` 里现成的 Skill（如 `talk-deck`、`xhs-poster`），看真实的 `SKILL.md` 长什么样。**元例子**：这套大师课的 deck，本身就是 `talk-deck` 这个 Skill 做出来的 —— Skill 不是玩具，是这门课的生产工具。

### 5.2 原料来自 L4 的重复 prompt
本节不凭空造练习。直接拿 L4 里学员反复说过的话（scaffold plan / CI / PR body）当素材，把其中一个变成 Skill。学员对这些 prompt 已经有肌肉记忆，固化起来最有"啊原来如此"的感觉。

### 5.3 延续 Vibe Coding 口径
写 Skill 本身也用"指挥 Agent"：你说「把这个重复套路做成一个 skill」，Agent 起草 `SKILL.md`，你 review + 调它的 `description` 和步骤。你盯的是 Agent 定不了的：**这个 Skill 到底什么时候该触发、边界在哪**。

### 5.4 Skill = 能力层的 SoT
把 Skill 明确挂到贯穿全课的 SoT 主线上：一次定义、处处复用、改一处全局变。这是"用结构化的东西指挥 AI"在**能力**维度上的又一次落地（L1 讲 SoT，L2 讲项目 SoT，L3 讲视觉 SoT，L5 讲能力 SoT）。

### 5.5 判断线：不是所有事都该做成 Skill
明确给一条"该不该做 Skill"的判断线（见 §9），避免学员把一切都 Skill 化 —— 一次性的、没固定套路的活，不值得。

## 6. 课堂最终产物

每位完成者应有：

- 一个**自己写的、能被调用的 Skill**（一个 `SKILL.md`，可含一个模板文件）。
- 一次**真实调用记录**：让 Agent 用上这个 Skill 完成一件事。
- 一条清晰的 `description`（能让它该触发时触发、不该时不触发）。
- 一次**迭代**：用完发现不足 → 改 `SKILL.md` → 再用一次。
- 一句话能说清：我这个 Skill 解决的是哪类重复劳动。

## 7. 120 分钟流程

| 时间 | 阶段 | 课堂动作 | 阶段产物 |
|---|---|---|---|
| 0–10 min | 开场 | 回放 L4：你重复说了多少遍同样的话 | "该做成 Skill"的共识 |
| 10–20 min | Skill 是什么 | 概念 + 与 prompt/rules 的区别 | 一条清晰定义 |
| 20–30 min | 拆真实 Skill | 打开本仓库 `talk-deck`/`xhs-poster` 的 SKILL.md | 看懂结构 |
| 30–42 min | description 是命门 | 好/坏 description 对比；触发机制 | 会写触发描述 |
| 42–60 min | 动手：写第一个 Skill | 挑 L4 一个重复动作 → 指挥 Agent 起草 SKILL.md → 你改 | 一个 SKILL.md |
| 60–65 min | 休息 | —（口头） | — |
| 65–80 min | 调用它 | 触发 Skill 跑一次真实任务 | 一次成功调用 |
| 80–95 min | 迭代 | 发现不足 → 改 SKILL.md → 再跑 | 迭代后的 Skill |
| 95–107 min | 边界与坑 | 什么时候别用 Skill；description 太泛/太窄的翻车 | 判断线 + 避坑 |
| 107–120 min | 收尾 | Skill 库越攒越强 + 团队共享 + 作业 | 作业清单 |

## 8. 各阶段教学细节（要点）

### Skill 是什么（一句话 + 一张图）
Skill = 打包好的一套"做某类事的专长"，放在 `.claude/skills/{name}/SKILL.md`。Agent 遇到匹配的任务时（靠 `description` 判断）自动把它调出来照做。**它不是一次性 prompt，是可复用、可版本管理、可共享的能力。**

### 拆一个真实 Skill（投屏本仓库现成的）
打开 `.claude/skills/talk-deck/SKILL.md`：看它的 frontmatter（`name` / `description`）+ 正文（技术栈锁定、目录规范、步骤、硬规则）。点破：「这套课的每一份 deck，都是这个 Skill 产出的 —— 你今天学的，就是怎么造这种生产工具。」

### description 是命门（投屏对比）
- ❌ 太泛：「帮忙做设计」→ 什么都触发，乱套。
- ❌ 太窄 / 只写做什么不写何时用：→ 该用时它不出现。
- ✅ 好：写清**这个 Skill 是干嘛的 + 什么场景该用**（Use when …）。
点破：`description` 决定 Skill"该出现时才出现"，是 Skill 最重要的一行。

### 动手：把 L4 一个重复动作做成 Skill（投屏指令示意）
```text
我在 L4 里每个项目都要对你说同样一段话来生成 scaffold plan。
把它做成一个 Claude Code Skill：
- 起个名字，写清 description（什么时候该用它）
- 正文放固定步骤：先读 PRD/CLAUDE.md/tokens，先出 plan 再生成，等等
先给我 SKILL.md 草稿，我改完 description 再落地。
```

### 迭代（Skill 也是 SoT）
用一次发现"它漏了让我确认计划这一步" → 打开 `SKILL.md` 补一句 → 再跑。强调：**你维护的是那一份 SKILL.md，不是每次重打的 prompt。**

## 9. 该不该做成 Skill？判断清单 + SKILL.md 结构

**该做成 Skill（满足多条）**
```markdown
- [ ] 这件事你重复做了 ≥3 次（或明显会反复做）
- [ ] 它有相对固定的步骤 / 标准 / 模板
- [ ] 每次靠临时 prompt，质量/格式会漂
- [ ] 值得团队里其他人也照同一套做
```
**不该做 Skill**：一次性的、每次都不一样、没有固定套路的活 —— 直接 prompt 就好。

**SKILL.md 最小结构**
```markdown
---
name: <短横线命名>
description: <这个 Skill 干嘛 + 什么时候该用（Use when …）>
---

## 步骤 / 规则 / 模板
1. …
2. …
（可选：配一个模板文件放同目录，正文里引用）
```

## 10. Slide 蓝图（建议 20 页）

| 页 | 标题 | 页面任务 |
|---|---|---|
| P00 | Skills · 让 Agent 学会你的套路 | 封面 |
| P01 | 你在 L4 说了多少遍同样的话 | 钩子：重复 prompt 回放 |
| P02 | Skill 是什么 | 打包的可复用专长，Agent 自动调 |
| P03 | Skill vs 一次性 prompt vs rules | 分清三者 |
| P04 | 什么值得做成 Skill | 判断线（重复≥3 + 固定套路）|
| P05 | 拆一个真实 Skill | 本仓库 talk-deck / xhs-poster |
| P06 | SKILL.md 结构 | frontmatter（name/description）+ 正文 |
| P07 | description 是命门 | 好/坏对比 |
| P08 | Skill 怎么被调用 | 描述匹配 / 显式 /name |
| P09 | 元例子 | 这套课的 deck 就是 talk-deck 做的 |
| P10 | 挑一个你的重复动作 | 动手准备（用 L4 的重复 prompt）|
| P11 | 让 Agent 帮你起草 Skill | vibe 口径 |
| P12 | 写 SKILL.md | name + description + 步骤 |
| P13 | 第一次调用它 | 触发 + 跑一次 |
| P14 | 迭代 | 用→改 SKILL.md→再用（Skill 也是 SoT）|
| P15 | 边界：什么时候别用 Skill | 本节"压力测试" |
| P16 | Skill 库越攒越强 | 团队共享 |
| P17 | 常见坑 | description 太泛/太窄、塞太多 |
| P18 | 小结 | 一次定义、处处复用 |
| P19 | 从指挥到沉淀 | 作业 + 下节预告 |

## 11. 老师课前准备

- 挑好 2 个本仓库真实 Skill（`talk-deck`、`xhs-poster`）做投屏拆解案例。
- 准备一份 **L4 重复 prompt 清单**，给学员当"要固化成 Skill"的原料。
- 一个**做好的示范 Skill**（如"scaffold-plan"），现场从零写一遍 + 调用一次的完整演示。
- 好/坏 `description` 对比示例（一个太泛、一个刚好）。
- Skill 不触发 / 乱触发的翻车反例（用来讲 description 的重要性）。

## 12. 高频风险与课堂降级

| 风险 | 处理 |
|---|---|
| 学员想不出做啥 Skill | 直接发 L4 重复 prompt 清单，任选一个 |
| Skill 死活不触发 | 检查 `description`——九成是没写清"何时用" |
| Skill 乱触发 / 抢戏 | description 太泛，收窄场景描述 |
| 一个 Skill 塞太多事 | 拆成小而专的多个，别做"万能 Skill" |
| 环境里看不到 skills 目录 | 用显式 `/name` 调用演示；目录问题课后排 |
| 时间不够 | 保住"写一个 + 调用一次"；迭代与边界老师演示、学员课后 |

## 13. 作业

1. 挑一件你**本周重复做了 ≥3 次**的活。
2. 把它做成一个 Skill（一个 `SKILL.md`，`description` 写清何时用）。
3. 真调用一次，完成一件真实任务。
4. 用完改一次 `SKILL.md`（迭代），再调用一次。
5. 提交：`SKILL.md` + 一次调用的截图 + 一句话说明它省了你哪类重复劳动。

## 14. 官方依据

- Claude Code · Skills / Agent Skills（机制、`SKILL.md` frontmatter、`.claude/skills/` 位置以官方文档为准）。
- **活教材**：本仓库 `.claude/skills/` 下的现成 Skill（`talk-deck` / `xhs-poster` / `bootcamp-plan` 等）—— 真实、可直接投屏拆解。

## 15. 待确认项

进入 deck 开发前需要最终决定：

1. 课程时长固定 120 min 还是可延长（同 L4，倾向可延长）。
2. 示范 Skill 用哪一个：现拆本仓库 `talk-deck`，还是老师现造一个"scaffold-plan"？（建议两个都用：先拆现成的，再从零造一个小的）
3. 学员练习是否统一"把 L4 某个重复 prompt 固化"，还是各选各的重复劳动？
4. 讲到多深：只讲单文件 `SKILL.md`，还是也点一下带模板/脚本的 Skill？
5. 是否顺带点一句 Skill 与后续 MCP / Subagent 的分界（各是什么、别混）？
6. 下节预告指向什么（候选：MCP/连接，或 L6 暂定的"动态后端"）—— 需与整体系列排序一起定。
