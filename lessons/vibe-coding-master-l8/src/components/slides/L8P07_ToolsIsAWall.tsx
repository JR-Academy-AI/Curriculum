import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P07 · 拍 3 讲（立论之后）：`tools` 那一行，你砌的是一道墙
// SoT：蓝图 §9.2 讲评 / §6.12
//
// ⚠️ 这一页**曾经放在拍 1**，那是错的：它在学员撞墙前 40 分钟就说破了
//    「边界也挡证据」，等于剧透立论 —— 违反本系列「先撞墙，再给尺子」。
//    现在它在 P06 立论之后，性质从**预告**变成**回收**：
//    那道墙不是抽象概念，是他们一小时前亲手写下的那一行。

export default function L8P07_ToolsIsAWall() {
	return (
		<Slide bg={colors.dark}>
			<Inner center style={{ gap: 24 }}>
				<div style={{ display: 'flex', gap: 10 }}>
					<Tag bg={colors.blue}>拍 3 · 讲</Tag>
					<Tag bg={colors.yellow} color={colors.black}>回收拍 1</Tag>
				</div>

				<motion.div
					initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35 }}
					style={{ fontSize: 19, color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}
				>
					回头看你<strong style={{ color: colors.white }}>一小时前亲手写下的那一行</strong>。
				</motion.div>

				<Title size="50px" white style={{ textAlign: 'center', lineHeight: 1.22 }}>
					<code style={{ fontFamily: fonts.mono, background: colors.red, color: colors.white, padding: '0 12px' }}>tools:</code>
					{' '}那一行，你砌的是<span style={{ background: colors.yellow, color: colors.black, padding: '0 12px' }}>一道墙</span>
				</Title>

				{/* 墙的两面 */}
				<div style={{ display: 'flex', alignItems: 'stretch', gap: 0, width: '100%', maxWidth: 1120, marginTop: 4 }}>
					<motion.div
						initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white, padding: '22px 24px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.4, color: colors.green, fontWeight: 700, marginBottom: 8 }}>
							L7 教你的那一面
						</div>
						<div style={{ fontSize: 30, fontWeight: 900, color: colors.dark, marginBottom: 10 }}>它挡住噪音</div>
						<div style={{ fontSize: 16, color: '#555', lineHeight: 1.65 }}>
							子 Agent 翻的 50 个文件、试错、走的弯路，全留在它自己那边。
							<strong style={{ color: colors.dark }}>主 context 只多了一条结论。</strong>
						</div>
					</motion.div>

					{/* 中间那道墙 */}
					<motion.div
						initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
						transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
						style={{
							flex: '0 0 78px', background: colors.yellow, border,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							margin: '0 -3px', zIndex: 2, boxShadow: shadow,
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.black,
							writingMode: 'vertical-rl', letterSpacing: 5,
						}}>
							同一道墙
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.55 }}
						style={{ flex: 1, border, boxShadow: shadow, background: '#fff2f2', padding: '22px 24px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.4, color: colors.red, fontWeight: 700, marginBottom: 8 }}>
							你刚才亲眼看见的那一面
						</div>
						<div style={{ fontSize: 30, fontWeight: 900, color: colors.dark, marginBottom: 10 }}>它也挡住证据</div>
						<div style={{ fontSize: 16, color: '#555', lineHeight: 1.65 }}>
							那 12 个字就卡在这道墙外面 ——
							<strong style={{ color: colors.red }}>不是它不够聪明，是它读不到。</strong>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.95 }}
					style={{
						border: `3px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.1)',
						padding: '14px 30px', textAlign: 'center', maxWidth: 1120, width: '100%',
					}}
				>
					<div style={{ fontSize: 21, fontWeight: 800, color: colors.white, lineHeight: 1.5 }}>
						上节课我只讲了左边。<span style={{ color: colors.yellow }}>右边这一面，刚才那 9 分钟你自己撞上了。</span>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
					style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}
				>
					回收 L7：范围不靠正文嘱咐、靠 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>tools</code> 物理限制 ——
					这是六格 brief 里唯一能从「请求」变成「保证」的一格。
				</motion.div>
			</Inner>
		</Slide>
	);
}
