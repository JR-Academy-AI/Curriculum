# PRD — Vibe Coding 大师课 · 第四节课 deck（vibe-coding-master-l4）

> 架构基线（2026-07-19 Rick 定）：本节改为**前后端分离**——前端上 GitHub Pages，后端 API 上 Vercel，中间靠一条 HTTP 线（`VITE_API_BASE` + CORS）连起来。采「折中方案 A」：后端 `/api/compute` 是**主线唯一必做的真 endpoint**；登录 / 历史用 Supabase，但**不作为主线依赖**（时间够再现场，否则占位 + 课后），以保留原「不讲数据库迁移 / 生产级安全」的收敛边界。

## 业务背景

- 对应课程：`curriculum/ai-builder`（Vibe Coding / AI Builder Bootcamp），第四节 ~130 min 动手工作坊（登录/历史留占位可压回 120）。
- 内容 SoT：本 PRD（逐页 spec 见下）。deck 不新增事实，只做交付链路的视觉化 + 工作坊框架。
- 系列定位：前三节完成三层 Source of Truth（人 / 产品 / 视觉），本节把静态资料变成**别人能访问、有真后端替它算、每次提交都自动验证和部署的产品**。
- 一句话定位：前三节教 AI 应该做什么；第四节让它变成一条真实的**前后端交付链路** —— `PRD + CLAUDE.md + tokens.css → Scaffold（前端 src/ + 后端 api/）→ GitHub monorepo → Actions↘Pages（前端） · Vercel（后端 API） → 用一根 API 接通`。

## 学习目标（deck 要带学员到达的状态）

1. 从已有 PRD 让 Agent 生成最小可运行项目框架（scaffold first，不是一次性做完整产品）——框架含**前端 `src/` + 后端 `api/`** 两块。
2. 动手前**划清前后端边界**：给人看的展示归前端；要算 / 要存 / 要验的逻辑归后端（测算 / 登录 / 历史）。
3. 项目在本地通过 install / typecheck / build，并用 `vercel dev` **同起前后端联调**（本地绿色基线，同域先不碰 CORS）。
4. 把代码（前端 + 后端）+ PRD + rules + tokens 放进同一个 GitHub **monorepo**。
5. 看懂并使用最小 GitHub Actions CI（前后端一起验），亲眼验证它能拦住坏代码（**CI 红灯实验**）。
6. 用 Vercel Git Integration 把**后端 API** 部署上线，拿到 Preview + Production URL，并 curl 验活。
7. 用 Actions 把**前端**发布到 GitHub Pages，并让前端通过 `VITE_API_BASE` 指向 Vercel 后端。
8. 亲眼撞上并修复跨域拦截（**CORS 红灯实验**）——理解前后端分离第一天几乎必踩的坑，以及「让后端表态放行」怎么修。
9. 对照 PRD 做**端到端验收**（前端真的调到后端、出本命宿），而不是以「URL 能打开」为完成标准。

## 非目标（deck 明确不讲）

- 不重新定义需求、不重讲 PRD 基础结构。
- 不追求完成全部业务功能；主线只做 scaffold + placeholder + **一个最小核心 Flow**（前端输入生日 → `/api/compute` → 结果页出本命宿）。
- 不讲复杂后端运维（容器 / 微服务 / K8s / 自建数据库 / 负载均衡 / 监控 / 计费 / 生产级安全）；后端只用 **Vercel serverless 函数**，属「最小可跑 API」。
- **数据库不作为主线依赖**：登录 / 历史用 Supabase 托管（免运维），定位为「时间够再现场，否则占位 + 课后」；**不讲数据库迁移 / 建模 / RLS 权限 / 索引优化**等 DB 细节。
- 不讲自定义域名。
- 不在主线用 Actions 调 Vercel CLI（Actions 管 CI + 发前端 Pages；Vercel 用官方 Git Integration 部署后端）。

## 节奏表（~130 min 工作坊；登录/历史压占位可回 120）

