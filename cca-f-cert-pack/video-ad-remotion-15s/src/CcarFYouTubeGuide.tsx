import React from 'react';
import {Audio, Video} from '@remotion/media';
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

export const YOUTUBE_GUIDE_FPS = 30;
export const YOUTUBE_GUIDE_WIDTH = 1920;
export const YOUTUBE_GUIDE_HEIGHT = 1080;
export const YOUTUBE_GUIDE_DURATION = 2700;

const CORAL = '#c15f3c';
const INK = '#211916';
const CREAM = '#fff8f1';
const PAPER = '#ffffff';
const MINT = '#d9f0e5';
const YELLOW = '#f5cc68';
const BLUE = '#b8d8ea';
const LINE = '#e4cbbc';
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const captions = [
  {from: 0, to: 129, text: '欢迎来到 Claude 认证架构师备考课程的第一课'},
  {from: 129, to: 480, text: '四个选项都像对的，先找题干里的硬约束'},
  {from: 480, to: 810, text: '身份未验证，绝对不能退款：应该用哪种机制？'},
  {from: 810, to: 1165, text: 'PreToolUse 在执行前拒绝，才能提供确定性保障'},
  {from: 1165, to: 1470, text: '先圈约束，再判机制，最后选最简单的有效修复'},
  {from: 1470, to: 1885, text: '偏好用 prompt，红线用代码或 hook，瞬时错误才重试'},
  {from: 1885, to: 2080, text: '16 节课程 + 6 类场景题 + 近 480 道英文原创题'},
  {from: 2080, to: 2320, text: '平台模式学解析，Pearson VUE 风格练考场节奏'},
  {from: 2320, to: 2700, text: '学会一套能迁移到新题的架构判断框架'},
];

const enter = (frame: number, fps: number, delay = 0) =>
  spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 160, mass: 0.8}});

const fade = (frame: number, duration: number) =>
  Math.min(
    interpolate(frame, [0, 12], [0, 1], clamp),
    interpolate(frame, [duration - 14, duration], [1, 0], clamp),
  );

export const CcarFYouTubeGuide: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{background: CREAM, color: INK, fontFamily: 'PingFang SC, Hiragino Sans GB, Arial, sans-serif', overflow: 'hidden'}}>
      <Sequence durationInFrames={129} premountFor={30}>
        <Audio src={staticFile('audio/digital-human-intro-sync.mp3')} volume={0.82} />
      </Sequence>
      <Sequence from={129} premountFor={30}>
        <Audio src={staticFile('audio/youtube-guide-body-elevenlabs.mp3')} volume={0.82} />
      </Sequence>
      <Audio
        src={staticFile('audio/aitech-kevin-macleod.mp3')}
        loop
        volume={(audioFrame) => {
          const peak = 0.075;
          if (audioFrame < fps) return (audioFrame / fps) * peak;
          if (frame > YOUTUBE_GUIDE_DURATION - fps * 2) {
            return ((YOUTUBE_GUIDE_DURATION - frame) / (fps * 2)) * peak;
          }
          return peak;
        }}
      />
      <Backdrop frame={frame} />
      <BrandBar frame={frame} />
      <Sequence durationInFrames={150} premountFor={30}><DigitalHumanHook /></Sequence>
      <Sequence from={129} durationInFrames={216} premountFor={30}><MindsetScene /></Sequence>
      <Sequence from={330} durationInFrames={850} premountFor={30}><CaseScene /></Sequence>
      <Sequence from={1165} durationInFrames={320} premountFor={30}><DecisionScene /></Sequence>
      <Sequence from={1470} durationInFrames={430} premountFor={30}><RuleScene /></Sequence>
      <Sequence from={1885} durationInFrames={210} premountFor={30}><CourseScene /></Sequence>
      <Sequence from={2080} durationInFrames={255} premountFor={30}><MockScene /></Sequence>
      <Sequence from={2320} durationInFrames={380} premountFor={30}><CtaScene /></Sequence>
      <CaptionBar frame={frame} />
    </AbsoluteFill>
  );
};

