import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// ⑦ 派下周的活 + 预告 W2 —— 来源：W1_RUNSHEET.md §3「16:55–17:00 ⑦ 派下周的活 + 预告」
export default function S22_NextWeek() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="⑦ 派下周的活 + 预告 · 16:55–17:00"
					tagBg={colors.green}
					title="课上派活 → 周中 OS 自动跑 → 下周第一件事就是 review 它跑出了什么"
					titleSize="clamp(26px, 2.3vw, 36px)"
					sub="这是全课的节奏发动机。"
				/>

				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4, delay: 0.15 }}
					style={{
						border,
						boxShadow: shadow,
						background: colors.yellow,
						padding: '18px 24px',
						marginBottom: 16,
					}}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>
						每人给 AI OS 设一个本周自动任务 · 建议默认任务
					</div>
					<div style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.35 }}>
						每天早上 8 点，把跟我这门生意相关的行业新闻 + 竞品动态整理给我。
					</div>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
					<motion.div
						initial={{ opacity: 0, x: -18 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, delay: 0.3 }}
						style={{ border, boxShadow: shadowSm, background: colors.white, padding: '16px 20px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
							本周作业（课后，平台上有）
						</div>
						<div style={{ fontSize: 19, lineHeight: 1.6 }}>
							<b>L03 Lab</b>：CEO AI OS 装机验收（90min）—— 把现场没接完的接上，跑通验收清单
							<br />
							<b>L04 自学</b>：7 个秘书任务跑满一周（90min）—— 七个任务每天都用，不是跑一次就完
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 18 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, delay: 0.42 }}
						style={{ border, boxShadow: shadowSm, background: colors.dark, color: colors.white, padding: '16px 20px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, marginBottom: 10, color: colors.yellow }}>
							预告 W2 · 你的 AI 员工上岗
						</div>
						<div style={{ fontSize: 19, lineHeight: 1.6 }}>
							今天搭的是<b>秘书</b>，下周部署真正能干活的 <b>agent</b>（Hermes / 龙虾 / Codex / Claude Code），并且一起搭 <b>Agent Schedule</b>，让它周中自动替你跑调研。
							<span style={{ display: 'block', marginTop: 8, color: colors.yellow }}>
								另外下周开场有 <b>30 分钟分享 + networking</b> —— 组队也在那时候发生。这周把 SoT 想清楚。
							</span>
						</div>
					</motion.div>
				</div>
			</Body>
		</Slide>
	);
}
