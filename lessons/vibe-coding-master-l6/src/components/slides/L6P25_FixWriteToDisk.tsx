import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const WHAT_TO_WRITE = [
	'项目规矩 / 代码规范（→ CLAUDE.md）',
	'产品的真相（→ PRD）',
	'视觉的真相（→ tokens.css）',
	'反复讲的套路（→ SKILL.md）',
	'这次的决定 + 为什么这么决定',
];

// 处方：落盘 + 一次一件事（治机制①②）
export default function L6P25_FixWriteToDisk() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 540px' }}>
					<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
							<Tag bg={colors.green}>③ 处方</Tag>
							<Tag bg={colors.blue}>治 ① 稀释</Tag>
							<Tag bg={colors.purple}>治 ② 压缩</Tag>
						</div>
						<Title size="42px" style={{ marginBottom: 18, lineHeight: 1.22 }}>
							<span style={{ background: colors.yellow, padding: '0 10px' }}>落盘</span>
						</Title>

						<div style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '20px 22px', marginBottom: 16 }}>
							<div style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.5, marginBottom: 10 }}>
								context 会被稀释、会被压缩 ——
								<br /><span style={{ background: colors.yellow, color: colors.black, padding: '2px 10px' }}>文件不会。</span>
							</div>
							<div style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>
								你在对话里说一次，四十分钟后它的声音就变小了。
								你写进文件，它每次读都是原样。
							</div>
						</div>

						<div style={{ background: colors.white, border, boxShadow: shadowSm, padding: '15px 18px' }}>
							<div style={{ fontSize: 16.5, lineHeight: 1.65 }}>
								<strong>这就是前五节所有 SoT 在做的事</strong> ——
								你以前照着做，现在你知道它治的是哪两条病。
							</div>
						</div>
					</motion.div>
				</Half>

				<Half>
					<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.22 }}>
						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px', marginBottom: 16 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.5, color: '#999', fontWeight: 700, marginBottom: 13 }}>
								什么该落盘
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
								{WHAT_TO_WRITE.map((w, i) => (
									<motion.div
										key={w}
										initial={{ opacity: 0, y: 12 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.4 + i * 0.09 }}
										style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}
									>
										<span style={{ color: colors.green, fontWeight: 900, fontSize: 15, flexShrink: 0 }}>✓</span>
										<span style={{ fontSize: 16.5, lineHeight: 1.5 }}>{w}</span>
									</motion.div>
								))}
							</div>
							<div style={{
								marginTop: 14, paddingTop: 12, borderTop: '2px dashed #ddd',
								fontSize: 15.5, color: '#777', lineHeight: 1.55,
							}}>
								最后那条最容易漏 —— 压缩保住的是「做了什么」，
								<strong style={{ color: colors.dark }}>丢掉的正是「为什么」</strong>。
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
							style={{ background: colors.purple, color: colors.white, border, boxShadow: shadow, padding: '16px 20px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.5, color: colors.yellow, fontWeight: 700, marginBottom: 8 }}>
								配套动作
							</div>
							<div style={{ fontSize: 20, fontWeight: 900, marginBottom: 7 }}>一次一件事</div>
							<div style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
								别把五件事塞进一个会话 —— 塞得越多，压缩来得越早，
								你开头说的话被稀释得越快。
							</div>
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
