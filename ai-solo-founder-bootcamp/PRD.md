# PRD: AI 一人创业营（首期）

**状态**: Draft v0.6
**作者**: Claude + lightman
**目标期数**: 2026 Q3 首期（具体开课日期待商务确认嘉宾供应链后定）
**Production 状态**: 全新课程，未在 prod 创建
**Curriculum 目录**: `curriculum/ai-solo-founder-bootcamp/`
**Slug**: `ai-solo-founder-bootcamp`（URL/英文站统一）
**中文名**: 「AI 一人创业营」（2026-04-30 决定，从初版 "AI 一人公司 Bootcamp" 改名）
**英文名**: AI Solo Founder Bootcamp（保留 slug 一致性，海外复制时英文不变）

**命名决策记录**:
- 候选过程：AI 一人公司 / AI Solo Founder / AI 独立创业训练营 / AI 一人创业营 / AI 单干创业营 / AI 自由创业营 / AI 自立门户 / AI 单飞 / AI 出师 / 换轨 / 另起一行 / 下半场
- 最终选定："AI 一人创业营"——保留"创业营"骨架（受众预期匹配）+ "一人"前缀差异化于"创业课"通用品类污染
- 跟 JR 现有 Bootcamp 的命名差异：用"营"取代"Bootcamp"后缀，更适合中产专业人士受众
- 海外复制：加拿大 / 英国 / 新加坡版主品牌不变（中文统一，slug 仍用 ai-solo-founder-bootcamp）

**v0.6 整门课重构：11 周 → 15 周（2026-07-27）**:
- 📐 **课程结构 SoT 换成 [`COURSE_REDESIGN.md`](./COURSE_REDESIGN.md)**，机器大纲 `public/outline.json` v0.5 与之同步。本 PRD §5 是它的产品侧展开，两者冲突以 COURSE_REDESIGN.md 为准。
- ⏱ W0 Pre-work + **W1–W15**（原 W0 + W1–W11）。节奏改成**每周日 3h 一节线下现场课**（原每周 4h），周内环节收进这节课的 steps，不再拆多个 live lesson。
- 🏷 4 个 Phase 全部重命名：Build & Sell → **AI Enable Business（W1–W7）**｜Marketing Campaign → **Go To Market（W8–W11）**｜Australia Ops → **Australia Operations（W12–W13）**｜Scale & Demo → **Founder Club（W14–W15）**。
- 🔢 totalLessons 49 → **53**｜liveClasses 26 → **15**（15 节现场课）｜estimatedHours 92 → **94**（现场 45h + 自学 42.4h + Lab 6.2h，平均每周 6.2h）｜InteractiveLab **9**。
- 🧠 新增贯穿主线 **CEO AI OS**（W1 搭 → 周中自动跑 → 下节 review）与 **AI 员工上岗**（W2 部署 Hermes / 龙虾 / Codex / Claude Code + Agent Schedule）——「在职」从劣势变优势。
- 🎤 嘉宾锚点重排：Stan（麦肯锡）W3 商业验证 + W14 Pitch/BP 一头一尾书挡｜Ray（微软）W6 项目管理｜持牌 CPA / Grant consultant W13｜投资人 W14 fireside。
- 🇦🇺 澳洲本地化模块从 W8-W9 移到 **W12-W13**（自动运转 + 合规 / RDTI）。海外学员「跟你无关」的段落同步改成 W12-W13。
- 📄 静态页 `curriculum.html` / `phase1-4.html` / `landing.html` / `outline.md` 已同步 15 周；本轮补齐其余规划文档 + 招生物料 + 合作方 deck。

**v0.5 新增（2026-06-30）**: §3.4 企业席位政策——重点人群 Persona 1（小公司老板）常太忙，允许「以公司名义」报名、由公司指派老板本人或核心员工全程代上；**同公司第二位员工加席享 8 折**（基价 = 第一席同期实付价 × 0.8，例早鸟 $2,800 → 第二位 $2,240），第二席为独立 1 人 1 席计入 cohort 总人数；每席 1 人、可换指派人（替换流程）；各出席者各自走 §3.3 申请制面试、毕业指标分别计分别发证；3 人及以上团报本期未开。落地待同步进 landing.html / 报名表单 / 报名条款 / `course-custom-landing` 销售页。

**v0.4 定价阶梯重做（2026-05-25）**:
- 💰 首期定价改三段式："预售 → 首期早鸟 → 第二期"
  - PRE-SALE: AUD **$2,400** · 限 15 席 · 可付定金锁席（满即关闭）
  - EARLY BIRD: AUD **$2,800** · 预售关闭后剩余席位（首期共 50 人）
  - NEXT COHORT: AUD **$3,800** · 第二期回标准价
- 🗑 删除原 §8.1 v0.3 三档（$3,800 / $4,800 Standard / $6,800 Premium）—— 首期不再卖 1:1 mentorship 档位
- 📉 §8.2 第二期定价从 $4,800-$9,800 三档简化为单价 $3,800（不再分早鸟/standard/premium）
- 📊 首期总收入预期：50 人 × ~$2,500 均价 ≈ ~$125k——首期定位为 case study 引流，不是利润中心
- ⚠️ **2 个动作要 lightman 拍板** — landing.html 已留 TODO 占位符：
  - ✅ 定金 = **A$1,000**（2026-06-19 拍板，已同步 landing.html / hundun-au）。仍待定：定金转全款的规则（预售期截止前如何收尾、退款衔接）
  - 预售期是否设时间截止（除"满 15 人"外加 "或 YYYY-MM-DD 截止，先到先停"）
- ✅ 已同步：`landing.html` 顶部 hero label / pricing-grid 三档 / value-anchor 打包价 / sticky bar；`promo-kit.html` 加了 28 张 AIGC 海报 prompt 一键复制 section

