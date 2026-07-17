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

export const CONTENT_AD_FPS = 30;
export const CONTENT_AD_WIDTH = 1920;
export const CONTENT_AD_HEIGHT = 1080;
export const CONTENT_AD_DURATION = 900;

const CORAL = '#c15f3c';
const ORANGE = '#e57b4f';
const INK = '#211916';
const CREAM = '#fff8f1';
const PAPER = '#ffffff';
const MINT = '#d9f0e5';
const YELLOW = '#f5cc68';
const BLUE = '#b8d8ea';
const LINE = '#e4cbbc';
const clamp = { extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const };

const captions = [
  { from: 0, to: 94, text: '成为全球华人首批 Claude 官方认证架构师' },
  { from: 94, to: 252, text: 'CCAR-F 考的是生产级架构判断' },
  { from: 252, to: 445, text: '16 节课程，覆盖官方五大考试领域' },
  { from: 445, to: 628, text: '6 类场景题 + 近 480 道英文原创题' },
  { from: 628, to: 778, text: '2 套 60 题全真模考，支持双模式切换' },
  { from: 778, to: 900, text: '报名、学习、刷题、模考，一条路径走到考场' },
];

const digitalHumanCaptions = [
  { from: 0, to: 129, text: '欢迎来到 Claude 认证架构师备考课程的第一课' },
  { from: 129, to: 300, text: 'CCAR-F 考的是生产级架构判断' },
  { from: 300, to: 480, text: '16 节课程，覆盖官方五大考试领域' },
  { from: 480, to: 660, text: '6 类场景题 + 近 480 道英文原创题' },
  { from: 660, to: 800, text: '2 套 60 题全真模考，支持双模式切换' },
  { from: 800, to: 900, text: '报名、学习、刷题、模考，一条路径走到考场' },
];

const fade = (frame: number, duration: number) =>
  Math.min(
    interpolate(frame, [0, 12], [0, 1], clamp),
    interpolate(frame, [duration - 14, duration], [1, 0], clamp),
  );

const enter = (frame: number, fps: number, delay = 0) =>
  spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 160, mass: 0.8 } });

const CcarFContentAdBase: React.FC<{ withDigitalHuman: boolean }> = ({ withDigitalHuman }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: CREAM, color: INK, fontFamily: 'PingFang SC, Hiragino Sans GB, Arial, sans-serif', overflow: 'hidden' }}>
      {withDigitalHuman ? (
        <>
          <Sequence durationInFrames={129}>
            <Audio src={staticFile('audio/digital-human-intro-sync.mp3')} volume={1} />
          </Sequence>
          <Sequence from={129}>
            <Audio src={staticFile('audio/content-ad-body-elevenlabs.mp3')} volume={1} />
          </Sequence>
        </>
      ) : (
        <Audio src={staticFile('audio/content-ad-voice-elevenlabs.mp3')} volume={1} />
      )}
      <Audio
        src={staticFile(withDigitalHuman ? 'audio/aitech-kevin-macleod.mp3' : 'audio/bgm.wav')}
        loop
        volume={(audioFrame) => {
          const peak = withDigitalHuman ? 0.2 : 0.075;
          if (audioFrame < fps) return (audioFrame / fps) * peak;
          if (withDigitalHuman && frame >= 870) {
            if (frame < 884) return interpolate(frame, [870, 884], [peak, 0.28], clamp);
            return interpolate(frame, [884, CONTENT_AD_DURATION], [0.28, 0], clamp);
          }
          if (frame > CONTENT_AD_DURATION - fps * 2) return ((CONTENT_AD_DURATION - frame) / (fps * 2)) * peak;
          return peak;
        }}
      />
      <Backdrop frame={frame} />
      <BrandBar frame={frame} />
      <Sequence durationInFrames={104}><HookScene withDigitalHuman={withDigitalHuman} /></Sequence>
      {withDigitalHuman ? <Sequence durationInFrames={129}><DigitalHumanIntro /></Sequence> : null}
      <Sequence from={90} durationInFrames={176} premountFor={30}><ArchitectureScene /></Sequence>
      <Sequence from={252} durationInFrames={207} premountFor={30}><DomainsScene /></Sequence>
      <Sequence from={445} durationInFrames={197} premountFor={30}><QuestionScene /></Sequence>
      <Sequence from={628} durationInFrames={164} premountFor={30}><MocksScene /></Sequence>
      <Sequence from={778} durationInFrames={122} premountFor={30}><CtaScene /></Sequence>
      <CaptionBar frame={frame} withDigitalHuman={withDigitalHuman} />
    </AbsoluteFill>
  );
};

