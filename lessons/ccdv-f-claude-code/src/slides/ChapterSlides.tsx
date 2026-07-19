import type { ReactNode } from "react";
const logoUrl = () => new URL("brand/logo-zh-full.svg", window.location.href).href;
function Frame({ number, label, title, takeaway, tone = "cream", children }: { number: number; label: string; title: string; takeaway: string; tone?: "cream" | "rose" | "lavender" | "sky"; children: ReactNode }) {
  return <main className={`slide slide-${tone}`} data-deck-page data-qa-safe-zone><div className="topline" /><header className="studio-header"><img className="brand-logo" src={logoUrl()} alt="匠人学院" /><span className="course-label">CCDV-F · Claude Code</span></header><section className="lesson-board"><div className="board-meta"><span className="eyebrow">第四课 · {label}</span><span className="progress">{String(number).padStart(2, "0")} / 12</span></div><section className="chapter-heading"><h1>{title}</h1></section><section className="slide-body">{children}</section><aside className="takeaway"><span>本页结论</span><strong>{takeaway}</strong></aside><footer><span>Claude Certified Developer – Foundations</span><strong>JR Course Studio · Domain 3</strong></footer></section></main>;
}

function WeightTrapSlide() {
  return <Frame number={1} label="WEIGHT TRAP" title="叫 Developer，却只考约 2 题" takeaway="CCDV-F 的 Claude Code 只有 3.1%；别照搬 CCAR-F 的复习配比。">
    <div className="app3-domain"><div className="app3-big"><span>DOMAIN 3</span><strong>3.1%</strong><b>≈ 2 题</b><p>八个 Domain 中倒数第二</p></div><div className="ccode-compare"><article><span>CCDV-F</span><strong>3.1%</strong><p>识别组件、层级、作用域、模式</p></article><div>≠</div><article><span>CCAR-F</span><strong>20%</strong><p>不能按架构师认证的配比复习</p></article></div></div>
  </Frame>;
}

function ComponentsSlide() {
  const items = [["Rules", "始终生效", "在项目里必须 / 不许"], ["Skills", "模型按需", "遇到这类任务按流程"], ["Commands", "用户触发", "/review-pr"], ["Agents", "主 Agent 派发", "独立上下文与工具"], ["Memory", "读写触发", "跨 Session 持久化"]];
  return <Frame number={2} label="COMPONENTS" title="五个组件，用触发者来区分" takeaway="最常考的是 Rules、Skills、Commands：谁触发，何时进上下文。" tone="sky"><div className="ccode-components">{items.map(([name, trigger, detail], i) => <article className={`x${i + 1}`} key={name}><span>{trigger}</span><strong>{name}</strong><p>{detail}</p></article>)}</div></Frame>;
}

function TriggerSlide() {
  return <Frame number={3} label="PROGRESSIVE DISCLOSURE" title="长而条件性的知识，做成 Skill" takeaway="CLAUDE.md 常驻；Skill 只在相关任务加载全文；Command 要用户明确敲。" tone="rose"><div className="ccode-trigger"><article><span>ALWAYS</span><strong>Rules</strong><p>短 · 团队红线</p><b>每轮付 token</b></article><i>→</i><article className="skill"><span>MODEL DECIDES</span><strong>Skills</strong><p>长流程 · 领域知识</p><b>渐进式披露</b></article><i>→</i><article><span>USER DECIDES</span><strong>Commands</strong><p>固定显式动作</p><b>/xxx 才存在</b></article></div></Frame>;
}

