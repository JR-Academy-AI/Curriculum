# PERSONAS.md — AI 营销全链路实战 4 周（ai-marketing）目标用户画像

> 单一真相文档。下游 `FUNNEL_PLAN.md` / `PROMOTION_PLAN.md` / 销售页 / 小红书文案 / 公众号长文都应该引用这里的 persona，不要另起一套用户假设。
> 本文档由 `/target-user-persona-mapper init` 产出，2026-07-03 首次生成。

---

## 0. Meta

| 字段 | 值 | 来源 |
|---|---|---|
| slug | `ai-marketing` | `curriculum/ai-marketing/public/outline.json` |
| 课程名 | AI 营销全链路实战 4 周 | 同上 |
| 语言轨道 | 中英双轨（同一门课，W2 投放/GEO 和 W3 私域 agent 中英分轨直播） | `outline.json.targetAudienceList`（5 条，3 条 track=cn / 2 条 track=en）|
| 客单价档 | 引流课 ¥99/$29 × 4；主课自学 ¥699/$199、教学 ¥2980/$899、陪跑 ¥9800/$2980 | `outline.json.pricing` 字段（**⚠️ 规划稿，非 prod 生效价，见下方"生产环境状态"**）|
| **生产环境状态** | **`admin-cms/trainings` 搜索 `search=ai-marketing` 和 `search=营销` 均返回 `total:0`——这门课在生产环境完全不存在，没有 Training 记录，没有 trainingId，谈不上"当前定价"或"当前招生"。** | 本轮实测：`GET https://api.jiangren.com.au/admin-cms/trainings?search=ai-marketing` 和 `search=营销`，2026-07-03 用 `tools/skills-data-manager/.env.local` 的 `ADMIN_TOKEN` 直接查，两次返回都是 `{"data":[],"pagination":{"total":0}}`。上一轮调研还额外测过 `AI`（拿到 31 门带"AI"字样的课逐条核对，没有）、`全链路`、`营销全链路`、`私域`，全部 0；`https://jiangren.com.au/program-course/ai-marketing/` 和 `/course/ai-marketing` 两个可能销售页 URL 都是 HTTP 404 |
| README.md 里的"首讲 2026-07-30 / 招生窗口 2026-06-20—2026-07-25" | **本地规划意向，不是已发生的事实** | `README.md` 第 1 期目标段——这段话写得很确定，但没有对应 Training/Program 记录，不能当"已在招生"引用 |
| 已核实为真的部分 | 4 周 / 64 lessons（Phase1=17/Phase2=14/Phase3=19/Phase4=14）+ 4 场毕业仪式 + 37 InteractiveLab + 4 Quest + 15 场直播（`liveClasses` 字段，outline 里显式 `isLive=true` 的实际是 14 节）；主题色 `#E63977` | `outline.json` 本地字段（内容/结构类信息可信，不受"过期运营数据"红线约束）|
| 上次更新 | 2026-07-03 | 本文档创建日 |
| 下次 refresh 日期 | **不设固定日期，改设条件触发**：(a) 生产环境建出 Training 记录且开始真实招生，或 (b) 员工完成小红书/公众号截图补 ground truth 任一项，先到先 refresh。理由：课还没上线，"6 个月后 refresh"没有意义，触发条件应该是"有新真数据进来"而不是时间到 | — |
| Ground truth 覆盖率 | 约 20-25%（详见第 7 节评估） | — |

---

## 1. Persona 速查表

> 5 个 persona 直接取自 `outline.json.targetAudienceList`（课程组已定义、本轮核实内容合理），本轮工作是给每人补 10 字段 + 标 ground truth。P1-P3 中文站，P4-P5 英文站——**这不是同一批人的两种语言版本，是两个市场里完全不同的人**，教材工具栈、平台、决策路径都不同（中文用 Coze/巨量引擎/公众号，英文用 n8n/Google Ads/LinkedIn）。

