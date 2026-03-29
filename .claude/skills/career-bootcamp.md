# /career-bootcamp — 给一个岗位，自动生成完整转行课程

输入一个目标岗位，自动完成：JD 调研 → 技能提取 → 竞品分析 → 课程设计 → 资源整合 → 输出完整大纲。

## 使用方法
```
/career-bootcamp [目标岗位]
```
例如：
- `/career-bootcamp "AI Adoption Specialist"`
- `/career-bootcamp "AI Product Manager"`
- `/career-bootcamp "Data Analyst"`
- `/career-bootcamp "DevOps Engineer"`

## 完整执行流程

---

### Step 1: JD 调研（最重要 — 驱动后续所有设计）

**1.1 抓取真实 JD：**
- 用 WebSearch 搜索该岗位在 LinkedIn / Seek / Indeed / Glassdoor 上的 JD
- 搜索关键词：`[岗位名] job description`、`[岗位名] requirements`、`[岗位名] skills`
- 同时搜变体 title（比如 "AI Adoption" 还要搜 "Digital Transformation Lead"、"AI Enablement"）
- 至少找到 **10 份 JD**，优先澳洲市场 + 全球远程

**1.2 提取技能矩阵（按频率排序）：**
```
| 排名 | 技能 | 出现频率 | 类别 | JD 原文摘录 |
|------|------|---------|------|------------|
| 1 | xxx | 8/10 | 硬技能 | "..." |
| 2 | xxx | 7/10 | 工具 | "..." |
```
- 区分：硬技能 / 软技能 / 工具 / 认证 / 行业知识
- 8/10+ = 核心必教（2-3 节课）
- 5-7/10 = 重要（1-2 节课）
- 2-4/10 = 了解即可（放 Wiki 或图文）
- 1/10 = 不教

**1.3 提取岗位画像：**
- 常见 Job Title 变体（至少 5 个）
- 薪资：Entry / Mid / Senior（AUD）
- 汇报线：report to 谁
- 日常工作内容（从 JD 的 responsibilities 提取）
- 隐性要求（JD 没说但行业默认的）

---

### Step 2: 竞品课程分析

**2.1 搜索同类课程：**
- 用 WebSearch 搜索：`[岗位名] bootcamp`、`[岗位名] course`、`[岗位名] certification`
- 平台：Coursera / Udemy / edX / General Assembly / LinkedIn Learning / 大学项目
- 至少找 5 个竞品

**2.2 竞品对比表：**
```
| 竞品 | 价格 | 时长 | 实操? | 场景教学? | 职业支持? | 缺什么? |
```

**2.3 找差异化缺口：**
- 竞品没教但 JD 8/10 要求的 = **核心卖点**
- 竞品有但做得烂的（只讲理论没实操）= **做好就是卖点**
- 输出一句话定位（像 AI Adoption 的"Harvard 深度 × Udemy 价格 × Bootcamp 互动"）

---

### Step 3: 目标用户 Persona

根据 JD 调研结果，定义 **3-5 个 Persona**：
```
| Persona | 背景 | 痛点 | 目标 | 学习路径特点 |
|---------|------|------|------|-------------|
| 职场人 | 已在某岗位工作 | 想转型/升级 | 拿到新 title | 需要实战案例 |
| 转行者 | 非相关背景 | 零基础 | 进入新行业 | 需要从头教 |
```

---

### Step 4: 课程结构设计

**4.1 技能 → Phase 映射：**
把 Step 1 的技能矩阵按学习顺序组织：
```
Phase 1 (Week 1-2): 基础工具 + 角色认知（让学员先"能用"）
Phase 2 (Week 3-X): 核心场景实战（JD 高频技能，按频率排优先级）
Phase 3 (Week X-Y): 高级/差异化技能（竞品缺口 = 我们的卖点）
Phase 4 (最后 1 周): 毕业项目 + Demo Day
```

**4.2 逐周大纲：**
每周设计：
- 主题 + 学习目标
- 1-3 节直播课（Lesson type）
- 配套录播（Video type）— 独立 lesson，有完整 step 序列
- 配套图文（Info type）— 独立 lesson，不是附属品
- 配套 Lab 和练习
- 作业 + 评审方式

**4.3 每节课的掌握路径：**
每节课生成 4-9 项的掌握路径，包含以下学习通道（按推荐顺序）：

| 通道 | 标签 | 说明 |
|------|------|------|
| 直播课 | `lp-live` | 老师讲解 + 现场演示 |
| 录播视频 | `lp-video` | 独立 Video lesson，不是附属品 |
| 图文教程 | `lp-text` | 独立 Info lesson |
| Prompt Lab | `lp-lab` | 平台互动练习（标"已有"或"新建"）|
| AI Tutor | `lp-ai` | AI 一对一：要有具体场景（如"AI扮演CFO挑战你"）|
| Vibe Coding Lab | `lp-vibe` | AI 编程练习 |
| OpenClaw | `lp-oc` | AI 部署章节 |
| Wiki | `lp-text` | 扩展阅读（找不到老师教的内容放这里）|
| 作业 | `lp-hw` | 综合运用，有明确交付物 |

