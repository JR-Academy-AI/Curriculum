# prepgenaicerts.com（PrepGen）竞品深度研究报告

> 研究对象：prepgenaicerts.com — CCA-F（Claude Certified Architect – Foundations）认证备考站整站镜像（前身 anthropiccertifications.com）
> 素材：305 页全站镜像（`mirror/`）+ 全量正文提取（`extracted/pages-text/`，305 个 txt）
> 研究方法：5 个分域覆盖审计 agent（竞品概念页+速查表 vs 我方 `skills-data/certification-chapters/ccar-f/` 五章正文逐条语义对照）+ 1 个术语/labs/blog/产品机制盘点 agent
> 用途：为 cca-f-cert-pack（A$399 中文考试直通包）补齐考点缺口、借鉴产品机制
> 姊妹报告：`../CCG_RESEARCH_REPORT.md`（claudecertificationguide.com，2026-07-08）

---

## 1. 站点全貌

### 1.1 定位与规模

- 独立第三方备考平台，页脚声明与 Anthropic 无关联。只做 CCA-F 一门认证。
- 内容资产：**59 个概念页**（按 5 域组织，每页含 Explanation / Best Practices / Key Takeaways / 关联术语 / 内嵌练习题）+ **91 个术语页**（每页是一篇小型 SEO 文章：Definition / 考试为什么考 / In Depth / 对比表 / FAQ）+ **5 份分域速查表**（key points + anti-patterns + decision rules）+ **5 门课程**（主课 30 课 1:1 映射官方 30 条 task statement）+ **13 个浏览器内填空 lab** + **8 篇 blog**。
- 学习系统：FSRS 间隔重复（4 参数卡片调度）、自适应练习（500+ 题、5 种模式）、知识图谱（94 节点 154 连接）、学习计划生成器。
- 技术栈：Next.js SSR，全部内容公开可爬（题库走 API 不在 SSR 里）。

### 1.2 免费/付费与商业化

- 一次性买断、终身访问、无订阅。免费面极大（概念库/术语/课程/labs/速查表/自适应练习全免费），付费墙只卡三件事：**6 套模拟考 + AI Tutor + 成绩分析看板**。
- Pass guarantee：完成课程 + 6 套模考全部 95%+ 仍未通过官方考试 → 全额退款。
- **商业化弱点**：当前新购买因支付渠道问题暂停、价格数字未渲染、社证注水（宣称 8700+ learners，但评分行是"4.8 分 · 基于 8 条评价"）。

### 1.3 题库扩容手法（可借鉴）

60 道人工策划题（Classic 卷）× 4 种变体生成 = 6 套模考：
- **paraphrase**（改写题干）/ **context-shift**（换场景）/ **param-change**(换参数) / **angle-flip**（反问角度），跨套不重复概念。
- 13 个 lab 全是"带代码语境的填空题"（纯前端校验字符串），实现成本低，但把 stop_reason 取值、tool_choice 语法、`-p` flag、frontmatter 字段这些代码级细节变成肌肉记忆练习。

### 1.4 他们对考试结构的理解（与我方口径一致处从略）

- 全单选（1 对 + 3 干扰项）、6 场景抽 4、每场景约 15 题共约 60 题、120 分钟、量表分 720/1000 及格、各域独立加权。
- 报名路径认知：经 **Certiverse** 在线监考，需 Anthropic partner access（与我方 Partner Academy 表述有出入，我方以官方考纲为准）。
- **8 条答题原则**（反复出现在其正确选项逻辑里，值得进我方冲刺章）：① 先试最简单方案（prompt 级修复没试过就别上架构）② 关键路径用程序化强制（hook）不用 prompt ③ 工具误选先修 description ④ few-shot > 详细指令 ⑤ 独立实例 review > 自审 ⑥ 政策空白才升级、复杂不升级 ⑦ 优雅降级 + 透明标注缺口 ⑧ 工具按角色收敛。
- **口径不一致处**（引用其数据时注意）：概念数（营销 150+ vs 图谱实际 59）、题量（60 vs 60-75）、时长（120 vs 90-120 分钟）、Batch 与 prompt caching 兼容性（两个词条页互相矛盾——官方文档实为支持且折扣叠加）。

---

## 2. 覆盖审计总结论

我方五章（05/07/09/10/11）在**机制深度**上全面超过竞品：可运行代码、干扰项拆解、失败案例画廊、读题演示是竞品没有的资产形态；且多处信息比竞品新（Task→Agent 工具改名、stop_reason 七值 vs 竞品四值、MCP 三 scope vs 竞品两分法）。

竞品的真实威胁在于它**直接从官方考纲 "Skills in" 清单抠出具体判断题型**，我方部分未覆盖。审计共确认约 50 条真实缺口（P0 约 15 条），分布：

| 域 | 我方章节 | 缺口数 | 最重要的 |
|---|---|---|---|
| D1 Agentic (27%) | 05 | 14 条 | 结构化 handoff 摘要、coordinator prompt 目标导向、attribution 上下文传递、attention dilution 两遍法、resume 告知文件变更、Haiku 分类器路由 |
| D2 Tool/MCP (18%) | 07 | 9 条 | **多 agent 工具分配/最小权限（半条 TS 整块缺失）**、business 错误类别+userFriendlyMessage、subagent 本地恢复 vs 上报、社区 vs 自建 MCP 决策框架 |
| D3 Claude Code (20%) | 09 | 9 条 | **`context: fork`（官方考纲出现 4 次，我方零提及）**、同名 shadowing、批量 vs 顺序反馈、CI session 隔离、增量 review、Explore subagent 具名 |
| D4 Prompt (20%) | 10 | 12 条 | **Batch 表述事实修正（见 §3）**、feedback-loop dismissal 分析（整概念缺失）、batch 成本经济学（整概念缺失）、disable-fix-re-enable、CLI `--json-schema` |
| D5 Context (15%) | 11 | 14 条 | **置信度校准方法论（唯一整概念缺失）**、聚合指标掩盖分段劣化、上游结构化缩减题型、内容形态适配渲染、escalation few-shot/情绪反模式 |

