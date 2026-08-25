# AI Engineer Bootcamp Cohort 7 — Marketing Plan

> 版本：2026-08-25
> 课程事实 SoT：[`COHORT_07_OUTLINE.md`](./COHORT_07_OUTLINE.md) 与 [`public/outline.json`](./public/outline.json)
> 视觉 SoT：[`DESIGN.md`](./DESIGN.md)
> 定价、开班日、席位、学员规模和就业数据：未在本计划中确认，发布前必须由课程负责人或生产系统给出证据。

## 1. 一句话定位

**不是学 13 个互不相关的 Demo，而是从第一周开始，在同一个 CareKind repository 里搭出一套可运行、可评估、可治理的 production Agent。**

课程的教学差异不是“多一节项目课”，而是两条独立 Live 轨道：理论课建立 AI 工程判断，实践课持续建设同一个真实产品。

## 2. 六个对外宣传点

1. **每周理论 + 独立实践双 Live**：W1–W12 每周两场，W13 最终 production review；共 25 场、45 小时。
2. **一个项目贯穿 13 周**：CareKind 从 ADLC、UI 和业务工作流开始，不从聊天框或 Agent 模板起步。
3. **Australian aged care 合规场景**：围绕 documentation、role、permission、human confirmation、version、citation 和 audit trail 做工程设计。
4. **完整 Applied AI 路径**：Voice → Structured Documentation → RAG → MCP → Bounded Agent → Memory → Harness → Model Routing → Evals/Governance。
5. **Live 保留面试重点**：RAG、Agents、ReAct、Multi-Agent Architectures、Model Routing 和 production system design 不降级成纯录播。
6. **以生产证据结束**：eval cases、deterministic checks、LLM-as-a-Judge、regression gate、tracing、red team、latency/cost/tool-failure thresholds、release/rollback/incident defense。

## 3. 五个内容方向

### A. Role Upgrade · Software Engineer → AI Engineer

讲清已有软件工程能力如何迁移到 AI 系统：API、state、permissions、testing、observability 仍然重要；新增的是 context、retrieval、model behavior、tool loop、memory、eval 和 governance。

适合：LinkedIn 技术长文、公开课、官网首屏、横版架构图。

### B. Build in Public · 13 周 CareKind Build Log

每周只展示一个真实增量和一个工程判断：W1 为什么先做 ADLC，W4 为什么 AI 只到可编辑 transcript，W7 为什么先验收 RAG MVP，W9 为什么先做 bounded agent，W10 为什么 memory 必须有 write gate。

适合：小红书图文、微信公众号系列、短视频、学员周报模板。

### C. Architecture Breakdown · 10 层 AI 工程技术栈

用主海报的分层视觉解释每一层解决什么问题、依赖上一层什么能力、失败时如何定位。重点不是工具清单，而是系统边界和 trade-off。

适合：LinkedIn Document、技术社区文章、90 秒 explainer、线下讲座海报。

### D. Compliance-aware AI · 为什么用 Aged Care

把差异讲成工程约束：AI 只能生成 Draft，human confirmation 才能进入后续流程；synthetic/de-identified data、role permission、citation、version 和 audit 从第一版产品开始保留。

适合：差异化品牌内容、B2B 分享、治理专题公开课。

### E. Beyond the Demo · Production Agent 如何过关

展示 prompt injection、memory poisoning、越权、PII 泄露、tool failure、latency/cost threshold、rollback 和 incident drill。结论是“能跑”不是上线标准。

适合：技术短视频、Demo Day、面试 System Design 内容、转化阶段 FAQ。

## 4. 内容漏斗

| 阶段 | 用户问题 | 主内容 | CTA |
|---|---|---|---|
| Awareness | AI Engineer 到底比 API developer 多什么？ | Role Upgrade、10 层 Stack 海报、30–45 秒短视频 | 查看完整技术栈 |
| Consideration | 这门课是否真的会做完整产品？ | 13 周 Build Log、CareKind workflow、课程周表 | 查看 13 周大纲 |
| Trust | 为什么这个项目算 production 级？ | RAG/MCP/Agent/Memory/Harness 架构拆解、治理边界 | 参加技术公开课 |
| Conversion | 我是否适合、要投入多少？ | 双 Live 说明、前置能力、交付物、FAQ | 咨询或申请 |
| Proof | 学员最后能解释和证明什么？ | Demo Day、eval evidence pack、System Design Defense | 预约下一期 |

## 5. 首轮内容资产

### 必须先完成

- 1 张 Cohort 7 主海报：1242×1660，V5 高级柔和科技方向。
- 1 个公开课程总览：13 周双 Live、CareKind build path、全部周课表。
- 1 个官网销售页：删除 24 周、59 Live、7 projects 等旧期口径；所有未确认商业字段显示“待确认”或不展示。
- 1 份 8–10 页 LinkedIn Document：《从 Demo 到 Production Agent 的 10 层差距》。
- 3 条 30–45 秒竖版视频：Role Upgrade、CareKind Build、Beyond the Demo。

