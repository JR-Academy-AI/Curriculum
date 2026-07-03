# AI Engineer 入门（ai-engineer-rag）推广方案 PROMOTION_PLAN.md

> 单一真相文档。所有跟推广相关的决策、排期、责任、数据都在这里。
> 目标用户画像见 [`./PERSONAS.md`](./PERSONAS.md)（2026-07-03 初版，GT [Ground Truth，即"有真实数据支撑、不是 AI 拍脑袋"的判断] 覆盖率约 25%-30%，低于 50% 及格线，§3 渠道汇总原文自称"无法可靠产出"）。
> 漏斗定位见 [`./FUNNEL_PLAN.md`](./FUNNEL_PLAN.md)（2026-07-03 初版，发现本课与 `ai-engineer-bootcamp/FUNNEL_PLAN.md` 提议的新引流课定位冲突，**未拍板**）。
> 维护人：待定 | 最近更新：2026-07-03

---

## 🚨 这份计划目前卡在什么地方（先说清楚，别看到后面才发现排不出具体数字）

1. **FUNNEL_PLAN.md §5 的引流层定位冲突没拍板**——`ai-engineer-bootcamp/FUNNEL_PLAN.md` 提议造一个新的 $29 引流课，跟本课"官方前置入门课"的定位高度重叠。这个不拍板，"要不要把本课包装成三级阶梯里的中间档"、"要不要现在就重兵设计完课→报名旗舰营的过渡序列"这两件事都没法定，本文档 §4 的 Track B 先按"本课即唯一引流层"的假设排，如果用户后续选方案 1（三级阶梯），这里的部分渠道分工需要重新调整。
2. **报名目标没有数字**——本课累计只有 3 名真实学员（生产环境 API 核实，2026-07-03），没有任何人给过一个"这一轮要做到多少人"的目标。§2 的漏斗反推公式只能留空跑框架，不能编一个数字往里填。
3. **PERSONAS.md §3 渠道数据自己声明不可用**——三个 persona 的"日常活跃平台 Top 5"字段绝大部分是 ⚠️ 待补，只有 V2EX 一条弱信号（且方向判断是"可能不匹配"）。按 skill 自己的规则，GT 覆盖率 < 50% 应该先跑 `/target-user-persona-mapper validate` 再往下走。这次没有卡住不产出，而是**先用 `COURSE_TYPE_PLAYBOOKS.md` 的行业基线 + 已有的真实锚点（Westpac JD 案例、V2EX 弱信号）拼渠道矩阵，明确标注"未经本课真实用户验证"**，等 PERSONAS.md 补完小红书/Boss 截图和 3 名学员回访再替换。
4. **Persona B 的核心假设完全没查**——3 名真实学员里有没有人后续报名了 `ai-engineer-bootcamp` 旗舰营，这个数字直接决定"过渡序列该往哪个方向设计"，本轮完全没查（PERSONAS.md §7 P2 待办）。§4 Track A 第一条 task 就是去查这个数字。

**上述 4 项没解决之前，本文档 Status 保持 `planning`。**

> ⚠️ **数据源提醒**：本课本身没有 cohort/开班日期概念——查生产环境 API `admin-cms/programs/next-phase/695f55f8d6221b0fef013efb` 返回 `nextPhase: 2`，意思是从建课到查询时刻（2026-07-03）从未开过第 2 期，是 self-paced 滚动招生产品，不是"待确认是否在招生"，而是**确确实实在正常招生，只是没有"下一期"这个概念**（来源：PERSONAS.md §0 GT-01，2026-07-03 生产环境 API 核实）。本文档 §4 Track B 的日期锚点，用的是**另一门课**（`ai-engineer-bootcamp` 第 7 期，2026-08-29 开课）的真实排期——因为本课自己在课程文案里明确定位为那门课的"官方前置入门课"，参考同一日期比凭空发明一个本课自己的"开班日"更诚实。这一步锚点选择是本文档的判断，不是从生产环境直接查出来的事实，需要用户确认。

---

## 0. Meta

