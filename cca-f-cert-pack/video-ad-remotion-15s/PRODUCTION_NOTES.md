# CCAR-F Product Tour Production Notes

## YouTube 完整指南（6 分 19 秒）

- Composition：`CcarFDeepDive`，1920×1080，30fps。
- 内容：考试定位与形式、五大领域权重、16 节课 / 50 步 / 4 阶段、官方 30 项能力要求、近 480 道原创题、两种模拟考试模式、原创场景题、两周计划。
- 配音：ElevenLabs Amy，`eleven_v3`，`atempo=1.18`，12 段独立生成。
- 配乐：复用已记录授权的 `Aitech`，以人声优先方式低音量混入。
- 成片：6:19.05，H.264 High，1920×1080，AAC-LC 48kHz 双声道。
- 混音：`-13.9 LUFS`，true peak `-1.7 dBTP`，未检测到连续黑屏。
- 母版 SHA-256：`0f1ff822649c59458f375e9f42b43ca73c4010602c271116f2ebcad19857aa08`。
- 真实操作素材：Demo Exam 点击与答题录屏，转码为 H.264 后进入 Remotion。
- 对外名称：先写“Claude 官方架构师认证”，`CCAR-F` 只作为考试代码补充。
- 不展示价格、不承诺保过、不使用官方样题、不拿报名限制做标题。
- 封面：image model 一体化图文，最大文字“Claude 证书”，副标题“到底考什么？”。
- 发布资产：MP4、1280×720 封面、contact sheet、SRT、逐字稿。

## 状态

- 当前包含产品操作篇、内容实力篇两条 30 秒广告、一条 90 秒 YouTube 干货型横屏视频，以及一条 6 分 19 秒 YouTube 完整指南。
- 已本地渲染和验证。
- 尚未提交、推送或发布。

## 最终决策

| 项目 | 定案 |
|---|---|
| 视频类型 | 真实网页操作宣传片，不使用海报轮播冒充操作 |
| 画幅 | 1920×1080，网页题干和侧栏优先可读 |
| 时长 | 30.06 秒 |
| 配音 | ElevenLabs Amy + `eleven_v3` + `atempo=1.18` |
| 题库数字 | 479 道，来自当前网页实值 |
| 主口号 | 成为全球华人首批 Claude 官方认证架构师 |
| 禁止内容 | 价格；“个人报不了名”及同类宣传表达 |

## YouTube 干货篇（90 秒）

这条视频不是把 30 秒广告拉长，而是先交付一个可独立使用的考试判断框架，再展示课程如何训练该能力。

1. 用原创“身份未验证绝对不能退款”场景建立问题。
2. 对比加强 system prompt、PostToolUse 日志、盲目重试和 PreToolUse 前置拒绝。
3. 给出三步判断法：圈出约束 → 判断机制 → 选最简单的有效修复。
4. 区分偏好类 prompt、资金/权限/隐私类代码或 hook、transient error 有限重试。
5. 进入真实题库与两种模拟考试界面，最后用既定主口号收束。

### YouTube 干货篇输出

- `public/assets/ccar-f-90s-youtube-guide-16x9-v1.mp4`
- `public/assets/ccar-f-90s-youtube-guide-16x9-v1-cover.png`
- `public/assets/ccar-f-90s-youtube-guide-16x9-v1-contact-sheet.png`
- `public/assets/ccar-f-90s-youtube-guide-zh-v1.srt`
- `public/assets/ccar-f-90s-youtube-guide-transcript-v1.md`

### YouTube 干货篇验收

- Composition：`CcarFYouTubeGuide`，2700 帧，30fps，90.1 秒。
- 配音：ElevenLabs Amy、`eleven_v3`、`atempo=1.18`；数字人仍只出现 4.3 秒。
- 成片：H.264 High、1920×1080、AAC-LC 48kHz 双声道、Fast Start。
- 混音：`-14.00 LUFS`，true peak `-2.68 dBTP`。
- 发布方式：先以 Unlisted 上传，人工确认 YouTube altered/synthetic disclosure 后再转 Public。

## 内容实力篇

这条广告不重复解释网页怎么操作，重点回答“课程里具体学什么、怎么练”。主口号保持“成为全球华人首批 Claude 官方认证架构师”，随后依次展示：

1. CCAR-F 重点是生产级架构判断，不是参数背诵。
2. 16 节课程覆盖五大官方考试领域，并显示 27% / 20% / 20% / 18% / 15% 权重。
3. 6 类场景题、479 道英文原创题和每个选项的中文精析。
4. 两套 60 题全真模考，支持平台练习模式与 Pearson VUE 风格切换。
5. “报名、学习、刷题、模考，一条路径走到考场”收束行动路径。

### 内容实力篇镜头表

| 帧 | 时间 | 画面 |
|---|---|---|
| 0-104 | 0-3.5s | 主口号 + 官方五域 / 16 节 / 双模式模考 |
| 90-266 | 3-8.9s | Agent Loop、Guardrails、Orchestration、Reliability 架构判断 |
| 252-459 | 8.4-15.3s | 真实课程网页 + 五域权重动画 + 四阶段路径 |
| 445-642 | 14.8-21.4s | 真实 Demo Exam 英文题干 + 479 题计数 + 精析 / 错题复盘 |
| 628-792 | 20.9-26.4s | 两套 60 题模考 + 平台 / Pearson VUE 模式切换 |
| 778-900 | 25.9-30s | 一条路径走到考场 + 课程详情 CTA |

### 内容实力篇配音

- 生成脚本：`scripts/gen-elevenlabs-content-ad-voice.mjs`
- Voice：Amy，`eleven_v3`
- `stability: 0.56`
- `similarity_boost: 0.78`
- `atempo=1.34`
- 成品旁白：29.257 秒

