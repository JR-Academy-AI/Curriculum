# Changelog

## 2026-08-21

- 新增 `opc-offer-mvp`、`opc-shipping-review`、`opc-first-dollar`、`opc-customer-acquisition` 四个学生 Skill 与共享 Founder OS，生成中文安装包并绑定生产课程附件（`ai-solo-founder-bootcamp`）

## 2026-08-08

- 新增 AI 一人创业营 W2《你的 AI 员工上岗 · Agents at Work》网页版讲课 deck：35 张 React SlideEngine slide，沿用 W1 的引擎与 Register B 视觉。主线是把 W1 的「懂你的秘书」升级成「替你干活的员工」——四条 agent 路线现场选型（Hermes / 龙虾 OpenClaw / Codex / Claude Code，只对照定位与适用场景，价格与系统要求标注以官方页面为准）、装机四检查点、五类权限的授权边界与审计要求、敏感行业本地路径与数据红线、agent 工作说明书（JD）五段写法与合成示范、JD 与 SoT 的分工（agent 读 SoT 不改 SoT）、中段 30 分钟 Founder Exchange 与 W2 首次组队及半页组内契约、Agent Schedule 五段结构与五个案例（竞品监控 `0 7 * * *` / SEO 周报 `0 9 * * 1` / 财务月报 `0 8 1 * *` / 周报 `0 18 * * 0` / git 日报 `0 22 * * *`）、cron 速查、跨平台定时机制「关机还跑不跑」对照、五个失败模式兜底、责任边界、agent 产出不等于市场证据、Mom Test 访谈口径与本周作业。新增 `ScheduleCase.tsx` 模板 + `data/schedules.ts` 承载五个同构案例页；配 `PRD.md`（含 180 分钟节奏表、逐页 spec、红线自查与 5 条上台前未决项）与 `README.md`。按 `HANDOVER_DECKS.md` §4.1 把中段 30 分钟交流排进时间表（outline 六个 step 一个不删，各压缩 5–10 分钟腾出）。已登记进 `lessons.html` 并接入 `deploy.yml` 的独立构建与 Assemble 路径（`lessons/ai-solo-founder-w2`、`lessons.html`、`.github/workflows/deploy.yml`）

## 2026-08-02

