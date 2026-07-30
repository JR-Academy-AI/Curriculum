import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const STAGES = [
	{
		n: '①',
		k: '会遇到的问题',
		d: '长任务只有五种死法，每种都有一个你认得出的症状',
		color: colors.red,
	},
	{
		n: '②',
		k: '怎么定位',
		d: '从症状反查机制：三个问题 + 一张反查表',
		color: colors.orange,
	},
	{
		n: '③',
		k: '怎么改',
		d: '五条机制 → 五个处方，每条都落到一个具体动作',
		color: colors.green,
	},
];

// 今日地图：问题 → 定位 → 改
export default function L6P02_TodayMap() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.dark}>今日地图</Tag>
					<Title size="44px" style={{ marginTop: 14, marginBottom: 8 }}>
						懂原理不解决问题，<span style={{ background: colors.yellow, padding: '0 10px' }}>会诊断</span>才解决问题
					</Title>
					<p style={{ fontSize: 18, color: '#555', fontWeight: 500, marginBottom: 26 }}>
						所以今天走一条诊断链，三段：
					</p>

					<div style={{ display: 'flex', gap: 16, alignItems: 'stretch', marginBottom: 24 }}>
						{STAGES.map((s, i) => (
							<motion.div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}
								initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.45, delay: 0.15 + i * 0.16 }}>
								<div style={{
									flex: 1, background: colors.white, border, boxShadow: shadow,
									padding: '20px 20px', display: 'flex', flexDirection: 'column', minHeight: 190,
								}}>
									<div style={{
										alignSelf: 'flex-start', fontFamily: fonts.mono, fontSize: 26, fontWeight: 700,
										background: s.color, color: colors.white, padding: '2px 14px', marginBottom: 14,
									}}>{s.n}</div>
									<div style={{ fontSize: 25, fontWeight: 900, marginBottom: 12 }}>{s.k}</div>
									<div style={{ fontSize: 16.5, color: '#555', lineHeight: 1.6 }}>{s.d}</div>
								</div>
								{i < STAGES.length - 1 && (
									<span style={{ fontSize: 28, fontWeight: 900, color: colors.red, flexShrink: 0 }}>→</span>
								)}
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 24px' }}
					>
						<div style={{ fontSize: 19, lineHeight: 1.6 }}>
							走完这三段，你对开头那个问题的答案就从「看它今天心情」变成 ——
							<span style={{ background: colors.yellow, color: colors.black, padding: '2px 10px', fontWeight: 800, marginLeft: 6 }}>
								我知道它会怎么坏，所以我提前把那个口堵上。
							</span>
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