function HierarchySlide() {
  const levels = [["./CLAUDE.md", "子目录 · 最具体 · 团队"], ["<repo>/CLAUDE.md", "项目根 · 团队共享 · Git"], ["CLAUDE.local.md", "项目内个人覆写 · 不进 Git"], ["~/.claude/CLAUDE.md", "用户全局偏好 · 个人"]];
  return <Frame number={4} label="CLAUDE.MD" title="越具体越优先，越共享越要进 Git" takeaway="团队红线放项目；个人语言、端口和偏好放 user/local。" tone="lavender"><div className="ccode-hierarchy"><div className="app3-authority-stack">{levels.map(([path, role], i) => <article className={`a${i + 1}`} key={path}><code>{path}</code><strong>{role}</strong></article>)}</div><aside><span>常驻上下文</span><strong>短 · 真重要 · 团队共识</strong><p>@import 只是拆文件，不是按需加载</p></aside></div></Frame>;
}

function SettingsSlide() {
  const rows = [["settings.local.json", "项目内个人", "NO GIT", "1"], [".claude/settings.json", "项目团队", "GIT", "2"], ["~/.claude/settings.json", "用户全局", "NO GIT", "3"]];
  return <Frame number={5} label="SETTINGS" title="本地覆写 &gt; 项目配置 &gt; 用户配置" takeaway="共享权限清单进项目 Git；个人覆写 local + gitignore；密钥都不进。" tone="sky"><div className="app3-vendors ccode-settings"><div className="app3-vendor-head"><span>文件</span><span>作用域</span><span>版本控制</span><span>优先级</span></div>{rows.map((r, i) => <article className={`v${i + 1}`} key={r[0]}><code>{r[0]}</code><span>{r[1]}</span><strong>{r[2]}</strong><b>{r[3]}</b></article>)}</div></Frame>;
}

function McpScopesSlide() {
  const rows = [["local", "当前项目", "个人", "~/.claude.json"], ["project", "当前项目", "团队", ".mcp.json"], ["user", "所有项目", "个人", "~/.claude.json"]];
  return <Frame number={6} label="MCP SCOPE" title="团队共享，只能选 Project Scope" takeaway={`project .mcp.json 进 Git，真实 token 通过 \${VAR} 环境变量进入。`} tone="rose"><div className="ccode-mcp"><div className="app3-vendors"><div className="app3-vendor-head"><span>Scope</span><span>加载范围</span><span>给谁</span><span>位置</span></div>{rows.map((r, i) => <article className={i === 1 ? "selected" : ""} key={r[0]}><strong>{r[0]}</strong><span>{r[1]}</span><b>{r[2]}</b><code>{r[3]}</code></article>)}</div><div className="ccode-secret"><code>{`"Authorization": "Bearer \${CONFLUENCE_TOKEN}"`}</code><strong>配置可共享，密钥不落库</strong></div></div></Frame>;
}

function RuntimeModesSlide() {
  const modes = [["INTERACTIVE", "claude", "人坐在终端前"], ["HEADLESS", "claude -p", "脚本 / CI"], ["STREAMING", "stream-json", "边跑边解析事件"], ["AUTO", "自动接受", "风险最高 · 必须限权"]];
  return <Frame number={7} label="RUN MODES" title="模式选错，Pipeline 会一直等" takeaway="CI = Headless；需要事件流再加 Streaming；Auto 绝不等于无限权限。" tone="lavender"><div className="ccode-modes">{modes.map(([name, cmd, use], i) => <article className={`m${i + 1}`} key={name}><span>{name}</span><code>{cmd}</code><strong>{use}</strong></article>)}</div></Frame>;
}

function CiPermissionsSlide() {
  return <Frame number={8} label="CI THREAT MODEL" title="Headless 解决卡死，Allowlist 解决风险" takeaway="只读 Review 不该得到任意 Bash、写仓库或 git push 权限。" tone="sky"><div className="ccode-ci"><div className="ccode-ci-flow"><article><span>PR DIFF</span><strong>Headless Agent</strong></article><i>→</i><article className="gate"><span>ALLOWLIST</span><strong>Read · Test · gh comment</strong></article><i>→</i><article><span>OUTPUT</span><strong>Review comment</strong></article></div><div className="ccode-deny"><b>DENY</b><span>Write files</span><span>rm</span><span>git push</span><span>arbitrary Bash</span></div></div></Frame>;
}