**v0.3 重大调整（2026-04-30）**:
- ❌ 删除 W10 移民/签证整周（GTV / 188 / 888 / 482 / MARA 嘉宾）—— 用户决策："PR 不知道，移民模块不加"
- ⏱ 课程从 12 周缩短到 11 周（W0 + W1-W11）
- 👥 受众画像 D（移民诉求 + 创业诉求双重，10%）从 §3.1 移除；A/B/C 重新分配为 45%/35%/20%
- 🎤 嘉宾从 4 类 → 3 类：会计师 + Grant consultant + VC（移民代理 MARA 移除）
- 📊 totalLessons 53 → 49 / liveClasses 29 → 26 / estimatedHours 96 → 92
- 🔢 Phase 4 W11-W12 重编号为 W10-W11；Phase 4 lesson L45-L52 重编号为 L41-L48
- 🌏 海外复制时本地化模块从"会计 + Grant + 签证"简化为"会计 + Grant"，更轻量

---

## 1. Context — 为什么做这门课

### 1.1 现有 JR Bootcamp 的出口都不解决"自己开公司"

扫了一遍 `curriculum/` 下现有 5 门主力 bootcamp 的定位：

| 课程 | 解决的问题 | 学员出口 |
|------|-----------|---------|
| AI Engineer Bootcamp（12+12 周） | 我会 AI 工程，能拿 AI 工程师 offer | **打工**（升职/换工作） |
| AI Adoption Bootcamp（8 周） | 我能在公司里推动 AI 落地 | **打工**（内部转型岗） |
| OpenClaw Bootcamp（4 周） | AI 接管我每周 5h+ 重复劳动 | **个人提效**（不丢饭碗） |
| Vibe Coding / ai-builder | 我用 AI 做全栈开发更快 | **技能提升** |
| AI Essentials | AI 入门科普 | **认知升级** |

**所有 bootcamp 出口都是"在某家公司里干活"或"个人提效"。完全没有"自己开公司、卖产品、拿 Grant"这条出口**。这是清晰的产品空白，不是跟现有课程重叠。

### 1.2 三件事同时成立，市场窗口真实

1. **技术拐点真实** — Cursor / Claude Code / Lovable / v0 让一个程序员一周做出过去一个团队半年做的 SaaS。Pieter Levels、Marc Lou、Tony Dinh 这类 $30k-$100k MRR 的 indie hacker 不再是孤例，而是可批量复制的 playbook。Sam Altman 公开预测"未来会有一人 billion-dollar 公司"。

2. **焦虑供给侧真实** — 程序员焦虑被 AI 替代是表面，更深层是澳洲拿 150k-250k+ 工资的中产专业人士（PM、咨询、律师、会计、senior dev）天花板焦虑。AI Engineer Bootcamp 解决的是"学新技能继续打工"，但很多学员真正的问题是"打工的天花板在哪、能不能不打工"。

3. **澳洲特色形成全球独家定位** — "全球华人 AI 创业课"没有差异化（生财有术、出海帮、Greenlets 都在做）。但**"澳洲华人 AI 一人公司课 + Grant 拿到手 + 三城线下 networking"是全世界独一份的产品**。

### 1.3 三个核心张力（已在前期讨论中决策）

**张力 1：OPC 一人公司 vs 可融资 startup → 选 OPC 主轴**

不能两条都教，会精神分裂。OPC 拒绝融资（dilution = 失去自由），VC 路线必须融资（不融跟不上）。两条路在团队、营销、财务、心智每一层都冲突。

决策：**主轴选 OPC / Indie**，"投资人对接 / 创业投资"降级成 W14「把生意讲成故事」节内的 fireside chat（请 1-2 个本地 VC 来分享）+ W15 Demo Day 投资人对接，不做系统训练。理由：
- 痛点描述（焦虑、被替代）= OPC 受众心智
- VC 学员人数极少（澳洲华人能拿 angel round 一年个位数）收不回三城运营成本
- VC 内容半衰期短（term sheet 行情每年变），OPC 内容半衰期长
- Grant / 澳洲会计 这些两条路都要用，不浪费

**张力 2：定位锁定澳洲华人 = 全球 → 全球可复制的本地化产品**

加入"澳洲会计、Grant 补助、本地 networking"后，这门课不再是中文站"全球华人"定位下的产品，而是**澳洲华人本地化产品**。

但用户已确认："就是线下课，复制到其他国家的话也可以类似模式"。这定下了真正的产品形态：

```
首期澳洲（验证 + 建 SOP）       — 50 人 × ~$2.5k 均价 = ~$125k 收入（v0.4 调整 · 持平就好）
       ↓ 6-8 周
第二期澳洲（复制扩规模）         — 35-50 人 × $5.5k = $200-280k
       ↓ 6-12 个月
加拿大首期 + 英国首期 + 新加坡首期 — 用同一套核心 + 当地化模块
       ↓
全球华人 AI Solo Founder 校友网络
```

课程内容架构必须**一开始就拆"全球通用核心 80% + 当地化模块 20%"**，否则后续国家复制时要重做。

**张力 3：付费筛选不是 bug 是 feature**

用户明确："毕竟付费，筛选了很多没有钱的创业者"。这反而正中目标客户画像：

- OPC 真实学员：35-45 岁 / 有 5-15 年职业积累 / 6-12 个月生活费储蓄敢辞职 / 敢一次性掏 $5k+ 学费
- 没钱的创业者其实**不该走 OPC** — 课上完第二天为下个月房租焦虑，撑不到 $1k MRR

定位自信往高价高净值走，不假装普惠。

---

## 2. 市场判断 + 竞品定位

### 2.1 可比品类对照

| 品类 | 例子 | 定价 | 学员数级 | 跟 JR 这门课的差异 |
|------|------|------|---------|-------------------|
| 国外 cohort-based 创业课 | Reforge / On Deck | USD $4k-$7k | 千人级/期 | 英文圈、不含 Grant、远程 |
| YC Startup School | YC | 免费 | 万人级 | 通识科普、非 cohort、无落地 |
| 中文创业社群 | 生财有术 | RMB 3000-5000/年 | 万人级 | 社群型、不教 AI 产品、内容碎片 |
| 中文出海创业 | 出海帮 / Greenlets | 免费 - RMB 几千 | 千人级 | 偏内容、不针对澳洲 |
| 澳洲本地创业课 | Antler / Startmate（项目制） | 免费（拿股份） | 几十人/期 | VC track only、英文圈、不教 OPC |
| **JR 这门课** | **AI 一人创业营** | **AUD $2.4k 预售 / $2.8k 首期早鸟 / $3.8k 二期** | **50 人首期** | **澳洲华人专属 + AI 工具栈 + Grant + 三城线下** |

