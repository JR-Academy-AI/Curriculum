# 官方考纲事实表 · Claude Certified Associate – Foundations（CCAO-F）

> **来源**：Anthropic 官方《Claude Certified Associate – Foundations Exam Guide》**Version 1.0 · Effective July 2026**，11 页。原件：`curriculum/_cert-official-guides/CCAO-F_Associate-Foundations_v1.0_Jul2026.pdf`（gitignore，版权材料）。
>
> **四门证共用的报名链路、考试政策、合规红线不在本文件里** —— 见 [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md)。本文件只写 CCAO-F 独有的事实。
>
> 本文件是**事实真相源**；`DESIGN.md` 是**话术真相源**。冲突以本文件为准。

---

## 一、Exam Details（官方原表）

| 项 | 官方值 |
|---|---|
| Credential | Claude Certified Associate – Foundations |
| **Exam code** | **CCAO-F** |
| Number of items | **60** |
| Item format | 单选 + 多选混合；每题标明该选几个 |
| Time limit | **120 分钟** |
| Delivery | 监考制：线上监考 和/或 考场 |
| Passing score | 100–1,000 量表分，**720** 及格 |
| **Exam fee** | **$99 USD**（四门里最低） |
| Validity period | 自授予日起 **12 个月** |
| Result reporting | 通过/不通过 + 量表分；成绩单附各 domain 答对百分比 |

**无场景抽题结构**（那是 CCAR-F 独有的）。**无前置要求**，考纲明确写着"没有强制前置或必修课，**也不需要任何软件开发或 API 经验**"。

---

## 二、Blueprint（官方七域权重）

| Domain | Content Domain | Weight |
|---|---|---|
| 1 | Prompting and Task Execution | 14% |
| 2 | **Output Evaluation and Validation** | **21%** ← 权重最高 |
| 3 | Product and Model Selection | 12% |
| 4 | Workflow Integration and Solution Design | 16% |
| 5 | Configuration and Knowledge Management | 12% |
| 6 | Governance, Risk, and Responsible Use | 15% |
| 7 | Troubleshooting and Optimization | 10% |

**这个 blueprint 的重心很反直觉**：最重的不是"怎么写 prompt"（14%），而是"**怎么判断 Claude 的输出靠不靠谱**"（21%）。加上治理与责任使用（15%），"判断力 + 合规"占了 36%，远超"会用"。这是我们做内容时最该抓的差异点——市面上的 AI 通识课几乎全在教前者。

---

## 三、七个 Domain 的考核目标（据官方 objectives 归纳，非原文转载）

**Domain 1 · Prompting and Task Execution (14%)**
为业务与技术任务写有效 prompt；用任务分解组织复杂请求；迭代 prompt 改进输出质量；按任务类型（分析 / 研究 / 起草 / 头脑风暴）调整策略。

**Domain 2 · Output Evaluation and Validation (21%)**
评估输出的准确性与完整性；识别幻觉、不一致与偏见；做事实核查与验证；判断何时需要人工复审或额外核验；为目标读者编辑、改写、精炼与对比输出；组织与策展信息，选择合适的输出形态（artifacts / 内联 / 结构化数据）。

**Domain 3 · Product and Model Selection (12%)**
选择合适的 Claude 产品功能（Projects、research 模式、chat、artifacts）；区分 Haiku / Sonnet / Opus；按任务需求（成本、速度、质量）匹配模型；理解并管理上下文限制与记忆（何时重开、何时摘要、何时持久化）。

**Domain 4 · Workflow Integration and Solution Design (16%)**
用 Claude 分析需求与用例；用于研究、规划与流程优化；支持方案设计、开发与迭代；把 Claude 融入既有工作流去增强或重构它；向干系人讲清 Claude 的价值与局限。

**Domain 5 · Configuration and Knowledge Management (12%)**
用指令与知识源配置 Claude Projects；管理上传的知识与连接器（如 Google Drive、Gmail）；写有效的系统级指令；维护与更新配置、知识源与指令。

**Domain 6 · Governance, Risk, and Responsible Use (15%)**
识别合适与不合适的用例；处理数据敏感性、监管与隐私；遵循组织的 AI 政策与治理标准；理解 AI 使用的伦理影响。

