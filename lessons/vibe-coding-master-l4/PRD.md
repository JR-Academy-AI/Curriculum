# PRD — Vibe Coding 大师课 · 第四节课 deck（vibe-coding-master-l4）

## 业务背景

- 对应课程：`curriculum/ai-builder`（Vibe Coding / AI Builder Bootcamp），第四节 120 min 动手工作坊。
- 内容 SoT：本 PRD（逐页 spec 见下）。deck 不新增事实，只做交付链路的视觉化 + 工作坊框架。
- 系列定位：前三节完成三层 Source of Truth（人 / 产品 / 视觉），本节把静态资料变成**别人能访问、每次提交都自动验证和部署的产品**。
- 一句话定位：前三节教 AI 应该做什么；第四节让它变成一条真实交付链路 —— `PRD + CLAUDE.md + tokens.css → Scaffold → GitHub → Actions → Pages / Vercel`。

## 学习目标（deck 要带学员到达的状态）

1. 从已有 PRD 让 Agent 生成最小可运行项目框架（scaffold first，不是一次性做完整产品）。
2. 项目在本地通过 install / typecheck / build（本地绿色基线）。
3. 把代码 + PRD + rules + tokens 放进同一个 GitHub Repository。
4. 看懂并使用最小 GitHub Actions CI，亲眼验证它能拦住坏代码（红灯实验）。
5. 用 Actions 把静态构建产物发布到 GitHub Pages。
6. 用 Vercel Git Integration 拿到 Preview + Production URL。
7. 对照 PRD 验收线上版本，而不是以「URL 能打开」为完成标准。

## 非目标（deck 明确不讲）

- 不重新定义需求、不重讲 PRD 基础结构。
- 不追求完成全部业务功能；主线只做 scaffold + placeholder + 一个最小核心 Flow。
- 不讲复杂后端 / 数据库迁移 / 云基础设施 / 自定义域名 / 监控 / 计费 / 生产级安全。
- 不在主线用 Actions 调 Vercel CLI（Actions 管 CI + Pages；Vercel 用官方 Git Integration）。

## 节奏表（120 min 工作坊）

| 时间 | 章节 | 页 | 内容 |
|---|---|---|---|
| 0–8 | 开场 | P00–P02 | 封面 → 你手里有什么（三层 SoT）→ 本地能跑 ≠ 交付 |
| 8–18 | 交付地图 + 输入检查 | P03–P04 | 今日交付流水线全景 → 输入包检查（PRD + Rules + Tokens）|
| 18–48 | PRD → Scaffold → Local Gate | P05–P08 | 控制生成范围 → 从 PRD 提架构 → Scaffold Prompt → 本地绿色基线 |
| 48–60 | GitHub SoT | P09 | Repo 结构 + 首个 commit + 密钥检查 |
| 60–75 | GitHub Actions CI | P10–P12 | CI 在保护什么 → 最小 pipeline → 红灯实验 |
| 75–92 | GitHub Pages | P13–P14 | Artifact → Deploy → Pages 高频坑（base / SPA / 404）|
| 92–115 | Vercel + Preview Flow | P15–P17 | 三个环境 → PR→Preview → Merge→Production |
| 115–120 | 验收与收尾 | P18–P19 | 对照 PRD 验收 checklist → 从文档到交付系统 + 作业 |

## 逐页 spec（22 页）

