# AI Engineer Bootcamp Cohort 7 — 新角度推广方案

> 版本：2026-08-25
> 课程事实 SoT：[`COHORT_07_OUTLINE.md`](./COHORT_07_OUTLINE.md) 与 [`public/outline.json`](./public/outline.json)
> 视觉 SoT：[`DESIGN.md`](./DESIGN.md)
> 未确认字段：价格、开班日期、席位、学员规模、就业与薪资数据。没有负责人或生产系统证据前不得发布。

## 1. 推广策略变化

第七期不再以“学了哪些 AI 名词”或“做一个 Aged Care 项目”作为主叙事。

对外首先用最直白的话讲清教学方式的变化：

> **以前一周两节都在学知识。第七期，一节学原理，一节做项目。**

> **而且不是每周换一个 Demo，是连续 13 周把同一个 Agent 项目做完。**

这种新教学方式最终带来一个可被看见的结果：从标准软件产品底座出发，用 13 周持续交付一套能调用工具、管理记忆、接受评估、受到治理并具备发布控制的 Enterprise Agent System。

传播层级必须固定：

1. **最大改变**：以前两节课都以知识学习为主；第七期一节讲原理，一节做项目。
2. **课程品类**：Enterprise AI Engineering。
3. **学习结果**：从 Software Engineer 升级为能交付 Production Agent System 的 Applied AI Engineer。
4. **实践方法**：同一项目主线、连续 13 周、五次能力升级；代码库按系统边界合理拆分。
5. **案例角色**：CareKind 是高约束工程案例，用来暴露真实系统问题，不是课程行业定位，也不是学员未来只能做的产品。

## 2. Campaign 核心思想

### 主命题

**会调用模型，不等于会交付 AI 产品。**

### 三组传播冲突

- **Agent 能跑 ≠ Enterprise-ready**：没有 permission、tracing、eval、rollback 和 owner，就不能安全上线。
- **做过 Demo ≠ 有工程证据**：面试官需要看到架构选择、失败处理、评测结果和 release decision。
- **项目案例 ≠ 行业限制**：高约束案例训练出的 RAG、Tools、Memory、Governance 和 Human-in-the-loop 能迁移到金融、法律、政府、客服与企业内部系统。

### 推荐主标题

**13 周，完成一次 Enterprise Agent 产品交付**

### 推荐副标题

**12 场理论 Live + 13 场独立实践 Live。从标准产品底座开始，围绕同一套系统逐步完成 Tools、RAG、Agent、Memory、Harness、Governance、Evals 与 Production Release。**

### 可轮换 Hook

- 你的 Agent 为什么敢上线？
- 如果 Agent 调错工具，系统如何阻止它？
- RAG 引用了过期政策，谁能发现、谁来负责？
- Memory 写入错误事实，如何隔离、纠正和撤回？
- 面试时，除了 Demo，你能拿出哪些 production evidence？

## 3. 从第五期到第七期：教学方式重构

### 核心升级叙事

> **以前一周两节都在学知识。第七期，一节学原理，一节做项目。**

第五期已经是一周两节课，所以第七期不是“多加一节课”。真正的变化，是把其中一节完整留给项目实践。第一节讲 AI Engineering 原理；第二节马上把这项能力做进同一个项目。下周不换题目，继续在上周代码上开发，连续做 13 周。

最短广告版本：

> **一周两节：一节学，一节做。**

完整品牌版本：

> **第五期建立 10 层 AI 工程知识地图；第七期用 Theory + Practice 双 Live，让这 10 层在同一套 Production Agent System 里真正运行。**

这不是推翻第五期，也不是把理论课改成 coding class。第五期完成了从 Foundation、Context、RAG、Agents、Memory 到 Harness、Model 与 Observability 的 10 层知识组织；第七期继续保留理论线，同时新增一条同等完整的实践线。两条课各自承担不同任务：理论课建立判断，实践课完成交付。

### 教学方式的根本变化

| 第五期 | 第七期 |
|---|---|
| 一周两节课，都以学习知识为主 | 一节学原理，一节做项目 |
| 实践分布在 Lab、阶段项目和课堂内容中 | 每周固定一整节项目课 |
| 学完一个知识阶段后再验证应用 | 从 W1 启动产品，每周完成一次可运行增量 |
| 不同知识点分别理解和练习 | 同一项目主线连续 13 周，保留真实依赖与历史状态 |
| 课程结束时汇总学过的能力 | W13 用系统、评测与发布证据完成 Production Review |

最简单的学习节奏：

`第一节学原理 → 第二节做进项目 → 下周接着做`

