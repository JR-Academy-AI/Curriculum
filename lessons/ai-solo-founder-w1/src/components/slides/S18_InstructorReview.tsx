import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// ②′ 讲师现场 review —— 来源：W1_RUNSHEET.md §3「15:20–15:35 ②′ 讲师现场 review」
// 含：为什么要有这一段 / 怎么挑 3 份 / 每份 5 分钟怎么走 / 讲师四问 / 没被挑到的人干什么 / 讲师纪律
const PICKS = [
	{ t: '1 份「客户写得太宽」', d: '最高频的错。写「中小企业主」「宝妈」「留学生」—— 这不是客户，是人口统计', bg: '#FFE9E4' },
	{ t: '1 份「解决的问题不值钱」', d: '问题真实存在，但对方现在没有在为它花钱，也没打算花', bg: '#FFF6D6' },
	{ t: '1 份「写得不错但一句话说不清」', d: '用来立正面标杆：好的 SoT 是别人能替你转述出去的', bg: '#D9F2E4' },
];

const FLOW = [
	['1 min', '本人念', '只念，不解释、不补充背景。念完就停。'],
	['2 min', '讲师四问', '只问，先不给答案 →'],
	['1 min', '只指出必须改的那一处', '一份只改一处。全盘重写等于没改，他回去也执行不了。'],
	['1 min', '当场改完再念一遍', '改完必须重念。没重念过的不算过。'],
];

const FOUR_Q = [
	'你服务的这个人，能说出一个真名吗？（说不出 = 太宽）',
	'他现在为这个问题花钱了吗？花给谁？（没花 = 不值钱）',
	'他为什么选你，不选那个已经在收他钱的？',
	'你刚才这句话，你同桌能原样转述给他老板听吗？',
];

export default function S18_InstructorReview() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '34px 52px 28px' }}>
				<SlideHead
					tag="②′ 讲师现场 review · 15:20–15:35 · 2026-07-29 新增"
					tagBg={colors.red}
					titleSize="clamp(28px, 2.5vw, 38px)"
					title="挑 3 份 SoT 当场逐字改"
					sub="同桌互念只能发现「我听不懂你在说什么」，发现不了「这个方向本身就不成立」—— 互念的两个人认知在同一层。这是全天唯一一次讲师对着某个人的某一句话给判断。"
				/>

				{/* 怎么挑这 3 份 */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 14 }}>
					{PICKS.map((p, i) => (
						<motion.div
							key={p.t}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.12 + i * 0.08 }}
							style={{ border, boxShadow: shadowSm, background: p.bg, padding: '10px 14px' }}
						>
							<div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{p.t}</div>
							<div style={{ fontSize: 15, lineHeight: 1.4, color: '#333' }}>{p.d}</div>
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 16 }}>
					{/* 每份 5 分钟怎么走 */}
					<div style={{ border, boxShadow: shadowSm, background: colors.white, padding: '14px 16px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, marginBottom: 10, letterSpacing: 1 }}>
							每份 5 分钟怎么走
						</div>
						{FLOW.map(([t, h, d], i) => (
							<motion.div
								key={h}
								initial={{ opacity: 0, x: -14 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
								style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 9 }}
							>
								<span
									style={{
										fontFamily: fonts.mono,
										fontSize: 13,
										fontWeight: 700,
										background: colors.black,
										color: colors.yellow,
										padding: '3px 7px',
										whiteSpace: 'nowrap',
									}}
								>
									{t}
								</span>
								<span style={{ fontSize: 16, lineHeight: 1.4 }}>
									<b>{h}</b> —— {d}
								</span>
							</motion.div>
						))}
					</div>

					{/* 讲师四问 */}
					<div style={{ border, boxShadow: shadowSm, background: colors.dark, color: colors.white, padding: '14px 18px' }}>
						<div
							style={{
								fontFamily: fonts.mono,
								fontSize: 15,
								fontWeight: 700,
								marginBottom: 10,
								letterSpacing: 1,
								color: colors.yellow,
							}}
						>
							讲师四问（只问，先不给答案）
						</div>
						{FOUR_Q.map((q, i) => (
							<motion.div
								key={q}
								initial={{ opacity: 0, x: 14 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
								style={{ display: 'flex', gap: 10, marginBottom: 9, alignItems: 'baseline' }}
							>
								<span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, color: colors.red }}>
									{i + 1}
								</span>
								<span style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.4 }}>{q}</span>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ display: 'flex', gap: 14, marginTop: 14, fontSize: 16, lineHeight: 1.4 }}>
					<div style={{ flex: 1.2, padding: '10px 14px', background: colors.yellow, border }}>
						<b>没被挑到的人不许当观众。</b> 每份点评开始前：「对着你自己那张纸，同样四问」。助教把<b>四问里答不上来 ≥2 问</b>的人记下来，课后一对一补 —— 这份名单预测了谁会在 W3 掉队。
					</div>
					<div style={{ flex: 1, padding: '10px 14px', background: '#FFE9E4', border }}>
						<b>讲师纪律</b>：❌ 不说「我觉得这样更好」 ❌ 不替他重写 ❌ 不超时（5 分钟一份是硬线）
						<br />
						⚠️ 不要挑最差的那份公开改 —— 最差的留给助教课后一对一。
					</div>
				</div>
			</Body>
		</Slide>
	);
}
