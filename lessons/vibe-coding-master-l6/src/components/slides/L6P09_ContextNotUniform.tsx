import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// context 不是均质的 —— 越早放进去的，影响力越低
export default function L6P09_ContextNotUniform() {
	const marks = [
		{ label: '第 1 分钟', text: '「我们项目不用那个写法」', opacity: 0.22 },
		{ label: '第 15 分钟', text: '你补的那句说明', opacity: 0.48 },
		{ label: '第 35 分钟', text: '刚才那个文件的内容', opacity: 0.78 },
		{ label: '上一秒', text: '它刚读到的那个报错', opacity: 1 },
	];

	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.blue}>context 的性质</Tag>
					<Title size="44px" style={{ marginTop: 14, marginBottom: 8 }}>
						它不是无限的 —— 而且更重要的是，<span style={{ background: colors.yellow, padding: '0 10px' }}>它不是均质的</span>
					</Title>
					<p style={{ fontSize: 18, color: '#555', fontWeight: 500, marginBottom: 26 }}>
						不是 context 里的东西都一样有分量。越长，早期放进去的东西影响力越低。
					</p>

					{/* 稀释可视化：越早的越淡 */}
					<div style={{ position: 'relative', marginBottom: 24 }}>
						<div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
							{marks.map((m, i) => (
								<motion.div
									key={m.label}
									initial={{ opacity: 0, y: 24 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.42, delay: 0.15 + i * 0.12 }}
									style={{ flex: 1 }}
								>
									<div style={{
										border, background: colors.white, padding: '14px 14px',
										boxShadow: `6px 6px 0px rgba(0,0,0,${0.15 + m.opacity * 0.85})`,
										opacity: 0.35 + m.opacity * 0.65,
										minHeight: 110, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
									}}>
										<div style={{
											fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.5, fontWeight: 700,
											color: colors.dark, marginBottom: 8,
										}}>{m.label}</div>
										<div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.45 }}>{m.text}</div>
									</div>
									<div style={{
										height: 8, marginTop: 8,
										background: colors.red, opacity: m.opacity,
									}} />
								</motion.div>
							))}
						</div>
						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
							style={{
								display: 'flex', justifyContent: 'space-between', marginTop: 10,
								fontFamily: fonts.mono, fontSize: 13, color: '#999', fontWeight: 700, letterSpacing: 1,
							}}
						>
							<span>← 声音变小了（还在，但被稀释）</span>
							<span>说话最响的（它这一轮真正在听的）→</span>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 22px' }}
					>
						<div style={{ fontSize: 18.5, lineHeight: 1.6 }}>
							注意 —— <strong>这不是说前面的东西被删了，是被</strong>
							<span style={{ background: colors.red, color: colors.white, padding: '2px 10px', fontWeight: 800 }}>稀释</span>
							<strong>了。</strong>
							<span style={{ color: '#777', marginLeft: 8 }}>它还在，但它说话的声音变小了。这个词记一下 —— 待会儿五条机制的第一条就是它。</span>
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
