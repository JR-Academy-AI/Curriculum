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
        <span className="course-label">CCDV-F · 认证全景与报名链路</span>
      </header>
      <section className="lesson-board">
        <div className="board-meta">
          <span className="eyebrow">第一课 · {label}</span>
          <span className="progress">{String(number).padStart(2, "0")} / 15</span>
        </div>
        <section className="chapter-heading"><h1>{title}</h1></section>
        <section className="slide-body">{children}</section>
        <aside className="takeaway"><span>本页结论</span><strong>{takeaway}</strong></aside>
        <footer><span>Claude Certified Developer – Foundations</span><strong>JR Course Studio · Local Classroom Pilot</strong></footer>
      </section>
    </main>
  );
}

function OpeningSlide() {
  return (
    <Frame number={1} label="EXAM REALITY" title="先把最容易说错的数字钉死" takeaway="CCDV-F 是 53 题，不是 60 题。">
      <div className="hero-metric-layout">
        <div className="hero-number"><span>53</span><b>题</b><em>NOT 60</em></div>
        <div className="metric-equation"><div><strong>120</strong><span>分钟</span></div><i>÷</i><div><strong>53</strong><span>题</span></div><i>=</i><div className="answer"><strong>2:15</strong><span>每题</span></div></div>
        <div className="code-strip"><code>{`{ code, error_stack, JSON_payload }`}</code><span>读题本身就会吃掉时间</span></div>
      </div>
    </Frame>
  );
}

function DomainsSlide() {
  const domains = [
    ["D2", "Applications & Integration", 33.1, "coral"], ["D5", "Model Selection", 16.8, "yellow"],
    ["D1", "Agents & Workflows", 14.7, "blue"], ["D6", "Prompt & Context", 11, "purple"],
    ["D8", "Tools & MCPs", 10.6, "green"], ["D7", "Security & Safety", 8.1, "navy"],
    ["D3", "Claude Code", 3.1, "muted"], ["D4", "Eval & Debugging", 2.6, "muted"]
  ] as const;
  return (
    <Frame number={2} label="BLUEPRINT" title="八个 Domain，权重并不平均" takeaway="复习时间按权重排：D2 优先，Claude Code 设硬上限。" tone="rose">
      <div className="domain-layout">
        <div className="domain-bars">{domains.map(([id, name, value, tone]) => <div className={`domain-row ${tone}`} key={id}><b>{id}</b><span>{name}</span><i><u style={{ width: `${value / 33.1 * 100}%` }} /></i><strong>{value.toFixed(1)}%</strong></div>)}</div>
        <div className="domain-callouts"><article><span>≈ 18 题</span><strong>D2 吃掉整卷三分之一</strong></article><article><span>≈ 2 题</span><strong>Claude Code 只有 3.1%</strong></article><article><span>13.6%</span><strong>传统工程比 MCP 整域更重</strong></article></div>
      </div>
    </Frame>
  );
}

function ExamDetailsSlide() {
  return (
    <Frame number={3} label="EXAM DETAILS" title="考试硬指标：别用别门的数据套" takeaway="720 是量表分；每道题独立阅读；没有分域过线。" tone="sky">
      <div className="exam-grid">
        <article className="exam-primary"><span>PASSING SCORE</span><strong>720</strong><p>100–1000 量表分<br />≠ 答对 72%</p></article>
        <article><b>53</b><span>单选 + 多选</span><p>多选会明确选几个</p></article><article><b>120</b><span>分钟</span><p>每题独立，没有场景抽题</p></article><article><b>12</b><span>个月有效</span><p>无前置认证</p></article>
        <article className="exam-wide"><div><strong>线上 OnVUE</strong><span>或</span><strong>线下考场</strong></div><p>Pearson VUE · 闭卷监考 · 开考前签 NDA</p></article>
      </div>
    </Frame>
  );
}

function FitCheckSlide() {
  const items = [["01", "独立写过可运行服务？", "没有 → 先别报"], ["02", "代码里调过 Messages API？", "没有 → 先打通"], ["03", "做过 tool_use、重试与成本？", "缺什么补什么"], ["READY", "修过限流与上下文爆炸", "可以系统冲刺"]];
  return (
    <Frame number={4} label="READINESS" title="你现在适不适合报考？" takeaway="说不清 tool_use 循环，先写一遍再报名。" tone="lavender">
      <div className="decision-flow">{items.map(([n, q, a], index) => <div className="decision-pair" key={n}><article className={n === "READY" ? "ready" : ""}><span>{n}</span><p>{q}</p><b>{a}</b></article>{index < items.length - 1 && <i>→</i>}</div>)}</div>
      <div className="readiness-test"><code>stop_reason === "tool_use"</code><span>执行工具 → tool_result → 继续消息循环</span></div>
    </Frame>
  );
}

