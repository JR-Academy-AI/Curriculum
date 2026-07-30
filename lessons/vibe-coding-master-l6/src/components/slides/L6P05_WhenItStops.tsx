import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const STOPS = [
	{
		k: '它认为不用再调工具了',
		d: '也就是它觉得 —— 我做完了。',
		hero: true,
	},
	{ k: '撞到上限', d: '跑不下去了，被截断。', hero: false },
	{ k: '你打断它', d: '这一条是今天下半场的重点。', hero: false },
];

// 它什么时候停 —— 点破「它认为」
export default function L6P05_WhenItStops() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.orange}>停止条件</Tag>
					<Title size="46px" style={{ marginTop: 14, marginBottom: 20 }}>
						那它什么时候<span style={{ background: colors.yellow, padding: '0 10px' }}>停</span>？
					</Title>

					<div style={{ display: 'flex', gap: 18, marginBottom: 24 }}>
						{STOPS.map((s, i) => (
							<motion.div
								key={s.k}
								initial={{ opacity: 0, y: 22 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.42, delay: 0.12 + i * 0.12 }}
								style={{
									flex: s.hero ? 1.3 : 1,
									background: s.hero ? colors.white : '#faf6f2',
									border, boxShadow: s.hero ? shadow : shadowSm,
									padding: '18px 20px',
									display: 'flex', flexDirection: 'column',
								}}
							>
								<div style={{
									display: 'inline-block', alignSelf: 'flex-start',
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 2,
									background: s.hero ? colors.red : colors.dark, color: colors.white,
									padding: '5px 12px', marginBottom: 12,
								}}>0{i + 1}</div>
								<div style={{ fontSize: s.hero ? 22 : 20, fontWeight: 900, marginBottom: 8, lineHeight: 1.35 }}>
									{s.hero ? (
										<>
											<span style={{ background: colors.yellow, padding: '1px 8px' }}>它认为</span>
											<br />不用再调工具了
										</>
									) : s.k}
								</div>
								<div style={{ fontSize: 16, color: '#555', lineHeight: 1.55 }}>{s.d}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.62 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 24px' }}
					>
						<div style={{ fontSize: 19, lineHeight: 1.65 }}>
							请把重点放在<strong style={{ color: colors.yellow }}>「它认为」</strong>这三个字上。
							它认为完成了，它就停 —— <strong>它认为的对不对，是另一回事。</strong>
							<span style={{ color: 'rgba(255,255,255,0.6)', marginLeft: 8 }}>今天最后那条铁律，就是从这三个字来的。</span>
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