| # | 文件 | 内容 |
|---|---|---|
| P00 | `L4P00_Cover` | 封面：从 PRD 到 Production · Scaffold / Actions / Pages / Vercel |
| P01 | `L4P01_ThreeSoT` | 你现在手里有什么：三层 SoT（人 / 产品 / 视觉）—— 前三节的产物盘点 |
| P02 | `L4P02_LocalIsNotDelivery` | 本地能跑 ≠ 交付：localhost 只有你能访问、没人验证、没有历史 |
| P03 | `L4P03_Pipeline` | 今日交付流水线全景：PRD → Scaffold → GitHub → Actions ↘ Pages / Vercel |
| P04 | `L4P04_InputCheck` | 输入包检查：PRD 核心 Flow / MVP 一个动作 / 验收标准 / tokens.css；不过关用兜底 PRD |
| P05 | `L4P05_ScaffoldNotProduct` | Scaffold ≠ 完整产品：区分 scaffold / MVP 功能 / 完整产品，禁止「一句话做完」失控 |
| P06 | `L4P06_ExtractArch` | 从 PRD 提取项目架构：需求 → pages / components / routes / data，哪些先 placeholder |
| P07 | `L4P07_ScaffoldPrompt` | Scaffold Prompt：投屏指令（先出 scaffold plan，确认后再生成）代码页 |
| P08 | `L4P08_LocalGate` | Local Green Gate：install / typecheck / build 三条全绿 + 已接 tokens.css |
| P08b | `L4P08b_VibeWay` | **交付段锚点**：接下来还是 Vibe Coding —— 你不敲命令，你指挥 Agent（你说意图 → Agent 执行 git/workflow/PR/部署 → 你 review + 验证结果 + 做决策）|
| P09 | `L4P09_GitHubSoT` | GitHub = 项目 SoT：让 Agent 把项目变成 repo（「你对 Agent 说」提示框）+ 你只管验证四项（密钥/.env、README、同 repo、可 build）|
| P10 | `L4P10_WhatCIProtects` | CI 在保护什么：push/PR 自动跑 install/typecheck/build，坏代码进不了 main |
| P11 | `L4P11_MinimalCI` | 让 Agent 写 CI，你读懂它拦什么：「你对 Agent 说」提示框 + Agent 生成的 ci.yml（你 review，不背缩进）|
| P12 | `L4P12_RedLightExp` | 红灯实验：让 Agent 建 ci.yml → 故意 TS error → workflow 红 → 修复 → 变绿。过关 = 亲眼看它拦住坏代码 |
| P13 | `L4P13_PagesPipeline` | 让 Agent 配好 Pages 发布，你只验证 URL：提示框 + Agent 生成的 pipeline（build→configure→upload→deploy）+ 过关 URL |
| P14 | `L4P14_PagesPitfalls` | Pages 高频坑：Vite `base` 子路径 / 资源 404 / SPA 刷新 404 |
| P15 | `L4P15_VercelEnvs` | Vercel 三个环境：Local / Preview / Production；Actions 与 Vercel 不重复负责 |
| P16 | `L4P16_PRPreview` | 让 Agent 开分支提 PR：「你对 Agent 说」提示框 + PR 一开你盯的四项（CI / Preview URL / 验收 / 再 merge）|
| P16b | `L4P16b_PRBody` | PR ≠ 一句 push：让 Agent 按团队 PR 模板填 body（固化在 .github/pull_request_template.md）+ 通用 PR body 骨架（Summary / Related Issue / Type / Changes / Design Note / Checklist / Evidence）|
| P17 | `L4P17_MergeProd` | Merge → Production：Preview 验收后 merge → main → Pages + Vercel Production 更新 |
| P18 | `L4P18_AcceptChecklist` | 对照 PRD 验收：Repository / CI / Pages / Vercel / PRD 五段 checklist |
| P19 | `L4P19_Summary` | 从文档到交付系统：四句小结 + 课堂最终产物清单 + 作业（PRD v1.1 变更闭环）|

## 教学口径：Vibe Coding，不是传统 CLI（2026-07-12 Rick 定）

GitHub / CI / 部署这一段**不教「背 git 命令、手写 YAML 缩进」**，全部用 Vibe Coding 口径：

- 每个动作先给「你对 Agent 说」的**自然语言意图**（`PromptBox` 组件，紫色抬头，和深色 mono 代码区分开）。
- git 命令 / workflow / 部署配置 = **Agent 替你生成的产物**，页面上以「🤖 AGENT 生成 · 你 review」呈现，命令降级为脚注「你不用背」。
- 学员的活 = **给对意图 + review Agent 产出 + 验证结果真跑通 + 守住 Agent 保证不了的**（密钥不进 git、URL 能开、CI 真能拦坏代码、对照 PRD 验收）。
- P08b 是这一段的锚点页，先立这个心智模型，后面 P09/P11/P13/P16 全部照此展开。

## 数据纪律

- 无外部统计数据，内容来自 GitHub / Vercel 官方文档（下列 6 个官方链接）。
- 命令、YAML、pipeline 图均照 GitHub / Vercel 官方文档，但呈现为「Agent 产出，你 review + 验证」而非「你要背的东西」。
- 官方依据（截图/流程以此为准）：
  - GitHub Pages custom workflows — docs.github.com/pages
  - Vercel for GitHub / Git deployments — vercel.com/docs/git
  - Vercel Vite guide — vercel.com/docs/frameworks/frontend/vite
