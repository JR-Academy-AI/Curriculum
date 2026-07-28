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

export const DEEP_DIVE_FPS = 30;
export const DEEP_DIVE_WIDTH = 1920;
export const DEEP_DIVE_HEIGHT = 1080;

const sceneSeconds = [28, 29, 29, 32, 36, 33, 33, 26, 27, 44, 33, 29];
const sceneFrames = sceneSeconds.map((seconds) => seconds * DEEP_DIVE_FPS);
const sceneStarts = sceneFrames.map((_, index) =>
  sceneFrames.slice(0, index).reduce((sum, frames) => sum + frames, 0),
);
export const DEEP_DIVE_DURATION = sceneFrames.reduce((sum, frames) => sum + frames, 0);

const CORAL = '#c15f3c';
const DEEP_CORAL = '#963e28';
const INK = '#211916';
const CREAM = '#fff8f1';
const PAPER = '#ffffff';
const MINT = '#d9f0e5';
const YELLOW = '#f5cc68';
const BLUE = '#b8d8ea';
const LAVENDER = '#d9cdec';
const LINE = '#e4cbbc';
const MUTED = '#6b554c';
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const sceneMeta = [
  ['01-intro', 'Claude 官方架构师认证，到底考什么？'],
  ['02-positioning', '它是一门生产级架构判断考试'],
  ['03-exam', '先记住 5 个考试数字'],
  ['04-domains', '五大领域决定复习优先级'],
  ['05-curriculum', '16 节课分成 4 个阶段'],
  ['06-blueprint', '覆盖官方 30 项能力要求'],
  ['07-platform', '真实课程网页与学习路径'],
  ['08-questions', '近 480 道题，逐项中文精析'],
  ['09-mocks', '两种模拟考试模式'],
  ['10-case', '场景题判断：约束、机制、根因'],
  ['11-plan', '两周备考计划'],
  ['12-cta', '把知识变成架构判断'],
] as const;

const appear = (frame: number, fps: number, delay = 0) =>
  spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 145, mass: 0.85}});

const sceneOpacity = (frame: number, duration: number) =>
  Math.min(
    interpolate(frame, [0, 12], [0, 1], clamp),
    interpolate(frame, [duration - 14, duration], [1, 0], clamp),
  );

const BrowserShell: React.FC<{label: string; children: React.ReactNode}> = ({label, children}) => (
  <div style={{position: 'absolute', left: 62, right: 62, top: 134, bottom: 94, background: PAPER, border: `2px solid ${INK}`, boxShadow: '12px 12px 0 #211916', overflow: 'hidden'}}>
    <div style={{height: 52, display: 'flex', alignItems: 'center', gap: 9, padding: '0 18px', background: '#f4e7de', borderBottom: `2px solid ${INK}`}}>
      {[CORAL, YELLOW, '#54ad7e'].map((color) => <span key={color} style={{width: 14, height: 14, borderRadius: 99, background: color}} />)}
      <div style={{flex: 1, marginLeft: 10, height: 30, display: 'grid', placeItems: 'center', background: PAPER, border: `1px solid ${LINE}`, fontSize: 15, fontWeight: 800}}>{label}</div>
    </div>
    <div style={{position: 'absolute', inset: '52px 0 0', overflow: 'hidden'}}>{children}</div>
  </div>
);

const Title: React.FC<{eyebrow: string; children: React.ReactNode; center?: boolean}> = ({eyebrow, children, center}) => (
  <div style={{textAlign: center ? 'center' : 'left'}}>
    <div style={{color: CORAL, fontSize: 23, fontWeight: 950, letterSpacing: 0}}>{eyebrow}</div>
    <div style={{fontSize: 57, lineHeight: 1.1, fontWeight: 950, marginTop: 15}}>{children}</div>
  </div>
);

const FactCard: React.FC<{value: string; label: string; detail?: string; color?: string}> = ({value, label, detail, color = PAPER}) => (
  <div style={{minHeight: 208, padding: '26px 28px', background: color, border: `2px solid ${INK}`, boxShadow: '7px 7px 0 #211916'}}>
    <div style={{color: DEEP_CORAL, fontSize: 50, lineHeight: 1, fontWeight: 950}}>{value}</div>
    <div style={{fontSize: 26, fontWeight: 950, marginTop: 18}}>{label}</div>
    {detail ? <div style={{fontSize: 18, color: MUTED, fontWeight: 800, lineHeight: 1.4, marginTop: 10}}>{detail}</div> : null}
  </div>
);

