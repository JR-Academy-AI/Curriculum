# Claude 认证产品线 · 共享真相源

> **本文件是四门 Claude 官方认证备考产品的共享 SoT。** 四门证共用同一条报名链路、同一套考试政策、同一组合规红线——这些**只在这里写一次**。各产品的 `DESIGN.md`（话术）与 `SYLLABUS_OFFICIAL.md`（该门考试的事实）从这里继承，**不要复制粘贴本文件的内容**。
>
> 冲突时以本文件为准。
>
> **一手依据**：Anthropic 官方四份《Exam Guide》，均为 **Version 1.0 · Effective July 2026**。原件与提取文本在 `curriculum/_cert-official-guides/`（整目录 gitignore，Anthropic 版权）。Lightman 从 Partner Academy 下载：CCAR-F 于 2026-07-09，其余三门于 2026-07-10。

---

## 一、四门证一览（全部取自官方 Exam Guide v1.0）

| | **CCAO-F** | **CCDV-F** | **CCAR-F** | **CCAR-P** |
|---|---|---|---|---|
| 认证全名 | Claude Certified **Associate** – Foundations | Claude Certified **Developer** – Foundations | Claude Certified **Architect** – Foundations | Claude Certified **Architect** – Professional |
| 题量 | 60 | **53** | 60 | **63** |
| 时长 | 120 分钟 | 120 分钟 | 120 分钟 | 120 分钟 |
| 及格线 | 720（100–1000 量表分） | 同 | 同 | 同 |
| **考试费** | **$99 USD** | **$125 USD** | **$125 USD** | **$175 USD** |
| 有效期 | 12 个月 | 12 个月 | 12 个月 | 12 个月 |
| 场景结构 | — | — | **6 个场景抽 4 个** | — |
| Domain 数 | 7 | **8** | **5** | 7 |
| 前置要求 | **无**（明确写"不需要任何软件开发或 API 经验"） | **无** | 考纲未提 prerequisite 一词 | **无**（不要求先考 Foundations） |
| 官方样题 | 若干 illustrative items | 若干 | **12 道带解析**（注明取自 practice test） | 若干 |

**四门互不设前置。** Professional **不要求**先持有 Foundations——这条对我们的产品阶梯设计影响很大：不能宣传"必须先考 F 才能考 P"。

**只有 CCAR-F 有场景抽题结构**（"4 scenarios drawn from a bank of 6"），也只有它给了 12 道带解析样题并注明来自官方 practice test。另外三门的样题明确标注 "**not drawn from the live item bank**"。

**题量 ≠ 60 是常识陷阱**：CCDV-F 只有 53 题，CCAR-P 有 63 题。不要把 CCAR-F 的 60 题套到全线。

---

## 二、四门共用的考试政策（官方，逐条在四份考纲中一致）

- **计分**：criterion-referenced（跟固定标准比，不跟其他考生比）。720 这个 cut score 来自正式的 standard-setting 研究。**720 是 100–1000 的量表分（scaled score），不是百分比、不等于答对 72%。**
- **成绩单**：通过/不通过 + 量表分，附**各 domain 的答对百分比**。domain 分段**只用于诊断，不参与判定通过与否**——通过只看总量表分。**不要写"每个域都要过线"。**
- **题型**：单选与多选混合，**每题会标明该选几个**。
- **交付**：Pearson VUE，线上监考（OnVUE）或线下考场。闭卷、全程监考。
- **重考**：第 1 次失败后等 14 天、第 2 次后 30 天、第 3 次后 90 天；滚动 12 个月内同一门最多 4 次；**每次都要重新付费**。限制按单门计——这门没过不影响报另一门。
- **改期/取消**：只能在考前 **24 小时之外**。进入最后 24 小时的改动 = 考试费作废。缺考、超过迟到窗口同样作废且须重新报名。
- **证件**：政府签发、未过期的带照片证件，姓名须与报名**完全一致**。改名走 `certifications-support@anthropic.com`，必须在约考前处理。
- **特殊便利（Accommodations）**：须由 Pearson VUE **事先批准**，批准前不要约考。
- **NDA**：开考前须接受保密协议。考题、选项、场景均为 Anthropic 机密财产。不接受则终止考试且不退费。作弊或泄题 → 成绩作废 + 吊销证书 + 禁考。
- **续证**：有效期 12 个月。到期前复习变更点 + 在 Partner Academy 完成一次**免费、非监考**的评估即可续期，**不收费**。**一旦过期，须全价重考**。考纲重大变更时，Anthropic 可要求持证人重考而非走续证评估。
- **申诉**：收到通知起 14 天内（对成绩的异议自考试日起 14 天内）向 Pearson VUE 提出。**standard-setting 结果与单题内容不可申诉。**

