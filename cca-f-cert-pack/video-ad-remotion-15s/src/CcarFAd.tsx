import React from 'react';
import { Audio, Video } from '@remotion/media';
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_IN_FRAMES = 900;

const ORANGE = '#d4512c';
const INK = '#201714';
const CREAM = '#fff8f1';
const PAPER = '#ffffff';
const MINT = '#d9f1e7';
const LINE = '#e7cbb9';
const clamp = { extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const };

const fadeScene = (frame: number, duration: number) =>
  Math.min(
    interpolate(frame, [0, 14], [0, 1], clamp),
    interpolate(frame, [duration - 16, duration], [1, 0], clamp),
  );

const enter = (frame: number, fps: number) =>
  spring({ frame, fps, config: { damping: 18, stiffness: 145, mass: 0.85 } });

const captions = [
  { from: 0, to: 92, text: 'Claude 官方架构师认证 CCAR-F，怎么准备？' },
  { from: 92, to: 300, text: '五大考试域，拆成十四章学习路径' },
  { from: 300, to: 530, text: '479 道英文题库，每题逐项拆解干扰项' },
  { from: 530, to: 735, text: '平台模式 + Pearson VUE 风格模拟考试' },
  { from: 735, to: 900, text: '成为全球华人首批 Claude 官方认证架构师' },
];

export const CcarFAd: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: CREAM, color: INK, fontFamily: 'PingFang SC, Hiragino Sans GB, Arial, sans-serif', overflow: 'hidden' }}>
      <Audio src={staticFile('audio/product-tour-voice-elevenlabs.mp3')} volume={1} />
      <Audio
        src={staticFile('audio/bgm.wav')}
        loop
        volume={(audioFrame) => {
          const peak = 0.1;
          if (audioFrame < fps) return (audioFrame / fps) * peak;
          if (frame > DURATION_IN_FRAMES - fps * 2) return ((DURATION_IN_FRAMES - frame) / (fps * 2)) * peak;
          return peak;
        }}
      />
      <Backdrop frame={frame} />
      <BrandBar frame={frame} />
      <Sequence durationInFrames={105}><HookScene /></Sequence>
      <Sequence from={90} durationInFrames={225} premountFor={30}><CourseScene /></Sequence>
      <Sequence from={300} durationInFrames={245} premountFor={30}><DemoExamScene /></Sequence>
      <Sequence from={530} durationInFrames={220} premountFor={30}><MockModesScene /></Sequence>
      <Sequence from={735} durationInFrames={165} premountFor={30}><CtaScene /></Sequence>
      <CaptionBar frame={frame} />
    </AbsoluteFill>
  );
};

const Backdrop: React.FC<{ frame: number }> = ({ frame }) => {
  const drift = interpolate(frame, [0, DURATION_IN_FRAMES], [0, -80], clamp);
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', inset: -100, transform: `translateY(${drift}px)`, opacity: 0.32, backgroundImage: 'linear-gradient(#e8d3c4 1px, transparent 1px), linear-gradient(90deg, #e8d3c4 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 12, background: ORANGE }} />
    </AbsoluteFill>
  );
};

