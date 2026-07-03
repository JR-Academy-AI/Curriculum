# AI Engineer 入门 — 目标用户画像（PERSONAS）

> 本文档由 `/target-user-persona-mapper init` 生成，是这门课所有 marketing / 漏斗 / 内容物料的唯一真相源（Single Source of Truth）。下游会直接读这份文档，不要各写各的：
> - `course-funnel-architect` → 定价节奏参照 §2 决策周期
> - `course-promotion-architect` → 渠道清单参照 §3 跨 persona 平台汇总
> - `course-custom-landing` → 销售页 hero / FAQ / 异议处理用 §2 的用户原话（目前大部分原话缺失，见下方 GT 覆盖率说明）
> - `xhs-draft` / `blog-longform-writer` → 按 persona 选切角语气
>
> **GT（Ground Truth，即"有真实数据支撑、不是 AI 拍脑袋"）覆盖率：约 25%-30%，未达 80% 合格线，也没过 50% 及格线。** 这份文档**能撑起"决策周期/购买触发器"这类跟平台运营数据挂钩的判断，但撑不起"用户原话/信任谁/不信什么"这类需要一手用户语言的判断** —— 后面这几项目前全是标了 ⚠️ AI 推测的空位，用之前必须先看 §7 待补清单。
>
> **下次 refresh：2026-08-03**（建议 1 个月后，等 Summer/Lily/KIKI 手动截图 + 3 名真实学员回访补上用户原话再重新评估，不用等半年——因为这轮覆盖率太低，不适合套用"半年 refresh"的默认节奏）。

---

## 0. Meta

| Field | Value | 来源 |
|-------|-------|------|
| Course Slug | `ai-engineer-rag` | — |
| Course 中文名 | AI Engineer 入门（`ai-engineer-bootcamp` 12 周旗舰营的 4 周入门版，self-paced，不分期开班） | outline.json |
| 语言 / 站点 | 仅中文站（未见英文版素材，本轮不建 `PERSONAS.en.md`） | — |
| **生产环境 Training ID** | `695f55f8d6221b0fef013efb` | **生产环境 API** `GET /admin-cms/trainings?search=AI Engineer` 核实，slug/name 与本地 outline.json 完全一致 |
| **真实定价** | 原价 **$399 AUD**，优惠价 **$299 AUD**（⚠️ 不是 training 文档里的 `tuition: 599`，那是历史遗留字段没人在用）| **生产环境 API** `GET /admin-cms/programs/by-training/{trainingId}`（program 记录 `6959ff4c084cf0f0766c9936`）+ WebFetch 销售页 `jiangren.com.au/program-course/ai-engineer-rag` 交叉核实一致 |
| **当前招生状态** | 正常招生中，未下架未隐藏，销售页有"加入购物车"+"免费试学 3 节"入口 | **生产环境 API**（`shouldShowInCourseArrangement: true` / `hideSchedule: false` / `isDeleted: false`）+ WebFetch 销售页确认 |
| **真实 cohort 数量** | 从 2026-01-04 建课到查询时刻（2026-07-03）只有 1 条 program 记录，从未开过第 2 期。这不是数据缺口——这门课是 `type: video` 自主节奏课，不按期开班，"只有一个滚动招生的 program" 本身就是这个产品形态该有的样子 | **生产环境 API** `GET /admin-cms/programs/next-phase/{trainingId}` 返回 `nextPhase: 2`（意思是如果要开新一期编号会是 2，反证目前没有 phase 2）|
| **真实学员数** | 3 人 | **生产环境 API** program 记录 `studentCount` 字段，查询时刻真实值 |
| 课程结构真实性 | 本地 outline.json 的 79 lesson（37 视频 + 25 Lab + 5 Quest + 其余 Info/自学）与生产环境 syllabus 文档（`695a00f6084cf0f0766cbc55`）核对一致，**这条维度没有脱节** | **生产环境 API** `GET /admin-cms/syllabuses/{id}` |
| Persona 数量 | 3（核心买家 A / 漏斗定位买家 B / 边缘买家 C）+ 1 个"不会买的人"清单（§4） | — |
| 上次更新 | 2026-07-03 | — |
| 更新人 | Claude（AI 初稿，未经销售/运营人工核对） | — |
| **Ground truth 覆盖率** | **约 25%-30%**（主观估算，非量化跑分——见 §7）| — |
| 下次 refresh 日期 | 2026-08-03 | — |
| 关联文档 | 本课暂无 `FUNNEL_PLAN.md` / `PROMOTION_PLAN.md`，待后续 skill 调用时创建并回链本文档 | — |

