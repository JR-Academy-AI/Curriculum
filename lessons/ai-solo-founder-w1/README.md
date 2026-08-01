# W1 · Find a Problem Worth Solving —— 网页版讲课 deck

AI 一人创业营 W1 正课投屏用（周日 14:00–17:00，3h）。从 `curriculum/lessons/_template` 拷出来，引擎文件（`SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts`）逐字保留。

```bash
bun install
bun run dev      # http://localhost:5173/
bun run build    # tsc -b && vite build → dist/
```

← → 翻页 · F 全屏 · V 开摄像头 · `?page=N` 直达某页。

**共 38 张。** 第一节课主线是“从我想做点什么，到有人愿意付钱”，英文为 *Find a Problem Worth Solving*。第 4 页拆七个常见创业误区，第 5 页用 Canva / Fusion Books 与 DoorDash / PaloAltoDelivery 的一手来源说明 Problem First；第 6–9 页用熟悉行业、反复痛点、人工流程和已有付费四个入口完成 Opportunity Scan；第 10–11 页同时保留通用生意验证路径和产品验证路径。第 16–21 页解释 Opportunity Card 为什么要成为 SoT，并完成现场判断题；第 22–24 页写六字段创业机会卡和 5 / 3 / 3 / 付费意愿验证承诺。AI OS 留在后段，只帮助准备验证任务，不替代真人证据。第一周不冒充已经完成市场验证，两个练习案例均为课堂模拟。实际页序以 `src/App.tsx` 为准。

## 内容来源与教学顺序

| Slide | 内容 | 来源 |
|---|---|---|
| 01 封面 / 02 过关线 | 课程定位与本节产出 | `../../ai-solo-founder-bootcamp/W1_RUNSHEET.md` §0 |
| **03 三种经营方式** | 融资型创业 / 传统生意 / 小团队或一人公司；产品、服务与现有业务都可使用课程方法 | `W1_RUNSHEET.md` §3 + `../../ai-solo-founder-bootcamp/public/session-deck.html#6` 叙事参考 |
| **04 创业误区** | 先产品后用户、AI 即创新、先做平台、用户太宽、兴趣冒充需求、未访谈先写代码、上线自然有人用 | `W1_RUNSHEET.md` §1 |
| **05 两个真实起点** | Canva 前身 Fusion Books；DoorDash 前身 PaloAltoDelivery.com | Canva Newsroom 创始人回顾；DoorDash 2024 Q4 股东信 |
| **06–09 创业机会四入口** | 熟悉行业、反复痛点、人工流程、已有付费；现场 Opportunity Scan 圈出一个候选问题 | `W1_RUNSHEET.md` §2 |
| **10 生意验证路径** | 客户与场景 → 真实问题 → 最小交付 → 付费证据 → 复购与推荐 → Scale | `COURSE_REDESIGN.md` + *The Founder's Playbook*, pp. 9, 16 |
| **11 产品验证路径** | Idea → PoC → MVP → Paid Evidence → PMF → Scale | 用户指定产品验证图；W7 付费为目标，不是保证 |
| **12–14 课程路线** | 15 周路线、四个 Phase 出关物、每周 Founder Skills | `COURSE_REDESIGN.md` + skills 目录 |
| **15 Founder Exchange** | 学生中段互相分享真实生意、卡点和下一步 | `COURSE_REDESIGN.md` 固定节奏 |
| **16–21 Opportunity Card → SoT** | 解释机会卡为什么是 SoT v0.1、如何管理任务与版本，并用四题验收理解 | `W1_RUNSHEET.md` §3–4 |
| **22–24 Opportunity Card 写作** | 六个字段、问题/方案句式、5 人/3 案例/3 竞品/付费意愿承诺 | `W1_RUNSHEET.md` §3 |
| **25–27 两个模拟案例** | 会计服务经营改造 + 物业维修机会卡练习与答案 | `W1_RUNSHEET.md` §7；课堂合成场景 |
| **28–30 迁移与互评** | 把机会卡用于自己的方向；每次只改一个最影响验证的问题 | `W1_RUNSHEET.md` §8、§10 |
| **31–35 AI 辅助验证** | 载入机会卡、领取 Skill、准备访谈/竞品/触达任务并区分状态 | `W1_RUNSHEET.md` §9 |
| **36–38 收尾** | 下周动作、94h 时间投入、机会卡过关线 | `outline.json` + `W1_RUNSHEET.md` §10 |

### P37 的 94 小时怎么算出来的（可复核）

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
- AI 只能帮助准备访谈、竞品研究和触达草稿，不能替学员生成“用户证据”。
- JTBD / Mom Test 只作为方法来源；客户没说过的话不能由 AI 补写，W1 的 `verified` 不得讲成“idea validated”。

## 版式

- 1600×900 固定画布，`FitBox`（`src/components/DeckTable.tsx`）在内容超高时自动等比缩，投屏不裁切。**新增页面同样走 `Body`（内含 FitBox）。**
- 表格是本 deck 的主角，统一走 `DeckTable`；案例页统一走 `CaseSlide` 的五段版式。
- Phase 配色贯穿 P04 / P05：Phase 1 `#FFE9E4` · Phase 2 `#DCEBFF` · Phase 3 `#D9F2E4` · Phase 4 `#EDE9FE`。
- 收尾页用暖底不用深底 —— SlideEngine 固定挂深色版 `logo-zh-full.svg`，深底会把 logo 糊掉。