学员自主节奏完成，不绑定具体哪天。

---

### Step 5: 平台资源整合

**5.1 搜索 JR 已有 Prompt Lab（22+ 个）：**

已知完整列表：
- Warmup: `hello-ai`
- Foundation: `clear-task`, `output-format`, `context-management`, `multimodal-prompting`
- Core: `zero-shot`, `few-shot`, `role-playing`, `chain-of-thought`, `constraints`
- Structured: `json-schema`, `classification`, `information-extraction`
- Applied: `business-writing`, `text-summarization`, `code-generation`, `prompt-chaining`
- Production: `system-prompt-design`, `qa-system-design`, `hallucination-defense`, `prompt-injection-defense`
- Advanced: `cost-optimization`

逐个检查哪些和课程主题相关，标注可复用的。

**5.2 搜索其他已有资源：**

| 资源 | 路由 | 检查什么 |
|------|------|---------|
| Vibe Coding Lab | `/learn/vibe-coding/hub` | 哪些 Lab 跟课程场景相关 |
| OpenClaw 章节 | `/learn/ai-builder/hub` | Ch.1-5 基础, Ch.10 Multi-Agent, Ch.11 Cron |
| AI 学习方向 | `/learn/` | ai-adoption / ai-engineer / ai-builder / ai-pm / prompt-master / vibe-coding |
| Roadmaps | `/roadmaps` | 是否有相关的可视化学习路径 |
| Videos | `/videos` | 已有的教学视频 |
| Wiki | `/wiki` | 已有的知识库文章 |
| Free Resources | `/free-resources` | 免费工具/认证/课程推荐 |
| Cheat Sheets | `/cheat-sheets` | 200+ 速查表 |

**5.3 资源复用率计算：**
```
已有可复用: X 个
需要新建: Y 个
复用率: Z%
```

**5.4 新建内容工作量：**
```
| 类型 | 数量 | 单个工时 | 总工时 |
|------|------|---------|--------|
| 直播 PPT | X | 2-4h | Xh |
| 新 Lab | X | 2-4h | Xh |
| 录播视频 | X | 4-8h | Xh |
| 图文教程 | X | 1-2h | Xh |
| 模板文件 | X | 1-2h | Xh |
| 总计 | | | XXh |
```

---

### Step 6: P3 职业孵化器

**6.1 分析求职路径：**
- 这个岗位的面试流程（几轮？考什么？）
- 需要什么 Portfolio？
- 是跳槽 / 内部转型 / 咨询 / 创业？

**6.2 设计 P3 路径：**
- Path A: 内部转型（如果学员已在相关公司）
- Path B: 外部求职（简历+面试+内推）
- Path C: 咨询/自由职业（如果适用）

**6.3 整合职业工具：**
- JobPin AI（`/study-center?tab=jobpin-ai`）— 针对目标岗位优化简历
- Mock Interview（`/job-interview`）— 模拟该岗位面试
- Career Planning（`/study/career-planning`）— AI 职业规划
- Job Referral（`/job-referral`）— 合作企业内推

---

### Step 7: 输出完整交付物

生成以下内容：

**7.1 课程定位文档：**
- 一句话定位
- 目标用户 Persona (3-5 个)
- 竞品差异化定位
- 关键数据（薪资/市场缺口/JD 覆盖率）

**7.2 JD Gap Analysis 表：**
- 10 份 JD 的技能提取
- 技能频率排序
- 每个技能 → 对应课程哪节课
- 覆盖度百分比

**7.3 完整课程大纲 HTML：**
- 按 Phase / Week / Lesson 组织
- 每节课有 lesson-body（教学内容 / Lab / 作业）
- 每节课有 learn-path（掌握路径，4-9 项）
- 使用现有 CSS 类：`.lesson` `.learn-path` `.lp-item` 等
- 可直接放入 `public/curriculum.html`

**7.4 资源清单：**
- 已有可复用 vs 需要新建
- 工作量估算
- 制作优先级（P0/P1/P2）

**7.5 P3 职业路径设计**

**7.6 可选 — 生成 bootcamp 目录结构：**
```
new-bootcamp/
├── public/
│   ├── curriculum.html    # 完整大纲（Step 7.3 的输出）
│   ├── internal.html      # 内部资料（Lab映射/JD对比/老师分工）
│   ├── learning-plan.html # 学习方案 + P3 + 待建清单
│   └── styles.css         # 复用现有样式
├── src/components/slides/ # 营销 Slide Deck
├── package.json
└── vite.config.ts
```

---

## 注意事项

- **JD 调研驱动一切** — 不是"我觉得应该教什么"，是"市场要什么就教什么"
- **技能频率 = 课程权重** — 8/10 JD 要求 → 2-3 节课；2/10 → Wiki 扩展阅读
- **所有 lesson type 平等** — Video/Info 不是附属品，要有完整 step 序列
- **复用优先** — 先查 JR 有什么能直接用，再考虑新建
- **不要 AI 味** — 每段内容要有具体工具+步骤+数字，不要空洞描述
- **只加不删** — 永远不精简已有内容