| Persona | 一句话画像 | 占比预估 | 关键标签 |
|---|---|---|---|
| P1 · 内容运营菜鸟 | MCN / 品牌方 / 创业团队 0-1 年小红书 / 抖音 / 公众号运营 | ⚠️ 待补（无历史 cohort 数据可估）| 会写文案但不会用 AI 提效 |
| P2 · 转型中的市场策划 | 2-5 年 SEM/SEO/投放背景，被公司要求"用 AI 提效" | ⚠️ 待补 | 学过零散 prompt，没有系统方法 |
| P3 · 电商运营 / 私域操盘手 | DTC 品牌 / 微商 / 知识付费团队私域操盘手，1-3 年 | ⚠️ 待补 | 朋友圈 1v1 回到手软，老板让搭 bot |
| P4 · AU 转行 marketer / freelancer | Sydney/Melbourne in-house marketer 或 freelancer，客户 SMB-mid market | ⚠️ 待补 | HubSpot/Klaviyo 会用，AI 部分卡在写一两条文案 |
| P5 · AU 品牌 in-house 团队 | AU SMB/DTC 品牌市场负责人，团队 1-3 人 | ⚠️ 待补 | 预算有限，想靠 AI 替代部分外包 |

**占比预估全部标"⚠️ 待补"是诚实结论，不是漏填**：这门课在 prod 没有 Training 记录，自然没有任何一期学员名单、没有客服咨询统计，没有任何数据支持"P1 占 40%、P2 占 30%"这种切法。等真实有人报名/咨询后才能填。

---

## 2. Persona 详情

### Persona A（=P1）· 内容运营菜鸟

- **画像**：0-1 年经验，MCN / 品牌方 / 创业团队的小红书 / 抖音 / 公众号运营，会写文案但不会用 AI 提效 `[来源: outline.json targetAudienceList，课程组既有假设，非本轮一手数据]`
- **痛点 Top 3**：
  1. ⚠️ 待补（需要用户原话直引，目前只有课程组的转述"看着同事一天写 30 条爆款标题压力大"，这是转述不是原话，不能当 ground truth 用）
  2. ⚠️ 待补
  3. ⚠️ 待补
- **决策周期**：⚠️ 待补（没有第 1 期学员问卷、没有销售口播，无法给出具体天数和触发链）
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补——**这个字段本轮完全没有验证**。V2EX 抽样检查了「分享创造」节点最新 10 帖，全是程序员个人项目，跟内容运营岗完全不重合，判断为对本 persona 无参考价值，没有硬凑数据进来 `[来源: 本轮 V2EX 节点抽样，2026-07-03]`
- **信任谁**：⚠️ 待补
- **不信什么（黑名单）**：⚠️ 待补
- **购买触发器**：⚠️ 待补
- **异议 Top 3**：⚠️ 待补
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**（⚠️ 虚构示意，禁止当 ground truth 引用）：
  > 晚上 9 点半，刚哄完自己也没哄好的选题会。老板在群里甩了一句"隔壁账号今天又爆了，你们研究一下人家怎么做的"。打开小红书搜同行账号，翻了 40 条笔记，脑子里只有"哦这条爆了""这条也爆了"，但复盘不出来规律。收藏夹里存了 6 个"小红书 AI 写作"教程没点开过。

### Persona B（=P2）· 转型中的市场策划

- **画像**：2-5 年经验，原做 SEM/SEO/投放，公司要求用 AI 提效，学过零散 prompt 没系统方法，想接 GEO 但不知道从哪入手 `[来源: outline.json targetAudienceList]`
- **痛点 Top 3**：⚠️ 待补（原话未采集）。可作为背景参考的间接证据：中文市场里 AI 营销能力被拆进"新媒体运营+AIGC / 内容策划(AI方向) / 私域客服自动化 / 投放优化 / GEO-AI SEO"五类岗位族，没有统一职级名，说明这类人"想学但不知道该往哪类岗位靠拢"是行业结构性问题，不只是本课程个别用户的感觉 `[来源: docs/prd/AI_MARKETING_BOOTCAMP_JD_RESEARCH.md §1.1，引用腾讯新闻 2025-09 + 中华网 2026-04，二手研究非一手用户反馈]`
- **决策周期**：⚠️ 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补
- **信任谁**：⚠️ 待补
- **不信什么（黑名单）**：⚠️ 待补
- **购买触发器**：⚠️ 待补
- **异议 Top 3**：⚠️ 待补。可推测的一条方向（**标 AI 推测，未核实**）：这类人已经付费学过零散课程，异议大概率是"这门课跟我之前买的 AI 课有什么不一样"——但这只是推测，没有原话支撑，不能当 ground truth 引用到销售页
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**（⚠️ 虚构示意）：
  > 季度复盘会上被问"投放这块 AI 能不能再提效"，回答不上来只能说"在研究"。周末在家刷了两个 GEO 相关的公众号文章，术语一堆但没一个说清楚"具体第一步做什么"，越看越焦虑，最后关掉浏览器去睡了。

