# Claude 官方开发者认证（CCDV-F）· 考试直通包 — 推广方案 PROMOTION_PLAN.md

> 单一真相文档。推广的排期、责任、渠道、数据都在这里。
> 由 `/course-promotion-architect` 生成与维护，不要手工大改结构。
> **话术 / 卖点 / 合规口径不在本文件** —— 见 [`./DESIGN.md`](./DESIGN.md)（话术真相源）+ [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md)（四门共用报名链路 / 政策 / 红线）。本文件只管**谁、什么时候、用哪个 skill、做什么**。
> **🎯 目标用户画像见 [`./PERSONAS.md`](./PERSONAS.md)**（2026-07-26 建，ground truth 覆盖率偏弱）。⚠️ 本文件 §3 渠道矩阵是按**受众类型经验推断**得出，**不是** persona 反推——拿到首期真实数据后须跑 `/target-user-persona-mapper export-channels` 重算替换。

---

## 0. Meta

| Field | Value |
|-------|-------|
| Course Slug | `ccdv-f-cert-pack` |
| Course 中文名 | Claude 认证开发者 – Foundations · 考试直通包（Claude Certified Developer – Foundations）|
| **🎯 Course Type** | **Type 8 · 认证课（首发窗口变体）** |
| 类型识别理由 | 付费直通包，核心价值=CPN 报名准入 + 首批持证窗口。受众=动手写代码的工程师（1-5y SWE + Claude 6mo+），**渠道重心是技术社区（掘金/公众号技术向）+ LinkedIn，小红书弱**（工程师不在小红书下单）。|
| 两阶段 | 阶段 A 首发窗口冲刺（D0→D+30）→ 阶段 B 长尾常青（D+30 起）|
| **🧑 PERSONAS.md 状态** | ❌ 不存在 → ⚠️ 待补。受众依据 = 官方 Exam Guide（`CLAUDE_CERT_FAMILY.md §5`）+ `DESIGN.md`。建议后续 `/target-user-persona-mapper init ccdv-f-cert-pack`。|
| Launch Date | ⚠️ 待补（建议 CCAR-F 首期跑通后 2-4 周错峰启动）|
| Target Enrollment | ⚠️ 待补 |
| Status | `planning` |
| Created | 2026-07-15 by `/course-promotion-architect init` |
| Last Updated | 2026-07-15 |
| Related Docs | [DESIGN.md](./DESIGN.md) / [SYLLABUS_OFFICIAL.md](./SYLLABUS_OFFICIAL.md) / [../CLAUDE_CERT_FAMILY.md](../CLAUDE_CERT_FAMILY.md) |

---

## 1. 课程定位摘要

**一句话**（DESIGN.md）：这门叫 Developer 的考试里，Claude Code 只占 3.1%、基础软件工程占 7.4% —— 你以为在考 AI，其实在考你是不是个好工程师。我们按官方子技能权重帮你把时间花对地方。

**目标人群**：
- P1 — 1-5 年软件工程经验 + ≥6 个月 Claude 实战，Python/TypeScript，熟 REST API 与 CLI（核心）
- P2 — 已在交付 Claude 应用、想要官方背书的后端/全栈工程师
- P3 — 准备转 AI 应用开发、想用一张官方证证明能力的工程师
- ❌ 不适合：非技术人（→ CCAO-F）/ 纯架构决策不写代码的（→ CCAR-F/P）

**主推内容角度**（Type 8 首发窗口变体 · 权重排序）：
1. ⭐⭐⭐⭐⭐ **子技能级权重表（四门唯一精确到小数位，可放心引用官方数字）**："官方 blueprint 把权重精确到小数点后一位 —— Claude Code 3.1%、基础软工 7.4%、Applications and Integration 33.1%、Eval/Testing/Debugging 2.6%（全考纲最低）。你可以不信我们，但请相信这张表"
2. ⭐⭐⭐⭐⭐ **反 CCAR-F 打法警示**："照着架构师 Foundations 打法复习 CCDV-F 的人，会把六倍于应得的时间砸在 Claude Code 上（20% vs 3.1%）"
3. ⭐⭐⭐⭐ **第三方 agentic 框架专题**（Strands / LangGraph / PydanticAI，官方点名，架构师 Foundations 完全不考）—— 技术受众的差异化诱饵

**售价档**：对外不露价。考试费另付、学员本人 Partner Academy 结账，金额私聊讲。

**承诺红线**（全部见 `CLAUDE_CERT_FAMILY.md §2-4`）：官方 Partner→CPN 合规通道；保过→冲刺过考；含名额→开通账号；不露考试费金额+包价。

---

## 2. 目标与漏斗反推