---

## 1. Persona 速查表

| Persona | 一句话画像 | 占比预估（⚠️ 推测）| 客单价匹配档 | 决策周期 | 主战场平台 Top 3（⚠️ 弱信号）|
|---------|----------|---------|------------|---------|----------------|
| **A. 转型型技术人** | 工作 2-6 年的软件/云/数据工程师，想把"会用 ChatGPT"升级成"能讲清楚 RAG 怎么搭" | ~55% | $299 单档（无分期） | 2-4 周 | 脉脉 / V2EX / LinkedIn |
| **B. Bootcamp 试水者** | 心里已经在看 12 周旗舰 `ai-engineer-bootcamp`，但想先花 $299 验证自己学不学得进去、老师讲得好不好 | ~25% | $299（引流性质，非独立产品） | 1-2 周 | 官网课程对比页 / 客服咨询 / 朋友圈 |
| **C. 求职防御型云/DevOps 工程师** | 澳洲本地在职 Cloud/DevOps，看到招聘要求开始出现 RAG/Azure ML，怕被新岗位要求甩下 | ~20% | $299 | 3-6 周（观望期长）| LinkedIn / Seek / 公司内部 Slack |

**占比说明**：这是基于"课程定位与真实学员画像的推测"，不是真实报名数据统计出来的——现在只有 3 名真实学员，样本太小做不了可靠的占比统计。等学员数上到两位数以上，这个表要用真实报名信息重新核一遍。

---

## 2. Persona 详情

### Persona A · 想把"会用 AI"升级成"能构建 AI 系统"的转型型技术人

**画像**（[来源: outline.json `targetAudience` 字段，课程方自己定义的核心受众描述] + ⚠️ 年龄/收入区间为 AI 推测）

- 年龄：⚠️ 推测 26-35 岁（技术岗常见工作 2-6 年阶段）
- 性别：⚠️ 推测以男性为主（技术岗结构性偏男，未经数据验证）
- 城市：⚠️ 推测国内一二线城市 + 澳洲悉尼/墨尔本双线（课程面向"全球华人"，见课程 `description`）
- 职业：软件工程师 / 后端工程师 / 全栈工程师 / 数据分析师 / 数据工程师，[来源: outline.json targetAudience 明确列出这几类]
- 月收入：⚠️ 待补，没有任何薪资相关数据源
- 关键标签：**已有 Python 基础，但只停留在"会调用 API"，没有系统理解过 LLM / Embeddings / 向量数据库 / RAG 架构**（[来源: outline.json `targetAudience` "有 Python 基础、希望转型 AI Engineer 的学习者"一条 + `courseObjective` 明确写"能独立构建基础的 RAG 原型应用（非生产级）"，说明课程方自己认定这批人此前做不到这件事]）

---

**痛点 Top 3**（⚠️ 全部待补用户原话——本轮没有客服记录/用户访谈/评论区数据，以下是基于市场公开信息 + 课程定位的合理推断，不是真实用户说的话）

**痛点 1**：⚠️ AI 推测
> "简历上写了会用 ChatGPT/Copilot，但面试官一问 RAG 怎么设计、向量数据库怎么选，答不上来"

