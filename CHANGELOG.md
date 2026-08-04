# Changelog

## 2026-08-02

- 完成 AI 一人创业营 L05–L07 正式学生学习资料并发布生产：L05 覆盖 Agent 选型、最小权限、JD、排程、时区、失败测试、审计与撤权；L06 覆盖公开小样本、来源日志、调研矩阵、市场假设和人工纠错；L07 用合成数据实现四段 Prompt 链并明确互动 Lab 尚未上线；将学生 Skill 更名、扩充并发布为 `opc-agent-team`（`ai-solo-founder-bootcamp` / `lessons/ai-solo-founder-w1`）

- 完成 AI 一人创业营 L02–L04 正式学生学习资料：L02 覆盖 Business SoT 七字段、三组明确标注的合成案例、Founder Exchange、真实任务与纠错；L03 覆盖单连接器最小权限实验、故障测试与撤权；L04 覆盖证据分级、Mom Test、SoT 版本化及同任务 before/after；三节均已发布并完成生产精确回读（`ai-solo-founder-bootcamp`）

- 完成 AI 一人创业营 L01「开课前准备」正式学生学习资料：以 4,415 字覆盖 Founder Fit、订阅与 API 区分、密钥安全、ABN 资格和材料准备、五条问题机会、A/B/C 身份、案例、排错与验收；将学生 Skill 重命名为 `opc-founder-fit`，发布 ZIP 并绑定生产课时（`ai-solo-founder-bootcamp`）

- 将 `OPC Founder OS + Business SoT` ZIP 作为生产课时材料绑定到「搭起你的 CEO AI OS」学生学习页，包内新增中文安装说明，并在正式学习内容补齐下载、启动与验收步骤（`ai-solo-founder-bootcamp`）

- 重命名学生可见的 `opc-w1-business-sot` 为能力导向的 `opc-business-sot`，同步 Founder OS 路由、发包工具、教案和课件启动词；周次仅保留在讲师排期（`ai-solo-founder-bootcamp` / `lessons/ai-solo-founder-w1`）

- 更新 OPC W1 Business SoT：下载并锁定三套 MIT 创业 Skill 仓库作本地参考，将 JTBD、Mom Test、现有替代与证据暂停机制课程化，并明确 W1 只验证 SoT 可用、W3 才验证真实需求（`ai-solo-founder-bootcamp` / `lessons/ai-solo-founder-w1`）

- 重做 AI Engineer 国内版为独立中国产品线：课程更名「AI 应用开发工程师训练营」（对齐国内 JD 高频岗位名），主线项目由未验证的 `Dispatch AI` 换成自建「匠答 AI」电商智能客服工单系统（81 处场景改写：调度/派单 → 客服工单分诊），薪资改双轨口径（主流 25-40K/月 + 大厂年包 40-90 万·标注校招口径），排期从已过期的 2026-07-13 修正为 2026-10-12 开课（`ai-engineer-cn`）
- 新增 `ai-engineer-cn/SALARY_GROUND_TRUTH.md`：薪资数字唯一出处，区分可信来源（V2EX 真实招聘帖 / 代码随想录 2026 校招真实 offer）与不采信的培训机构宣传口径（「1-3 年 45-65K」等与真实 JD 矛盾的数字），并清除原静态页中查无实据的「投中网」出处（`ai-engineer-cn`）
- 新增 `ai-engineer-cn/PERSONAS.md` 初稿：3 个 persona，逐字段标注 GT 强度（当前覆盖率约 25%，未达销售页 50% 门槛），附 GT 采集清单（`ai-engineer-cn`）
- 将 `ai-engineer-cn/generate.ps1` 移植为 `generate.py` 并删除原 PowerShell 版：原脚本在 macOS 上无法运行（团队主力 mac），等于两个静态页无人能重新生成；逻辑 1:1 翻译、CSS 逐字保留（`ai-engineer-cn`）
- 新增 OPC Founder OS 与 W0–W15 共 16 个每周学员 Skills，统一 founder workspace、drafted/executed/verified 证据状态、逐周 ZIP + SHA-256 发放工具；W1 deck 增加每周 Skill 路线、本周启用和证据闸门 3 页（`ai-solo-founder-bootcamp/skills` / `lessons/ai-solo-founder-w1`）

## 2026-07-29

- 新增 W8 周中线上 workshop「AI 视频实操陪跑」(L32a, 90min)：先定用途(观众/平台/时长/尺寸)再动手，全程跑学员自己的素材导出至少一条可直接发布的成片，含六个必踩卡点现场诊断(跨镜头角色不一致/口型/字幕被 UI 挡/时长超限/导出尺寸被裁/音乐授权)与成本产能账；同步 `outline.json` 与 `public/phase2.html`（`ai-solo-founder-bootcamp`）
- 新增 W8 线上 workshop「小红书图文诊断室」(L33a, 90min, Lightman 主讲)：诊断图文笔记发不出去(审核/限流/降权)与没推荐量(曝光→点击→读完→互动四层定位)，复用匠人新媒体内部的违禁词+AI味检测与九维度打分表；同步更新 `outline.json` 与 `public/phase2.html`（`ai-solo-founder-bootcamp`）
- W1 新增「②′ 讲师现场 review」环节(15min)：挑 3 份学员当场写的 SoT 逐字改，补上原来只有同桌互念、没有讲师判断的缺口；时间由「AI OS 选型」30→15min 腾出，全天仍 17:00 结束（`ai-solo-founder-bootcamp`）
- 更正 W2 资料包 DeepRouter 结论：正确域名为 `deeprouter.co`，站点在线且自助注册开放，原基于 `deeprouter.ai` 的「Launching Soon / 注册不到」结论作废（`ai-solo-founder-bootcamp`）
- 补齐 W1 澳洲本地案例至 10 个 + 中文侧搜寻结论，排除 1 个匿名卖课来源（`ai-solo-founder-bootcamp`）

## 2026-07-22

- 新增 CCAR-F 90 秒 YouTube 干货型横屏视频：用原创退款场景讲解 prompt、PreToolUse 与重试的架构判断，复用真实题库和双模式模考录屏，补齐 Amy 配音、字幕、逐字稿、封面、联系表及发布规格验收（`cca-f-cert-pack/video-ad-remotion-15s`）

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