| Field | Value |
|-------|-------|
| Course Slug | `ai-engineer-rag` |
| Course 中文名 | AI Engineer 入门（`ai-engineer-bootcamp` 12 周旗舰营的 4 周入门版，self-paced 不分 cohort）|
| **🎯 Course Type** | **Type 9 · 自定义类型——Self-paced 官方前置入门课**（不在 COURSE_TYPE_PLAYBOOKS.md 现有 8 类里，按其维护规则"课程类型不在 8 个里面 → 加 Type 9，不要硬塞进现有类型"新增）|
| **类型识别理由** | 单一 SKU（$399/$299 AUD）、`type: video` 纯自学录播、无直播/批改/1v1、**无 cohort 无排期**——这四条排除 Type 1/2/3（都要求 cohort + launch date）。已有独立销售页 + 免费试学 3 节 + 真实在售 3 名学员——这排除 Type 6（引流课定义是"不需要独立销售页，嵌母课页面就行"，本课不是）。不是免费 wiki + 付费题库模式——排除 Type 8。本课实际是"内容深度接近主课，但价格&定位是入门引流层"的杂交体，找不到 8 类里任何一类能不打折扣地套用，故新增 Type 9 |
| **跨类型组合** | 无——本课不是某个 bootcamp 内部拆出的一档，是独立 SKU + 独立销售页 |
| **🧑 PERSONAS.md 状态** | ⚠️ 存在，GT 覆盖率约 25%-30%，低于 50% 及格线；§3 跨 persona 渠道汇总原文自称"无法可靠产出" |
| **PERSONAS.md 引用** | [./PERSONAS.md](./PERSONAS.md) — last updated 2026-07-03 |
| **本课自身开班日期** | N/A——self-paced 滚动招生，生产环境 API `programs/next-phase` 确认目前无第 2 期概念（来源：PERSONAS.md §0，2026-07-03） |
| **Track B 时间轴锚点（提案，待确认）** | 借用 `ai-engineer-bootcamp` 第 7 期真实开课日 **2026-08-29**（来源：`curriculum/ai-engineer-bootcamp/PROMOTION_PLAN.md` §0，2026-07-03 生产环境 API `admin-cms/programs/by-training/66e3e7641664e500126d237f` 核实，当时已有 3 人报名）|
| Target Enrollment | ⚠️ **待补，本文档不臆测**。现状：累计 3 名真实学员（生产环境 API `studentCount`，2026-07-03），无任何人给出过目标数字 |
| Intro Course Target | N/A——本课本身即扮演"入门/引流层"角色，不是某个母课下面再拆出的独立引流课 |
| Status | `planning`（见上方 4 项阻塞）|
| Created | 2026-07-03 by `/course-promotion-architect init` |
| Last Updated | 2026-07-03 |
| Related Docs | [PERSONAS.md](./PERSONAS.md) / [FUNNEL_PLAN.md](./FUNNEL_PLAN.md) / [`ai-engineer-bootcamp/FUNNEL_PLAN.md`](../ai-engineer-bootcamp/FUNNEL_PLAN.md) / [`ai-engineer-bootcamp/PROMOTION_PLAN.md`](../ai-engineer-bootcamp/PROMOTION_PLAN.md) |

---

## 1. 课程定位摘要

> 🧑 目标用户画像见 [./PERSONAS.md](./PERSONAS.md)。本节只抽最必要的摘要，具体 persona 措辞、异议、可信度标注都在 PERSONAS.md 里，不要只看这一节就动手写文案。

4 周、79 节课（37 视频 + 25 Lab + 5 AI Tutor Quest + 12 Info/自学），self-paced 无排期，目标是从"会用 ChatGPT"补到"能讲清楚 RAG 怎么搭、能独立做出一个非生产级 RAG 原型"。[来源：`outline.json` 统计 + `courseObjective`，PERSONAS.md §0 已核对生产环境 syllabus 一致]

**主推内容角度**（从 PERSONAS.md §2 三个 persona 的痛点/决策周期交叉本课已知的真实证据整理，**不是**从 COURSE_TYPE_PLAYBOOKS.md 抓的行业角度表——因为本课不属于 8 类里任何一类，没有对应的角度权重表可抄）：

