import { Audio } from '@remotion/media';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';
import { BrandLogo } from './BrandLogo';
import { DigitalTeacher } from './DigitalTeacher';
import { LessonVisual } from './LessonVisual';
import { FPS, lessonScenes, sceneDurations, totalDurationInFrames } from './data';

const offsets = sceneDurations.map((_, index) =>
	sceneDurations.slice(0, index).reduce((sum, duration) => sum + duration, 0)
);

const Scene: React.FC<{ sceneIndex: number }> = ({ sceneIndex }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const scene = lessonScenes[sceneIndex];
	const audioFrames = Math.ceil(scene.audioDurationSeconds * fps);
	const captionIndex = Math.min(
		scene.captionPages.length - 1,
		Math.floor((Math.min(frame, audioFrames - 1) / audioFrames) * scene.captionPages.length)
	);
	const caption = scene.captionPages[captionIndex];
	const captionFade = interpolate(
		frame % Math.max(1, Math.floor(audioFrames / scene.captionPages.length)),
		[0, 7, Math.max(8, Math.floor(audioFrames / scene.captionPages.length) - 8)],
		[0, 1, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.quad)
		}
	);

	return (
		<AbsoluteFill>
			<Audio src={scene.audioUrl} volume={1} />
			<LessonVisual scene={scene} sceneIndex={sceneIndex} />
			<div style={{ position: 'absolute', right: 32, top: 122 }}>
				<DigitalTeacher
					accent={scene.accent}
					isTalking={frame < audioFrames}
					sceneIndex={sceneIndex}
				/>
			</div>

			<div
				style={{
					position: 'absolute',
					left: 235,
					right: 235,
					bottom: 54,
					minHeight: 108,
					padding: '24px 42px',
					border: '4px solid #111',
					borderRadius: 24,
					background: 'rgba(17, 24, 39, 0.96)',
					boxShadow: `8px 8px 0 ${scene.accent}`,
					color: '#fff',
					fontFamily: '"PingFang SC", "Arial Unicode MS", sans-serif',
					fontSize: 31,
					lineHeight: 1.42,
					fontWeight: 750,
					textAlign: 'center',
					opacity: captionFade,
					transform: `translateY(${interpolate(captionFade, [0, 1], [12, 0])}px)`
				}}
			>
				{caption}
			</div>
		</AbsoluteFill>
	);
};

export const CcarfDigitalTeacher: React.FC = () => {
	const frame = useCurrentFrame();
	const progress = frame / Math.max(1, totalDurationInFrames - 1);

	return (
		<AbsoluteFill
			style={{
				background:
					'radial-gradient(circle at 85% 18%, rgba(139,92,246,0.13), transparent 30%), radial-gradient(circle at 10% 88%, rgba(255,87,87,0.12), transparent 32%), #f4efe8',
				color: '#111827',
				fontFamily: '"PingFang SC", "Arial Unicode MS", sans-serif'
			}}
		>
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
					CCAR-F · 数字老师样片
				</div>
			</div>

			{lessonScenes.map((_, index) => (
				<Sequence
					key={index}
					from={offsets[index]}
					durationInFrames={sceneDurations[index]}
					premountFor={FPS}
				>
					<Scene sceneIndex={index} />
				</Sequence>
			))}
		</AbsoluteFill>
	);
};
