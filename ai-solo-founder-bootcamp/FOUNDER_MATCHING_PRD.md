---
title: 创业营 · 上课前创业身份采集(含匹配预留)PRD
status: build
owner: @lightman
priority: high
product: ai-solo-founder-bootcamp
---

# 创业营 · 上课前创业身份采集(含匹配预留)

> 单一真相文档。这是 **AI 一人创业营专属产品机制**,不是通用 LMS 功能——它深度绑定创业营的开课流程、W1 团队成型环节和校友网络。
> 关联:课程重构见 `PHASE1_REDESIGN.md`(待建);后端数据模型挂在 `jr-academy` 真实 schema 上(见下「数据模型」)。

## 0. 定位与分期(必读)

**核心 = 信息收集**。先让每位学员在上课前有一份**结构化、持久的创业身份 profile**;matching / 「谁想创业」发现目录是**之后在 LMS 上叠加的功能**,不是第一步。

| 分期 | 交付 | 时点 |
|---|---|---|
| **P0 · 信息收集(本 PRD 核心)** | Intake 表单 + `FounderProfile` 数据 + 开课 gate + admin 统计看板 | 现在 |
| **P1 · 发现** | 「谁想创业 / 找队友」目录(学员端只读 + 表达兴趣) | 后续 LMS 功能 |
| **P2 · 匹配** | 双边推荐 / 跨期匹配池 / 成团回填 | 更后,需跨期滚够人数才成立 |

> ⚠️ **关键**:P1/P2 虽然后做,但**所有偏好字段(尤其「项目可见性 / 保密」)必须在 P0 信息收集当下就采集并存储**——否则等 P1 上线,这批老 profile 没有保密设置 = 默认裸奔,idea 泄露。见 §5.5。

## 1. 背景 & 问题

创业营面向**在职创业者**(35-50 岁、150-250k 工资、5-15 年职业积累)。报名的人**创业状态天差地别**:

- 有人已经在自己创业、有明确 idea;
- 有人没自己的项目,但想当 co-founder、加入靠谱的创业者;
- 有人还没 idea,先来学、边学边看要不要下场。

现状痛点:
1. **开课时不知道班里是谁** —— 三类人混在一起,W1 无法组队,「没 idea 的人」举着空枪、动机悬空(详见 `PHASE1_REDESIGN.md` 对 flow 的诊断)。
2. **一次性问卷价值流失** —— 就算课前问了,数据落在表格里,课程结束就废,无法跨期复用、无法互相匹配。
3. **创业者 ↔ 加入者供需没打通** —— 「谁需要人」和「谁想加入」是天然的双边市场,但没有数据载体去撮合。

**核心洞察**:把「上课前创业身份采集」做成**挂在注册用户身上的持久结构化字段 + 双边匹配**,一次采集,长期滚动——它既是课程 W1 组队的燃料,又是一个被每期 cohort 不断喂大的**创业者匹配网络**,天然接创业营的 Demo Day / 校友社区 / 互为客户日。

## 2. 目标(可衡量)

- **G1** 每位报名学员在**开课前(W1 之前)必须完成** intake,完成率 = 开课 gate(未填不进 W1)。
- **G2** 开课时 admin 能看到本期 **A/B/C 比例 + 城市分布 + 角色供需缺口**一屏看板。
- **G3** W1 团队成型环节**直接用 intake 数据**:A 类 pitch、B/C 类挑项目加入,当堂组队。
- **G4** 学员端能浏览「找项目 / 找队友」目录并表达兴趣(不直接暴露 PII)。
- **G5** 数据**跨期沉淀**:匹配池随每期变大;可统计 **C→A 转化**(某人从「没 idea」到下一期变 founder)。

## 3. 非目标(Out of scope)

- ❌ 不做全平台通用的社交/交友功能——**仅限创业营及其衍生创业场景**。
- ❌ MVP 不做全自动匹配算法;先「结构化数据 + 排序目录 + 人工撮合」,V2 再上推荐。
- ❌ 不碰薪酬/股权协议本身(法律文件走 W5 自学模块 + AI 律师),本功能只做「意向撮合」。
- ❌ 不改任何已上线 URL 结构(URL stability 铁律)。

## 4. 用户与场景:三类人(A/B/C)