差异化定位：**这是世界上唯一一门"用中文教澳洲华人专业人士用 AI 做一人公司、拿澳洲 Grant、三城线下 networking"的 cohort-based 课**。

### 2.2 跟现有 JR 课程的关系

```
入口 1：AI Essentials Bootcamp  ────┐
                                    │
入口 2：OpenClaw Bootcamp           │
（学会 AI 工具）                     │
                                    ├──→  AI 一人创业营
入口 3：AI Engineer Bootcamp        │     （把会 AI 转成自己赚钱）
（会 AI 工程）                       │
                                    │
入口 4：Vibe Coding / ai-builder    │
（会 AI 编程）                       │
                                    │
直接入口：澳洲华人 senior pro ─────┘
```

**这门课不抢现有 bootcamp 学员，是给他们一条新出路**。AI Engineer 学员升级 + OpenClaw 学员升级是首期最重要的内部鱼塘。

---

## 3. 受众画像 + 不收谁

### 3.1 理想学员画像（要收谁）

**画像 A：焦虑型 senior 程序员（最对口，目标占比 45%）**
- 35-45 岁 / 在 Atlassian/Canva/Telstra/Optus/Airwallex/银行 拿 150-250k+ 工资
- 已经会用 Cursor/Claude Code，看到 AI 替代趋势
- 想"做点自己的事"但不知道怎么从 0 到 $1 MRR
- 有 6-12 个月生活费储蓄，敢辞职/兼职过渡

**画像 B：高薪 PM/咨询/Designer（目标占比 35%）**
- 40-50 岁 / Senior PM / Senior Designer / 咨询合伙人
- 看完 Lovable + Cursor 演示，想绕过工程团队自己做产品
- 有强行业洞察（Legal/Real Estate/Healthcare/EdTech）但缺技术信心
- AI 工具让他们第一次能自己 ship

**画像 C：副业冲动 professional（目标占比 20%）**
- 律师 / 会计 / 医生 / 资深咨询
- 不想辞职但想用 AI 做 niche SaaS / 行业知识产品
- 看重澳洲税务 + Grant 合规

### 3.2 不收谁（明确排除）

- **没积蓄的应届生 / 在校生** — 撑不到 $1k MRR，应该先打工攒钱
- **没辞职勇气的纯打工者** — 不投入时间，cohort 文化被污染
- **想拍短视频割韭菜的** — 应用申请筛掉
- **想做币圈/Token 项目的** — 不在课程范围
- **不在澳洲且不打算来澳洲的** — Grant/会计模块对他无用，会觉得课不值
- **想做 VC fundable startup 的** — 推荐去 Antler / Startmate / Y Combinator

### 3.3 申请制（核心筛选机制）

光靠价格筛掉的还有"有钱但心智不对的人"。Reforge / On Deck / YC 都用申请制。

**申请流程**：
```
申请表（5 分钟填）
├─ 你为什么想做 OPC，不是找下一份工作？（200 字）
├─ 你过去 90 天为某个 idea 做过什么？（具体行动，不要空话）
├─ 你能稳定每周投入多少小时？
├─ 当前财务状况能撑几个月不收入？
├─ 一个你过去做过的"独立完成的事"（任何领域都可以）
└─ 你在澳洲吗？澳洲身份状态？
        ↓
通过 → 30 分钟 1:1 视频面试 → 录取
不通过 → 推荐去 OpenClaw / AI Engineer Bootcamp
```

**目标录取率：30-50%**（公开这个数字本身就是 social proof）。

### 3.4 企业席位：以公司名义报名 + 第二位员工 8 折 + 1:1 替换

Persona 1（小公司老板，已有 ABN + 1–5 人）是重点人群，但他们最常见的卡点不是不想学，是**真的太忙、抽不出 15 周本人全程**。给企业一个合规口子：**可以「以公司名义」报名，由公司指派出席者全程上课——老板本人，或老板派核心员工代上。**

**第一席谁来上由公司定**：席位归公司，出席者可以是老板本人，也可以是老板指派的 1 名员工。

**第二位员工 8 折（同公司加席）**：

- 老板可以在第一席之外，**再给公司第二名员工加报 1 席，享 8 折**——基价 = 第一席同期同档实付价，第二位打 8 折（立省 20%）。例：第一席走早鸟 $2,800，第二位 = **$2,240**。
- **第二席是独立 1 人 1 席，不是两人共用一个席位**：第二位占自己独立的学员账号 / cohort 名额 / 学习群位 / Demo Day 席位 / 互为客户日晚宴邀请，cohort 总人数按 2 人计。
- 第二位同样**走 §3.3 申请制面试**、同样按毕业 6 项硬指标各自计、各自发结业证书。
- **8 折只给「同一家公司、同一期」的第二名出席者**，不是转介绍 / 拼团 / 跨公司组队的折扣。

**每席 1 人，可换指派人（替换流程）**：

- 1 个付费席位全程只对应 1 个出席者；老板和员工**不能同时蹭一个席位**，也不能轮流来「两个人各上一半」。要 2 个人一起上 = 按上面买第二席（8 折），不是 1 席塞 2 人。
- 中途要换人：若开课后需把某席出席者从老板换成员工（或反过来），由公司提前通知运营，新指派人**继承同一席位、原指派人同步退出**——该席名额不变。
- **以公司名义报名 = 天然的替换证明**：席位登记在公司名下、指派谁出席由公司决定，「换人」本质就是公司换自己的指派人，不存在「凭空多一个人」，无需老板额外开证明。

**和申请制（§3.3）的衔接（重要）**：申请制审的是**每一个真正来上课的人**，不是付钱的老板。

- 报名时即声明每席的实际出席者是谁（老板 / 指派员工 / 第二位员工），**由各出席者本人**填申请表 + 走 30 分钟 1:1 面试。
- 审核口径不变：看实际出席者的心智、投入时间、能不能扛完 15 周——派一个「老板硬塞、自己根本不想来」的员工，会在面试被筛掉（保护 cohort 文化）。第二位 8 折不降审核标准。
- 毕业 6 项硬指标（§4.2）按**各实际出席者**分别计、分别发证。