因此，学生每周都能回答三个问题：

1. 这周理解了哪个 AI Engineering 概念？
2. 这个概念在系统中解决了什么问题？
3. 用什么运行结果、测试或 trace 证明它真的完成了？

### 五个可被用户看见的变化

| 第五期积累 | 第七期升级 | 对学员意味着什么 |
|---|---|---|
| 每周已有两场 Live，主要按理论主题展开 | 同样两场，但明确拆为 Theory + Practice | 直播数量不是卖点，课堂分工和连续交付才是 |
| 10 层 AI 工程知识地图 | 10 层知识 + 一条连续产品交付路径 | 不只知道每层是什么，还知道如何把各层连接起来 |
| 各 Phase 的理论、Lab 与阶段项目 | One System / 13 Weeks / 5 Capability Upgrades | 每周在上一周成果上继续开发，不再重新开始一个 demo |
| Governance 集中在后段总结 | 从 W3 开始 governance by design，贯穿 Memory、Harness 与 Release | 权限、PII、audit、approval 和 rollback 从设计期就进入系统 |
| 项目展示功能结果 | 提交 eval、trace、permission、failure test、release 与 incident evidence | 项目可以用于 Applied AI Engineer System Design 面试答辩 |

### 这条传播为什么成立

- **尊重旧学员**：不是说第五期“过时”或“没实践”，而是说明五期教学积累已经形成稳定知识体系。
- **解释升级必要性**：第五期每周已有两场课；第七期把其中一场完整留给实践，让理论判断在同一周进入工程交付。
- **避免课程堆料感**：第七期卖的不是更多课，而是知识之间的工程连接与最终证据。
- **形成品牌连续性**：10 层技术栈海报继续代表完整知识体系，五阶段 Build Path 代表第七期新增的交付方式。

### 推荐 Campaign 名称

**首选：一周两节，一节学，一节做**

备选：

- 《以前两节都学知识，第七期留出一整节做项目》
- 《第一节学 AI，第二节把它做进产品》
- 《不是每周换 Demo，是 13 周接着做同一个项目》
- 《这周学的，这周就做出来》

### 海报 / Carousel 六页脚本

1. **封面**：以前一周两节都在学知识。
2. **改变**：第七期，一节学原理，一节做项目。
3. **不是零散练习**：第二节课始终开发同一个 Agent 项目。
4. **不是每周重来**：这周接着上周的代码继续做。
5. **13 周之后**：项目从基础产品逐步加入 RAG、Tools、Agent、Memory 和 Governance。
6. **最终结果**：完成一套可以演示、测试、解释和参加面试答辩的 Enterprise Agent System。

### 45 秒短视频结构

- **0–5 秒**：以前一周两节课，都在学 AI 知识。
- **5–12 秒**：第七期还是两节，但一节学原理，一节专门做项目。
- **12–20 秒**：而且不是每周换一个 Demo。第一周开始，之后一直在同一个项目上继续开发。
- **20–34 秒**：从产品基础，逐步加入 RAG、Tools、Agent、Memory、Harness 和 Governance。
- **34–41 秒**：13 周后，得到一套可以演示、测试和用于面试答辩的 Agent System。
- **41–45 秒**：一周两节，一节学，一节做。

## 4. 六个新推广角度

### 角度 01：不是转行重来，是工程能力升级

**受众**：Software Engineer、Full-stack Developer、Cloud/Data Engineer、已有编程经验的技术人员。

**要讲的内容**：API、state、permissions、testing、observability 没有失效；AI Engineering 是在这些能力上加入 context、retrieval、model behaviour、tool loop、memory、eval 与 governance。

**内容题目**：

- 《Software Engineer 转 AI Engineer，不需要推倒重来》
- 《传统后端能力，在 Agent 系统里分别对应什么？》
- 《AI Engineer 面试真正新增的 8 类系统问题》

**CTA**：查看 Enterprise AI 能力地图。

### 角度 02：不是 13 个 Demo，是一次连续产品交付

**受众**：上过 AI 课但作品仍停留在 chatbot、notebook 或零散 tutorial 的人。

**要讲的内容**：One System / 13 Weeks / 5 Capability Upgrades。每周都在上一周系统上继续开发，保留状态、权限、版本、审计和失败恢复；frontend、backend、Agent、MCP 与 eval 可以按工程边界拆分，不重新开一个无关 demo。

**五次升级**：