| 类型 | 报名时自述 | 四周里怎么落地 | 匹配角色 |
|---|---|---|---|
| **A · Founder** | 我已在创业 / 有明确 idea,想用 AI 放大 | 锁定自己的项目,四周推进它 | **需求方**:需要人加入 |
| **B · Seeker** | 我想加入创业者、当 co-founder | 匹配进 A 的项目,当团队一员跑 | **供给方**:想加入 |
| **C · Learner** | 我还没 idea,先学、边学边看 | 加入某个团队实操,或跟练 | 供给方 / 观察者(可转 A) |

**匹配单位 = 个人 or 小队**;「同一真实项目」贯穿四周主线,B/C 挂到 A 的项目上,全班每个人都有靶子。

## 5. 核心机制:上课前必填 Intake

**入口**:报名成功后立即引导填写;**开课前 gate**——与 pre-work(装机 + AI 订阅 + ABN 预备)同属课前任务,未完成不解锁 W1。

### 5.1 通用字段(所有人必填)

- **创业身份**(单选,核心分类):A 我已在创业/有 idea · B 我想加入创业者 · C 我还没 idea 先学
- **城市**:Melbourne / Sydney / Brisbane / 其他(线下 hub-and-spoke 匹配用)
- **现职 · 行业 · 职能**(在职创业者画像)
- **工作年限**
- **我能带来的能力/资源**(多选):技术 / 产品 / 营销 / 销售 / 设计 / 财务法务 / 行业资源 / 资金 / 供应链…
- **每周可投入时长**(在职 → 时间是最稀缺资源)
- **AI 订阅选择**(承接 pre-work):Codex·ChatGPT / DeepRouter(接 DeepSeek 等国内模型) / Codex+Claude 双开 / 还没定
- **现有账号情况**:我已有 Claude / Codex 账号吗?(有 Claude / 有 Codex / 都有 / 都没有)
- **账号来源意向**:自己购买 / **用课程提供的 DeepRouter 额度** / 未定 —— 让运营开课前就知道谁要开通,决定统一供给还是自备(见 §13 开放问题)
- **上完这门课我最想拿到的结果**(开放文本)

### 5.2 A 分支(Founder)

- 项目一句话(做什么 · 给谁)
- 阶段:只是念头 / 在做 MVP / 已上线 / 已有收入
- **我需要什么角色加入**(多选角色)
- 我能提供:股权 / 分成 / 实战署名 / 学习机会…
- **是否愿意接收 B/C 加入我的项目**(Y/N)← 关键匹配开关

### 5.3 B 分支(Seeker)

- 我想加入的项目类型 / 行业
- 我的角色定位(tech co-founder / growth / ops / 行业专家…)
- 投入意向:兼职合伙 / 全职意向 / 先合作看看
- 是否愿意先以「项目成员」身份参与四周实操(Y/N)

### 5.4 C 分支(Learner)

- 兴趣方向
- 四周里是否愿意加入一个团队实操(Y/N)
- 期望:纯学习 / 边学边找方向 / 可能转 A 自己下场

### 5.5 项目可见性 & 保密(A 类必选,**P0 信息收集阶段就采集**)

创业者最在意「我的 idea 会不会被公开 / 被抄」。所以**保密偏好在填表当下就采集**,后续任何 LMS 功能(发现目录 / 匹配)都必须尊重它。

- **projectVisibility**(单选,决定项目内容对**其他学员**的可见度):
  - `public` 公开 —— 项目一句话对全体学员可见(build-in-public 派)
  - `match-only` 半公开(**默认**)—— 只露「我在找人 + 需要的角色」,项目具体内容要**双方表达兴趣 + 互相同意**才解锁
  - `stealth` 保密 —— 项目内容**只对 admin 可见**(用于统计 + 人工撮合),不进任何学员可见目录
- **discoverable**(Y/N):即使 `stealth`,是否愿意让「我是 founder / 我在找人」这个**事实**(不含项目内容)出现在「谁想创业」目录
- 无论哪种可见度,**手机 / 微信 / 邮箱等联系方式一律不进目录**,只走站内信(CLAUDE.md PII 红线)。

## 6. 匹配逻辑(P1/P2)

- **双边**:A(愿接收) ←→ B/C(愿加入)。
- **排序信号**:同城优先 → 角色供需吻合(A 缺的角色 = B/C 的定位)→ 行业相关 → 投入时长匹配。
- **展现**:
  - **学员端(web-zh LMS)**:「找项目 / 找队友」目录,卡片展示(**不露手机/微信**),点「表达兴趣」→ 走站内通知 / 班级群引导。
  - **Admin 端(jr-academy-admin)**:本期 intake 看板 + **人工撮合协助**(拖拽组队 / 标记已成团)。
