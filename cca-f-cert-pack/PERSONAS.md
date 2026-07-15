# Claude 官方架构师认证（CCAR-F）· 考试直通包 — 目标用户画像 PERSONAS.md

> 单一真相文档。下游所有 marketing / 漏斗 / 内容 skill（`course-promotion-architect` / `course-custom-landing` / `xhs-draft` / `eoi-followup` 等）都读这里定义的 persona。
> 由 `/target-user-persona-mapper` 生成与维护，不要手工大改结构。
> **话术见 [`./DESIGN.md`](./DESIGN.md) / [`./MARKETING_PLAN.md`](./MARKETING_PLAN.md)；推广排期见 [`./PROMOTION_PLAN.md`](./PROMOTION_PLAN.md)；四门共用政策见 [`../CLAUDE_CERT_FAMILY.md`](../CLAUDE_CERT_FAMILY.md)。**

---

## 0. Meta

| Field | Value |
|-------|-------|
| Course Slug | `cca-f-cert-pack`（正文 = CCAR-F，目录名历史遗留）|
| 语言站 | 中文站（本文件）。英文站 persona 若要投 LinkedIn/AU 受众须另建 `PERSONAS.en.md`，**不许翻译本文件**（红线 4）|
| 生成方式 | `init` mode（新产品从零起底）|
| Ground truth 来源 | ① Anthropic 官方《CCAR-F Exam Guide v1.0》目标受众定义（一手，见 `SYLLABUS_OFFICIAL.md` / `CLAUDE_CERT_FAMILY.md §5`）② `MARKETING_PLAN.md §4`（优先人群 / 不适合人群 / 分流话术）③ `DESIGN.md`（三支柱定位）|
| **🚨 Ground truth 覆盖率** | **自评 ~35%（⚠️ 偏弱）**。画像 / 不会买的人 / 部分购买触发器 / 部分异议有官方或销售侧依据；**痛点用户原话 / 决策周期具体天数 / 日常活跃平台时段 / 不信什么 / 异议原话 = 无真实数据，标 ⚠️ 待补**。**当前不足以驱动精细渠道投放决策，仅作起步骨架。** |
| 首期状态 | **首期已售罄，现转常规滚动报名**（2026-07-15 Lightman 口播）—— **首期学员名单 = 最强 refresh 数据源，应尽快拉来做 Mode D refresh** |
| 下次 refresh | 首期学员结业 / 考试后立即 `refresh --cohort=1`（预计 2026-08~09）；或首期报名名单可得时即刻做 |
| Created | 2026-07-15 by `/target-user-persona-mapper init` |
| Related Docs | [DESIGN.md](./DESIGN.md) / [MARKETING_PLAN.md](./MARKETING_PLAN.md) / [PROMOTION_PLAN.md](./PROMOTION_PLAN.md) / [SYLLABUS_OFFICIAL.md](./SYLLABUS_OFFICIAL.md) |

> ⚠️ **本文件是 init 骨架，不是可信画像。** 覆盖率 35% < 50%，按 skill 红线本质仍偏 AI 推断。首期已售罄意味着**真实买家名单已经存在**——把它们拉来 refresh 是把覆盖率拉到 80%+ 的最快路径，优先级最高。

---

## 1. Persona 速查表

| | Persona A · 在用 Claude 做项目的开发者 | Persona B · 独立技术顾问 / AI 外包 | Persona C · 没上手 Claude 的新手（不会买）|
|---|---|---|---|
| 一句话 | 已用 Claude Code/MCP 交付过项目、缺一张官方证的工程师 | 接 AI Agent 外包 / 做企业 AI 转型咨询、要给客户提案加背书的人 | 只听过 Claude、想从零学 AI 编程的人 |
| 占比预估 | 🔵🔵🔵 最大（⚠️ 待首期名单验证）| 🔵🔵 中（高客单价值）| 🔴 需分流，不是本课买家 |
| 核心买点 | 官方背书 + 首批窗口 + 最短备考路线 | 客户提案可信度 + 官方认证做差异化 | —（应转实战班）|
| 决策周期 | ⚠️ 待补 | ⚠️ 待补 | — |
| 主渠道 | ⚠️ 待补（推断：公众号技术号 / 技术群 / LinkedIn）| ⚠️ 待补（推断：LinkedIn / 圈层 / 私域）| — |

---

## 2. Persona 详情

### Persona A · 已在用 Claude Code/MCP 做项目、缺一张官方证的工程师