1. W1–W3：标准 AI 产品底座——ADLC、Design System、核心业务流程、权限、状态和 audit。
2. W4–W5：多模态与结构化生成——Voice/Text Input、Editable Transcript、Human Confirmation、Structured Draft。
3. W6–W7：可信知识与工具连接——Policy RAG、citations、MCP tools、permission boundary。
4. W8–W10：可执行 Agent——planning、tool calling、failure recovery、approval、state、long-term memory。
5. W11–W13：Production 标准——Harness、tracing、model routing、governance、evals、regression gate、rollback。

**内容题目**：

- 《为什么我们第一周不让学生直接写 Agent》
- 《13 周持续交付：一套 Agent System 如何逐步 productionize》
- 《从 Product Foundation 到 Production Agent 的五次升级》

**CTA**：查看 13 周 Build Path。

### 角度 03：不是聊天功能，是 Enterprise Agent System

**受众**：认为 Agent 等于聊天框、Prompt 或工作流编排的人。

**要讲的内容**：Enterprise Agent 的价值不在 UI 里“能聊天”，而在受控执行：它能调用工具、暂停等待人工批准、恢复失败任务、管理长期记忆、留下 tracing，并在权限与成本边界内运行。

**Enterprise Agent Checklist**：

- Tools 与 permission boundary
- State、checkpoint 与 failure recovery
- Human approval 与 escalation
- Long-term memory 与 write gate
- Harness、tracing 与 deterministic checks
- Model routing、latency 与 cost threshold
- Governance、eval、rollback 与 incident response

**内容题目**：

- 《一个 Agent 要达到 Enterprise 标准，至少缺哪七层？》
- 《Agent 能执行之后，为什么必须先学会暂停？》
- 《Production Agent Harness 到底管什么？》

**CTA**：下载 Enterprise Agent Checklist。

### 角度 04：不是背面试题，是带着工程证据回答

**受众**：准备 Applied AI Engineer、AI Engineer、Agent Engineer 或 AI Solution Engineer 面试的人。

**要讲的内容**：课程中的每次架构选择都可转成 System Design 回答。最终展示的不只是界面，还包括 eval cases、trace、failure test、permission check、release checklist、rollback 和 incident runbook。

**面试证据链**：

`Requirement → Architecture Decision → Control → Test/Evidence → Failure Handling → Owner`

**高频问题方向**：

- 什么时候使用 RAG，怎么评估 retrieval 与 grounded answer？
- Agent 如何限制工具权限并处理重复执行？
- Memory 写什么、不写什么，如何防止 poisoning？
- Model Routing 如何平衡 quality、latency 与 cost？
- 你如何证明 Agent 可以发布，而不是“感觉效果不错”？

**内容题目**：

- 《面试官问“你的 Agent 为什么敢上线”，怎么回答？》
- 《把课程项目变成一套 System Design Defense》
- 《Demo、Portfolio 与 Production Evidence 的区别》

**CTA**：领取 AI Engineer System Design 自检表。

### 角度 05：高约束案例，是技术覆盖面的压力测试

**受众**：担心案例过于垂直，或想理解课程为什么选择 CareKind 的人。

**要讲的内容**：CareKind 不作为首屏卖点，只在 consideration 与 trust 阶段解释。选择它是因为一个案例同时容纳了 AI 工程最难组合的条件：

- 文字与语音输入，需要多模态 workflow。
- 大量非结构化文件，需要结构化生成与 RAG。
- 使用者不是领域专家，需要 grounded domain knowledge 与 citation。
- 多角色、多步骤协作，需要 tools、agent state 与 human approval。
- 长期交互，需要安全的 memory、correction 与 isolation。
- 强法规与责任边界，需要 governance、audit、PII protection 与 escalation。
- 同时存在 B2B 与 B2C 表面，需要不同 permission、experience 与 reliability 设计。

这些能力可以迁移到金融、保险、法律、政府、客服、企业知识库和内部运营系统。宣传中统一使用：

> **CareKind 是 Enterprise AI 工程压力测试案例，不是课程的行业边界。**

**内容题目**：

- 《为什么普通 Todo Agent 测不出 Production 问题？》
- 《一个高约束案例，如何覆盖 Enterprise AI 的完整技术栈》
- 《从强监管场景学到的 Governance，如何迁移到金融与企业系统》

**CTA**：查看案例如何覆盖 10 层 AI 工程技术栈。

### 角度 06：理论和实践不再挤在同一节课

**受众**：担心课程只讲概念，或 Live coding 变成讲师赶进度的人。