- **W1 现场**:直接用这批数据当堂组队,人工撮合兜底。

## 7. 统计维度(G5)

- 每期 **A/B/C 比例**
- **城市分布**(三城 hub)
- **角色供需缺口**:需求最多的角色 vs 供给最多的角色
- **匹配成功数**:表达兴趣数 / 成团数
- **跨期趋势**:C→A 转化率、B→成团率、匹配池累计规模

## 8. 与创业营的深度集成点(「深度结合」核心)

1. **开课 gate**:intake 与装机 / AI 订阅 / ABN 预备同属 pre-work,W1 前必须完成。
2. **W1 团队成型**:A pitch → B/C join,当堂用 intake 数据组队。
3. **贯穿主线**:匹配单位(个人/小队)绑定「同一真实项目」,四周滚动推进。
4. **喂后续 phase**:Demo Day 组队路演 / 校友网络 / 互为客户日,底层数据都来自这里。
5. **跨期滚动**:匹配池随每期变大,老学员可被新期匹配 → 长成创业者网络(平台资产)。

## 9. 数据模型(ID-First,挂真实 schema)

**新增 collection `FounderProfile`**(一人一份,可更新):

| 字段 | 类型 | 说明 |
|---|---|---|
| `user` | `ObjectId ref User`(必填,唯一) | 挂在注册用户上,持久属性 |
| `program` | `ObjectId ref Program` | 报名的那一期 cohort(**第 N 期 = `Program.programPhase`;课程模板 = `Program.training`**,核实后 cohort 是 Program 不是 Training) |
| `founderType` | enum `'A' \| 'B' \| 'C'` | 创业身份(语义见 §4) |
| `city` | string | 三城 hub 匹配 |
| `background` | embedded | 现职/行业/职能/工作年限 |
| `capabilities` | string[] | 能带来的能力/资源 |
| `weeklyHours` | number | 每周可投入时长 |
| `aiSubscription` | enum | Codex / DeepRouter / Codex+Claude / undecided |
| `hasAccount` | enum | claude / codex / both / none(现有账号情况) |
| `accountSource` | enum | self / deeprouter / undecided(账号来源意向) |
| `goal` | string | 想拿到的结果 |
| `project` | embedded(A 用) | 一句话 / 阶段 / 需要的角色 / 能提供 |
| `projectVisibility` | enum `'public' \| 'match-only' \| 'stealth'` | **默认 `match-only`**;控制项目内容对其他学员可见度(§5.5) |
| `discoverable` | boolean | 是否出现在「谁想创业」目录(不含项目内容) |
| `openToJoiners` | boolean(A) | 是否接收加入 |
| `seeking` | embedded(B/C 用) | 想加入的类型 / 角色定位 / 投入意向 |
| `openToJoin` | boolean(B/C) | 加入意愿 |

- **关联全用 ObjectId ref**(User / Training),不用 slug/key 关联;不给 slug 加 unique。
- **匹配 = 对 `FounderProfile` 的 query**(按 §6 信号排序),不另开表格/spreadsheet。
- **先例**:结构化 intake 参考现有 `TrainingLeads`(name/phone/wechat/city/major/isJRStudent/isITWorked…);用户↔课程关系参考现有 `Enrollment`(`user` + `program[]` 均 ObjectId ref)。
- **是否复用 Enrollment vs 独立 collection**:建议**独立 `FounderProfile`**——因为它需要跨期持久 + 独立于购买记录被匹配 query;Enrollment 是「买了哪些课」的关系表,语义不同。(待技术评审确认。)

## 10. 功能范围:MVP → V2

**P0 · 信息收集(能开课就行,本 PRD 核心)**
- Intake 表单(报名后引导 + 开课前 gate),**含可见性/保密 + 账号情况字段**
- `FounderProfile` schema + CRUD(**保密偏好即使目录未上线也要落库**)
- Admin intake 看板(A/B/C 统计 + 城市/角色供需 + 人工撮合)
- W1 手动组队(admin 拿看板数据当堂撮合)

**P1 · 发现**
- 学员端「谁想创业 / 找队友」只读目录 + 表达兴趣(**严格按 §5.5 可见性过滤**)
- 站内信(联系方式不外露)

**P2 · 匹配**
- 自动匹配推荐
- 跨期匹配池 + C→A 趋势看板
- 匹配成功回填(成团 → Demo Day 分组 → 校友网络)