const Backdrop: React.FC<{frame: number}> = ({frame}) => (
  <AbsoluteFill>
    <div style={{position: 'absolute', inset: -80, transform: `translateY(${interpolate(frame, [0, YOUTUBE_GUIDE_DURATION], [0, -54], clamp)}px)`, opacity: 0.34, backgroundImage: 'linear-gradient(#ead8cc 1px, transparent 1px), linear-gradient(90deg, #ead8cc 1px, transparent 1px)', backgroundSize: '68px 68px'}} />
    <div style={{position: 'absolute', inset: '0 0 auto', height: 12, background: CORAL}} />
  </AbsoluteFill>
);

const BrandBar: React.FC<{frame: number}> = ({frame}) => (
  <div style={{position: 'absolute', left: 54, right: 54, top: 27, zIndex: 90}}>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <div style={{width: 38, height: 38, background: INK, color: PAPER, display: 'grid', placeItems: 'center', fontWeight: 950, fontSize: 17}}>JR</div>
        <div style={{fontWeight: 950, fontSize: 25}}>匠人学院</div>
      </div>
      <div style={{padding: '8px 15px', background: MINT, border: `1px solid ${INK}`, fontSize: 19, fontWeight: 900}}>CCAR-F · 架构判断实战</div>
    </div>
    <div style={{height: 5, background: '#ead7ca', marginTop: 11, overflow: 'hidden'}}>
      <div style={{height: '100%', width: `${(frame / YOUTUBE_GUIDE_DURATION) * 100}%`, background: CORAL}} />
    </div>
  </div>
);

