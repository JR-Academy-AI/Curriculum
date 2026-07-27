# Claude 官方开发者认证（CCDV-F）· 考试直通包 — 目标用户画像 PERSONAS.md

> 单一真相文档。下游所有 marketing / 漏斗 / 内容 skill（`course-promotion-architect` / `course-custom-landing` / `blog-longform-writer` / `eoi-followup` 等）都读这里定义的 persona。
> 由 `/target-user-persona-mapper` 生成与维护，不要手工大改结构。
> **话术见 [`./DESIGN.md`](./DESIGN.md)；推广排期见 [`./PROMOTION_PLAN.md`](./PROMOTION_PLAN.md)；四门共用政策与报名铁律见 [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md)。**

---

## 0. Meta

| Field | Value |
|-------|-------|
| Course Slug | `ccdv-f-cert-pack`（CCDV-F = Claude Certified Developer – Foundations）|
| 语言站 | 中文站（本文件）。英文站若要投 LinkedIn / AU 受众须另建 `PERSONAS.en.md`，**不许翻译本文件**（红线 4）|
| 生成方式 | `init` mode |
| Ground truth 来源 | ① Anthropic 官方《CCDV-F Exam Guide v1.0》目标受众（一手）② 官方 Partner FAQ 网页（2026-07-26 抓取，一手）③ `DESIGN.md` 三支柱（产品侧）④ `PROMOTION_PLAN.md`（销售侧）⑤ 英文圈从业者公开复盘与备考站（Medium / findskill.ai，2026-06~07）|
| **🚨 Ground truth 覆盖率** | **自评 ~55%（⚠️ 偏弱但四门里最高）**。画像 / 痛点 1、3 / 购买触发器 / 异议 = 有一手或公开原话依据；**决策周期 / 中文平台时段 / 信任谁 / 触达 ROI = ⚠️ 待补**。 |
| 🚨 语言站警告 | 引用的用户原话**全部来自英文圈从业者**。可用范围仅限**品类层面摩擦**（报名墙、重考成本、ROI 未验证、权重陷阱）——这些与语言无关。**行为字段（平台 / 时段 / 信任谁 / 决策链）不可从英文原话外推到中文买家**（红线 4）。 |
| 首期状态 | 未开售（D0 ⚠️ 待定）|
| 下次 refresh | 首期开售后拿到咨询记录即刻 `refresh --cohort=1`；不晚于 2026-12-26 |
| Created | 2026-07-26 by `/target-user-persona-mapper init` |

> ⚠️ **init 骨架，不是可信画像。** 凡标 ⚠️ 的字段不能拿去做投放决策。

---

## 1. Persona 速查表

| | **A · 公司在落地 Claude 的在职工程师** | **B · 独立开发者 / AI 应用接单者** | **C · 拿不准该考 DV 还是 AR 的工程师** | **D · 没写过代码 / 没用过 Claude（🚫 不会买）** |
|---|---|---|---|---|
| 一句话 | 1–5 年后端/全栈，正在把 Claude 接进公司产品 | 自己接活做 AI 应用，要一张能写进提案的证 | 有实战、但被四门证名字绕晕，选错就白考 | 想靠考证入门 AI 编程的人 |
| 占比预估 | 🔵🔵🔵 最大 ⚠️ 待验证 | 🔵🔵 中（付费意愿强）| 🔵🔵 中（**内容型入口，非直接买家**）| 🔴 分流 |
| 核心买点 | 按官方子技能权重把复习时间花对地方 | 打通个人根本进不去的报名链路 | 一张把四门证讲清楚的对照表 | —（转实战班）|
| 决策周期 | ⚠️ 待补 | ⚠️ 待补 | ⚠️ 待补 | — |
| 主渠道 | ⚠️ 待补（推断：公众号技术号 / 掘金 / 技术群）| ⚠️ 待补（推断：私域 / LinkedIn / 圈层）| ⚠️ 待补（**搜索意图强 → SEO**）| — |

---

## 2. Persona 详情

### Persona A · 公司正在落地 Claude 应用的在职后端 / 全栈工程师

