import { motion } from 'framer-motion';
import { Slide, Inner, Title, Divider, colors, fonts, border, shadow } from '../ui';

const plans = [
	{
		name: 'Self-paced', price: '$299', color: '#f5f5f5', textColor: colors.black,
		features: ['录播视频', 'Lab 互动实操', '作业 AI 自动评分', '社群访问'], badge: null,
	},
	{
		name: 'Cohort', price: '$799', color: colors.indigo, textColor: '#fff',
		features: ['以上全部 +', '每周直播授课', '每周直播答疑', '老师作业点评', 'Cohort 社区'], badge: '推荐',
	},
	{
		name: 'Premium', price: '$1,499', color: colors.dark, textColor: '#fff',
		features: ['以上全部 +', '1v1 Career Coaching', '毕业项目深度指导', 'Demo Day 优先展示', '求职推荐'], badge: 'VIP',
	},
];

export default function S11_Pricing() {
	return (
		<Slide bg="#f0f4ff">
			<Inner center>
				<Title size="clamp(30px,4vw,50px)">定价方案</Title>
				<Divider color={colors.indigo} center />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%', maxWidth: 1000, marginTop: 16 }}>
					{plans.map((p, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.15 }}
							style={{ border, background: p.color, boxShadow: shadow, overflow: 'hidden', position: 'relative', color: p.textColor }}
						>
							{p.badge && (
								<div style={{ position: 'absolute', top: 12, right: -30, background: colors.red, color: '#fff', padding: '4px 36px', fontSize: 12, fontWeight: 700, transform: 'rotate(45deg)', fontFamily: fonts.mono }}>{p.badge}</div>
							)}
							<div style={{ padding: '28px 24px', textAlign: 'center' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 800 }}>{p.name}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 48, fontWeight: 900, margin: '12px 0' }}>{p.price}</div>
								<div style={{ fontSize: 14, opacity: 0.7 }}>AUD / 8 周</div>
								<div style={{ width: 40, height: 3, background: p.textColor === '#fff' ? 'rgba(255,255,255,0.3)' : colors.indigo, margin: '16px auto' }} />
								<ul style={{ listStyle: 'none', textAlign: 'left', fontSize: 14, lineHeight: 2.2 }}>
									{p.features.map((f, j) => (
										<li key={j}><span style={{ color: p.textColor === '#fff' ? colors.yellow : colors.teal }}>✓ </span>{f}</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
				<div style={{ marginTop: 20, fontSize: 15, color: '#666' }}>
					早鸟优惠: Cohort <strong>$599</strong> | Premium <strong>$1,199</strong> (首期限定)
				</div>
			</Inner>
		</Slide>
	);
}