> 边界：目前只开「同公司第一席 + 第二位员工 8 折」。**3 人及以上的企业团报折扣本期未开**，折扣率 / 资金口径待商务拍板后再加。定价基线仍走 §8 / FUNNEL_PLAN.md，第二位 8 折是唯一的企业折扣口子。
>
> ⚠️ **落地待办 → 见 [`ENTERPRISE_SEAT_ROLLOUT_PRD.md`](./ENTERPRISE_SEAT_ROLLOUT_PRD.md)**：第二位 8 折需同步进 `landing.html` 价格区 / 销售页 `content.ts` + i18n / 报名表单（自助加席）/ 后端 program 优惠逻辑（见 CHANGELOG 2026-06-30 早鸟价修复）。该 rollout PRD 列了 6 个对外面 + 分期方案（P0 文案先行靠运营兜底 → P1 自助 → P2 schema），本 §3.4 是规则 SoT，rollout PRD 只是执行层。**目前仅 PRD 立条款，对外未上。**

---

## 4. 学员旅程 + 毕业标准

### 4.1 15 周学员里程碑

每周被推着做一件更重、更公开的真实动作，下课能晒的产出就是这周的过关物。

```
W0 报到前          → Pre-work：装机 + LLM Key + AI 订阅 + ABN 预备 + 创业身份采集 A/B/C
W1 搭起 CEO AI OS  → 能干活的 AI OS + 一页生意 SoT + 现场组队
W2 AI 员工上岗     → 部署 agent（Hermes / 龙虾 / Codex / Claude Code）+ Agent Schedule 自动跑
W3 这是不是好生意   → ⭐Stan（麦肯锡）：继续 / 转向的书面结论 + 定价
W4 做出能卖的东西   → 能演示、能交付的最小版本（不会 code 走服务 / 信息产品线）
W5 立起品牌门面     → 上线的官网 + 一套 design system（一稿出全套对外资产）
W6 别让项目烂尾     → ⭐Ray（微软）：AI OS 维护的 backlog + 一周执行计划
W7 收到第一笔钱     → ⭐ 收到 $1+ 真实付费 ⭐
W8 AI 内容工厂      → 一条能持续出货的内容流水线 + 首波真实流量
W9 主动敲开客户的门  → 发出去的 outreach + 收回来的真实线索
W10 让人和 AI 搜到你 → 上线 SEO 页 + 第一次被搜到 / 被 AI 引用
W11 用户增长        → 上线的增长循环 + 实验数据
W12 让生意自己运转   → 财务 / 客服自动流转 + AI 出洞察的经营看板
W13 把钱从税务局拿回 → ⭐ 持牌 CPA：公司结构决策 + RDTI 资格评估 + 申请初稿 ⭐
W14 把生意讲成故事   → ⭐Stan 回归：基于真实 traction 的 pitch deck + BP + 一页纸
W15 登台           → 三城联合 Demo Day + 互为客户日晚宴 + 入会 Founder Club
```

### 4.2 毕业硬指标（不是 demo）

学员不达标不发结业证书。这条会让"想试试"和"真要干"的学员自动分层，也是这门课跟所有创业割韭菜班最大的差异。

| # | 指标 | 验收标准 |
|---|------|----------|
| 1 | 真实付费 | Stripe / Lemonsqueezy 截图，$1+ 真金白银（不是承诺） |
| 2 | 内容产出 | 中文 5 条 + 英文 5 条，公开链接可访问 |
| 3 | 法律实体 | ABN 已注册（或已有 Pty Ltd） |
| 4 | Grant 申请 | 提交至少 1 个 Grant（拿到算 bonus） |
| 5 | 产品 URL | 在线可访问的产品/服务页 |
| 6 | Demo Day 出席 | W15 现场或卫星教室到场 |

---

## 5. 课程结构（15 周）

> 🚨 **本节的结构 SoT 是 [`COURSE_REDESIGN.md`](./COURSE_REDESIGN.md)**（机器版 = `public/outline.json` v0.5）。本节是它的产品侧展开；两者冲突以 COURSE_REDESIGN.md 为准，不要在这里另起一套周次。

### 5.0 结构铁律与规模

- **每周日 3h = 一节线下现场课**（线下 office + 同步直播），周内环节放进这节课的 steps，**不拆成多个 lesson**。
- **周中自学 / Lab 各自独立成 lesson**（Lab 独立是平台铁律）。
- 每节固定节奏：开场 15min review AI OS 这周跑了啥 → 中段 30min「1-2 人上台讲进展 + networking」→ 下课给 OS 派下周的活。
- **规模**：53 个 lesson · 15 节现场课 · 9 个 InteractiveLab · 约 **94 小时**（现场 45h = 15 节 × 3h，自学 42.4h，Lab 6.2h）。折算**平均每周 6.2 小时**。

### 5.1 全局架构：80% 通用核心 + 20% 澳洲本地化

为支持后续国家复制，课程内容**一开始就明确拆分**：

| 模块 | 性质 | 复制到其他国家时 |
|------|------|------------------|
| W0 / W1-W11 / W14-W15 | 全球通用核心（80%） | 直接复用 |
| W12 自动运转 + 经营看板 | 半通用 | 财务工具链换当地（Stripe → 当地会计软件） |
| W13 澳洲公司结构 / 税务 / RDTI | 当地化（20%） | 换成加拿大 / 英国 / 新加坡的结构 + Grant 体系 |

### 5.2 详细课表（15 周）

> 每节现场课的**产出物**就是该周过关物；周中自学 / Lab 为独立 lesson。lesson code 以 `public/outline.json` 为准（L01–L53）。

#### W0 — Pre-work（自学，开班前 2 周完成）

**目标**：第一节课不卡装机、不卡订阅、不卡「你到底想做什么」。

