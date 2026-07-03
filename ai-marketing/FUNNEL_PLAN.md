# AI Marketing 漏斗规划（高 level）

> 最近更新：2026-07-03
> 单一真相 — 决策 + 状态 + 日志。具体内容在子目录。
> 入口请从 [`./README.md`](./README.md) 开始。
> 目标用户画像 SoT：[`PERSONAS.md`](./PERSONAS.md)（本次更新已对照核实，见 §1.1 和 §4 决策日志）。

## 0. 生产环境状态（本次核实，非本地缓存）

**这门课在生产环境完全不存在。** 2026-07-03 用 `tools/skills-data-manager/.env.local` 的 `ADMIN_TOKEN` 直接打 `GET https://api.jiangren.com.au/admin-cms/trainings?search=ai-marketing` 和 `search=营销`，两次都拿到 `{"data":[],"pagination":{"total":0}}`——没有 Training 记录，也就没有 trainingId、没有 Program（cohort）、没有真实定价、没有真实开课日期。这个结论和 `PERSONAS.md` §0 独立核实一致（PERSONAS.md 那边多测了 `AI`/`全链路`/`私域` 等关键词，同样全 0）。

**由此得出的硬约束**：

- `operations/PRICING.md`、`intro/README.md`、`operations/HANDOFF.md` 里出现的所有定价、引流课主题、7 天过渡节奏，**全部是规划稿**，不是"生产环境生效价"或"当前招生方案"。写进销售页/招生文案前必须先建出真实 Training + Program 记录。
- `README.md` 里"首讲 2026-07-30、招生窗口 2026-06-20—2026-07-25"是本地规划意向——今天是 2026-07-03，按这个窗口招生应该已经开始 17 天了，但生产环境查无此课，说明这个日期目前只是目标，不是已执行的招生计划。**本次任务范围不含修改 README.md**，这里只是如实记录，避免看到"首讲日期"就误以为已经在招生。

## 1. 漏斗定位

- **方向**：AI 营销全链路（W1 内容 / W2 投放+SEO+GEO / W3 私域+agent / W4 数据整合），4 周
- **业务模式**：4 个独立 ¥99/$29 引流课 + 主课三档（自学/教学/陪跑）
- **核心承诺**：4 周搭建自己的 AI 营销工具链（4 模块各跑通 1 次完整闭环 + 数据复盘报告）
  - 🚨 禁说月入/副业/接单/包就业（详见 memory `feedback_no_revenue_promise.md`）
- **目标用户**：双轨（中文站 P1-P3 / 英文站 P4-P5），完整 10 字段画像见 [`PERSONAS.md`](./PERSONAS.md) §1-2

### 1.1 Persona ground truth 覆盖率 — 低于 skill 门槛，定价节奏是"半拍脑袋"

`course-funnel-architect` skill 自己写的前置依赖条款：PERSONAS.md 的 ground truth 覆盖率 < 50% 时，定价 / 漏斗节奏就是 AI 拍脑袋，应该先去补 GT 再定。现状是 PERSONAS.md 覆盖率 **约 20-25%**，明显没过线——而且缺的不是无关紧要的字段，是决策周期、异议 Top 3、购买触发器这几个直接决定"三档怎么定价""7 天过渡第几天该说什么"的核心字段（PERSONAS.md §7 有详细拆解）。

**这不是说现有三档定价 / 4 引流课方案是错的**——2026-05-04/05 定下这套方案时确实经过了 5 问初始化的正经流程，不是随口编的。但要诚实承认：它是在**没有任何一手用户证据**的情况下，靠课程组既有假设 + AI 对"这类人大概怎么想"的推理定出来的。等 PERSONAS.md 补完决策周期 / 异议 Top 3（哪怕只是 P1-P3 或 P4-P5 一组先补齐），应该回来跑一遍 `main-course-tier-design` 和 `funnel-handoff-design` 复核，而不是假设一次定型就不用再看。见 §5 待确认事项。

## 2. 阶段状态

| # | 阶段 | 状态 | 详情 / 链接 |
|---|---|---|---|
| 1 | 主课大纲 | ✅ v0 | `public/outline.json` 64 lessons / 5 HTML 页 |
| 2 | 主课三档定型 | ✅ | [`operations/PRICING.md`](./operations/PRICING.md) |
| 3 | 4 引流课主题 | ✅ | [`intro/README.md`](./intro/README.md) — 4 主题已定 |
| 4 | 4 引流课 deliverable | ⏳ 0/24 | 各 6 件 = 24 件，见 `intro/wN/TODO.md` |
| 5 | 7 天过渡序列 | ⏳ | [`operations/HANDOFF.md`](./operations/HANDOFF.md) — 待 4 套独立 vs 共用决策 |
| 6 | 18 个新 lab 创建 | ❌ | `jr-academy-web-zh/src/config/prompt-labs/` |
| 7 | 4 个新 Quest 创建 | ❌ | 同上 |
| 8 | deploy.yml 接入 | ❌ | `.github/workflows/deploy.yml` |
| 9 | posters.html 注册 | ❌ | `curriculum/posters.html` |
| 10 | 上线后审计 | — | 待第 1 期 D7 后跑（前提是先有真实 D0，见 §0） |
| 11 | Persona ground truth 补齐 | ⏳ 20-25% | [`PERSONAS.md`](./PERSONAS.md) §7 — 需 ≥50% 才建议复核定价（见 §1.1） |
| 12 | 生产环境 Training 记录建立 | ❌ | `admin-cms/trainings` 目前查无此课，见 §0 |

