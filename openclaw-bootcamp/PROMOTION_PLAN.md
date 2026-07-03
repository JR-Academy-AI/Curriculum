# PROMOTION_PLAN.md — OpenClaw 4 周个人 AI 助手 Bootcamp 推广方案

> 维护人：Claude（本次任务代跑）| 最近更新：2026-07-03
> 单一真相文档 — 任何推广排期调整必须先改这里，不要另开一份"推广方案 v2"。
> 目标用户画像 SoT：[`PERSONAS.md`](./PERSONAS.md)（GT 覆盖率约 10-15%，本文档所有渠道选择和节奏判断继承这个低置信度）。
> 漏斗机制 SoT：[`FUNNEL_PLAN.md`](./FUNNEL_PLAN.md)（业务模式 B、定价未定、7 天过渡序列骨架）。

**读这份文档前先看这句话**：这门课今天（2026-07-03）在生产环境是"课程内容做完了、招生还没真正开始"的状态——本次任务重新直接查了一遍 `api.jiangren.com.au/admin-cms/*`（不是信本地缓存），结果跟同一天早些时候 `PERSONAS.md`/`FUNNEL_PLAN.md` 查到的完全一致：Bootcamp 主课 Program 文档 `courseArrangement: []`、`tuition`/`promoTuition` 字段在 API 返回的 JSON 里根本不存在（不是空值）、`studentCount: 0`。也就是说**这门课现在没有开班日期、没有定价、没有一个学员**，本文档不能假装有一个真实的 T-30 倒数在跑。下面能确定日历日期的地方会写清楚日期，不能确定的地方会写"⏸ 待 §0 阻塞解除"，不编。

---

## 0. Meta

| Field | Value |
|-------|-------|
| Course Slug | `openclaw-bootcamp` |
| Course 中文名 | OpenClaw 4 周个人 AI 助手 Bootcamp |
| **🎯 Course Type** | **Type 2 · Bootcamp 在职提效** + **Type 6（已存在）· 引流课 openclaw-workshop**（不需要重新设计引流课，见下方理由） |
| **类型识别理由** | `PERSONAS.md` 三个 persona（Workshop 转化生 / 合规敏感执业人员 / 团队负责人）全部是**已经在职**、想让 OpenClaw 真正跑起来省时间的人，没有一个是"想靠这门课换工作/拿 offer"的求职者——这是 Type 2 而不是 Type 1 的核心判据。课程时长 4 周 × 4h 现场（对齐 Type 2 的沉浸强度，不是单次 2-4h 的 Type 4 workshop）。价格区间目前无法确认（见下），不能作为分类依据。 |
| **跨类型组合** | Type 2（母 Bootcamp）+ Type 6（openclaw-workshop，4 小时引流课，**已经真实运营过一期、卖出 10 份**，本文档不重新设计它，只处理"这 10 个人为什么没转化"这件事） |
| **🧑 PERSONAS.md 状态** | ⚠️ 存在，但 Ground truth 覆盖率约 10-15%，低于 skill 要求的 50% 及格线——本文档的渠道清单只能沿用 `COURSE_TYPE_PLAYBOOKS.md` Type 2 兜底基线，不是按本课真实用户画像反推出来的，下面每处用到兜底基线的地方都会标出来 |
| **PERSONAS.md 引用** | [./PERSONAS.md](./PERSONAS.md) — last updated 2026-07-03 |
| **当前招生状态**（本次直接查 `GET /admin-cms/programs/by-training/69fc67ea2e05efc9b88ac746` 核实，非本地缓存） | ❌ **未招生**：`studentCount: 0`，`tuition`/`promoTuition` 字段在返回 JSON 中不存在（不是留空，是压根没配置过），`courseArrangement: []` |
| Launch Date | **❌ 生产环境查无任何未来排期**，不标注具体日期。`GET /admin-cms/programs/next-phase/69fc67ea2e05efc9b88ac746` 只返回 `nextPhase: 2`——这只是系统预留的期数编号，不代表已经排了课或已经招到人。需要课程负责人明确回答"这门课现在到底要不要开始招生、什么时候开"，本文档不替他们编日期。 |
| Target Enrollment | **❌ 未设定**——连定价都没有，销售没法报价，谈报名目标没有意义。见 §2。 |
| Intro Course（openclaw-workshop）现状 | 真实卖出 10 份（一口价 199，币种未确认），2026-04-22 开课，已过去 70 多天，**转化到 Bootcamp 的人数是 0**。这是本文档目前唯一一条可以直接拿来做事的真实数据。 |
| Status | `blocked` |
| Created | 2026-07-03 by `/course-promotion-architect init`（本次任务代跑） |
| Last Updated | 2026-07-03 |
| Related Docs | [PERSONAS.md](./PERSONAS.md) / [FUNNEL_PLAN.md](./FUNNEL_PLAN.md) / [DESIGN.md](./DESIGN.md) |

