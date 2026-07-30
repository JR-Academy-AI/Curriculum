import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const BEATS = [
	{ n: 1, t: '读 context', d: '把此刻它知道的一切读一遍', color: colors.blue },
	{ n: 2, t: '决定', d: '调一个工具，还是直接回答你', color: colors.purple },
	{ n: 3, t: '执行，拿结果', d: '文件内容 / 命令输出 / 报错', color: colors.orange },
	{ n: 4, t: '结果回灌进 context', d: '然后回到第 1 拍', color: colors.green },
];

// 循环的四拍
export default function L6P04_TheFourBeats() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 620px' }}>
					<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<Tag bg={colors.purple}>循环</Tag>
						<Title size="46px" style={{ marginTop: 14, marginBottom: 14 }}>
							它每一轮都在做同样的四件事
						</Title>
						<p style={{ fontSize: 18, color: '#555', lineHeight: 1.7, marginBottom: 20 }}>
							这个循环没有终点线，只有停止条件。它转一圈，世界就多了一点变化，然后它重新看一遍这个世界。
						</p>
						<div style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 22px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 2, color: colors.yellow, fontWeight: 700, marginBottom: 10 }}>
								今天后半节课所有麻烦的源头
							</div>
							<div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.5 }}>
								它每一轮都在<span style={{ background: colors.yellow, color: colors.black, padding: '1px 8px' }}>重新读一遍</span> context 再决定，
								不是带着记忆往前走。
							</div>
						</div>
					</motion.div>
				</Half>

				<Half>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
						{BEATS.map((b, i) => (
							<motion.div
								key={b.n}
								initial={{ opacity: 0, x: 40 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.42, delay: 0.25 + i * 0.13 }}
								style={{
									display: 'flex', alignItems: 'center', gap: 16,
									background: colors.white, border, boxShadow: shadowSm, padding: '15px 18px',
								}}
							>
								<span style={{
									fontFamily: fonts.mono, fontSize: 20, fontWeight: 700,
									background: b.color, color: colors.white,
									width: 42, height: 42, flexShrink: 0,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
								}}>{b.n}</span>
								<div style={{ minWidth: 0 }}>
									<div style={{ fontSize: 20, fontWeight: 800, marginBottom: 3 }}>{b.t}</div>
									<div style={{ fontSize: 15.5, color: '#666' }}>{b.d}</div>
								</div>
							</motion.div>
						))}

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.85 }}
							style={{
								display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
								fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.red,
								marginTop: 2,
							}}
						>
							<span style={{ fontSize: 20 }}>↻</span> 回到第 1 拍，重新读一遍
						</motion.div>
					</div>
				</Half>
			</Inner>
		</Slide>
	);
}
