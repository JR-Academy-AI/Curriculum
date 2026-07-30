import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const PARTS = [
	{ k: '模型', d: '会判断、会写', color: colors.blue },
	{ k: '工具', d: '能读文件、能跑命令、能改代码', color: colors.purple },
	{ k: '循环', d: '看到结果，再决定下一步', color: colors.red },
];

// Agent = 模型 + 工具 + 循环
export default function L6P03_WhatIsAgent() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.dark}>一句话定义</Tag>
					<Title size="50px" style={{ marginTop: 14, marginBottom: 20 }}>
						Agent = 模型 + 工具 + <span style={{ background: colors.yellow, padding: '0 10px' }}>循环</span>
					</Title>

					<div style={{ display: 'flex', gap: 18, marginBottom: 26 }}>
						{PARTS.map((p, i) => (
							<motion.div
								key={p.k}
								initial={{ opacity: 0, y: 22 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.42, delay: 0.12 + i * 0.12 }}
								style={{ flex: 1, background: colors.white, border, boxShadow: shadowSm, padding: '18px 20px' }}
							>
								<div style={{
									display: 'inline-block', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
									letterSpacing: 2, background: p.color, color: colors.white, padding: '5px 12px', marginBottom: 12,
								}}>0{i + 1}</div>
								<div style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>{p.k}</div>
								<div style={{ fontSize: 16.5, color: '#555', lineHeight: 1.55 }}>{p.d}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						style={{ display: 'flex', gap: 20 }}
					>
						<div style={{ flex: 1, background: colors.white, border, boxShadow: shadowSm, padding: '16px 20px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 2, color: '#999', fontWeight: 700, marginBottom: 8 }}>
								你以前用的那种
							</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginBottom: 6 }}>补全</div>
							<div style={{ fontSize: 16, color: '#555', lineHeight: 1.55 }}>
								问题进去，答案出来，结束。
							</div>
						</div>
						<div style={{ display: 'flex', alignItems: 'center', fontSize: 30, fontWeight: 900, color: colors.red }}>≠</div>
						<div style={{ flex: 1.35, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 20px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 2, color: colors.yellow, fontWeight: 700, marginBottom: 8 }}>
								Agent 不一样的地方
							</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginBottom: 6 }}>它能自己决定下一步做什么</div>
							<div style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55 }}>
								读哪个文件、跑哪个命令、改哪一行 —— 它决定，它执行，它看结果，再决定。
							</div>
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
