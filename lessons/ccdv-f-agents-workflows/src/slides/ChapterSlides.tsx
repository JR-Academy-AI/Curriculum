import type { ReactNode } from "react";

const logoUrl = () => new URL("brand/logo-zh-full.svg", window.location.href).href;

function Frame({ number, label, title, takeaway, tone = "cream", children }: {
  number: number;
  label: string;
  title: string;
  takeaway: string;
  tone?: "cream" | "rose" | "lavender" | "sky";
  children: ReactNode;
}) {
  return (
    <main className={`slide slide-${tone}`} data-deck-page data-qa-safe-zone>
      <div className="topline" />
      <header className="studio-header">
        <img className="brand-logo" src={logoUrl()} alt="匠人学院" />
        <span className="course-label">CCDV-F · Agents and Workflows</span>
      </header>
      <section className="lesson-board">
        <div className="board-meta">
          <span className="eyebrow">第二课 · {label}</span>
          <span className="progress">{String(number).padStart(2, "0")} / 16</span>
        </div>
        <section className="chapter-heading"><h1>{title}</h1></section>
        <section className="slide-body">{children}</section>
        <aside className="takeaway"><span>本页结论</span><strong>{takeaway}</strong></aside>
        <footer><span>Claude Certified Developer – Foundations</span><strong>JR Course Studio · Domain 1</strong></footer>
      </section>
    </main>
  );
}

function WeightMapSlide() {
  const skills = [
    ["Agent Construction", "5.3%", "loop · hooks · deployment", "coral"],
    ["Patterns & Frameworks", "4.9%", "subagent · memory · frameworks", "yellow"],
    ["Agent Architecture", "4.5%", "workflow vs agent · supervisor", "blue"]
  ];
  return <Frame number={1} label="DOMAIN MAP" title="14.7% 不是只考 Agent Loop" takeaway="三个子技能接近等重；第三方框架不能跳过。">
    <div className="agent-weight-layout">
      <div className="agent-weight-total"><span>DOMAIN 1</span><strong>14.7%</strong><b>≈ 8 题</b><p>八个 Domain 中排第三</p></div>
      <div className="agent-skill-stack">{skills.map(([name, weight, detail, tone]) => <article className={tone} key={name}><div><b>{name}</b><strong>{weight}</strong></div><p>{detail}</p></article>)}</div>
    </div>
  </Frame>;
}

function SimpleFirstSlide() {
  return <Frame number={2} label="META RULE" title="能简单解决，就不要上 Agent" takeaway="Agent 用成本与不确定性，换无法预先穷举的路径。" tone="rose">
    <div className="tradeoff-scale">
      <article className="tradeoff-cost"><span>你付出的</span><strong>延迟 · 成本 · 难测试</strong><div><i /><i /><i /></div></article>
      <div className="scale-pivot">⇄</div>
      <article className="tradeoff-value"><span>你换回的</span><strong>运行时决定未知路径</strong><div className="unknown-path"><i>?</i><i>?</i><i>?</i></div></article>
    </div>
    <div className="fixed-flow-strip"><b>翻译</b><i>→</i><b>润色</b><i>→</i><b>合规检查</b><strong>固定三步 = Workflow</strong></div>
  </Frame>;
}

function ComplexityLadderSlide() {
  const levels = [
    ["01", "单次调用", "分类 / 摘要 / 抽取", "一次请求，一次响应"],
    ["02", "Workflow", "代码决定路径", "可测试、可复现、成本可算"],
    ["03", "Agent", "模型决定路径", "灵活，但最贵、最不确定"]
  ];
  return <Frame number={3} label="COMPLEXITY LADDER" title="从便宜到贵，只升必要的一层" takeaway="从上往下走，第一个“是”就是答案。" tone="sky">
    <div className="complexity-ladder">{levels.map(([n, title, tag, detail], index) => <div className={`ladder-level level-${index + 1}`} key={n}><span>{n}</span><strong>{title}</strong><b>{tag}</b><p>{detail}</p>{index < 2 && <i>↓</i>}</div>)}</div>
  </Frame>;
}