- 扩展 AI 一人创业营 W1 的 Founder Club 前置说明：在 15 周路线页直接列出 W14 融资准备、W15 Traction / Investor 双 Track、毕业后 Intro Desk 与 30 / 60 / 90 天持续运营；新增学院与 Founder Club 分工、双 Track 进入条件、Intro Desk 六步流程及边界页，以及 Salon、Mastermind、Office Hour、互为客户市场和毕业后行动表页，deck 更新为 45 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 统一 AI 一人创业营 W1 课程全景中的 W11 正式名称为“Growth Hacking · 增长黑客”，并按 PR #64 补清 AARRR 最大漏水环、推荐循环与一次 10 渠道 launch 的 Phase 2 收官动作（`lessons/ai-solo-founder-w1`）
- 重做 AI 一人创业营 W1 的 Sponsorship SoT 案例左侧：用拟真 Google Drive 路径、搜索框、Word 文档、Excel 表格与图表、PPT 图表缩略图和六份互相冲突的 final 版本，替代纯文件名列表，让版本灾难与右侧唯一当前 SoT 的对比一眼可见（`lessons/ai-solo-founder-w1`）
- 新增 AI 一人创业营 W1 前置“创业营为什么存在”页：明确有无 Idea 都从行动开始、第一周建立公开内容窗口、每周中段互评与真实支持，并把“课程期间真实业务收入覆盖并争取超过学费”写成经营目标而非收益保证；同步把 Phase 2 纠正为 Go To Market，把 AI 视频实操陪跑与小红书图文诊断室分别呈现为独立 90 分钟线上课，补入英文媒体 / Podcast / Founder feature 外联；把 Phase 4 统一为 Founder Club，新增资金形式、投资材料、Data Room、企业实体、股权、IP、合同与治理准备页，并明确专业建议边界（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 增加 AI 一人创业营 W1 的 Beachhead Market 教学：依据 MIT Sloan / Bill Aulet 的 Disciplined Entrepreneurship 框架，把“第一个用户”纠正为一群购买方式、价值判断与口碑网络相近的首个切入市场；同时把 LLM / SoT 页改成大型活动 Sponsorship Deck 的 Google Drive final-final 版本灾难案例，讲清价格、权益、名额、Logo 与联系人只应从当前 SoT 生成（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 调整 AI 一人创业营 W1 叙事顺序：把原本位于课尾的 15 周路线、阶段成果、每周 Skills 与时间投入四页整体移到封面和本节目标之后，让试听学员先看清完整课程安排，再进入创业、SoT 与个人 AI OS 主线（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 扩展 AI 一人创业营 W1 的 SoT 教学段：以“到底哪一份算数”建立需求，再拆解 Single / Source / Truth 三个承诺，新增 LLM 上下文冲突解释，并把 SoT 的客户问题、竞品流程、初步交付、验证动作、证据与版本边界分别映射到对应 AI Skill，让试听学员看到后续 15 周的能力增长路径（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重做 AI 一人创业营 W1 第 11 页三道硬门槛：以 NOT YET 决策面板和 USER / MONEY / SPEED 三个连续闸门替代横向说明条，补清每道门的可观察过关标准与不过关后的缩小动作（`lessons/ai-solo-founder-w1`）
- 重做 AI 一人创业营 W1 第 9 页 Opportunity Scan：改为“本人提供真实经历 → AI 只追问事实 → 留下 3 个可验证问题”的单向扫描构图，明确 AI 不得发明用户、数据、痛点或付费意愿，并按 4 / 7 / 4 分钟完成课堂练习（`lessons/ai-solo-founder-w1`）
- 重构 AI 一人创业营 W1 为“搭起你的创业 AI OS”：将课程主线调整为理解创业价值交换、建立 Business SoT v0.1、搭建 Founder Workspace 并跑通 Weekly Skill 与 Human Review；Opportunity Card 提前到 SoT 之前，新增 SoT 管理层、个人 AI OS 四层结构、装修服务案例、数据与责任边界，统一 5/3/3/付费证据作业口径，课程全景移入附录，deck 更新为 40 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 新增 AI 一人创业营 W1 的 30 分钟机会筛选模型：三个候选机会按痛点、频率、付费、触达、创始人优势、AI 杠杆与 MVP 可实现性评分，再用三个一票否决圈定本周验证方向，deck 更新为 42 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 新增 AI 一人创业营 W1 的 30 分钟“创业机会从哪里来”模块：从熟悉行业、反复痛点、人工流程和已有付费四个入口寻找候选问题，并用 Opportunity Scan 圈出一个进入机会卡，deck 更新为 38 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重构 AI 一人创业营 W1 为《Find a Problem Worth Solving》：新增七个创业误区、Canva 与 DoorDash 一手来源案例、六字段 Opportunity Card、问题与方案句式及 5 / 3 / 3 / 付费意愿验证承诺；把机会卡定义为 SoT v0.1，并将 AI OS 降为验证辅助工具，deck 更新为 34 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 恢复 AI 一人创业营 W1 的产品验证路径图，作为独立页面与通用生意验证路径并存，讲清 Idea → PoC → MVP → 付费证据 → PMF → Scale，并将 deck 更新为 30 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重做 AI 一人创业营 W1 为 29 页学生讲课版：覆盖产品、公司、专业服务与传统生意，补齐 15 周逐周 Skills、生意验证路径、SoT 项目管理闭环与 4 道现场理解题；删除内部讲师话术，时间投入移到课尾，并把案例 A 改为现有会计服务的经营改造（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）

## 2026-07-30

