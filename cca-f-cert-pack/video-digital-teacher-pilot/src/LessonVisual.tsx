import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import type { LessonScene } from './data';

type LessonVisualProps = {
	scene: LessonScene;
	sceneIndex: number;
	footerLabel?: string;
};

const cardStyle: React.CSSProperties = {
	border: '4px solid #111',
	borderRadius: 26,
	background: '#fff',
	boxShadow: '8px 8px 0 #111'
};

const QuestionsVisual: React.FC<{ accent: string }> = ({ accent }) => {
	const items = [
		['01', '考什么？', '能力边界与考试形式'],
		['02', '怎么报名？', '准入、注册与约考链路'],
		['03', '现在值得考吗？', '经验门槛与投入判断']
	];
	return (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
			{items.map(([number, title, detail], index) => (
				<div
					key={number}
					style={{
						...cardStyle,
						minHeight: 240,
						padding: 28,
						background: index === 0 ? '#fff3ef' : '#fff'
					}}
				>
					<div style={{ color: accent, fontSize: 30, fontWeight: 900 }}>{number}</div>
					<div style={{ marginTop: 42, fontSize: 38, fontWeight: 900, lineHeight: 1.15 }}>{title}</div>
					<div style={{ marginTop: 18, color: '#5d626d', fontSize: 24, fontWeight: 650, lineHeight: 1.35 }}>
						{detail}
					</div>
				</div>
			))}
		</div>
	);
};

const JudgementVisual: React.FC<{ accent: string }> = ({ accent }) => (
	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
		<div style={{ ...cardStyle, padding: 34, background: '#f6f1ff' }}>
			<div style={{ color: '#6b7280', fontSize: 24, fontWeight: 800 }}>场景 A</div>
			<div style={{ marginTop: 18, fontSize: 35, fontWeight: 900 }}>退款前必须验证身份</div>
			<div style={{ marginTop: 38, display: 'flex', gap: 16 }}>
				<div style={{ flex: 1, padding: 22, borderRadius: 18, background: '#fff', border: '3px solid #111' }}>
					<div style={{ fontSize: 22, color: '#7c3aed', fontWeight: 900 }}>Prompt 提醒</div>
					<div style={{ marginTop: 10, fontSize: 21, lineHeight: 1.4 }}>概率性遵从，模型可能忘</div>
				</div>
				<div style={{ flex: 1, padding: 22, borderRadius: 18, background: '#111', color: '#fff', border: '3px solid #111' }}>
					<div style={{ fontSize: 22, color: '#ffce44', fontWeight: 900 }}>代码硬拦</div>
					<div style={{ marginTop: 10, fontSize: 21, lineHeight: 1.4 }}>确定性约束，更适合高风险动作</div>
				</div>
			</div>
		</div>
		<div style={{ ...cardStyle, padding: 34, background: '#fff' }}>
			<div style={{ color: '#6b7280', fontSize: 24, fontWeight: 800 }}>考试真正问的是</div>
			<div style={{ marginTop: 20, fontSize: 51, lineHeight: 1.12, fontWeight: 950 }}>
				哪个方案
				<br />
				<span style={{ color: accent }}>最合适？</span>
			</div>
			<div style={{ marginTop: 38, fontSize: 25, lineHeight: 1.45, color: '#3f4651', fontWeight: 650 }}>
				不是“能不能用”，而是风险、成本与可靠性之间的最佳取舍。
			</div>
		</div>
	</div>
);

const ReadinessVisual: React.FC<{ accent: string }> = ({ accent }) => {
	const checks = [
		'真实项目跑过 Claude Agent',
		'用过 Agent SDK / Claude Code / MCP',
		'处理过失败、死循环或上下文问题'
	];
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 28 }}>
			<div style={{ ...cardStyle, padding: 34 }}>
				<div style={{ fontSize: 26, color: '#68707d', fontWeight: 800 }}>报考准备度</div>
				<div style={{ marginTop: 25, display: 'grid', gap: 18 }}>
					{checks.map((check, index) => (
						<div
							key={check}
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 18,
								padding: '18px 22px',
								borderRadius: 18,
								background: index < 2 ? '#effcf7' : '#fff8df',
								border: '3px solid #111',
								fontSize: 25,
								fontWeight: 750
							}}
						>
							<span
								style={{
									display: 'grid',
									placeItems: 'center',
									width: 36,
									height: 36,
									borderRadius: 10,
									background: index < 2 ? accent : '#ffce44',
									color: '#111',
									fontWeight: 950
								}}
							>
								✓
							</span>
							{check}
						</div>
					))}
				</div>
			</div>
			<div style={{ ...cardStyle, padding: 34, background: '#111', color: '#fff' }}>
				<div style={{ color: '#a7f3d0', fontSize: 23, fontWeight: 850 }}>官方建议</div>
				<div style={{ marginTop: 28, fontSize: 66, lineHeight: 1, fontWeight: 950 }}>6+</div>
				<div style={{ marginTop: 8, fontSize: 32, fontWeight: 900 }}>个月真实经验</div>
				<div style={{ marginTop: 42, paddingTop: 25, borderTop: '2px solid #4b5563', color: '#d8dee8', fontSize: 23, lineHeight: 1.5 }}>
					没有强制前置证书。
					<br />
					准备好了，就可以直接挑战。
				</div>
			</div>
		</div>
	);
};

export const LessonVisual: React.FC<LessonVisualProps> = ({
	scene,
	sceneIndex,
	footerLabel = 'JR Academy · 小花老师 AI 讲解'
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const reveal = spring({
		frame,
		fps,
		config: { damping: 200 },
		durationInFrames: Math.round(fps * 0.65)
	});
	const titleY = interpolate(reveal, [0, 1], [30, 0]);

	return (
		<div
			style={{
				position: 'absolute',
				left: 84,
				top: 118,
				width: 1190,
				height: 740,
				padding: 48,
				border: '5px solid #111',
				borderRadius: 36,
				background: '#fffdf9',
				boxShadow: '14px 14px 0 #111',
				opacity: reveal,
				transform: `translateY(${titleY}px)`,
				fontFamily: '"PingFang SC", "Arial Unicode MS", sans-serif'
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div
					style={{
						padding: '10px 18px',
						borderRadius: 999,
						background: scene.accent,
						color: scene.mode === 'readiness' ? '#071710' : '#fff',
						border: '3px solid #111',
						fontSize: 22,
						fontWeight: 900
					}}
				>
					{scene.kicker}
				</div>
				<div style={{ color: '#737985', fontSize: 22, fontWeight: 800 }}>
					{String(sceneIndex + 1).padStart(2, '0')} / 03
				</div>
			</div>
			<h1
				style={{
					margin: '32px 0 38px',
					maxWidth: 1040,
					fontSize: 61,
					lineHeight: 1.08,
					letterSpacing: -2,
					fontWeight: 950
				}}
			>
				{scene.title}
			</h1>

			{scene.mode === 'questions' && <QuestionsVisual accent={scene.accent} />}
			{scene.mode === 'judgement' && <JudgementVisual accent={scene.accent} />}
			{scene.mode === 'readiness' && <ReadinessVisual accent={scene.accent} />}

			<div
				style={{
					position: 'absolute',
					left: 48,
					right: 48,
					bottom: 27,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					color: '#6b7280',
					fontSize: 20,
					fontWeight: 750
				}}
			>
				<span>Claude Certified Architect – Foundations</span>
				<span>{footerLabel}</span>
			</div>
		</div>
	);
};