const BrandBar: React.FC<{frame: number}> = ({frame}) => (
  <div style={{position: 'absolute', left: 52, right: 52, top: 24, zIndex: 100}}>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <Img src={staticFile('brand/logo-zh-full.svg')} style={{width: 192, height: 48, objectFit: 'contain', objectPosition: 'left center'}} />
      <div style={{padding: '8px 15px', background: MINT, border: `1px solid ${INK}`, fontSize: 18, fontWeight: 900}}>Claude 官方架构师认证 · 完整备考指南</div>
    </div>
    <div style={{height: 5, background: '#ead7ca', marginTop: 10}}>
      <div style={{height: '100%', width: `${(frame / DEEP_DIVE_DURATION) * 100}%`, background: CORAL}} />
    </div>
  </div>
);

const Caption: React.FC<{text: string}> = ({text}) => (
  <div style={{position: 'absolute', left: 210, right: 210, bottom: 22, zIndex: 120, textAlign: 'center'}}>
    <span style={{display: 'inline-block', maxWidth: 1400, padding: '10px 22px', background: 'rgba(33,25,22,.92)', color: PAPER, fontSize: 26, lineHeight: 1.35, fontWeight: 850}}>{text}</span>
  </div>
);

export const CcarFDeepDive: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{background: CREAM, color: INK, fontFamily: 'PingFang SC, Hiragino Sans GB, Arial, sans-serif', overflow: 'hidden'}}>
      <AbsoluteFill style={{opacity: 0.34, backgroundImage: 'linear-gradient(#ead8cc 1px, transparent 1px), linear-gradient(90deg, #ead8cc 1px, transparent 1px)', backgroundSize: '68px 68px'}} />
      <div style={{position: 'absolute', inset: '0 0 auto', height: 10, background: CORAL}} />
      <BrandBar frame={frame} />
      <Audio
        src={staticFile('audio/aitech-kevin-macleod.mp3')}
        loop
        volume={(audioFrame) => {
          const peak = 0.055;
          if (audioFrame < fps) return (audioFrame / fps) * peak;
          if (frame > DEEP_DIVE_DURATION - fps * 2) {
            return Math.max(0, ((DEEP_DIVE_DURATION - frame) / (fps * 2)) * peak);
          }
          return peak;
        }}
      />
      {sceneMeta.map(([id], index) => (
        <Sequence key={id} from={sceneStarts[index]} durationInFrames={sceneFrames[index]} premountFor={30}>
          <Audio src={staticFile(`audio/deep-dive/${id}.mp3`)} volume={0.88} />
        </Sequence>
      ))}

      <Sequence durationInFrames={sceneFrames[0]} premountFor={30}><IntroScene /></Sequence>
      <Sequence from={sceneStarts[1]} durationInFrames={sceneFrames[1]} premountFor={30}><PositioningScene /></Sequence>
      <Sequence from={sceneStarts[2]} durationInFrames={sceneFrames[2]} premountFor={30}><ExamScene /></Sequence>
      <Sequence from={sceneStarts[3]} durationInFrames={sceneFrames[3]} premountFor={30}><DomainsScene /></Sequence>
      <Sequence from={sceneStarts[4]} durationInFrames={sceneFrames[4]} premountFor={30}><CurriculumScene /></Sequence>
      <Sequence from={sceneStarts[5]} durationInFrames={sceneFrames[5]} premountFor={30}><BlueprintScene /></Sequence>
      <Sequence from={sceneStarts[6]} durationInFrames={sceneFrames[6]} premountFor={30}><PlatformScene /></Sequence>
      <Sequence from={sceneStarts[7]} durationInFrames={sceneFrames[7]} premountFor={30}><QuestionsScene /></Sequence>
      <Sequence from={sceneStarts[8]} durationInFrames={sceneFrames[8]} premountFor={30}><MocksScene /></Sequence>
      <Sequence from={sceneStarts[9]} durationInFrames={sceneFrames[9]} premountFor={30}><CaseScene /></Sequence>
      <Sequence from={sceneStarts[10]} durationInFrames={sceneFrames[10]} premountFor={30}><PlanScene /></Sequence>
      <Sequence from={sceneStarts[11]} durationInFrames={sceneFrames[11]} premountFor={30}><CtaScene /></Sequence>
    </AbsoluteFill>
  );
};

