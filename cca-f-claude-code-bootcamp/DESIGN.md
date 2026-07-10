# DESIGN · Claude 架构师认证 · Claude Code 实战冲刺班（cca-f-claude-code-bootcamp）

> 定位：在考试直通包基础上**加一整套 Claude Code 真实环境实战**。卖"真学会 + 顺带拿证"，不是"背题过考"。本文是话术真相源。

themeColor `#D97757`（Claude 品牌珊瑚色，浅调传达"陪练/上手"，区别于直通包深调 `#C15F3C`）。

---

## 🎯 一句话定位

> **"只背考点能过考，但过完你还是不会搭东西。这门课先在真实终端里把 Claude Code 玩到生产级，再对齐 5 大 domain 冲刺——学完你有真实作品 + 一张官方认证。"**

---

## 🔑 核心差异化（vs 直通包 / vs 市面上纯网课）

1. **真实环境实战，不是看录播**：11 个 Quest 全部在**学员自己的终端/项目**里做，AI 主动带练 + 验证——装 Claude Code、跑第一个任务、写 CLAUDE.md、配 hooks、做 slash command、亲手搭 MCP server、用 subagents 多智能体、设计上下文方案。
2. **实战直接对齐考纲**：每个 Quest 都标了对应 domain（如"配 hooks"= Domain 3 考点）。练的就是考的，考的就是能用的。
3. **打通官方报名准入**：CCAR-F 个人无法自行注册 Anthropic Partner Academy，匠人已注册加入 CPN（Claude Partner Network），通过合规通道为你开通账号、打通报名准入，并全程陪你走完注册 → 约考 → 考场。考试费按官方标准，在 Partner Academy 结账时由学员本人直接支付，不含在包价里。
4. **直播小班带节奏 + 答疑社群**：8 场直播覆盖 5 domain 核心 + 考前串讲；4-6 周冲刺，有人盯进度。

---

## 🧱 产品结构（40 节 / 8 Phase / 约 40h / 4-6 周）

| Phase | 主题 | 关键实战产出 |
|---|---|---|
| P0 认证+报名+装机 | 搞懂考什么 + 开通 Partner Academy 账号并自行注册 + 装 Claude Code | 报名资格到手（考试费你在官方结账时自付）+ 本机能跑 Claude Code |
| P1 Claude Code 基础实战 | 心智模型 + 第一个任务 + CLAUDE.md | 跑通首个 AI 辅助任务 + 一份项目规则 |
| P2 Domain 1 Agentic Architecture | 多智能体（权重最高） | 用 subagents 跑通并行任务 |
| P3 Domain 2 Tool Design & MCP | 工具设计 + MCP | **亲手搭一个 MCP server 接进 Claude Code** |
| P4 Domain 3 Claude Code Config | hooks/命令/settings（官方权重 20%） | 配好 hooks + 2 个 slash command |
| P5 Domain 4 Prompt Engineering | 生产级 prompt + 评估 | 一个带评估集、迭代到稳定的 prompt |
| P6 Domain 5 Context Management | 上下文/记忆/成本 | 一份长会话上下文管理设计 |
| P7 模拟 & 冲刺 | 2 套全真模拟 + 串讲 | 稳定 720+ 进考场 |

> 教学设计原则（遵守 curriculum CLAUDE.md）：Claude Code 实操= **真实环境 → 用 Quest 而非 InteractiveLab**（Lab 是平台 iframe 内做，Quest 是真终端做，本课全部真终端）。每个 Quest 都是独立 lesson，不塞进别的课的 steps。

---

## 🆚 分流话术（和直通包）

- **"你只差一张证、已经会用 Claude Code" → 考试直通包（US$399，首期 early-bird US$299）**
- **"你想真正学会搭生产级 Claude 应用，顺便把证拿了" → 实战班（价格待定）**

实战班 landing 放一句："已经是 Claude Code 老手、只想拿证？看考试直通包更划算。"——诚实分流，两个产品不打架。

---

## 📌 定价（待定）

价格**待定**。`outline.json` 里现填的 `tuition: 1699 / promoTuition: 1299` 是占位建议价，**未定稿**。定价锚点：直通包 US$399 / 首期 US$299（均不含官方考试费——考试费由学员本人在 Partner Academy 结账时直接支付），本课在其之上加 8 场直播 + 40h 真实环境实战 + 答疑。定稿后回填 `program.tuition`，并与直通包一致用 **USD** 币种。

---

## 数据准确性红线

- 报名链路铁律、考试政策、Partner 身份口径、保过禁令、官方样题版权 → 全部见 [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md)，**不要在这里另写一份**。
- 60 题 / 120 分钟 / 720 分（100–1000 量表分）/ 6 个场景抽 4 个 / 五域权重 —— 全部是官方 Exam Guide v1.0 确认的事实，**不再标"社区口径"**。权重最高的是 Agentic Architecture（27%），不是 Claude Code（20%）。
- **绝不**承诺"保过"（红线 3）。
- **🚨 Partner 身份口径**：同 cca-f-cert-pack/DESIGN.md——匠人当前为 CPN **Registered 级**，对外**禁止**自称"官方 Claude Partner"/ 用 Partner badge；只说"已注册加入 Claude Partner Network / CPN 合规通道开通报名资格"。升 Select 后话术方可升级。
