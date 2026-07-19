# Changelog

## 2026-07-19

- 新增 CCDV-F 第一章 15 张内容驱动 React Slide、41 段 Amy 完整配音、真实 Classroom Bridge 自动翻页和逐段审核播放器，不上传、不绑定生产（`lessons/ccdv-f-exam-overview-pilot`）
- 重做 CCDV-F 第一章视觉为用户确认的 JR Course Studio 演播室语言：暖灰渐变外场、官方 Logo 顶栏、独立圆角白色教学主板、克制硬阴影和内容驱动版式；重生成 15 张缩略图，并通过 15 页 × 5 容器的 75 项固定 16:9 QA（`lessons/ccdv-f-exam-overview-pilot`）
- 修复独立 Classroom Deck CI/CD：把 MP3 上传到按 `deckId/releaseId` 隔离的 UAT/Production 专用音频桶，上传后校验对象数量与 206 Range，并让 narration、音频、缩略图和发布脚本变更都能触发 changed-deck 工作流（`.github/workflows/publish-classroom-deck.yml`）

## 2026-07-17

- 更新 CCDV-F 第一张 Classroom Deck 的 UAT 音频地址、发布工作流和 Release Candidate 登记（`lessons/ccdv-f-exam-overview-pilot`）