const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = appear(frame, fps);
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[0])}}>
      <div style={{position: 'absolute', left: 92, right: 92, top: 176, display: 'grid', gridTemplateColumns: '1.12fr .88fr', gap: 52, alignItems: 'center'}}>
        <div>
          <div style={{color: CORAL, fontWeight: 950, fontSize: 28}}>CLAUDE CERTIFIED ARCHITECT · FOUNDATIONS</div>
          <div style={{fontSize: 72, lineHeight: 1.06, fontWeight: 950, marginTop: 28, transform: `translateY(${interpolate(p, [0, 1], [38, 0], clamp)}px)`}}>
            Claude 官方架构师认证<br /><span style={{color: CORAL}}>到底考什么？</span>
          </div>
          <div style={{fontSize: 28, lineHeight: 1.45, color: MUTED, fontWeight: 800, marginTop: 34}}>考试结构 · 五大领域 · 16 节课程 · 题库 · 双模式模拟</div>
        </div>
        <div style={{background: CORAL, color: PAPER, border: `3px solid ${INK}`, boxShadow: '13px 13px 0 #211916', padding: 34}}>
          <div style={{fontSize: 21, fontWeight: 950, color: '#ffe1d2'}}>这不是参数记忆考试</div>
          {['Agent 架构', '工具与 MCP', 'Claude Code', 'Prompt 与结构化输出', '上下文与可靠性'].map((item, index) => (
            <div key={item} style={{marginTop: 16, padding: '13px 17px', background: index === 0 ? YELLOW : PAPER, color: INK, border: `2px solid ${INK}`, fontSize: 24, fontWeight: 900}}>{item}</div>
          ))}
        </div>
      </div>
      <Caption text="不讲口号，直接拆考试结构、课程章节、题库和两种模拟考试" />
    </AbsoluteFill>
  );
};

const PositioningScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[1])}}>
      <div style={{position: 'absolute', left: 100, right: 100, top: 158}}>
        <Title eyebrow="WHO IT IS FOR">它是一门生产级架构判断考试</Title>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 34, marginTop: 52}}>
          <div style={{padding: 35, background: MINT, border: `2px solid ${INK}`, boxShadow: '9px 9px 0 #211916'}}>
            <div style={{fontSize: 30, fontWeight: 950}}>更适合</div>
            {['接触过 Messages API / tool_use', '配置过 MCP 或 Claude Code', '做过 Agent 或生产级 AI 项目', 'AI Engineer / Solution Architect / 技术顾问'].map((item) => <div key={item} style={{fontSize: 25, fontWeight: 850, marginTop: 23}}>✓ {item}</div>)}
          </div>
          <div style={{padding: 35, background: PAPER, border: `2px solid ${INK}`, boxShadow: '9px 9px 0 #211916'}}>
            <div style={{fontSize: 30, fontWeight: 950}}>不是在考</div>
            {['网页版聊天技巧', '模型参数死记硬背', 'Python / TypeScript 语法', '只靠背答案的题库记忆'].map((item) => <div key={item} style={{fontSize: 25, fontWeight: 850, marginTop: 23}}>× {item}</div>)}
          </div>
        </div>
      </div>
      <Caption text="考试代码 CCAR-F，面向使用 Claude 构建生产应用的技术人员" />
    </AbsoluteFill>
  );
};

const ExamScene: React.FC = () => {
  const frame = useCurrentFrame();
  const values = [
    ['60 题', '单选 + 多选', '题目会注明选几项', YELLOW],
    ['120 分钟', '平均每题 2 分钟', '练的是判断速度', PAPER],
    ['720', '100–1000 量表分', '不是答对 72%', MINT],
    ['6 抽 4', '场景题机制', '四个场景进入考试', BLUE],
    ['Pearson VUE', '线上或线下', 'OnVUE 全程监考', LAVENDER],
  ] as const;
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[2])}}>
      <div style={{position: 'absolute', left: 82, right: 82, top: 150}}>
        <Title eyebrow="EXAM FORMAT" center>先记住 5 个考试数字</Title>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, marginTop: 68}}>
          {values.map(([value, label, detail, color], index) => (
            <div key={value} style={{opacity: appear(frame, DEEP_DIVE_FPS, 8 + index * 7)}}>
              <FactCard value={value} label={label} detail={detail} color={color} />
            </div>
          ))}
        </div>
        <div style={{marginTop: 38, padding: '20px 26px', background: CORAL, color: PAPER, border: `2px solid ${INK}`, fontSize: 28, fontWeight: 900, textAlign: 'center'}}>成绩单会显示各 Domain 表现，用于定位下一轮复习重点</div>
      </div>
      <Caption text="720 是量表分，不等于答对百分之七十二" />
    </AbsoluteFill>
  );
};

const DomainsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const domains = [
    ['Agentic Architecture & Orchestration', 27, CORAL],
    ['Claude Code Configuration & Workflows', 20, '#6e84c6'],
    ['Prompt Engineering & Structured Output', 20, '#a55f9e'],
    ['Tool Design & MCP Integration', 18, '#54ad7e'],
    ['Context Management & Reliability', 15, '#d49b35'],
  ] as const;
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[3])}}>
      <div style={{position: 'absolute', left: 110, right: 110, top: 146}}>
        <Title eyebrow="OFFICIAL BLUEPRINT">五大领域，不要平均用力</Title>
        <div style={{display: 'grid', gap: 17, marginTop: 48}}>
          {domains.map(([name, value, color], index) => {
            const width = interpolate(frame, [22 + index * 7, 70 + index * 7], [0, value / 27 * 100], clamp);
            return <div key={name} style={{display: 'grid', gridTemplateColumns: '530px 1fr 90px', alignItems: 'center', gap: 24}}>
              <div style={{fontSize: 24, fontWeight: 900}}>{name}</div>
              <div style={{height: 52, background: PAPER, border: `2px solid ${INK}`}}><div style={{width: `${width}%`, height: '100%', background: color}} /></div>
              <div style={{fontSize: 34, fontWeight: 950, color}}>{value}%</div>
            </div>;
          })}
        </div>
        <div style={{marginTop: 40, display: 'flex', gap: 18}}>
          <div style={{flex: 1, padding: 22, background: YELLOW, border: `2px solid ${INK}`, fontSize: 27, fontWeight: 950}}>前三项合计 67%</div>
          <div style={{flex: 2, padding: 22, background: PAPER, border: `2px solid ${INK}`, fontSize: 24, fontWeight: 850}}>先攻编排、Claude Code、Prompt，再补工具与上下文可靠性</div>
        </div>
      </div>
      <Caption text="最高权重是 Agentic Architecture and Orchestration，占百分之二十七" />
    </AbsoluteFill>
  );
};

const CurriculumScene: React.FC = () => {
  const frame = useCurrentFrame();
  const phases = [
    ['阶段 1', '考试认知与报名', ['认证定位与考试形式', '账号注册与约考', 'OnVUE 环境自检'], YELLOW],
    ['阶段 2', '五大领域精析', ['官方 20 课导航', 'Domain 1–5 逐项学习', '生产场景与自测'], MINT],
    ['阶段 3', '场景题专项', ['6 抽 4 机制', '六类场景拆解', '独立作答与诊断'], BLUE],
    ['阶段 4', '全真模拟冲刺', ['模拟 A + 模拟 B', '考前 48 小时清单', '时间与重考策略'], LAVENDER],
  ] as const;
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[4])}}>
      <div style={{position: 'absolute', left: 76, right: 76, top: 140}}>
        <Title eyebrow="LEARNING PATH">16 节课 · 50 个步骤 · 4 个阶段</Title>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 44}}>
          {phases.map(([phase, title, items, color], index) => (
            <div key={phase} style={{minHeight: 510, padding: 28, background: color, border: `2px solid ${INK}`, boxShadow: '8px 8px 0 #211916', opacity: appear(frame, DEEP_DIVE_FPS, 8 + index * 9)}}>
              <div style={{fontSize: 20, fontWeight: 950, color: DEEP_CORAL}}>{phase}</div>
              <div style={{fontSize: 34, lineHeight: 1.15, fontWeight: 950, marginTop: 18}}>{title}</div>
              <div style={{height: 2, background: INK, margin: '25px 0'}} />
              {items.map((item, itemIndex) => <div key={item} style={{padding: '17px 15px', marginTop: 15, background: PAPER, border: `2px solid ${INK}`, fontSize: 22, lineHeight: 1.3, fontWeight: 850}}><span style={{color: CORAL, fontWeight: 950}}>{itemIndex + 1}.</span> {item}</div>)}
            </div>
          ))}
        </div>
      </div>
      <Caption text="约十二小时自学，把考试认知、五域学习、场景题和模拟冲刺接成一条路径" />
    </AbsoluteFill>
  );
};