- 把 Vibe Coding 大师课第六节《Agent》从 130 分钟动手工作坊改版为 **90 分钟诊断课**（Rick：实操时间不够，主要讲会遇到的问题、怎么定位、怎么改）。主干重构为诊断链「① 会遇到的问题 → ② 怎么定位 → ③ 怎么改」：五条跑偏机制从中段素材升格为主干；新增 `L6P02_TodayMap`（三段地图）、`L6P10_FiveDeaths`（五条机制总览）、`L6P16_ThreeQuestions`（定位三问）、`L6P17_LookupTable`（症状 → 机制反查表，学员带走）、`L6P18_ABDemo`（A/B 预录对照，替代原课上实跑）、`L6P19_DiagnosisDrill`（10 分钟诊断单练习，替代长任务实操）、`L6P20_FixOverview`（机制 → 处方一一对应）、`L6P25_FixWriteToDisk`（落盘处方）、`L6P26_FixInterrupt`（打断，合并原两页）；删除 `L6P13_HandsOnA`（后台跑长任务）、`L6P09_ThreeBeatsOfTasking`（被处方段吸收）、原 `L6P22_ABDiagnosis`；交付单/计划先行/可执行验证三页重构为「处方」定位并按新编号重排。deck 24 页 → 28 页，蓝图升 v0.2（含 v0.1→v0.2 改版对照表），RUNSHEET 按新结构全篇重写（含分钟级节奏、逐段讲稿、救场表），同步更新 `lessons.html` 卡片（`lessons/vibe-coding-master-l6`、`lessons/VIBE_CODING_MASTER_L6_BLUEPRINT.md`、`lessons.html`）
- 新增 Vibe Coding 大师课第六节《Agent》网页版讲座 deck：24 张 React SlideEngine slide，讲清 Agent = 模型 + 工具 + 循环、循环的四拍与「它每轮重新读一遍 context 再决定」、核心立论「它没有记忆只有 context」（并把前五节所有 SoT 重新解释成 context 治理，作为系列收束页）、交任务三拍（计划 → 执行 → 验证）与铁律「它说完成了不算完成」、五条长任务跑偏机制（context 稀释 / 压缩丢细节 / 错误累积 / 目标漂移 / 进度幻觉，每条配学员认得出的症状）、该打断的三个信号与打断后怎么给新 context，以及 A/B 红灯实验（裸交 vs 任务交付单，过关标准是能指认跑偏机制）；新增 `MechPage.tsx` 作为五条机制页的共用版式；配 `VIBE_CODING_MASTER_L6_BLUEPRINT.md`（内容 SoT）+ `RUNSHEET.md`（含分钟级节奏、十段逐字讲稿、救场降级表），登记到 `lessons.html`（尚未接入 `ai-builder/outline.json`，待 bootcamp-sync；PRD.md 待补）（`lessons/vibe-coding-master-l6`、`lessons.html`）
- 新增 Vibe Coding 大师课第六、七节课程蓝图：L6《Agent —— 原理与驾驭长任务》与 L7《Agent Team —— 从一个 context 到一支队伍》。两节是「诊断 → 解法」关系：L6 诊断出 context 稀释 / 压缩丢细节 / 错误累积，L7 的 context 隔离正好治这三条；系列主线因此走完三步（L1–L5 往 context 里放对的东西 → L6 看懂 context 怎么被消耗 → L7 给 context 分家）。原 L6《从静态到动态 / Auth + Database》蓝图按 Rick 决定保持删除，内容留在 git 历史（`lessons/VIBE_CODING_MASTER_L6_BLUEPRINT.md`、`lessons/VIBE_CODING_MASTER_L7_BLUEPRINT.md`）

## 2026-07-29

- 将 CCAR-F YouTube 封面升级为固定 JR Academy 女性虚拟讲师版本，保留原 `v1` 并在发布 SoT 增加人物母图与身份一致性检查（`cca-f-cert-pack/video-ad-remotion-15s`、`cca-f-cert-pack/public/assets`）

## 2026-07-28

- 新增 CCAR-F 6 分 19 秒 YouTube 完整指南：用 12 个信息场景讲清考试结构、五大领域、16 节课程、30 项能力要求、近 480 道原创题、双模式模考、原创场景题和两周计划；补齐 Amy 配音、真实 Demo Exam 操作、配乐、字幕、逐字稿、image model 封面、联系表与 1080p 母版（`cca-f-cert-pack/video-ad-remotion-15s`、`cca-f-cert-pack/public/assets`）

## 2026-07-24