### Persona C（=P3）· 电商运营 / 私域操盘手

- **画像**：1-3 年经验，DTC 品牌 / 微商 / 知识付费团队私域操盘手，朋友圈/1v1/社群每天回到手软，老板让搭客服 bot 但不知道用 Coze 还是 Dify `[来源: outline.json targetAudienceList]`
- **痛点 Top 3**：⚠️ 待补
- **决策周期**：⚠️ 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补
- **信任谁**：⚠️ 待补
- **不信什么（黑名单）**：⚠️ 待补
- **购买触发器**：⚠️ 待补。可作背景参考：Coze 多 agent 落地案例（品牌大使/设计/客服/营销策略 4 个 AI 员工）复购率 +25%，说明"真实案例带来的具体数字"对这类决策者可能有吸引力，但这是行业案例不是本课用户的原话，只能作为文案素材候选，不能标成"购买触发器已验证" `[来源: docs/prd/AI_MARKETING_BOOTCAMP_JD_RESEARCH.md §5，引用 53AI 2024-06 报道]`
- **异议 Top 3**：⚠️ 待补
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**（⚠️ 虚构示意）：
  > 凌晨 12 点，社群里还有 3 条未回消息。老板白天说"你去看看 Coze"，打开官网研究了 20 分钟工作流节点，感觉每一步都能卡住，怕自己搭错把客户对话搞砸，先关掉页面继续手动回消息。

### Persona D（=P4）· AU 转行 marketer / freelancer

- **画像**：Sydney / Melbourne 做 in-house marketer 或 freelancer，客户从 SMB 到 mid-market，HubSpot/Klaviyo 用得不错但 AI 部分卡在 ChatGPT 写一两条文案 `[来源: outline.json targetAudienceList，track=en]`
- **痛点 Top 3**：⚠️ 待补（原话未采集，本轮未做任何英文渠道用户访谈）
- **决策周期**：⚠️ 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补。行业背景可作参考：SEEK 上 Content Strategist 类岗位有 3,707 个在招，AU JD 里 AI 提及率一年内从 2.8% 涨到 5.8%，说明这类人所在的招聘市场本身在快速关注 AI，间接推测他们会主动搜索相关信息，但没有验证具体在哪个平台搜、什么时段搜 `[来源: docs/prd/AI_MARKETING_BOOTCAMP_JD_RESEARCH.md §1.2，引用 Indeed Hiring Lab 2026-04]`
- **信任谁**：⚠️ 待补
- **不信什么（黑名单）**：⚠️ 待补
- **购买触发器**：⚠️ 待补
- **异议 Top 3**：⚠️ 待补
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**（⚠️ 虚构示意）：
  > Freelance 客户群发消息问"能不能用 AI 帮我们做 automation"，脑子里只有 ChatGPT 写 caption 这一层，没底气接这个活。翻了下 LinkedIn，看到同行发"我们上了 AI workflow"的帖子，点赞收藏，没敢评论问细节。

### Persona E（=P5）· AU 品牌 in-house 团队

- **画像**：AU SMB / DTC 品牌市场负责人 / Senior Marketer，团队 1-3 人，预算有限想靠 AI 替代部分外包 `[来源: outline.json targetAudienceList，track=en]`
- **痛点 Top 3**：⚠️ 待补
- **决策周期**：⚠️ 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补
- **信任谁**：⚠️ 待补
- **不信什么（黑名单）**：⚠️ 待补
- **购买触发器**：⚠️ 待补。行业背景：Marketing Automation Specialist 中位薪资 AU$90-120k、营销+AI 技能薪资溢价 20-30%（部分子类 +43%），说明"能不能用数字向老板/自己证明 AI 投入值回票价"大概率是这类人的核心决策变量，但仍是推测，没有本课用户原话支撑 `[来源: docs/prd/AI_MARKETING_BOOTCAMP_JD_RESEARCH.md §1.2 + §3.2，引用 RemoteStaff 2026 / roi.com.au 2026]`
- **异议 Top 3**：⚠️ 待补
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**（⚠️ 虚构示意）：
  > 董事会问"marketing 团队今年怎么用 AI 降本"，手上只有零散试过的几个工具，没有一套说得出口的 workflow。Google 了一圈 AI marketing course，大多是美国大厂视角，找不到贴合自己团队体量的案例。