1. **真实 JD 证据**——Westpac 悉尼 "AI Engineer – Data Platforms" 岗位明确要求 RAG + Agentic patterns + Azure ML（来源：`curriculum/ai-engineer-rag/public/jobs/2026-05-09.json`，⚠️ 已快 2 个月未更新，用之前建议先重跑抓取 routine）。这是目前唯一一条能落地到具体公司/具体岗位要求的真实证据，比"AI 很重要"这种空话有说服力得多，适合做痛点开头。
2. **$299 vs 旗舰营 $3,850/$3,000 的门槛差距**（来源：两门课生产环境真实定价，2026-07-03 核实）——本课本质上就是"先花小钱验证"这条路径的真实存在的产品，不是营销话术，可以直接讲这个价格对比。
3. **免费试学 3 节**（来源：WebFetch 销售页确认真实存在）——降低决策门槛的真实机制，但"有没有人真的因为这个下单"未经数据验证，文案里只能讲"有免费试学"这个事实，不能讲"试学转化率很高"这种没查过的话。

**One-liner**：
- 中文：4 周从"会用 AI"到能独立搭一个非生产级 RAG 原型，为报考 12 周 AI Engineer 旗舰营打基础。[来源：`outline.json` `courseObjective`]

**目标人群**（来自 PERSONAS.md §1，占比均为 AI 推测，非真实报名统计——样本只有 3 人）：
- Persona A — 转型型技术人（~55%）：工作 2-6 年的软件/云/数据工程师，想把"会用 ChatGPT"升级成"能讲清楚 RAG 怎么搭"
- Persona B — Bootcamp 试水者（~25%）：心里已经在看 12 周旗舰营，但想先花 $299 验证自己学不学得进去
- Persona C — 求职防御型 Cloud/DevOps 工程师（~20%）：澳洲在职，看到相邻岗位开始要求 RAG/Azure ML，担心被甩下

**关键差异化**：
1. 是一个**真实存在、真实在售**的 $299 入门产品，不是纸面提案（对比 `ai-engineer-bootcamp/FUNNEL_PLAN.md` 里还没建的 $29 引流课提案）
2. 已经有"免费试学 3 节"机制天然降低决策门槛，不需要再造一层更便宜的入口来解决"怕踩坑"这个问题
3. 课程文案已经明确自我定位为"官方前置入门课"，天然带旗舰营的信任背书

**售价档**（来源：生产环境 API `admin-cms/programs/by-training/695f55f8d6221b0fef013efb`，2026-07-03）：
- 原价 $399 AUD / 促销价 $299 AUD（单一 SKU，无分档）
- 免费试学 3 节
- （下游）`ai-engineer-bootcamp` 旗舰营：原价 $3,850 AUD / 促销价 $3,000 AUD [来源：`ai-engineer-bootcamp/FUNNEL_PLAN.md`，2026-07-03 生产环境 API 核实]

**承诺红线**（不可写进任何推广文案的内容）：
- ❌ 月入 X 元 / 副业收入 / 包就业 / 拿 offer / 入职大厂
- ✅ 只承诺：RAG 原型作品 / 系统性理解 LLM 与 RAG 架构 / 为报考旗舰营打基础

---

## 2. 目标与漏斗反推

> ⚠️ **本节和模板不一样，先说明原因**：模板的反推公式假设"报名目标 N 人"已知。这门课**没有任何人给过这个数字**，所以下面先给出公式骨架 + 唯一一个可以现在就监控的过程指标，等 Lightman / 课程负责人（Beta）给出真实目标后再套用绝对人数。

```
报名目标 N 人（⚠️ 待补，需课程负责人给出，本文档不臆测）
  ↓ 免费试学 3 节 → 付费转化率：⚠️ 待补真实数据
    （这是本课独有的漏斗环节，其他类型课程没有——但目前只有 3 名付费学员，
     样本太小算不出可靠转化率，不能拿"行业基线"顶替，因为没有可比的行业基线）
试学转化目标：X 人试学 → N 人付费
  ↓ 销售页 UV → 试学转化率：假设 20%（⚠️ 行业基线，非本课实测，来源：CHANNEL_PLAYBOOK.md 通用销售页转化参考区间，不是这门课的数字）
销售页 UV 目标：X ÷ 20%
  ↓ 各渠道流量分摊：见下表（同为行业基线，不是本课实测）
```

