---
title: Vibe Coding 大师课 — 大纲重构提案（2026-06-29）
status: ship
owner: @lightman
priority: high
---

# Vibe Coding 大师课 · 大纲重构提案

> **SoT = `curriculum/ai-builder/public/outline.json`，所有改动只落这一个文件。**
> 本提案先定**结构**，你 greenlight 后再改 SoT → 刷新中转区 `skills-data/training-outlines/ai-builder.json` → SDM diff → 确认 → 推 prod。
> 改名（提升班 → 大师课）连带 Phase 3/4 重定位 + Phase 1 直播节叙事，一次性收口。

## 0. 决策已定（2026-06-29）
- Phase 3/4 → **用 deck 新框架**（让 SoT 向已讲的 deck 看齐，统一单一真相）
- Phase 1 → **直播节排序按 L1/L2/L3 叙事 + 新增 Design System 节**

## 1. 总量（基本不变）
8 周 / ~110 节 / ~20 节直播 / 4 Phase。直播是骨架，Lab/Quest 动手，Information 自学垫料。
重构只动**直播节的标题/顺序/定位**和 **Phase 3/4 的主题**；Lab/Information 大体保留（个别随主题微调/降级为自学）。

⚠️ **_id 纪律**：每个 lesson 带 `_id`(ObjectId) 对应 production。
- **保留的节** → `_id` 不动，只改 title/description/learningMaterial
- **新增的节**（如 Design System、企业记忆系统）→ 新建，prod 同步时分配 _id
- **被移除/降级的节** → 走 `BOOTCAMP_PROD_STATE` 孤儿清理流程，不直接删 prod

---

## 2. Phase 1 — Vibe Coding 入门 & 个人 AI OS（Week 1-2）
> 旧名「入门 & PRD」→ 新名「入门 & 个人 AI OS」。直播节按三节课叙事重排，PRD 正式教学并入 L2。

**直播节新阵容（6 节，骨架）**：
| # | 直播节 | 对应 | 变更 |
|---|--------|------|------|
| 1 | 什么是 Vibe Coding + 个人 AI OS / SoT（**公开试听**，简历案例） | L1 deck `vibe-coding-master` | 改：旧 L01 扩成「Vibe Coding + 个人 SoT/AI OS」 |
| 2 | 产品思维 + ADLC：自己发现需求 → 写 PRD → 整份交给 agent | L2 deck `vibe-coding-master-l2` | 合并：旧 L12/L15（PRD 两节）并为一节，前置产品思维 |
| 3 | 老项目改造：让 AI 读懂 + 安全改一个真实 existing 项目（brownfield） | L3 runsheet | **新增直播** |
| 4 | Design System：用 AI 生成 UI 布局与统一样式系统 | — | **新增直播**（概念从 Phase 4 提上来，强调设计语言一致性） |
| 5 | Prompt / Context Engineering + .cursorrules / CLAUDE.md 实战 | — | 保留（旧 L21） |
| 6 | Claude 协助 Debug：从报错到修复完整流程 | — | 保留（旧 L27） |

**降为自学（不直播）**：工具安装与配置（旧 L04）、四工具对比（旧 L08）—— 已是 Information/Lab，符合你「这些自学就行」。
**Lab/Quest 保留**：.cursorrules 实战、Context Engineering、给真实项目写 CLAUDE.md Quest 等。

---

## 3. Phase 2 — Skills, MCP & Agent 架构（Week 3-5）
> **不动主题**（这是「把能力固化 + 多 agent」的核心爬坡段，36 节）。
> 仅微调：收尾呼应「毕业北极星 = 同时指挥 10 个独立 agent 并行」。

---

## 4. Phase 3 — AI 自动替你 / 企业干活（自动化）（Week 6）
> 旧名「多模型 & Prompt 精调」→ 新名「AI 自动化」。**重定位 = 让 agent 定时 / 自动 / 闭环地替你和企业干活**，不再以模型选型/prompt 调参为主线。

**直播节新阵容（2-3 节）**：
| # | 直播节 | 变更 |
|---|--------|------|
| 1 | AI 自动化工作流：让 agent 定时/自动替你干活（Schedule / Workflow / Cron） | **新主题**（部分接 Phase 2 的 Schedule，升级为「自动替你干活」） |
| 2 | 企业自动化落地：把重复业务流程交给 agent 跑通闭环 | **新主题** |
| (3) | Codex CLI 高效调试 / 多模型选型 | 保留 1 节直播，其余降为自学参考 |

**降为自学**：多模型选型、CoT/Self-Consistency、Prompt 精调四技巧、性能成本优化 —— 全部保留为 Information，作为「调优参考」垫料，不再占直播。

---

## 5. Phase 4 — AI-native 企业记忆系统 + 云端 agent 部署（Week 7-8）
> 旧名「全栈项目 & 交付」→ 新名「AI-native 企业记忆系统 + 云端部署」。
> **重定位 = ① 团队级共享记忆系统（企业 SoT/知识库）② 把 agent 部署到云端持续运行 ③ 交付 + Review + 毕业项目**。

**直播节新阵容（~6 节）**：
| # | 直播节 | 变更 |
|---|--------|------|
| 1 | AI-native 企业记忆系统：从个人 SoT 到团队共享第二大脑 | **新主题**（接 L1 个人 AI OS，升到企业级） |
| 2 | 云端 agent 部署：让 agent 上云持续替企业跑（Cloudflare Workers / Serverless） | 改：旧「Cloudflare 上线」重定位为「agent 上云持续运行」 |
| 3 | Claude 生成 UI/后端/API 联调（全栈交付） | 保留（旧 L01/L04 全栈部分，UI 设计已移 Phase 1） |
| 4 | 数据库建模 + 数据/知识库协作 | 保留 |
| 5 | 项目展示 + AI 代码 Review 技巧 | 保留 |
| 6 | Quest：用 Claude Code 完成全栈毕业项目并部署上线 | 保留 |

**移除**：旧 L14/L24「生成 Readme/演示脚本」直播 —— 你之前明确「这个删掉」，降为自学或并入 Review 节。

---

## 6. 课程文案同步改（outline.json 顶层字段）
- `name` ✅ 已是「Vibe Coding 大师课」
- `description` / `cardDescription` / `promoDescription` / `courseObjective` / `highlights` → 重写：突出**个人 AI OS → ADLC → 企业 AI OS / 自动化 / 记忆系统**主线 + 「AI coding for everything」+ 北极星「指挥 10 个 agent」
- `targetAudience` / `suitable` → 对齐「不会 AI coding = 失业」的 stakes 叙事

---

## 7. 实施步骤（greenlight 后）
1. 改 SoT `outline.json`：Phase name/summary + 直播节 title/description/顺序 + 新增节 + 顶层文案
2. 重生成中转区 `skills-data/training-outlines/ai-builder.json`
3. SDM `localhost:5188/bootcamp` 拉 local vs prod diff → **给你过目**
4. 你确认 → 一键同步 prod
5. 被移除的旧直播节 → 走 `BOOTCAMP_PROD_STATE` 孤儿清理（不直接删）

> **本提案不改 `jr-omni/curriculum/` 副本**，不动 backups 时间戳快照。