- 装机 + LLM Key
- **AI 订阅选型**：预算有限 → Codex / ChatGPT；更省 → DeepRouter；充足 → Codex + Claude 双开
- ABN 注册预备（ATO 账号 / myGov）
- **创业身份采集 A/B/C**（决定 W1 现场怎么组队）

---

### Phase 1 · AI Enable Business（W1–W7）

> 建成一个验证过、AI 化的产品，立起品牌，并刷脸卖出第一单。

#### W1 — 搭起你的 CEO AI OS｜Your CEO AI OS

- OPC 心智 + 澳洲在职创业者案例
- 锁方向，写死**一页生意 SoT**
- A·B·C 三类身份复盘 + 现场组队
- 搭 AI OS：选型 → 喂 Gmail / Calendar / Drive / Notion → 现场派 7 个秘书任务

**产出**：能干活的 AI OS + 一页 SoT + 团队。

#### W2 — 你的 AI 员工上岗｜Agents at Work

- 现场选型并装上能干活的 agent：**Hermes / 龙虾（OpenClaw）/ Codex / Claude Code**
- 接权限、写工作说明书
- 一起搭 **Agent Schedule** 自动化
- 周中：agent 跑第一批调研 + 你自己约 5 个真实用户访谈

**产出**：一支替你干活的 agent 队伍 + 第一批调研。

#### W3 — 这是不是一门好生意｜Prove the Business ⭐嘉宾 Stan（麦肯锡）

- 变现路径全景
- 麦肯锡四把尺子：市场规模 / 竞争 / 单位经济 / 护城河
- 形态决策 + 定价

**产出**：继续 / 转向的书面结论 + 定价。

**嘉宾需求**：Stan（麦肯锡背景），能把咨询侧的商业验证框架落到一人公司尺度。

#### W4 — 做出能卖的东西｜Make It Real

- 不会 code 的人：把专长 + AI 做成生产化服务 / 信息产品（交付物 + SOP）
- 会 code 的人：定 MVP 范围
- 周中：MVP coding **全自学**（现成资料 + PBL / classroom 视频）+ 三个 Vibe Lab

**产出**：能演示、能交付的最小版本。

#### W5 — 立起你的品牌门面｜Brand & Website

- 大家一起做**官网 + design system + 品牌**
- Source of Truth 一稿出全套：官网 / Pitch Deck / 一页纸 / 公众号

**产出**：上线的官网 + 一套 design system。

#### W6 — 别让项目烂尾｜Keep Shipping ⭐嘉宾 Ray（微软）

- 大厂 PM 方法落到一人公司：任务拆解 / 优先级 / 在职版可持续节奏
- 让 AI OS 当 PM：维护 backlog、追进度

**产出**：OS 维护的 backlog + 一周执行计划。

**嘉宾需求**：Ray（微软资深工程 / PM），讲得了「大厂那套怎么删到一个人还能用」。

#### W7 — 收到第一笔钱｜First Dollar

- 人脉盘点 + 一对一 pitch（不建系统，就是去卖）
- Stripe / Lemonsqueezy 澳洲版接入
- AI 生成法律文件 → 由 AI 律师审

**产出**：第一笔真实付款到账（毕业硬指标 #1）。

---

### Phase 2 · Go To Market（W8–W11）

> 把刷脸首单变成一台不靠刷脸、会自己复利的获客机器。

#### W8 — AI 内容工厂｜Content Factory

- 小红书爆款 + 私信转化
- 视频号 + 公众号 + 私域
- AI 视频 / 海报 / 漫剧
- X build in public

**产出**：一条能持续出货的内容流水线 + 首波真实流量。

#### W9 — 主动敲开客户的门｜Outbound

- LinkedIn 个性化 outreach
- ProductHunt 冷启动
- 中英文圈 6 大线下渠道

**产出**：发出的 outreach + 收回的真实线索。

#### W10 — 让人和 AI 都搜到你｜SEO & GEO

- Google long-tail SEO
- AEO / GEO（AI 搜索时代的 cite-worthy 内容）
- E-E-A-T / Schema.org

**产出**：上线 SEO 页 + 第一次被搜到 / 被 AI 引用。

#### W11 — 用户增长｜Growth Hacking

- AARRR 漏斗诊断
- 推荐机制与病毒循环
- 一个 launch 跑通 10 个渠道

**产出**：上线的增长循环 + 实验数据。

---

### Phase 3 · Australia Operations（W12–W13）🇦🇺

> 全球独家护城河：AI 一人创业 × 澳洲税务 / Grant。

#### W12 — 让生意自己运转｜Autopilot

- Notion 个人 ERP
- AI 客服 / 邮件自动化
- **AI 数据分析**：LTV·CAC / 渠道 / churn 经营看板

**产出**：自动流转 + AI 出洞察的经营看板。

#### W13 — 把钱从税务局拿回来｜Compliance & RDTI ⭐嘉宾 持牌 CPA / Grant consultant

- Sole trader vs Pty Ltd 决策树
- PSI rules / 个人 vs 公司税分水岭 / CGT
- **RDTI 43.5% 退税（重头戏）**

**产出**：公司结构决策 + RDTI 资格评估 + 申请初稿（毕业硬指标 #4）。

**嘉宾需求**：澳洲持牌 CPA / CA + Grant consultant（可同一人或两人），至少帮 5+ 客户拿过 RDTI，能用中文讲实操陷阱。

---

### Phase 4 · Founder Club（W14–W15+）

> 从「有个在跑的生意」到「能 pitch 给任何人、能融到钱、能被看见」。毕业 = 入会。

#### W14 — 把生意讲成故事｜Pitch & BP ⭐嘉宾 Stan（书挡回归）+ 投资人 fireside

- 把前 13 周的真实数据做成 pitch deck + BP + 一页纸
- 三档 pitch 讲法：30 秒 / 5 分钟 / 投资人版
- 融资入门：term sheet / SAFE / 估值
- 投资人 fireside

**产出**：基于真实 traction 的 pitch。

**嘉宾需求**：Stan（W3 回归）+ 1-2 位本地 VC / 投资经理（华人 background 优先）。

#### W15 — 登台｜Demo Day · 入会 Founder Club

- 三城联合路演，每人 5min pitch
- 投资人对接
- 互为客户日 + invite-only 晚宴