---

## 3. 跨 persona 渠道平台汇总

⚠️ **本节暂缺，不编造**。渠道/平台 ROI 排序要基于第 2 节各 persona 的"日常活跃平台 Top 5"加权算出，而本轮 5 个 persona 的该字段全部是 ⚠️ 待补，没有输入就没有输出。如果现在硬凑一张"渠道周表"，本质是编——不做。

等下面第 7 节"必须补的 ground truth 任务"完成至少 P1-P3（中文站三个）或 P4-P5（英文站两个）任一组的"日常活跃平台"字段后，回来跑 `/target-user-persona-mapper export-channels ai-marketing` 补这一节。

---

## 4. Persona 不会买的人

以下几类人明确不是本课目标，防止 marketing 资源投给他们：

- **完全没做过营销/内容/私域相关工作的应届生**——课程默认学员已经在岗位上有真实业务场景要落地（W1-W4 每周都要求产出"真实闭环"，不是从 0 学营销基础），零基础应届生上了课没有真实场景可练 `[来源: outline.json.courseObjective + suitable 字段的隐含要求，AI 推理，非用户原话]`
- **想学写代码 / 做技术开发的人**——课程明确"不需要写代码"，如果目标是学 Python/编程应该去 `ai-engineer-bootcamp` 或 `web-code-bootcamp` 类课程 `[来源: outline.json.suitable 字段]`
- **期待"AI 自动帮我把营销全干了、我不用学"的人**——课程承诺红线明确"禁说月入/副业/接单/包就业，只承诺过程结果"，如果对方诉求是"买了课就能躺赚"，这门课的产品形态（毕业交作品集）不匹配 `[来源: README.md 承诺红线段]`
- **已经是资深 GEO / AI marketing 专家、只想找结果不想学过程的人**——课程是 4 周跑通 4 个模块的实战课，不是资深从业者要的"效率工具速查"，卖点错位 `[来源: AI 推理，基于 courseObjective 的"掌握完整工作流"定位]`

---

## 5. 历史决策日志

- **2026-07-03** · 首次生成 PERSONAS.md。核心发现：生产环境查无此课（`admin-cms/trainings` search 全部 0 结果，两个可能销售页 URL 都 404），5 个 persona 沿用 `outline.json.targetAudienceList` 既有假设，10 字段里除"一句话画像"外几乎全部标 ⚠️ 待补。本次工作的主要价值不是"填满了 persona"，而是**诚实标注了哪些是真、哪些是假设、哪些完全没数据**，避免下游 FUNNEL_PLAN / PROMOTION_PLAN / 销售页把规划稿当成既定事实来写。

---

## 6. Ground truth 来源清单

