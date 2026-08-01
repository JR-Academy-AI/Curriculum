import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const CHAOS = [
	['你说的', '“帮会计事务所提效”'],
	['同学听到的', '做一个会计 SaaS'],
	['AI 猜出来的', '写内容、做 chatbot、自动报税'],
	['下周你又想的', '也许改做物业管理'],
];

export default function S10b_WhySOT() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="SoT · 第 1 步 / 6"
					tagBg={colors.red}
					title="为什么第一周不先做网站，而要先写一页共同真相？"
					titleSize="clamp(29px, 2.6vw, 40px)"
					sub="因为同一句模糊想法，经过四个人和四个工具，会迅速变成四门不同的生意。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
					{CHAOS.map(([who, line], index) => (
						<motion.div
							key={who}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + index * 0.12 }}
							style={{ border, boxShadow: shadowSm, background: [colors.white, '#FFF6D6', '#EDE9FE', '#FFE9E4'][index], padding: '20px 18px', minHeight: 190 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.red }}>0{index + 1} · {who}</div>
							<div style={{ marginTop: 18, fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, lineHeight: 1.35 }}>{line}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 22, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 20 }}>
					<div style={{ fontSize: 22, fontWeight: 800 }}>没有 SoT：每次提问都重新解释，AI 每次都重新猜。</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 32, color: colors.yellow }}>→</div>
					<div style={{ fontSize: 22, fontWeight: 800 }}>有 SoT：人和 AI 从同一页出发，新证据只改这一页。</div>
				</div>
			</Body>
		</Slide>
	);
}
