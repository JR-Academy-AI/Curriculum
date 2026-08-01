# 交接文档 · AI 一人创业营讲课 Deck(给 Codex)

> **接手人要做的事**:照 W1 已建好的 deck 为范例,把 **W2–W15 共 14 节课的讲课 PPT** 做出来。
> 本文档写于 2026-08-01,W1 于 2026-08-02 首讲。

---

## 0. 一句话背景

AI 一人创业营 = 15 周课程,**每周日 14:00–17:00 三小时线下课**(墨尔本主场 + 悉尼/布里斯班卫星教室 + 同步直播)。
W1 当前已有 38 张 slide 的 React+Vite deck，主题是《Find a Problem Worth Solving》。教学链为“纠正 Idea 误区 → 真实 Problem First 案例 → 四入口 Opportunity Scan → 两条验证路径 → Opportunity Card → SoT 项目管理 → 写作与测试 → 真人验证承诺 → AI 辅助准备”。**W2–W15 可复用它的引擎和“先解释为什么、再示范、再练习、再验收”的结构，不照抄 W1 内容。**

---

## 1. 范例:W1 deck 在哪、长什么样

### 1.1 位置
```
curriculum/lessons/ai-solo-founder-w1/
├── package.json          # React 19 + Vite + framer-motion,依赖只有这三个
├── vite.config.ts        # base: '/curriculum/lessons/ai-solo-founder-w1/'
├── index.html
├── README.md             # 来源对照表 + 上台前红线清单
├── public/logo-zh-full.svg
├── public/product-validation-path.png
└── src/
    ├── App.tsx           # 把 slides 按顺序组装进 SlideEngine
    ├── main.tsx
    ├── styles/theme.ts   # 颜色/字体常量
    └── components/
        ├── SlideEngine.tsx   # 翻页引擎(← → 翻页 / F 全屏 / V 摄像头 / ?page=N 直达)
        ├── CameraBubble.tsx
        ├── ui.tsx            # 共享组件 + FitBox(防止内容超高被裁)
        └── slides/           # 一文件一页
            ├── S01_Cover.tsx
            ├── ...
            └── S23_Closing.tsx
```

### 1.2 本地跑起来
```bash
cd curriculum/lessons/ai-solo-founder-w1
bun install
bun run dev      # → http://localhost:5173/
bun run build    # 上线前必须过
```

### 1.3 W1 当前 38 张 slide 顺序（引擎与章节结构可复用）

| # | Slide | 作用 |
|---|---|---|
| S01 | Cover | 封面 |
| S02 | Takeaways | **今天你会带走什么**(产出 + 验收标准) |
| S10 | ThreePaths | 产品 / 服务 / 传统生意 / 小团队都可使用课程方法（实际第 3 页） |
| **S03–S03b** | **StartupMistakes / ProblemFirstCases** | **七个创业误区 + Canva/Fusion Books 与 DoorDash/PaloAltoDelivery 真实起点**（实际第 4–5 页） |
| **S03c–S03f** | **Opportunity Sources / Scan** | **熟悉行业、反复痛点、人工流程、已有付费四个入口；现场圈出一个候选问题**（实际第 6–9 页） |
| **S04b** | **ProductValidationPath** | **客户与场景 → 真实问题 → 最小交付 → 付费证据 → 复购与推荐 → Scale**（实际第 10 页） |
| **S04d** | **ProductOnlyValidationPath** | **Idea → PoC → MVP → 付费证据 → PMF → Scale；产品型项目专用**（实际第 11 页） |
| **S04** | **Roadmap15Weeks** | **15 周全景路线**（实际第 12 页） |
| **S05** | **PhaseOutputs** | **4 个 Phase 的出关物**（实际第 13 页） |
| **S04c** | **WeeklyFounderSkills** | **15 周每周发一个 Founder Skill** |
| S09 | WeeklySessionRhythm | 学生主导的 Founder Exchange；中段 30min 分享真实生意、卡点与下一步 |
| S10b–S11 | Why SoT / What is SoT | 先解释没有共同真相为什么会乱，再给定义 |
| **S11b–S11c** | **SoTProjectControl / SoTWeeklyLoop** | **SoT 如何控制优先级、任务、AI 输出、证据和版本** |
| **S11d–S11e** | **SoTQuiz / Answers** | **4 道现场情境题与答案解析** |
| S16–S16c | Opportunity Card | 六个字段 + 具体用户/问题/方案句式 + 5/3/3/付费意愿验证承诺 |
| S12–S13a–S13 | 模拟案例 A / 案例 B 练习 / 案例 B 对答案 | 一个跟做、一个先练再核对 |
| S14 | CaseDebrief | 四把尺子迁移到学员自己的方向 |
| S17–S18 | 同伴复述 / 讲师 review | Founder Exchange + 改一处关键假设 |
| S19–S21 | 最小 AI OS / 载入 SoT / 第一件真实任务 | 动手环节；不以连接器和任务数为门槛 |
| S20b / S21b | Business SoT Skill 启动 / 证据状态 | 把 SoT Skill 放进 Workspace，并区分生成、执行、验收 |
| S22 | NextWeek | 派下周的活 + 预告 |
| S06 | TimeInvestment | 时间投入约 94h，移到课尾避免打断主线 |
| S23 | Closing | 过关线 |