const BlueprintScene: React.FC = () => {
  const frame = useCurrentFrame();
  const counts = [
    ['D1', 7, 'Agent 循环 / 编排 / 会话'],
    ['D2', 5, '工具描述 / 错误 / MCP'],
    ['D3', 6, 'Claude Code 配置与工作流'],
    ['D4', 6, 'Prompt / Schema / Batch'],
    ['D5', 6, '上下文 / 升级 / 可靠性'],
  ];
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[5])}}>
      <div style={{position: 'absolute', left: 100, right: 100, top: 148}}>
        <Title eyebrow="30 TASK STATEMENTS">不是“看完课”，而是覆盖官方能力要求</Title>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, marginTop: 60}}>
          {counts.map(([domain, count, detail], index) => (
            <div key={String(domain)} style={{height: 310, padding: 26, background: index === 0 ? CORAL : PAPER, color: index === 0 ? PAPER : INK, border: `2px solid ${INK}`, boxShadow: '7px 7px 0 #211916'}}>
              <div style={{fontSize: 24, fontWeight: 950}}>{domain}</div>
              <div style={{fontSize: 76, lineHeight: 1, fontWeight: 950, marginTop: 30}}>{count}</div>
              <div style={{fontSize: 21, lineHeight: 1.4, fontWeight: 850, marginTop: 28}}>{detail}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop: 42, fontSize: 31, fontWeight: 950, textAlign: 'center'}}>每个考点都要能回答：什么时候选它？另外几个为什么错？</div>
      </div>
      <Caption text="五个 Domain 合计三十项官方能力要求，课程逐项反向覆盖" />
    </AbsoluteFill>
  );
};

const PlatformScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[6])}}>
      <BrowserShell label="jiangren.com.au · Claude 架构师认证 Demo Exam">
        <Video src={staticFile('captures/demo-exam-h264.mp4')} muted loop trimBefore={300} objectFit="contain" style={{width: '100%', height: '100%'}} />
        <div style={{position: 'absolute', left: 26, top: 24, width: 390, padding: 22, background: CORAL, color: PAPER, border: `2px solid ${INK}`, boxShadow: '8px 8px 0 #211916'}}>
          <div style={{fontSize: 20, fontWeight: 900}}>复习不是从头重看</div>
          <div style={{fontSize: 34, lineHeight: 1.18, fontWeight: 950, marginTop: 12}}>按 Domain<br />回到薄弱知识点</div>
        </div>
        <div style={{position: 'absolute', right: 26, bottom: 24, display: 'flex', gap: 10}}>
          {['目标', '预计时间', '完成状态', '场景与自测'].map((item) => <div key={item} style={{padding: '11px 15px', background: PAPER, border: `2px solid ${INK}`, fontSize: 18, fontWeight: 900}}>{item}</div>)}
        </div>
      </BrowserShell>
      <Caption text="课程页面把学习目标、考点、场景题和完成状态放在同一条路径里" />
    </AbsoluteFill>
  );
};

const QuestionsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const count = Math.round(interpolate(frame, [20, 90], [0, 479], clamp));
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[7])}}>
      <div style={{position: 'absolute', left: 82, right: 82, top: 150, display: 'grid', gridTemplateColumns: '.78fr 1.22fr', gap: 36}}>
        <div style={{background: CORAL, color: PAPER, padding: 40, border: `3px solid ${INK}`, boxShadow: '11px 11px 0 #211916'}}>
          <div style={{fontSize: 118, lineHeight: 1, fontWeight: 950}}>{count}</div>
          <div style={{fontSize: 34, fontWeight: 950, marginTop: 16}}>道英文原创练习题</div>
          <div style={{fontSize: 22, lineHeight: 1.5, fontWeight: 800, marginTop: 30}}>正确项讲机制<br />错误项讲诱因<br />按 Domain 定位薄弱点</div>
        </div>
        <div>
          <Title eyebrow="DISTRACTOR ENGINEERING">重点不是答案，而是错误选项为什么诱人</Title>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 42}}>
            {[
              ['加强 system prompt', '把概率性遵从冒充确定性保障'],
              ['盲目增加重试', '没有区分瞬时错误与业务错误'],
              ['扩大上下文窗口', '没有解决注意力稀释'],
              ['直接升级复杂架构', '绕过最简单的有效修复'],
            ].map(([title, detail], index) => <div key={title} style={{padding: 23, background: index === 0 ? YELLOW : PAPER, border: `2px solid ${INK}`, minHeight: 150}}>
              <div style={{fontSize: 25, fontWeight: 950}}>{title}</div>
              <div style={{fontSize: 19, lineHeight: 1.4, color: MUTED, fontWeight: 800, marginTop: 12}}>{detail}</div>
            </div>)}
          </div>
        </div>
      </div>
      <Caption text="每个选项都有独立中文精析，训练识别干扰项而不是背字母" />
    </AbsoluteFill>
  );
};

const MocksScene: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [80, 150], [100, 0], clamp);
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[8])}}>
      <BrowserShell label={frame < 130 ? '平台模式 · 学习与诊断' : 'Pearson VUE 风格 · 限时与 Review'}>
        <Img src={staticFile('captures/mock-pearson.png')} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
        <div style={{position: 'absolute', inset: 0, clipPath: `inset(0 ${reveal}% 0 0)`, background: PAPER}}>
          <Img src={staticFile('captures/mock-standard.png')} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
        </div>
        <div style={{position: 'absolute', left: 22, bottom: 22, padding: '17px 21px', background: MINT, border: `2px solid ${INK}`, boxShadow: '6px 6px 0 #211916', fontSize: 23, fontWeight: 950}}>模式 A：答案 + 逐项解析 + Domain 诊断</div>
        <div style={{position: 'absolute', right: 22, bottom: 22, padding: '17px 21px', background: YELLOW, border: `2px solid ${INK}`, boxShadow: '6px 6px 0 #211916', fontSize: 23, fontWeight: 950}}>模式 B：Flag + Incomplete + Review + 限时</div>
      </BrowserShell>
      <Caption text="模拟 A 暴露弱点，补完以后用模拟 B 验证考试节奏" />
    </AbsoluteFill>
  );
};

const CaseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [500, 620], [0, 1], clamp);
  const options = [
    ['A', '在 system prompt 里再次强调'],
    ['B', '退款后用 PostToolUse 记录日志'],
    ['C', '失败时自动重试三次'],
    ['D', 'PreToolUse 校验身份，失败直接 deny'],
  ];
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[9])}}>
      <div style={{position: 'absolute', left: 70, right: 70, top: 132, bottom: 94, display: 'grid', gridTemplateColumns: '.82fr 1.18fr', gap: 32}}>
        <div style={{background: CORAL, color: PAPER, border: `2px solid ${INK}`, boxShadow: '9px 9px 0 #211916', padding: 36}}>
          <div style={{fontSize: 21, color: '#ffe2d2', fontWeight: 950}}>原创场景题</div>
          <div style={{fontSize: 38, lineHeight: 1.25, fontWeight: 950, marginTop: 22}}>客服 Agent 可以查询订单，也可以执行退款。</div>
          <div style={{height: 2, background: 'rgba(255,255,255,.45)', margin: '28px 0'}} />
          <div style={{fontSize: 31, lineHeight: 1.4, fontWeight: 900}}>身份没有验证通过，<span style={{color: YELLOW}}>绝对不能退款</span>。</div>
          <div style={{marginTop: 34, display: 'grid', gap: 12}}>
            {['① 圈出硬约束', '② 判断概率引导还是程序强制', '③ 选择在正确时点解决根因'].map((item) => <div key={item} style={{padding: '13px 15px', background: PAPER, color: INK, border: `2px solid ${INK}`, fontSize: 21, fontWeight: 900}}>{item}</div>)}
          </div>
        </div>
        <div style={{display: 'grid', gap: 16, alignContent: 'center'}}>
          {options.map(([letter, text], index) => {
            const correct = index === 3;
            return <div key={letter} style={{minHeight: 112, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 20, background: correct ? `rgba(217,240,229,${0.3 + reveal * 0.7})` : PAPER, border: `${correct ? 3 : 2}px solid ${correct ? CORAL : INK}`, boxShadow: correct && reveal > 0.5 ? '7px 7px 0 #c15f3c' : '5px 5px 0 #211916'}}>
              <div style={{width: 54, height: 54, display: 'grid', placeItems: 'center', background: correct ? CORAL : '#f3e5dc', color: correct ? PAPER : INK, fontSize: 25, fontWeight: 950}}>{letter}</div>
              <div style={{fontSize: 25, fontWeight: 900}}>{text}</div>
            </div>;
          })}
        </div>
      </div>
      <Caption text="硬约束必须用确定性机制保障，不能只靠 prompt、事后日志或盲目重试" />
    </AbsoluteFill>
  );
};

