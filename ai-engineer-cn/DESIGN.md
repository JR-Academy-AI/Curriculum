# AI 应用开发工程师训练营（国内版）· 课程设计文档

> Source of truth：`public/outline.json`。本文件记录设计决策、与已有课程的关系、新建资源清单。
> 薪资数字的唯一出处：[`SALARY_GROUND_TRUTH.md`](./SALARY_GROUND_TRUTH.md)。目标用户画像：[`PERSONAS.md`](./PERSONAS.md)。

## 一句话定位
对着国内 AI 应用开发岗的真实 JD 学，12 周从零做出**「匠答 AI」电商智能客服工单系统**，毕业带着扛得住面试追问的真项目。

## 目标岗位（诚实定位）
主流可达岗位 = **AI 应用开发工程师**（25–40K/月）。不押 50K 算法岗幻觉（那需硕博算法背景）。

**薪资双轨口径**（2026-08-02 Lightman 拍板，证据见 `SALARY_GROUND_TRUTH.md`）：
- **主线数字**：25–40K/月 —— 用在 hero / 卡片 / 主文案
- **天花板数字**：大厂 AI 应用岗年包 40–90 万 —— 只在独立板块出现，且**必须标注「2026 校招口径」**

> 最贴的对标岗是小红书「AI Agent 应用开发」约 90 万年包——岗位名就是应用开发而非算法岗，与本课定位一致。但它是校招天花板不是中位数，引用时必须说清。

## 目标用户
1. 后端/全栈工程师（2–5 年）转 AI 应用开发 —— 主盘
2. 应届 CS 拼 AI 校招
3. 传统算法/数据岗补 LLM 工程能力
4. 想做能上线 AI 产品的创业者/独立开发

## 四大差异化（对比黑马/尚硅谷/极客时间/贪心）
1. **真项目反模板** —— 做一整套「匠答 AI」，竞品最大软肋是项目千人一面、一追问就废。
2. **押注 2025–26 新高频技能** —— Function Calling + MCP、RAG 评测、vLLM 私有化部署。
3. **全国产栈 + 合规** —— Qwen/DeepSeek/GLM + 阿里云百炼/华为云 + Coze/Dify；私有化部署是国内刚需。
4. **JR 平台体验** —— 浏览器内即时验证 Lab + AI Tutor 一对一带练 + Quest 真实环境实战。

## 课程结构
- **12 周技术 + 职业孵化**；7 个 Phase（P0–P5 技术 + P6 职业孵化）。
- **节奏铁律**：每周 **2 节直播，每节 ≤3 小时（180min）**，共 24 节直播；录播/Lab/Quest 自主节奏环绕。
- 统计：61 节课 · 154 步骤 · 24 直播 · 18 互动 Lab · 6 个 Quest 里程碑（已与 outline.json 实际值核对一致）。

## 主线项目：匠答 AI（全班统一 + 个性化层）

**2026-08-02 决策**：主线项目由原 `Dispatch AI` 换成自建的**「匠答 AI」电商智能客服工单系统**。

**换项目的两个理由**：
1. **原方案地基未验证** —— Dispatch AI 是 `techscrum-devops` 课的项目，本课 6 个 Quest 全部建立在「它有可改造的 AI 服务 + Docker Compose 能一键起」这个从未验证的假设上。假设塌了 6 个 Quest 全废。
2. **中国场景更有体感** —— 电商客服是国内 AI 落地第一大场景，学员天天在用；退换货政策问答、订单物流查询、该不该转人工，这些是国内 JD 上真实出现的需求。

**匠答 AI 是什么**：用户问「我的订单到哪了」「这件能不能七天无理由退」，系统自己查订单、翻退换货政策、判断该不该转人工。

**为什么这个场景能吃下全部技术栈**：

| Phase | 技术 | 在匠答 AI 上的落点 |
|---|---|---|
| P1 | Function Calling | 按订单号查物流 |
| P2 | RAG 工程化 | 退换货政策 / 商品资料 / 历史工单 / 话术 SOP 知识库 |
| P3 | Agent + MCP | 分诊 Agent + 订单查询 Agent + 售后处理 Agent，经 MCP 调真实后端（查订单/查物流/发起退款/转人工） |
| P4 | 微调 + 私有化部署 | 工单意图分诊小模型；vLLM 私有化部署——电商客户数据不出内网是国内硬需求 |
| P5 | 评测 + 安全 | 答对率、政策引用准确性、该转人工时有没有转；防 AI 编造不存在的退款政策 |

**6 个 Quest 里程碑**：W1 本地跑通 → W2 接国产模型+FC → W5 RAG+评测 → W8 Agent+MCP → W10 私有化部署 → W12 个性化毕业作品。

**防同质化**：W1–W11 全班同架构（好教好批），W12 强制每人换一个垂直行业客服场景（美妆/3C/母婴/医美/教育）+ 独创功能，简历各不相同、抗追问。

**⚠️ 待办**：匠答 AI 需要作为教学脚手架真实建出来（前端 + 后端 + AI 服务 + DB + Docker Compose + 种子数据）。这是开课前最大的一块工程量，见下方「待办」。

