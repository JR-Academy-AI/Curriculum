import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const KNOWN = [
	['客户', '管理 100–500 套住宅、没有专职维修协调团队的独立物业经理'],
	['现状', '租客从邮件和短信报修；经理追问、建表、找技工、催报价'],
];

const QUESTIONS = [
	'AI 应该做到哪一步停下来？',
	'客户到底为什么付钱？',
	'6 周内什么证据会让你继续？',
	'哪三件事绝对不能自动做？',
];

export default function S13a_CasePropertyPrompt() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="SoT · 第 5 步 / 6 · 案例 B 先别看答案"
					tagBg={colors.blue}
					title="现在换你：把物业维修的模糊想法压成可验证 SoT"
					titleSize="clamp(28px, 2.55vw, 39px)"
					sub="给你客户和现状，90 秒小组讨论。先说边界、价值、证据和不做，再看下一页答案。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: 22 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{KNOWN.map(([label, body], index) => (
							<motion.div key={label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + index * 0.1 }} style={{ border, boxShadow: shadow, background: index ? '#FFF6D6' : '#DCEBFF', padding: '20px' }}>
								<div style={{ fontFamily: fonts.mono, color: colors.blue, fontWeight: 700 }}>{label}</div>
								<div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, lineHeight: 1.45 }}>{body}</div>
							</motion.div>
						))}
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 700, marginBottom: 14 }}>小组必须回答</div>
						{QUESTIONS.map((q, index) => (
							<motion.div key={q} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + index * 0.1 }} style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 16 }}>
								<span style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 24, fontWeight: 700 }}>0{index + 1}</span>
								<span style={{ fontSize: 22, fontWeight: 800 }}>{q}</span>
							</motion.div>
						))}
					</div>
				</div>
			</Body>
		</Slide>
	);
}
