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
					title="W1 Skill：把 SoT 变成 AI 能执行、同学能验收的共同真相"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="解压本周包后，在你的 Founder Workspace 里运行。不会改掉你已有内容。"
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
							opc-w1-business-sot/<br />
							founder-state.json<br />
							BUSINESS-SOT.md
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
							Use <span style={{ color: colors.yellow }}>$opc-w1-business-sot</span> to turn my idea into an evidence-labelled Business SoT v0.1.
						</div>
						<div style={{ marginTop: 18, borderTop: '2px solid rgba(255,255,255,.35)', paddingTop: 14, fontSize: 17, lineHeight: 1.45 }}>
							接着把同伴复述、AI 的错误和你的修正写回 Workspace。生成只是第一步。
						</div>
					</motion.div>
				</div>
			</Body>
		</Slide>
	);
}

