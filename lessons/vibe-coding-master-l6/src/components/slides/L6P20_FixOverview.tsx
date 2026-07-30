import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const PAIRS = [
	{ mech: '① 稀释', fix: '关键约束落盘成文件', note: '别只在对话里说一次', color: colors.blue, page: 'P25' },
	{ mech: '② 压缩', fix: '决定和「为什么」落盘 + 一次一件事', note: '别把五件事塞一个会话', color: colors.purple, page: 'P25' },
	{ mech: '③ 累积', fix: '计划先行 + 你审计划', note: '最便宜的纠偏窗口', color: colors.orange, page: 'P22' },
	{ mech: '④ 漂移', fix: '交付单的「边界」格', note: '只动什么、不要碰什么', color: colors.green, page: 'P21' },
	{ mech: '⑤ 幻觉', fix: '可执行验证', note: '判据必须来自它之外', color: colors.red, page: 'P23' },
];

// ③ 怎么改 —— 机制 → 处方一一对应总览
export default function L6P20_FixOverview() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
						<Tag bg={colors.green}>③ 怎么改</Tag>
						<Tag bg={colors.dark}>一一对应</Tag>
					</div>
					<Title size="42px" style={{ marginBottom: 6 }}>
						五条机制 → <span style={{ background: colors.yellow, padding: '0 10px' }}>五个处方</span>
					</Title>
					<p style={{ fontSize: 17.5, color: '#555', fontWeight: 500, marginBottom: 20 }}>
						好消息：这些你其实都学过 —— 前五节散着教的东西，现在各就各位。
					</p>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 20 }}>
						{PAIRS.map((p, i) => (
							<motion.div
								key={p.mech}
								initial={{ opacity: 0, x: -24 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.38, delay: 0.12 + i * 0.1 }}
								style={{
									display: 'flex', alignItems: 'stretch',
									background: colors.white, border, boxShadow: shadow,
								}}
							>
								<div style={{
									flex: '0 0 130px', background: p.color, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
								}}>{p.mech}</div>
								<div style={{ display: 'flex', alignItems: 'center', padding: '0 14px', color: colors.red, fontWeight: 900, fontSize: 18 }}>→</div>
								<div style={{ flex: 1, padding: '12px 8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
									<div style={{ fontSize: 19, fontWeight: 900 }}>{p.fix}</div>
									<div style={{ fontSize: 15, color: '#777', marginTop: 3 }}>{p.note}</div>
								</div>
								<div style={{
									flex: '0 0 62px', borderLeft: '2px dashed #ddd',
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 12.5, color: '#bbb', fontWeight: 700,
								}}>{p.page}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 22px' }}
					>
						<div style={{ fontSize: 18.5, lineHeight: 1.6 }}>
							注意每个处方都是<strong style={{ color: colors.yellow }}>一个具体动作</strong>，不是一句心法 ——
							下周你能照着做的那种。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