```yaml
ground_truth_sources:
  - type: production_api_check
    date: 2026-07-03
    method: "GET https://api.jiangren.com.au/admin-cms/trainings?search={keyword}"
    keywords_tried: ["ai-marketing", "营销", "AI", "marketing", "全链路", "营销全链路", "私域"]
    result: "全部 total:0，唯二命中 marketing 关键词的是不相关老课 digital-marketing / digital-marketing-1"
    also_checked: "WebFetch https://jiangren.com.au/program-course/ai-marketing/ 和 /course/ai-marketing，均 HTTP 404"
    weight: 用于 §0 Meta 生产环境状态判断，不用于 persona 10 字段
  - type: local_data_file
    location: curriculum/ai-marketing/public/outline.json
    field: targetAudienceList（5 persona 原始画像）+ courseObjective + suitable + highlights
    note: 内容/结构类本地文件可信，用于 persona 一句话画像 + 部分背景推理
    weight: 0.4（画像字段）
  - type: secondary_research_report
    location: docs/prd/AI_MARKETING_BOOTCAMP_JD_RESEARCH.md
    period: 2025 Q4 - 2026 Q2 公开数据
    cited_sources:
      - https://news.qq.com/rain/a/20250902A01TW500
      - https://m.tech.china.com/redian/2026/0410/042026_1844249.html
      - https://developer.aliyun.com/article/1687630
      - https://www.hiringlab.org/au/blog/2026/04/01/nothing-artificial-about-australian-ai-adoption/
      - https://www.remotestaff.com.au/blog/marketing-automation-specialist-salary/
      - https://roi.com.au/know-how/ai-marketing/will-ai-take-marketing-jobs-in-australia-2026
      - https://www.53ai.com/news/hangyeyingyong/2024062681507.html
    note: 二手研究，反映"这类人所在的市场大盘在发生什么"，不是"这类人具体怎么想"，只用作背景推理，不当痛点/异议/决策周期的直接证据
    weight: 0.15（仅用于标"AI 推测"字段的背景支撑，不单独计入 ground truth 覆盖率主体）
  - type: negative_check
    date: 2026-07-03
    method: V2EX 官方 API 抽样「分享创造」节点最新 10 帖
    result: 全部程序员个人项目分享，跟 AI 营销/内容/私域/GEO 完全不相关，判定该渠道对本课持目标用户参考价值低
    weight: 用于排除法，不提供正向数据
  - type: ai_inference
    weight: 剩余全部（约 45%）
    note: |
      5 persona × 10 字段中，痛点 Top3 原话/决策周期/信任谁/不信什么/购买触发器/异议 Top3/触达ROI排序
      共 7 个字段 × 5 persona = 35 个标注位，全部标 ⚠️ 待补，没有计入 ai_inference 权重（待补 ≠ AI 编）。
      真正计入 ai_inference 的是"Persona 不会买的人"一节的 4 条判断，属于低风险合理推理（课程红线/定位直接推出），
      不是编造用户心理活动。
```

**未采集来源（本轮明确跳过，原因见下）**：

- 小红书 / Boss 直聘 / 脉脉 / 微信群聊 / 公众号留言：按红线不做自动爬取，需要 Summer/Lily/KIKI 或运营同事手动截图补
- Reddit：仓库内搜了 `.env*` 文件和 `REDDIT` 关键词，没有找到任何 API 凭证，按红线跳过，不爬 HTML
- 真实学员访谈 / 客服记录：课还没开，没有学员，这类数据物理上不存在，只能等第 1 期招生后补

---

## 7. Ground truth 覆盖率诚实评估

**结论：约 20-25%，且这个百分比里大部分是"课程内容/市场大盘"类背景信息，不是 persona schema 里权重最高的"用户真实心理/行为"类数据。**

拆解：

- **一句话画像**（5/5 persona）：有 outline.json 既有假设支撑，算基本可信，但这是课程组早先的假设不是本轮采集的一手数据，只能算"半手"
- **痛点 Top 3 / 决策周期 / 信任谁 / 不信什么 / 购买触发器 / 异议 Top 3 / 触达 ROI 排序**（7 个字段 × 5 persona = 35 个标注位）：**全部 ⚠️ 待补**，这是本文档最大的缺口，也是 persona 之所以成立的核心——没有这些，PERSONAS.md 本质只是把 outline.json 里已经写过的话换个格式抄了一遍
- **日常活跃平台 Top 5 + 时段**：同样全部待补，仅有的两条"行业背景可作参考"标注不构成"这类人具体在哪个平台活跃"的证据
- **生产环境状态核查**：100% 确定，但结论是"查无此课"——对 persona 内容本身没有正向贡献，价值在于**防止下游文档把规划稿写成既定事实**

**下一步建议**（按优先级）：

1. 员工手动截图小红书/公众号评论区，关键词搜"AI 营销""AIGC 提效""GEO"相关讨论，重点找 P1/P2/P3 三类人的原话吐槽
2. 找团队里接触过类似课程学员的同事（销售 / 课程主理人）做 30 分钟访谈，哪怕不是这门课的学员，同类课程（如已有的 ai-adoption-bootcamp）学员画像也能部分参考，标"类比来源"不当"本课来源"
3. 生产环境如果后续真的建了 Training 记录、开始有咨询，第一时间用 `refresh` mode 回填真实数据，届时优先级最高的是"异议 Top 3"和"决策周期"——这两项直接决定 FUNNEL_PLAN 的过渡序列节奏和 PROMOTION_PLAN 的渠道预算分配
4. 在此之前，**FUNNEL_PLAN.md / PROMOTION_PLAN.md 如果要引用本文档的 persona，必须同时注明"多数字段为待补状态，决策请谨慎"**，不要因为文档格式完整就误以为数据也完整
