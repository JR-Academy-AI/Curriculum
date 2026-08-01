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
					title="Business SoT Skill：先锁定客户 Job 假设"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="借鉴 JTBD 与 Mom Test，但本节不冒充完成访谈：先把客户、情境、现有替代和待验证证据写清。"
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
						<div style={{ marginTop: 16, fontSize: 25, lineHeight: 1.5, fontWeight: 800 }}>
							Use <span style={{ color: colors.yellow }}>$opc-business-sot</span> to define a solution-free customer job hypothesis and an evidence-labelled Business SoT v0.1.
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