const BrandBar: React.FC<{ frame: number }> = ({ frame }) => (
  <div style={{ position: 'absolute', left: 54, right: 54, top: 28, zIndex: 90 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 38, height: 38, background: INK, color: PAPER, display: 'grid', placeItems: 'center', fontWeight: 950, fontSize: 17 }}>JR</div>
        <div style={{ fontWeight: 950, fontSize: 25 }}>匠人学院</div>
      </div>
      <div style={{ padding: '8px 15px', background: MINT, border: `1px solid ${INK}`, fontSize: 19, fontWeight: 900 }}>CCAR-F · 网页实录</div>
    </div>
    <div style={{ height: 5, background: '#ead7ca', marginTop: 11, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${(frame / DURATION_IN_FRAMES) * 100}%`, background: ORANGE }} />
    </div>
  </div>
);

const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = enter(frame, fps);
  const cursor = interpolate(frame, [25, 72], [690, 390], clamp);
  return (
    <AbsoluteFill style={{ opacity: fadeScene(frame, 105) }}>
      <div style={{ position: 'absolute', left: 90, width: 760, top: 235 }}>
        <div style={{ fontSize: 25, fontWeight: 900, color: ORANGE, marginBottom: 22 }}>CLAUDE CERTIFIED ARCHITECT · FOUNDATIONS</div>
        <div style={{ fontSize: 80, lineHeight: 1.06, fontWeight: 950, transform: `translateY(${interpolate(p, [0, 1], [55, 0], clamp)}px)` }}>
          不是讲概念<br />直接看怎么学
        </div>
        <div style={{ fontSize: 29, lineHeight: 1.45, color: '#684d41', fontWeight: 750, marginTop: 28 }}>真实课程网页、真实英文题目、真实模拟考试界面。</div>
      </div>
      <div style={{ position: 'absolute', left: 930, right: 90, top: 205, height: 590, background: PAPER, border: `2px solid ${INK}`, boxShadow: '14px 14px 0 #201714', padding: 34 }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 55 }}>
          {[ORANGE, '#f3bd43', '#4ab17f'].map((color) => <span key={color} style={{ width: 18, height: 18, borderRadius: 99, background: color }} />)}
        </div>
        <div style={{ fontSize: 28, fontWeight: 900, color: ORANGE }}>jiangren.com.au</div>
        <div style={{ fontSize: 48, lineHeight: 1.2, fontWeight: 950, marginTop: 26 }}>课程大纲 → 英文题库 → 模拟考试</div>
        <div style={{ position: 'absolute', left: cursor, bottom: 85, width: 48, height: 48, borderRadius: 99, background: ORANGE, boxShadow: '0 0 0 14px rgba(212,81,44,.2)' }} />
      </div>
    </AbsoluteFill>
  );
};

const SceneHeading: React.FC<{ kicker: string; title: string; detail: string }> = ({ kicker, title, detail }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = enter(frame, fps);
  return (
    <div style={{ position: 'absolute', left: 72, right: 72, top: 112, display: 'flex', alignItems: 'baseline', gap: 28, opacity: p, transform: `translateY(${interpolate(p, [0, 1], [26, 0], clamp)}px)` }}>
      <div style={{ color: ORANGE, fontSize: 21, fontWeight: 950, whiteSpace: 'nowrap' }}>{kicker}</div>
      <div style={{ fontSize: 42, lineHeight: 1, fontWeight: 950, whiteSpace: 'nowrap' }}>{title}</div>
      <div style={{ fontSize: 22, lineHeight: 1.35, fontWeight: 750, color: '#65493d' }}>{detail}</div>
    </div>
  );
};

const BrowserShell: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div style={{ position: 'absolute', left: 70, right: 70, top: 195, height: 760, background: PAPER, border: `2px solid ${INK}`, boxShadow: '12px 12px 0 rgba(32,23,20,.95)', overflow: 'hidden' }}>
    <div style={{ height: 54, display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', background: '#f5e8df', borderBottom: `2px solid ${INK}` }}>
      {[ORANGE, '#f0bd48', '#45ad79'].map((color) => <span key={color} style={{ width: 15, height: 15, borderRadius: 99, background: color }} />)}
      <div style={{ flex: 1, marginLeft: 12, height: 32, display: 'grid', placeItems: 'center', background: PAPER, border: `1px solid ${LINE}`, fontSize: 16, fontWeight: 800 }}>{label}</div>
    </div>
    <div style={{ position: 'absolute', left: 0, right: 0, top: 54, bottom: 0, overflow: 'hidden', background: PAPER }}>{children}</div>
  </div>
);

const CourseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const zoom = interpolate(frame, [0, 225], [1.01, 1.07], clamp);
  return (
    <AbsoluteFill style={{ opacity: fadeScene(frame, 225) }}>
      <SceneHeading kicker="01 · 章节学习" title="14 章课程大纲" detail="五大考试域按官方权重组织，章节、练习与考点映射在同一条路径里。" />
      <BrowserShell label="jiangren.com.au/certifications/exam/ccar-f">
        <Video src={staticFile('captures/course-tour.webm')} muted trimBefore={8 * fps} objectFit="cover" style={{ width: '100%', height: '100%', objectPosition: '50% 48%', transform: `scale(${zoom})` }} />
      </BrowserShell>
    </AbsoluteFill>
  );
};

const DemoExamScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const zoom = interpolate(frame, [0, 245], [1.01, 1.07], clamp);
  return (
    <AbsoluteFill style={{ opacity: fadeScene(frame, 245) }}>
      <SceneHeading kicker="02 · 英文题库" title="真实点击，不是截图轮播" detail="开始答题、选择答案、进入下一题；英文题干直接训练考场阅读节奏。" />
      <BrowserShell label="CCAR-F · Demo Exam">
        <Video src={staticFile('captures/demo-exam.webm')} muted trimBefore={10 * fps} objectFit="contain" style={{ width: '100%', height: '100%', objectPosition: '50% 50%', transform: `scale(${zoom})` }} />
      </BrowserShell>
    </AbsoluteFill>
  );
};

const MockModesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const split = interpolate(frame, [72, 145], [100, 0], clamp);
  const cursorX = interpolate(frame, [30, 180], [540, 1330], clamp);
  return (
    <AbsoluteFill style={{ opacity: fadeScene(frame, 220) }}>
      <SceneHeading kicker="03 · 双模式模考" title="平台模式 / Pearson VUE" detail="日常训练看解析，冲刺阶段切换考场风格，完整保留题目区与导航栏。" />
      <BrowserShell label={frame < 110 ? '平台练习模式' : 'Pearson VUE 风格'}>
        <Img src={staticFile('captures/mock-pearson.png')} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%' }} />
        <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${split}% 0 0)`, background: PAPER }}>
          <Img src={staticFile('captures/mock-standard.png')} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%' }} />
        </div>
        <div style={{ position: 'absolute', left: `${100 - split}%`, top: 0, bottom: 0, width: 5, background: ORANGE, boxShadow: '0 0 24px rgba(212,81,44,.55)' }} />
        <div style={{ position: 'absolute', left: cursorX, top: 555, width: 40, height: 40, borderRadius: 99, background: ORANGE, boxShadow: '0 0 0 12px rgba(212,81,44,.18)' }} />
      </BrowserShell>
    </AbsoluteFill>
  );
};