- **画像**：25–35 岁，**1–5 年软件工程经验 + 至少 6 个月 Claude 实战**，写 Python 和/或 TypeScript，熟 REST API 与 CLI。公司在把 Claude 接进产品，他是执行的人。`[来源: 官方 CCDV-F Exam Guide 受众段 ⭐⭐⭐⭐⭐；英文备考站同口径转述 "engineers who build applications on the Claude API"]`
- **痛点 Top 3**：
  1. **复习方向会跑偏，而且偏得很离谱** —— 官方 blueprint 精确到小数位：Applications & Integration **33.1%**（英文圈原话：*"one domain is a third of the entire exam"*），而 Claude Code 只有 **3.1%**、Eval/Testing/Debugging **2.6%**。对照架构师 Foundations 里 Claude Code 占 20%——**照 CCAR-F 打法复习 CCDV-F 的人，会把六倍于应得的时间砸在 Claude Code 上**。`[来源: 官方 blueprint ⭐⭐⭐⭐⭐ + 英文圈公开原话 ⭐⭐⭐]`
  2. **「我天天写 Claude 应用，但拿不出对外可证明的东西」** —— ⚠️ 推断方向，无中文原话 `[来源: DESIGN 定位推断 ⭐]`
  3. **报名卡在门口** —— 英文圈从业者原话：*"the first wall isn't the exam. It's that all of this lives behind the Partner Network."*（Roan Brasil Monteiro, Medium, 2026-07）。且官方规定**必须用已登记公司域名邮箱，个人邮箱注册不了**。`[来源: 英文圈公开原话 ⭐⭐⭐ + 官方 Partner FAQ ⭐⭐⭐⭐⭐，详见 CLAUDE_CERT_FAMILY §3.1]`
- **决策周期**：⚠️ 待补。**硬约束**：域名未登记时官方处理需 **7–10 天**，"下单 → 能约考"存在硬延迟，任何漏斗时长假设都要含这一段。`[来源: 官方 Partner FAQ ⭐⭐⭐⭐⭐]`
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补（推断：公众号技术号 / 掘金 / V2EX / 微信技术群 / LinkedIn，时段未知）`[来源: AI 推断 ⭐]`
- **信任谁**：⚠️ 待补（推断：官方 blueprint 原始数字、已过考同行的逐域得分复盘。技术受众对"给我看数据"的反应强于对话术）`[来源: AI 推断 ⭐]`
- **不信什么（黑名单）**：⚠️ 待补（推断：「保过/包过」、自称"官方合作伙伴"、没有数字支撑的"精讲"。⚠️ 注意后两条同时是我方红线——匠人在 CPN 只是 **Registered** 级，**禁止**自称官方 Partner）`[来源: AI 推断 ⭐ + CLAUDE_CERT_FAMILY §4 ⭐⭐⭐⭐⭐]`
- **购买触发器**：看到**子技能级权重表**本身。这是四门里唯一给到 25 项子技能、精确到小数位的考纲——「你可以不信我们，但请你相信这张表」。`[来源: DESIGN 支柱 2 ⭐⭐⭐ + 官方 blueprint ⭐⭐⭐⭐⭐]`
- **异议 Top 3**：
  1. **「这证刚出来，招聘方/市场认不认」** —— 英文圈原话：*"the credential is days old, so nobody can show you salary data or recruiter-filter evidence for this specific exam."*（findskill.ai, 2026-07）`[来源: 英文圈公开原话 ⭐⭐⭐]`
  2. **「有实战经验的话，是不是自己刷刷就过了」** —— 真实存在且有公开背书：*"I didn't spend weeks studying for this certification. I spent 90 minutes, a cup of coffee, and one focused practice exam session — and I passed."* / *"if you have hands on experience then the certification process will feel like a breeze."*（Nayan Paul, Medium, 2026-06）。⚠️ **注意时间点**：该文写于 2026-06，早于 2026-07 初考试交付迁移到 Pearson VUE OnVUE，不能直接套到现在。**但这是本产品最该正面回应的异议——不要回避，用"权重陷阱 + 重考成本"作答。** `[来源: 英文圈公开原话 ⭐⭐⭐]`
  3. **「官方 Academy 备考课免费，为什么还要买包」** `[来源: 同产品线 cca-f MARKETING_PLAN §6 FAQ ⭐⭐⭐ 销售侧]`
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**：⚠️ 虚构示意 —— 「团队让我把 Claude 接进后台，我做完了。想顺手考个证，打开考纲傻眼：八个域，权重到小数点。我本来准备把 Claude Code 好好过一遍——结果它只占 3.1%。差点把两周花在三分之一道题上。」

