import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const RUNS = [
	{
		tag: '那一次',
		accent: colors.green,
		time: '20 分钟',
		desc: '交出去，回来的东西你几乎没改，直接就用了。',
		mood: '「今天这个模型状态真好」',
	},
	{
		tag: '这一次',
		accent: colors.red,
		time: '40 分钟',
		desc: '同样认真地交，回来一堆你要全部重做的东西。',
		mood: '「今天它是不是傻了」',
	},
];

// 钩子：同一个人、同一个工具，为什么两次差这么远
export default function L6P01_WhyTwoRuns() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.red}>钩子</Tag>
					<Title size="46px" style={{ marginTop: 14, marginBottom: 8 }}>
						同一个项目、同一个工具、同一个你
					</Title>
					<p style={{ fontSize: 19, color: '#555', fontWeight: 500, marginBottom: 22 }}>
						结果却差这么远。<strong style={{ color: colors.dark }}>你能说清区别在哪吗？</strong>
					</p>

					<div style={{ display: 'flex', gap: 24, marginBottom: 22 }}>
						{RUNS.map((r, i) => (
							<motion.div
								key={r.tag}
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.45, delay: 0.15 + i * 0.15 }}
								style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '20px 22px' }}
							>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 2,
										background: r.accent, color: r.accent === colors.green ? colors.black : colors.white,
										padding: '5px 12px',
									}}>{r.tag}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 30, fontWeight: 700, color: r.accent }}>{r.time}</span>
								</div>
								<div style={{ fontSize: 17.5, lineHeight: 1.6, marginBottom: 14, minHeight: 56 }}>{r.desc}</div>
								<div style={{
									fontSize: 15.5, fontWeight: 700, color: '#777',
									borderTop: '2px dashed #ddd', paddingTop: 12,
								}}>{r.mood}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 24px' }}
					>
						<span style={{ fontSize: 19, lineHeight: 1.6 }}>
							「看它今天心情」这句话我们都说过。但请注意它的含义 —— 它等于承认了一件事：
							<span style={{ background: colors.yellow, color: colors.black, padding: '2px 10px', fontWeight: 800, marginLeft: 8 }}>
								你不知道你在指挥什么。
							</span>
						</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
