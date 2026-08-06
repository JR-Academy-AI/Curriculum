import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P15 · 拍 7 收束（揭穿之后）：价值发生在消息里
// SoT：蓝图 §9.7 讲评
//
// ⚠️ 这一页**曾经放在拍 6**（深题硬停之后），那是错的：
//    那时候全班手里揣的是错答案，而那个错答案恰恰是**互相通信之后**达成的 ——
//    此刻问「通信有什么价值」，诚实的回答是「好像没帮上忙」，这一问就废了。
//    放到拍 7 揭穿之后，答案才有两层，而且第二层才是本节真正要教的：
//    通信是必要条件，不是充分条件。

export default function L8P15_ValueInMessages() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center style={{ gap: 24 }}>
				<div style={{ display: 'flex', gap: 10 }}>
					<Tag bg={colors.blue}>拍 7 · 收束</Tag>
					<Tag bg={colors.dark}>现在才问得动</Tag>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
					style={{
						border: `4px solid ${colors.black}`, boxShadow: '10px 10px 0 #000',
						background: colors.yellow, padding: '22px 44px', maxWidth: 1240,
					}}
				>
					<Title size="40px" style={{ textAlign: 'center', lineHeight: 1.35 }}>
						如果禁止你在三个会话之间传递证据，<br />
						这个任务会在<span style={{ background: colors.black, color: colors.yellow, padding: '0 12px' }}>哪一步</span>变慢或变差？
					</Title>
				</motion.div>

				{/* 两层答案 —— 揭穿之后才成立 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.55 }}
					style={{ display: 'flex', gap: 16, width: '100%', maxWidth: 1240 }}
				>
					<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}>
						<div style={{ background: colors.blue, color: colors.white, padding: '8px 15px', borderBottom: border, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1 }}>
							第一层 · 浅题
						</div>
						<div style={{ padding: '13px 16px', fontSize: 15.5, color: '#444', lineHeight: 1.6 }}>
							不通信 = <strong style={{ color: colors.dark }}>根本没有答案</strong>。三个「没问题」加起来还是「没问题」。
						</div>
					</div>
					<div style={{ flex: 1.35, border, boxShadow: shadow, background: '#fff2f2' }}>
						<div style={{ background: colors.red, color: colors.white, padding: '8px 15px', borderBottom: border, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1 }}>
							第二层 · 深题（你们刚亲历的）
						</div>
						<div style={{ padding: '13px 16px', fontSize: 15.5, color: '#444', lineHeight: 1.6 }}>
							这次你们<strong>通信了</strong>，结果是什么？——
							<strong style={{ color: colors.red }}>更快地达成一致，一致地错。</strong>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
					style={{ fontSize: 20, fontWeight: 800, color: colors.dark, textAlign: 'center' }}
				>
					所以：<span style={{ background: colors.yellow, padding: '2px 10px' }}>通信是必要条件，不是充分条件</span>。
					<span style={{ fontSize: 16, color: '#777', fontWeight: 500, marginLeft: 10 }}>还得有人专职推翻。</span>
				</motion.div>

				{/* 三类消息回收 */}
				<div style={{ display: 'flex', gap: 16, width: '100%', maxWidth: 1240, marginTop: 4 }}>
					{[
						{ tag: 'DISCOVERY', color: colors.blue, q: '新证据是什么，它影响谁' },
						{ tag: 'CONFLICT', color: colors.orange, q: '哪两条结论冲突，各自证据' },
						{ tag: 'DECISION', color: colors.green, q: '怎么裁的，谁继续做什么' },
					].map((m, i) => (
						<motion.div
							key={m.tag}
							initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.38, delay: 0.8 + i * 0.13 }}
							style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
						>
							<div style={{
								background: m.color, color: colors.white, padding: '9px 15px',
								fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1,
							}}>[{m.tag}]</div>
							<div style={{ padding: '13px 15px', fontSize: 15, color: '#444', lineHeight: 1.5 }}>{m.q}</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25 }}
					style={{ fontSize: 15.5, color: '#777', textAlign: 'center' }}
				>
					这三类之外全是噪音 —— 因为<strong style={{ color: colors.dark }}>只有这三类会改变后续行动</strong>。
				</motion.div>

				{/* 诊断 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 1.45 }}
					style={{
						border: `3px solid ${colors.red}`, boxShadow: `6px 6px 0 ${colors.red}`,
						background: colors.dark, color: colors.white, padding: '18px 36px',
						display: 'flex', alignItems: 'center', gap: 18,
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, color: colors.red, whiteSpace: 'nowrap' }}>诊断</span>
					<span style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.45 }}>
						一条 CONFLICT 都没有的 Team，大概率是
						<span style={{ background: colors.red, padding: '0 10px', marginLeft: 8 }}>三个不说话的 Subagent</span>
						—— 只是更贵。
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
