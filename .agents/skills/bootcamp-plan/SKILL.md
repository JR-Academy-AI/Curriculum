---
name: bootcamp-plan
description: "从零规划新Bootcamp：市场调研→课程定位→结构设计→资源复用。Use when planning a new bootcamp from scratch."
argument-hint: "[方向名称] [目标用户] [时长]"
---

# /bootcamp-plan — 从零规划一个新 Bootcamp

从市场调研到课程大纲到资源整合，完整规划一个新 bootcamp。

## 使用方法
```
/bootcamp-plan [方向名称] [目标用户] [时长]
```
例如：`/bootcamp-plan "AI Product Manager" "非技术产品经理" "6周"`

## 执行步骤

1. **市场调研**（自动调用 /bootcamp-research 逻辑）：
   - 岗位 JD 分析
   - 竞品课程对比
   - 薪资数据
   - 目标用户 Persona

2. **课程定位**：
   - 一句话定位（像 AI Adoption 的"让你的团队真正用好 AI"）
   - 和 JR 已有课程的关系（复用什么、差异化什么）
   - 定价策略建议

3. **课程结构设计**：
   - 分几个 Phase？每个 Phase 几周？
   - 直播 vs 录播 vs Lab 的比例
   - 参考 AI Adoption 的结构：Phase 1 工具 → Phase 2 场景 → Phase 3 方法论 → Phase 4 毕业

4. **逐周大纲**：
   - 每周的主题和学习目标
   - 每节课的类型（Lesson/Video/Info）
   - 已有平台资源映射（自动调用 /platform-resources 逻辑）

5. **资源复用分析**：
   - 哪些 Prompt Lab 可以直接用？
   - 哪些 Vibe Coding Lab / OpenClaw 章节可以复用？
   - 哪些 Wiki / Roadmap / Video 已有？
   - 需要新建什么？新建工作量估算

6. **P3 职业孵化器设计**：
   - 这个方向的就业路径是什么？
   - P3 分几条路？（内部转型 / 外部求职 / 咨询 / 创业）
   - 需要什么职业支持资源？

7. **输出**：
   - 完整的 bootcamp 规划文档
   - 可选：直接生成 bootcamp 目录结构 + curriculum.html 初稿
   - 资源复用清单 + 新建清单 + 工作量估算
