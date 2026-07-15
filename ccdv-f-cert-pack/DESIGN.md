# DESIGN · Claude 认证开发者 · 考试直通包（ccdv-f-cert-pack）

> 📣 **推广排期 / task 派单见 [`./PROMOTION_PLAN.md`](./PROMOTION_PLAN.md)**（`/course-promotion-architect` 产出）。本文件只管话术，PROMOTION_PLAN 管谁什么时候用哪个 skill 做什么。

> **共用红线不在这里。** 报名链路铁律（卖准入不卖名额）、考试政策、Partner 身份口径、保过禁令、官方样题版权、四门证对比 —— 全部见 [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md)，**写任何对外内容前先读那份**。
>
> **事实真相源** = [`SYLLABUS_OFFICIAL.md`](./SYLLABUS_OFFICIAL.md)（CCDV-F 的 blueprint、25 项子技能权重、受众）。本文件只管**对外怎么说**。
>
> themeColor `#4A7C8C`（青灰——工程师的冷静色，区别于架构师 Foundations 的深珊瑚 `#C15F3C`）。

---

## 🎯 一句话定位

> **"这门叫 Developer 的考试里，Claude Code 只占 3.1%，基础软件工程占 7.4%。你以为在考 AI，其实在考你是不是个好工程师——我们按官方子技能权重帮你把时间花对地方。"**

---

## 🔑 三根价值支柱

### 支柱 1 · 报名准入：这道门个人打不开
见 `CLAUDE_CERT_FAMILY.md` 第三节。

### 支柱 2 · 我们替你拆开了官方的子技能权重
这是四门里**唯一给到子技能级权重**的考纲。25 项子技能，精确到小数位。不看这张表就复习，几乎必然跑偏：

| 反直觉事实 | 数字 |
|---|---|
| Claude Code 在这门 Developer 考试里 | **3.1%** |
| Eval / Testing / Debugging | **2.6%**（全考纲最低） |
| Applications and Integration | **33.1%**（三分之一） |
| 单项最高：Claude Application Design | **8.6%** |
| 其次：Software Engineering Foundations（REST / JSON / 异步 / 版本控制 / 重构） | **7.4%** |

对照：架构师 Foundations 里 Claude Code 是 **20%**。**一个照着 CCAR-F 打法复习 CCDV-F 的人，会把六倍于应得的时间砸在 Claude Code 上。**

话术：**"官方 blueprint 把权重精确到了小数点后一位。Claude Code 3.1%，基础软件工程 7.4%。你可以不信我们，但请你相信这张表。"**

### 支柱 3 · 原创冲刺件，官方没有
- 八域 + 25 项子技能逐条精析，严格按官方权重分配篇幅
- **第三方 agentic 框架专题**（Strands / LangGraph / PydanticAI）——官方 blueprint 点名，架构师 Foundations 完全不考
- **端到端应用实战**：接 API + 集成工具 + 基础安全 + 简单评估，正是官方备考建议的核心动作
- 2 套全真模拟（**53 题** / 120 分钟，不是 60 题）+ 逐题详解 + 八域得分分布
- 报名 / 预约 / OnVUE 环境自检 / 重考规则全程手把手

---

## 🧱 产品结构（16 节 / 4 Phase / 约 15h 自学）

| Phase | 干什么 | 确定性成果 |
|---|---|---|
| P0 认证全景 & 打通报名 | 搞懂考什么 + 开通账号 + 自行注册与预约 | 一个能进 Partner Academy 的账号，和一场已约好的考试 |
| P1 八域备考路径 | 权重陷阱 + 逐域精析（Domain 2 占 33.1%，拆成上下两节） | 一条按子技能权重排好的备考路线 |
| P2 端到端实战 | 搭并跑通一个 Claude 应用 | 手里一个真实跑过的应用，含工具、安全与评估 |
| P3 全真模拟 & 冲刺 | 2 套模拟 + 考前清单 | 两套模拟稳定 720+ 再进考场 |

Domain 3（Claude Code 3.1%）+ Domain 4（Eval/Debug 2.6%）合并成一节 L13——加起来才 5.7%，**故意不给它更多篇幅，这本身就是教学信号**。

---

## 🆚 和另外三门的分流

**"你不写代码 → CCAO-F；你写代码交付应用 → CCDV-F；你做架构决策 → CCAR-F；你带团队做端到端交付、要跟法务高管过会 → CCAR-P。"**

🚨 **四门互不设前置。** 禁止宣传"必须先考 Associate"。

CCDV-F 与 CCAR-F 考试费相同，最容易被混淆。分辨依据：**你的日常是写代码交付应用（DV），还是画架构图做取舍决策（AR）**。两门的 blueprint 重叠有限——CCDV-F 有第三方 agentic 框架、软件工程功底、密钥管理；CCAR-F 有 agentic loop 细节、场景抽题、Claude Code 深度配置。

---

## 📌 定价口径（内部）

- 对外宣传页、海报、小红书、公众号不露出价格。
- **包价待定**（Lightman 未拍板）。
- 官方考试费**不含在包价内**，对外必须交代这笔钱存在且需另付，但**不写金额**。

---

## ✍️ landing 首屏话术

> **标题**：Claude 官方开发者认证 · 考试直通包
> **副标题**：Partner Academy 不对个人开放注册——匠人以 Claude Partner Network 成员身份为你开通账号，再按官方子技能权重带你把复习时间花对地方。
> **三个 bullet**：
> - 🔑 为你开通 Anthropic Partner Academy 账号（个人无法自行注册）
> - 📊 官方 blueprint 里 Claude Code 只占 3.1%，Applications & Integration 占 33.1% —— 我们按这张表排课，不凭感觉
> - 🎯 八域 + 25 项子技能精析 + 端到端应用实战 + 2 套全真模拟（53 题 / 120 分钟）

---

## 📣 宣传口号

> **「你以为在考 AI，其实在考你是不是个好工程师」**

- 依据：官方 blueprint 里 Software Engineering Foundations（REST / JSON / 异步 / 版本控制 / 代码审查 / 重构）占 7.4%，超过 Claude Code 的 3.1% 一倍以上。数字可放心引用。
- 配套第二句：**「53 题，八个域，权重精确到小数点后一位。官方已经告诉你重点在哪了。」**