### 内容实力篇输出

- `public/assets/ccar-f-30s-content-power-16x9-v1.mp4`
- `public/assets/ccar-f-30s-content-power-16x9-v1-cover.png`
- `public/assets/ccar-f-30s-content-power-16x9-v1-contact-sheet.png`

### 真人半身数字人版本

- Composition：`CcarFContentAdDigitalHuman`
- 讲师素材：复用已确认的虚构真人讲师 `public/teacher/fictional-instructor-first-line.mp4`
- 素材规格：720×1280、30fps、4.3 秒
- 布局：数字讲师只在开场右侧出现，主口号移到左侧；第 105–128 帧淡出，第 129 帧后不再渲染
- 数字人音频：旧课堂原音轨实际是 Sage，不能与后续 Amy 混用；改为用 ElevenLabs Amy `eleven_v3` 重新生成“欢迎来到 Claude 认证架构师备考课程的第一课”，把有效语音压到原口型活动段约 2.86 秒，再补齐为 4.300 秒
- 后续旁白：从原广告旁白 2.524 秒处切入并以 `atempo=1.045` 压到 25.576 秒，从第 129 帧开始播放，不与数字人口型段重叠
- 配乐：弃用原 `bgm.wav` 噪声音轨，改用 Kevin MacLeod 的真实科技配乐 `Aitech`；旁白期间以 `20%` 混入，最后一秒短暂抬升并淡出
- 授权：`Aitech` 使用 CC BY 3.0，片尾显示署名，完整来源记录在 `public/audio/MUSIC_CREDITS.md`
- 输出：
  - `public/assets/ccar-f-30s-content-power-digital-human-16x9-v1.mp4`
  - `public/assets/ccar-f-30s-content-power-digital-human-16x9-v1-cover.png`
  - `public/assets/ccar-f-30s-content-power-digital-human-16x9-v1-contact-sheet.png`

## 演进记录

1. 第一版为 15 秒海报/界面动画，无法体现真实产品操作。
2. 第二版加入 Playwright 真实网页录屏和 Remotion 编排，先做成 9:16。
3. 竖屏中英文题干、选项和 Pearson VUE 侧栏过小，改为 16:9 横屏。
4. OpenAI TTS 旁白替换为 JR Academy 定稿的 ElevenLabs Amy 声线。

## 镜头表

| 帧 | 时间 | 画面 |
|---|---|---|
| 0-105 | 0-3.5s | 开场定位：不是讲概念，直接看怎么学 |
| 90-315 | 3-10.5s | 课程大纲、学习路径和网页内样题 |
| 300-545 | 10-18.2s | Demo Exam：开始答题、选答案、下一题 |
| 530-750 | 17.7-25s | 平台模式与 Pearson VUE 风格切换 |
| 735-900 | 24.5-30s | 主口号、14 章、479 题、双模式、AI 解析 |

场景有 15 帧左右重叠，用淡入淡出完成转场。

## 真实录屏

录制脚本：`scripts/capture-product-tour.mjs`

素材：

- `public/captures/course-tour.webm`
- `public/captures/demo-exam.webm`
- `public/captures/mock-standard.png`
- `public/captures/mock-pearson.png`

公开课程页录屏从第 8 秒开始使用，避开首屏价格和禁止文案。Demo Exam 保留开始答题、选择答案和下一题的状态变化。

## 配音

生成脚本：`scripts/gen-elevenlabs-product-tour-voice.mjs`

参数：

- Voice ID：`bhJUNIXWQQ94l8eI2VUf`（Amy）
- Model：`eleven_v3`
- `stability: 0.5`
- `similarity_boost: 0.75`
- `atempo=1.18`
- 成品旁白：26.515 秒，44.1kHz mono MP3

Key 不写入文件。脚本使用 `jr-academy/.env` 的 `MONGO_URI`，从本地 Admin AI Settings 读取 ElevenLabs 配置。

旁白文本：

> Claude 官方架构师认证，CCAR-F，怎么准备？这套课程把五大考试域，拆成十四章学习路径。打开网页，先按大纲逐章学习，再进入四百七十九道题库，用英文题干练真实判断。每道题不只给答案，还逐项解释干扰项为什么错。模拟考试支持平台模式和 Pearson VUE 风格，配合 AI 解析、错题复盘和分域诊断。成为全球华人首批 Claude 官方认证架构师。

## 输出资产

- `public/assets/ccar-f-30s-product-tour-16x9-elevenlabs-v1.mp4`
- `public/assets/ccar-f-30s-product-tour-16x9-v1.mp4`（当前主文件，同内容）
- `public/assets/ccar-f-30s-product-tour-16x9-v1-cover.png`
- `public/assets/ccar-f-30s-product-tour-16x9-v1-contact-sheet.png`

## 验证记录

- TypeScript：`bunx tsc --noEmit` 通过。
- 视频：H.264，1920×1080，30.058667 秒。
- 音频：AAC，48kHz，双声道。
- ElevenLabs 源音频平均响度约 -15.4 dB，峰值约 -0.9 dB。
- 0.6 秒以上停顿共 4 处，最长约 0.72 秒，没有异常长停顿。
- contact sheet 人工检查通过：无价格、无禁止文案、题目与侧栏可见。

## 命令

```bash
cd curriculum/cca-f-cert-pack/video-ad-remotion-15s
bun run capture
bun run voice
bun run render:preview
bun run render
bun run voice:content
bun run render:content-preview
bun run render:content
bun run render:content-digital-human-preview
bun run render:content-digital-human
bun run voice:youtube-guide
bun run render:youtube-guide-preview
bun run render:youtube-guide
```

通用制作规范见 `.codex/skills/course-product-tour-video/SKILL.md`。