### Persona B · 独立开发者 / 接活做 AI 应用外包的人

- **画像**：28–40 岁，独立开发者或小团队技术负责人，接 Claude / Agent 应用外包，要给客户提案加可信度。`[来源: 同产品线 cca-f MARKETING_PLAN §4 同类人群 ⭐⭐⭐ 销售侧 + 官方受众段兼容]`
- **痛点 Top 3**：
  1. **报名墙对他是四类人里最致命的** —— 他**没有公司域名邮箱**。官方原文 "personal email addresses will not work"，英文备考站也点名这一类人：注册要先让**雇主**加入 Claude Partner Network，而 *"the application isn't instant"*，对独立开发者构成时间瓶颈。**这正是本产品对 Persona B 的最大价值，也是最该讲清楚的一段。** `[来源: 官方 Partner FAQ ⭐⭐⭐⭐⭐ + 英文圈公开原话 ⭐⭐⭐]`
  2. ⚠️ 待补 —— 推断：「投标时客户凭什么信我懂 Claude」`[来源: AI 推断 ⭐]`
  3. ⚠️ 待补
- **决策周期**：⚠️ 待补（推断：比 A 长，要算"对生意有没有用"的 ROI）`[来源: AI 推断 ⭐]`
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补（推断：私域微信 / LinkedIn / 独立开发者社群 / 即刻）`[来源: AI 推断 ⭐]`
- **信任谁**：⚠️ 待补（推断：同行顾问背书、客户口碑）`[来源: AI 推断 ⭐]`
- **不信什么**：⚠️ 待补（推断：群发广告、无案例的稀缺话术）`[来源: AI 推断 ⭐]`
- **购买触发器**：确认"**我这种没有公司邮箱的人也能考**"的那一刻。**2026-07-26 已定案：走匠人通道的学员由匠人发 `@jiangren.com.au` 邮箱用于注册**（见 `CLAUDE_CERT_FAMILY §3.1`）——**这是本 persona 的核心买点，可以放心讲**。⚠️ 唯一前提：`jiangren.com.au` 须已登记在匠人 partner record 上，首期开售前必须先确认。`[来源: 官方 Partner FAQ ⭐⭐⭐⭐⭐ + Lightman 2026-07-26 定案 ⭐⭐⭐⭐⭐]`
- **异议 Top 3**：
  1. 「这证客户认不认」⚠️ 待补原话 `[来源: AI 推断 ⭐]`
  2. **「万一没过，成本多少」** —— 真实且可量化，英文圈原话：*"failing three times costs $375 and locks you out for months."*（findskill.ai, 2026-07；对应官方重考政策：14/30/90 天等待、12 个月内最多 4 次、每次重新付费）`[来源: 英文圈公开原话 ⭐⭐⭐ + 官方考纲重考条款 ⭐⭐⭐⭐⭐]`
  3. ⚠️ 待补
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**：⚠️ 虚构示意 —— 「客户问我有没有 Anthropic 官方认证。我去注册，填邮箱那步告诉我个人邮箱不行、要公司域名。我就是自己一个人干活，哪来的公司域名。」

### Persona C · 有实战、但拿不准该考 CCDV-F 还是 CCAR-F 的工程师

- **画像**：与 Persona A 高度重合，区别在**他还没决定考哪门**。CCDV-F 与 CCAR-F **考试费相同（$125）、名字都带 Foundations**，是四门里最容易混淆的一对。`[来源: DESIGN 分流段 ⭐⭐⭐ + CLAUDE_CERT_FAMILY 四门对照表 ⭐⭐⭐⭐⭐]`
- **痛点 Top 3**：
  1. **选错门 = 白花钱白花时间**，而且两门 blueprint 重叠有限：CCDV-F 有第三方 agentic 框架、软件工程功底、密钥管理；CCAR-F 有 agentic loop 细节、场景抽题、Claude Code 深度配置。`[来源: 官方两份 blueprint 逐条对照 ⭐⭐⭐⭐⭐]`
  2. ⚠️ 待补 —— 推断：「四个证的名字看不出区别，官方文档要自己逐份读」`[来源: AI 推断 ⭐，但英文圈已出现多篇"四门证对比"长文，侧证这个搜索需求真实存在 ⭐⭐⭐]`
  3. ⚠️ 待补
