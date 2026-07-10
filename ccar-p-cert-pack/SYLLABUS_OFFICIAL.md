# 官方考纲事实表 · Claude Certified Architect – Professional（CCAR-P）

> **来源**：Anthropic 官方《Claude Certified Architect – Professional Exam Guide》**Version 1.0 · Effective July 2026**，11 页。原件：`curriculum/_cert-official-guides/CCAR-P_Architect-Professional_v1.0_Jul2026.pdf`（gitignore，版权材料）。
>
> **四门证共用的报名链路、考试政策、合规红线不在本文件里** —— 见 [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md)。本文件只写 CCAR-P 独有的事实。
>
> 本文件是**事实真相源**；`DESIGN.md` 是**话术真相源**。冲突以本文件为准。

---

## 一、Exam Details（官方原表）

| 项 | 官方值 |
|---|---|
| Credential | Claude Certified Architect – Professional |
| **Exam code** | **CCAR-P** |
| Number of items | **63**（四门里最多） |
| Item format | 单选 + 多选混合；每题标明该选几个 |
| Time limit | **120 分钟** |
| Delivery | 监考制：线上监考 和/或 考场 |
| Passing score | 100–1,000 量表分，**720** 及格 |
| **Exam fee** | **$175 USD**（四门里最贵） |
| Validity period | 自授予日起 **12 个月** |
| Result reporting | 通过/不通过 + 量表分；成绩单附各 domain 答对百分比 |

**无场景抽题结构**（那是 CCAR-F 独有的）。

🚨 **无前置要求。** 官方原话："There are no mandatory prerequisites or courses required to sit this exam." —— **不要求先持有 CCAR-F**。对外**禁止**宣传"必须先考 Foundations 才能考 Professional"。

**63 题 / 120 分钟 = 每题约 1.9 分钟**，是四门里节奏最紧的。

---

## 二、Blueprint（官方七域权重）

| Domain | Content Domain | Weight |
|---|---|---|
| 1 | Solution Design & Architecture | 17% |
| 2 | Claude Models, Prompting & Context Engineering | 13% |
| 3 | **Integration** | **19%** ← 权重最高 |
| 4 | Evaluation, Testing & Optimization | 16% |
| 5 | Governance, Safety & Risk Management | 14% |
| 6 | Stakeholder Communication & Lifecycle Management | 14% |
| 7 | Developer Productivity & Operational Enablement | 7% |

### 🚨 与 CCAR-F 的本质差异

**CCAR-P 不是 CCAR-F 的"加难版"，是另一门考试。** 把两者的 blueprint 并排看：

| | CCAR-F（Foundations） | CCAR-P（Professional） |
|---|---|---|
| 主轴 | 怎么**造**（agentic loop、工具设计、Claude Code 配置、prompt、上下文） | 怎么**决策与交付**（架构选型、集成、评估、治理、干系人） |
| 权重最高 | Agentic Architecture & Orchestration 27% | Integration 19% |
| Claude Code | 20%（一整个域） | 7%（Domain 7 的一部分） |
| Prompt | 20%（一整个域） | 13%（与模型选型、上下文工程合并） |
| **RAG** | **不考**。全篇 0 次出现 "RAG" / "retrieval"，且把 "Embedding models or vector database implementation details" 明确列进 **out-of-scope** | **考**（Domain 3 明确列出 chunking、indexing、retrieval 策略） |
| **合规**（GDPR / HIPAA / FedRAMP） | **不考**。三个词全篇 0 次出现 | **考**（Domain 5） |
| **干系人沟通** | **不考**。"stakeholder" 全篇 0 次出现 | **考**（Domain 6，14%） |
| **SLA** | 出现 5 次，但**全部**指 Message Batches API 的延迟 SLA，与干系人期望管理无关 | 指干系人期望与交付 SLA（Domain 6） |
| **A/B 测试** | 不考（0 次出现） | **考**（Domain 4，16%） |
| 可观测性 | 提到 1 次 | Domain 3 + 4 的核心，出现 4 次 |

> 以上"0 次出现"均为对官方考纲提取文本的逐词核对结果（区分大小写、加词边界），不是印象。

**Domain 6（干系人沟通与生命周期管理，14%）几乎是纯软技能**：结构化需求发现、讲清架构取舍、管理反馈与期望（含 SLA）、写架构文档、支撑 discovery → design → handoff → monitoring → iteration 全周期。这在技术认证里很罕见，也是最容易被中国考生轻视的一块。

---

## 三、七个 Domain 的考核目标（据官方 objectives 归纳，非原文转载）

**Domain 1 · Solution Design & Architecture (17%)**
把业务问题翻译成基于 Claude 的 AI 方案；设计端到端架构（输入 → 处理 → 输出 → 反馈闭环）；选择合适的架构模式（workflow / agentic / augmented LLM）；设计多 agent 系统与编排策略；用分解技术应对复杂问题；把方案对齐业务价值支柱（效率、转型、生产力、成本、性能 SLA）。

**Domain 2 · Claude Models, Prompting & Context Engineering (13%)**
按取舍选择 Claude 模型；设计 system prompt、模板与护栏；应用 prompt 工程技术（zero-shot、few-shot、chain-of-thought）；优化上下文窗口与 token 用量；实现 prompt 复用策略（caching、模块化 prompt、Skills）。