各域完整缺口清单 + 竞品原话 + 落点小节，见本次审计的补写落地（直接进了五章正文），过程记录在会话及 git diff。

---

## 3. 两处事实冲突的官方裁决（本次研究最重要产出）

### 3.1 skill frontmatter `allowed-tools`：预批准 vs 限制

- **官方产品文档**（code.claude.com/docs/en/skills，2026-07 现行）："The `allowed-tools` field grants permission for the listed tools during the turn that invokes the skill... **It does not restrict which tools are available**: every tool remains callable." 真正做限制的是 **`disallowed-tools`** 字段（从工具池移除）。
- **官方考纲原件**（CCAR-F_extracted.txt L399）："Configuring allowed-tools in skill frontmatter to **restrict tool access** during skill execution"。
- **裁决**：产品真实行为 = 预批准免问（我方原有讲法对）；但考试按考纲措辞出题时会把 allowed-tools 当"最小权限限制"考。我方章节两头讲清 + 标注出处，考场按考纲口径答。

### 3.2 Batch API 与 tool use / 多轮

- **官方文档**（platform.claude.com/docs/en/build-with-claude/batch-processing）：Batch **支持** tool use（含全部 server tools）、多轮对话、extended thinking、prompt caching（折扣叠加，命中率 30-98% best-effort）；**不支持** streaming（`stream: true` 无效，结果按文件返回）。
- Server tools（web search / code execution 等）在 batch 内跑**服务端 agentic loop**，且单轮迭代次数比同步请求更多；跑不完返回 `pause_turn` 可续。
- **Client-side 工具**：batch 请求内没有"执行工具→回传→续跑"的机制——模型返回 `tool_use` 该请求即结束，续跑需提交 follow-up 请求。
- **裁决**：我方原句「Batch 支持 tool use 和多轮对话」对但不完整；竞品「single-turn only」错但其考试判断（"需要交互式工具循环的工作流不适合切 batch"）成立。已改写为精确版本。

### 3.3 内置 subagent 具名（顺带核实）

官方文档确认："Claude Code includes several built-in subagents such as **Explore, Plan, and general-purpose**"。Explore = 只读、继承会话模型（Claude API 上限 Opus）、三档 thoroughness（quick/medium/very thorough）。我方章节原 TODO 已解除，可具名。

---

## 4. 91 术语 Glossary 主题分布（详见附录或 extracted/pages-text/glossary__*.txt）

模型 4 条 / API 参数与工具调用 15 条 / Prompt 技术 9 条 / Agent & SDK 14 条 / MCP 13 条 / Claude Code 15 条 / 批处理与缓存 4 条 / 上下文管理 6 条 / 可靠性 9 条 / 学习方法 2 条。

术语页规格值得抄：**Definition / Example Usage / Why It Matters for the CCA-F Exam / In Depth / 对比表 / FAQ / 关联课时**——每个术语页既是学习卡也是 SEO 着陆页。

## 5. 13 个 Lab 清单

全部为浏览器内填空/修 bug（D1×3、D2×2、D3×3、D4×3、D5×2）：agentic loop 控制值、subagent context 修复、PostToolUse 归一化、工具描述撰写、结构化错误响应、SKILL.md frontmatter、path rules glob、CI/CD 命令（`-p` + `--output-format json` + `--json-schema`）、few-shot 示例、JSON schema + tool_choice、带反馈重试、case facts 抽取、错误传播上下文。

## 6. 8 篇 Blog 增量评估

高增量 5 篇：① Tool Search / Programmatic Tool Calling / Tool Use Examples 三个 beta 特性（85% token 降幅数据）② Claude Code 双沙箱（bubblewrap/seatbelt + 网络代理白名单）③ Slash Commands vs Skills vs CLAUDE.md（同一需求三种实现对比的教学结构）④ How to Pass CCA-F（**binding constraint 解题技术**、D1→D3→D4→D2→D5 学习顺序、"6 类不用学"清单、2 周/4 周日程表）⑤ 长任务 agent harness 模式（initializer + coding agent、JSON feature list、git 当检查点）。中等 2 篇（考试指南博文版、定位文）、另 1 篇 MCP code execution 模式（98% token 降幅）。

## 7. 对 cca-f-cert-pack 的产品借鉴建议（未实施，供决策）

1. **变体扩题**：我方 479 题已远超竞品 Classic 卷 60 题，但其 4 变体手法（paraphrase/context-shift/param-change/angle-flip）可用于把我方模拟考从 1 套扩成多套且跨套不重复概念。
2. **填空型 lab**：13 个代码填空题成本低、贴考纲，可作为我方章节内嵌互动练习的参考形态（我方平台已有 Lab 基建）。
3. **备考方法论层**：binding constraint 解题技术、8 条答题原则、按"权重×难度"排学习顺序——适合充实我方 14-exam-prep 冲刺章。
4. **术语表**：91 条术语我方没有对应产品形态；若做，用其页面规格但按我方考纲权威口径重写（其内容有多处口径不一致与过时信息）。

---

*报告生成：2026-07-25。爬取遵守 robots.txt（公开页面，0.4s 限速）。竞品内容仅作考点覆盖对照与产品机制研究，我方补写内容全部基于官方文档与官方考纲原件独立撰写，不转载竞品文本。*
