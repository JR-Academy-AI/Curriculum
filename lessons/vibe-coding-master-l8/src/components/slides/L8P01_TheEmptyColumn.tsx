import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P01 · 拍 0：你上节课那张矩阵，「冲突 / 缺口」那列填了什么
// SoT：蓝图 §9.1
// ⚠️ 这一拍只做一件事：让那一列的空白变得刺眼。
//    不画拓扑图、不说「Agent Team」四个字、不给答案。

const TIERS = [
	{ what: '空着', ratio: '多数', why: '三路根本没打架，你没东西可填', color: colors.red },
	{ what: '「待确认 / 需进一步排查」', ratio: '不少', why: '你察觉到有缝，但没有人去查', color: colors.orange },
	{ what: '两条结论相互矛盾 + 证据', ratio: '极少', why: '这个人当时手动做了今天要教的事', color: colors.green },
];

export default function L8P01_TheEmptyColumn() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 46%' }}>
					<Tag bg={colors.dark}>拍 0 · 从你自己交的作业开始</Tag>
					<Title size="42px" style={{ margin: '12px 0 14px', lineHeight: 1.2 }}>
						上节课那张矩阵，<br />
						<span style={{ background: colors.yellow, padding: '0 8px' }}>「冲突 / 缺口」</span>那列<br />
						你填了什么？
					</Title>

					{/* L7 汇总矩阵缩略 */}
					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{ border, boxShadow: shadow, background: colors.white, overflow: 'hidden' }}
					>
						<div style={{ background: colors.dark, color: colors.white, padding: '7px 12px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1, fontWeight: 700 }}>
							L7 · 汇总矩阵（你交的那张）
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.1fr 0.7fr 1.1fr', fontSize: 12.5 }}>
							{['范围', '关键结论', '证据', '冲突 / 缺口'].map((h, i) => (
								<div key={h} style={{
									padding: '7px 8px', fontWeight: 800, background: i === 3 ? colors.yellow : '#f2f2f6',
									borderBottom: '2px solid #000', borderRight: i < 3 ? '1px solid #ddd' : undefined,
									fontFamily: fonts.mono, fontSize: 11.5,
								}}>{h}</div>
							))}
							{['API', 'Client', 'Config / Test'].map((r, ri) => (
								[r, '✓ 已填', '✓ 已填', ''].map((c, ci) => (
									<div key={`${ri}-${ci}`} style={{
										padding: '9px 8px', color: ci === 0 ? colors.dark : '#999',
										fontWeight: ci === 0 ? 700 : 500,
										background: ci === 3 ? '#fffbe8' : colors.white,
										borderBottom: ri < 2 ? '1px solid #eee' : undefined,
										borderRight: ci < 3 ? '1px solid #eee' : undefined,
										minHeight: 34,
									}}>
										{ci === 3
											? <motion.span
												initial={{ opacity: 0 }} animate={{ opacity: 1 }}
												transition={{ delay: 0.9 + ri * 0.12 }}
												style={{ color: colors.red, fontWeight: 800, fontSize: 15 }}>⌀</motion.span>
											: c}
									</div>
								))
							))}
						</div>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }}
						style={{ marginTop: 12, fontSize: 14.5, color: '#777', lineHeight: 1.55 }}
					>
						前三列都填满了。<strong style={{ color: colors.dark }}>最后一列大多是空的。</strong>
					</motion.p>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						现场统计 · 三档
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
						{TIERS.map((t, i) => (
							<motion.div
								key={t.what}
								initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.35 + i * 0.13 }}
								style={{ display: 'flex', border, boxShadow: '4px 4px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 74px', background: t.color, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
								}}>{t.ratio}</div>
								<div style={{ flex: 1, padding: '10px 14px' }}>
									<div style={{ fontSize: 15.5, fontWeight: 800, color: colors.dark, marginBottom: 3 }}>{t.what}</div>
									<div style={{ fontSize: 13.5, color: '#666', lineHeight: 1.45 }}>{t.why}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.95 }}
						style={{ marginTop: 18, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '16px 20px' }}
					>
						<div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.6 }}>
							不是你偷懒。是<span style={{ background: colors.red, padding: '1px 8px' }}>你的结构里没有人有动机去挑战别人</span>。
						</div>
						<div style={{ display: 'flex', gap: 14, marginTop: 14, alignItems: 'center' }}>
							<div style={{ flex: 1, borderLeft: `4px solid ${colors.green}`, paddingLeft: 12 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.green, letterSpacing: 1, fontWeight: 700 }}>你拿到的</div>
								<div style={{ fontSize: 20, fontWeight: 900 }}>覆盖</div>
								<div style={{ fontSize: 12.5, opacity: 0.7 }}>三路都覆盖到了</div>
							</div>
							<div style={{ flex: 1, borderLeft: `4px solid ${colors.red}`, paddingLeft: 12 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.red, letterSpacing: 1, fontWeight: 700 }}>你拿不到的</div>
								<div style={{ fontSize: 20, fontWeight: 900 }}>收敛</div>
								<div style={{ fontSize: 12.5, opacity: 0.7 }}>到底哪个是真的</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
						style={{ marginTop: 14, textAlign: 'center', fontSize: 17, fontWeight: 800, color: colors.dark }}
					>
						L7 有一句话现在要还债了 ——
						<span style={{ background: colors.yellow, padding: '2px 10px', marginLeft: 8 }}>子 Agent 之间没有连线</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
