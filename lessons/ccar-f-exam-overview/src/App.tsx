import { useCallback, useEffect, useState } from "react";

import { classroomConfig } from "../classroom.config";
import { useClassroomBridge } from "./classroomBridge";

const Logo = () => (
  <img className="brand-logo" src="https://jiangren.com.au/icon/logo-zh.svg" alt="匠人学院" />
);

function Frame({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <main className="slide">
      <div className="topline" />
      <header>
        <div>
          <span className="eyebrow">CCAR-F · 第一课</span>
          <div className="progress">{String(index + 1).padStart(2, "0")} / 03</div>
        </div>
        <Logo />
      </header>
      {children}
      <footer>
        <span>Claude Certified Architect – Foundations</span>
        <strong>JR Course Studio</strong>
      </footer>
    </main>
  );
}

const Questions = () => (
  <Frame index={0}>
    <section className="hero-grid">
      <div>
        <p className="kicker">报名前先做判断</p>
        <h1>开始花钱之前，<br /><em>先问清三件事</em></h1>
        <p className="lead">先建立考试定位，再决定要不要投入时间和报名费。</p>
      </div>
      <div className="question-stack">
        {[['01', '它到底考什么？', '能力边界与考试形式'], ['02', '怎么才报得上名？', '经验、注册与约考链路'], ['03', '现在值得考吗？', '真实门槛与投入判断']].map(([n, title, detail]) => (
          <article key={n} className="question-card">
            <span>{n}</span><div><h2>{title}</h2><p>{detail}</p></div>
          </article>
        ))}
      </div>
    </section>
    <aside className="takeaway">认证归属个人：它是能力背书，不是“躺着接单”的流量入口。</aside>
  </Frame>
);

const Judgement = () => (
  <Frame index={1}>
    <section className="judgement">
      <div className="judgement-copy">
        <p className="kicker purple">考试真正问的是</p>
        <h1>哪个方案<br /><em>最合适？</em></h1>
        <p className="lead">不是“能不能用”，而是风险、成本与可靠性之间的最佳取舍。</p>
      </div>
      <div className="case-card">
        <span className="case-label">场景 A · 退款前必须验证身份</span>
        <div className="choice weak"><b>Prompt 提醒</b><span>概率性遵从，模型可能忘</span></div>
        <div className="versus">VS</div>
        <div className="choice strong"><b>代码硬拦</b><span>确定性约束，更适合高风险动作</span></div>
      </div>
    </section>
    <aside className="takeaway purple-bg">六个业务场景抽四个；先判断系统病因，再选最小充分方案。</aside>
  </Frame>
);

const Readiness = () => (
  <Frame index={2}>
    <section className="readiness">
      <div>
        <p className="kicker green">报考准备度</p>
        <h1>六个月实战，<br /><em>比看过文档更重要</em></h1>
        <div className="checks">
          <div><i>✓</i><span>真实项目跑过 Claude Agent</span></div>
          <div><i>✓</i><span>用过 Agent SDK / Claude Code / MCP</span></div>
          <div><i>✓</i><span>处理过失败、死循环或上下文问题</span></div>
        </div>
      </div>
      <div className="metric">
        <span>官方建议</span><strong>6+</strong><h2>个月真实经验</h2>
        <p>没有强制前置证书。<br />准备好了，就可以直接挑战。</p>
      </div>
    </section>
    <aside className="takeaway green-bg">一句话自检：能想起一次亲手修过的 Agent 翻车，就该考。</aside>
  </Frame>
);

const slides = [<Questions />, <Judgement />, <Readiness />];

export default function App() {
  const [index, setIndex] = useState(0);
  const loadSlide = useCallback((next: number) => setIndex(next), []);
  const { isClassroom, notifySlideReady } = useClassroomBridge(loadSlide, slides.length);

  useEffect(() => notifySlideReady(index), [index, notifySlideReady]);
  useEffect(() => {
    if (isClassroom) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ")
        setIndex(value => Math.min(slides.length - 1, value + 1));
      if (event.key === "ArrowLeft") setIndex(value => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isClassroom]);

  return (
    <div className="stage">
      {slides[index]}
      {!isClassroom && (
        <nav>
          <button onClick={() => setIndex(value => Math.max(0, value - 1))}>←</button>
          <span>{index + 1} / {slides.length}</span>
          <button onClick={() => setIndex(value => Math.min(slides.length - 1, value + 1))}>→</button>
        </nav>
      )}
    </div>
  );
}