export const CcarFContentAd: React.FC = () => <CcarFContentAdBase withDigitalHuman={false} />;

export const CcarFContentAdDigitalHuman: React.FC = () => <CcarFContentAdBase withDigitalHuman />;

const Backdrop: React.FC<{ frame: number }> = ({ frame }) => {
  const shift = interpolate(frame, [0, CONTENT_AD_DURATION], [0, -54], clamp);
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', inset: -80, transform: `translateY(${shift}px)`, opacity: 0.34, backgroundImage: 'linear-gradient(#ead8cc 1px, transparent 1px), linear-gradient(90deg, #ead8cc 1px, transparent 1px)', backgroundSize: '68px 68px' }} />
      <div style={{ position: 'absolute', inset: '0 0 auto', height: 12, background: CORAL }} />
    </AbsoluteFill>
  );
};

const BrandBar: React.FC<{ frame: number }> = ({ frame }) => (
  <div style={{ position: 'absolute', left: 54, right: 54, top: 27, zIndex: 90 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 38, height: 38, background: INK, color: PAPER, display: 'grid', placeItems: 'center', fontWeight: 950, fontSize: 17 }}>JR</div>
        <div style={{ fontWeight: 950, fontSize: 25 }}>匠人学院</div>
      </div>
      <div style={{ padding: '8px 15px', background: MINT, border: `1px solid ${INK}`, fontSize: 19, fontWeight: 900 }}>CCAR-F · 内容实力篇</div>
    </div>
    <div style={{ height: 5, background: '#ead7ca', marginTop: 11, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${(frame / CONTENT_AD_DURATION) * 100}%`, background: CORAL }} />
    </div>
  </div>
);

const HookScene: React.FC<{ withDigitalHuman: boolean }> = ({ withDigitalHuman }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = enter(frame, fps);
  const badge = enter(frame, fps, 15);
  return (
    <AbsoluteFill style={{ opacity: fade(frame, 104) }}>
      <div style={{ position: 'absolute', left: withDigitalHuman ? 92 : 90, right: withDigitalHuman ? 700 : 90, top: withDigitalHuman ? 215 : 195, textAlign: withDigitalHuman ? 'left' : 'center' }}>
        <div style={{ color: CORAL, fontWeight: 950, fontSize: 26, marginBottom: 28, opacity: badge }}>CLAUDE CERTIFIED ARCHITECT · FOUNDATIONS</div>
        <div style={{ fontSize: withDigitalHuman ? 67 : 82, lineHeight: 1.08, fontWeight: 950, transform: `translateY(${interpolate(p, [0, 1], [48, 0], clamp)}px)` }}>
          成为全球华人首批<br /><span style={{ color: CORAL }}>Claude 官方认证架构师</span>
        </div>
        <div style={{ display: 'flex', justifyContent: withDigitalHuman ? 'flex-start' : 'center', gap: 16, marginTop: 42, opacity: badge }}>
          {['官方五域', '16 节课程', '双模式模考'].map((item, index) => (
            <div key={item} style={{ padding: '13px 22px', background: index === 1 ? YELLOW : PAPER, border: `2px solid ${INK}`, fontSize: 23, fontWeight: 900, boxShadow: '6px 6px 0 #211916' }}>{item}</div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const DigitalHumanIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = enter(frame, fps);
  const opacity = Math.min(
    interpolate(frame, [0, 12], [0, 1], clamp),
    interpolate(frame, [105, 128], [1, 0], clamp),
  );

  return (
    <div style={{ position: 'absolute', right: 92, top: 128, width: 500, height: 770, zIndex: 40, opacity, transform: `translateY(${interpolate(p, [0, 1], [28, 0], clamp)}px)` }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#d8d4cf', border: `3px solid ${INK}`, boxShadow: '12px 12px 0 #211916' }}>
        <Video
          src={staticFile('teacher/fictional-instructor-first-line.mp4')}
          muted
          objectFit="cover"
          style={{ width: '100%', height: '100%', objectPosition: '50% 18%' }}
        />
        <div style={{ position: 'absolute', left: 20, right: 20, bottom: 18, padding: '11px 16px', background: 'rgba(255,255,255,.94)', border: `2px solid ${INK}`, color: INK, fontSize: 18, fontWeight: 900, textAlign: 'center' }}>
          AI 虚拟讲师 · CCAR-F
        </div>
      </div>
    </div>
  );
};

const BrowserShell: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div style={{ position: 'absolute', left: 68, right: 68, top: 180, height: 775, background: PAPER, border: `2px solid ${INK}`, boxShadow: '12px 12px 0 #211916', overflow: 'hidden' }}>
    <div style={{ height: 52, display: 'flex', alignItems: 'center', gap: 9, padding: '0 18px', background: '#f4e7de', borderBottom: `2px solid ${INK}` }}>
      {[CORAL, YELLOW, '#54ad7e'].map((color) => <span key={color} style={{ width: 14, height: 14, borderRadius: 99, background: color }} />)}
      <div style={{ flex: 1, marginLeft: 10, height: 30, display: 'grid', placeItems: 'center', background: PAPER, border: `1px solid ${LINE}`, fontSize: 15, fontWeight: 800 }}>{label}</div>
    </div>
    <div style={{ position: 'absolute', inset: '52px 0 0', overflow: 'hidden' }}>{children}</div>
  </div>
);

const ArchitectureScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = enter(frame, fps);
  return (
    <AbsoluteFill style={{ opacity: fade(frame, 176) }}>
      <div style={{ position: 'absolute', left: 78, top: 116, fontSize: 41, fontWeight: 950 }}>考的不是背参数，是架构判断</div>
      <div style={{ position: 'absolute', left: 78, top: 210, width: 760, display: 'grid', gap: 16 }}>
        {[
          ['Agent Loop', '什么时候继续调用工具？'],
          ['Guardrails', 'Prompt 约束还是程序强制？'],
          ['Orchestration', '单 Agent 还是多 Agent？'],
          ['Reliability', '如何控制上下文与失败恢复？'],
        ].map(([title, detail], index) => {
          const itemP = enter(frame, fps, 8 + index * 7);
          return (
            <div key={title} style={{ height: 126, padding: '20px 24px', background: index === 1 ? MINT : PAPER, border: `2px solid ${INK}`, boxShadow: '7px 7px 0 #211916', transform: `translateX(${interpolate(itemP, [0, 1], [-55, 0], clamp)}px)`, opacity: itemP }}>
              <div style={{ color: CORAL, fontSize: 20, fontWeight: 950 }}>{title}</div>
              <div style={{ fontSize: 29, fontWeight: 900, marginTop: 7 }}>{detail}</div>
            </div>
          );
        })}
      </div>
      <div style={{ position: 'absolute', left: 930, right: 88, top: 195, height: 620, background: CORAL, color: PAPER, border: `2px solid ${INK}`, boxShadow: '12px 12px 0 #211916', padding: 48, transform: `scale(${interpolate(p, [0, 1], [0.9, 1], clamp)})` }}>
        <div style={{ fontSize: 22, fontWeight: 900, color: '#ffe5d7' }}>EXAM MINDSET</div>
        <div style={{ fontSize: 65, lineHeight: 1.08, fontWeight: 950, marginTop: 26 }}>四个选项<br />都像对的</div>
        <div style={{ height: 2, background: 'rgba(255,255,255,.5)', margin: '34px 0' }} />
        <div style={{ fontSize: 34, lineHeight: 1.35, fontWeight: 850 }}>你要找的是<br /><span style={{ color: YELLOW }}>最有效的第一步</span><br />和真正的根因</div>
      </div>
    </AbsoluteFill>
  );
};

const domains = [
  ['Agentic Architecture', 27, CORAL],
  ['Tool Design & MCP', 18, YELLOW],
  ['Claude Code Workflows', 20, BLUE],
  ['Prompt & Structured Output', 20, MINT],
  ['Context & Reliability', 15, '#d8c6e8'],
] as const;

const DomainsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ opacity: fade(frame, 207) }}>
      <BrowserShell label="jiangren.com.au · CCAR-F 课程大纲">
        <Video src={staticFile('captures/course-tour.webm')} muted trimBefore={8 * fps} objectFit="cover" style={{ width: '100%', height: '100%', objectPosition: '50% 46%', transform: 'scale(1.04)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,.96) 0%, rgba(255,255,255,.92) 48%, rgba(255,255,255,.08) 76%)' }} />
        <div style={{ position: 'absolute', left: 42, top: 40, width: 790 }}>
          <div style={{ color: CORAL, fontSize: 21, fontWeight: 950 }}>16 节 · 12 小时自学路径</div>
          <div style={{ fontSize: 43, fontWeight: 950, margin: '10px 0 26px' }}>按官方权重拆开学</div>
          <div style={{ display: 'grid', gap: 12 }}>
            {domains.map(([name, weight, color], index) => {
              const p = enter(frame, fps, 5 + index * 7);
              return (
                <div key={name} style={{ display: 'grid', gridTemplateColumns: '300px 1fr 64px', alignItems: 'center', gap: 14, opacity: p }}>
                  <div style={{ fontSize: 21, fontWeight: 850 }}>{name}</div>
                  <div style={{ height: 24, background: '#eadfd8', border: `1px solid ${INK}`, overflow: 'hidden' }}>
                    <div style={{ width: `${interpolate(p, [0, 1], [0, weight / 27 * 100], clamp)}%`, height: '100%', background: color }} />
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 950, color: CORAL }}>{weight}%</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            {['报名与约考', '五域精析', '场景题', '模拟冲刺'].map((item, index) => (
              <div key={item} style={{ padding: '11px 15px', background: index === 2 ? YELLOW : PAPER, border: `1px solid ${INK}`, fontSize: 18, fontWeight: 900 }}>{item}</div>
            ))}
          </div>
        </div>
      </BrowserShell>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const count = Math.round(interpolate(frame, [8, 78], [0, 479], clamp));
  return (
    <AbsoluteFill style={{ opacity: fade(frame, 197) }}>
      <BrowserShell label="CCAR-F · 英文题库与逐项精析">
        <Video src={staticFile('captures/demo-exam.webm')} muted trimBefore={10 * fps} objectFit="contain" style={{ width: '100%', height: '100%', transform: 'scale(1.035)' }} />
        <div style={{ position: 'absolute', left: 32, top: 28, width: 410, background: CORAL, color: PAPER, border: `2px solid ${INK}`, boxShadow: '9px 9px 0 #211916', padding: '25px 28px' }}>
          <div style={{ fontSize: 76, lineHeight: 1, fontWeight: 950 }}>{count}</div>
          <div style={{ fontSize: 24, fontWeight: 900, marginTop: 10 }}>道英文原创题</div>
        </div>
        <div style={{ position: 'absolute', left: 32, bottom: 28, display: 'flex', gap: 12 }}>
          {['6 类场景题', '每个选项有解析', '错题复盘'].map((item, index) => (
            <div key={item} style={{ padding: '12px 18px', background: index === 1 ? MINT : PAPER, border: `2px solid ${INK}`, fontSize: 20, fontWeight: 900 }}>{item}</div>
          ))}
        </div>
      </BrowserShell>
    </AbsoluteFill>
  );
};

const MocksScene: React.FC = () => {
  const frame = useCurrentFrame();
  const split = interpolate(frame, [42, 118], [100, 0], clamp);
  return (
    <AbsoluteFill style={{ opacity: fade(frame, 164) }}>
      <BrowserShell label={frame < 84 ? '平台练习模式 · 看解析与诊断' : 'Pearson VUE 风格 · 练考场节奏'}>
        <Img src={staticFile('captures/mock-pearson.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${split}% 0 0)`, background: PAPER }}>
          <Img src={staticFile('captures/mock-standard.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ position: 'absolute', left: `${100 - split}%`, top: 0, bottom: 0, width: 5, background: CORAL, boxShadow: '0 0 24px rgba(193,95,60,.6)' }} />
        <div style={{ position: 'absolute', right: 32, top: 28, display: 'flex', gap: 12 }}>
          {['2 套', '每套 60 题', '120 分钟'].map((item, index) => (
            <div key={item} style={{ padding: '12px 18px', background: index === 0 ? YELLOW : PAPER, border: `2px solid ${INK}`, fontSize: 20, fontWeight: 950, boxShadow: '5px 5px 0 #211916' }}>{item}</div>
          ))}
        </div>
      </BrowserShell>
    </AbsoluteFill>
  );
};

const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = enter(frame, fps);
  return (
    <AbsoluteFill style={{ opacity: fade(frame, 122) }}>
      <div style={{ position: 'absolute', left: 100, right: 100, top: 205, display: 'grid', gridTemplateColumns: '1.35fr .65fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ color: CORAL, fontSize: 24, fontWeight: 950 }}>CLAUDE 官方架构师认证 · 考试直通包</div>
          <div style={{ fontSize: 67, lineHeight: 1.1, fontWeight: 950, marginTop: 22, transform: `translateY(${interpolate(p, [0, 1], [42, 0], clamp)}px)` }}>报名、学习、刷题、模考<br /><span style={{ color: CORAL }}>一条路径走到考场</span></div>
          <div style={{ marginTop: 42, width: 590, height: 76, background: CORAL, color: PAPER, display: 'grid', placeItems: 'center', fontSize: 29, fontWeight: 950, boxShadow: '10px 10px 0 #211916' }}>查看 CCAR-F 课程详情</div>
        </div>
        <div style={{ display: 'grid', gap: 14 }}>
          {[
            ['16', '节课程'], ['479', '道原创题'], ['2', '套全真模考'],
          ].map(([number, label], index) => (
            <div key={label} style={{ height: 128, background: index === 1 ? MINT : PAPER, border: `2px solid ${INK}`, boxShadow: '7px 7px 0 #211916', display: 'flex', alignItems: 'baseline', gap: 16, padding: '22px 30px' }}>
              <div style={{ color: CORAL, fontSize: 54, fontWeight: 950 }}>{number}</div>
              <div style={{ fontSize: 25, fontWeight: 900 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 100, bottom: 96, color: '#765f55', fontSize: 16, fontWeight: 700 }}>Music: “Aitech” by Kevin MacLeod · CC BY 3.0</div>
    </AbsoluteFill>
  );
};

const CaptionBar: React.FC<{ frame: number; withDigitalHuman: boolean }> = ({ frame, withDigitalHuman }) => {
  const activeCaptions = withDigitalHuman ? digitalHumanCaptions : captions;
  const active = activeCaptions.find((caption) => frame >= caption.from && frame < caption.to) ?? activeCaptions[activeCaptions.length - 1];
  const local = frame - active.from;
  const opacity = Math.min(
    interpolate(local, [0, 8], [0, 1], clamp),
    interpolate(frame, [active.to - 9, active.to], [1, 0], clamp),
  );
  return (
    <div style={{ position: 'absolute', left: 330, right: 330, bottom: 17, zIndex: 100, opacity }}>
      <div style={{ background: 'rgba(33,25,22,.96)', color: PAPER, border: `2px solid ${PAPER}`, padding: '12px 22px', fontSize: 25, lineHeight: 1.25, fontWeight: 850, textAlign: 'center', boxShadow: `8px 8px 0 ${CORAL}` }}>{active.text}</div>
    </div>
  );
};
