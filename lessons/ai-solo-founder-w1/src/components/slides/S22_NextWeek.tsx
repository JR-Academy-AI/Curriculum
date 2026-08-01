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
					title="下周带一条新证据回来"
					titleSize="clamp(26px, 2.3vw, 36px)"
					sub="不是多做七个任务，而是让今天这条任务因为一条新事实变得更准。"
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
						本周唯一必做动作
					</div>
					<div style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.35 }}>
						找一位目标用户或一份可信资料，拿到一条新事实；更新 SoT，再重跑今天的任务。
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
							<b>L03 Lab</b>：把最小 AI OS 扩成自己的工作空间；需要时再接工具
							<br />
							<b>L04 自学</b>：从更多任务中挑真正有用的，不把“任务数量”当成果
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
							下周再比较 agent 路线和自动化。先带来：<b>一条新证据、更新后的 SoT、重跑后的输出</b>。
							<span style={{ display: 'block', marginTop: 8, color: colors.yellow }}>
								课程中段仍有 <b>30 分钟 Founder Exchange</b>：讲证据改变了什么，也说清楚你需要谁的帮助。
							</span>
						</div>
					</motion.div>
				</div>
			</Body>
		</Slide>
	);
}
