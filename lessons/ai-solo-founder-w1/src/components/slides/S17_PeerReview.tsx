import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// ② 同桌互念 —— 来源：W1_RUNSHEET.md §3「15:10–15:20 同桌两人互念」三个问题 + 定规矩
const QUESTIONS = [
	'我能不能复述：你帮谁解决什么问题？',
	'你先交付的结果够不够具体、能不能检查？',
	'下周验证什么，以及这阶段明确不做什么？',
];

export default function S17_PeerReview() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="同桌互相检查"
					tagBg={colors.green}
					title="一对一互念，对方只问三个问题"
					sub="一人用自己的话讲，另一人只负责复述和追问。项目细节分享多少由本人决定。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 8 }}>
					{QUESTIONS.map((q, i) => (
						<motion.div
							key={q}
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.15 + i * 0.13 }}
							style={{
								border,
								boxShadow: shadow,
								background: [colors.warmBg, '#EDE9FE', '#D9F2E4'][i],
								padding: '26px 22px',
								minHeight: 250,
								display: 'flex',
								flexDirection: 'column',
								gap: 14,
							}}
						>
							<span
								style={{
									fontFamily: fonts.mono,
									fontSize: 46,
									fontWeight: 700,
									lineHeight: 1,
									color: colors.red,
								}}
							>
								Q{i + 1}
							</span>
							<span style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.4 }}>{q}</span>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					定规矩：这一期<u>只做一个方向</u>。想改可以，但必须<b>带着证据</b>走 W3 那一关（商业验证）。
					<span style={{ display: 'block', marginTop: 6, fontSize: 18, color: colors.yellow }}>
						不允许每周换一个想法 —— 那是这门课最常见的失败方式。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
