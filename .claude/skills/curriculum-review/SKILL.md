---
name: curriculum-review
description: "审查课程大纲完整性：检查每节课是否有掌握路径、Lab、AI Tutor等。Use when reviewing an existing curriculum for gaps."
argument-hint: "[bootcamp目录]"
---

# /curriculum-review — 审查课程大纲完整性

检查指定 bootcamp 的课程大纲，找出缺失的内容和可以改进的地方。

## 使用方法
```
/curriculum-review [bootcamp目录]
```
例如：`/curriculum-review ai-adoption-bootcamp`

## 执行步骤

1. **读取课程大纲**：读取 `public/curriculum.html` 和所有 `phase*.html`

2. **逐课检查**，每节课必须有：
   - [ ] 教学内容（📖 具体知识点，不是泛泛而谈）
   - [ ] Lab 实操（🔬 具体的 Prompt Lab 名称 + 练习描述）
   - [ ] 作业（📋 有明确交付物 + 评审方式）
   - [ ] 掌握路径（🎯 learn-path，含 4-9 个学习资源项）
   - [ ] 工具列表（用了哪些 AI 工具）

3. **检查掌握路径的多通道覆盖**：
   - [ ] 是否有 AI Tutor 环节（不是泛泛的"AI帮你"，要有具体场景）
   - [ ] 是否引用了已有的 Prompt Lab（标了"已有"）
   - [ ] 是否有录播/图文补充（且是独立 lesson 而非附属品）
   - [ ] 是否有作业/交付物

4. **检查资源整合**：
   - [ ] 是否复用了平台已有 Prompt Lab（22+个）
   - [ ] 是否整合了 Vibe Coding Lab / OpenClaw 章节
   - [ ] 扩展内容是否放到了 Wiki（如 Power Automate）
   - [ ] 是否利用了 Roadmap、AI 学习方向等资源

5. **检查内容质量**：
   - [ ] 有没有 AI 味的空洞描述（"在当今快速发展的..."）
   - [ ] 每段内容删掉后读者是否会损失信息
   - [ ] 是否有具体的工具名、命令、数据、案例

6. **输出报告**：
   - 总体覆盖率（X/Y 节课有完整掌握路径）
   - 缺失清单（哪些课缺什么）
   - 改进建议（具体到课号和改动内容）