**渠道流量分摊（占比，不给绝对数字——因为 N 未知）**：

| 渠道 | 占比假设 | 假设依据 |
|------|---------|---------|
| 小红书种草 | 35% | COURSE_TYPE_PLAYBOOKS.md 通用基线（小红书是地基渠道，权重通常最高）|
| 公众号长文 + SEO 长尾 | 30% | 本课是 self-paced 长期产品，长尾流量占比应高于典型 8 周 bootcamp |
| 旗舰营讲座/答疑顺带导流 | 20% | 本课与旗舰营共享目标人群，0 额外成本渠道，权重给高一些划算 |
| 海报 + 朋友圈自然传播 | 15% | 配套渠道，不单独作为主力 |

**本课独有的第二条漏斗（不在模板里，但对这门课更重要）**：

```
本课完课/试学 → 报名旗舰营 ai-engineer-bootcamp 的转化率：⚠️ 完全未知
  （PERSONAS.md §7 P2 待办：3 名真实学员里有没有人后续报了旗舰营，这个数字本轮完全没查，
   是这门课"作为引流层是否真的有效"这个假设的验证关键，见 §4 Track A 第一条 task）
```

⚠️ **本节所有百分比在跑完一轮真实数据前都是占位假设，不能当承诺讲，也不能当"已验证的投放依据"讲。**

---

## 3. 渠道矩阵（哪些渠道用 / 哪些不用 / 为什么）

> 每门课至少 5 个渠道，本课受限于样本小 + 预算历史空白，先跑 5 个"地基级"渠道，不铺开到 bootcamp 级别的强度。

### ✅ 启用渠道

| 渠道 | 主负责人 | 子 skill | 频次 | 为什么适合本课目标人群 |
|------|---------|---------|------|----------------------|
| 1. 小红书种草 | Summer / Lily / KIKI（轮值 1 人）| `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` | 低频，每 2 周 1 批（3-6 篇）| PERSONAS.md §3 明确"无法可靠产出"平台数据，不敢按 bootcamp 级别 9-12 篇/周的强度投入；但小红书是"所有课必跑"的地基渠道，先用真实 JD 证据（Westpac 案例）做低风险试探，观察数据后再决定要不要加量 |
| 2. 公众号长文 | Serena（公众号 owner，见 `docs/COMPANY_TEAM.md`）| `/blog-longform-writer` + `/wechat-article-quality` | 低频，2-4 周 1 篇 | 本课自己没有强故事素材（只 3 名学员、销售页无案例），但"AI Engineer JD 已经要求 RAG"这个真实现象足够撑起一篇深度分析长文，同时给 SEO 长尾词打地基，一鱼两吃 |
| 3. SEO 长尾流量 | Dev | `/seo-optimizer` + `/eeat-optimizer` | 一次性 metadata 优化 + 持续内容沉淀 | 本课是 self-paced 长期在售产品，不像 bootcamp 有 cohort 倒计时压力，SEO 起效慢但和这门课"没有开班日期、随时能接住流量"的产品形态天然匹配 |
| 4. 销售页维护（非新建）| Dev + Beta | `/course-custom-landing`（Mode B 迭代）| 按需 | 销售页已存在且真实可用（免费试学 3 节 + 购物车），本渠道任务是"维护"不是"新建"：3 名学员回访完成后补真实学员反馈，§5 冲突拍板后调整与旗舰营的对比文案 |
| 5. 海报套图 | Designer | `/poster-user-test` | 低频，1 季度 1-2 套 | 作为小红书/朋友圈的配套视觉资产，但因预算和历史数据都空白，不需要 bootcamp 级别的每周 1 套节奏 |
| 6. 旗舰营讲座/答疑顺带导流 | Beta | 无独立子 skill（在 `ai-engineer-bootcamp` 自己的讲座里顺带提及）| 每场旗舰营讲座末尾 | 0 额外成本——本课定位就是旗舰营的"官方前置入门课"，两门课目标人群高度重叠（PERSONAS.md Persona A/B 与旗舰营 Persona 大概率是同一批人），旗舰营讲座末尾提一句"想先试水的同学有 $299 入门版"是最低成本的导流方式 |