- 把 Vibe Coding 大师课 L5《Skills》deck 里所有"用本仓库 `.claude/skills/`（`talk-deck`/`xhs-poster`/其余 14 个 Skill）当教材"的例子，全部换成 Anthropic 官方文档（`code.claude.com/docs/en/skills`、`platform.claude.com/.../agent-skills/overview`）原文给出的真实例子：`L5P05_RealSkillTeardown`（summarize-changes/pdf-processing 的 frontmatter）、`L5P06_SkillMdStructure`（fix-issue + argument-hint、pdf-processing 的真实目录树）、`L5P09_MetaExample`（原"这套课的 deck 就是 talk-deck 做的"改为官方真实功能 `/run-skill-generator`——专门生成别的 Skill 的 Skill）、`L5P16_SkillLibraryGrows`（原本仓库 14 个 Skill 列表改为 Claude Code 9 个真实 bundled skill + 官方开源 `github.com/anthropics/skills` 仓库 + 插件市场）；同步重写 PRD.md 核心教学决策/数据纪律、RUNSHEET.md 全篇讲稿与 附一、`lessons.html` 卡片描述，课程内容与本课程仓库解耦（`lessons/vibe-coding-master-l5`、`lessons.html`）

- 给 Vibe Coding 大师课 L5《Skills》deck 的 `L5P06_SkillMdStructure` 把「支持文件」从笼统的"模板/脚本"拆成官方三类（Instructions 参考文档 / Code 脚本，代码不进 context 只有运行结果进 / Resources 素材模板示例），并补上通用目录树示意（不假称本仓库有真实案例）；RUNSHEET.md 同步展开三类讲法，并新增"有没有 YAML frontmatter，Level 1 token 上限是否一样"的澄清（结论：上限一样，都封顶在官方 1536 字符的 skill 列表预算里，差的是匹配精度不是 token），同步更新 PRD.md 逐页 spec 与数据纪律，并顺带把此前"career-bootcamp 等三个是旧格式"的不准确措辞改成"没写 frontmatter，退到正文首段当 description，是官方支持的合法简化写法"（`lessons/vibe-coding-master-l5`）

- 核对 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 里渐进式披露/Project vs Personal Skill 的讲法与 Anthropic 官方文档（`code.claude.com/docs/en/skills`、`platform.claude.com/.../agent-skills/overview`）一致，补上官方给的精确 token 数字（Level 1 ~100 token/skill、Level 2 <5k token、Level 3 按需 0 token）与来源引用，并如实说明官方其实还有 Enterprise/Plugin 两层（今晚课程只讲对个人/小团队最常用的 Project/Personal 两层）（`lessons/vibe-coding-master-l5/RUNSHEET.md`）
- 给 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 补充 Project Skill（`.claude/skills/`，随项目 git 共享）vs Global/个人 Skill（`~/.claude/skills/`，跟着用户走）的区别与设置方法，讲稿追加到 §4（拆真实 Skill）和 §6（落地前先定位置），并在附一加一条对应降级预案；只改 RUNSHEET.md 讲稿，不涉及 deck slide（`lessons/vibe-coding-master-l5/RUNSHEET.md`）

- 给 Vibe Coding 大师课 L5《Skills》deck 扩展 SKILL.md 组成格式并新增渐进式披露原理页：`L5P06_SkillMdStructure` 补上 `argument-hint`（本仓库 14 个 Skill 里 11 个真实在用）+ 支持文件说明，`L5P06b_ProgressiveDisclosure`（新增）讲三层加载模型（常驻 description / 触发时读正文 / 按需读支持文件）及 Skill 好处（可复用/一致性/高效/团队共享/可版本管理）；deck 由 22 页扩到 23 页，同步更新 `PRD.md`/`RUNSHEET.md`/`lessons.html`，并把 `L5P17b_DomesticAlternatives` 里的模型名同步更正为 Kimi K3（`lessons/vibe-coding-master-l5`、`lessons.html`）
- 给 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 的「附一：现场卡住了怎么降级」从 6 条扩到 14 条，覆盖新增章节（prompt 原理页、国内替代方案）的降级预案，并按优先级给出时间不够时的取舍顺序（`lessons/vibe-coding-master-l5/RUNSHEET.md`）
- 给 Vibe Coding 大师课 L5《Skills》deck 加两页实战向内容：`L5P11b_PromptAnatomy` 逐句拆解投屏 prompt 为什么这样组词（上下文先行/产出形态先定/结构化字段拆开要/检查点前置），`L5P17b_DomesticAlternatives` 讲国内用不了 Claude Code 时的三条退而求其次路线及生态差距；deck 由 20 页扩到 22 页，同步更新 `PRD.md`/`RUNSHEET.md`/`lessons.html`（`lessons/vibe-coding-master-l5`、`lessons.html`）