const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = enter(frame, fps);
  return (
    <AbsoluteFill style={{ opacity: fadeScene(frame, 165) }}>
      <div style={{ position: 'absolute', left: 100, width: 1020, top: 230 }}>
        <div style={{ color: ORANGE, fontWeight: 950, fontSize: 25, marginBottom: 22 }}>CLAUDE CERTIFIED ARCHITECT · FOUNDATIONS</div>
        <div style={{ fontSize: 68, lineHeight: 1.12, fontWeight: 950, transform: `translateY(${interpolate(p, [0, 1], [36, 0], clamp)}px)` }}>成为全球华人首批<br />Claude 官方认证架构师</div>
        <div style={{ marginTop: 55, width: 560, height: 82, background: ORANGE, color: PAPER, display: 'grid', placeItems: 'center', fontSize: 30, fontWeight: 950, boxShadow: '10px 10px 0 #201714' }}>查看 CCAR-F 课程详情</div>
      </div>
      <div style={{ position: 'absolute', left: 1210, right: 100, top: 220, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {[
          ['课程', '14 章'], ['题库', '479 道'], ['模考', '双模式'], ['复盘', 'AI 解析'],
        ].map(([label, value], index) => (
          <div key={label} style={{ height: 185, background: index === 3 ? MINT : PAPER, border: `2px solid ${INK}`, padding: 28, boxShadow: '8px 8px 0 rgba(32,23,20,.95)' }}>
            <div style={{ color: ORANGE, fontSize: 21, fontWeight: 900 }}>{label}</div>
            <div style={{ fontSize: 42, fontWeight: 950, marginTop: 15 }}>{value}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const CaptionBar: React.FC<{ frame: number }> = ({ frame }) => {
  const active = captions.find((caption) => frame >= caption.from && frame < caption.to) ?? captions[captions.length - 1];
  const localFrame = frame - active.from;
  const opacity = Math.min(
    interpolate(localFrame, [0, 9], [0, 1], clamp),
    interpolate(frame, [active.to - 10, active.to], [1, 0], clamp),
  );
  return (
    <div style={{ position: 'absolute', left: 360, right: 360, bottom: 18, zIndex: 100, opacity }}>
      <div style={{ background: 'rgba(32,23,20,.95)', color: PAPER, border: `2px solid ${PAPER}`, padding: '13px 24px', fontSize: 25, lineHeight: 1.25, fontWeight: 850, textAlign: 'center', boxShadow: '8px 8px 0 rgba(212,81,44,.85)' }}>{active.text}</div>
    </div>
  );
};