## 3. 关键文档

| 文档 | 作用 |
|---|---|
| [`README.md`](./README.md) | 单一入口，文档地图 |
| [`PERSONAS.md`](./PERSONAS.md) | 目标用户画像 SoT — 5 persona × 10 字段，GT 覆盖率 20-25% |
| [`public/outline.json`](./public/outline.json) | 主课 64 lessons 数据源 |
| [`intro/README.md`](./intro/README.md) | 4 引流课进度看板 |
| [`operations/PRICING.md`](./operations/PRICING.md) | 4 档定价 + 升级补差价 |
| [`operations/SCHEDULE.md`](./operations/SCHEDULE.md) | 16 直播排课 + 中英时差 |
| [`operations/HANDOFF.md`](./operations/HANDOFF.md) | 7 天过渡序列 |
| [`operations/SALES_PLATFORMS.md`](./operations/SALES_PLATFORMS.md) | 售卖平台对接 |
| [`operations/INSTRUCTORS.md`](./operations/INSTRUCTORS.md) | 讲师 + bio |
| `docs/prd/AI_MARKETING_BOOTCAMP_PRD.md` | PRD（项目根级） |
| `docs/prd/AI_MARKETING_BOOTCAMP_JD_RESEARCH.md` | 市场调研 |
| `docs/prd/AI_MARKETING_BOOTCAMP_PLATFORM_RESOURCES.md` | 平台资源盘点 |
| `docs/prd/AI_MARKETING_BOOTCAMP_MARKETING.md` | Marketing 文案 |

## 4. 决策日志

- 2026-05-03 ❌ 漏斗规划首版 mock（被推翻 — Claude 凭空编了三档定价 + 引流课 + 7 天序列，未与用户对齐）
- 2026-05-04 ✅ 重置 + 真跑 5 问初始化（course-funnel-architect）— 方向 D 全链路 4 周 / 业务模式 A 完整四档 / 双轨中英文 / 大纲从零创建
- 2026-05-04 ✅ 承诺红线确立 — 禁止承诺金钱/收入/订单/入职，禁用"副业"，只承诺过程/作品/技能/服务量
- 2026-05-04 ✅ 主课大纲 v0 落盘 — 64 lessons / 4 周 / outline.json + 5 HTML 页 / 18 新 lab slug 待创建
- 2026-05-04 ✅ 引流课改"4 个独立入口"模式（W1 小红书 / W2 GEO / W3 bot / W4 周报，独立可售）
- 2026-05-04 ⏸ 4-in-1 打包套装暂缓 — 第 1 期跑完看转化数据再评估
- 2026-05-05 ✅ 文档结构重构 — 拆 FUNNEL_PLAN.md 单一文件 → 多子目录（intro/ + operations/ + public/）+ 顶层 README.md 当入口；FUNNEL_PLAN.md 瘦身只留高 level 决策
- 2026-07-03 ✅ 独立核实生产环境状态 — 打 `admin-cms/trainings?search=ai-marketing` 和 `search=营销`，两次均 `total:0`，确认这门课在生产环境不存在，没有 trainingId/Program/真实定价（与同日建的 PERSONAS.md §0 核实结果一致）。本文档新增 §0 记录此事，并把结论写清楚：现有三档定价 / 引流课 / 7 天过渡都是规划稿，不是生效方案
- 2026-07-03 ✅ 建立 PERSONAS.md，GT 覆盖率 20-25% — 低于 skill 要求的 50% 门槛，本文档新增 §1.1 如实标注：现有定价节奏是在没有一手用户证据的情况下定的，不是"错"，但需要等 GT 补齐后回来复核，不能当成已经验证过的终稿

## 5. 待确认 / 阻塞决策

> 这些不解决就阻塞下一步。

- [ ] **Q3 双轨走法**：① 一份课翻译 / ② 两条独立漏斗 / ③ 轻量版 ②（PRD §3.5 推荐）— 影响 tier-design / intro / handoff 是写 1 份还是 2 份
- [ ] **7 天过渡序列**：4 套独立 / 共用 / 折中（D0-D3 共用 + D4-D7 分轨）— 影响 funnel-handoff-design 工作量
- [ ] **4 引流课优先级**：全做 / 分批（先 W1+W3）/ 先 W1 单卖验证 — 影响第 1 期开课前工程量
- [ ] **澳洲 GST**：$199 / $899 / $2980 是否含 10% GST — 待法务/财务确认
- [ ] **课程目录 deploy.yml 接入**：当前 `curriculum/ai-marketing/` 已经有 outline.json + HTML，必须接入 `.github/workflows/deploy.yml` 才能上线
- [ ] **讲师 lock**：[`operations/INSTRUCTORS.md`](./operations/INSTRUCTORS.md) bio 待填，第 1 期开课前 6-8 周必须 lock
- [ ] **定价 / 过渡序列 GT 复核**：等 `PERSONAS.md` 决策周期 + 异议 Top 3 至少补齐 P1-P3 或 P4-P5 一组后，回来重跑 `main-course-tier-design` / `funnel-handoff-design` 复核现有方案，不能一直用 2026-05-04/05 那版没有一手证据支撑的定价
- [ ] **首讲日期现实性**：`README.md` 写"招生窗口 2026-06-20 起"，但截至 2026-07-03（窗口已过 17 天）生产环境仍查无此课的 Training 记录 — 需要用户拍板这个日期是否顺延，或者说明是本地规划意向、实际招生尚未启动（本次任务不改 README.md，先在此记录，交给用户判断）