**要讲的内容**：12 场理论 Live 用来建立模型、架构和 trade-off 判断；13 场独立实践 Live 用来交付同一个系统。关键理论如 RAG、Agents、ReAct、Multi-Agent、Memory、Harness、Model Routing、Governance 与 Evaluation 仍由讲师 Live 讲解，实践课不再是理论课结尾的零散 demo。

**内容题目**：

- 《为什么 AI 工程课必须把 Theory 与 Build 分开？》
- 《一周两场 Live，各自解决什么问题？》
- 《学会概念和交付系统，中间差了什么？》

**CTA**：查看双 Live 周课表。

## 5. 内容漏斗

| 阶段 | 用户此时的问题 | 主传播角度 | 核心资产 | 唯一 CTA |
|---|---|---|---|---|
| Awareness | AI Engineer 与 API Developer 有什么区别？ | 工程能力升级、Agent 能跑不等于能上线 | 10 层技术栈海报、30–45 秒冲突型短视频 | 查看能力地图 |
| Consideration | 课程是否真的做完整系统？ | One System / 13 Weeks / 5 Upgrades | 五阶段动画、Build Log、完整周课表 | 查看 13 周 Build Path |
| Trust | 为什么这个项目足够接近企业问题？ | 高约束压力测试、Governance 与 failure case | 架构拆解、Governance Checklist、技术公开课 | 参加公开课 |
| Interview Intent | 学完能否转成求职证据？ | System Design Defense、Production Evidence | 面试自检表、trace/eval/release 示例 | 下载自检表 |
| Conversion | 我是否适合、需要投入什么？ | 双 Live、前置能力、交付物 | FAQ、课程说明会、申请条件 | 咨询或申请 |
| Proof | 最终能展示和解释什么？ | Enterprise Agent Demo + Release Review | Demo Day、eval evidence pack、答辩片段 | 预约下一期 |

## 6. 三条内容系列

### 系列 A：Enterprise Agent Build · 五次升级

用统一视觉连续发布五集，不以每周课程清单开场：

1. Product Foundation：为什么 Agent 之前必须先有标准产品底座。
2. Multimodal Workflow：Voice/Text 如何进入可人工确认的结构化流程。
3. Grounded Knowledge：系统如何检索、引用并承认不知道。
4. Agent + Memory：系统如何执行、暂停、恢复、记住与纠正。
5. Governed Production：如何用 Harness、Evals 和 Release Controls 决定是否上线。

### 系列 B：你的 Agent 为什么敢上线？

每条内容只拆一个 production failure：

- Agent 越权调用工具
- RAG 引用过期或错误材料
- Memory poisoning 与跨用户泄露
- Prompt injection 与 PII 泄露
- Tool timeout、重复执行与幂等
- Model quality drift、cost spike 与 latency breach
- 无法追踪一次错误决策

固定结尾：**Policy → Control → Evidence → Owner**。

### 系列 C：AI Engineer 面试证据库

每条以一道 System Design 类型问题开场，展示“普通答案”和“Production 答案”的差别：

- 普通答案：列工具、模型和框架。
- Production 答案：说明边界、控制、测试、失败恢复和负责人。

适合 LinkedIn Document、微信公众号长文、公开课切片与 60–90 秒技术视频。

## 7. 首轮宣传资产

### P0：统一认知

- Cohort 7 主海报：以“10 层 AI 工程技术栈”为认知入口。
- 官网五阶段动画：每 3 秒移动一个闪烁点，展示产品如何逐级升级。
- 课程总览页：完整保留岗位认知、架构、能力地图、课程、项目、职业结果和 P3；第七期升级作为新增主线，不替换原体系。
- 13 周双 Live 周课表：理论与实践分栏展示。

### P1：建立差异

- LinkedIn Document：《Agent 能跑，不等于 Enterprise-ready》。
- 5 条阶段短视频：《13 周 Enterprise Agent Build》。
- 1 张《Enterprise Agent Production Checklist》。
- 1 张《Governance：Policy → Control → Evidence → Owner》。
- 1 篇长文：《为什么选择高约束案例，而不是再做一个聊天机器人》。

### P2：形成求职转化

- 《Applied AI Engineer System Design 面试自检表》。
- 公开课：《你的 Agent 为什么敢上线？》
- 公开课：《Software Engineer 如何升级为 AI Engineer》。
- Demo Day 精华：产品演示、trace、eval evidence、failure drill 与 release decision 必须同时出现。

## 8. 渠道打法

