import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const DEATHS = [
	{ n: 1, k: 'context 稀释', s: '越到后面越不守规矩', color: colors.blue },
	{ n: 2, k: '压缩丢细节', s: '风格断层 / 重踩已解决的坑', color: colors.purple },
	{ n: 3, k: '错误累积', s: '每步都有道理，整体是错的', color: colors.orange },
	{ n: 4, k: '目标漂移', s: 'diff 比你预期大三倍', color: colors.green },
	{ n: 5, k: '进度幻觉', s: '总结全绿，自己跑全红', color: colors.red },
];

// ① 会遇到的问题 —— 五条机制总览
export default function L6P10_FiveDeaths() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
						<Tag bg={colors.red}>① 会遇到的问题</Tag>
						<Tag bg={colors.dark}>问题目录</Tag>
					</div>
					<Title size="44px" style={{ marginBottom: 8 }}>
						长任务只有<span style={{ background: colors.yellow, padding: '0 10px' }}>五种死法</span>
					</Title>
					<p style={{ fontSize: 18, color: '#555', fontWeight: 500, marginBottom: 22 }}>
						接下来一条一条讲。每条我都会给你一个<strong style={{ color: colors.dark }}>症状</strong>——你在屏幕上真正会看到的那个现象。
					</p>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 20 }}>
						{DEATHS.map((d, i) => (
							<motion.div
								key={d.n}
								initial={{ opacity: 0, x: -26 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: 0.12 + i * 0.11 }}
								style={{
									display: 'flex', alignItems: 'center', gap: 0,
									background: colors.white, border,
									boxShadow: d.n === 5 ? shadow : shadowSm,
								}}
							>
								<span style={{
									fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, flexShrink: 0,
									background: d.color, color: colors.white,
									width: 54, alignSelf: 'stretch',
									display: 'flex', alignItems: 'center', justifyContent: 'center',
								}}>{d.n}</span>
								<span style={{
									fontSize: 20, fontWeight: 900, flex: '0 0 240px',
									padding: '13px 18px', borderRight: '2px dashed #ddd',
								}}>{d.k}</span>
								<span style={{ padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 11.5, color: '#aaa', letterSpacing: 1.5, fontWeight: 700, flexShrink: 0 }}>症状</span>
									<span style={{ fontSize: 17.5, fontWeight: d.n === 5 ? 800 : 600 }}>{d.s}</span>
								</span>
								{d.n === 5 && (
									<span style={{
										marginLeft: 'auto', marginRight: 16, flexShrink: 0,
										fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700,
										background: colors.red, color: colors.white, padding: '4px 10px',
									}}>最危险</span>
								)}
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
						style={{ fontSize: 17, color: colors.dark, fontWeight: 700 }}
					>
						记住这五个名字就够了 —— 待会儿的反查表和处方，都挂在它们上面。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