- **决策周期**：⚠️ 待补（推断：选证阶段本身就是决策周期的一部分，比 A 长）`[来源: AI 推断 ⭐]`
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补。**但有一条方向明确**：这个 persona 的行为是**主动搜索**（"CCDV-F 和 CCAR-F 区别""Claude 认证考哪个"），**搜索引擎 + 知乎/掘金长文是他的入口，不是信息流**。`[来源: 英文圈已有多篇同类对比长文占位 ⭐⭐⭐]`
- **信任谁**：⚠️ 待补（推断：把两份官方考纲逐词比对给他看的人）`[来源: AI 推断 ⭐]`
- **不信什么**：⚠️ 待补（推断：只有结论没有依据的"推荐考 X"）`[来源: AI 推断 ⭐]`
- **购买触发器**：一张**把四门证讲清楚的对照表**——先解决选证，再谈买包。**这是内容型入口，不是硬广入口。** `[来源: DESIGN 分流段 ⭐⭐⭐]`
- **异议 Top 3**：1. 「我到底该考哪门」（这不是异议，是**未被回答的问题**） 2. ⚠️ 待补 3. ⚠️ 待补
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**：⚠️ 虚构示意 —— 「DV 和 AR 都是 Foundations，价格一样，我到底考哪个？搜中文全是复读官网的水文。最后自己下了两份考纲，逐页比。」
- 🔗 **本 persona 直接对应中文站尚未覆盖的 SEO 缺口**（"CCAR-F vs CCDV-F 怎么选"这类搜索词），见第 3 节。

### Persona D · 没写过代码 / 没真正用过 Claude 的人（🚫 不会买 / 必须分流）

- **画像**：想靠考证入门 AI 编程的人。`[来源: 官方受众段明确要求 1–5 年软工经验 + 6 个月 Claude 实战 ⭐⭐⭐⭐⭐]`
- **为什么不是本课买家**：官方受众门槛写得很硬。本产品是**考试冲刺包，没有从零教学**，新手买了会失望、退款、给差评。
- **分流话术**：「你不写代码 → CCAO-F（官方明说不需要开发经验）；想学 AI 编程 → AI Programming / AI Engineer Bootcamp。」`[来源: DESIGN 分流段 + 官方受众段 ⭐⭐⭐⭐⭐]`
- 其余字段：不适用

---

## 3. 跨 persona 渠道平台汇总

> 🚨 **本节数据不足以驱动投放**：A/B/C 的平台字段全部 ⚠️ 待补。`PROMOTION_PLAN.md` 现有渠道矩阵是按"技术受众"经验推断，非 persona 反推。

| 渠道 | 当前依据 | 状态 |
|------|---------|------|
| 公众号技术长文 / 技术社区（掘金 等）| 受众类型经验推断 | ⚠️ 待校准 |
| 私域 / 技术群 | 同上 | ⚠️ 待校准 |
| **SEO 长尾（选证类搜索词）** | **Persona C 行为是主动搜索，方向有依据** | 🟡 **方向可信，中文站目前空白——见下** |
| 小红书 | 技术受众权重低于 CCAO-F | ⚠️ 待验证 |

> 🔴 **已识别缺口**：Persona C（选证困惑）在中文站**没有任何落地内容**。核查确认 `jr-academy-web-zh` 只有 `/certifications/exam/[slug]` 产品页与章节数据，**没有任何"四门证怎么选 / CCAR-F vs CCDV-F"型对比长文**。英文圈这类长文已有多篇占位。这是 CCDV-F 与 CCAR-F 共享的入口缺口，建议按 `/seo-optimizer` + `/blog-longform-writer` 补，**一篇对照长文四门共用**。

---

## 4. 不会买的人（防资源错配）