---

## 三、🚨 报名链路铁律（四门通用，写任何对外内容前必读）

事实链（经 Lightman 核实 + 四份考纲 §10/§11 佐证）：

1. **Anthropic Partner Academy 不对个人开放自助注册。** 必须由已加入 Claude Partner Network（CPN）的伙伴在后台为你开通账号，你才进得去、才报得了名。**这道准入墙是真的，是我们全部四个产品最硬的价值。**
2. **匠人不能代发、代购考试名额。** 账号开通后，**学员本人**在 Partner Academy 上自行注册考试并**自行结账支付官方考试费**（结账价反映所属 partner tier 的折扣），再建 Pearson VUE 账号约考。
3. **考试费不含在任何一个包的包价里。**
4. **直通包为学员配一个 3 个月的公司域名邮箱，用作其 Partner Academy 账号的载体邮箱**（2026-07-15 Lightman 定，四门通用）。这是第 1 条"CPN 伙伴在后台为学员开通账号"的具体实现方式——账号以匠人公司域名邮箱建立并打通报名准入；**注册考试、结账支付官方考试费仍由学员本人在该账号内完成（第 2 条不变）**。邮箱是账号载体，不是"考试名额"，不改变"考试费另付、学员本人结账"这条事实。

   > 🚨 **本条触及报名链路红线 + 有产品逻辑待厘清，对外营销化前必须先经 Lightman 拍板；默认只在销售私聊解释，不上对外营销物料：**
   > - **对外口径待定**：上表用词红线禁"代购名额 / official partner"。对外若提"公司邮箱注册"，措辞不当易被读成"挂靠身份 / 代注册"，与"学员本人以自身资格注册"及"认证归属个人（§四：certifications belong to individual people, not firms）"存在张力。要不要对外提、怎么提，Lightman 定；未定前不写进 landing / 小红书 / 公众号。
   > - **⚠️ 有效期逻辑待厘清**：证书有效期 12 个月、续证需在 Partner Academy 完成（见§二续证条款）；但邮箱只给 3 个月。若该邮箱是 Partner Academy 账号的登录标识，3 个月到期停用后，学员能否登录账号处理 12 个月后的续证评估？（开通 + 约考在 3 个月内不受影响，续证链路需确认。）
   > - **待补事实（不要编）**：具体用哪个公司域名、3 个月到期后账号/邮箱如何处理（转学员个人邮箱？账号随邮箱失效？）—— 事实未定前不写进任何对外内容。

用词红线（四门全部适用）：

| ❌ 禁止出现 | ✅ 正确说法 |
|---|---|
| 含 1 个官方考试名额 | 为你开通 Anthropic Partner Academy 账号（个人无法自行注册） |
| 帮你拿到 / 协助申请考试名额 | 打通报名准入，并全程陪你走完注册 → 约考 → 考场 |
| 名额已激活 / 你的考试名额 | 你的 Partner Academy 账号 / 你的报名资格 |
| （对考试费只字不提） | 考试费按官方标准，在 Partner Academy 结账时由你直接支付 |

**关于考试费金额**：对外内容**不写具体数字**（与"对外不露价"口径一致），但**必须让学员知道这笔钱存在且需另付**。销售私聊阶段再讲金额与 partner tier 折扣。

---

## 四、🚨 其它共用红线