[来源: ⚠️ AI 推测，依据是课程 `courseObjective` 明确对标"企业级 RAG 系统架构"这个能力缺口，没有真实候选人原话支撑]

当前 cope：⚠️ 待补（不知道这批人现在怎么应付这个缺口——是自己啃论文、看 YouTube，还是完全没意识到缺口存在，需要访谈才知道）

---

**痛点 2**：⚠️ AI 推测
> "网上 RAG 教程一堆，但要么太浅（调个 LangChain demo）要么太深（直接讲论文/微调），找不到中间那一档"

[来源: ⚠️ AI 推测，依据是公开市场信息里知乎"从写代码到管 Agent"专栏、dataapplab.com "六个月转行大语言模型开发工程师"这类文章反复出现"入门到中级"这个断层描述，但这是行业通用观察，不是本课学员的原话]

当前 cope：⚠️ 待补

---

**痛点 3**：⚠️ AI 推测
> "公司/行业都在说要转 AI，但转型路径到底要学多久、学到什么程度算够，没有一个清楚的说法"

[来源: ⚠️ AI 推测，依据 dataapplab.com 文章里"6 个月转型"这个市场预期数字（公开网络搜索，非本课专属数据），这门课的"4 周入门 + 后续 12 周 Bootcamp"两段式设计（4+12=16 周 ≈ 4 个月）比这个市场预期更快，可以拿这条当卖点，但"痛点"本身仍是推测，不是学员原话]

当前 cope：⚠️ 待补

---

**决策周期**（[来源: 部分基于生产环境真实数据推断，非直接访谈结果]）

`2-4 周`，推测触发链：

```
第 1 天：在招聘网站/公司内部看到 JD 出现 RAG / Agentic patterns 要求（真实案例：Westpac 悉尼 "AI Engineer – Data Platforms" 明确要求 RAG + Agentic patterns + Azure ML，
  见 curriculum/ai-engineer-rag/public/jobs/2026-05-09.json，[来源: 该 JSON 文件由岗位抓取 routine 生成，非本轮现抓，日期 2026-05-09 已快 2 个月未更新]）
第 3-10 天：搜索"RAG 入门""AI Engineer 转型"相关内容，对比多个课程/教程
第 10-14 天：看到 $299（销售页原价 $399/优惠价 $299，[来源: 生产环境 API + 销售页交叉核实]）这个价位比 12 周旗舰营($399/$299 起，本课仅需入门门槛)门槛低很多，作为"先试水"决定下单
第 14-28 天：完课或试学 3 节后，可能继续购买 ai-engineer-bootcamp 旗舰营（这也是本课的漏斗定位，见 Persona B）
```

⚠️ 这条触发链是"给定真实定价 + 真实岗位案例 + 课程漏斗定位"推出来的合理链条，不是问卷或访谈统计出来的天数，需要访谈验证。

---

**日常活跃平台 Top 5 + 时段**（⚠️ 除 V2EX 一条为方向性弱信号外，其余全部待补）

| Rank | 平台 | 周活时长（h）| 主要时段 | 用途 |
|------|------|------------|---------|------|
| 1 | 脉脉 | ⚠️ 待补 | ⚠️ 待补 | ⚠️ 推测：看跳槽内幕/薪资对比 |
| 2 | LinkedIn | ⚠️ 待补 | ⚠️ 待补 | ⚠️ 推测：看岗位 JD、行业动态 |
| 3 | V2EX | ⚠️ 待补 | ⚠️ 待补 | 见下方"反直觉提醒"——本轮浏览判断这批人**可能不匹配** |
| 4 | 小红书 | ⚠️ 待补 | ⚠️ 待补 | ⚠️ 推测 |
| 5 | Boss 直聘 / Seek | ⚠️ 待补 | ⚠️ 待补 | ⚠️ 推测：看岗位要求反推自己缺什么 |

