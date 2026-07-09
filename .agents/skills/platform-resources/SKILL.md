---
name: platform-resources
description: "查找JR平台已有资源：Prompt Lab、Vibe Coding Lab、OpenClaw、Wiki、Roadmap等可复用内容。Use when checking what existing resources can be reused."
argument-hint: "[主题关键词]"
---

# /platform-resources — 查找 JR 平台已有资源

搜索 JR Academy 平台上已有的学习资源，找出可以复用到当前课程的内容。

## 使用方法
```
/platform-resources [主题关键词]
```
例如：`/platform-resources "email marketing"` 或 `/platform-resources "prompt engineering"`

## 执行步骤

1. **搜索已有 Prompt Lab**（22+ 个互动练习）：
   已知 Prompt Lab 列表：
   - Warmup: `hello-ai`
   - Foundation: `clear-task`, `output-format`, `context-management`, `multimodal-prompting`
   - Core: `zero-shot`, `few-shot`, `role-playing`, `chain-of-thought`, `constraints`
   - Structured: `json-schema`, `classification`, `information-extraction`
   - Applied: `business-writing`, `text-summarization`, `code-generation`, `prompt-chaining`
   - Production: `system-prompt-design`, `qa-system-design`, `hallucination-defense`, `prompt-injection-defense`
   - Advanced: `cost-optimization`

   找出哪些和查询主题相关，说明为什么相关、怎么用。

2. **搜索 Vibe Coding Lab**：
   - 位置：`/learn/vibe-coding/hub`
   - 适合需要 AI 写代码的场景

3. **搜索 OpenClaw 章节**：
   - Ch.1-5: Getting Started（安装/连接/基础）
   - Ch.10: Multi-Agent Routing
   - Ch.11: Scheduled Tasks (Cron)
   - 适合组织级 AI 部署场景

4. **搜索 AI 学习方向**：
   - `/learn/vibe-coding/hub` — Vibe Coding
   - `/learn/prompt-master` — Prompt 大师
   - `/learn/ai-engineer/hub` — AI Engineer
   - `/learn/ai-builder/hub` — AI Builder
   - `/learn/ai-pm` — AI 产品经理
   - `/learn/ai-adoption` — AI Adoption（本课程）

5. **搜索其他资源**：
   - Roadmaps（`/roadmaps`）
   - Videos（`/videos`）
   - Wiki（`/wiki`）— 适合放扩展内容
   - Free Resources（`/free-resources`）— 免费工具/认证
   - Cheat Sheets（`/cheat-sheets`）— 200+ 速查表

6. **搜索职业工具**：
   - Mock Interview（`/job-interview`）
   - Career Planning（`/study/career-planning`）
   - JobPin AI 简历（`/study-center?tab=jobpin-ai`）
   - Job Referral（`/job-referral`）

7. **输出格式**：
   ```
   ## 可复用资源（[主题]）

   ### Prompt Lab（已有）
   - [lab-name] — 为什么相关 + 建议怎么用在课程里

   ### 其他资源
   - [资源类型] [名称] — 怎么整合

   ### 建议新建
   - 如果现有资源不够，建议新建什么
   ```
