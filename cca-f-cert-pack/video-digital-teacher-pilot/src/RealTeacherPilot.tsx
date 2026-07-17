import { Audio, Video } from '@remotion/media';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	staticFile,
	useCurrentFrame
} from 'remotion';
import { BrandLogo } from './BrandLogo';
import { LessonVisual } from './LessonVisual';
import { lessonScenes } from './data';

export const REAL_TEACHER_DURATION_IN_FRAMES = 114;

const FIRST_LINE =
	'欢迎来到 Claude 认证架构师备考课程的第一课。';

export const CcarfRealTeacherPilot: React.FC = () => {
	const frame = useCurrentFrame();
	const scene = lessonScenes[0];
	const progress = frame / Math.max(1, REAL_TEACHER_DURATION_IN_FRAMES - 1);
	const entrance = interpolate(frame, [0, 14], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic)
	});

	return (
		<AbsoluteFill
			style={{
				background:
					'radial-gradient(circle at 85% 18%, rgba(139,92,246,0.13), transparent 30%), radial-gradient(circle at 10% 88%, rgba(255,87,87,0.12), transparent 32%), #f4efe8',
				color: '#111827',
				fontFamily: '"PingFang SC", "Arial Unicode MS", sans-serif'
			}}
		>
			<Audio src={scene.audioUrl} volume={1} />

			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: 16,
					background: '#ded7cd'
				}}
			>
				<div
					style={{
						width: `${progress * 100}%`,
						height: '100%',
						background: 'linear-gradient(90deg, #ff5757, #ffce44, #8b5cf6)'
					}}
				/>
			</div>

			<div
				style={{
					position: 'absolute',
					left: 84,
					right: 84,
					top: 43,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<BrandLogo />
				<div style={{ fontSize: 22, fontWeight: 850, color: '#4b5360' }}>
					CCAR-F · 真人半身数字人测试
				</div>
			</div>

			<LessonVisual
				scene={scene}
				sceneIndex={0}
				footerLabel="JR Academy · AI 虚拟讲师概念样片"
			/>

			<div
				style={{
					position: 'absolute',
					right: 58,
					top: 124,
					width: 512,
					height: 728,
					overflow: 'hidden',
					border: '5px solid #111',
					borderRadius: 34,
					background: '#d7d2cc',
					boxShadow: '12px 12px 0 #111',
					opacity: entrance,
					transform: `translateY(${interpolate(entrance, [0, 1], [22, 0])}px)`
				}}
			>
				<Video
					src={staticFile('teacher/fictional-instructor-first-line.mp4')}
					muted
					objectFit="cover"
					style={{
						width: '100%',
						height: '100%',
						objectPosition: '50% 16%'
					}}
				/>
				<div
					style={{
						position: 'absolute',
						left: 20,
						right: 20,
						bottom: 18,
						padding: '13px 18px',
						borderRadius: 999,
						background: 'rgba(255,255,255,0.94)',
						border: '3px solid #111',
						color: '#111827',
						fontSize: 19,
						fontWeight: 850,
						textAlign: 'center'
					}}
				>
					AI 虚拟讲师 · 概念样片
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					left: 235,
					right: 235,
					bottom: 54,
					minHeight: 108,
					display: 'grid',
					placeItems: 'center',
					padding: '24px 42px',
					border: '4px solid #111',
					borderRadius: 24,
					background: 'rgba(17, 24, 39, 0.96)',
					boxShadow: `8px 8px 0 ${scene.accent}`,
					color: '#fff',
					fontSize: 31,
					lineHeight: 1.42,
					fontWeight: 750,
					textAlign: 'center'
				}}
			>
				{FIRST_LINE}
			</div>
		</AbsoluteFill>
	);
};