function FourGatesSlide() {
  const gates = [["01", "Complexity", "路径无法提前写全？"], ["02", "Value", "结果值回成本吗？"], ["03", "Viability", "Claude 真做得好吗？"], ["04", "Cost of error", "错误能发现、能恢复？"]];
  return <Frame number={4} label="FOUR GATES" title="四道闸，必须全部通过" takeaway="任意一道回答“否”，退回 Workflow 或单次调用。" tone="lavender">
    <div className="four-gates">{gates.map(([n, title, question]) => <article key={n}><span>{n}</span><strong>{title}</strong><p>{question}</p><div><b>YES</b><i>/</i><em>NO → EXIT</em></div></article>)}</div>
  </Frame>;
}

function SupervisorSlide() {
  return <Frame number={5} label="MULTI-AGENT" title="Subagent 的价值只有两种" takeaway="换不到上下文隔离或并行，就不要付确定性代价。">
    <div className="supervisor-map">
      <article className="supervisor"><span>SUPERVISOR</span><strong>拆任务 · 分派 · 汇总</strong></article>
      <div className="fan-lines"><i /><i /><i /></div>
      <div className="subagents"><article><b>A</b><span>独立上下文</span><p>40 个文件的噪音不回主线程</p></article><article><b>B</b><span>并行扇出</span><p>独立数据源同时查</p></article><article className="no"><b>×</b><span>不要滥用</span><p>依赖链或轻任务不值得</p></article></div>
    </div>
  </Frame>;
}

function StopReasonsSlide() {
  const reasons = [["end_turn", "正常退出", "green"], ["tool_use", "执行工具 → 继续", "blue"], ["max_tokens", "截断 = 失败", "red"], ["pause_turn", "原样写回 → 继续", "yellow"], ["refusal", "先检查再读 content", "purple"]];
  return <Frame number={6} label="CONTROL PLANE" title="循环只认 stop_reason" takeaway="响应里有 text，不代表这一轮已经结束。" tone="sky">
    <div className="stop-console"><div className="console-head"><i /><i /><i /><span>response.stop_reason</span></div>{reasons.map(([reason, action, tone]) => <article className={tone} key={reason}><code>{reason}</code><i>→</i><strong>{action}</strong></article>)}</div>
  </Frame>;
}

function LoopInvariantsSlide() {
  const rules = [["完整 content", "不要只抽 text", "01"], ["tool_use_id", "每个结果必须配对", "02"], ["一条 user 消息", "并行结果一起送回", "03"], ["max_turns", "硬上限防死循环", "04"]];
  return <Frame number={7} label="LOOP INVARIANTS" title="四条不变式，少一条都可能炸" takeaway="协议完整性比 Prompt 写得漂亮更重要。" tone="rose">
    <div className="invariant-ring"><div className="loop-core"><code>messages[]</code><span>request → response → tools</span></div>{rules.map(([title, detail, n], index) => <article className={`rule-${index + 1}`} key={n}><span>{n}</span><strong>{title}</strong><p>{detail}</p></article>)}</div>
  </Frame>;
}

function RunnerSdkSlide() {
  return <Frame number={8} label="BOUNDARIES" title="名字很像，能力边界完全不同" takeaway="只循环业务工具选 Runner；需要 Claude Code 工具选 Agent SDK。" tone="lavender">
    <div className="runner-compare"><article><span>SDK HELPER</span><h2>Tool Runner</h2><ul><li>替你驱动 tool loop</li><li>工具全部由你实现</li><li>没有文件、Bash、沙箱</li></ul><b>默认：业务工具循环</b></article><div className="not-equal">≠</div><article className="agent-sdk"><span>CLAUDE CODE AS LIBRARY</span><h2>Agent SDK</h2><ul><li>Read / Grep / Edit / Bash</li><li>权限、session、hooks</li><li>Subagent + 上下文管理</li></ul><b>默认：编码 / 文件系统 Agent</b></article></div>
  </Frame>;
}