**入会之后**：校友网络 · mastermind · 6 个月 Office Hour · 互为客户市场 · 老带新。

> **待加内容（创业者角度，Phase 4 后续扩展）**：谈判 / 成交（把 pitch 变签约）· 媒体 / PR 曝光 · 投资人关系（持续 pipeline）。

---

## 6. 三城线下交付模式（Hub-and-Spoke）

### 6.1 模式确认（用户已验证 2020 年前跑通）

```
                ┌─────────────────────┐
                │  墨尔本 主场教室      │
                │  老师现场讲 + 学员    │
                │  本地 Tutor 1:8       │
                └──────────┬───────────┘
                           │ 直播 + 互动
              ┌────────────┼────────────┐
              ▼                          ▼
    ┌────────────────┐        ┌────────────────┐
    │ 悉尼 卫星教室    │        │ 布里斯班 卫星教室 │
    │ 本地 Tutor 1:8  │        │ 本地 Tutor 1:8  │
    │ 学员一起看 + 讨论│        │ 学员一起看 + 讨论│
    └────────────────┘        └────────────────┘
```

**关键设计**：
- 主场轮换：W1-W5 墨尔本主场 / W6-W10 悉尼主场 / W11-W15 布里斯班主场（也可以一城固定，看商务安排）
- Tutor 不需要懂 AI 工程（OpenClaw 装机简单）— 主要负责现场氛围 / 网络问题 / 个人化提问
- 学员选一个 home city，全期固定
- W15 Demo Day 三城联合直播 + 各城本地 networking 晚宴（互为客户日 invite-only）
- 嘉宾飞主场城市，其他两城听直播（嘉宾不用飞三趟，成本可控）

### 6.2 三城运营资源现状

| 城市 | Tutor 配置 | 场地 | 本地嘉宾资源 | 招生鱼塘 |
|------|-----------|------|-------------|---------|
| 墨尔本 | ✅ 已配置 | 待确认 | ✅ 强（JR HQ） | ✅ 最大 |
| 悉尼 | ✅ 已配置 | 待确认 | 🟡 中等 | ✅ 大 |
| 布里斯班 | ✅ 已配置 | 待确认 | 🟡 待开发 | 🟡 中等 |

### 6.3 跟纯线上的差异化叙事

- 三城线下沉浸（不录播 / 不开纯线上）
- 同期同学是真实可见的人（同城 networking → 互相投资 / 雇佣 / 收购）
- 嘉宾飞到主场跟学员吃饭（不是连线讲完就走）
- Demo Day 三城联合（罕见仪式感）

---

## 7. 招生策略（核心：不靠流量，靠鱼塘）

### 7.1 高客单价 cohort-based course 的招生公式

```
第一期生源 = JR 内部鱼塘老学员升级（70%）
            + 创始团队私聊邀请（15%）
            + 1-2 场 free webinar 漏斗（15%）

第二期起 = 第一期学员推荐 + 复购（70%）
        + 第一期 Demo Day case study 做内容（20%）
        + 新流量（10%）
```

### 7.2 内部鱼塘盘点（招生主战场）

| 鱼塘 | 量级（待运营确认） | 跟 OPC 课匹配度 |
|------|------------------|-----------------|
| AI Engineer Bootcamp 老学员 | 千级 | ⭐⭐⭐⭐⭐ |
| OpenClaw Bootcamp 老学员 | 百级 | ⭐⭐⭐⭐ |
| jiangren.com.au 中文站精准流量 | 万级月活 | ⭐⭐⭐ |
| 公众号 / 小红书既有粉丝 | 万级 | ⭐⭐⭐ |
| 历届 JR 训练营校友群 | 千级 | ⭐⭐⭐⭐ |

### 7.3 三阶段招生节奏

**Phase 1（开班前 8-10 周）— 内部精选邀请**
- 给 AI Engineer + OpenClaw 老学员发精准邀请邮件
- 创始团队 1:1 私聊邀请最对口的 30 人
- 目标：录满前 50% 名额（约 10-12 人）

**Phase 2（开班前 4-6 周）— 漏斗式公开**
- 三城各办 1 场免费 2h 线下《AI 一人公司诊断会》
- 现场填诊断表（你适不适合走 OPC）
- 转化率目标 10-20% 报名正课
- 目标：录满后 50% 名额

**Phase 3（开班前 2 周）— 补位**
- 老学员推荐 / waitlist 转化
- 关单：早鸟价截止前 push

### 7.4 五个降低招生门槛的杠杆

1. **首期定价低开高走** — 预售 $2,400（限 15 席 · 可付定金锁席）→ 首期早鸟 $2,800（满 15 后开放剩余席位）→ 第二期 $3,800。明说"首期为建立 case study，仅此一期"。
2. **退款保障** — "前两周不满意全额退款"（cohort 课标准条款，澳洲消费者法本来就保护）。
3. **奖学金 1-2 个名额** — 全奖给一个有故事的候选人（女性 / 已辞职 / 公开 build in public）。social proof，不是降价。
4. **推荐分成** — 老学员推荐成功 → 双方各 $500-800。澳洲华人圈是熟人社会。
5. **免费诊断会鱼塘建设** — 即使不报班也建立联系，二期、三期持续受益。

### 7.5 首期招生目标（保守）

```
墨尔本   22 人（主场，最易招）
悉尼     16 人
布里斯班  12 人
─────────────────────
合计     50 人
```

**首期不是收入产品，是 LTV 引擎**：50 人 × ~$2.5k 均价 ≈ ~$125k 收入（v0.4 阶梯），覆盖嘉宾费 + 三城场地 + 运营。真正产出是 5-8 个真实赚钱的毕业 case study + SOP——LTV 在第二期之后才能跑回来。

---

## 8. 定价策略

### 8.1 首期定价（case study price · v0.4 阶梯）

| 档位 | 价格 | 触发条件 | 包含 |
|------|------|---------|------|
| 🔥 **PRE-SALE** · 限 15 席 | **AUD $2,400** | 先到先得 · 可付定金 **A$1,000** 锁席 · 满 15 即关闭 | 15 周课程 + 三城线下 + 10 类 Faculty + Demo Day + 校友群 + 6 个月 Office Hour |
| **EARLY BIRD** · 首期早鸟 | **AUD $2,800** | 预售关闭后开放 · 首期剩余 3-10 席 | 同上（内容与预售档完全一致） |