**V2EX 弱信号说明**（[来源: V2EX 公开 `topics/show.json` 按节点浏览，非关键词搜索——V2EX 免费 API 不支持全文搜索，只能翻节点最近帖子]）：浏览了 openai（4150 帖）/ agent（173 帖）/ aigc（121 帖）/ localllm（308 帖）四个相关节点各 10-15 条最近热帖标题，几乎全是"怎么用 Codex/Claude Code""本地部署 GLM-5.2/Qwen3.6""多卡异构推理"这类**已经很懂 AI 工程、在折腾本地部署和 agent 框架的重度用户**在讨论，没看到"想转型 AI Engineer 该怎么学"这类新手向求助帖。这只是浏览约 40 条最近热帖，样本很小、不是关键词搜索，**不能当定论**，但方向上提示：V2EX 这几个节点现在活跃的可能是"已经是 AI 从业者"而非"转型初期需要入门"的人群，跟 Persona A 不一定是同一批人。建议员工登录网页版做"RAG 转型""AI Engineer 求职"这类关键词搜索验证或反驳这个判断。

---

**信任谁**（⚠️ 全部待补，本轮无任何数据源）

⚠️ 待补 ground truth。公开搜索（WebSearch "匠人学院 评价 靠谱吗"）没有找到任何第三方真实用户评价——搜出来的全是匠人学院官方渠道（官网/知乎账号主页/B站主页/LinkedIn 学校页），不是用户自发评论。这条路径走不通，"信任谁"这个字段目前**只能靠员工去小红书/Boss/微信群手动截图**才能补上。

---

**不信什么（黑名单）**（⚠️ 全部待补）

⚠️ 待补 ground truth。同上，没有小红书/Boss/微信群一手数据，无法列出这批人具体对什么内容会划走。

---

**购买触发器**（部分有真实数据支撑）

1. **看到本课比 12 周旗舰营($399/$299 起)门槛低很多的 $299 价位，先"试试水"**——[来源: 生产环境 API 真实定价，$299 vs 旗舰营更高客单价，属于合理漏斗推断，但"这是不是真实触发点"未经访谈证实]
2. **免费试学 3 节**——[来源: WebFetch 销售页确认真实存在这个入口]，降低决策门槛是真实存在的产品机制，但"有没有人真的因为这个下单"未经数据验证
3. ⚠️ 待补：看到具体真实岗位要求 RAG/Agentic 技能时的临场触发（有真实岗位案例可用，见决策周期部分 Westpac 案例，但"看到 JD 触发下单"这条因果链未经访谈证实）

---

**异议 Top 3**（⚠️ 全部待补，本轮无销售口播/客服流失记录）

⚠️ 待补 ground truth。没有销售口播、没有客服记录，无法列出真实异议。**唯一能确定的相关背景**：这门课目前只有 3 名学员、销售页上没有任何学员案例或推荐（[来源: WebFetch 销售页确认"无具体学员案例或推荐"]），如果潜在买家问"有没有人学过这个课、学得怎么样"，现在**答不上来**——这本身可能就是一条隐藏的异议来源，但需要人工验证。

---

**触达 ROI 排序（个人维度）**（⚠️ 全部待补）

⚠️ 待补 ground truth。没有历史成交渠道数据（只有 3 名学员，样本太小无法做渠道归因），无法排序。

---

**Ground truth 来源**