## 2026-07-22

- 重做 CCAR-F 90 秒 YouTube 缩略图：改用图片模型完成图文一体设计，以陌生观众可直接理解的“Claude 架构师证书”为最大标题，并逐字校验中文与技术词（`cca-f-cert-pack/public/assets`）
- 新增 CCAR-F 90 秒 YouTube 干货型横屏视频：用原创退款场景讲解 prompt、PreToolUse 与重试的架构判断，复用真实题库和双模式模考录屏，补齐 Amy 配音、字幕、逐字稿、封面、联系表及发布规格验收（`cca-f-cert-pack/video-ad-remotion-15s`）
- 新增 Vibe Coding 大师课第五节《Skills》网页版讲座 deck：20 张 React SlideEngine slide，讲清 Skill 是什么、与一次性 prompt/rules 的区别、该不该做成 Skill 的判断线、`description` 触发命门、拆解本仓库真实 `talk-deck`/`xhs-poster` Skill，并带学员动手写一个 Skill、调用、迭代；配 `PRD.md` + `RUNSHEET.md`，登记到 `lessons.html`（尚未接入 `ai-builder/outline.json`，待 bootcamp-sync）（`lessons/vibe-coding-master-l5`、`lessons.html`）

## 2026-07-21

- 发布并绑定 CCDV-F 第 7–10 章重制 Production Release：70/70 张签名缩略图返回图片，140/140 段音频支持 `206 audio/mpeg` 分段播放，课程登记同步改为已发布（`lessons/ccdv-f-{prompt-context-engineering,security-safety,tools-mcps,exam-prep}`、`lessons.html`）
- 重做 CCDV-F 第 7–10 章完整配音：将 140 段旧版 Eleven v3 + 1.18 倍后处理替换为 Amy Multilingual v2、0.92 语速、固定 seed、上下文衔接且保留自然停顿；补齐 70 张同 Release 缩略图，并增加逐文件编码、时长、声线配置和五视口固定画布闸门（`lessons/ccdv-f-{prompt-context-engineering,security-safety,tools-mcps,exam-prep}`）
- 修复 CCDV-F Claude Code 云端固定画布 QA 在切换 Slide 后未等待新增中文字形加载的问题，避免 `settings-precedence` 标题被误判为跨视口重排（`lessons/ccdv-f-claude-code`）
- 修复 CCDV-F 第 2–6 章 Production Manifest 缺少 `thumbnailUrl` 的问题，为 77 张 Slide 接入同 Release 缩略图并增加构建文件存在性闸门（`lessons/ccdv-f-{agents-workflows,applications-integration,claude-code,eval-testing-debugging,model-selection-optimization}`）
- 修复 CCDV-F 第六课第一页权重条的双重边框与标题压线排版，并增加标题和轨道不得重叠的视觉 QA 闸门（`lessons/ccdv-f-model-selection-optimization`）

## 2026-07-20