明说"首期为建立 case study，价格只此一期。预售为首期最低价，可付定金锁席"。

**🚨 待 lightman 拍板**：
- ✅ 定金 = **A$1,000**（2026-06-19 拍板）
- 定金转全款规则（首期开班前几周补齐？）
- 预售期是否带时间截止（除"满 15 人"外加日期）

### 8.2 第二期起标准定价

| 档位 | 价格 |
|------|------|
| NEXT COHORT · 第二期 | **AUD $3,800** |

第二期起加视频面试 + 严筛 + 公布录取率。无早鸟/Standard/Premium 三档区分（v0.3 的 $4,800-$9,800 三档已废弃）。

### 8.3 学员 LTV 估算

```
首期学费                    $2,400-$2,800（v0.4）
后续课程（AI 团队扩张课等）   $3,000-5,000
推荐 2-3 人                  价值 $2-4k
校友网络 + 互相收购合作       价值无法量化但巨大
─────────────────────────────────────
单学员 5 年 LTV ≈ $15-25k+
```

---

## 9. JR 平台已有资源整合（必须复用，不重做）

设计课程时必须查看并整合已有资源生态：

### 9.1 InteractiveLab 复用清单（W4 做出能卖的东西 / 全课 9 个 Lab）

| 资源 | 路径 | 复用到 |
|------|------|--------|
| Vibe Coding Lab 全部 | `/learn/vibe-coding/hub` | W4 做出能卖的东西（Cursor / Claude Code / Lovable 三个 Vibe Lab） |
| Prompt Lab 22+ 个 | `/study-center?tab=learn&mode=prompt-lab` | W2 用户调研 / W8 小红书标题 / W9 LinkedIn outreach / W12 AI 客服 / W13 Grant 起草 |
| Frontend Lab | InteractiveLab type=frontend | W4-W5（MVP + 官网） |
| AWS Lab | InteractiveLab type=aws | W4 部署（Vercel / Cloudflare / Railway 自学章节的备选） |

### 9.2 Wiki / Cheat Sheet 复用清单

| 资源 | 路径 | 复用到 |
|------|------|--------|
| Cursor / Claude Code / v0 cheat sheet | `/cheat-sheets/*` | W4 |
| ChatGPT / Claude / Gemini cheat sheet | `/cheat-sheets/*` | W1, W2 |
| Vibe Coding Hub | `/learn/vibe-coding/hub` | W4（Phase 2 全部章节自学） |

### 9.3 Roadmap 复用清单

| 资源 | 状态 | 行动 |
|------|------|------|
| AI Solo Founder Roadmap | ❌ 不存在 | **新建**（W15 毕业时给学员发） |
| Indie Hacker Roadmap | ❌ 不存在 | **新建**（首期前完成） |

### 9.4 Skill 复用清单（marketing 教学内容）

| Skill | 用到哪节 |
|-------|---------|
| `seo-optimizer` | W10 SEO |
| `eeat-optimizer` | W10 GEO |
| `xhs-poster` | W8 AI 内容工厂（教学员怎么做小红书海报） |
| `mp-article` | W8（公众号文章生成） |
| `bootcamp-video` | W8（视频号短视频 / AI 视频·漫剧） |
| `blog-longform-writer` | W8（X Build in Public 长文） |
| `saiwen-qiaoyi-style` / `wushi-caijing-style` | W8（写作风格参考） |

---

## 10. 嘉宾供应链（这门课能不能开 70% 取决于这）

### 10.1 必需嘉宾清单（开班前 2 个月必须确认）

| 嘉宾类型 | 用到哪节 | 数量 | 候选画像 | 预算/人 |
|---------|---------|------|---------|---------|
| 澳洲华人会计师 (CPA/CA) | W13 | 1 | 熟悉 small business + Pty Ltd，中文流利 | $500-1500 |
| Grant consultant | W13 | 1 | 帮 5+ 客户拿过 RDTI / EMDG | $1000-2500 |
| 本地 VC 投资人 | W14 fireside + W15 Demo Day | 2 | Blackbird / Square Peg / Antler / Startmate / AfterWork | 免费（他们想看 deal flow） |
| Indie hacker 中文案例 | W1 / W15 | 2-3 | $3k-30k MRR 的中文 indie，可远程连线 | $300-1000 |
| 澳洲华人创业 case study | W1-W15 穿插 | 3-5 | 已经做出 OPC 的澳洲华人 | $500-1000 |

### 10.2 嘉宾互利逻辑（为什么他们愿意来）

- **会计师 / Grant consultant**：高净值学员是他们的目标客户，来讲课直接拿 leads
- **VC**：澳洲华人 AI 创业者池子稀缺，他们想看 deal flow
- **Indie hackers**：曝光 + JR 平台流量 + 同期学员可能成为他们的客户

### 10.3 嘉宾供应链 TODO（运营动作）

- [ ] T-8 周：列出 3 个候选会计师 + 3 个候选 Grant consultant
- [ ] T-6 周：完成嘉宾 1:1 邀约 + 合作条款（费用 / 时长 / leads 分成）
- [ ] T-4 周：嘉宾内容大纲对齐（避免重复 / 互相 promote）
- [ ] T-2 周：嘉宾彩排 + 三城直播测试
- [ ] T-1 周：嘉宾出席确认 + 备份方案

---

## 11. 风险与失败模式

### 11.1 P0 风险（开班前必须解决）

| 风险 | 影响 | 缓解 |
|------|------|------|
| 嘉宾供应链没建立 | 课跑不起来 | 开班前 8 周开始铺嘉宾，2 个月不到位 → 推期 |
| 招生不足 < 10 人 | 三城跑不起来 | 内部 30 人精选邀请测水温，达不到 8 人意向 → 推期 |
| 三城场地没落地 | 卫星教室开不了 | 开班前 6 周确认三城场地长租 |
| AI 一人公司案例不足 | 课没有可信度 | 提前找 5-10 个澳洲/中国 indie hacker 案例 |

