import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const DUTY = [
	{ who: 'GitHub Actions', icon: '⚙️', bg: colors.purple, does: '跑 CI（前后端一起验）+ 把前端发布到 GitHub Pages' },
	{ who: 'Vercel', icon: '▲', bg: colors.orange, does: '部署后端 API + 每个 PR 一个 Preview' },
];

const PITS = [
	{ k: 'VITE_API_BASE', icon: '🔌', bg: colors.blue, t: '前端得知道后端住哪', d: '本地是 localhost、上线是 vercel.app —— 地址别写死，用环境变量切。' },
	{ k: 'CORS', icon: '🚧', bg: colors.red, t: '跨域默认被浏览器拦', d: 'github.io 调 vercel.app 是跨域，后端得表态「我放行」。待会儿故意撞一次。' },
];

// 分工 + 两个待会儿的坑（预防针）
export default function L4P03b_SplitMap() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.dark}>各管一条腿</Tag>
					<Title size="46px" style={{ marginTop: 14, marginBottom: 6 }}>
						谁管哪条腿，先说清楚
					</Title>
					<p style={{ fontSize: 19, color: '#555', fontWeight: 500, marginBottom: 20 }}>
						不是「Pages 还是 Vercel 二选一」—— 是一人管前端、一人管后端。
					</p>

					<div style={{ display: 'flex', gap: 20, marginBottom: 22 }}>
						{DUTY.map((d, i) => (
							<motion.div key={d.who}
								initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
								style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16 }}>
								<span style={{ fontSize: 30 }}>{d.icon}</span>
								<div>
									<div style={{ display: 'inline-block', background: d.bg, color: colors.white, fontWeight: 900, fontSize: 18, padding: '2px 12px', border: `2px solid #000`, marginBottom: 8 }}>{d.who}</div>
									<div style={{ fontSize: 16.5, color: '#333', lineHeight: 1.45 }}>{d.does}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
						style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#888', marginBottom: 12, letterSpacing: 1 }}>
						⚠ 分离架构一定会撞的两个坑 —— 先打预防针，撞上就不慌
					</motion.div>
					<div style={{ display: 'flex', gap: 20 }}>
						{PITS.map((p, i) => (
							<motion.div key={p.k}
								initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 + i * 0.15 }}
								style={{ flex: 1, background: colors.dark, color: colors.white, border, boxShadow: shadowSm, padding: '16px 20px' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
									<span style={{ fontSize: 22 }}>{p.icon}</span>
									<code style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 15, background: p.bg, color: colors.white, padding: '2px 10px' }}>{p.k}</code>
									<span style={{ fontWeight: 800, fontSize: 16 }}>{p.t}</span>
								</div>
								<div style={{ fontSize: 15.5, color: '#c9cfe0', lineHeight: 1.5 }}>{p.d}</div>
							</motion.div>
						))}
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