| 人群 | 为什么不是买家 | 处理 |
|------|-------------|------|
| 没写过代码 / 没用过 Claude（= Persona D）| 官方受众门槛硬，本包无从零教学 | 分流 → CCAO-F / AI Programming `[✅]` |
| 不写代码的业务人 | 本门通篇考实现细节 | 分流 → CCAO-F（唯一不需要开发经验的一门）`[✅ 官方原文]` |
| 邮箱域名挂不上任何 CPN 组织、且不接受走匠人通道 | 官方规定个人邮箱注册不了 | 销售私聊**前置确认**，见 `CLAUDE_CERT_FAMILY §3.1` `[✅ 官方 FAQ]` |

---

## 5. 历史决策日志

| 日期 | 数据源 | 看到什么 → 改了什么 |
|------|--------|-------------------|
| 2026-07-26 | init（官方 Exam Guide + 官方 Partner FAQ 抓取 + DESIGN/PROMOTION_PLAN + 英文圈公开复盘）| 首版建立，覆盖率 ~55%（四门最高，因英文圈针对 Developer 的公开讨论最多）。新增 Persona C（选证困惑）——**它同时是中文站 SEO 缺口的对应人群**。异议 1/2 与 Persona B 痛点 1 首次拿到公开原话 |

---
| 2026-07-26 | Lightman 定案 | 走匠人通道的学员发 `@jiangren.com.au` 邮箱注册 → 报名墙从「学员各自卡住」变成「匠人一次性登记域名」，本课报名相关痛点/触发器随之改写；同时新增一条成本承诺：学员邮箱须留到证书续证完成（≥13 个月），否则学员一年后只能全价重考。详见 `CLAUDE_CERT_FAMILY §3.1` |

## 6. Ground truth 来源清单

| 标注 | 具体来源 | 可信度 |
|------|---------|--------|
| `[官方 Exam Guide]` | Anthropic《CCDV-F Exam Guide v1.0, Effective July 2026》（`_cert-official-guides/`，gitignore，版权材料，仅作 GT）| ⭐⭐⭐⭐⭐ 一手 |
| `[官方 Partner FAQ 2026-07-26]` | `anthropic-partners.skilljar.com/page/faq-certifications`，原文见 `CLAUDE_CERT_FAMILY §3.1` | ⭐⭐⭐⭐⭐ 一手 |
| `[英文圈公开原话]` | Medium：Roan Brasil Monteiro（2026-07，报名墙）/ Nayan Paul（2026-06，90 分钟通过）；findskill.ai CCDV-F 备考指南（2026-07，重考成本 / ROI 未验证 / 33.1% 单域）| ⭐⭐⭐ **品类层面可用，行为字段不可外推** |
| `[DESIGN]` / `[PROMOTION_PLAN]` | 产品侧 / 销售侧口径 | ⭐⭐⭐ |
| `[AI 推断]` | 无数据 | ⭐ 不可当投放依据 |

> ⚠️ **三方备考站只可取"声音"，不可取"事实"**：本次核查已发现中文三方文章把 CCAR-F 考试费写成 $99（官方 $125）。数字一律以官方考纲 + `CLAUDE_CERT_FAMILY.md` 为准。
> ⚠️ Nayan Paul 那篇写于 2026-06，**早于 2026-07 初考试交付迁移至 Pearson VUE OnVUE**，其"90 分钟通过"的体感不代表当前形态。

### 🚨 必须补的 ground truth（优先级排序）

1. **中文买家的真实原话** —— 目前 0 条（Reddit 封禁我方爬虫、Medium 付费墙、linux.do 403，公开渠道拿不到中文声音）。必须靠自有渠道产生：首期咨询记录 / 掘金·公众号评论区。
2. **销售侧 30 min 面访**：技术受众最常问什么、"有经验是不是自己就能过"这条异议的真实出现频率。
3. **报名墙实际卡点数据**（四门共用，一次采集）：多少人卡在邮箱域名、平均耗时。
4. **Persona C 的搜索词真实数据**：GSC / 百度指数上"Claude 认证""CCDV-F""Claude 认证 考哪个"的实际搜索量——这决定 SEO 长文值不值得做。
5. 中文技术受众平台 / 时段 → `/persona-ground-truth-scraper`（V2EX 可自动，掘金需半自动）。

> 补齐 1–3 可把覆盖率从 55% 拉到 80%+。