function SessionInitSlide() {
  return <Frame number={9} label="SESSION & INIT" title="任务切换就 Clear；Init 只是起点" takeaway="旧上下文会占 token、污染注意力；机器扫描也看不见团队红线。" tone="rose"><div className="app3-session"><div className="app3-session-bad"><span>ONE SESSION</span><b>修支付 Bug</b><b>写新课程页</b><b>分析日志</b><strong>上下文互相污染</strong></div><div className="ccode-init"><article><span>/clear</span><strong>任务换了，开干净上下文</strong></article><article><span>/init</span><strong>扫描结构，生成初始 CLAUDE.md</strong></article><aside><b>人工补红线</b><p>URL 不可变 · 测试闸门 · 禁止操作</p></aside></div></div></Frame>;
}

function FailureSlide() {
  const rows = [["4000 行流程塞 Rules", "改成 Skill"], ["个人偏好写项目根", "移到 user/local"], ["MCP token 明文提交", "${VAR}"], ["CI 用 interactive", "Headless"], ["Auto 不限权限", "Allowlist"], ["期待 API 读 CLAUDE.md", "改用 system"]];
  return <Frame number={10} label="FAILURE GALLERY" title="六个错误，分别错在不同层" takeaway="先判断是上下文、作用域、模式、权限还是跨界面错误。" tone="lavender"><div className="app3-requirements ccode-failures">{rows.map(([bad, fix]) => <article key={bad}><span>{bad}</span><i>→</i><strong>{fix}</strong></article>)}</div></Frame>;
}

function CiQuestionSlide() {
  const options = [["A", "超时改 30 分钟", "只会多卡 20 分钟"], ["B", "Headless + 只读权限", "✓ 根因 + 风险一起解"], ["C", "CLAUDE.md 写别询问", "程序提示仍会等"], ["D", "Auto 接受全部", "扩权解决卡顿，方向反了"]];
  return <Frame number={11} label="QUESTION WALKTHROUGH" title="CI 日志停在“是否允许执行？”" takeaway="答案 B：claude -p 消除交互，再把权限锁成只读和受控评论。" tone="sky"><div className="app3-question"><div className="app3-clues"><article><span>线索 1</span><strong>无人环境</strong><p>GitHub Actions</p></article><article><span>线索 2</span><strong>等待输入</strong><p>程序模式问题</p></article></div><div className="app3-answer-grid">{options.map(([l, n, note]) => <article className={l === "B" ? "correct" : ""} key={l}><b>{l}</b><strong>{n}</strong><span>{note}</span></article>)}</div></div></Frame>;
}

function RecapSlide() {
  const facts = [["01", "Rules 常驻"], ["02", "Skills 按需"], ["03", "Commands 显式"], ["04", "团队规则进 Git"], ["05", "MCP project + ${VAR}"], ["06", "CI Headless"], ["07", "Auto 要限权"], ["08", "API 不读 CLAUDE.md"]];
  return <Frame number={12} label="RECAP" title="两道题，锁死这八条" takeaway="这个域值 3.1%；看懂边界，别过度投入。" tone="rose"><div className="app3-recap">{facts.map(([n, t]) => <article key={n}><span>{n}</span><strong>{t}</strong></article>)}</div></Frame>;
}

export const chapterSlides = [<WeightTrapSlide key="weight-trap" />, <ComponentsSlide key="five-components" />, <TriggerSlide key="trigger-model" />, <HierarchySlide key="claude-md-hierarchy" />, <SettingsSlide key="settings-precedence" />, <McpScopesSlide key="mcp-scopes" />, <RuntimeModesSlide key="runtime-modes" />, <CiPermissionsSlide key="ci-permissions" />, <SessionInitSlide key="session-init" />, <FailureSlide key="failure-gallery" />, <CiQuestionSlide key="ci-question" />, <RecapSlide key="recap" />];
