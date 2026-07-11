import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadow } from '../ui';

// 根因：问题不在 AI 笨，在你没给它统一的视觉约束
export default function L3P03_RootCause() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ textAlign: 'center', maxWidth: 1200 }}>
					<Tag bg={colors.yellow} color={colors.black}>根因</Tag>
					<Title white size="54px" style={{ marginTop: 18, lineHeight: 1.25 }}>
						问题不在 AI 笨，<br />
						在它每次都在<span style={{ color: colors.red }}>「重新发明设计」</span>，<br />
						而不是<span style={{ color: colors.green }}>「复用你的设计」</span>
					</Title>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 44 }}>
						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 28px', width: 420, textAlign: 'left' }}>
							<div style={{ fontWeight: 800, fontSize: 20, color: colors.red, marginBottom: 8 }}>❌ 错误顺序</div>
							<div style={{ fontSize: 18, lineHeight: 1.6 }}>直接让 AI 写页面 → 每页现编配色 → 盖几层就返工重来</div>
						</div>
						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 28px', width: 420, textAlign: 'left' }}>
							<div style={{ fontWeight: 800, fontSize: 20, color: colors.green, marginBottom: 8 }}>✅ 正确顺序</div>
							<div style={{ fontSize: 18, lineHeight: 1.6 }}>先定 Design System → 再让 AI 在这套系统里生成页面</div>
						</div>
					</motion.div>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.9 }}
						style={{ marginTop: 36, fontSize: 22, color: '#aab', fontWeight: 600 }}>
						设计系统是 Vibe Coding 的地基 —— 地基没打就盖楼，盖几层就得拆
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
