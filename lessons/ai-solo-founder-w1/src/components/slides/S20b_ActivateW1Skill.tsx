import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

export default function S20b_ActivateW1Skill() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="本周领取"
					tagBg={colors.yellow}
					title="本周 SoT Skill：把你的想法整理成一页说明"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="它会追问客户、问题、现在的处理方法、最小交付和边界；不知道的内容标成“待验证”，不替你编答案。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.45fr', gap: 22 }}>
					<motion.div
						initial={{ opacity: 0, x: -18 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						style={{ border, boxShadow: shadowSm, background: colors.white, padding: '22px 24px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: colors.red }}>本周包里有</div>
						<div style={{ marginTop: 16, fontFamily: fonts.mono, fontSize: 18, lineHeight: 1.75, fontWeight: 700 }}>
							opc-founder-os/<br />
							opc-business-sot/<br />
							BUSINESS-SOT.md<br />
							method-adaptation.md
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 18 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.12 }}
						style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '24px 26px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 700 }}>复制这句话启动</div>
						<div style={{ marginTop: 16, fontSize: 23, lineHeight: 1.55, fontWeight: 800 }}>
							请使用 <span style={{ color: colors.yellow }}>$opc-business-sot</span>，帮我把这门生意整理成一页 SoT。逐项问我，不要替我编客户证据；不确定的内容写“待验证”。
						</div>
						<div style={{ marginTop: 18, borderTop: '2px solid rgba(255,255,255,.35)', paddingTop: 14, fontSize: 17, lineHeight: 1.45 }}>
							客户没有说过的话一律不能由 AI 补写。本节过关只代表 SoT 可验证，不代表生意已经验证。
						</div>
					</motion.div>
				</div>
			</Body>
		</Slide>
	);
}