---

## 1. 课程定位摘要

> 🧑 目标用户画像详见 [./PERSONAS.md](./PERSONAS.md)（last updated 2026-07-03，GT 覆盖率 10-15%）。本节只抽一屏摘要。

**课程是什么**：4 周、每周 4 小时现场（共 16 小时现场）+ 课后自学，教非技术职场人把 OpenClaw（开源本地跑 AI Agent）从"装上了"用到"真的每周省下几小时"。`outline.json` 明确写"线下沉浸式 · 不录播 · 不开线上"——但这条产品身份跟生产环境两门课 `city` 字段都是 `"Online"` 是矛盾的，`FUNNEL_PLAN.md` 矛盾 #1 已经记录，在课程负责人拍板之前，本文档不假设线下场地预算，也不假设纯线上投流策略。

**主推内容角度**（从 `COURSE_TYPE_PLAYBOOKS.md` Type 2 章节的"内容角度优先级"表抓 Top 3，交叉 `PERSONAS.md` 现有信号——⚠️ 这里必须老实说：`PERSONAS.md` 三个 persona 的痛点 Top 3 几乎全部是 `⚠️ 待补`，下面第 1、2 条是 Type 2 通用基线角度，不是本课验证过的角度；第 3 条是本课少数真实存在的产品事实）：

1. ⚠️ **学完当晚能用的 quick win**（Type 2 基线角度，本课尚无真实案例支撑——见下方"内容角度红线"）
2. ⚠️ **工作流提效具体小时数**（同上，本课目前没有任何一个学员的真实反馈，不能编"省 5 小时"这种数字）
3. ✅ **本地跑、数据不上云**——这条是本课真实的产品差异化卖点，`DESIGN.md`/`outline.json` 反复强调，且 `PERSONAS.md` Persona B 引用了第三方对 OpenClaw "operator-trust" 安全模型的评测（`[来源: 公开网络二手研究，Enclave AI / Vellum 等评测，未逐篇核实原文，方向性可信]`）支撑"客户资料敏感的执业人员会在意这件事"这个判断方向。这是目前唯一一条有外部依据、可以放心写进销售文案的角度。

**🚨 内容角度红线**：本课**零真实学员、零真实完课案例**。任何小红书/公众号文案如果写"学员反馈说""上完课后我省了 X 小时"这类第一人称成果，都是编造，直接违反 `CLAUDE.md` "禁止瞎编"红线。在拿到第 4 节 Phase 0 里"复盘 Workshop 10 人"这条真实反馈之前，内容角度只能围绕**课程设计本身的事实**（16 小时现场结构、本地跑不上云的产品原理、OpenClaw 工具本身能力）来写，不能编造使用体验。

**One-liner**（基于课程设计意图，非用户验证）：
- 中文：4 周，把 OpenClaw 从装上了用到你自己的 Agent 真的替你干活
- English：⚠️ 未发现独立英文销售页（`PERSONAS.md` §0 已记录），暂不产出英文 one-liner