```yaml
sources:
  - type: production_api
    date: 2026-07-03
    content: trainingId / 真实定价 $399-$299 / cohort 状态 / 学员数 3 / syllabus 79 lesson 核对
    location: api.jiangren.com.au/admin-cms (trainings, programs/by-training, programs/next-phase, syllabuses)
    weight: 0.15
  - type: outline_json
    content: targetAudience / courseObjective / suitable 字段（课程方定义的受众与目标）
    location: curriculum/ai-engineer-rag/public/outline.json
    weight: 0.10
  - type: public_web_fetch
    date: 2026-07-03
    content: 销售页真实价格/招生状态/无学员案例
    location: https://jiangren.com.au/program-course/ai-engineer-rag
    weight: 0.05
  - type: local_jobs_cache
    date: 2026-05-09（已快 2 个月未更新，需要重跑）
    content: Westpac/Atlassian/Canva 真实岗位案例
    location: curriculum/ai-engineer-rag/public/jobs/2026-05-09.json
    weight: 0.05
  - type: public_web_search
    date: 2026-07-03
    content: "6 个月转型"市场预期（dataapplab.com 等），非本课专属数据
    location: WebSearch 结果，未存档具体 URL 列表
    weight: 0.03
  - type: v2ex_browse
    date: 2026-07-03
    content: 4 个节点约 40 条热帖标题，方向性弱信号（V2EX 人群可能不匹配）
    location: V2EX topics/show.json（浏览非关键词搜索）
    weight: 0.02
  - type: ai_inference
    weight: 0.60
    note: 痛点原话 / 信任谁 / 不信什么 / 异议 / 平台时段（除 V2EX 外）/ 年龄性别收入区间 —— 全部无一手用户数据支撑，纯 AI 推测
```

**这个 persona 的 ai_inference 权重 0.60，远超"合格"要求的 ≤ 30%，明确不合格，仅作初稿占位，不能直接喂给下游做营销文案。**

---

**一段虚构日记**（⚠️ 虚构示意，不是 ground truth，仅用于让 persona 立体，禁止在物料里当真实引用）

> 晚上十点半，代码 review 完了，顺手刷到一条招聘帖，AI Engineer，要求写着"RAG 架构设计经验""Agentic patterns"。我心想，这几个词我在公司群里听同事提过，自己捣鼓过 LangChain 的 quickstart，但真要我讲清楚向量数据库怎么选、chunk 怎么切，讲不出来。搜了一圈教程，要么就是"5 分钟接个 API"的水贴，要么直接甩一堆论文链接看得头皮发麻。看到匠人学院这门课写着"37 节视频 + 25 个 Lab"，$299，比旗舰班便宜太多，想着先试试水，学不动再说。

---

### Persona B · 想报 12 周旗舰营、但先用 $299 验证自己学不学得进去的 Bootcamp 试水者

**画像**（⚠️ 全部为 AI 推测，基于课程漏斗定位反推，无直接数据源）

- 年龄：⚠️ 推测与 Persona A 接近，26-35 岁
- 性别：⚠️ 待补
- 城市：⚠️ 待补
- 职业：⚠️ 推测与 Persona A 重叠（技术背景），区别在于**决策路径不同**——这批人一开始就是奔着更贵的 `ai-engineer-bootcamp` 12 周旗舰营去的，本课只是他们决策链里的第一步
- 月收入：⚠️ 待补
- 关键标签：**决策心态是"先花小钱验证，再决定要不要花大钱"**，这是一个**漏斗产品定位假设**，不是访谈得出的画像——[来源: ⚠️ AI 推测，依据是课程本身的产品定位（本课 description 明确写"AI Engineer 进阶学习的官方前置入门课"，[来源: outline.json cardDescription]），但"真实学员是不是真的这样想"完全没有验证——3 名真实学员里有没有人后续真的报了旗舰营，这是最该去查但本轮没查的一件事]

---

**痛点 Top 3**：⚠️ 全部待补，同 Persona A 说明，此 persona 额外的痛点是"不确定花大钱报 12 周值不值，想先验证"，但这也是推测，没有真实咨询记录支撑。

**决策周期**（⚠️ 部分推理）

`1-2 周`，推测触发链：

```
第 1 天：在官网/朋友推荐看到 ai-engineer-bootcamp 旗舰营，被价格吓一下（旗舰营客单价高于本课）
第 3-5 天：发现有 $299 的入门版可以先试
第 7-14 天：报入门版，边学边评估要不要继续报旗舰营
```