const DigitalHumanHook: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = enter(frame, fps);
  return (
    <AbsoluteFill style={{opacity: fade(frame, 150)}}>
      <div style={{position: 'absolute', left: 92, right: 690, top: 220}}>
        <div style={{color: CORAL, fontWeight: 950, fontSize: 27}}>CLAUDE CERTIFIED ARCHITECT · FOUNDATIONS</div>
        <div style={{fontSize: 68, lineHeight: 1.08, fontWeight: 950, marginTop: 26, transform: `translateY(${interpolate(p, [0, 1], [44, 0], clamp)}px)`}}>
          一道场景题，学会<br /><span style={{color: CORAL}}>CCAR-F 的判断方法</span>
        </div>
      </div>
      <div style={{position: 'absolute', right: 92, top: 128, width: 500, height: 770, zIndex: 40, transform: `translateY(${interpolate(p, [0, 1], [28, 0], clamp)}px)`}}>
        <div style={{position: 'absolute', inset: 0, overflow: 'hidden', background: '#d8d4cf', border: `3px solid ${INK}`, boxShadow: '12px 12px 0 #211916'}}>
          <Video src={staticFile('teacher/fictional-instructor-first-line.mp4')} muted objectFit="cover" style={{width: '100%', height: '100%', objectPosition: '50% 18%'}} />
          <div style={{position: 'absolute', left: 20, right: 20, bottom: 18, padding: '11px 16px', background: 'rgba(255,255,255,.94)', border: `2px solid ${INK}`, fontSize: 18, fontWeight: 900, textAlign: 'center'}}>AI 虚拟讲师 · CCAR-F</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const MindsetScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{opacity: fade(frame, 216)}}>
      <div style={{position: 'absolute', left: 90, right: 90, top: 190, textAlign: 'center'}}>
        <div style={{color: CORAL, fontSize: 25, fontWeight: 950}}>EXAM MINDSET</div>
        <div style={{fontSize: 68, lineHeight: 1.08, fontWeight: 950, marginTop: 20}}>四个选项都像对的，怎么办？</div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 26, marginTop: 76}}>
          {[
            ['01', '圈出硬约束'],
            ['02', '判断机制类型'],
            ['03', '找最小有效修复'],
          ].map(([number, label], index) => {
            const p = enter(frame, fps, 10 + index * 10);
            return <div key={number} style={{height: 220, padding: 30, background: index === 0 ? YELLOW : PAPER, border: `2px solid ${INK}`, boxShadow: '9px 9px 0 #211916', transform: `translateY(${interpolate(p, [0, 1], [42, 0], clamp)}px)`, opacity: p}}>
              <div style={{color: CORAL, fontSize: 34, fontWeight: 950}}>{number}</div>
              <div style={{fontSize: 35, fontWeight: 950, marginTop: 38}}>{label}</div>
            </div>;
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CaseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const answerReveal = interpolate(frame, [485, 565], [0, 1], clamp);
  const options = [
    ['A', '在 system prompt 里再次强调'],
    ['B', '退款后用 PostToolUse 记录日志'],
    ['C', '失败时自动重试三次'],
    ['D', 'PreToolUse 校验身份，失败直接 deny'],
  ];
  return (
    <AbsoluteFill style={{opacity: fade(frame, 850)}}>
      <div style={{position: 'absolute', left: 76, right: 76, top: 130, bottom: 104, display: 'grid', gridTemplateColumns: '.82fr 1.18fr', gap: 36}}>
        <div style={{background: CORAL, color: PAPER, border: `2px solid ${INK}`, boxShadow: '10px 10px 0 #211916', padding: 42}}>
          <div style={{fontSize: 20, color: '#ffe2d2', fontWeight: 950}}>原创场景题</div>
          <div style={{fontSize: 42, lineHeight: 1.22, fontWeight: 950, marginTop: 24}}>客服 Agent 可以查询订单，也可以执行退款。</div>
          <div style={{height: 2, background: 'rgba(255,255,255,.45)', margin: '30px 0'}} />
          <div style={{fontSize: 35, lineHeight: 1.38, fontWeight: 900}}>公司规定：身份没有验证通过，<span style={{color: YELLOW}}>绝对不能退款</span>。</div>
        </div>
        <div style={{display: 'grid', gap: 18, alignContent: 'center'}}>
          {options.map(([letter, text], index) => {
            const p = enter(frame, fps, 16 + index * 10);
            const correct = index === 3;
            return <div key={letter} style={{height: 126, padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 22, background: correct ? `rgba(217,240,229,${0.3 + answerReveal * 0.7})` : PAPER, border: `${correct ? 3 : 2}px solid ${correct ? CORAL : INK}`, boxShadow: correct && answerReveal > 0.5 ? '8px 8px 0 #c15f3c' : '6px 6px 0 #211916', opacity: p}}>
              <div style={{width: 58, height: 58, display: 'grid', placeItems: 'center', background: correct ? CORAL : '#f3e5dc', color: correct ? PAPER : INK, fontSize: 27, fontWeight: 950}}>{letter}</div>
              <div style={{fontSize: 27, fontWeight: 900}}>{text}</div>
            </div>;
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const RuleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const rows = [
    ['偏好 / 语气', 'Prompt 引导', YELLOW],
    ['资金 / 权限 / 隐私', '代码或 Hook 强制', MINT],
    ['超时等 transient error', '有限重试', BLUE],
  ] as const;
  return (
    <AbsoluteFill style={{opacity: fade(frame, 430)}}>
      <div style={{position: 'absolute', left: 110, right: 110, top: 160}}>
        <div style={{fontSize: 56, fontWeight: 950}}>不要用概率性手段，冒充确定性保障</div>
        <div style={{display: 'grid', gap: 18, marginTop: 55}}>
          {rows.map(([condition, mechanism, color], index) => {
            const p = enter(frame, fps, 10 + index * 12);
            return <div key={condition} style={{display: 'grid', gridTemplateColumns: '1fr 120px 1fr', alignItems: 'center', minHeight: 142, padding: '18px 28px', background: PAPER, border: `2px solid ${INK}`, boxShadow: '7px 7px 0 #211916', opacity: p}}>
              <div style={{fontSize: 32, fontWeight: 950}}>{condition}</div>
              <div style={{fontSize: 34, textAlign: 'center'}}>→</div>
              <div style={{padding: '18px 24px', background: color, border: `2px solid ${INK}`, fontSize: 31, fontWeight: 950, textAlign: 'center'}}>{mechanism}</div>
            </div>;
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const DecisionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{opacity: fade(frame, 320)}}>
      <div style={{position: 'absolute', left: 90, right: 90, top: 165, textAlign: 'center'}}>
        <div style={{fontSize: 55, fontWeight: 950}}>把判断压缩成三步</div>
        <div style={{display: 'flex', alignItems: 'stretch', gap: 18, marginTop: 72}}>
          {[
            ['1', '找约束', '绝对不能？成本敏感？'],
            ['2', '判机制', '概率引导还是确定执行？'],
            ['3', '选最贴', '正确时点解决真正根因'],
          ].map(([number, title, detail], index) => {
            const p = enter(frame, fps, index * 12);
            return <React.Fragment key={number}>
              <div style={{flex: 1, height: 310, padding: 30, background: index === 1 ? MINT : PAPER, border: `2px solid ${INK}`, boxShadow: '8px 8px 0 #211916', opacity: p}}>
                <div style={{width: 60, height: 60, display: 'grid', placeItems: 'center', margin: '0 auto', background: CORAL, color: PAPER, fontSize: 30, fontWeight: 950}}>{number}</div>
                <div style={{fontSize: 37, fontWeight: 950, marginTop: 30}}>{title}</div>
                <div style={{fontSize: 23, fontWeight: 800, lineHeight: 1.4, marginTop: 22, color: '#6b554c'}}>{detail}</div>
              </div>
              {index < 2 ? <div style={{display: 'grid', placeItems: 'center', fontSize: 40, fontWeight: 950}}>→</div> : null}
            </React.Fragment>;
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const BrowserShell: React.FC<{label: string; children: React.ReactNode}> = ({label, children}) => (
  <div style={{position: 'absolute', left: 68, right: 68, top: 150, height: 805, background: PAPER, border: `2px solid ${INK}`, boxShadow: '12px 12px 0 #211916', overflow: 'hidden'}}>
    <div style={{height: 52, display: 'flex', alignItems: 'center', gap: 9, padding: '0 18px', background: '#f4e7de', borderBottom: `2px solid ${INK}`}}>
      {[CORAL, YELLOW, '#54ad7e'].map((color) => <span key={color} style={{width: 14, height: 14, borderRadius: 99, background: color}} />)}
      <div style={{flex: 1, marginLeft: 10, height: 30, display: 'grid', placeItems: 'center', background: PAPER, border: `1px solid ${LINE}`, fontSize: 15, fontWeight: 800}}>{label}</div>
    </div>
    <div style={{position: 'absolute', inset: '52px 0 0', overflow: 'hidden'}}>{children}</div>
  </div>
);

const CourseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const count = Math.round(interpolate(frame, [40, 150], [0, 479], clamp));
  return (
    <AbsoluteFill style={{opacity: fade(frame, 210)}}>
      <BrowserShell label="jiangren.com.au · CCAR-F 学习与题库">
        <Video src={staticFile('captures/demo-exam.webm')} muted trimBefore={300} objectFit="contain" style={{width: '100%', height: '100%', transform: 'scale(1.025)'}} />
        <div style={{position: 'absolute', left: 30, top: 28, width: 420, padding: '24px 28px', background: CORAL, color: PAPER, border: `2px solid ${INK}`, boxShadow: '9px 9px 0 #211916'}}>
          <div style={{fontSize: 72, lineHeight: 1, fontWeight: 950}}>{count}</div>
          <div style={{fontSize: 23, fontWeight: 900, marginTop: 10}}>道英文原创题</div>
        </div>
        <div style={{position: 'absolute', left: 30, bottom: 30, display: 'flex', gap: 12}}>
          {['16 节课程', '6 类场景题', '每个选项有中文精析'].map((item, index) => <div key={item} style={{padding: '12px 18px', background: index === 2 ? MINT : PAPER, border: `2px solid ${INK}`, fontSize: 20, fontWeight: 900}}>{item}</div>)}
        </div>
      </BrowserShell>
    </AbsoluteFill>
  );
};

const MockScene: React.FC = () => {
  const frame = useCurrentFrame();
  const split = interpolate(frame, [55, 190], [100, 0], clamp);
  return (
    <AbsoluteFill style={{opacity: fade(frame, 255)}}>
      <BrowserShell label={frame < 138 ? '平台模式 · 学解析与诊断' : 'Pearson VUE 风格 · 练考试节奏'}>
        <Img src={staticFile('captures/mock-pearson.png')} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
        <div style={{position: 'absolute', inset: 0, clipPath: `inset(0 ${split}% 0 0)`, background: PAPER}}>
          <Img src={staticFile('captures/mock-standard.png')} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
        </div>
        <div style={{position: 'absolute', left: `${100 - split}%`, top: 0, bottom: 0, width: 5, background: CORAL}} />
        <div style={{position: 'absolute', right: 32, top: 28, display: 'flex', gap: 12}}>
          {['2 套', '每套 60 题', '120 分钟'].map((item, index) => <div key={item} style={{padding: '12px 18px', background: index === 0 ? YELLOW : PAPER, border: `2px solid ${INK}`, fontSize: 20, fontWeight: 950, boxShadow: '5px 5px 0 #211916'}}>{item}</div>)}
        </div>
      </BrowserShell>
    </AbsoluteFill>
  );
};

const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = enter(frame, fps);
  return (
    <AbsoluteFill style={{opacity: fade(frame, 380)}}>
      <div style={{position: 'absolute', left: 100, right: 100, top: 220, textAlign: 'center'}}>
        <div style={{color: CORAL, fontSize: 25, fontWeight: 950}}>成为全球华人首批 Claude 官方认证架构师</div>
        <div style={{fontSize: 67, lineHeight: 1.1, fontWeight: 950, marginTop: 24, transform: `translateY(${interpolate(p, [0, 1], [42, 0], clamp)}px)`}}>别只记答案，学会判断<br /><span style={{color: CORAL}}>新题也能做</span></div>
        <div style={{display: 'inline-grid', placeItems: 'center', marginTop: 46, minWidth: 620, height: 76, padding: '0 42px', background: CORAL, color: PAPER, fontSize: 29, fontWeight: 950, boxShadow: '10px 10px 0 #211916'}}>课程详情见视频下方链接</div>
      </div>
      <div style={{position: 'absolute', left: 100, bottom: 96, color: '#765f55', fontSize: 16, fontWeight: 700}}>Music: “Aitech” by Kevin MacLeod · CC BY 3.0</div>
    </AbsoluteFill>
  );
};

const CaptionBar: React.FC<{frame: number}> = ({frame}) => {
  const active = captions.find((caption) => frame >= caption.from && frame < caption.to) ?? captions[captions.length - 1];
  const local = frame - active.from;
  const opacity = Math.min(
    interpolate(local, [0, 8], [0, 1], clamp),
    interpolate(frame, [active.to - 9, active.to], [1, 0], clamp),
  );
  return <div style={{position: 'absolute', left: 300, right: 300, bottom: 17, zIndex: 100, opacity}}>
    <div style={{background: 'rgba(33,25,22,.96)', color: PAPER, border: `2px solid ${PAPER}`, padding: '12px 22px', fontSize: 25, lineHeight: 1.25, fontWeight: 850, textAlign: 'center', boxShadow: `8px 8px 0 ${CORAL}`}}>{active.text}</div>
  </div>;
};