const PlanScene: React.FC = () => {
  const frame = useCurrentFrame();
  const plan = [
    ['D1–3', '考试结构 + Domain 1', CORAL],
    ['D4–8', '完成其余四个 Domain', '#6e84c6'],
    ['D9–10', '六类场景题专项', '#54ad7e'],
    ['D11', '模拟 A + 弱项诊断', '#d49b35'],
    ['D12–13', '补弱项 + 模拟 B', '#a55f9e'],
    ['D14', '错题 / 陷阱表 / 考场清单', INK],
  ] as const;
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[10])}}>
      <div style={{position: 'absolute', left: 92, right: 92, top: 150}}>
        <Title eyebrow="14-DAY SPRINT">两周备考，不要平均分配时间</Title>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, marginTop: 64}}>
          {plan.map(([day, task, color], index) => <div key={day} style={{minHeight: 330, padding: 23, background: PAPER, border: `2px solid ${INK}`, boxShadow: '6px 6px 0 #211916', opacity: appear(frame, DEEP_DIVE_FPS, 8 + index * 7)}}>
            <div style={{height: 12, background: color, margin: '-23px -23px 24px'}} />
            <div style={{fontSize: 31, fontWeight: 950, color}}>{day}</div>
            <div style={{fontSize: 23, lineHeight: 1.35, fontWeight: 900, marginTop: 27}}>{task}</div>
          </div>)}
        </div>
        <div style={{marginTop: 42, padding: 20, background: YELLOW, border: `2px solid ${INK}`, fontSize: 28, fontWeight: 950, textAlign: 'center'}}>目标不是刷完：每道错题都能说出根因，才算完成</div>
      </div>
      <Caption text="第一套模拟用来发现问题，第二套模拟才用来验证稳定性" />
    </AbsoluteFill>
  );
};

const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const p = appear(frame, DEEP_DIVE_FPS);
  return (
    <AbsoluteFill style={{opacity: sceneOpacity(frame, sceneFrames[11])}}>
      <div style={{position: 'absolute', left: 110, right: 110, top: 170, textAlign: 'center'}}>
        <div style={{fontSize: 27, color: CORAL, fontWeight: 950}}>FROM KNOWLEDGE TO ARCHITECTURE JUDGMENT</div>
        <div style={{fontSize: 66, lineHeight: 1.08, fontWeight: 950, marginTop: 26, transform: `translateY(${interpolate(p, [0, 1], [34, 0], clamp)}px)`}}>把“会用 Claude”<br />变成“会做架构判断”</div>
        <div style={{display: 'flex', justifyContent: 'center', gap: 18, marginTop: 48}}>
          {['16 节系统课程', '近 480 道原创题', '两种模拟模式'].map((item, index) => <div key={item} style={{padding: '18px 24px', background: index === 1 ? YELLOW : PAPER, border: `2px solid ${INK}`, boxShadow: '6px 6px 0 #211916', fontSize: 25, fontWeight: 950}}>{item}</div>)}
        </div>
        <div style={{marginTop: 64, display: 'inline-block', padding: '23px 42px', background: CORAL, color: PAPER, border: `3px solid ${INK}`, boxShadow: '10px 10px 0 #211916', fontSize: 35, fontWeight: 950}}>成为全球华人首批 Claude 官方认证架构师</div>
        <div style={{fontSize: 23, color: MUTED, fontWeight: 850, marginTop: 35}}>完整课程与备考资料见视频下方链接</div>
      </div>
      <Caption text="带走的不是固定答案，而是一套面对新场景仍然有效的判断框架" />
    </AbsoluteFill>
  );
};