function HooksSlide() {
  return <Frame number={9} label="DETERMINISTIC ACTIONS" title="要拦，就在副作用发生之前" takeaway="PreToolUse 能阻止；PostToolUse 只能事后处理。">
    <div className="hook-timeline"><article className="pre"><span>PRE</span><strong>PreToolUse</strong><p>deny · ask · 改写参数</p><b>✓ 可以拦截</b></article><i>→</i><div className="side-effect"><span>TOOL</span><strong>issue_refund()</strong><p>钱在这里退掉</p></div><i>→</i><article className="post"><span>POST</span><strong>PostToolUse</strong><p>记录 · 转换 · 反馈</p><b>× 已经太晚</b></article></div>
    <div className="prompt-vs-code"><span>Prompt = 概率</span><strong>Hook = 可执行的确定性控制</strong></div>
  </Frame>;
}

function DeploymentSlide() {
  const selfHosted = ["手搓 Loop", "Tool Runner", "Agent SDK"];
  return <Frame number={10} label="DEPLOYMENT" title="只有一个选项连运行环境也托管" takeaway="前三种解决 Harness；Managed Agents 同时托管 Harness + Sandbox。" tone="sky">
    <div className="deployment-split"><section><span>SELF-HOSTED</span><h2>你的基础设施</h2>{selfHosted.map(item => <article key={item}><b>{item}</b><i>你部署</i></article>)}</section><section className="managed"><span>ANTHROPIC-HOSTED</span><h2>Managed Agents</h2><div className="managed-stack"><article>Harness</article><article>执行 Sandbox</article><article>持久工作区</article><article>定时触发</article></div></section></div>
  </Frame>;
}

function MemoryContextSlide() {
  return <Frame number={11} label="MEMORY & CONTEXT" title="记忆、清理、压缩是三件事" takeaway="跨会话状态必须外置；Clear 是删，Compact 是总结。" tone="lavender">
    <div className="memory-layers"><article className="session"><span>会话内</span><strong>messages[]</strong><p>每次请求都要重发</p></article><article className="external"><span>跨会话</span><strong>DB / Files / Memory Store</strong><p>状态在 Agent 外部</p></article><div className="context-tools"><article><b>CLEAR</b><span>删掉旧 tool_result</span></article><article><b>COMPACT</b><span>总结成 compaction block</span></article><article><b>ISOLATE</b><span>脏活交给 Subagent</span></article></div></div>
  </Frame>;
}

function FrameworksSlide() {
  const frameworks = [["LangGraph", "GRAPH", "显式状态机 · 中断恢复", "blue"], ["PydanticAI", "TYPES", "Python 强类型 · Schema", "purple"], ["Strands", "MODEL", "轻量模型驱动 · 灵活部署", "yellow"]];
  return <Frame number={12} label="FRAMEWORKS" title="别问谁更好，看题干要哪种抽象" takeaway="图 → LangGraph；类型 → PydanticAI；轻量模型驱动 → Strands。" tone="rose">
    <div className="framework-trio">{frameworks.map(([name, keyword, detail, tone]) => <article className={tone} key={name}><span>{keyword}</span><strong>{name}</strong><p>{detail}</p><div className="framework-visual"><i /><i /><i /></div></article>)}</div>
  </Frame>;
}

function DecisionTreeSlide() {
  return <Frame number={13} label="DECISION TREE" title="从需求约束倒推实现" takeaway="先决定需不需要 Agent，再选择 Harness 和部署模型。">
    <div className="decision-tree-grid"><article className="root"><b>路径可提前写清？</b><span>YES → Workflow</span><em>NO → 过四道闸</em></article><div className="tree-options"><article><b>业务工具循环</b><span>Tool Runner</span></article><article><b>文件 / Bash</b><span>Agent SDK</span></article><article><b>免运维沙箱</b><span>Managed Agents</span></article><article><b>显式状态机</b><span>LangGraph</span></article><article><b>Python 强类型</b><span>PydanticAI</span></article><article><b>完全自定义</b><span>手搓 Loop</span></article></div></div>
  </Frame>;
}