| 时间 | 章节 | 页 | 内容 |
|---|---|---|---|
| 0–8 | 开场 | P01–P03 | 封面 → 三层 SoT → 本地能跑 ≠ 交付（产品 = 前端能看 + 后端能算/能记）|
| 8–16 | 交付地图 + 分工 | P04–P05 | 前端 Pages ⇄ **API** ⇄ 后端 Vercel 全景 → 分工（Actions vs Vercel）+ 预告两坑（API_BASE / CORS）|
| 16–23 | 输入检查 + 前后端边界 | P06 | 输入包检查（PRD + Rules + Tokens）+ 划前后端边界（展示 vs 算/存/验）|
| 23–47 | Scaffold（前端+api/）→ Local Gate | P07–P10 | 控制生成范围 → 提架构 + API 契约 → Scaffold Prompt → `vercel dev` 本地同起前后端跑绿 |
| 47–51 | 交付段锚点 | P11 | 你不敲命令，你指挥 Agent（git / YAML / CORS 头都是 Agent 的活）|
| 51–62 | GitHub SoT | P12 | monorepo 结构（src/ + api/）+ 首个 commit + **密钥不进 git** |
| 62–77 | GitHub Actions CI | P13–P15 | CI 在保护什么（前后端）→ 最小 pipeline → **CI 红灯实验** |
| 77–92 | 后端先上 Vercel | P16–P17 | Vercel 三环境（只当后端 API）+ curl 验活 → Supabase 接线 + 密钥放 Vercel 环境变量 |
| 92–110 | 前端上 Pages + 接后端 | P18–P19 | `base` 子路径坑 + `VITE_API_BASE` 指向后端 → **CORS 红灯实验**（跨域被拦 → 配 CORS → 打通）|
| 110–123 | PR + Preview Flow | P20–P21 | 开分支提 PR（后端改动）→ Vercel Preview 验 → PR body（诚实讲前后端 Preview 差异）|
| 123–130 | 验收与收尾 | P22–P24 | Merge → 两条腿一起上线 → 端到端对照 PRD 验收 → 从文档到交付系统 + 作业 |

## 逐页 spec（24 页 · 与 RUNSHEET〈附二〉一致）

> 相对旧 22 页 deck：**Pages 段与 Vercel 段顺序对调**（后端先、前端后），并新增 P05 / P17 / P19 三页，Pages 两页并一页。net +2 页。

| # | 文件 | 内容 | 来源/改动 |
|---|---|---|---|
| P01 | `L4P00_Cover` | 封面：从 PRD 到 Production · 前端 Pages + 后端 Vercel | 复用 |
| P02 | `L4P01_ThreeSoT` | 你现在手里有什么：三层 SoT（人 / 产品 / 视觉）都还躺硬盘 | 复用 |
| P03 | `L4P02_LocalIsNotDelivery` | 本地能跑 ≠ 交付；产品 = 前端能看 **+ 后端能算 / 能记住你** | 微调 |
| P04 | `L4P03_Pipeline` | 交付地图：前端 Pages ⇄ **API** ⇄ 后端 Vercel（两条腿 + 中间一根线）| **重画**（原「同一份站发两处」作废）|
| P05 | `L4P03b_SplitMap`（新）| 分工：Actions 管 CI + 发前端 Pages；Vercel 管后端 API + Preview。预告两坑：`VITE_API_BASE`（前端指向后端）/ CORS（跨域被拦）| **新增** |
| P06 | `L4P04_InputCheck` | 输入包检查（PRD 核心 Flow / MVP 一动作 / 验收标准 / tokens）+ **划前后端边界**（展示归前端；算/存/验归后端）| 扩展 |
| P07 | `L4P05_ScaffoldNotProduct` | Scaffold ≠ 完整产品：分层，禁止「一句话做完」失控 | 复用 |
| P08 | `L4P06_ExtractArch` | 从 PRD 提架构：前端 `src/` + 后端 `api/` 边界 + **前后端 API 契约**（路径 / 入参 / 返回）| **改** |
| P09 | `L4P07_ScaffoldPrompt` | Scaffold Prompt：先出 plan 再生成；含前端 + `api/`、测算真做、登录/历史占位、API 契约 | **改** |
| P10 | `L4P08_LocalGate` | Local Green Gate：install / typecheck / build + **`vercel dev` 同起前后端**，前端真调到本地 `/api/compute` + 已接 tokens | **改** |
| P11 | `L4P08b_VibeWay` | **交付段锚点**：你不敲命令，你指挥 Agent（git / workflow / 部署 / **CORS 头**都是 Agent 产出，你 review + 验证 + 决策）| 复用 |
| P12 | `L4P09_GitHubSoT` | GitHub = 项目 SoT：让 Agent 把项目变成 **monorepo**（src/ + api/）+ 你验四项，重点**密钥 / .env 不进 git**（Supabase key 风险更大）| 微调 |
| P13 | `L4P10_WhatCIProtects` | CI 在保护什么：push/PR 自动跑 install/typecheck/build（**前后端一起**），坏代码进不了 main | 微调 |
| P14 | `L4P11_MinimalCI` | 让 Agent 写 CI，你读懂它拦什么（提示框 + Agent 生成的 ci.yml，你 review 不背缩进）| 微调 |
| P15 | `L4P12_RedLightExp` | 🔴 **CI 红灯实验**：故意在 api/ 写 TS error → 红 → 修复 → 绿。过关 = 亲眼看它拦住坏代码 | 复用 |
| P16 | `L4P15_VercelEnvs` | **后端先上 Vercel**：三环境（Local/Preview/Production）；本项目只当后端 API（只部署 api/）；curl `/api/compute` 验活 | **改 + 前移** |
| P17 | `L4P15b_SupabaseWire`（新）| Supabase 接线（登录 / 历史）+ **密钥放 Vercel 环境变量、不进 git**（代码里没有、运行环境里有）；标注「时间够再现场」| **新增** |
| P18 | `L4P13_PagesPipeline`+`L4P14_PagesPitfalls` | **前端上 Pages**：build → deploy；`base` 设仓库子路径（白屏九成是它）；`VITE_API_BASE` 构建时注入 Vercel 后端网址 | **并 + 改** |
| P19 | `L4P14b_CorsRedLight`（新）| 🔴 **CORS 红灯实验**：前端点按钮 → console `blocked by CORS` → 让 Agent 给后端加 CORS 头（含 OPTIONS 预检）→ 重部署 → 打通。第二个「红→绿」 | **新增** |
| P20 | `L4P16_PRPreview` | 让 Agent 开分支提 PR（**后端改动**：compute 多返回字段）+ 你盯四项（CI / Vercel 后端 Preview URL / 验收 / 再 merge）+ **诚实讲前后端 Preview 差异**（Vercel 有 per-PR Preview，Pages 前端没有）| **改** |
| P21 | `L4P16b_PRBody` | PR ≠ 一句 push：让 Agent 按团队 PR 模板填 body（固化在 .github/pull_request_template.md）+ 通用 body 骨架 | 复用 |
| P22 | `L4P17_MergeProd` | Merge → main 一动，Actions 重发前端 Pages + Vercel 重部署后端，**两条腿一起上线** | 微调 |
| P23 | `L4P18_AcceptChecklist` | 端到端对照 PRD 验收：前端真调到后端出本命宿 / tokens / 登录历史（如做）/ 验收标准。前端能开 ≠ 能用 | **改** |
| P24 | `L4P19_Summary` | 从文档到交付系统：小结（含 CORS / 前后端分离）+ 最终产物清单 + 作业 + 预告「下节把反复用的 prompt 固化成 Skill」| 微调 |