### 11.2 P1 风险（执行期会出问题）

| 风险 | 影响 | 缓解 |
|------|------|------|
| 学员中途辍学 > 30% | cohort 文化崩 | 申请制严筛 + 退款保障到 W2 末 |
| 毕业指标达成率低 | 无 case study 喂第二期 | W7 收钱挑战做强 + Tutor 1:8 紧盯 |
| OPC vs VC 路线模糊 | 学员搞错预期 | 招生页 + 申请表多次明示主轴 |


### 11.3 失败定义

如果出现以下任一，承认这门课失败、转向下一个产品：

- 首期招生 < 10 人（且不是因为推迟原因）
- 首期完课率 < 50%
- 首期毕业指标达成率 < 30%（达成 = 5/6 个硬指标完成）
- 净推荐值 NPS < 30

---

## 12. Phase 1 交付清单（开班前 12 周到开班）

### 12.1 内容交付物

- [ ] `outline.json` 完整 15 周大纲（53 个 lesson：15 现场课 + 9 InteractiveLab + 29 自学，含 Lab/Live/Self/Quest 各 type）
- [ ] 每个 lesson 有非空 description（≥ 100 字，按 §3 写法 — 不要 AI 味）
- [ ] 每个 Lab 是独立 lesson（铁律：不能塞在 step 里）
- [ ] 至少 30 个 lesson 绑定平台已有资源（Lab + Learn + Wiki ≥ 30）
- [ ] 嘉宾主讲的 4 节（W3 Stan / W6 Ray / W13 CPA+Grant / W14 Stan+VC）有详细嘉宾 brief
- [ ] 毕业硬指标的 6 项验收清单
- [ ] 课程 cardDescription / promoDescription / highlights / suitable 完整
- [ ] FAQ ≥ 15 条（OPC vs VC / 澳洲身份要求 / 退款 / 三城选择 / 学完能干什么 等）
- [ ] bootcampSections 营销 section ≥ 5 个

### 12.2 营销交付物

- [ ] 首期 landing page (`curriculum/ai-solo-founder-bootcamp/public/curriculum.html`)
- [ ] phase1.html - phase4.html 各阶段详情页（4 个 Phase）
- [ ] internal.html 内部资料（嘉宾名单 / 价格策略 / 招生话术）
- [ ] 申请表（Typeform / Google Form）+ 1:1 面试问题清单
- [ ] 给 AI Engineer / OpenClaw 老学员的精准邀请邮件文案
- [ ] 三城免费诊断会议程模板
- [ ] 小红书 / 公众号 招生海报（用 `/xhs-poster` skill 生成）
- [ ] 公众号长文 1 篇（用 `/blog-longform-writer` skill 生成）
- [ ] posters.html 注册（CLAUDE.md 强制规则 2）
- [ ] `.github/workflows/deploy.yml` 添加该 slug（CLAUDE.md 强制规则 1）

### 12.3 运营交付物

- [ ] 三城场地确认 + 长租合同
- [ ] 三城 Tutor 团队 brief + 培训
- [ ] 嘉宾名单 + 合作条款 + 内容大纲
- [ ] 直播 + 卫星教室技术测试
- [ ] Stripe / 学费收款 / 退款流程
- [ ] 学员系统（Slack / Discord / WeChat 群）
- [ ] 结业证书设计

### 12.4 时间线

```
T-12 周：PRD 确认 + slug 决定 + 嘉宾铺设启动
T-10 周：outline.json v1 完成 + 内部 30 人邀请启动
T-8 周：嘉宾确认 + 三城场地确认 + landing page 上线
T-6 周：三城免费诊断会启动（每城 1 场）+ 申请表上线
T-4 周：第一批申请面试 + 录取
T-2 周：补位招生 + 嘉宾彩排
T-0 ：W1 第一节课开始
T+15：W15 Demo Day + 互为客户日晚宴 + Founder Club 入会
T+17：第一期 case study 提炼 + 第二期招生启动
```

---

## 13. Open Questions（需要决策才能进 outline.json）

| # | 问题 | 推荐答案 | 待决策方 |
|---|------|---------|---------|
| 1 | 中文名最终用哪个？ | "AI 一人创业营" | lightman |
| 2 | 首期开课日期 | 2026 Q3（嘉宾铺设需 2 个月） | lightman + 运营 |
| 3 | 三城主场轮换 vs 墨尔本固定 | 墨尔本固定主场（首期降低复杂度） | lightman |
| 4 | 首期定价档位 | v0.4: $2.4k 预售（15 席）/ $2.8k 早鸟 / $3.8k 二期（v0.3 的三档已废弃） | lightman |
| 5 | VC fireside chat 是否做 | 做（W14 Pitch & BP 节内，2 个 VC） | lightman |
| 6 | 申请录取目标 | 50 人 / 录取率 30-50% | lightman |
| 7 | 退款窗口 | 到 W2 末（前 2 周满意承诺） | lightman + 法务 |
| 8 | 嘉宾费用预算上限 | $8k-12k 全期（4 嘉宾 × 平均 $2-3k） | lightman + 财务 |
| 9 | 海外华人能不能报？ | 可以但明说 W12-W13 澳洲运营模块跟你无关，价格不变 | lightman |
| 10 | 复制到加拿大/英国/新加坡的优先级 | 加拿大 > 新加坡 > 英国（华人密度） | lightman（这个可以晚点定） |

---

## 14. Next Steps（PRD 通过后立即做）

1. **lightman 决策 §13 的 10 个 Open Questions**
2. Claude 起 `outline.json` v1（基于 §5 课表 + §9 资源整合）
3. Claude 写 `curriculum.html` + `phase1.html`-`phase4.html`
4. Claude 加 `posters.html` 注册 + `deploy.yml` 配置
5. lightman + 运营启动嘉宾铺设（4 个嘉宾类型并行）
6. lightman + 运营从 AI Engineer / OpenClaw 老学员里手工挑 30 人发精准邀请测水温

---

**文档版本**: v0.1
**下次更新**: lightman 决策 Open Questions 后 → v0.2
