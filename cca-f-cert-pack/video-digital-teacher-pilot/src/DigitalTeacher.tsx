import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

type DigitalTeacherProps = {
	accent: string;
	isTalking: boolean;
	sceneIndex: number;
};

const clamp = {
	extrapolateLeft: 'clamp' as const,
	extrapolateRight: 'clamp' as const
};

/**
 * 品牌牛小匠的可驱动 SVG 半身形象。
 *
 * 这是样片版嘴型：用讲课节奏驱动开合，并非逐音素 viseme。
 * 所有动作只由 useCurrentFrame() 驱动，保证 Remotion 渲染确定性。
 */
export const DigitalTeacher: React.FC<DigitalTeacherProps> = ({
	accent,
	isTalking,
	sceneIndex
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const entrance = spring({
		frame,
		fps,
		config: { damping: 18, stiffness: 130 },
		durationInFrames: Math.round(fps * 0.8)
	});
	const floatY = Math.sin(frame / (fps * 0.58)) * 7;
	const breathe = 1 + Math.sin(frame / (fps * 0.72)) * 0.012;

	const blinkCycle = (frame + sceneIndex * 23) % Math.round(fps * 3.2);
	const blink = interpolate(blinkCycle, [0, 2, 5, 8], [1, 0.08, 0.08, 1], clamp);

	const cadence =
		Math.abs(Math.sin(frame * 0.79)) * 0.6 +
		Math.abs(Math.sin(frame * 0.31 + 1.2)) * 0.4;
	const pauseEvery = frame % 47 < 5 || frame % 83 < 7;
	const mouthOpen = isTalking && !pauseEvery ? 5 + cadence * 16 : 3;
	const pointerRotation = -15 + Math.sin(frame / (fps * 0.8)) * 3;
	const handLift = Math.sin(frame / (fps * 0.9)) * 4;

	return (
		<div
			style={{
				position: 'relative',
				width: 470,
				height: 690,
				transform: `translateY(${40 - entrance * 40 + floatY}px) scale(${entrance * breathe})`,
				transformOrigin: '50% 100%',
				opacity: entrance
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: '80px 18px 20px',
					borderRadius: 80,
					background: `radial-gradient(circle at 50% 30%, ${accent}33, transparent 62%)`,
					filter: 'blur(8px)'
				}}
			/>

			<svg
				viewBox="0 0 470 690"
				width="470"
				height="690"
				style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
			>
				<ellipse cx="235" cy="657" rx="165" ry="23" fill="#111827" opacity="0.16" />

				{/* 身体 / hoodie */}
				<path
					d="M105 650C108 526 146 469 235 465C324 469 362 526 365 650Z"
					fill="#172554"
					stroke="#111"
					strokeWidth="8"
				/>
				<path d="M173 482L235 554L297 482" fill="#294b91" stroke="#111" strokeWidth="7" />
				<path d="M235 551V648" stroke="#e5e7eb" strokeWidth="7" />
				<path d="M183 500C165 535 164 570 164 607" stroke="#e5e7eb" strokeWidth="6" />
				<path d="M287 500C305 535 306 570 306 607" stroke="#e5e7eb" strokeWidth="6" />
				<circle cx="164" cy="610" r="8" fill="#fff" stroke="#111" strokeWidth="4" />
				<circle cx="306" cy="610" r="8" fill="#fff" stroke="#111" strokeWidth="4" />

				{/* 头发与角 */}
				<path
					d="M134 164C88 101 117 46 174 81C192 14 265 14 286 79C347 43 379 101 335 165Z"
					fill="#9a6843"
					stroke="#111"
					strokeWidth="8"
				/>
				<path d="M143 143C119 105 137 78 168 97L173 154Z" fill="#d7a67d" />
				<path d="M327 143C351 105 333 78 302 97L297 154Z" fill="#d7a67d" />
				<ellipse cx="105" cy="258" rx="54" ry="72" fill="#18181b" stroke="#111" strokeWidth="8" />
				<ellipse cx="365" cy="258" rx="54" ry="72" fill="#18181b" stroke="#111" strokeWidth="8" />
				<ellipse cx="105" cy="263" rx="24" ry="34" fill="#ff8fa3" />
				<ellipse cx="365" cy="263" rx="24" ry="34" fill="#ff8fa3" />
				<path
					d="M91 302C69 208 105 119 181 93C204 69 268 69 291 93C367 119 401 207 379 302C366 401 315 467 235 471C155 467 104 401 91 302Z"
					fill="#111214"
					stroke="#090909"
					strokeWidth="9"
				/>
				<path
					d="M122 276C126 197 171 154 235 154C299 154 344 197 348 276V351C346 416 299 449 235 449C171 449 124 416 122 351Z"
					fill="#fffaf5"
					stroke="#111"
					strokeWidth="7"
				/>
				<path
					d="M133 206C144 147 191 119 235 126C279 119 326 147 337 206C303 190 277 182 256 156C246 183 227 197 199 209C179 194 158 194 133 206Z"
					fill="#111214"
				/>

				{/* 眼镜与眼睛 */}
				<g>
					<rect x="134" y="251" width="89" height="71" rx="24" fill="#f8fafc" stroke="#111" strokeWidth="9" />
					<rect x="247" y="251" width="89" height="71" rx="24" fill="#f8fafc" stroke="#111" strokeWidth="9" />
					<path d="M223 274H247" stroke="#111" strokeWidth="9" />
					<ellipse cx="181" cy="287" rx="12" ry={13 * blink} fill="#111827" />
					<ellipse cx="289" cy="287" rx="12" ry={13 * blink} fill="#111827" />
					<circle cx="185" cy="282" r="4" fill="#fff" opacity={blink} />
					<circle cx="293" cy="282" r="4" fill="#fff" opacity={blink} />
				</g>

				{/* 鼻、腮红、嘴型 */}
				<ellipse cx="235" cy="335" rx="11" ry="8" fill="#111" />
				<ellipse cx="159" cy="348" rx="25" ry="13" fill="#ff8fa3" opacity="0.72" />
				<ellipse cx="311" cy="348" rx="25" ry="13" fill="#ff8fa3" opacity="0.72" />
				<ellipse
					cx="235"
					cy={373 + mouthOpen * 0.18}
					rx={22 + mouthOpen * 0.2}
					ry={mouthOpen}
					fill="#401417"
					stroke="#111"
					strokeWidth="5"
				/>
				{mouthOpen > 8 && (
					<path d="M221 380Q235 391 249 380" fill="#ff7187" stroke="#111" strokeWidth="3" />
				)}

				{/* 左手扶桌 */}
				<ellipse cx="139" cy="584" rx="48" ry="38" fill="#171717" stroke="#111" strokeWidth="7" />

				{/* 右手 + 指示棒 */}
				<g transform={`translate(0 ${handLift}) rotate(${pointerRotation} 338 555)`}>
					<ellipse cx="338" cy="555" rx="43" ry="36" fill="#171717" stroke="#111" strokeWidth="7" />
					<path d="M350 532L434 248" stroke="#111" strokeWidth="13" strokeLinecap="round" />
					<path d="M350 532L434 248" stroke="#f4b942" strokeWidth="6" strokeLinecap="round" />
					<circle cx="434" cy="248" r="11" fill={accent} stroke="#111" strokeWidth="5" />
				</g>
			</svg>

			<div
				style={{
					position: 'absolute',
					left: 92,
					bottom: 8,
					padding: '12px 22px',
					border: '4px solid #111',
					borderRadius: 999,
					background: '#fff',
					boxShadow: '6px 6px 0 #111',
					fontFamily: '"PingFang SC", "Arial Unicode MS", sans-serif',
					fontSize: 24,
					fontWeight: 800
				}}
			>
				<span style={{ color: accent }}>●</span> 小花老师 · AI 讲解
			</div>
		</div>
	);
};