## 教学口径：Vibe Coding，不是传统 CLI（2026-07-12 Rick 定；2026-07-19 扩到前后端分离）

GitHub / CI / 部署 / **CORS 配置**这一段**不教「背 git 命令、手写 YAML 缩进、记 CORS 头字段」**，全部用 Vibe Coding 口径：

- 每个动作先给「你对 Agent 说」的**自然语言意图**（`PromptBox` 组件，紫色抬头，和深色 mono 代码区分开）。
- git 命令 / workflow / 部署配置 / **CORS 响应头** = **Agent 替你生成的产物**，页面上以「🤖 AGENT 生成 · 你 review」呈现，命令降级为脚注「你不用背」。
- 学员的活 = **给对意图 + review Agent 产出 + 验证结果真跑通 + 守住 Agent 保证不了的**（密钥不进 git、跨域要放行、前端真调到后端、URL 能开、CI 真能拦坏代码、对照 PRD 验收）。
- P11（`L4P08b_VibeWay`）是这一段的锚点页，先立这个心智模型，后面 P12/P14/P16/P17/P18/P19/P20 全部照此展开。
- 两个「🔴 红灯 → 绿灯」实验（P15 CI / P19 CORS）是本节的教学骨架：过关标准不是「文件建好了」，而是「亲眼看它红过又绿」。

## 数据纪律

- 无外部统计数据，内容来自 GitHub / Vercel / Supabase / MDN 官方文档。
- 命令、YAML、CORS 头、pipeline 图均照官方文档，但呈现为「Agent 产出，你 review + 验证」而非「你要背的东西」。
- 官方依据（截图/流程以此为准）：
  - GitHub Pages custom workflows — docs.github.com/pages
  - Vercel for GitHub / Git deployments — vercel.com/docs/git
  - Vercel Serverless Functions — vercel.com/docs/functions
  - Vercel Vite guide — vercel.com/docs/frameworks/frontend/vite
  - Supabase Auth / JS client — supabase.com/docs
  - MDN — Cross-Origin Resource Sharing (CORS) — developer.mozilla.org/en-US/docs/Web/HTTP/CORS