**目标人群**（`PERSONAS.md` 三个 persona，占比均为 ⚠️ 推测）：
- Persona A — Workshop 转化生（上过 4h Workshop、装完闲置了的非技术职场人），预估占比 40-50%
- Persona B — 合规敏感执业人员（律师/会计，在意客户资料不上云），预估占比 25-30%
- Persona C — 团队/业务负责人（地产顾问、中小企业主，想先自己跑通再决定推不推给团队），预估占比 20-25%

**关键差异化**（对比同类沉浸式训练营）：
1. 本地跑不上云的隐私卖点，对合规敏感行业（法律/会计）有真实的产品逻辑支撑
2. 4 周现场 + 16 小时高强度，不是"买课程链接自己看"，`outline.json` 自己写明 dropout 主因是"周中没时间消化"，说明产品团队认定"必须靠现场陪跑才有效"

**售价档**（从 `FUNNEL_PLAN.md` 复制）：
- 引流课 openclaw-workshop：**199（币种未确认）**，已真实卖出 10 份
- Bootcamp 主课：**❌ 未定价**，`FUNNEL_PLAN.md` §4 明确不建议凭空给价格区间（没有真实同类课程锚点、没有用户决策周期数据）

**承诺红线**（不可写进任何推广文案的内容，遵守全局 `feedback_no_revenue_promise.md`）：
- ❌ 月入 X 元 / 副业收入 / 接单变现
- ❌ 包就业 / 拿 offer / 入职（这本来就不是这门课的定位，Type 2 不是 Type 1）
- ❌ 编造学员反馈 / 编造"省了 X 小时"之类具体数字（见上方红线）
- ✅ 只能承诺：课程结构本身的事实（16 小时现场 + 课后自学）、OpenClaw 工具本身的能力（有第三方评测支撑的）、"本地跑不上云"这个产品原理

---

## 2. 目标与漏斗反推

> ⚠️ **这一节目前算不出真实数字**，因为报名目标、定价都还没有。下面先给出反推公式的骨架和"一旦有了数字该怎么算"，不能先编一个 N 出来再往下套。

```
报名目标：N 人  ← ❌ 课程负责人未给出，本文档不代填
  ↓ 假设主课转化率 5%（Type 2 行业基线，本课无实测数据）
加微信目标：N × 20 = 20N 人
  ↓ 引流课 → 主课转化率：❌ 不能用行业基线，本课有真实数据——70 多天，0/10 转化
    这不是"偏低需要优化"，是目前完全没有转化动作在发生。用行业基线（15%）反推流量目标
    在这里是危险的，因为它会掩盖"转化率其实是 0，根本原因未知"这个更紧急的事实。
```

**本节唯一能给的真实数字**：

| 指标 | 真实值 | 来源 |
|------|--------|------|
| 引流课已售 | 10 人 | `GET /admin-cms/programs/by-training/69df357b4267524e901f1645`，`studentCount: 10` |
| 引流课 → 主课转化 | 0 人 / 70+ 天 | 同上交叉 `FUNNEL_PLAN.md` §5，Bootcamp `studentCount: 0` |
| 主课报名目标 | 未设定 | Program 文档无 `tuition` 字段，销售没法报价，遑论定目标 |

**在报名目标和定价都出来之前，本节不产出渠道流量分摊表**——那样的表格本质是拿假设的 N 乘以假设的转化率再乘以假设的渠道占比，三层假设叠加，写出来的数字没有任何决策价值，反而容易被当成"已经算过的目标"直接拿去用。

---

## 3. 渠道矩阵