| 渠道 | 主角度 | 原生形式 | 内容要求 |
|---|---|---|---|
| LinkedIn | Role Upgrade、Architecture、Interview Evidence | Document、技术长文、讲师 POV | 用架构决定与失败案例说话，不发泛招生文案 |
| 小红书 | 五次升级、学习路径、面试自检 | 3:4 图文、9:16 短视频 | 第一张给冲突，后续给清晰路径和可保存 checklist |
| 抖音 / TikTok / Reels | Agent failure、Before/After、Build reveal | 30–45 秒竖版视频 | 前 3 秒出现具体问题，画面展示系统变化而非堆术语 |
| 微信公众号 | Governance、Harness、项目深度 | 技术拆解、课程解读 | 一篇只解决一个问题，结尾链接大纲或公开课 |
| Webinar / 线下 | System Design、Live failure review | 45–60 分钟公开课 | 先拆系统或事故，最后再介绍课程结构 |

## 9. 30 天 Campaign

| 周次 | 核心问题 | 发布内容 | 目标动作 |
|---|---|---|---|
| Week 1 | AI Engineer 到底交付什么？ | 主海报、Role Upgrade 视频、10 层技术栈 Document | 查看能力地图 |
| Week 2 | 这是不是又一门 Demo 课？ | 五阶段动画、Continuous System Build Log、双 Live 解释 | 查看完整大纲 |
| Week 3 | Agent 为什么能进入企业？ | Governance、Memory、Harness failure 系列与公开课 | 报名公开课 |
| Week 4 | 这些能力如何转成求职证据？ | 面试自检表、System Design Defense、Demo Day proof | 咨询或申请 |

建议基准频率：每周 2 条竖版视频、1 份可保存图文或 Document、1 篇技术长文、1 场公开课或 Live Q&A。产能不足时优先保留五阶段主资产、Governance/Interview Checklist 和公开课，不用低质量日更填满渠道。

## 10. 文案用词规则

### 必须使用

- Enterprise AI Engineering
- Production Agent System
- 标准 AI 产品底座
- One System / 13 Weeks / 5 Capability Upgrades
- Theory Live + Practice Live
- Tools / Memory / Harness / Governance / Evals
- System Design Evidence / Production Evidence
- 高约束工程案例 / 可迁移能力

### 禁止作为主标题或品类词

- Care 产品
- 护理业务产品
- Aged Care 产品
- 13 个项目 / 13 个 Demo
- 聊天机器人课程
- 医疗 AI 自动决策

CareKind 只能作为案例名出现。必须同时说明它是用于覆盖复杂 Enterprise AI 问题的工程压力测试，不能让用户误以为课程培养目标是进入 Aged Care 行业。

## 11. 发布红线

- 不发布没有证据的薪资、Offer、就业率、雇主名单或就业保证。
- 不把第五期表现直接写成第七期承诺。
- 不展示未确认价格、优惠、开班日期、席位或报名人数。
- 不声称学生连接真实医疗或 aged-care 生产系统。
- 不描述 AI 自动作出临床判断、自动提交监管事件或绕过人工确认。
- 不用“production-ready”替代证据；必须展示 eval、trace、permission、rollback 或 release review。
- 官网、课程大纲、海报、销售话术和公开课必须使用同一课程事实口径。

## 12. 衡量与复盘

禁止预填目标数字。发布后记录真实值，缺失项标记 `unavailable`：

- Awareness：3 秒/6 秒留存、完整播放率、Document 完读率。
- Consideration：五阶段动画互动、课程页访问、周课表点击、公开课报名与到场。
- Interview Intent：Checklist 下载、System Design 内容收藏、面试相关咨询。
- Conversion：咨询、申请、付费，并追溯到具体资产与渠道。
- Quality：评论中的真实问题、销售反复遇到的异议、公开课提问类型。

每周复盘只做三件事：保留有效 hook、停止低质量泛内容、把真实异议写进下一周选题。

## 13. Owner 分工

| Owner | 任务 |
|---|---|
| 课程负责人 | 确认开班日、价格、席位、讲师、申请条件和最终 Live 口径 |
| Ada | 核对前五期可复用录播：优先检查 Fine-Tuning 等低时效内容的清晰度、完播和反馈；RAG 基础、Agents 基础、ReAct、Multi-Agent 继续按新大纲 Live |
| Design | 输出 3:4、1:1、9:16、16:9；统一“10 层技术栈 + 五次能力升级”视觉语言 |
| Content | 按六个角度建立选题池，每条标记 funnel stage、proof 和唯一 CTA |
| Dev | 保证官网、课程大纲、海报、OG 图和动画使用同一事实口径 |
| Sales | 使用“Enterprise AI Engineering”定位，回写真实咨询来源与异议，不自行增加承诺 |