function FailureGallerySlide() {
  const failures = [["只 append text", "tool_use block 丢失", "400"], ["工具失败就跳过", "result 数量不匹配", "400"], ["看有没有 text", "工具根本没执行", "EARLY EXIT"], ["固定三步上 Agent", "路径不可复现", "WRONG LAYER"], ["PostToolUse deny", "副作用已发生", "TOO LATE"]];
  return <Frame number={14} label="FAILURE GALLERY" title="先定位错在哪一层" takeaway="协议、循环、架构和时机错误，修法完全不同。" tone="sky">
    <div className="failure-table">{failures.map(([bad, impact, code], index) => <article key={bad}><span>{String(index + 1).padStart(2, "0")}</span><code>{bad}</code><i>→</i><strong>{impact}</strong><b>{code}</b></article>)}</div>
  </Frame>;
}

function QuestionWalkthroughSlide() {
  const options = [["A", "手搓 Loop", "循环 + 4 工具全要写"], ["B", "Tool Runner", "省循环，4 工具仍要写"], ["C", "Claude Agent SDK", "内置 Read / Grep / Edit / Bash"], ["D", "Managed Agents", "代码要进托管沙箱"]];
  return <Frame number={15} label="QUESTION WALKTHROUGH" title="代码不出内网，还要少写脚手架" takeaway="答案 C：Agent SDK 自带所需工具，并运行在自己的基建。" tone="lavender">
    <div className="walkthrough-layout"><div className="constraints"><article><span>约束 1</span><strong>代码不出内网</strong><p>排除 D</p></article><article><span>约束 2</span><strong>尽量少写脚手架</strong><p>C 优于 A / B</p></article></div><div className="walkthrough-options">{options.map(([letter, title, note]) => <article className={letter === "C" ? "correct" : ""} key={letter}><b>{letter}</b><span>{title}</span><em>{note}</em></article>)}</div></div>
  </Frame>;
}

function RecapSlide() {
  const facts = [["1", "单次 > Workflow > Agent"], ["2", "循环只认 stop_reason"], ["3", "完整 content 原样写回"], ["4", "PreToolUse 才能拦截"], ["5", "只有 Managed 同时托管部署"], ["6", "图 / 类型 / 轻量 = L / P / S"]];
  return <Frame number={16} label="RECAP" title="进考场前，扫这六条" takeaway="正确答案通常是满足约束的最简单抽象。" tone="rose">
    <div className="agent-recap-grid">{facts.map(([n, text]) => <article key={n}><span>{n}</span><strong>{text}</strong></article>)}</div>
  </Frame>;
}

export const chapterSlides = [
  <WeightMapSlide key="weight-map" />,
  <SimpleFirstSlide key="simple-first" />,
  <ComplexityLadderSlide key="complexity-ladder" />,
  <FourGatesSlide key="four-gates" />,
  <SupervisorSlide key="supervisor-subagent" />,
  <StopReasonsSlide key="stop-reasons" />,
  <LoopInvariantsSlide key="loop-invariants" />,
  <RunnerSdkSlide key="runner-sdk" />,
  <HooksSlide key="hooks" />,
  <DeploymentSlide key="deployment-models" />,
  <MemoryContextSlide key="memory-context" />,
  <FrameworksSlide key="frameworks" />,
  <DecisionTreeSlide key="decision-tree" />,
  <FailureGallerySlide key="failure-gallery" />,
  <QuestionWalkthroughSlide key="question-walkthrough" />,
  <RecapSlide key="recap" />
];