> ⚠️ **本节渠道清单沿用 `COURSE_TYPE_PLAYBOOKS.md` Type 2 兜底基线，不是按 `PERSONAS.md` 真实渠道数据反推的**——`PERSONAS.md` §3 原文写明"三个 persona 的日常活跃平台 Top 5 目前全部是空的……这一节先留空"。等 §6 补齐哪怕一条真实渠道来源（比如销售口播"那 10 个 Workshop 学员当初是从哪个渠道知道这门课的"），要回来用真实数据覆盖下表。

### ✅ 建议启用渠道（一旦 §0 阻塞解除后）

| 渠道 | 频次（Type 2 基线） | 主负责人 | 子 skill | 起效周期 | 为什么适合这门课的目标人群 |
|------|---------|---------|---------|---------|------------|
| 1. 小红书种草 | 9 篇/周 | Summer / Lily / KIKI | `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` | 7-14 天 | Persona A/C（非技术职场人、地产顾问）是典型小红书活跃人群，Type 2 在职提效课全靠"工具栈秀肌肉"角度在小红书起量。⚠️ 但在拿到真实学员反馈前，内容只能写"课程结构 + OpenClaw 工具本身"，不能编使用体验（见 §1 红线） |
| 2. 公众号长文 | 1-2 篇/周 | Serena（公众号 owner） | `/blog-longform-writer` + `/wechat-article-quality` | 立即 + 长尾 | Persona B（律师/会计）更可能通过公众号深度长文而不是短视频/图文了解"本地跑 AI Agent 安全性"这种需要解释清楚的技术判断 |
| 3. 线上讲座 | 2-3 场（整个周期） | ⚠️ 待定，见 §5 | `/webinar-topic-feasibility` | 当晚 + 录播长尾 | Persona C（团队负责人）决策周期长、想先看清楚"到底怎么用"再决定投入，讲座答疑比单篇文章更能解决他们"值不值得"的顾虑 |
| 4. 海报（社群+朋友圈+小红书） | 3-4 套 | Marketing（⚠️ 无专职 Designer，见 §5） | `/poster-user-test` | 立即 | 所有渠道配套，成本低，可以先做 |
| 5. SEO 长尾 | 长尾词矩阵 | ⚠️ 无专职 Dev，见 §5 | `/seo-optimizer` + `/eeat-optimizer` | 30-90 天 | "OpenClaw 中文教程" / "本地跑 AI Agent 律师" 这类搜索词目前中文互联网系统性内容极少，长期資產价值高，且不受"没有真实学员案例"这条红线限制（SEO 长文可以合理讲解工具原理） |
| 6. EOI/老客召回跟进（**特殊用法，见下方说明**） | 立即，一次性 | Beta（教务，已经在管这批 Workshop 学员的微信群）+ Neomi（CRM 拉名单）+ Amelia/Rain/Angela（实际对话） | `/eoi-followup`（借用其跟进 SOP，但目的是调研不是转化推销） | 即时 | 这不是标准意义上的"活动后 EOI 跟进"，是本文档最高优先级任务——直接联系那 10 个真实报过名的 Workshop 学员，问清楚为什么没人继续报 Bootcamp。Beta 本身职责就包含"微信群维护、承接售前售中售后咨询"，这批学员大概率还在 Beta 管的群里，联系成本最低 |

### ❌ 本课暂不启用的渠道（写明原因）

| 渠道 | 不启用原因 |
|------|----------|
| 销售页 Custom Landing 投流 | `PERSONAS.md` 矛盾 #2：`program-course/openclaw-bootcamp` 销售页开课日期显示 Invalid Date（根因 `courseArrangement: []`）。**任何投流引导到这个页面都会在"看到 Invalid Date"这一步直接流失**，这是硬阻塞，必须先报修，不是推广节奏问题 |
| 线下活动 | `PERSONAS.md` 矛盾 #1 未解——"线下沉浸式"宣传 vs 生产环境 `city: "Online"` 字段冲突，场地预算编不出来，等课程负责人拍板线上/线下最终形态 |
| LinkedIn 长文 | `PERSONAS.md` §0 记录"未发现英文站 program-course 页面"，目标受众也主要是中文站职场人，暂不投入 |
| 私域 1v1 push（大规模） | Type 2 基线本就不建议大规模私域 push；小规模 1v1（针对那 10 个 Workshop 学员）已经放进"EOI/老客召回"那一行，不重复 |
| 付费投放 | ⚠️ Lightman 拍板，默认不启动。何况现在连销售页都没法接单（Invalid Date），投流等于烧钱把人导向一个报不了名的页面 |

