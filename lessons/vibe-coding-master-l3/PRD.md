# PRD — Vibe Coding 大师课 · 第三节课 deck（vibe-coding-master-l3）

## 业务背景

- 对应课程：`curriculum/ai-builder`（Vibe Coding / AI Builder Bootcamp）
- 对应 lesson：Phase 1 · L110「用 AI 生成 Design System：UI 布局与统一样式语言」（120 min 直播）
- 内容 SoT：`curriculum/ai-builder/public/outline.json` 该 lesson 的 `learningMaterial`（学习目标 / 核心概念 / 动手练习 / FAQ / 小结）。deck 不新增事实，只做视觉化 + 工作坊框架。
- 品牌事实修正：lesson 原文称「匠人学院全站在用 neo-brutalism」已过时——现行品牌是双 register（Register A 精致软风 = 官网默认；Register B neo-brutalism = deck/教学物料）。deck 里把这一点讲对，顺带当「一套 token 描述一种风格」的双案例。

## 学习目标（deck 要带学员到达的状态）

1. 说清楚为什么 Vibe Coding 第一步不是写页面，而是先定 Design System
2. 读懂 design token：颜色/字体/间距/圆角/阴影收敛成变量
3. 给 AI 写一份「设计宪法」（CLAUDE.md / .cursorrules），让它每次生成 UI 都引 token
4. 用一套真实 token 让 AI 批量产出风格统一的组件，并做一次压力测试

## 节奏表（120 min 工作坊）

| 时间 | 章节 | 页 | 内容 |
|---|---|---|---|
| 0–5 | 开场 | P00–P01 | 封面 + 今日路线图 |
| 5–20 | Why | P02–P03 | 翻车现场（AI 每页长得不一样）→ 根因：没给视觉约束，AI 在重新发明设计 |
| 20–45 | What · token | P04–P08 | token 概念 → 最小 token 集代码 → 真实案例（JR 双 register）→ neo-brutalism 三条 token 锁死 → token 化威力（元例子：这份 PPT） |
| 45–60 | How · 设计宪法 | P09–P11 | 光有 token 不够 → 宪法模板（5 铁律 + 立即打回）→ 修宪法 > 改页面 |
| 60–70 | 休息 | — | （口头，不占页） |
| 70–110 | Workshop | P12–P15 | Lab①写 tokens.css → Lab②写宪法 → Lab③AI 生成三组件查 var() → Lab④压力测试深色 hero |
| 110–120 | 收尾 | P16–P18 | FAQ（没设计师 / 项目做一半）→ 小结 + 下节预告（brownfield） |

## 逐页 spec

| # | 文件 | 内容 |
|---|---|---|
| P00 | `L3P00_Cover` | 封面：用 AI 生成 Design System · UI 布局与统一样式语言 |
| P01 | `L3P01_Agenda` | 120 min 路线图（Why → token → 宪法 → Workshop） |
| P02 | `L3P02_Chaos` | 翻车现场：登录页蓝按钮 8px vs 仪表盘紫按钮 12px，拼起来一盘散沙 |
| P03 | `L3P03_RootCause` | 根因：AI 不笨，是你没给约束；正确顺序 = 先 Design System 再生成页面（地基比喻） |
| P04 | `L3P04_TokenConcept` | token = 把设计决策变成命名变量；改一处全站变；AI 引变量不现编 hex |
| P05 | `L3P05_TokenCode` | 最小 token 集 `:root {}` 代码页（颜色/边框阴影/字体/间距 4pt） |
| P06 | `L3P06_JRCase` | 真实案例：`jr-academy-brand/tokens.css` `--jr-*` 唯一真相源 + 双 register（A 官网软风 / B 教学物料 neo）——同一套 token 机制描述两种风格 |
| P07 | `L3P07_NeoTokens` | neo-brutalism 只用三条 token 锁死：结构 3px 黑边直角 / 阴影 6px 6px 0 / 配色暖底+白卡+深 CTA |
| P08 | `L3P08_TokenPower` | token 化威力：任意卡片 3 行 var() = 和全站一模一样；元例子 = 这份 PPT 本身（theme.ts） |
| P09 | `L3P09_Constitution` | 光有 token 文件不够，AI 不会自己读 → 设计宪法放 CLAUDE.md / .cursorrules |
| P10 | `L3P10_ConstitutionCode` | 宪法模板代码页：5 条铁律 + 「立即打回」红线 |
| P11 | `L3P11_FixLaw` | 修宪法 > 改单个页面：压力测试思路（故意让 AI 做深色 hero 看破不破坏） |
| P12 | `L3P12_Lab1` | Lab①：新建 tokens.css，六类变量各定一组（可抄 neo 那套） |
| P13 | `L3P13_Lab2` | Lab②：CLAUDE.md 写 5 铁律 + 2 红线 |
| P14 | `L3P14_Lab3` | Lab③：AI 一次生成价格卡/CTA/输入框，检查是否都走 var() |
| P15 | `L3P15_Lab4` | Lab④：压力测试深色 hero → 破坏了就回宪法补规则重做 |
| P16 | `L3P16_FAQ` | FAQ：没设计师 token 哪来（抄成熟的，统一=80% 专业感）/ 项目做一半来得及吗（brownfield 预演） |
| P17 | `L3P17_Summary` | 小结四句：先定 DS / token=变量 / 宪法=让 AI 引变量 / 改宪法比改页面值钱 |
| P18 | `L3P18_Next` | 下节预告：老项目改造 Brownfield |

## 数据纪律

- 无外部统计数据，全部内容来自 lesson learningMaterial + `jr-academy-brand/DESIGN.md` 双 register 事实，无需 research 数据源。
- 代码示例（token / 宪法）与 lesson 正文逐字一致，学员课后看 learningMaterial 能对上。
