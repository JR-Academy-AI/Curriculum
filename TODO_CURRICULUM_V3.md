# TODO: Curriculum V3 — 用 V1 详细格式重写 V2 大纲

## 需求

把 `curriculum.html` 中的 V2 课程大纲，用 V1 那种**详细格式**重写。

### V1 格式（每节课必须包含）

```
课号 + 课名 + 类型标签 (Lesson + Lab / Lesson + Prompt Lab / Workshop...)
├── 📖 教学内容 — 具体教什么，列工具标签
├── 🔬 Lab 实操 — 具体做什么 Lab，Lab 名称
├── 📋 作业 — 具体交什么
└── Review 标签 — 🤖 AI 自动评分 / 👨‍🏫 老师点评 / 👨‍🏫+🤖 混合
```

### V2 课程顺序（不变）

**Phase 1 (Week 1-2): 全部直播**
- 0.1 角色定位 & 全流程 Demo — 直播
- 1.1 ChatGPT + Claude 深度实操 — 直播
- 1.2 Copilot + Gemini + 工具选型 — 直播 + 答疑
- AI 自学: hello-ai / clear-task / output-format / multimodal Lab + AI 图像视频教程
- 2.1 Prompt Engineering 实战 — 直播
- 2.2 AI 自动化 + Email 管理 — 直播
- 2.3 Vibe Coding + 会议 AI — 直播 + 答疑
- AI 自学: Prompt Lab ×9 + code-generation + Vibe Coding Lab + 自动化教程

**Phase 2 (Week 3-5): 每周 1 节直播 + Lab/录播 + 答疑**
- 3.1 AI 做 Facebook 广告 — 直播
- 3.2 AI 做社媒运营 — Lab/录播
- 3.3 AI 做 Email Marketing — Lab/录播
- 3.4 AI 做 SEO 内容 — Lab/录播
- 周五 Clinic + 答疑 + Adoption Lens
- 4.1 AI 做 Sales Outreach — 直播
- 4.2 AI 客服 Bot + 内部知识库 (OpenClaw) — Lab/录播
- 4.3 AI 做 Sales 支持 — Lab/录播
- 4.4 AI 做客户反馈分析 — Lab/录播
- 周五 Clinic + 答疑 + Adoption Lens
- 5.1 AI 做 HR + Finance — 直播
- 5.2 流程自动化 + 团队 AI Agent (OpenClaw) — Lab/录播
- 5.3 AI Pilot 设计 + 中期复盘 — 直播 + 答疑

**Phase 3 (Week 6-7): 全部直播**
- 6.1 成熟度模型 + 就绪度评估 + 机会审计 — 直播
- 6.2 变革管理 ADKAR + 利益相关者 — Workshop
- 6.3 培训设计 + AI Champion + 预算案例 — 直播 + 答疑
- 7.1 AI 治理 + 合规 — 直播
- 7.2 OpenClaw 组织级部署 — 直播
- 7.3 ROI + 规模化 + 失败案例 + 防回退 + 向高层汇报 — 直播 + 答疑

**Phase 4 (Week 8): 全程老师**
- 8.1 选题 Briefing — 直播
- 8.2 中期 Check-in — 1v1
- 8.3 方案互审 Peer Review — 直播
- 8.4 Demo Day + 证书 — 全天

### 注意事项

1. **每节课都要有 📖/🔬/📋 三栏详细内容**，不管是直播还是 Lab/录播
2. **Lab/录播课也要写清楚**具体用哪个 Prompt Lab、具体做什么、交什么作业
3. **不要删任何板块**（Lab 映射、老师分工、JD 对比、Marketing 已在 internal.html）
4. **直播课不是每节都直播**，Phase 2 每周只有 1 节直播
5. **统一答疑是集中 Q&A**，不是 1v1
6. **Adoption Lens** 在 Phase 2 每周五 Clinic 末尾 10 分钟
7. **OpenClaw 融入** 4.2 + 5.2 + 7.2 三处
8. **Email 管理融入** 2.2
9. **7 个 Adoption 专属模块**说明保留在大纲上方
10. **6 个 Gap 修复**都已融入大纲（成熟度模型、失败案例、Champion、Adoption Lens、Peer Review、防回退）