---

## 4. 时间轴 Task 矩阵

> 因为 §0 没有真实开班日期，这一节分两部分：**Phase 0（现在就能做、不需要等日期锁定）** 和 **Phase 1 模板（Type 2 标准 T-21→D+30 骨架，锁定开班日期后按日历套用，现在不填精确日历日）**。

### Phase 0 · 现在就能做（无日期锚点，按依赖顺序排）

| # | Task | 负责 | 分工 | Skill | 耗时 | 优先级 | Status |
|---|------|------|------|-------|------|------|------|
| 1 | 从 CRM 拉出 10 个 openclaw-workshop 真实报名学员的联系方式和当时报名场景 | Neomi | ✏️ | — | 1h | **P0** | ⬜ |
| 2 | 逐个联系这 10 人，问清楚"上完 Workshop 后有没有考虑过 Bootcamp / 为什么没报 / 是没人跟进、价格没谈拢、还是线上线下形态不符合预期" | Beta（已经在管这批学员的微信群，联系成本最低）+ Amelia/Rain/Angela 协助 | ✏️ | 借用 `/eoi-followup` 的话术 SOP，但目的是调研不是推销 | 每人 15-30min，共约 3-5h | **P0** | ⬜ |
| 3 | 把 10 人的匿名反馈摘录汇总，回填 `PERSONAS.md` §6 待补任务第 1 条 | Beta | ✏️ | — | 1h | **P0** | ⬜ |
| 4 | 课程负责人拍板：线上 vs 线下最终形态（`PERSONAS.md` 矛盾 #1） | 课程负责人 + Lightman | ✏️ | — | — | **P0** | ⬜ |
| 5 | 课程负责人/销售给出 Bootcamp 主课暂定价（哪怕是暂定，只要能让销售有数字可报） | 课程负责人 | ✏️ | — | — | **P0** | ⬜ |
| 6 | 销售页 `program-course/openclaw-bootcamp` Invalid Date bug 报修 | Dev（⚠️ 团队无专职 Dev，需要 Lightman 指派具体谁来修，见 §5） | ✏️ | — | — | **P0** | ⬜ |
| 7 | `DESIGN.md` 主色 `#E84142` vs 生产环境实际 `#ff5757` 撞色问题同步（优先级最低，视觉执行前处理即可） | 课程负责人 | ✏️ | — | — | P2 | ⬜ |

**这 7 条不做完，Phase 1 的任何 task 排期都是空转**——没有价格、没有开班日期、销售页还报不了名，发再多小红书也是把人导流到一个死链页面。

### Phase 1 · Type 2 标准周期模板（T-21 → D+30，**锁定开班日期后启用，现在只给骨架**）

> 一旦 §0 的开班日期和定价确认，把下表的 "T-21" 替换成真实倒推日历日，从 `TASKS_LIBRARY.md` 按 Type 2 裁剪范围（保留 T-21 → D+30，砍掉 T-30）复制细颗粒度 task。这里先给结构性大纲，不重复整张任务库。