**Domain 3 · Integration (19%)** ← 权重最高
评估工具/agent 配置是否存在能力膨胀（capability bloat）；分析认证与授权需求以识别安全缺口；评估准确率与延迟的取舍并为配置决策辩护；分析规模化下的可观测性挑战并选择监控策略；**设计 RAG 流水线**（合适的 chunking 与 indexing 策略）；按数据形态与查询模式匹配检索策略；评估连接协议并选择合适的集成机制（**MCP / API-CLI / agent-to-agent**）；评估渐进式发现 vs 单体式上下文策略。

**Domain 4 · Evaluation, Testing & Optimization (16%)**
定义评估指标（准确率、延迟、成本、安全、安全性）；用混合方法设计评估数据集与测试框架；做 A/B 测试与迭代改进；诊断系统问题（prompt 失败、幻觉、模型不匹配）；优化 token 用量、延迟与性价比；用日志与可观测性工具监控系统表现。

**Domain 5 · Governance, Safety & Risk Management (14%)**
实现护栏与安全控制；识别 LLM 系统的风险、局限与失败模式；应用 human-in-the-loop 校验策略；确保合规（如 **GDPR、HIPAA、FedRAMP**）；处理 AI 伦理议题（偏见、公平性、透明度）。

**Domain 6 · Stakeholder Communication & Lifecycle Management (14%)**
做结构化的需求发现与收集；沟通架构决策与取舍；管理干系人反馈闭环与期望对齐（含 SLA）；撰写架构文档并提供实施指导；支撑生命周期各阶段（discovery、design、handoff、monitoring、iteration）。

**Domain 7 · Developer Productivity & Operational Enablement (7%)**
为团队配置 Claude 工具与环境（如 Claude Code）；用 AI 辅助工具改进开发者工作流；支持调试与运维问题解决。

---

## 四、目标受众与最低合格考生（MQC）

**受众**：中高级技术专家——解决方案架构师、AI/ML 工程师、技术负责人、资深软件工程师。他们工作在业务需求与技术实现的交界处，把业务问题翻译成可扩展的 AI 方案（模型选型、prompt 工程、工具与 agent 编排、上下文管理、系统安全合规治理）。**常常需要对接干系人、给客户或内部团队做顾问、主导架构决策**，包括与安全、法务、高管的讨论。

**MQC 画像**：兼具工程思维与真实生产环境的 AI 落地经验；在生产环境里设计、实现并治理 Claude 驱动的 AI 方案；能设计端到端 AI 系统，含 prompt 与上下文工程、RAG、API 集成、编排与评估。

**建议经验**：
- 软件工程最佳实践的基础（模块化设计、关注点分离、可扩展性）
- **3+ 年**系统架构或平台工程经验
- 至少 6 个月在生产环境使用 Claude 或同类 LLM 系统
- 交付过端到端系统，从 discovery 到部署与运营化

---

## 五、官方备考建议（§7）

"**没有任何一门必修课。Anthropic 不保证任何特定资源能确保你通过。**"

1. 逐条研读 blueprint，对着每个目标自评
2. 读官方文档：Claude API、模型、prompt engineering、MCP、Skills
3. **搭并运营至少一个端到端 Claude 方案，含 RAG、评估与可观测性**
4. 练架构决策：模型选型、集成协议、安全取舍
5. 做完第 8 节的样题，熟悉题型风格

---

## 六、官方样题（§8）

若干道 illustrative items，明确标注 "**not drawn from the live item bank**"，附答案与解析。每道题标注了所属 domain。

🚨 **红线**：Anthropic 版权内容。禁止原文或翻译放进我们的模拟考，禁止照抄题干情境、选项措辞、干扰项设计。只可当难度校准样本。

**命题风格观察**（可安全用于教学）：考**架构取舍**。典型题——一个客服 agent 能读工单、起草回复、发起退款、删除用户账号，但客服人员只需要读工单和起草回复；按最小权限原则该怎么改？正确答案是**把退款和删除工具从 agent 配置里彻底移除**，而不是"加日志事后审计""加确认弹窗""换个更听话的大模型"。这个"最小权限 > 事后补救"的判据与 CCAR-F 的命题哲学一脉相承。另有 prompt caching 相关题（每次请求都发同样的 8000 token 系统提示与政策文档该怎么优化）。

---

## 七、对我们产品的直接影响

1. **绝对不能把 CCAR-P 做成"CCAR-F 进阶班"。** 两者主轴不同：F 考"怎么造"，P 考"怎么决策与交付"。P 里 Claude Code 从 20% 掉到 7%，而 RAG、合规（GDPR/HIPAA/FedRAMP）、干系人沟通、A/B 测试与可观测性这些 F **完全不考**的东西，在 P 里合计超过 40%。
2. **不要求先考 F。** 宣传里禁止暗示阶梯是强制的。真实的分流依据是**经验与岗位**：3+ 年架构经验、做端到端交付、要跟安全法务高管过会的人 → P。
3. **Domain 6（14%）是纯软技能**——结构化需求发现、讲清取舍、管理 SLA 期望、写架构文档。这是华人技术考生最容易轻视、也最缺练习材料的一块，是我们最容易做出差异化的地方（英文材料里也少有针对性训练）。
4. **单价最高（$175）、受众最窄。** 从商业上看它是四门里最后做的一门，但客单价与转介绍价值最高（这批人往往是团队技术决策者，能带来 B 端合作）。
5. **63 题 / 120 分钟，节奏最紧**——每题不到 2 分钟。应试策略课（时间预算、排除法）在这门里价值最大。