- **画像**：25–38 岁，开发者 / AI Engineer / Solution Architect，有 6 个月以上 Claude / Claude Code / MCP / Agent SDK 实战。中文母语，可能在中国大陆或澳洲。`[来源: 官方 Exam Guide 受众 + MARKETING_PLAN §4 优先人群]`
- **痛点 Top 3**（🚨 **非用户原话，AI 从定位推断，全部 ⚠️ 待补真实访谈验证**）：
  1. ⚠️ 待补 —— 推断方向：「天天在用 Claude Code，但简历/LinkedIn 上没有任何官方东西能证明」`[来源: DESIGN 支柱1 推断]`
  2. ⚠️ 待补 —— 推断方向：「官方 Academy 课是免费的但很散，不知道哪门对哪个考点、要花多少时间」`[来源: MARKETING_PLAN 支柱2 推断]`
  3. ⚠️ 待补 —— 推断方向：「想考但发现 Partner Academy 个人根本注册不了，卡在报名门口」`[来源: CLAUDE_CERT_FAMILY §3 报名链路，真实痛点但需学员原话]`
- **决策周期**：⚠️ 待补（无数据。认证类通常比 bootcamp 短，但缺实测）
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补（推断：公众号技术号 / 掘金 / V2EX / LinkedIn / 微信技术群，时段未知）`[来源: AI 推断]`
- **信任谁**：⚠️ 待补（推断：官方 blueprint 数字、已过考的同行复盘、技术 KOL）`[来源: AI 推断]`
- **不信什么（黑名单）**：⚠️ 待补（推断：「保过/包过」话术、「官方合作伙伴」自称——技术人对夸大宣传敏感）`[来源: AI 推断，与 CLAUDE_CERT_FAMILY §2 红线一致]`
- **购买触发器**：看到「个人报不了名，匠人 CPN 通道能开通账号」+「首批华人持证窗口」`[来源: MARKETING_PLAN §5 卖点1 + §7 逼单逻辑，销售侧口径]`
- **异议 Top 3**：
  1. 「官方课不是免费吗，为什么还要付费包」`[来源: MARKETING_PLAN §6 FAQ，销售侧已识别]`
  2. 「是不是就发我一堆 PDF」`[来源: DESIGN 支柱开头，销售侧已识别]`
  3. ⚠️ 待补真实异议原话
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**：⚠️ 虚构示意（不可当 ground truth）—— 「上周给客户交了个 MCP + Agent 的活，客户问『你有没有 Anthropic 官方认证』，我愣了下——每天都在用，却拿不出一张证。搜了下发现报名页个人进不去，还得找 partner 开通。」

### Persona B · 独立技术顾问 / 做 AI 外包 · Agent 项目 · 企业 AI 转型咨询

- **画像**：30–45 岁，独立顾问 / 小团队技术负责人，接 AI Agent 外包或做企业 AI 转型咨询，要给客户提案增加可信度。`[来源: MARKETING_PLAN §4 优先人群「做 AI 外包、Agent 项目、企业 AI 转型咨询的人」]`
- **痛点 Top 3**（⚠️ 待补真实访谈）：
  1. ⚠️ 待补 —— 推断：「投标/提案时，客户凭什么信我懂 Claude 架构」`[来源: DESIGN 支柱推断]`
  2. ⚠️ 待补 —— 推断：「想用一张官方证跟其它外包做差异化」`[来源: AI 推断]`
  3. ⚠️ 待补
- **决策周期**：⚠️ 待补（推断：比 Persona A 更长，涉及"对生意有没有用"的 ROI 判断）`[来源: AI 推断]`
- **日常活跃平台 Top 5 + 时段**：⚠️ 待补（推断：LinkedIn / 创业者·顾问圈层 / 私域微信 / 知乎）`[来源: AI 推断]`
- **信任谁**：⚠️ 待补（推断：同行顾问背书、客户口碑、官方权威）`[来源: AI 推断]`
- **不信什么**：⚠️ 待补（推断：群发式广告、无案例的稀缺话术）`[来源: AI 推断]`
- **购买触发器**：官方认证能直接写进客户提案 / 用于差异化竞标 `[来源: MARKETING_PLAN §4 推断，销售侧]`
- **异议 Top 3**：⚠️ 待补（推断：「这证客户认不认」「值不值这个价」）`[来源: AI 推断]`
- **触达 ROI 排序（个人）**：⚠️ 待补
- **虚构日记**：⚠️ 虚构示意 —— 「同行都在卷 AI 外包，报价压得很低。想找个官方背书把自己跟纯接单的区分开——Anthropic 官方认证听起来够硬，但不知道客户认不认。」