> 工程师决策理性、看内容深度、私信率低于泛受众。路径「技术内容触达 → 加微信/私信 → 销售私聊 → 报名」。比例 `⚠️ 假设/待补`。

```
首期报名目标：N 人  ⚠️ 待补
  ↓ 咨询私聊 → 报名转化：假设 25%（工程师决策慢但一旦咨询意向高）
咨询私信目标：4N 人
  ↓ 内容触达 → 私信转化：假设 2%（技术受众私信率低，靠深度内容筛）
内容总触达目标：约 200N
  ↓ 各渠道分摊（技术受众版）
  - 技术社区（掘金/公众号技术向）：40%（主战场）
  - LinkedIn（英文站工程师池）：25%
  - 私域/技术群深耕：20%
  - 小红书少量：15%
```

⚠️ 待补 ground truth：首期席位数、报名目标、技术受众实际私信/加微率（无历史数据）。

---

## 3. 渠道矩阵

> 每门课 ≥5 渠道。CCDV-F 受众=工程师，**技术社区 + LinkedIn 是主战场，小红书弱**（与 CCAO-F 相反）。

### ✅ 启用渠道

| Rank | 渠道 | 主负责人 | 子 skill | 频次（首发 D0→D+30）| 备注 |
|------|------|---------|---------|------|------|
| 1 | 公众号技术向长文 + 掘金/技术社区 | Marketing 文案（技术向）| `/blog-longform-writer` + `/wechat-article-quality` | 1-2 篇/周 | "官方把 CCDV-F 权重精确到小数位，我们逐条拆给你看" |
| 2 | LinkedIn 长文（英文站工程师）| Beta / 外包 | — | 1 篇/周 | AU IT 圈大量考 cert，工程师爱在 LinkedIn 晒证 |
| 3 | 私域 / 技术群深耕 | Beta + 销售 | — | 持续 | Claude 实战群 / 开发者社群精准推，非广撒网 |
| 4 | 销售私聊（高意向 1v1）| Amelia / Rain / Angela | `/eoi-followup`（认证话术）| 每 lead 24h 首触 | 判断：有 Claude 项目经验→直通包 |
| 5 | 线上技术说明会 | Beta 主持 | `/webinar-topic-feasibility` | D+7、D+14 各 1 场 | "25 子技能权重表 demo + 第三方框架专题 + 报名答疑" |
| 6 | 小红书少量（低频）| Summer | `/xhs-*` | 2 篇/周 | 仅品牌曝光 + 触达考证匠 App 用户，不指望下单 |
| 7 | SEO 长尾（阶段 B）| Dev | `/seo-optimizer` + `/eeat-optimizer` | D+30 起 | "Claude Developer 认证 / CCDV-F 备考 / Claude 应用开发认证" |

### ❌ 不启用 / 缓启用

| 渠道 | 原因 |
|------|------|
| 小红书爆款主推 | 工程师不在小红书下单，仅低频曝光 |
| 线下活动 | 首期线上冲刺 |
| 付费投放 | ⚠️ 默认不启动，首期看 ROI 由 Lightman 定 |

---

## 4. 时间轴 Task 矩阵（相对时间，D0 = 首期开售日 ⚠️ 待补）

> 细颗粒度。CCDV-F 排 CCAR-F 之后错峰。真实日期待 launch date 定后回填。

### T-14

| Day | Task | 负责 | 分工 | Skill | 耗时 | 优先级 | Status |
|-----|------|------|------|-------|------|------|------|
| T-14 Mon | 官网承接页 + "子技能权重表"首屏定稿 | Beta + Dev | ✏️ | `/course-custom-landing`（按需）| 半天 | P0 | ⬜ |
| T-14 Tue | 公众号技术首篇起草（权重表逐条拆解）| 文案 | 🤖→✏️ | `/blog-longform-writer` | 6h | P1 | ⬜ |
| T-14 Wed | LinkedIn 首篇英文长文起草 | Beta | ✏️ | — | 3h | P2 | ⬜ |
| T-14 Thu | 盘点精准技术群 + 触达清单 | Beta + 销售 | ✏️ | — | 2h | P1 | ⬜ |

### T-7

| Day | Task | 负责 | 分工 | Skill | 耗时 | 优先级 | Status |
|-----|------|------|------|-------|------|------|------|
| T-7 Mon | 承接页上线 UAT | Dev | ✏️ | — | 1h | P0 | ⬜ |
| T-7 Tue | 说明会 topic 审 | Beta | ✏️ | `/webinar-topic-feasibility` | 2h | P1 | ⬜ |
| T-7 Wed | 公众号首篇发布 + 掘金同步 + LinkedIn 首篇发 | 文案 + Beta | 🤖→✏️ | — | 半天 | P1 | ⬜ |
| T-7 Fri | 技术群第 1 波精准推 | Beta + 销售 | ✏️ | — | 1h | P1 | ⬜ |