> **S04/S05（15 周路线 + Phase 出关物）与每周 Skill 路线是课程安排的共同组件**——每套 deck 只高亮当前周。时间投入只需在 W1 说明，并放在课尾，避免打断第一节的生意与 SoT 主线。

---

## 2. 🔴 做 W2–W15 deck 前必须知道的规矩

### 2.1 技术栈锁死(`curriculum/CLAUDE.md` 铁律)
- ✅ React 19 + Vite + framer-motion + **inline style**
- ❌ **禁止** Next.js / React Router / styled-components / Tailwind / CSS Modules / 任何 UI 组件库 / axios
- 每个 deck 只有 3 个依赖:`react` `react-dom` `framer-motion`

### 2.2 视觉规范:讲课 deck 用 **Register B · Neo-Brutalism**
- 3px 黑边 + 直角 + `box-shadow: 6px 6px 0 #000` 硬阴影
- 暖底 `#fff1e7`
- 字体:Bricolage Grotesque(标题)/ DM Sans(正文)/ Space Mono(数据)/ Noto Sans SC(中文)
- 字号一律用 `clamp()`;1600×900 固定画布
- ⚠️ **这是讲课 deck,用 Register B 是对的**。官网页面才用 Register A 精致软风,别搞混
- **必须用 `FitBox`**:内容超高时整块等比缩,投屏不会被裁

### 2.3 🚨 内容红线(违反会在讲台上穿帮)
- **禁止编造**:人名、公司名、收入数字、案例细节、法条。没有来源就标「待补」
- **每张有数据的 slide 底部必须有来源条**
- **不给法律/税务意见**:涉及合同、公司结构、税务的 slide 必须明写「这是提醒你去问专业人士,不是法律建议」
- **不承诺金钱结果**:不许出现「保证赚 / 月入 X / 包就业」
- **禁 AI 味模板腔**:不许「在当今快速发展的」「深入探讨」「全面掌握」「至关重要」「无论你是初学者还是」
- **不许说任何案例人物是华人** —— 已核实:公开资料里找不到一个确认的「澳洲+华人+公开收入」案例(见 `W1_CASE_STUDIES.md` §A.9.2)

### 2.4 平台强制登记(`curriculum/CLAUDE.md`)
**每做一个新 deck,必须在同一次修改里更新 `curriculum/lessons.html`**,加登记卡片(标题/技术栈/讲师/时长/slide 数/入口链接/源码链接/状态)。没登记 = 以后没人找得到。

---

## 3. 每节课的内容来源(**只用这些,不要自己发挥**)

| 来源 | 用途 |
|---|---|
| **`curriculum/ai-solo-founder-bootcamp/W{n}_RUNSHEET.md`** | **主来源**。W1–W7 各一份完整教案,含逐环节详案、时间表、台词、坑位 |
| **`W8-W15_RUNSHEETS.md`** | W8–W15 的精简教案(一个文件装 8 周) |
| **`public/outline.json`** | 机器大纲。每周现场课的 lesson code:W2=`L05` W3=`L09` W4=`L12` W5=`L21` W6=`L23` W7=`L26` W8=`L29` W9=`L34` W10=`L37` W11=`L39` W12=`L42` W13=`L45` W14=`L50` W15=`L52`。**每节现场课的 6 个 steps 里有真实的环节标题+时长+内容,照它做,别自己编环节** |
| **`COURSE_REDESIGN.md`** | 整门课 15 周单一真相(周名/Phase/产出/嘉宾) |
| **`W1_CASE_STUDIES.md`** | 案例库(1534 行,含 10 个澳洲案例),**每个案例都标了来源和可信度**,用之前先读它的红线 |
| **`W2_AGENT_ROUTES.md`** | W2 专用:四条 agent 路线(Claude Code / OpenClaw / Hermes / Codex)的真实定价与系统要求 |
| **`PRICING_SOT.md`** | 价格唯一真相:**$3,800 标价 / $2,800 促销**。其它数字别用 |

---

## 4. 🔴 每节课的固定结构(Lightman 定案)

### 4.1 每次课中间有 30 分钟交流活动
> **2026-08-01 Lightman 明确:「每次课中间半小时交流活动」**