⚠️ 这条链条完全基于两门课的价格结构关系推出来，**没有任何真实学员的续报数据支撑**——3 名学员里有几人后续报了旗舰营，这个数字本轮完全没查，是最大的验证缺口。

**其余 8 个字段**（日常活跃平台 / 信任谁 / 不信什么 / 购买触发器 / 异议 Top3 / 触达 ROI）：⚠️ 全部待补，本轮没有专门针对这批"漏斗中段用户"的数据源，需要销售/客服后续统计"入门版学员的续报去向"。

**Ground truth 来源**：本 persona 几乎全部字段为 `ai_inference`，weight ≈ 0.90，**明确不合格，仅作产品逻辑占位，不能用于任何营销文案**。

---

**一段虚构日记**（⚠️ 虚构示意）

> 看中了那个 12 周的 AI Engineer Bootcamp，但价格摆在那，还得跟公司请假上直播课，不敢一下子冲动下单。刷到同一家出的一个 4 周自学版，$299，说是官方前置入门课，正好拿来试试水——如果这门课讲得好、我学得进去，再考虑报大班；万一发现自己根本没空学，至少没亏太多。

---

### Persona C · 怕被 JD 甩下的澳洲在职 Cloud/DevOps 工程师

**画像**（[来源: 部分基于真实岗位数据 + outline.json targetAudience，其余 AI 推测]）

- 年龄：⚠️ 推测 28-40 岁
- 性别：⚠️ 待补
- 城市：悉尼 / 墨尔本（⚠️ 推测，依据本课"全球华人"定位 + 真实岗位案例集中在悉尼）
- 职业：DevOps / Cloud / Infra 工程师，[来源: outline.json targetAudience 明确列出"DevOps / Cloud / Infra 工程师，希望了解 AI 工程化方向"]
- 月收入：⚠️ 待补
- 关键标签：**看到本职岗位相邻的招聘要求开始出现 RAG/Azure ML，担心自己的技能栈被新要求甩下，但目前工作稳定、不是主动求职状态**

---

**痛点 Top 3**：⚠️ 待补用户原话。唯一有真实数据支撑的背景是：本地 `jobs/2026-05-09.json` 里 Westpac 悉尼那条 "AI Engineer – Data Platforms" 岗位明确要求 RAG + Agentic patterns + Azure ML（[来源: curriculum/ai-engineer-rag/public/jobs/2026-05-09.json，岗位抓取 routine 生成，非本轮现抓，日期已快 2 个月未更新，建议重跑]），这是一个真实存在的、Cloud 背景相邻岗位开始要求 AI 技能的例子，但"这批人是不是真的因为看到这类 JD 而焦虑"没有访谈验证。

**决策周期**：`3-6 周`（⚠️ 推测，比 Persona A/B 更长，因为这批人不是主动求职状态，决策更犹豫）

**其余字段**：⚠️ 全部待补。

**Ground truth 来源**：weight ≈ 0.85 为 `ai_inference`，**明确不合格**。

---

**一段虚构日记**（⚠️ 虚构示意）

> 团队里在聊要不要把内部知识库接个 RAG，我负责 infra 这块，被拉去开了个会，才发现自己对"向量数据库""embedding"这些词只是听过，说不出个所以然。工作没受影响，但心里有点慌——万一哪天公司真要招个懂这个的人来管这摊事，会不会就是我被替代。看了眼这门课的大纲，挺系统的，先买了看看，不着急，慢慢学。

---

## 3. 跨 persona 渠道平台汇总

⚠️ **本节无法可靠产出。** 三个 persona 的"日常活跃平台 Top 5"字段本身绝大部分是 ⚠️ 待补状态（只有 V2EX 一条弱信号，且方向性判断是"可能不匹配"），没有足够的平台数据可以做加权计算。**在 §7 的用户平台数据补齐之前，不建议 `course-promotion-architect` 直接引用本节做渠道决策**——目前唯一可信的产品线索是：Westpac/Atlassian/Canva 这类真实岗位可以作为"购买触发器"素材（用于 LinkedIn/公司内部渠道），但渠道 Top 5 排序本身仍是空白。

