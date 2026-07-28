# CCAR-F Remotion Product Tour

16:9 横屏课程视频工程，包含 30 秒宣传片和 90 秒 YouTube 干货视频，使用真实网页操作素材，不依赖海报轮播。横屏画幅用于完整保留英文题干、选项和模拟考试左右栏。

当前包含两条 Composition：

- `CcarFAd`：产品操作导览，展示课程页、Demo Exam 和双模式模考。
- `CcarFContentAd`：内容实力篇，展示架构判断、官方五域、16 节课程、479 道原创题和两套全真模考。
- `CcarFContentAdDigitalHuman`：内容实力篇的真人半身数字人版本，讲师仅在开场出现 4.3 秒，随后完全退出画面。
- `CcarFYouTubeGuide`：90 秒干货型 YouTube 视频，用原创退款场景讲清 prompt、PreToolUse 与重试的选择方法，再进入真实题库和双模式模考。
- `CcarFDeepDive`：约 6 分 19 秒的 YouTube 完整指南，讲清考试结构、五大领域、16 节课程、30 项能力要求、题库、双模式模考和两周备考计划。

完整制作记录见 [PRODUCTION_NOTES.md](./PRODUCTION_NOTES.md)，通用流程见 `.codex/skills/course-product-tour-video/SKILL.md`。

## Pipeline

1. `bun run capture`：Playwright 录制生产课程页和公开 Demo Exam。
2. `bun run voice`：通过 `jr-academy/.env` 连接本地 MongoDB，从 Admin AI Settings 读取 ElevenLabs Key，使用 Amy + `eleven_v3` + `atempo=1.18` 生成中文旁白。
   `bun run voice:content` 为内容实力篇生成 Amy + `eleven_v3` + `atempo=1.34` 快节奏旁白。
3. `bun run studio`：在 Remotion Studio 调整镜头、字幕和时序。
4. `bun run render`：输出 1920×1080 H.264/AAC MP4。
   `bun run render:content` 输出内容实力篇正式版；`bun run render:content-preview` 输出半分辨率预览。
   `bun run render:content-digital-human` 输出开场带真人半身数字讲师的内容实力篇。
   `bun run voice:youtube-guide` 生成 90 秒干货篇 Amy 旁白；`bun run render:youtube-guide` 输出 1080p 横屏母版。
   `bun run voice:deep-dive` 生成长视频的 12 段 Amy 旁白；`bun run captions:deep-dive` 生成 SRT 与逐字稿；`bun run render:deep-dive` 输出 1080p 长视频。

网页录屏保存在 `public/captures/`，配音与背景音保存在 `public/audio/`。最终可发布文件同步到课程包的 `public/assets/`。

OpenAI 旧版旁白仍可通过 `bun run voice:openai` 生成，仅用于声音对比；正式合成默认使用 ElevenLabs。

## Content Rules

- 不展示价格。
- 不使用“个人报不了名”作为宣传文案。
- 主口号固定为“成为全球华人首批 Claude 官方认证架构师”。
- 题库数量以当前网页实值为准；重新录制前先核对课程页。