| 阶段 | 主线 | 关键渠道动作 |
|------|------|------|
| T-21（开班前 3 周） | 销售页修复验收上线 + 第 1 批小红书 + SEO 关键词调研启动 | 小红书第 1 批 9 篇；公众号长文 1（角度：本地跑不上云的产品原理，不写虚构学员案例） |
| T-14（开班前 2 周） | 第 1 场讲座 + EOI 派单启动（面向讲座新增 leads，不是 Phase 0 那 10 个老学员） | 讲座 1 场；海报第 1 套 user-test；小红书第 2 批 |
| T-7（开班前 1 周） | 招生进度 review，决定是否 rescue；第 2 场讲座 | 倒数 EDM；小红书第 3 批；72h 销售跟进 SOP 启动 |
| T-3 / T-1 / D0 | 报名截单 + 入群 + 开课直播 | 参考 `TASKS_LIBRARY.md` T-3/T-1/D0 通用模板 |
| D+3 / D+7 / D+30 | 学员反馈收集 + 首期真实案例征集（这是下一轮内容角度红线解除的关键——首期完课后才有真实可写的学员故事） | 参考 `TASKS_LIBRARY.md` D+N 通用模板 |

---

## 5. 责任分配

> ⚠️ 本节对照 `docs/COMPANY_TEAM.md` 真实在职状态标注，不直接套 skill 默认模板人名——上一轮 `ai-marketing`/`business-analyst` 两门课的 `PROMOTION_PLAN.md` 已经发现同样的团队缺口，这里不重复调查，直接引用结论。

| Role | Skill 默认模板 | 本课实际情况 |
|------|---------------|------------|
| Marketing 主管（跨渠道排期总指挥） | Aurora / Seren | ⚠️ Aurora 目前**暂停 routine 派活**，Seren 只有**周四+周五 2 天/周 casual**——本课目前**没有明确的跨渠道总指挥**，需要 Lightman 指派或由课程负责人自己兼 |
| 课程主理人 / BD（讲座/嘉宾/定位决策） | Beta | Beta 实际职责是**教务管理**（学员全周期、微信群维护、售前售中售后），不是产品定位/BD 决策角色——但正因为如此，Beta 是 Phase 0 复盘那 10 个 Workshop 学员的**最佳执行人**（他本来就管着这些学员的群）。"要不要打破不录播不开线上""定价多少"这类产品决策不该派给 Beta，需要课程负责人本人或 Lightman 拍板 |
| 新媒体（小红书） | Summer / Lily / KIKI | ✅ 三人角色对得上，可直接派单，但要遵守 §1 内容角度红线（不能编学员案例） |
| 公众号长文 | Marketing 文案 | 实际对应 **Serena**（成都实习生，公众号 owner，每日 5 天/周）——注意跟"Seren"（墨尔本 MKT Specialist）是两个不同的人，`COMPANY_TEAM.md` 已专门提醒过这个拼写陷阱 |
| 课程顾问（1v1 销售跟进） | Amelia / Rain / Angela | ✅ 角色对得上，Phase 0 的第 2 条任务需要他们协助 |
| 销售助理（CRM / EOI 派单） | Neomi | ✅ 角色对得上，Phase 0 第 1 条任务的执行人 |
| Designer（海报/视觉） | Designer | ❌ **12 人全职花名册里没有专职 Designer 岗位**，`docs/COMPANY_TEAM.md` 逐条核对确认。海报类 task 需要 Lightman 指派临时负责人或外包 |
| Dev（销售页/SEO/埋点） | Dev | ❌ **12 人全职花名册里没有专职 Dev 岗位**。Phase 0 第 6 条"Invalid Date bug 报修"这种技术任务目前没有明确的人接手，需要 Lightman 指派（大概率要走 `jr-academy-web-zh` 主仓库的开发资源，不是 marketing 团队能自己解决的） |

**这份表格最诚实的结论**：这门课现在不缺内容生产能力（小红书/公众号团队都在），缺的是**谁来做产品决策（定价/线上线下）+ 谁来修技术 bug（Invalid Date）+ 谁总指挥跨渠道排期**——这三个缺口不解决，Phase 1 的时间轴模板排出来也没人能真正执行。

---

## 6. 周报（每周一晨会更新）