---

## 4. Persona 不会买的人（防错配）

1. **完全零基础、没有 Python 基础的非技术人群** — 因为 outline.json `targetAudience` / `prerequisiteknowledge` 明确要求"有 Python 基础"，课程从 LLM/Embeddings/RAG 讲起，不会重新教 Python 语法，[来源: outline.json 字段]
2. **已经是重度 AI/RAG 从业者、天天在本地部署大模型和设计 Agent 框架的人**（V2EX openai/agent/localllm 节点上那批活跃用户画像更接近这类）— 这门课是"入门"定位，对已经会自己搭 RAG pipeline 的人价值有限，[来源: V2EX 弱信号浏览，⚠️ 方向性判断，未经关键词搜索验证]
3. **要"保 offer / 包就业"承诺才会下单的人** — 这门课不做这类承诺（[来源: CLAUDE.md 课程承诺红线，不承诺收入/入职]），而且目前只有 3 名真实学员、销售页没有任何学员案例可以佐证"学完真的能找到工作"，[来源: WebFetch 销售页确认，生产环境真实学员数]

---

## 5. 历史决策日志

### 2026-07-03 — Persona v1 初始化

- 来源：生产环境 admin-cms API（trainingId / 真实定价 $399-$299 / 招生状态 / 学员数 3 / syllabus 79 lesson 核对）+ outline.json targetAudience/courseObjective + WebFetch 销售页 + 本地 jobs/2026-05-09.json（已快 2 个月未更新）+ 公开 WebSearch（"6 个月转型"市场信息，无第三方真实评价）+ V2EX 弱信号浏览（无关键词搜索能力）
- Persona 数量：3（A 转型型技术人 / B Bootcamp 试水者 / C 求职防御型 Cloud 工程师）
- 最大不确定字段：**痛点 Top 3 原话、信任谁、不信什么、异议 Top 3、触达 ROI 排序** —— 这 5 项全部 0 覆盖，需要小红书/Boss/微信群人工截图 + 3 名真实学员匿名回访才能补
- 下次 refresh：2026-08-03（1 个月，非常规半年周期——因为本轮 GT 覆盖率太低，需要尽快补一轮再评估）

---

## 6. Ground truth 来源清单（总）

| ID | Type | Date | Sample | Location | 关联 Persona |
|----|------|------|--------|---------|------------|
| GT-01 | production_api | 2026-07-03 | trainingId+定价+cohort+学员数+syllabus 核对 | `api.jiangren.com.au/admin-cms`（trainings / programs/by-training / programs/next-phase / syllabuses） | A, B, C, §0 |
| GT-02 | outline_json | — | targetAudience/courseObjective/suitable 字段 | `curriculum/ai-engineer-rag/public/outline.json` | A, B, C |
| GT-03 | public_web_fetch | 2026-07-03 | 1 页 | `https://jiangren.com.au/program-course/ai-engineer-rag` | A, B |
| GT-04 | local_jobs_cache（已快 2 个月未更新）| 2026-05-09 | 3 条真实岗位 | `curriculum/ai-engineer-rag/public/jobs/2026-05-09.json` | A, C |
| GT-05 | public_web_search | 2026-07-03 | 若干篇（未存档 URL 列表）| WebSearch "软件工程师 AI Engineer 转型"，非本课专属 | A |
| GT-06 | v2ex_browse（非关键词搜索，弱信号）| 2026-07-03 | 4 节点约 40 条热帖标题 | V2EX `topics/show.json` | A（平台字段）|
| GT-07 | ai_inference | — | — | — | A, B, C 的绝大多数字段 |

---

