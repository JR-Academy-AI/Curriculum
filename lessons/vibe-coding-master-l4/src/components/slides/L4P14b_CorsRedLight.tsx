import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const STEPS = [
	{ n: '1', light: '🔴', t: '前端上 Pages 后点「测本命宿」', d: '大概率没反应 —— 别慌，坑按时来了', c: colors.red },
	{ n: '2', light: '🔴', t: '打开浏览器 console', d: '看到 blocked by CORS policy（红字）', c: colors.red },
	{ n: '3', light: '🟢', t: '让 Agent 给后端加 CORS 头', d: '允许你的 Pages 域名 + 处理 OPTIONS 预检 → Vercel 重部署', c: colors.green },
	{ n: '4', light: '🟢', t: '刷新前端再点', d: '通了，本命宿出来了', c: colors.green },
];

// 前端 G：CORS 红灯实验（第二个红灯 → 绿灯）
export default function L4P14b_CorsRedLight() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.red}>CORS 红灯实验 · 今晚第二个「红 → 绿」</Tag>
					<Title size="46px" style={{ marginTop: 14, marginBottom: 8 }}>
						前端点了没反应？故意撞一次 <span style={{ color: colors.red }}>CORS</span>
					</Title>
					<p style={{ fontSize: 18.5, color: '#555', fontWeight: 500, marginBottom: 16 }}>
						这不是你代码写错 —— 是浏览器的安全规矩。见过一次，以后就不慌。
					</p>

					<motion.pre
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
						style={{ background: '#0c1020', border, boxShadow: shadow, padding: '12px 18px', fontFamily: fonts.mono, fontSize: 13.5, lineHeight: 1.5, color: '#ff9b9b', margin: '0 0 18px', overflow: 'hidden' }}>
{`Access to fetch at 'https://…vercel.app/api/compute'
from origin 'https://you.github.io' has been blocked by CORS policy`}
					</motion.pre>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
						{STEPS.map((s, i) => (
							<motion.div key={s.n}
								initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + i * 0.14 }}
								style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 15px', display: 'flex', flexDirection: 'column', gap: 8 }}>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 17, width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: colors.dark, color: colors.white }}>{s.n}</span>
									<span style={{ fontSize: 22 }}>{s.light}</span>
								</div>
								<div style={{ fontWeight: 800, fontSize: 16.5, lineHeight: 1.25, minHeight: 62 }}>{s.t}</div>
								<div style={{ fontSize: 14, color: '#555', lineHeight: 1.45 }}>{s.d}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ marginTop: 18, background: colors.dark, color: colors.white, padding: '13px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
						<span style={{ fontSize: 22 }}>💡</span>
						<span style={{ fontSize: 17, fontWeight: 600 }}>
							<code style={{ fontFamily: fonts.mono, color: colors.yellow }}>github.io</code> ≠ <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>vercel.app</code>，浏览器默认拦跨域；让<strong>后端表态放行</strong>才通。前后端分离第一天几乎必踩。
						</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
