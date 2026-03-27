import { motion } from 'framer-motion';
import { Slide, Inner, Title, Divider, colors, fonts, border, shadow } from '../ui';

const steps = [
	{ icon: '🔍', title: '发现', desc: '/learn/ai-engineer\n免费章节体验', color: '#e0e7ff' },
	{ icon: '📝', title: '注册', desc: '解锁免费章节\n动手写第一个 RAG', color: '#c7d2fe' },
	{ icon: '💳', title: '报名', desc: 'Bootcamp\n选择付费方案', color: colors.indigo },
	{ icon: '📚', title: '学习 12 周', desc: '直播 + Lab + 项目\n老师 + AI 双重辅导', color: colors.teal },
	{ icon: '🎓', title: '毕业', desc: 'Demo Day + 证书\n7 个项目作品集', color: colors.green },
	{ icon: '🚀', title: '求职', desc: 'AI Engineer\n求职推荐 + 社群', color: colors.yellow },
];

export default function S12_Journey() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<Title size="clamp(28px,3.5vw,44px)">用户旅程</Title>
				<Divider center />
				<div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', maxWidth: 1200, marginTop: 20 }}>
					{steps.map((s, i) => (
						<motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.12 }} style={{ flex: 1, position: 'relative' }}>
							<div style={{
								border, background: s.color, boxShadow: shadow, padding: '20px 14px',
								textAlign: 'center', minHeight: 160,
								display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
								color: (s.color === colors.indigo || s.color === colors.teal) ? '#fff' : colors.black,
							}}>
								<div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{s.title}</div>
								<div style={{ fontSize: 12, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{s.desc}</div>
							</div>
							{i < steps.length - 1 && (
								<div style={{ position: 'absolute', right: -14, top: '50%', transform: 'translateY(-50%)', fontSize: 20, fontWeight: 900, color: colors.red, zIndex: 2 }}>→</div>
							)}
						</motion.div>
					))}
				</div>
				<div style={{ marginTop: 28, display: 'flex', gap: 20, fontSize: 14 }}>
					<div style={{ border, background: '#fff', boxShadow: shadow, padding: '10px 18px' }}>
						<strong>免费引流</strong>: /learn/ai-engineer (免费章节)
					</div>
					<div style={{ border, background: '#fff', boxShadow: shadow, padding: '10px 18px' }}>
						<strong>付费 Bootcamp</strong>: /program-course/ai-engineer-bootcamp
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