function StudyAllocationSlide() {
  const plans = [["D2", 13, 33.1], ["D5", 7, 16.8], ["D1", 6, 14.7], ["D6", 4.5, 11], ["D8", 4, 10.6], ["D7", 3, 8.1], ["D3", 1.5, 3.1], ["D4", 1, 2.6]];
  return (
    <Frame number={5} label="STUDY PLAN" title="40 小时，不要平均分" takeaway="前三大域 D2 + D5 + D1 合计 64.6%。">
      <div className="allocation-layout"><div className="allocation-total"><span>总预算</span><strong>40h</strong><p>按 Blueprint 权重投入</p></div><div className="allocation-stack">{plans.map(([id, hours, weight], index) => <div className={`allocation-segment s${index + 1}`} style={{ flex: weight }} key={id}><b>{id}</b><span>{hours}h</span></div>)}</div><div className="allocation-priority"><article><b>13h</b><span>D2 · API、工程、错误与 Schema</span></article><article><b>13h</b><span>D5 + D1 · 模型取舍与 Agent</span></article><article><b>2.5h</b><span>D3 + D4 · 快扫，别恋战</span></article></div></div>
    </Frame>
  );
}

function QuestionDemoSlide() {
  return (
    <Frame number={6} label="QUESTION DEMO" title="格式不稳定，应该在哪一层修？" takeaway="自然语言约束是概率；Schema 约束才可验证。" tone="rose">
      <div className="question-layout"><div className="broken-json"><span>4% RESPONSES FAIL</span><code>{`{ "years": 5 }`}</code><code className="bad">{`{ "years": "5 years" }`}</code><p>偶尔还多一句：Here is the data...</p></div><div className="option-list"><article><b>A</b><span>temperature 调到 0</span><em>采样 ≠ 格式</em></article><article><b>B</b><span>换更强模型</span><em>更贵，仍是概率</em></article><article className="correct"><b>C</b><span>Structured Outputs + JSON Schema</span><em>API 层强制 + 解析侧校验</em></article><article><b>D</b><span>Prompt 再写严一点</span><em>仍在错误层打补丁</em></article></div></div>
    </Frame>
  );
}

function RegistrationSlide() {
  const steps = [["01", "个人入口", "无法自助注册"], ["02", "匠人 · CPN", "开通 Academy 账号"], ["03", "你本人", "注册 + 支付官方考试费"], ["04", "Pearson VUE", "选日期与考场"]];
  return (
    <Frame number={7} label="REGISTRATION" title="报名链路：开账号，不代购名额" takeaway="匠人打通准入；报名、付款和约考都由你本人完成。" tone="sky">
      <div className="registration-flow">{steps.map(([n, who, action], index) => <div className="registration-pair" key={n}><article className={index === 0 ? "blocked" : ""}><span>{n}</span><b>{who}</b><strong>{action}</strong></article>{index < steps.length - 1 && <i>→</i>}</div>)}</div>
      <div className="registration-note"><b>准确身份</b><span>CPN Registered · 合规通道</span><em>不是 Anthropic 官方授权 Partner</em></div>
    </Frame>
  );
}

function MisconceptionsSlide() {
  const myths = [["60 题", "53 题"], ["720 = 72%", "量表分"], ["每域要过线", "只看总分"], ["主考 Claude Code", "仅 3.1%"], ["工程功底没用", "工程占 13.6%"], ["证书终身", "有效 12 个月"], ["背 API 就能过", "约束决定答案"], ["先考 Associate", "没有前置"]];
  return <Frame number={8} label="MYTH BUSTING" title="八个看似合理的错误结论" takeaway="先校准考试模型，再开始背知识。" tone="lavender"><div className="myth-grid">{myths.map(([wrong, right], index) => <article key={wrong}><span>{String(index + 1).padStart(2, "0")}</span><del>{wrong}</del><i>→</i><strong>{right}</strong></article>)}</div></Frame>;
}

function ExamDaySlide() {
  return <Frame number={9} label="EXAM DAY" title="别把分数丢在监考流程上" takeaway="最后 24 小时内改期、取消或缺考，考试费作废。"><div className="exam-day-layout"><div className="clean-desk"><span>ONVUE DESK CHECK</span><div className="desk"><i /><b>干净桌面</b></div><ul><li>无纸笔、书和笔记</li><li>无手机、手表、耳机</li><li>无第二块屏幕</li><li>证件姓名完全一致</li></ul></div><div className="deadline"><strong>24h</strong><span>改期 / 取消截止线</span><p>NDA 不接受 → 终止且不退费<br />迟到或缺考 → 重新报名</p></div></div></Frame>;
}