- 修复 CCDV-F 第五课第 4 页中 429、500、529 HTTP 状态码的逐位数字朗读，并增加单段语音重生成入口 (`lessons/ccdv-f-eval-testing-debugging`)
- 配置 Classroom Deck 发布 Runner 安装 ffmpeg/ffprobe，使配音时长、编码规格与语速闸门在 CI 中可执行（`.github/workflows/publish-classroom-deck.yml`）
- 修复 CCDV-F 第一章配音过快与分段声线漂移：移除 1.18 倍速和全段静音裁剪，改用 Amy Multilingual v2、0.92 速度、固定 seed 与上下文衔接，重生成 41 段 15:34 配音并新增语速/声线配置闸门（`lessons/ccdv-f-exam-overview-pilot`）
- 发布 CCDV-F 十章 React Classroom Production Release 并绑定生产章节，补全线上登记；移除第一章页脚的本地试验标签（`lessons/ccdv-f-*`、`lessons.html`）
- 修复 CCDV-F 第四章 Claude Code 云端 QA 的字体加载竞态，在建立布局基线前等待 `document.fonts.ready`，并在失败时输出具体重排明细（`lessons/ccdv-f-claude-code`）

## 2026-07-19

- 更新 CCDV-F 第六至第十章的课程登记为 UAT Draft 已发布，保持 Production 未绑定（`lessons.html`）
- 新增 CCDV-F 第十章 Exam Prep 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-exam-prep`）
- 新增 CCDV-F 第九章 Tools and MCPs 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-tools-mcps`）
- 新增 CCDV-F 第八章 Security and Safety 的 16 张内容驱动 React Slide、32 段 Amy 配音、16 张缩略图与 Classroom Bridge；完成 16 页 × 5 容器共 80 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-security-safety`）
- 新增 CCDV-F 第七章 Prompt and Context Engineering 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-prompt-context-engineering`）
- 修复 CCDV-F 第六章云端 QA 的字体加载竞态，在建立首个布局基线前等待 `document.fonts.ready`，避免 CI 使用 fallback 字体后切换造成伪 reflow（`lessons/ccdv-f-model-selection-optimization`）
- 新增 CCDV-F 第六章 Model Selection and Optimization 的 18 张内容驱动 React Slide、38 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-model-selection-optimization`）
- 新增 CCDV-F 第五章 Eval, Testing, and Debugging 的 13 张内容驱动 React Slide、28 段 Amy 配音、13 张缩略图与 Classroom Bridge；完成 13 页 × 5 容器共 65 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-eval-testing-debugging`）
- 新增 CCDV-F 第四章 Claude Code 的 12 张内容驱动 React Slide、25 段 Amy 配音、12 张缩略图与 Classroom Bridge；完成 12 页 × 5 容器共 60 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-claude-code`）
- 新增 CCDV-F 第三章 Applications and Integration 的 18 张内容驱动 React Slide、43 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-applications-integration`）
- 新增 CCDV-F 第二章 Agents and Workflows 的 16 张内容驱动 React Slide、39 段 Amy 配音、16 张缩略图与 Classroom Bridge；完成 16 页 × 5 容器共 80 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-agents-workflows`）
- 新增 CCDV-F 第一章 15 张内容驱动 React Slide、41 段 Amy 完整配音、真实 Classroom Bridge 自动翻页和逐段审核播放器，不上传、不绑定生产（`lessons/ccdv-f-exam-overview-pilot`）
- 重做 CCDV-F 第一章视觉为用户确认的 JR Course Studio 演播室语言：暖灰渐变外场、官方 Logo 顶栏、独立圆角白色教学主板、克制硬阴影和内容驱动版式；重生成 15 张缩略图，并通过 15 页 × 5 容器的 75 项固定 16:9 QA（`lessons/ccdv-f-exam-overview-pilot`）
- 修复独立 Classroom Deck CI/CD：把 MP3 上传到按 `deckId/releaseId` 隔离的 UAT/Production 专用音频桶，上传后校验对象数量与 206 Range，并让 narration、音频、缩略图和发布脚本变更都能触发 changed-deck 工作流（`.github/workflows/publish-classroom-deck.yml`）
- 修复 Classroom 发布角色无 `s3:ListBucket` 时的音频发布校验，改为逐个对象验证 `Content-Type` 与不可变缓存头，保持最小权限部署（`.github/workflows/publish-classroom-deck.yml`）

## 2026-07-17

- 更新 CCDV-F 第一张 Classroom Deck 的 UAT 音频地址、发布工作流和 Release Candidate 登记（`lessons/ccdv-f-exam-overview-pilot`）