### Persona C · 没真正上手 Claude 的新手 / 想从零学 AI 编程的人（🚫 不会买 / 必须分流）

- **画像**：想入门 AI、听过 Claude 但没做过项目、期待有人手把手教直播/长期辅导的人。`[来源: MARKETING_PLAN §4「不适合人群」，明确 ground truth ✅]`
- **为什么不是本课买家**：CCAR-F 直通包**只有考试资料 + 备考路线 + 模拟冲刺，没有从零教学**。新手买了会失望、退款、给差评。`[来源: DESIGN 定位「只有考试资料、无培训」+ MARKETING_PLAN §4]`
- **分流话术**：「你还没真正上手 Claude Code，建议先选 Claude Code 实战冲刺班；只想了解 AI 入门 → 转 AI Programming / AI Engineer Bootcamp。」`[来源: MARKETING_PLAN §4 分流话术 + §6 销售私聊判断，明确 ground truth ✅]`
- 其余字段：不适用（不投放、不做内容触达，只在销售私聊里识别并分流）

---

## 3. 跨 persona 渠道平台汇总

> 🚨 **本节数据不足以驱动投放**：Persona A/B 的「日常活跃平台」全是 ⚠️ 待补，无法做加权。当前 `PROMOTION_PLAN.md §3` 的渠道矩阵是按**受众类型经验推断**（技术架构受众 → 公众号技术长文 + 私域 + LinkedIn + 讲座，小红书中等），**不是**本 persona 反推。refresh 拿到首期名单后，跑 `export-channels` 生成真实加权渠道表替换。

| 渠道 | 当前依据 | 状态 |
|------|---------|------|
| 公众号技术长文 / 私域 / 讲座 / LinkedIn | 受众类型经验推断（非 persona 加权）| ⚠️ 待 refresh 后用真实平台数据校准 |
| 小红书 | 同上，中等权重 | ⚠️ 待验证 |

---

## 4. 不会买的人（防资源错配）

| 人群 | 为什么不是买家 | 处理 |
|------|-------------|------|
| 没上手过 Claude 的新手（= Persona C）| 无培训，会失望退款 | 分流 → Claude Code 实战班 `[来源: MARKETING_PLAN §4 ✅]` |
| 想从零学 AI 编程的人 | 同上 | 分流 → AI Programming / AI Engineer Bootcamp `[来源: MARKETING_PLAN §4 ✅]` |
| 期待直播 / 长期辅导 / 项目实战的人 | 本课是冲刺包不是训练营 | 分流 `[来源: MARKETING_PLAN §4 ✅]` |

---

## 5. 历史决策日志

| 日期 | 数据源 | 看到什么 → 改了什么 |
|------|--------|-------------------|
| 2026-07-15 | init（官方 Exam Guide + MARKETING_PLAN） | 首版骨架建立，覆盖率 ~35%，Persona A/B 大量字段待补；Persona C（不会买）依据充分 |
| （待补）| 首期学员名单 refresh | 首期已售罄，名单是最强 GT，refresh 后回填 Persona A/B 真实痛点/决策周期/平台 |

---

## 6. Ground truth 来源清单

| 标注 | 具体来源 | 可信度 |
|------|---------|--------|
| `[官方 Exam Guide 受众]` | Anthropic《CCAR-F Exam Guide v1.0》目标受众段（`_cert-official-guides/`，gitignore 版权材料，仅作 GT）+ `CLAUDE_CERT_FAMILY.md §5` | ⭐⭐⭐⭐⭐ 一手 |
| `[MARKETING_PLAN §4/§5/§6]` | 本产品对外宣传 SoT 的优先人群 / 卖点 / FAQ / 分流话术 | ⭐⭐⭐ 销售侧口径（非学员原话）|
| `[DESIGN]` | 话术真相源三支柱 | ⭐⭐⭐ 产品侧 |
| `[AI 推断]` | 无数据，从定位推测 | ⭐ 待验证，不可当依据投放 |

### 🚨 必须补的 ground truth（优先级排序）

1. **首期报名/售罄名单 + 学员自我介绍**（最强，已存在！）→ 拉来做 refresh
2. **首期咨询客服记录 / 销售口播**（Amelia/Rain/Angela：学员最常问什么、真实异议、哪些是骚扰流量）
3. **首期学员真实痛点原话**（备考群 / 报名时聊天记录）
4. 公众号 / 小红书 CCAR-F 相关内容的评论区
5. 30 min 面访 Beta（课程主理人，直接接触过首期买家）

> 补齐 1–3 就能把覆盖率从 35% 拉到 70%+。首期已售罄 = 这些数据都已产生，只差整理。