> 目前还没有开始执行 Phase 1，暂无周报可写。第一条周报应该在 Phase 0 的 7 条任务开始推进后再开始记录，不要为了"有内容"提前编一条空周报。

---

## 7. 风险与决策日志

| 日期 | 事项 | 决策/发现 |
|------|------|----------|
| 2026-07-03 | 建立 `PROMOTION_PLAN.md`，衔接同日的 `PERSONAS.md`/`FUNNEL_PLAN.md` | 本次任务重新独立核实生产环境（`GET /admin-cms/programs/by-training/69fc67ea2e05efc9b88ac746` 等 3 个端点），结果与同日早些时候 `PERSONAS.md`/`FUNNEL_PLAN.md` 的核实完全一致：无定价、无排课、无学员。判定 Course Type 2（在职提效）+ 已有 Type 6 引流课 |
| 2026-07-03 | 渠道矩阵 | `PERSONAS.md` §3 渠道数据为空，本文档沿用 `COURSE_TYPE_PLAYBOOKS.md` Type 2 兜底基线，已在 §3 顶部标注，不是本课真实用户画像反推的结果 |
| 2026-07-03 | 时间轴 | 因无真实开班日期，§4 只给 Phase 0（现在能做的解阻塞任务）+ Phase 1 骨架模板，不编造具体日历日期 |
| 2026-07-03 | 责任分配 | 对照 `docs/COMPANY_TEAM.md` 发现团队 3 个真实缺口：无跨渠道总指挥（Aurora 暂停/Seren 仅 2 天）、无专职 Designer、无专职 Dev。已在 §5 逐条标注，未沿用 skill 模板默认人名 |
| 2026-07-03 | 最高优先级判定 | 本文档判定 Phase 0 第 1-2 条（复盘 Workshop 10 人为何 0 转化）是当前最紧急、最容易拿到手的一手数据——这条任务不需要等定价/开班日期确认就能立刻启动，且直接决定 §1 内容角度能不能从"课程结构事实"升级到"真实学员反馈" |

---

## 8. 调用子 skill 索引

本方案会调度以下子 skill（本 skill 自己不产出内容，只派单）：

| Task 类型 | 子 skill | 触发时机 |
|-----------|---------|---------|
| Workshop 10 人复盘话术 | `/eoi-followup`（借用 SOP，目的调研非推销） | Phase 0，现在 |
| 小红书选题→写稿→配图→审核 | `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` → `/xhs-review` → `/xhs-score` | Phase 1 T-21 起，且必须遵守 §1 内容角度红线 |
| 公众号长文 | `/blog-longform-writer` + `/wechat-article-quality` | Phase 1 T-21 起 |
| 讲座 topic 可行性审核 | `/webinar-topic-feasibility` | Phase 1 T-14 |
| 海报设计测试 | `/poster-user-test` | Phase 1 T-14，需先解决 §5 无专职 Designer 的问题 |
| SEO 优化 | `/seo-optimizer` + `/eeat-optimizer` | Phase 1 T-21 起，需先解决 §5 无专职 Dev 的问题 |
| 销售页迭代（Invalid Date 修复后） | `/course-custom-landing`（Mode B） | Phase 0 第 6 条解决后 |
| 定价 / 是否三档 | `/course-funnel-architect`（已运行过，见 `FUNNEL_PLAN.md`） | 不是本 skill 的活，已交接 |
| 漏斗翻车审计 | `/curriculum-positioning-audit` | 定价和排课确认之后才有意义，现在跑没有价值 |
| 目标画像补齐 | `/target-user-persona-mapper validate` | Phase 0 第 1-3 条拿到真实反馈后，回去补 `PERSONAS.md` GT 覆盖率 |

**红线提醒**：本 skill 不直接写小红书文案/公众号文/海报/销售页，一律派单给上表对应子 skill；任何内容产出必须遵守 §1 的"零真实学员案例"红线，在 Phase 0 复盘完成前不能编造学员反馈或效果数字。
