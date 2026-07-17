import { type CSSProperties, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { useClassroomBridge } from "./classroomBridge";

const DECK_WIDTH = 1600;
const DECK_HEIGHT = 900;
const SHADOW_SAFE_AREA = 18;

const Logo = () => (
  <img
    className="brand-logo"
    src={new URL("brand/logo-zh-full.svg", window.location.href).href}
    alt="匠人学院"
  />
);

function WeightBar({ label, value, tone, detail }: { label: string; value: string; tone: "purple" | "red"; detail: string }) {
  return (
    <article className={`weight-card ${tone}`}>
      <div className="weight-heading">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className="weight-track"><i /></div>
      <p>{detail}</p>
    </article>
  );
}

function FirstSlide() {
  return (
    <main className="slide" data-deck-page>
      <div className="topline" />
      <header>
        <div className="header-copy">
          <span className="eyebrow">CCDV-F · 第一课</span>
          <span className="progress">01 / 01 · VISUAL PILOT</span>
        </div>
        <Logo />
      </header>

      <section className="lesson-layout comparison-grid">
        <div className="statement">
          <p className="kicker">先纠正一个复习方向</p>
          <h1>
            一个叫 <em>Developer</em> 的考试，
            <br />Claude Code 只占 <mark>3.1%</mark>
          </h1>
          <p className="lede">名字最显眼的工具，不等于考纲里最重的能力。</p>
        </div>

        <div className="evidence-panel" aria-label="官方 Blueprint 权重对比">
          <div className="panel-label">OFFICIAL BLUEPRINT</div>
          <WeightBar
            label="Applications & Integration"
            value="33.1%"
            tone="red"
            detail="整卷约三分之一：API、应用设计与软件工程"
          />
          <div className="ratio-callout"><b>10.7×</b><span>权重差</span></div>
          <WeightBar
            label="Claude Code"
            value="3.1%"
            tone="purple"
            detail="53 题中约 2 题；扫清组件和配置即可"
          />
        </div>
      </section>

      <aside className="takeaway">
        <span>复习动作</span>
        <strong>先吃透 Applications & Integration，再补 Claude Code。</strong>
      </aside>

      <footer>
        <span>Claude Certified Developer – Foundations</span>
        <strong>JR Course Studio · Local Experiment</strong>
      </footer>
    </main>
  );
}

const slides = [<FirstSlide />];

export default function App() {
  const [index, setIndex] = useState(0);
  const [deckScale, setDeckScale] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const loadSlide = useCallback((next: number) => setIndex(next), []);
  const { isClassroom, notifySlideReady } = useClassroomBridge(loadSlide, slides.length);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const fitDeck = () => {
      const width = Math.max(0, stage.clientWidth - SHADOW_SAFE_AREA * 2);
      const height = Math.max(0, stage.clientHeight - SHADOW_SAFE_AREA * 2);
      setDeckScale(Math.min(width / DECK_WIDTH, height / DECK_HEIGHT));
    };
    fitDeck();
    const observer = new ResizeObserver(fitDeck);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => notifySlideReady(index), [index, notifySlideReady]);

  return (
    <div className="stage" ref={stageRef} data-deck-stage>
      <div
        className="deck-canvas"
        data-deck-canvas
        data-design-width={DECK_WIDTH}
        data-design-height={DECK_HEIGHT}
        style={{ "--deck-scale": deckScale } as CSSProperties}
      >
        {slides[index]}
      </div>
      {!isClassroom && (
        <div className="review-controls">
          <button type="button" onClick={() => audioRef.current?.play()}>▶ 试听第一句话</button>
          <span>Amy · 3.29 sec · Local only</span>
          <audio
            ref={audioRef}
            src={new URL("audio/claude-code-weight-reveal.mp3", window.location.href).href}
            preload="metadata"
          />
        </div>
      )}
    </div>
  );
}
