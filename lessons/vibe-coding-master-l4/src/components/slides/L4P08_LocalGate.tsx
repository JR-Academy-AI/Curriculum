import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const STEPS = [
	{ cmd: 'npm install', desc: '依赖装得上' },
	{ cmd: 'npm run typecheck', desc: 'TypeScript 没红线' },
	{ cmd: 'npm run build', desc: '能产出 dist/' },
];

// 阶段 C：Local Green Gate
export default function L4P08_LocalGate() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.green} color={colors.black}>阶段 C · 本地绿色基线</Tag>
					<Title size="52px" style={{ marginTop: 14, marginBottom: 12 }}>
						本地绿色基线：三条命令全过
					</Title>
					<p style={{ fontSize: 20, color: '#555', fontWeight: 500, marginBottom: 30 }}>
						推到云上之前，先在自己电脑上确认它是活的。任何一条红，先修，不要 push。
					</p>
					<div style={{ display: 'flex', gap: 22, justifyContent: 'center', marginBottom: 28 }}>
						{STEPS.map((s, i) => (
							<motion.div key={s.cmd}
								initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.18 }}
								style={{ flex: 1, maxWidth: 320, background: '#0c1020', border, boxShadow: shadow, padding: '22px 20px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 18, color: colors.green, marginBottom: 12 }}>
									<span style={{ color: '#6b7280' }}>$ </span>{s.cmd}
								</div>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
									<motion.span
										initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.18, type: 'spring', stiffness: 300 }}
										style={{ fontSize: 26, color: colors.green }}>✓</motion.span>
									<span style={{ color: '#d8dcea', fontSize: 16 }}>{s.desc}</span>
								</div>
							</motion.div>
						))}
					</div>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
						style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: colors.white, border, boxShadow: shadow, padding: '16px 26px' }}>
						<span style={{ fontSize: 24 }}>🎨</span>
						<span style={{ fontSize: 18.5, fontWeight: 700 }}>
							过关标准：三条全绿 <span style={{ color: colors.red }}>且</span> 页面已经引用第三节的 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>tokens.css</code>
						</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