## 与已有课程的关系
| 已有课程 | 关系 |
|---|---|
| `ai-engineer-bootcamp`（AU/全球版，12 周/286 课） | 技术内核母库；国内版复用 RAG/Agent/微调/Eval 内核与「Pre-work + Lab + Quest + Capstone」教学法，但换国产栈、瘦身一半、补私有化部署 |
| `ai-engineer-rag` | 喂 P2 RAG 模块 |
| `ai-engineer-resume-interview` | 喂 P6 职业孵化 |
| `techscrum-devops` | ~~共享 Dispatch AI~~ **已解耦**（2026-08-02）。两门课不再共享项目，各自独立演进 |
| `ai-programming` / `openclaw` | Prompt / AI 编程基础打底 |
| `china-campus-workshop` / `china-career` | 国内求职 ground truth（简历模板 / STAR 中文公式 / 内推话术 / 学历认证），喂 P6 |

### AU 版哪些不适合国内（已在国内版替换/砍掉）
- AWS（EC2/IAM/S3/Bedrock/SageMaker/Lambda/CloudWatch）→ 阿里云/华为云
- OpenAI/Claude/Google ADK、GPT Store → 国产大模型 + OpenAI 兼容层 + Coze/Dify
- Claude Code / Harness Engineering 整章 → 砍
- LinkedIn & CV Workshop → BOSS 直聘/猎聘/脉脉 + 国内八股
- AU 版缺、国内版补：**vLLM/SGLang 私有化部署 + 合规**

## 三档定价（漏斗，后续用 /course-funnel-architect 细化）
| 档位 | 价格 | 内容 |
|---|---|---|
| 引流课 | ¥99–199 | 在匠答 AI 上跑通一个 RAG/Agent 小功能 |
| 自学版 | ¥2,000–3,000 | 录播 + Lab + AI Tutor |
| 陪跑就业版 | ¥9,800–14,800 | + 直播陪跑 + Quest 里程碑 + P6 职业孵化（outline.json 的 program 即此档：原价 14800 / 促销 9800） |

> ⚠️ 这三档目前是拍脑袋定的，**没有 persona 决策周期支撑**。跑完 `/course-funnel-architect` 后回来校准。

## 排期
- 第一期：**2026-10-12 开课 → 2027-01-04 结课**（12 周），`cohortStatus: RECRUITING`。
- 原排期 2026-07-13 已过期（课程从未同步 production，那是占位日期），2026-08-02 修正。

## 主题色
`#2F6BFF`（confident blue）。选色理由：与 AU 版 `ai-engineer-bootcamp` 的 `#FF5757`（红）明确区分，蓝色传递「工程、可信、技术深度」，契合"诚实对齐 JD、做真项目"的定位。供 xhs-poster / mp-article / posters.html 等统一读取。

## Lab 绑定（全部复用平台已有 Lab，无需新建）
所有 18 个 InteractiveLab 已绑定到官网现有 Lab。**2026-08-02 已逐个在 `jr-academy-web-zh` 验证 slug 真实存在 ✅**：

| 课时 | 绑定 Lab |
|---|---|
| L02 Python 工程化 | python-lab/python-functions |
| L03 FastAPI/API | python-lab/python-api-basics |
| L04 Git | git-lab/git-branch-basics |
| L10 Prompt 四要素 | prompt-lab/clear-task |
| L11 结构化输出 | prompt-lab/json-schema |
| L17 向量化检索 | llm-lab/rag-feature-pipeline |
| L19 分块索引 | llm-lab/rag-from-scratch |
| L21 混合检索 | llm-lab/rag-inference-pipeline |
| L22 查询重写/压缩 | prompt-lab/context-management |
| L26 RAG 评测 | llm-lab/llm-evaluation |
| L30 ReAct Agent | prompt-lab/react-agent |
| L31 Agent 设计模式 | llm-lab/ai-agent-patterns |
| L34 MCP Server | llm-lab/mcp-server-build |
| L38 多智能体 | prompt-lab/multi-agent |
| L43 微调 | llm-lab/fine-tuning-qlora |
| L46 部署/压测 | llm-lab/model-deployment |
| L51 防注入 | prompt-lab/prompt-injection-defense |
| L52 幻觉护栏 | prompt-lab/hallucination-defense |

> 这些绑定是「最接近的现有 Lab」。若后续要做更贴合电商客服场景的专属 Lab，再单独新建。sync 前 Skills Data Manager pre-flight 会再校验一次 slug 存在性。

## 其他新建资源
- **匠答 AI 教学脚手架**（最大工程量，见待办）
- 国产栈适配内容（百炼/Qwen/GLM/华为云、私有化部署 W10）
- 6 个 Quest 里程碑（context/stepSkeleton 已在 outline.json 写好，需配套真实环境验证）
- 国内 JD 对齐表 + 八股精讲（P6）

## 待办

### 开课前必须完成（阻塞项）
- [ ] **建出匠答 AI 教学脚手架** —— 前端 + 后端 + AI 服务 + DB + Docker Compose 一键起 + 电商种子数据（商品/订单/退换货政策/历史工单）。6 个 Quest 全依赖它。
- [ ] 用真实 BOSS 直聘 JD 坐实 25–40K 上沿（见 `SALARY_GROUND_TRUTH.md` 待补段）

### 内容 / 上线
- [x] 制作至少 1 张宣传海报 → 已注册到 `curriculum/posters.html`
- [x] Lab slug 真实性校验（18/18 通过）
- [x] 接入 `.github/workflows/deploy.yml`（早已接入 · 2026-08-02 复核，Assemble 段 + index 卡片都在，描述已同步改成匠答 AI）
- [ ] 转 JSON → skills-data → Skills Data Manager Check Diff → Sync 到 production
- [ ] 跑 `/course-funnel-architect` 校准三档定价