### ❌ 本课不启用的渠道（写明原因）

| 渠道 | 不启用原因 |
|------|----------|
| 3. 线下活动 | 样本量小（3 人）+ 没有预算历史，且 FUNNEL_PLAN.md 没有把线下活动列为本课定位的一部分 |
| 8. EOI 销售跟进 | 客单价 $299，单独给本课的 lead 跑 24-72h-7d SOP 投入产出比存疑（类比 COURSE_TYPE_PLAYBOOKS.md Type 6 引流课"客单价低，跟进 1 个 lead 已经亏"的逻辑）。**例外**：如果 lead 来自旗舰营讲座导流、意向明显是冲旗舰营去的，走旗舰营自己的 EOI 流程，不算本课单独渠道 |
| 9. 私域 1v1 push | 只在 rescue 期启用，本课目前连"目标"都没有，无法判断是否需要 rescue |
| 10. 付费投放 | 默认不启动，样本太小（3 人）无法验证任何渠道 ROI，按 CHANNEL_PLAYBOOK.md 通用红线"首次推广 / ROI 没验证 → 不启动" |
| LinkedIn 长文 | PERSONAS.md §0 明确"仅中文站（未见英文版素材，本轮不建 `PERSONAS.en.md`）"，本课没有英文站定位，跳过 |
| 独立 $29 引流课 | 这是 `FUNNEL_PLAN.md` §5 未拍板的开放问题，不属于本课现有渠道矩阵范围，等用户拍板后再决定是否要新建 |

---

## 4. 时间轴 Task 矩阵

> 本课没有自己的 cohort 倒计时（self-paced 滚动招生），所以拆成两条轨：**Track A 长青轨**（持续进行，不绑定具体日期）+ **Track B 冲刺轨**（锚定 `ai-engineer-bootcamp` 第 7 期真实开课日 2026-08-29，见 §0 时间轴锚点说明，**提案性质，待用户确认是否采用这个锚点**）。

### Track A · 长青轨（持续，无 deadline）

| 时间 | Task | 负责 | 分工 | Skill | 为什么做这件事 | 优先级 |
|------|------|------|------|-------|---------------|--------|
| 即刻启动 | 从后台学员名单联系 3 名真实学员做匿名回访，问是否续报了 `ai-engineer-bootcamp` | Beta | ✏️ | — | 这是 PERSONAS.md §7 P0 待办，直接验证 Persona B 存在假设（"本课学员会不会真的续报旗舰营"），也是判断"这门课作为引流层到底有没有效"的第一手数据；⚠️ PII 红线：只能匿名转述结果，不能把姓名/联系方式写进本文档 | P0 |
| 即刻启动 | 重跑岗位抓取 routine，刷新 `jobs/*.json`（已快 2 个月未更新）| Dev | 🤖 | — | 给下面的公众号长文和小红书内容提供最新的真实 JD 证据，避免用 2026-05-09 的旧数据 | P1 |
| 持续，2-4 周 1 篇 | 公众号长文——"AI Engineer JD 已经在要求 RAG，你的技能栈够吗"，用真实 Westpac 案例开头 | Serena | 🤖→✏️ | `/blog-longform-writer` + `/wechat-article-quality` | 主推内容角度 #1（真实 JD 证据），同时兼顾 SEO 长尾词"AI Engineer 转型""RAG 入门" | P1 |
| 持续，2 周 1 批 | 小红书选题+发稿（3-6 篇/批），围绕 Westpac JD 案例 + $299 门槛差角度 | Summer/Lily/KIKI 轮值 | 🤖→✏️ | `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` → `/xhs-review` | 低频试探，先看这门课的内容能不能在小红书起量，PERSONAS.md 没有可靠的平台数据支撑更大投入 | P2 |
| 一次性 + 持续 | 销售页 SEO metadata / JSON-LD / FAQ schema 优化 | Dev | ✏️ | `/seo-optimizer` + `/eeat-optimizer` | 本课是长期在售产品，SEO 是最匹配它"没有开班倒计时"这个产品形态的渠道 | P1 |