- **Partner 身份**：匠人在 CPN 目前是 **Registered 级**（on-ramp，不算正式 partner）。对外**禁止**自称"官方 Claude Partner"、禁止使用 Partner badge / brand assets。✅ 允许："匠人已注册加入 Claude Partner Network""通过 CPN 合规通道为学员开通报名资格"。升 Select 拿到 badge 后话术方可升级。
- **绝不**承诺"保过/稳过/必过/包通过"。四份考纲自己就写着 "**Anthropic does not guarantee that any particular resource ensures a passing result**"——这句话是我们这条红线的官方背书，也可以在诚实营销时引用。
- **官方样题口径（2026-07-11 Lightman 改判，2026-07-12 同步至此）**：官方考纲样题**按 346 门 dump 的同等方式原文入库**当题库用（考证匠既有惯例）。执行约定：入库样题 `source` 字段一律标 `official-exam-guide-sample`（与原创题 `jr-original` 区分，便于日后一键审计/清理）。⚠️ 风险已向 Lightman 完整陈述并被明确覆盖（Anthropic 版权材料 + NDA + 正在申请升级的 partner 关系），决策记录与理由链见 `docs/prd/CLAUDE_CERT_C_SIDE_PRD.md` §5.4（以该 PRD 为准）。**仍然禁止**：把样题原文放进对外免费展示的营销物料。
- **事实 vs 表达**：数字、权重、政策属于事实，不受版权保护，可自由使用。task statement 原文、场景描述、题干属于表达，受保护，**必须用我们自己的话重写**。
- **认证归属个人**：Anthropic 原话 "Certifications belong to individual people, not firms"。同一来源确认 "more than 10,000 consultants have earned a Claude certification"。但 **Services Partner Directory 收录的是公司（firms）不是个人**——不可写成"持证即可进入 Directory 被企业买家找到"。
- **禁止模版化 AI 味文案**（"在当今快速发展的""深入探讨""无论你是初学者还是"）。写人话。

---

## 五、产品阶梯与目录

| 产品目录 | 对应考试 | 官方目标受众（考纲原文归纳） |
|---|---|---|
| `ccao-f-cert-pack/` | CCAO-F | 把 Claude 当生产力工具、会搭 Claude Projects 的业务人：运营、市场、项目管理、教育、传播、通用知识工作者。**技术水平有限到中等，不需要开发或 API 经验。** |
| `ccdv-f-cert-pack/` | CCDV-F | 动手写代码、交付 Claude 应用的工程师。1–5 年软件工程经验 + 至少 6 个月 Claude 实战，Python 和/或 TypeScript，熟 REST API 与 CLI。 |
| `cca-f-cert-pack/` | CCAR-F | 用 Claude 搭生产级应用的解决方案架构师，6 个月以上 Claude / Agent SDK / Claude Code / MCP 实战。⚠️ 目录名沿用旧的 `cca-f`，是历史遗留（当时误以为考试代码是 CCA-F）。**线上 URL 已冻结，不改目录名**；正文用 CCAR-F。 |
| `ccar-p-cert-pack/` | CCAR-P | 中高级技术专家：解决方案架构师、AI/ML 工程师、技术负责人、资深软件工程师。3+ 年系统架构经验，做端到端交付、对接干系人、负责安全合规与治理。 |

**阶梯不是强制的**（四门互不设前置），但按受众自然排序是 CCAO-F → CCDV-F / CCAR-F → CCAR-P。

**中文站的市场判断**：CCAO-F 是唯一面向非技术人群的一门，考试费最低（$99），官方明说不需要开发经验——它和匠人「全球华人学习 AI 第一站」的定位最贴，TAM 也最大。CCAR-P 单价最高（$175）且受众最窄。

---

## 六、各产品的事实真相源

每门考试自己的 blueprint、domain 权重、目标受众、备考建议，写在各自的 `SYLLABUS_OFFICIAL.md`：

- `ccao-f-cert-pack/SYLLABUS_OFFICIAL.md`
- `ccdv-f-cert-pack/SYLLABUS_OFFICIAL.md`
- `cca-f-cert-pack/SYLLABUS_OFFICIAL.md`（CCAR-F）
- `ccar-p-cert-pack/SYLLABUS_OFFICIAL.md`

各产品的 `DESIGN.md` 只管**对外怎么说**，不重复本文件的政策与红线。
