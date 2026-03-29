---
name: expand-outline
description: "把简单大纲扩展为完整课程：添加掌握路径、Lab映射、AI Tutor环节。Use when a curriculum outline needs more detail."
argument-hint: "[bootcamp目录]"
---

# /expand-outline — 把简单大纲扩展为完整课程

把一个粗略的课程大纲扩展为有完整掌握路径的详细大纲，包含所有学习通道。

## 使用方法
```
/expand-outline [bootcamp目录]
```
例如：`/expand-outline ai-engineer-bootcamp`

## 执行步骤

1. **读取当前大纲**：读取 `public/curriculum.html` 和 `public/outline.html`（如果有）

2. **识别每节课的现有内容**：
   - 哪些课已有教学内容 + Lab + 作业？
   - 哪些课已有掌握路径（learn-path）？
   - 哪些课内容单薄需要扩展？

3. **对缺少掌握路径的课，自动生成**：
   - 先用 `/platform-resources` 逻辑查找可复用的 Prompt Lab 和其他资源
   - 生成 4-9 项的掌握路径（直播/Lab/AI Tutor/录播/图文/作业）
   - AI Tutor 要有具体场景（不是泛泛的"AI帮你复习"）
   - 已有 Lab 标 `已有`

4. **确保录播/图文是独立 lesson**：
   - 不要把录播当成"自学附属品"
   - 每个录播/图文都要有明确的学习目标和内容描述
   - 在平台上它们是 Video/Info type 的 lesson，跟直播一样重要

5. **检查周日程（如果有 week-schedule）**：
   - 确保所有 Lab 和自学内容都编排到了日程里
   - 但不要强制绑定具体哪天（只是参考）

6. **输出**：
   - 直接输出可以插入到 curriculum.html 的 HTML 代码
   - 使用现有 CSS 类（.lesson / .learn-path / .lp-item 等）
   - 按课号顺序输出所有新增/修改的内容

## 注意
- 只加不删——不要修改已有的详细内容
- 内容要具体实用，参考 CLAUDE.md 的"禁止生成模板化内容"规则
- 每个掌握路径要有明确的学习目标（"目标：能XXX"）
