import { motion } from 'framer-motion';
import { Slide, Inner, Title, Divider, colors, fonts, border, shadow } from '../ui';

const days = [
	{ day: '周一', label: '直播课', icon: '🎥', color: colors.indigo, desc: '老师 Live Demo\n1.5-2 小时', who: '老师' },
	{ day: '周二', label: '自学 + Lab', icon: '🔬', color: '#e0e7ff', desc: 'Prompt Lab\n互动实操练习', who: 'AI 辅助', textDark: true },
	{ day: '周三', label: '自学 + Lab', icon: '📝', color: '#e0e7ff', desc: '图文课程内容\n课后练习', who: 'AI 辅助', textDark: true },
	{ day: '周四', label: '自学 + Lab', icon: '💻', color: '#e0e7ff', desc: '完成作业\n准备提交', who: 'AI 辅助', textDark: true },
	{ day: '周五', label: '直播答疑', icon: '💬', color: colors.teal, desc: '老师 1 小时\n集中答疑', who: '老师' },
	{ day: '周末', label: '作业提交', icon: '📋', color: colors.orange, desc: 'AI 自动评分\n老师抽查点评', who: 'AI + 老师' },
];

export default function S09_WeeklyFlow() {
	return (
		<Slide bg={colors.white}>
			<Inner center>
				<Title size="clamp(28px,3.5vw,44px)">每周学习节奏</Title>
				<Divider center />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, width: '100%', maxWidth: 1200, marginTop: 16 }}>
					{days.map((d, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							style={{ border, background: d.color, boxShadow: shadow, overflow: 'hidden', position: 'relative' }}
						>
							<div style={{ padding: '16px 14px', textAlign: 'center', color: d.textDark ? colors.black : '#fff', minHeight: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, opacity: 0.7 }}>{d.day}</div>
								<div style={{ fontSize: 36, margin: '8px 0' }}>{d.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{d.label}</div>
								<div style={{ fontSize: 13, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{d.desc}</div>
							</div>
							<div style={{ padding: '8px', textAlign: 'center', background: 'rgba(0,0,0,0.1)', fontSize: 12, fontWeight: 700, fontFamily: fonts.mono }}>
								{d.who}
							</div>
						</motion.div>
					))}
				</div>
				<div style={{ marginTop: 24, fontSize: 16, color: '#666', maxWidth: 700 }}>
					<strong>老师时间花在刀刃上</strong> — 直播教真实经验，AI 处理重复性评分和检查
				</div>
			</Inner>
		</Slide>
	);
}