### Track B · 旗舰营 7 期冲刺轨（锚定 2026-08-29，提案待确认）

| 时间 | 日期 | Task | 负责 | 分工 | Skill | 为什么做这件事 | 优先级 |
|------|------|------|------|------|-------|---------------|--------|
| T-30 | 2026-07-30（周四）| Aurora/Seren 检查 `FUNNEL_PLAN.md` §5 冲突是否已拍板 | Aurora/Seren | ✏️ | — | 如果到这个时间点还没拍板，"过渡序列"设计（§6，本文档未展开）会继续卡住，需要升级给 Lightman 催办 | P1 |
| T-21 | 2026-08-08（周六）| 小红书 1 批（3-6 篇），选题角度换成 Persona B 视角："$299 先试水，搭个 RAG 原型再决定要不要报旗舰营" | Summer/Lily/KIKI 轮值 | 🤖→✏️ | `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` | 旗舰营 7 期招生窗口已经打开（3 人已报名，说明目标人群已经在关注），用这个角度捕捉同一波"正在决策"的流量，直接对应 Persona B 真实存在的决策路径 | P1 |
| T-14 | 2026-08-15（周六）| Beta 确认旗舰营 7 期是否有排期讲座/答疑，如有，在讲座末尾顺带提及本课作为"入门先修" | Beta | ✏️ | — | 0 成本导流渠道（见 §3 渠道 6），前提是旗舰营那边确实排了讲座——⚠️ 待 Beta 确认旗舰营侧是否有 T-14 讲座安排，本文档不能替旗舰营的 PROMOTION_PLAN.md 做这个决定 | P2 |
| T-7 | 2026-08-22（周六）| Designer 出 1 套海报，主题"4 周搭一个 RAG 原型，为 8 月旗舰营开班做准备"，挂本课入口 | Designer | ✏️ | `/poster-user-test` | 旗舰营 7 期报名截止前最后一波视觉物料，双向导流（旗舰营招生带动 + 本课自身曝光）| P2 |
| T-3 | 2026-08-26（周三）| Dev 检查销售页"报考旗舰营"引导文案/链接是否清晰可见 | Dev | ✏️ | — | 本课完课学员如果决定升级到旗舰营，销售页上必须有清楚的下一步入口，不能让用户自己去找 | P1 |
| D0 | 2026-08-29（周六）| 旗舰营 7 期开课当天，Beta 检查是否有本课学员/试学用户出现在 7 期报名名单里 | Beta | ✏️ | — | 如果有，这是 Persona B 假设的第一手真实验证数据点，比访谈更硬；如果没有，说明这条引流路径需要重新评估 | P1 |
| D+7 | 2026-09-05（周六）| 周报总结 Track B 冲刺效果（小红书数据 + 有没有观察到试学/购买波动），决定 Track A 长青轨节奏要不要调整 | Aurora/Seren | ✏️ | `/course-promotion-architect weekly` | 用真实数据回答"锚定旗舰营日期这个决策有没有用"，为下一轮（如果旗舰营还会开第 8 期）积累经验 | P1 |
| D+30 | 2026-09-28（周一）| 跑 postmortem，把真实数据（尤其 Persona B 转化率）回写 `FUNNEL_PLAN.md` | Aurora/Seren | ✏️ | `/course-promotion-architect postmortem` | FUNNEL_PLAN.md §5 的冲突决策 + §6 过渡序列设计都需要真实转化数据支撑，不能一直用行业基线撑着 | P0 |

---

## 5. 责任分配