### 接下来两周

- 13 张 Build Log 模板，每周替换一个系统层和一个交付证据。
- 5 张技术卡：RAG、MCP、Bounded Agent、Memory Write Gate、Harness。
- 3 场公开课题目：
  1. 《Software Engineer 转 AI Engineer：真正缺的 8 个系统能力》
  2. 《Live Build：一条语音如何变成可审计的 Care Note Draft》
  3. 《Production Agent Failure Review：Demo 之后最先坏在哪里》

## 6. 渠道适配

| 渠道 | 原生形式 | 执行重点 |
|---|---|---|
| LinkedIn | Document、技术长文、讲师 POV 视频 | 架构判断、案例、可保存的技术框架；不要写泛泛招生文案 |
| 小红书 | 1242×1660 图文、9:16 短视频 | 第一张直接给冲突：“Agent 能跑 ≠ 能上线”；后续用 CareKind 证据展开 |
| 抖音 / TikTok / Reels | 9:16、30–45 秒、原生字幕 | 前 3 秒给价值主张，前 6 秒完成 hook，人物/屏幕/架构动画交替 |
| 微信公众号 | 1500–2500 字技术拆解 | 一篇只解决一个问题，链接到完整大纲和公开课 |
| 线下 / Webinar | 45–60 分钟技术公开课 | 现场拆架构或失败案例；结尾才介绍课程结构 |

平台规范依据：

- Meta Reels 建议使用 9:16、音频和 safe zone，并通过 A/B test 迭代创意：<https://www.facebook.com/business/ads/facebook-instagram-reels-ads>
- TikTok 官方建议 TikTok-first、9:16、至少 720p、前 3 秒给 proposition、前 6 秒完成 hook，并持续刷新素材：<https://ads.tiktok.com/help/article/creative-best-practices>
- TikTok Creative Center 用于查询趋势、Top Ads、Keyword Insights 和 Creative Insights：<https://ads.tiktok.com/help/article/creative-center>
- LinkedIn Document 适合原生分发 thought leadership、case study 和 lead-gen 内容：<https://business.linkedin.com/advertise/ads/sponsored-content/document-ads>

## 7. 30 天发布节奏

| 周 | 主题 | 主要资产 |
|---|---|---|
| Week 1 | 定义新课程 | 主海报、官网/大纲页、Role Upgrade 视频、技术栈 Document |
| Week 2 | 证明项目连续性 | W1–W5 Build Log、Voice → Draft 流程视频、公开课 1 |
| Week 3 | 证明技术深度 | RAG/MCP/Bounded Agent 卡片、公开课 2、讲师技术 POV |
| Week 4 | 证明 production 标准 | Memory/Harness/Eval/red-team 内容、公开课 3、FAQ 与申请 CTA |

建议频率：每周 2 条竖版视频、1 份可保存图文/Document、1 篇技术长文、1 次公开课或 Live Q&A。没有足够制作能力时，优先保留主海报、Build Log 和公开课，不用低质量日更填满渠道。

## 8. 衡量与复盘

禁止预填目标数字。发布后按渠道记录真实值：

- Awareness：3 秒/6 秒留存、完整播放率、Document 完读率。
- Consideration：课程页访问、13 周大纲点击、公开课报名与到场。
- Conversion：咨询、申请、付费；来源必须能追溯到具体内容。
- Quality：评论中的真实问题、销售通话反复出现的异议、公开课问题类型。

每周只做三件事：保留有效 hook、淘汰低质量泛内容、把真实异议写回下一周选题。

## 9. 发布红线与当前 P0

### P0：官网旧口径冲突

当前生产销售页仍可能展示旧期的 24 周、59 Live、7 projects 等信息。第七期任何付费流量开始前，必须完成官网内容切换并做公网回读；否则广告与落地页会互相否定。

### 禁止未经验证对外使用

- 薪资、Offer、就业率、雇主名单或就业保证。
- 第五期数据直接当第七期承诺。
- 未确认的价格、折扣、开班日期、席位和报名人数。
- “医疗 AI 自动判断”“自动提交 SIRS”“直接写回真实 aged-care system”等超出 CareKind 边界的描述。

## 10. Owner 分工

| Owner | 任务 |
|---|---|
| 课程负责人 | 确认开班日、价格、席位、讲师和申请条件 |
| Ada | 从前五期中核对可复用录播：优先检查 Fine-Tuning 等低时效内容的完播、反馈与清晰度；RAG 基础、Agents 基础、ReAct、Multi-Agent 仍按新大纲 Live |
| Design | 按 `DESIGN.md` 输出 3:4、1:1、9:16 和 16:9，不再把旧 Neo 版作为 Current |
| Content | 按五个方向建选题池，每条内容标记 funnel stage 和唯一 CTA |
| Dev | 确保官网、课程大纲、海报和 OG 图使用同一事实口径 |
| Sales | 回写真实咨询来源与反复异议，不自行增加课程承诺 |
