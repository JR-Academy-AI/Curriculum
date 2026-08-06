import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P08 · 拍 3 讲（收束）：小仓库的边界从哪来
// SoT：蓝图 §3.0 那段警告 / §9.3 第二段
//
// ⚠️ 这一页**曾经放在拍 2**（三份都对之后、粘贴之前），那是错的：
//    P04 结尾是「记住这个感觉」，情绪应该直接推到 P05 的口令，
//    中间插一页方法论讨论会把气泄掉。现在它是拍 3 的收束 ——
//    立论讲完、墙回收完，最后回答「那我不划边界不就行了」。

export default function L8P08_WhereBoundariesComeFrom() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center style={{ gap: 22 }}>
				<div style={{ display: 'flex', gap: 10 }}>
					<Tag bg={colors.blue}>拍 3 · 讲</Tag>
					<Tag bg={colors.dark}>收束</Tag>
				</div>

				<motion.div
					initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{
						border, boxShadow: shadow, background: colors.white,
						padding: '12px 26px', display: 'flex', alignItems: 'center', gap: 12,
					}}
				>
					<span style={{ fontSize: 22 }}>🙋</span>
					<span style={{ fontSize: 20, fontWeight: 700, color: colors.dark }}>
						「这仓库才几十个文件，我<strong>一个 agent 全读了</strong>不就完了？」
					</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
					style={{ fontSize: 24, fontWeight: 900, color: colors.dark }}
				>
					对。<span style={{ color: colors.green }}>这个仓库你可以。</span>
					<span style={{ color: colors.red, marginLeft: 14 }}>你自己那个项目你不行。</span>
				</motion.div>

				<div style={{ display: 'flex', gap: 20, width: '100%', maxWidth: 1200 }}>
					<motion.div
						initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.55 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.blue, color: colors.white, padding: '9px 16px', borderBottom: border, fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>
							今天 · star-mansions
						</div>
						<div style={{ padding: '20px 22px' }}>
							<div style={{ fontSize: 26, fontWeight: 900, color: colors.dark, marginBottom: 8 }}>
								边界是你在 brief 里<span style={{ background: colors.yellow, padding: '0 8px' }}>划出来的</span>
							</div>
							<div style={{ fontSize: 15.5, color: '#555', lineHeight: 1.65 }}>
								几十个文件，一个 context 装得下。
								边界是<strong>人为设计</strong>的 —— 为了让你在 12 分钟内看清盲区长什么样。
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.7 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '9px 16px', borderBottom: border, fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>
							你的真实项目
						</div>
						<div style={{ padding: '20px 22px' }}>
							<div style={{ fontSize: 26, fontWeight: 900, color: colors.dark, marginBottom: 8 }}>
								边界是 context <span style={{ background: colors.yellow, padding: '0 8px' }}>逼出来的</span>
							</div>
							<div style={{ fontSize: 15.5, color: '#555', lineHeight: 1.65 }}>
								你根本没得选。L7 那节课的全部内容，就是教你<strong>不得不划</strong>这些边界。
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.45, delay: 0.95 }}
					style={{
						border: `4px solid ${colors.black}`, boxShadow: '8px 8px 0 #000',
						background: colors.dark, color: colors.white,
						padding: '20px 40px', textAlign: 'center', maxWidth: 1200, width: '100%',
					}}
				>
					<Title size="38px" white style={{ marginBottom: 8 }}>
						盲区的成因是<span style={{ background: colors.yellow, color: colors.black, padding: '0 10px' }}>边界</span>，
						不是<span style={{ textDecoration: 'line-through', opacity: 0.5 }}>仓库大小</span>
					</Title>
					<div style={{ fontSize: 16.5, opacity: 0.8 }}>
						边界存在，盲区就存在 —— 20 个文件和 20 万个文件一模一样。
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25 }}
					style={{ fontSize: 15, color: '#777', textAlign: 'center' }}
				>
					顺带回收 L7：你上节课划边界是为了<strong style={{ color: colors.green }}>省 context</strong>；
					这节课你会发现，<strong style={{ color: colors.red }}>同一条边界也是一道信息墙</strong>。
				</motion.div>
			</Inner>
		</Slide>
	);
}