| Role | Name | Primary 负责（本课）| 备注 |
|------|------|-------------------|------|
| Lightman | — | 目标人数拍板 / §5 冲突方案拍板 / 预算审批 | 本文档最大的两个阻塞项都需要他决策 |
| 教务管理 | Beta | 3 名学员回访 / 旗舰营讲座导流协调 / 销售页文案审核 | 唯一能接触到真实学员数据的人 |
| Marketing 主管 | Aurora / Seren | 跨渠道排期 / 周报 / postmortem | 按 `docs/COMPANY_TEAM.md`，Aurora 目前暂停 routine 派活，Seren casual 周四+周五——⚠️ 本课节奏低频（2 周 1 批），实际执行人以 Seren 排期为准 |
| 新媒体（小红书）| Summer / Lily / KIKI | 小红书选题+写稿+配图，轮值制 | 按 `docs/COMPANY_TEAM.md` 账号分工，Summer 负责主品牌线最适合本课（本课是主品牌旗舰营的前置课）|
| 公众号 owner | Serena | 公众号长文 | 实习生但工时最高（5 天/周），2026-04-27 起为公众号 owner，注意与 Seren（无 a，墨尔本 MKT）拼写区分 |
| Designer | — | 海报套图 | 低频（1 季度 1-2 套）|
| Dev | — | SEO / 销售页维护 / 岗位抓取 routine 重跑 | — |

⚠️ 待补：本课目前没有专属课程顾问跟进（Amelia/Rain/Angela 主要精力在旗舰营高客单价 lead 上），$299 客单价的 lead 目前走哪个流程需要 Beta 确认。

---

## 6. 周报（每周一晨会更新）

> 本文档 Status 仍是 `planning`，Track A/B 均未正式启动，暂无周报可写。第一条周报应在 §4 Track A 的两条"即刻启动" task 完成后开始记录。

---

## 7. 风险与决策日志

| 日期 | 事件 | 决策 | 决策人 | 影响 |
|------|------|------|--------|------|
| 2026-07-03 | 初始化 PROMOTION_PLAN.md（`course-promotion-architect init`，AI 初稿）| 新增 Type 9（本课不符合 COURSE_TYPE_PLAYBOOKS.md 现有 8 类，按其维护规则新增自定义类型）；渠道矩阵先用行业基线 + 已知真实锚点拼，标注未经本课真实用户验证；§4 拆 Track A（长青）+ Track B（锚定 `ai-engineer-bootcamp` 第 7 期 2026-08-29，提案性质）| Claude（AI 初稿）| 待用户确认 Track B 锚点选择是否采用，以及 §5 冲突/目标人数两项阻塞何时拍板 |

---

## 8. 调用子 skill 索引

| Skill | 用途 | 触发频次 | 责任人 |
|-------|------|---------|--------|
| `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` → `/xhs-review` | 小红书选题/写稿/配图/审稿 | 2 周 1 批 | Summer/Lily/KIKI 轮值 |
| `/blog-longform-writer` + `/wechat-article-quality` | 公众号长文写作+审核 | 2-4 周 1 篇 | Serena |
| `/seo-optimizer` + `/eeat-optimizer` | SEO metadata / E-E-A-T 信号 | 一次性 + 持续 | Dev |
| `/course-custom-landing`（Mode B）| 销售页迭代维护 | 按需 | Dev + Beta |
| `/poster-user-test` | 海报 ChatGPT 侧测试 | 1 季度 1-2 次 | Designer |
| `/course-promotion-architect weekly` | 周报 | 启动后每周 | Aurora/Seren |
| `/course-promotion-architect postmortem` | D+30 复盘 | 一次性（Track B 结束后）| Aurora/Seren |
| `/course-funnel-architect`（已跑）| §5 冲突方案拍板后需要回来更新 `FUNNEL_PLAN.md` 决策日志 | 待触发 | — |

---

## 🚨 承诺红线（不可违反）

- ❌ 不承诺金钱 / 收入 / 包就业 / 保 offer / 入职，禁用"副业"一词。
- ✅ 只承诺过程结果：RAG 原型作品 / 系统性理解 LLM 与 RAG 架构 / 为报考旗舰营打基础。
- 引用 `ai-engineer-bootcamp` 校友案例时必须清楚标注"旗舰课学员案例，非本课学员产出"（见 `FUNNEL_PLAN.md` 承诺红线段落，本文档继承同一条红线）。

---

## 维护规则

- 每次跑 `/course-promotion-architect weekly ai-engineer-rag` 自动追加第 6 节
- 决策变更 → 第 7 节追加一行
- Track B 冲刺结束（D+30，2026-09-28 后）→ 跑 `/course-promotion-architect postmortem ai-engineer-rag`，把真实数据回写 `FUNNEL_PLAN.md`
- ⚠️ 不要手工删旧周报 / 删旧决策日志