## 11. 各端改造点

### 11.0 入口(两个,写同一份 FounderProfile)

学员填表有两个入口,**都指向同一份 `FounderProfile`(一人一份,重复进入=更新而非新建)**:

- **入口 A · 独立页面**:专属 URL 的采集表单,报名学员可直接访问(报名成功后引导、或发链接)。可独立于课程 UI 使用。
- **入口 B · 课程 classroom 内按钮**:在创业营的 classroom 学习界面放一个按钮(如「填写/更新我的创业档案」),点击打开同一份采集表单。`GET /founder-profile/me` 返回 null → 按钮显示「填写」;已填 → 显示「更新」。
- 两入口都受同一道 enrollment 闸约束(未报名该期 → 403);表单提交带 `program`(当前课程那一期 cohort)。
- **classroom 内按钮的具体挂载位置由前端 agent 在 web-zh 课程学习界面定位后确定**(不臆断路由)。

### 11.1 各端

| 端 | 改造 |
|---|---|
| `jr-academy`(后端) | ① **公开采集 endpoint** 仿现有 `src/modules/leads/`(`@Public() POST /leads/...` → service → 落 `FounderProfile` 集合),学员填表无需绕鉴权;② **admin 看板接口** 仿 `admin-cms/controllers/admin-lead-kanban.controller.ts` + service,在 `admin-cms.module.ts` 的 controllers/providers 数组注册。注意无全局 `/api/v1` 前缀;批量导出端点按需 `@SkipThrottle()` |
| `jr-academy-admin` | 新增创业营 intake 看板页(A/B/C 统计 + 供需缺口 + 撮合助手):`src/pages/` 加组件 → `App.tsx` 加 `<Route>` → `DashboardLayout.tsx` `menuItems` 加菜单(参考 MarketingTasks);**所有 admin 功能在 admin,不在 web-zh** |
| `jr-academy-web-zh`(前端) | pre-course intake 表单(报名后/开课前必填,接开课 gate,参考现有 `TrainingLeadsModal`)+ 学员端「找项目/找队友」目录(P1);UI 用 styled-components + framer-motion,状态同步 URL query |

## 12. 里程碑

- **M1** `FounderProfile` schema + intake 表单(开课前能填)+ gate 逻辑
- **M2** Admin intake 统计看板
- **M3** 学员端目录 + 表达兴趣
- **M4** 跨期匹配池 + C→A 趋势

## 13. 开放问题 & 待确认

1. **Intake 入口**:嵌进报名流程 vs 开课前独立任务?(建议:报名后立即引导填,开课前 gate 卡关)
2. **匹配单位**:B/C 必须加入团队,还是可选「纯学习」?(影响 §5.4 C 分支)
3. **隐私可见度**:创业身份 / 项目信息 对其他学员可见到什么程度?需勾选同意;**手机/微信/邮箱等 PII 一律走站内信,不在目录直接暴露**(CLAUDE.md PII 红线)。
4. **匹配范围**:只在本期 cohort 内,还是跨期全员池?(MVP 本期内,V2 跨期)
5. **B/C 类定位对齐**:「一人创业营」里出现「想加入别人」的人——统一口径 = AI OS 让一个人也能干一家公司,但组队/找 co-founder 依然是合法选项;B/C 的四周 = 用这段时间决定自己要不要、能不能独立下场。(待 Lightman 拍板终稿)
6. **保密默认值**:`projectVisibility` 默认 `match-only`(保护 idea + 保留匹配可能)还是更保守的 `stealth`?(建议 `match-only`)
7. **账号供给**:课程**统一提供 DeepRouter 额度**给没账号/预算有限的学员,还是一律自备?—— 决定 pre-work「AI 订阅」这步是「引导自购」还是「发课程账号」。建议:DeepRouter 兜底供给(无 TOS 风险 + dogfood 自家产品),充足预算的再自叠 Codex+Claude;**不共享个人 Claude/Codex 账号**(TOS 灰色 + 限流)。

## 14. 衍生 / 关联

- **上游**:`PHASE1_REDESIGN.md`(课程重构,W1 组队机制消费本功能数据)。
- **下游**:Demo Day / 校友网络 / 互为客户日 / `PARTNERSHIP_PROGRAM_PLAN.md`。
- **数据复用**:AI 订阅字段承接 pre-work;可回流 `PERSONAS.md` 校准真实学员画像。
