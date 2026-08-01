# W1 · 搭起你的 CEO AI OS —— 网页版讲课 deck

AI 一人创业营 W1 正课投屏用（周日 14:00–17:00，3h）。从 `curriculum/lessons/_template` 拷出来，引擎文件（`SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts`）逐字保留。

```bash
bun install
bun run dev      # http://localhost:5173/
bun run build    # tsc -b && vite build → dist/
```

← → 翻页 · F 全屏 · V 开摄像头 · `?page=N` 直达某页。

**共 26 张。** 2026-08-02 在 SoT 六步教学链上增加 OPC Founder OS 发放层：先看 15 周每周 Skill 路线，现场领取 W1 `opc-founder-os + opc-w1-business-sot`，并用 `drafted → executed → verified` 区分生成、真实执行和课程过关。两个案例均为课堂模拟，不冒充真实公司成绩。实际页序以 `src/App.tsx` 为准。

## 内容来源与教学顺序

| Slide | 内容 | 来源 |
|---|---|---|
| 01 封面 / 02 过关线 | 课程定位与本节产出 | `../../ai-solo-founder-bootcamp/W1_RUNSHEET.md` §0 |
| **04 15 周路线全景** | 4 Phase × 15 周每周短名 + 嘉宾星光（Stan / Ray / CPA） | `../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md` Phase 1-4 各周条目 + 「嘉宾星光」段 |
| **04b 产品验证路径** | Idea → PoC → MVP → Paid Evidence → PMF → Scale，并映射 W1/W3/W4/W7/W8-W11 | 同上 W1/W3/W4/W7/W8-W11；第一笔付费明确作为 evidence，不等同于 PMF |
| **04c 每周 Founder Skills** | W1–W15 每周发一枚 Skill，由 Founder OS 读取前一周证据继续推进 | `../../ai-solo-founder-bootcamp/OPC_SKILLS_DELIVERY.md` |
| **05 四个 Phase 出关物** | Phase / 周 / 在干什么 / 出关物 | 同上「全课总览」表 + 每个 Phase 标题下的 blockquote 定位句 |
| **06 时间投入** | 约 94h ≈ 每周 6h（现场 45h + 自学 42.4h + Lab 6.2h） | `../../ai-solo-founder-bootcamp/public/outline.json` 逐节 `duration` 汇总（见下方核算） |
| **07 合规时间线** | 现在准备资料 → W7 收第一笔钱 → W13 才系统讲结构与税务 | `outline.json` 的 L01（ABN 预备）/ L26 + L27（W7 收款 + 5 份法律文件）/ L45 + L46（W13 结构 · 税务 · RDTI · ABN·TFN·GST·BAS） |
| **09 每节课怎么上** | 前段输入与示范 → 中段 30min 进展分享与交流 → 后段动手与 review → 收尾验收与下一步；W1 也执行 | Lightman 2026-08-01 最新确认 + `COURSE_REDESIGN.md`「课程结构」固定节奏 |
| 10 三条路决策对照 | VC Startup / 传统创业 / OPC 一人公司；先验证付费，再决定是否融资 | `W1_RUNSHEET.md` §3「14:05–14:20」7 行表 + `../../ai-solo-founder-bootcamp/public/session-deck.html#6` 叙事参考 |
| 10 为什么需要 SoT | 同一句模糊想法在人、AI 与下周决策中分叉 | `W1_RUNSHEET.md` §0–1 |
| 11 SoT 定义 | 当前唯一有效的共同说明；事实、假设、边界、验证标准只认这一页 | 同上 §1 |
| 12 SoT 七字段 | 七字段因果链 + 坏例子 / 可执行写法 | 同上 §1 |
| 13 模拟案例 A | AI 月末资料准备服务，讲师逐字段带拆 | 同上 §4；课堂合成场景，无外部事实声明 |
| 14–15 模拟案例 B | 物业维修工单助手；先小组补四个关键字段，再对答案 | 同上 §4；课堂合成场景，无外部事实声明 |
| 16 迁移四把尺子 | 客户、现有代价、AI / 人边界、6 周证据 | 同上 §4 |
| 17–18 Founder Exchange / 讲师 review | 同伴复述、记录有效反馈、讲师只改最关键一处 | 同上 §5、§7 |
| 19–21 最小 AI OS | 工作空间 + SoT；领取 W1 Skill，先复述与查假设，再三选一完成真实任务 | 同上 §6 + `../../ai-solo-founder-bootcamp/skills/opc-w1-business-sot/SKILL.md` |
| **21b 证据状态** | `drafted → executed → verified`；生成不等于执行，执行不等于过关 | `../../ai-solo-founder-bootcamp/skills/opc-founder-os/references/evidence-policy.md` |
| 22–23 派下周动作 / 收尾 | 新证据 → 更新 SoT → 重跑同一任务；按三项过关线验收 | 同上 §0、§7 |

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

- 案例 A / B 必须始终称为“课堂模拟 / 合成场景”；里面的访谈数、试点数和收费方式是待验证目标，不是成绩。
- 不提任何人的族裔，不把合成场景包装成真实澳洲公司。
- 不要求现场接 Gmail / Calendar / Drive / Notion；不上传客户、邮箱、合同、财务或身份资料。
- AI OS 的现场验收只看一件真实任务是否基于 SoT 完成并被人工纠错，不看连接器或任务数量。

### 🚨 P07「合规时间线」专属红线

本页碰到公司结构和税务，**定位是时间提醒，不是法律 / 税务意见**：

- **P07 底部免责声明不许删**。
- **不许在 slide 或口头上说「澳洲法律规定…」**、不许引具体法条、不许给「这样做就没事」的结论。
- 学员问「那我这种情况到底行不行」→ 标准回答：**我不能替你判断，去问雇佣法律师 / 注册移民代理 / 持牌 CPA。**
- P07 必须讲到那个 **6 周错位**：W7 就要收钱、W13 才系统讲结构与税务；**想在 W7 之前注册的人别等课程，自己去问 CPA**。

## 版式

- 1600×900 固定画布，`FitBox`（`src/components/DeckTable.tsx`）在内容超高时自动等比缩，投屏不裁切。**新增页面同样走 `Body`（内含 FitBox）。**
- 表格是本 deck 的主角，统一走 `DeckTable`；案例页统一走 `CaseSlide` 的五段版式。
- Phase 配色贯穿 P04 / P05：Phase 1 `#FFE9E4` · Phase 2 `#DCEBFF` · Phase 3 `#D9F2E4` · Phase 4 `#EDE9FE`。
- 收尾页用暖底不用深底 —— SlideEngine 固定挂深色版 `logo-zh-full.svg`，深底会把 logo 糊掉。
