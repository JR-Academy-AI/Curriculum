# Changelog — AI Engineer Bootcamp

## 2026-08-25

- 新增 `cohort-7.html` 可分享大纲页，由 `outline.json` 动态渲染 13 周/25 场正式 Live；新增 1242×1660 第七期主宣传海报、PNG 下载能力和无文字 production Agent 系统主视觉，并更新海报实验室与 DESIGN 期次定位
- 强化第七期第一亮点：每周一场理论 + 一场独立实践，实践从 W1 的 CareKind starter/ADLC 开始，在同一 repository 连续完成 UI、workflow、Voice、RAG、MCP、Agent、Memory、Harness、Routing 与 production review，不再表述为附属 Lab
- 保存第七期最终总结与审计：新增 25 场/45 小时结构、W1–W13 依赖链、最终交付、10 项新亮点、78.1/100 通用质量评分、P0/P1/P2 缺口、Advanced Track 与权威参考；为全部正式 Live 补齐 `cohort7Week`、`cohort7Track`、`cohort7SessionOrder`、level、learns 和 confirmed status，并给 W13 增加结构化课前验收清单
- 合并原 W13–W17 为 `L171 CareKind Production Readiness Review & Demo Day` 180 分钟最终实践：学生课前自助完成 Remote MCP/Auth、部署、CI/CD 与标准运行基础，Live 验收 production eval、tracing、AI red team、failure/kill-switch drill、release/rollback/incident decision 与最终答辩；总量更新为 25 场 Live、45 小时，旧 `L180` 降为 Legacy
- 确认 W12：`L183 Production AI System Design & Model Routing` 理论 Live + `C7P12 Build the CareKind Model Router inside the Agent Harness` 实践 Live，覆盖 model adapters、routing policy、provider allowlist、fallback/escalation、trace 与 router eval；`L180 Demo Day` 移为延长实践线最终候选
- 修正 W11 实践为 `C7P11 Build the CareKind Production Agent Harness`：在 W10 Memory 后实现 lifecycle、adapters、hooks、budgets、checkpoint/replay、idempotency、human approval 与 trace；原 `L171` 8 项 production eval/safety 内容完整移为 W13 延长实践候选
- 确认 W11 实践 `L171 Productionize the CareKind Agent`：完整记录 10–15 条 production eval cases、deterministic checks、LLM-as-a-Judge、Agent regression gate、Langfuse/等价 tracing、prompt injection/memory poisoning/越权/PII 测试、运行 threshold 与 release/rollback/incident runbook
- 更新 W10：`L138 Harness Engineering for Production AI Agents` 升为理论 Live，`C7P10` 改为 CareKind 安全长期 Memory 实践，覆盖 confirmed-fact write gate、scope、TTL、冲突/更正/删除、permission、audit 与 poisoning tests；`L149` 改为 60 分钟必修录播，Model Routing 实践周次待排
- 确认 W9：`L133 Agent Memory & State Management` 理论 Live + `L119 Build a Bounded CareKind Agent` 实践 Live；W9 占位降为 Legacy，实践仅使用 task/session state，不实现长期 resident memory
- 确认 W8：`L122 Multi-Agent Architectures` 理论 Live + `L104 Build and Connect a CareKind MCP Server` 实践 Live；将 W8 占位降为 Legacy，MCP 实践锁定四个 tools、本地 CLI/stdio、permission、audit 与 troubleshooting
- 恢复第七期已确认理论线：W3 `L37 Context Engineering`、W4 `L58 RAG Fundamentals`、W5 `C7T05 RAG Quality/RAGAS`、W6 `L101 Tool Calling/MCP/CLI`、W7 `L112 Agents/ReAct`，理论线不随独立实践线重排
- 重排第七期 W1–W7 实践线：W1 只做 ADLC/starter 理解，W2 完整产品 UI，W3 非 AI Care Workflow，W4 Voice STT 首次 AI，W5 Structured Documentation，W6 Policy RAG，W7 RAGAS + CareKind MVP；原 MCP/Agents/Multi-Agent 周次撤回候选并将 W8–W9 标为待讨论

## 2026-08-24