### D0

| Day | Task | 负责 | 分工 | Skill | 耗时 | 优先级 | Status |
|-----|------|------|------|-------|------|------|------|
| D0 | 承接页 prod + 开售公告（技术群+LinkedIn+朋友圈）| Dev + Beta | ✏️ | — | 2h | P0 | ⬜ |
| D0 | 销售 FAQ + 分流话术（有 Claude 项目→直通包 / 没做过→实战班）| Amelia + Beta | ✏️ | — | 1h | P0 | ⬜ |
| D0 | 私信 24h 首触 | 销售 + Neomi | ✏️ | `/eoi-followup` | 每 lead 20min | P0 | ⬜ |

### D+7 / D+14 / D+30

| Day | Task | 负责 | 分工 | Skill | 耗时 | 优先级 | Status |
|-----|------|------|------|-------|------|------|------|
| D+7 19:30 | 技术说明会第 1 场（权重表 + 第三方框架专题 + 逼单）| Beta | ✏️ | — | 1.5h | P1 | ⬜ |
| D+7 09:00 | 首周招生 review，是否 rescue | Lightman + Aurora | ✏️ | `/course-promotion-architect audit` | 1h | P0 | ⬜ |
| D+10 | 公众号第 2 篇（第三方 agentic 框架专题）| 文案 | 🤖→✏️ | `/blog-longform-writer` | 6h | P2 | ⬜ |
| D+14 19:30 | 说明会第 2 场（席位倒数）| Beta | ✏️ | — | 1.5h | P1 | ⬜ |
| D+30 | postmortem 回写；转阶段 B SEO 长尾 | Aurora + Dev | ✏️ | `/course-promotion-architect postmortem` + `/seo-optimizer` | 半天 | P1 | ⬜ |

> 首批过考案例授权后才升级证明期口号，禁止无案例编造。

---

## 5. 责任分配

| Role | Name | Primary 负责 |
|------|------|------------|
| Lightman | — | 席位/目标 / 预算 / 红线 |
| Marketing 主管 | Aurora / Seren | 排期 / KPI / audit |
| Marketing 文案（技术向）| — | 公众号技术长文 / 掘金 / Landing |
| 课程主理人 / BD | Beta | LinkedIn / 技术群 / 说明会 / 报名陪跑 |
| 课程顾问 | Amelia / Rain / Angela | 1v1 私聊 24h-72h-7d |
| 销售助理 | Neomi | EOI 派单 / SLA |
| 新媒体 | Summer | 小红书低频曝光（2 篇/周）|
| Dev | — | Landing / SEO / 承接 |

⚠️ 待补：技术向公众号/掘金内容需能写代码细节的文案，若无标 `🚨 缺技术文案`（否则内容深度不够筛不住工程师）。

---

## 6. 周报（每周一晨会追加）

### Week of YYYY-MM-DD（T-14，待 launch 定）
- 🎯 本周目标：承接页 + 技术首篇 + 技术群盘点
- 🚨 风险：launch/席位未定 / 缺技术文案则内容深度不足

---

## 7. 风险与决策日志

| 日期 | 事件 | 决策 | 决策人 | 影响 |
|------|------|------|--------|------|
| 2026-07-15 | 四门错峰 | CCDV-F 排 CCAR-F 之后启动 | Lightman | 避免负荷叠加 |
| 2026-07-15 | 工程师受众 | 渠道重心技术社区+LinkedIn，小红书降为低频曝光 | — | 与 CCAO-F 明显分化 |

---

## 8. 调用子 skill 索引

| Skill | 用途 | 触发频次 | 责任人 |
|-------|------|---------|--------|
| `/blog-longform-writer` + `/wechat-article-quality` | 公众号技术长文 | 1-2 篇/周 | 技术文案 + Aurora |
| `/webinar-topic-feasibility` | 说明会审 | 每场前 | Beta |
| `/eoi-followup` | 销售私聊 | 每 lead | Neomi + 销售 |
| `/course-custom-landing` | 承接页 | 按需 | Dev + Beta |
| `/xhs-*` | 小红书低频曝光 | 2 篇/周 | Summer |
| `/seo-optimizer` + `/eeat-optimizer` | 阶段 B 长尾 | D+30 起 | Dev |
| `/course-promotion-architect audit`/`postmortem` | 诊断/复盘 | D+7 / D+30 | Lightman + Aurora |

---

## 维护规则

- 每周一追加第 6 节；决策变更追加第 7 节；D+30 `postmortem` 回写 §2 + `DESIGN.md`。
- 不手删旧周报/旧决策。