function RenewalSlide() {
  return <Frame number={10} label="RENEWAL" title="12 个月后，走两条完全不同的路" takeaway="拿证当天设置第 11 个月提醒。" tone="rose"><div className="renewal-timeline"><div className="month zero"><b>0</b><span>通过考试</span></div><i /><div className="month eleven"><b>11</b><span>提醒续证</span></div><i /><div className="month twelve"><b>12</b><span>证书到期</span></div></div><div className="renewal-choice"><article className="good"><span>到期前</span><strong>免费 · 非监考评估</strong><p>复习考纲变更点即可续期</p></article><article className="bad"><span>已经过期</span><strong>全额付费 · 重新监考</strong><p>从头参加完整考试</p></article></div></Frame>;
}

function RetakeSlide() {
  return <Frame number={11} label="RETAKE" title="重考不是无限刷新" takeaway="滚动 12 个月同一门最多 4 次，每次重新付费。" tone="sky"><div className="retake-steps"><article><span>第 1 次未过</span><strong>14</strong><b>天</b></article><i>→</i><article><span>第 2 次未过</span><strong>30</strong><b>天</b></article><i>→</i><article><span>第 3 次未过</span><strong>90</strong><b>天</b></article></div><div className="retake-rules"><b>4×</b><span>12 个月内最多 4 次</span><em>限制按单门计算 · 成绩异议 14 天内提出</em></div></Frame>;
}

function FourWeekPlanSlide() {
  const weeks = [["W1–2", "D2 · 33.1%", "API / tool loop / 429 / Schema / 工程基础"], ["W3", "D5 + D1", "模型取舍 / 成本 / Agent / Workflow"], ["W4·上", "D6 + D8 + D7", "Context / MCP / Injection / 最小权限"], ["W4·下", "D3 + D4 + MOCK", "快扫低权重域 / 120 分钟整卷"]];
  return <Frame number={12} label="FOUR WEEKS" title="四周计划：顺序比平均更重要" takeaway="D2 不拖到最后；模拟卷必须一次做完整 53 题。" tone="lavender"><div className="week-grid">{weeks.map(([week, title, detail], index) => <article className={`week-${index + 1}`} key={week}><span>{week}</span><strong>{title}</strong><p>{detail}</p><i>{index < 3 ? "→" : "✓"}</i></article>)}</div></Frame>;
}

function OfficialPrepSlide() {
  const pipeline = [["1", "Messages API"], ["2", "一个或多个 Tools"], ["3", "Prompt + Context"], ["4", "Safety + Eval"], ["LIVE", "真实运行与排错"]];
  return <Frame number={13} label="OFFICIAL PREP" title="官方建议的重心：运营一个真实应用" takeaway="能跑、能报错、能恢复，才是真正的备考材料。"><div className="app-pipeline">{pipeline.map(([n, text], index) => <div className="pipeline-pair" key={n}><article className={n === "LIVE" ? "live" : ""}><b>{n}</b><span>{text}</span></article>{index < pipeline.length - 1 && <i>→</i>}</div>)}</div><blockquote>没有唯一必修课程，也没有任何资源能保证通过。</blockquote></Frame>;
}

function HonestySlide() {
  return <Frame number={14} label="OUR PROMISE" title="我们不卖“保过”" takeaway="路线与准入可以负责，考试结果不能替你承诺。" tone="rose"><div className="promise-layout"><div className="not-promise"><span>不会承诺</span><strong>稳过 · 必过 · 包通过</strong></div><div className="promise-list"><article><b>01</b><span>内容对齐官方 Blueprint</span></article><article><b>02</b><span>CPN 合规通道开通报名账号</span></article><article><b>03</b><span>复习路线严格按权重安排</span></article></div></div></Frame>;
}

function RecapSlide() {
  const facts = [["53", "题"], ["120", "分钟"], ["720", "量表分"], ["33.1%", "D2"], ["3.1%", "Claude Code"], ["12", "个月"]];
  return <Frame number={15} label="RECAP" title="进考场前，只扫这六个数字" takeaway="按权重学习，按合规链路报名，按真实工程经验答题。" tone="sky"><div className="recap-grid">{facts.map(([value, label]) => <article key={value + label}><strong>{value}</strong><span>{label}</span></article>)}</div><div className="recap-flow"><span>个人不能自助注册</span><i>→</i><span>匠人开账号</span><i>→</i><span>本人报名付费</span><i>→</i><span>Pearson VUE 约考</span></div></Frame>;
}

export const chapterSlides = [<OpeningSlide key="opening" />, <DomainsSlide key="domains" />, <ExamDetailsSlide key="exam-details" />, <FitCheckSlide key="fit-check" />, <StudyAllocationSlide key="study-allocation" />, <QuestionDemoSlide key="question-demo" />, <RegistrationSlide key="registration" />, <MisconceptionsSlide key="misconceptions" />, <ExamDaySlide key="exam-day" />, <RenewalSlide key="renewal" />, <RetakeSlide key="retake" />, <FourWeekPlanSlide key="four-week-plan" />, <OfficialPrepSlide key="official-prep" />, <HonestySlide key="honesty" />, <RecapSlide key="recap" />];