**Domain 7 · Troubleshooting and Optimization (10%)**
识别、诊断并解决 prompt 表现不佳或输出质量差的问题；根据反馈与结果调整方法；优化工作流的效率与效果。

---

## 四、目标受众与最低合格考生（MQC）

**受众**：把 Claude 当核心生产力工具、并在日常工作里搭 Claude Projects 的专业人士。横跨运营、市场、项目管理、教育、传播、通用知识工作。既包括维护与优化 AI 工作流的内部员工，也包括做落地实施、用例识别、流程重设计的外部顾问。**技术水平从有限到中等**——他们处在"随手用 AI 提问的人"与"技术型 AI 从业者"之间。

**MQC 画像**：能把业务目标翻译成有效的 AI 交互；已越过基础一问一答，进入流程重构、任务自动化与项目搭建；熟悉 Projects、Artifacts、工作流式交互等功能；对 AI 的局限（幻觉、上下文约束、数据敏感性）有实际认知。

**建议经验**：在职业场景里常态化使用 Claude；对结构化问题解决、工作流设计、数字工具有基础理解；角色如业务分析、项目经理、运营负责人、市场 / 传播 / HR / 教育从业者、顾问、知识工作者。

---

## 五、官方备考建议（§7）

官方开宗明义："**没有任何一门必修课。Anthropic 不保证任何特定资源能确保你通过。**"（这句话是我们"不承诺保过"红线的官方背书。）

建议做法：
1. 逐条研读第 6 节的 blueprint，对着每个目标自评
2. 读官方文档与帮助文章，覆盖 Projects、Artifacts、Memory、Skills、Code Execution
3. 练习组织 prompt、拆解任务、迭代改进输出
4. 搭真实工作流：配一个带指令与知识源的 Project，并评估输出的准确性与偏见
5. 练责任使用的判断力：数据敏感性、合规与治理

---

## 六、官方样题（§8）

若干道 illustrative items，明确标注 "**not drawn from the live item bank**"（不取自实际题库），附正确答案与解析。

🚨 **红线**：这些题是 Anthropic 版权内容。禁止原文或翻译放进我们的模拟考，禁止照抄题干情境、选项措辞、干扰项设计。只可当难度与命题风格的校准样本。

**从样题看出的命题风格**（可安全用于教学）：考的是**职业判断**，不是功能记忆。典型问法——Claude 给出一份自信的、引用了具体条款号的法规摘要，在发给合规团队之前该怎么做？正确答案是"先拿官方法规原文核对被引用的条款"，而不是"Claude 说它很有信心所以直接发"或"让 Claude 自评置信度"。**LLM 自评置信度不可靠**这个考点，与 CCAR-F 完全一致。

---

## 七、对我们产品的直接影响

1. **这是四门里 TAM 最大、也最贴匠人中文站定位的一门。** 官方明说不需要开发或 API 经验，受众是运营、市场、PM、教育、HR、顾问——正是"全球华人学习 AI 第一站"要打的人群。考试费也最低（$99）。
2. **内容重心必须放在"评估与治理"，不是"prompt 技巧"。** Domain 2（输出评估与验证）21% + Domain 6（治理与责任使用）15% = 36%，而 Domain 1（Prompting）只有 14%。市面上的中文 AI 通识课几乎全在教 prompt 技巧，这里有真实的差异化空间。
3. **必须覆盖 Claude 产品功能面**（Projects、Artifacts、research 模式、Memory、Skills、Code Execution、连接器如 Google Drive / Gmail）。这些是 Domain 3 + Domain 5 共 24% 的考点，且是纯产品知识——非技术学员完全学得会，也最容易做成图文与录屏。
4. **不要套用 CCAR-F 的结构**：无场景抽题、无 6 抽 4、题量 60 但域是 7 个。
5. 与 CCAR-F 的分流话术：**"你不写代码 → CCAO-F；你写代码 → CCDV-F；你做架构决策 → CCAR-F。"** 四门互不设前置，不能宣传"必须先考 Associate"。