- 更新第七期 W5–W7：W5 改为 `RAG Quality, Testing & Improvement` + `CareKind RAG Testing with RAGAS`，完整 eval/CI/GraphRAG 延后；W6 前移 Tool Calling、MCP 与 CLI 并构建 CareKind MCP Server；W7 锁定 Agents/ReAct 理论课，实践课以明确占位保留待讨论
- 升级 Phase 10 为「AI Governance, Safety, Observability & Evals」，新增 AI Governance & Risk Management 直播课和 ISA Governance Pack Quest，覆盖 AI Inventory、风险分级、RACI、System Card、数据/模型/供应商治理、上线审批、审计证据、kill switch 与 Incident Runbook（课程总数 290 → 292，直播 59 → 60）
- 同步 Phase 1–10 当前 lesson 统计到课程介绍 Deck，并更新课程概览与架构页的 Governance 展示
- 落地 `COHORT_07_OUTLINE.md` 第七期正式大纲与课程 SoT：12 周固定 12 场理论 + 12 场实践，新增 W1 AI Coding + ADLC、W2 Design System/UI/Animation、W3 CareKind MVP、W5 Production RAG Architecture、W10 Compliance-aware Model Routing；RAG、Agents、ReAct、Multi-Agent 保持 Live，稳定理论转录播，Fine-Tuning 深度实操转选修（课程总数 292 → 297，步骤 886 → 916，正式直播 60 → 24，共 42 小时）
- 更新第七期 W1 理论课为 `GenAI Foundations & AI Engineer Landscape`：90 分钟聚焦 AI/ML/Deep Learning/GenAI/LLM 关系、LLM 基础、Applied AI 系统全景与岗位边界；Ops 只保留生产意识预告，API 深入和 ISA Proposal 移出第一节
- 更新第七期 W2：理论课改为 `How LLMs Work: Transformer, Tokens & API Behaviour`，Transformer/Input Embeddings 作为课前录播，Live 聚焦架构到 API behaviour 与面试表达；实践课锁定 CareKind Care Note Drafting，补齐 PCW/EN/RN 权限、Draft/Review/Confirmed/Failed/Escalated 状态、animation、accessibility、Design Review 与合规型 UI 验收
- 更新第七期 W3/W4：W3 改为 `Context Engineering & Reasoning Patterns` + CareKind single-model baseline，保留 Chain of Thought 并建立 Context Contract、trust boundary、JSON Schema、10 条测试与 Context Blueprint Quest；W4 在同一 baseline 上加入 `RAG Fundamentals` + CareKind Policy RAG from Scratch，明确 programmatic citation、no-answer、个人数据不入 vector store及无预设提升百分比（当前 297 lessons / 908 steps / 24 Live）
- 建立第七期 W0–W4 唯一学习顺序：94 个候选条目收束为 29 个 Required、14 个诊断后补齐和 51 个 Lesson Pool，逐周标明理论课前、理论 Live、课后 Lab、实践 Live、Quest 验收与预计学习时长；Pool 按 Infrastructure/Production、Recording/Reference、Evaluation、Replaced/Legacy 分类，后续课程只能通过“从 Pool 移入具体周”进入主线

## 2026-06-16

- 新增整套推广三件套（PERSONAS / FUNNEL_PLAN / PROMOTION_PLAN）
  - PERSONAS.md：3 个核心买家画像（在职转 AI 开发者 / 留学转行求 offer / 资深工程师补 LLM 工程）+ 2 个不会买的人（纯小白 / 白嫖型），全部为 🚧 AI 推断版（GT 0.15，待真实访谈+评论+客服校准）
  - FUNNEL_PLAN.md：完整四档漏斗 + 单引流课形态，三档承诺按结果分级（自学/教学/陪跑），定价为 AI 推断占位待 curl 销售页核实
  - PROMOTION_PLAN.md：识别为 Type 1 求职转型 bootcamp，按 T-30→D+30 8 周时间轴排 task 矩阵，主推校友转岗案例 + 7 项目对得上 JD + Faculty 实名，红线不承诺包就业/offer

## 2026-04-21

- 新增 88 节「自学」Information lesson，绑定 ai-engineer / prompt-master / vibe-coding / openclaw 4 个 Learn 方向的章节
  - 每个 learn 章节作为独立 lesson，遵循 `curriculum/CLAUDE.md` "Learn 章节也是独立 Lesson" 规则
  - 覆盖 55 节原有 concept 课，横跨所有 10 个 Phase
  - lesson 编号用 `L{N}{a/b/c}` 子后缀，与已有 Quest 子编号共存
  - 总课数 198 → 286，totalSteps 723 → 869

## 2026-04-20

- 公开课 PPT 升级：slide deck 从 13 张扩充到 36 张（同步自 presentations/ 工作区）
  - 覆盖 Cover / Pain / Market / Capability Map / 10 Phases / Demo / Projects / Teachers / P3 Incubator / Competitors / FAQ / Pricing
  - S26 P3 Incubator 重写：去掉 82% 数据，强调多人协作 + Production 级 + Enterprise 级
- curriculum.html 顶部加 "▶ 打开课程介绍 PPT" 按钮，链接到 ./index.html

## 2026-04-14

- 新增 Phase 4: Harness Engineering（8 节课，90+30+120+30+90+20+60+30 = 470min）
  - L132 Harness Engineering 基础（LIVE）
  - L133 Harness 架构剖析：以 Claude Code 为例
  - L134 从零构建 AI Coding Agent Harness（LIVE）
  - L135 Lab: Tool Loop 实现（InteractiveLab）
  - L136 Harness 工程化（LIVE）
  - L137 Harness Patterns 参考
  - L138 Skills 范式：可复用 Agent 能力单元（LIVE）
  - L139 Quest: 在你电脑上构建个人 Harness
- 原 Phase 4（模型优化 + AI Evals + 毕业）顺延为 Phase 5
- 课程总数 164 → 172，Phase 总数 4 → 5
- 生成 V4_V5_AUDIT.md — 第四期 vs 第五期完整审计报告

## 2026-04-13

- 审计第四期 production syllabus（95 lessons），发现 44 节有录播视频
- 生成视频映射表：37 节能映射到第五期 / 7 节第五期缺失
- 新增第四期独有的 7 节课到第五期 outline.json（157 → 164 lessons）
  - Phase 1: L29 The Transformer Architecture, L30 Input Embeddings
  - Phase 3: L120-L123 MCP 源码解读/工程集成/实战项目 01/实战项目 02
  - Phase 5: L169 学员小组项目展示

## 2026-04-06

- 拆分 61 个 Lab 引用为独立 InteractiveLab lesson（96 → 157 节课）
- Lab 类型自动分类：prompt-lab / llm-lab / python-lab / aws-lab / git-lab
- 每节课后面紧跟对应的 Lab 练习课
- 重新编号 L01-L157

## 2026-04-05

- 从本地 outline.html（v5 最新版）生成 outline.json（96 lessons, 4 phases, 452 steps）
- 重建 internal.html 为课程大纲管理页面
- 96 个 lesson description 待填充（TODO）
