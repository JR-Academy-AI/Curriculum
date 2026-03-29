---
name: lesson-design
description: "设计一节完整课程：教学内容+掌握路径（直播/Lab/AI Tutor/录播/图文/作业）。Use when adding a new lesson to a bootcamp."
argument-hint: "[课号] [课名] [学习目标]"
---

# /lesson-design — 设计一节完整的课程

为指定主题生成完整的 lesson 结构，包含所有学习通道。

## 使用方法
```
/lesson-design [课号] [课名] [学习目标]
```
例如：`/lesson-design 3.5 "AI 做房产营销" "能用 AI 生成房产海报、PPT、Brochure"`

## 执行步骤

1. **查找现有资源**：搜索 JR 平台已有的相关资源
   - Prompt Lab（22+ 个已有）：搜索哪些 lab 和这个主题相关
   - Vibe Coding Lab、OpenClaw 章节：是否有可复用的
   - Wiki 文章、Roadmap、Videos：是否已有相关内容
   - 参考 CLAUDE.md 中的"必须整合的 JR 平台现有资源"表

2. **生成 lesson-body**（教学内容 / Lab 实操 / 作业）：
   - 教学内容要具体，不要泛泛而谈
   - Lab 要列出具体的 Prompt Lab 名称
   - 作业要有明确的交付物和评审方式

3. **生成掌握路径**（learn-path），按推荐顺序包含：
   - 直播/录播（主要教学）
   - Prompt Lab（已有的标 `已有`）
   - AI Tutor（具体的练习场景，不是泛泛的"AI 帮你"）
   - 图文/Wiki（补充材料）
   - 作业（综合运用，有明确交付物）

4. **输出格式**：直接输出可以粘贴到 curriculum.html 的 HTML 代码，使用现有 CSS 类：
   - `.lesson` / `.lesson-head` / `.lesson-body` — 课程卡片
   - `.learn-path` / `.learn-path-head` / `.learn-path-body` — 掌握路径
   - `.lp-item` / `.lp-tag` / `.lp-desc` — 路径项
   - 标签类：`.lp-live` `.lp-lab` `.lp-ai` `.lp-video` `.lp-text` `.lp-hw` `.lp-oc` `.lp-vibe`

## 注意事项
- 所有 lesson type（Video/Info/Lesson）都是平等的，录播不是二等公民
- 学员自主节奏，不绑定具体日期
- 只加不删，不精简已有内容
- 内容要具体实用，不要 AI 味的空洞描述
