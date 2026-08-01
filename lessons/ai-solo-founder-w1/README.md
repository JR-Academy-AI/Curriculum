# W1 · 搭起你的 CEO AI OS —— 网页版讲课 deck

AI 一人创业营 W1 正课投屏用（周日 14:00–17:00，3h）。从 `curriculum/lessons/_template` 拷出来，引擎文件（`SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts`）逐字保留。

```bash
bun install
bun run dev      # http://localhost:5173/
bun run build    # tsc -b && vite build → dist/
```

← → 翻页 · F 全屏 · V 开摄像头 · `?page=N` 直达某页。

**共 23 张。** 2026-08-01 在原 17 张基础上插了两块：**15 周路线（04-06）** 和 **创业公司早知道（07-09）**，原 04-17 顺延为 10-23（文件名与函数名同步改号，页码 = 文件名前缀）。

## 内容来源（一个字没编，每张都能追到文件）

| Slide | 内容 | 来源 |
|---|---|---|
| 01 封面 / 02 过关线 / 03 时间表 | 今天怎么走 | `../../ai-solo-founder-bootcamp/W1_RUNSHEET.md` §0 §2 |
| **04 15 周路线全景** | 4 Phase × 15 周每周短名 + 嘉宾星光（Stan / Ray / CPA） | `../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md` Phase 1-4 各周条目 + 「嘉宾星光」段 |
| **05 四个 Phase 出关物** | Phase / 周 / 在干什么 / 出关物 | 同上「全课总览」表 + 每个 Phase 标题下的 blockquote 定位句 |
| **06 时间投入** | 约 94h ≈ 每周 6h（现场 45h + 自学 42.4h + Lab 6.2h） | `../../ai-solo-founder-bootcamp/public/outline.json` 逐节 `duration` 汇总（见下方核算） |
| **07 合规时间线** | 现在准备资料 → W7 收第一笔钱 → W13 才系统讲结构与税务 | `outline.json` 的 L01（ABN 预备）/ L26 + L27（W7 收款 + 5 份法律文件）/ L45 + L46（W13 结构 · 税务 · RDTI · ABN·TFN·GST·BAS） |
| **08 在职创业三个自查** | IP 条款 / 第二职业申报 / 竞业冲突 + 签证自雇限制 | **无来源可引 —— 因为本页不陈述任何事实**，只列「你该回去问自己的问题」。见下方红线 |
| **09 组队前想清楚三件** | 分工 / 产出归谁 / 怎么退出 | `../../ai-solo-founder-bootcamp/W2_RUNSHEET.md` §「14:00–14:30 ⓪ 学员分享 + networking + 组队集市」（A 类摆摊 · B/C 类挑人 · 不允许悬着）+ `W1_RUNSHEET.md` 第 180-181 行（B/C 类也要写 SoT，是敲门砖） |
| 10 三条路决策对照 | | `W1_RUNSHEET.md` §3「14:05–14:20」7 行表 |
| 11 Paperform（悉尼） | | `W1_CASE_STUDIES.md` AU-8 |
| 12 Metorik（墨尔本） | | 同上 AU-9 |
| 13 Testimonial.to（国际备选） | | 同上 案例 1 |
| 14 把时间买回来 | | 同上 AU-1 / AU-2 / AU-10（反例）+ §A.9.1 |
| 15 OPC 5 维自评 | | RUNSHEET §3「14:30–14:35」 |
| 16 SoT 七字段 | | RUNSHEET §3「14:35–14:50」 |
| 17 同桌互念三问 | | RUNSHEET §3「15:10–15:20」 |
| 18 ②′ 讲师现场 review | | RUNSHEET §3「15:20–15:35」（2026-07-29 新增） |
| 19 AI OS 选型 / 20 喂数据 / 21 七个秘书任务 | | RUNSHEET §3 ④⑤⑥ |
| 22 派下周的活 + 预告 W2 / 23 收尾 | | RUNSHEET §3 ⑦ + §0 |

### P06 的 94 小时怎么算出来的（可复核）

按 `ai-solo-founder-bootcamp/public/outline.json` 逐节 `duration` 求和：

| 项 | 明细 | 合计 |
|---|---|---|
| 现场 | `type: Lesson` 且 `duration: 180` 共 **15 节** × 3h | **45.0 h** |
| 周中自学 | `type: Information` 合计 2545 min | **42.4 h** |
| 互动 Lab | `type: InteractiveLab` 合计 375 min（9 个 Lab） | **6.2 h** |
| **总计** | 93.7 h ÷ 15 周 = **6.2 h / 周** | **≈ 94 h** |

⚠️ W8 另有两场周中线上 workshop（`L32a` AI 视频实操陪跑 / `L33a` 小红书图文诊断室，各 90min = 3h）**不含在这 94h 里**，算上是 96.7h —— slide 页脚已标注，台上不要说成"全部就 94 小时"。

## 上台前的红线

- **案例数字必须带来源**，每张案例页底部的来源条不许删。
- 源文件标「查不到」的字段，slide 上照实写 ⚠️，台上直接说「我没查到」。
- **不提任何人的族裔**（`W1_CASE_STUDIES.md` §A.9.2：没有一个确认的澳洲华人案例）。
- Paperform「每天早上写多久」两个来源打架 —— 只讲保守的「每天早起一小时」，两个不要一起说。
- Stovell 副业那两年人在伦敦；Buildkite 后来融了 VC；Schramko 的数字是他自己说的 —— 这三条讲的时候必须主动声明（slide 上已写）。
- ④ 的 5 个具体方案 + 默认方案是 RUNSHEET §8 待拍板项，slide 只列选型维度，没写死方案名。

### 🚨 P07–P09「创业公司早知道」专属红线

这三页碰到合同、税务、股权，**定位是风险自查清单，不是法律 / 税务意见**：

- **三页各自的免责声明块不许删**：P07 底部灰色来源条、P08 中间红色「🚨 这不是法律意见」大条、P09 底部黄色提醒条。
- **不许在 slide 或口头上说「澳洲法律规定…」**、不许引具体法条、不许给「这样做就没事」的结论。
- P08 全页**只提问，不给答案** —— 每一格都是「你要能回答的问题」，讲师台上也不要替学员判断某条款算不算数。
- 学员问「那我这种情况到底行不行」→ 标准回答：**我不能替你判断，去问雇佣法律师 / 注册移民代理 / 持牌 CPA。**
- P07 必须讲到那个 **6 周错位**：W7 就要收钱、W13 才系统讲结构与税务；**想在 W7 之前注册的人别等课程，自己去问 CPA**。
- P09 的「产出归谁 / 怎么退出」只是让学员**谈明白**，不是协议模板；不要在台上口头给分股权比例的建议。

## 版式

- 1600×900 固定画布，`FitBox`（`src/components/DeckTable.tsx`）在内容超高时自动等比缩，投屏不裁切。**新增的 6 张同样走 `Body`（内含 FitBox）。**
- 表格是本 deck 的主角，统一走 `DeckTable`；案例页统一走 `CaseSlide` 的五段版式。
- Phase 配色贯穿 P04 / P05：Phase 1 `#FFE9E4` · Phase 2 `#DCEBFF` · Phase 3 `#D9F2E4` · Phase 4 `#EDE9FE`。
- 收尾页用暖底不用深底 —— SlideEngine 固定挂深色版 `logo-zh-full.svg`，深底会把 logo 糊掉。