## 7. 必须补的 Ground truth 任务清单（本轮遗留，按优先级排）

1. **【P0】小红书 / Boss 直聘 / 脉脉 / 微信群一手用户语言** — 需要 Summer/Lily/KIKI 手动截图：小红书搜"AI Engineer 转型""RAG 入门"笔记评论区；Boss 直聘 AI Engineer/RAG 工程师岗位下的候选人评论；内部微信群里学员/潜在学员的原始聊天记录（脱敏后用）。这是"信任谁/不信什么/异议 Top 3"三个字段目前唯一的补齐路径。
2. **【P0】3 名真实学员匿名回访** — 课程运营/客服从后台学员名单里联系这 3 人，问真实学习体验、有没有考虑续报旗舰营。**PII 红线：只能匿名化转述结果写进本文档，不能把姓名/联系方式写进会被 git commit 的文件。**
3. **【P1】重跑岗位抓取 routine** — `jobs/*.json` 最新只到 2026-05-09，快 2 个月没更新，先拿最新数据再用于购买触发器/决策周期字段。
4. **【P1】销售页那句"LinkedIn 报告：全球增长最快技术岗位前列"的具体出处** — 现在是没有链接支撑的营销话术，本文档没有引用它，但如果后续想用它当权威背书，必须先找到真实报告链接。
5. **【P2】V2EX 更细致的关键词搜索** — "RAG 转型""AI Engineer 面试"等，需要员工登录网页版手动搜（API 不支持全文搜索），验证或推翻"V2EX 人群可能不匹配"这个方向性判断。
6. **【P2】国内/澳洲 Boss 直聘、猎聘、Seek 上"AI Engineer""RAG 工程师"岗位量与要求的系统性抓取** — 本轮只顺手看了本地缓存文件，没有现抓。建议下一步单独跑 `/course-market-reality-check` 或类似 JD 抓取流程补充"决策周期"和"购买触发器"字段的证据密度。
7. **【P2】查 Persona B 假设是否成立** — 3 名真实学员里有没有人后续报了 `ai-engineer-bootcamp` 旗舰营，这个漏斗转化数字本轮完全没查，是 Persona B 整个存在假设的验证关键。

---

## 8. 本轮 Ground Truth 覆盖率诚实评估

**约 25%-30%，主观估算，非量化跑分**，且分布很不均匀：

- **§0 Meta 里的运营数据（真实定价 / 真实招生状态 / 真实学员数 / 真实课程结构）覆盖情况最好**——因为这些都是查生产环境 admin-cms API 直接拿到的，可以直接支撑"决策周期""购买触发器"里跟平台机制挂钩的部分推理。
- **§2 每个 persona 里的"痛点原话 / 信任谁 / 不信什么 / 异议 Top3 / 触达 ROI"这 5 项，覆盖率接近 0**——本轮完全没有小红书/Boss/微信群一手用户语言，也没找到任何第三方公开评价可以引用（WebSearch "匠人学院 评价 靠谱吗" 只搜到官方自己的渠道）。这是本文档最大的缺口，而且按红线规则只能靠员工手动截图补，AI 这轮做不到。
- **"日常活跃平台 Top 5 + 时段"字段几乎空白**，只有 V2EX 一条方向性很弱的信号（浏览约 40 条热帖标题，非关键词搜索），远远不够支撑一个可信的渠道清单——**§3 跨 persona 渠道汇总因此直接标注"无法可靠产出"，没有编造数字凑格式**。

**结论：本文档可以作为"课程真实运营现状"的可信参照（§0 全部数据均查过生产环境），但作为"用户画像/文案切角"的依据还不够格——按 skill 自带的 validate mode 标准，覆盖率 < 50% 判定为"本质是 AI 拍脑袋写的"，下游 `course-custom-landing` / `xhs-draft` 等 skill 在用户原话相关的字段上暂时不应该直接引用本文档，需要先完成 §7 的 P0 任务。**
