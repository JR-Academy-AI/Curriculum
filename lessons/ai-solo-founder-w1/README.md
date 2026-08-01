# W1 · 搭起你的 CEO AI OS —— 网页版讲课 deck

AI 一人创业营 W1 正课投屏用（周日 14:00–17:00，3h）。从 `curriculum/lessons/_template` 拷出来，引擎文件（`SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts`）逐字保留。

```bash
bun install
bun run dev      # http://localhost:5173/
bun run build    # tsc -b && vite build → dist/
```

← → 翻页 · F 全屏 · V 开摄像头 · `?page=N` 直达某页。

**共 30 张。** 第 3 页先说明产品、服务、传统生意与小团队都可使用这套方法；第 4 页给所有生意通用的验证路径，第 5 页保留产品型项目专用的 Idea → PoC → MVP → 付费证据 → PMF → Scale 路径；第 6–8 页依次给出 15 周路线、阶段产出和每周 Skills；第 9 页是学生主导的 Founder Exchange。第 10–16 页循序讲清 SoT 为什么重要、如何管理项目、每周怎样更新，并用四道现场题检查理解；第 17 页起写自己的 SoT、练案例并完成真实任务。94 小时时间投入移到第 29 页，不再打断第一节课主线。第一周不冒充已经完成市场验证，两个案例均为课堂模拟。实际页序以 `src/App.tsx` 为准。

## 内容来源与教学顺序

| Slide | 内容 | 来源 |
|---|---|---|
| 01 封面 / 02 过关线 | 课程定位与本节产出 | `../../ai-solo-founder-bootcamp/W1_RUNSHEET.md` §0 |
| **03 三种经营方式** | 融资型创业 / 传统生意 / 小团队或一人公司；产品、服务与现有业务都可使用课程方法 | `W1_RUNSHEET.md` §3 + `../../ai-solo-founder-bootcamp/public/session-deck.html#6` 叙事参考 |
| **04 生意验证路径** | 客户与场景 → 真实问题 → 最小交付 → 付费证据 → 复购与推荐 → Scale | `COURSE_REDESIGN.md` W1/W3/W4/W7/W8-W11；方法参考 Claude / Anthropic, *The Founder's Playbook*, pp. 9, 16 |
| **05 产品验证路径** | Idea → PoC → MVP → Paid Evidence → PMF → Scale；只给产品型项目使用，PoC 用于验证技术可行性 | 用户指定产品验证图；W7 付费为阶段目标，不是结果保证 |
| **06 15 周路线全景** | 4 Phase × 15 周；每周均为学生可读的标题 + 一句具体行动，不展示讲师或嘉宾姓名 | `../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md` Phase 1-4 各周条目 |
| **07 四个 Phase 出关物** | Phase / 周 / 在干什么 / 出关物 | 同上「全课总览」表 + 每个 Phase 标题下的 blockquote 定位句 |
| **08 每周 Founder Skills** | 逐周展示真实 Skill 名及可完成的具体结果；Founder OS 读取前一周证据继续推进 | `../../ai-solo-founder-bootcamp/skills/opc-business-sot/SKILL.md` + `../../ai-solo-founder-bootcamp/skills/opc-w2-agent-team/SKILL.md` 至 `opc-w15-graduation-auditor/SKILL.md` |
| **09 Founder Exchange** | 课程中段的 30 分钟由学生自己讲：说清真实生意、当前卡点和下一步；同学负责追问、分享经验或介绍资源 | Lightman 2026-08-01 最新确认 + `COURSE_REDESIGN.md`「课程结构」固定节奏 |
| 10–11 为什么需要 SoT / SoT 定义 | 模糊想法为什么会分叉；SoT 是这门生意当前唯一算数的一页说明书 | `W1_RUNSHEET.md` §0–1 |
| **12–13 SoT 管项目 / 每周闭环** | SoT 驱动优先级、任务、AI 输出、证据与版本更新 | 同上 §1「项目管理作用 / 每周闭环」 |
| **14–15 现场测试 / 答案** | 4 个产品、服务与传统生意情境，判断什么时候应更新 SoT | 同上 §1「现场理解测试」 |
| 16 SoT 七个普通问题 | 服务谁 → 麻烦是什么 → 现在怎么处理 → 先交付什么 → 人机分工 → 下周验证 → 暂时不做 | 同上 §1 + `opc-business-sot/references/method-adaptation.md` |
| 17 模拟案例 A | 现有会计服务的经营改造；AI 只作为内部整理工具 | 同上 §4；课堂合成场景，无外部事实声明 |
| 18–19 模拟案例 B | 物业维修工单助手；先小组补四个关键字段，再对答案 | 同上 §4；课堂合成场景，无外部事实声明 |
| 20–22 迁移 / 同桌互评 / 现场拆解 | 把七个问题用于自己的方向，讲师只改最影响下一步的一处 | 同上 §4、§5、§7 |
| 23–27 最小 AI OS / 真实任务 / 证据状态 | 载入 SoT，领取 Skill，完成一项真实任务并区分生成、执行、验收 | 同上 §6 + `../../ai-solo-founder-bootcamp/skills/opc-business-sot/SKILL.md` |
| 28 下周动作 / 29 时间投入 / 30 收尾 | 更新 SoT 后重跑任务；说明约 94h 投入；按三项过关线验收 | `outline.json` duration 汇总 + `W1_RUNSHEET.md` §7 |

### P29 的 94 小时怎么算出来的（可复核）

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
- JTBD / Mom Test 只作为方法来源；客户没说过的话不能由 AI 补写，W1 的 `verified` 不得讲成“idea validated”。

## 版式

- 1600×900 固定画布，`FitBox`（`src/components/DeckTable.tsx`）在内容超高时自动等比缩，投屏不裁切。**新增页面同样走 `Body`（内含 FitBox）。**
- 表格是本 deck 的主角，统一走 `DeckTable`；案例页统一走 `CaseSlide` 的五段版式。
- Phase 配色贯穿 P04 / P05：Phase 1 `#FFE9E4` · Phase 2 `#DCEBFF` · Phase 3 `#D9F2E4` · Phase 4 `#EDE9FE`。
- 收尾页用暖底不用深底 —— SlideEngine 固定挂深色版 `logo-zh-full.svg`，深底会把 logo 糊掉。
