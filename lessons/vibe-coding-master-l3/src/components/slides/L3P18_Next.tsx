import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadow } from '../ui';

// 下节预告：Brownfield 老项目改造
export default function L3P18_Next() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ textAlign: 'center', maxWidth: 1050 }}>
					<Tag bg={colors.orange}>下节预告</Tag>
					<Title size="60px" style={{ marginTop: 18, lineHeight: 1.15 }}>
						老项目改造 <span style={{ background: colors.dark, color: colors.white, padding: '0 16px' }}>Brownfield</span>
					</Title>
					<motion.p
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
						style={{ fontSize: 23, color: '#444', marginTop: 26, lineHeight: 1.7 }}>
						今天是白纸上立法（greenfield）。<br />
						下节课：一个几万行、没文档、原作者跑路的老项目，<br />
						怎么让 AI <b>先读懂、再安全地改</b> —— 那是工作里 99% 的场景。
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
						style={{ display: 'inline-block', marginTop: 32, background: colors.white, border, boxShadow: shadow, padding: '16px 30px', fontSize: 20, fontWeight: 700 }}>
						课后作业：把今天的四个 Lab 在自己项目上完整跑一遍
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