- **位置:课程中段**(不是开场)。⚠️ 注意:现有的 `W2_RUNSHEET.md` ~ `W7_RUNSHEET.md` 里把它排在**开场**,**以本条为准,需要改**
- **时长 30min**
- **内容**:1-2 人上台讲这周进展 + 围绕 ta 的 networking;**组队也在这个环节发生**(W2 首次)
- **W1 也执行**：第一周交流方向、卡点和可提供的帮助；W2 起带真实进展与产出交流
- 做 deck 时:这 30min 要在时间表 slide 上体现出来

### 4.2 每周三件套(每套 deck 的 S02 都要有)
每周的「**本周真实动作 / 本周产出 / 卧槽点**」——这三样在 `outline.json` 每节现场课的 `description` 里有原文,**逐字取用,别改写**。

### 4.3 每套 deck 开头三张固定
S04 15 周路线 / S05 Phase 出关物 / S06 时间投入 —— 见 §1.3 说明。

---

## 5. 已知的待办与冲突(接手人要注意)

### 5.1 🔴 每套 deck 都会遇到的空缺

| 空缺 | 说明 |
|---|---|
| **AI OS 的 5 个具体方案名** | W1 deck 里只列了选型维度,没写死方案名(待 Lightman 拍板) |
| **Ray(微软)的 title / 团队 / 年限** | W6 嘉宾,repo 里只有「Ray(微软)」。**不许编真人履历** |
| **Stan(麦肯锡)的全名 / 能否实名** | W3 + W14 嘉宾,同上 |
| **W13 持牌 CPA / Grant consultant** | 嘉宾未定,W13 有 74 分钟直接落空 |
| **W14 投资人 fireside 2 位** | 未定 |
| **DeepRouter** | `deeprouter.ai` 目前是「Launching Soon」邮件收集页,**学员自助注册不到**。pre-work 却在推荐它 —— 待 Lightman 决定撤下还是改成「课程统一发额度」 |
| **W2 的 3 个 Agent Schedule 录播** | W2 教案的取舍方案依赖「其余 3 个案例走录播」,**录播不存在** |

### 5.2 🟠 文档间的已知冲突(做 deck 时以哪个为准)

| 冲突 | 以哪个为准 |
|---|---|
| networking 在**开场**还是**中段** | **中段**(§4.1,Lightman 2026-08-01 定案)。runsheet 里写「开场」的需改 |
| W15 Demo Day 时长 180min vs 510min | 实际是**全天**(路演 240 + 对接 90 + 晚宴 180),outline 按 180 统一记是口径问题 |
| 价格 | **`PRICING_SOT.md`**,$3,800 / $2,800 |
| 每周时长 | **约 6 小时/周**(已在 outline.json 修正统一) |

### 5.3 OpenClaw Windows 支持口径打架
官网说 Windows 原生支持(`install.ps1` + Hub App),但平台自己三门课写「原生跑不了,必须 WSL2」。**W2 deck 涉及这个,做之前需要实机验证给一个答案**(见 `W2_AGENT_ROUTES.md`)。

---

## 6. 建议的工作顺序

1. **先做 W2**(下周就要用)—— 内容源 `W2_RUNSHEET.md` + `W2_AGENT_ROUTES.md` + outline `L05`
2. 再做 W3(⭐Stan 嘉宾课,有嘉宾协作的特殊安排)
3. 之后按周推进 W4→W15
4. **每做完一套**:`bun run build` 过 + 登记进 `curriculum/lessons.html` + 更新根 `CHANGELOG.md`

**命名规范**:目录 `curriculum/lessons/ai-solo-founder-w{n}/`,`vite.config.ts` 的 `base` 改成对应路径。

---

## 7. 部署(做完之后)

curriculum 是静态站,**push 到 main 自动部署**(GitHub Actions)。
新 deck 目录必须接进 `.github/workflows/deploy.yml` 的 Build 与 Assemble 步骤，否则线上 404。W1 已接入，后续 W2–W15 仍须逐套登记。

---

## 8. 附:W1 deck 当前状态

- 🟡 当前 38 张 slide；W1 主题为 Find a Problem Worth Solving，先用四入口 Opportunity Scan 圈出候选问题，再完成六字段 Opportunity Card 和 5/3/3/付费意愿验证承诺；通用生意验证路径与产品型项目路径同时保留；Opportunity Card 作为 SoT v0.1 管理后续任务，AI 只辅助准备验证
- ✅ 本地 `http://localhost:5173/` 可访问
- ✅ 已登记进 `curriculum/lessons.html`（状态：Production Published）
- ✅ 所有案例带来源条,无编造内容
- ✅ 已接入 `deploy.yml` 的独立构建与 Assemble 路径
- 🟡 当前部署状态以 GitHub Actions 与公开 URL 回读为准
