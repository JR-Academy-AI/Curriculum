import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

function Stage({ label, sub, size, bg, dark, delay }: { label: string; sub: string; size: string; bg: string; dark?: boolean; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, type: 'spring', stiffness: 200, damping: 16 }}
			style={{ background: bg, color: dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '14px 16px', textAlign: 'center', minWidth: 220 }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, opacity: 0.7, marginBottom: 4 }}>{size}</div>
			<div style={{ fontWeight: 900, fontSize: 17, marginBottom: 4 }}>{label}</div>
			<div style={{ fontSize: 12.5, lineHeight: 1.4, opacity: 0.9 }}>{sub}</div>
		</motion.div>
	);
}
function Arrow({ delay, text }: { delay: number; text: string }) {
	return (
		<motion.div
			initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 6px', color: colors.red, fontWeight: 900 }}>
			<span style={{ fontSize: 26 }}>→</span>
			<span style={{ fontFamily: fonts.mono, fontSize: 10.5, color: '#888', maxWidth: 90, textAlign: 'center', lineHeight: 1.3 }}>{text}</span>
		</motion.div>
	);
}

const BENEFITS = [
	['可复用', colors.blue],
	['一致性不漂', colors.purple],
	['高效（渐进式披露）', colors.green],
	['团队共享', colors.orange],
	['可版本管理', colors.yellow],
] as const;

// 原理：渐进式披露 + Skill 的好处
export default function L5P06b_ProgressiveDisclosure() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.dark}>原理 · 渐进式披露</Tag>
					<Title size="40px" style={{ marginTop: 14, marginBottom: 8 }}>
						装 100 个 Skill，<span style={{ background: colors.yellow, padding: '0 10px' }}>Agent 也不会被撑爆</span>
					</Title>
					<p style={{ fontSize: 17.5, color: '#555', fontWeight: 500, marginBottom: 26, maxWidth: 950, marginLeft: 'auto', marginRight: 'auto' }}>
						Skill 不是一装上就全部塞进 context——它分三层，只在真正用得上的时候才加载：
					</p>

					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
						<Stage label="常驻" sub="每个 Skill 只留 name + description" size="轻量 · 一直在" bg={colors.white} delay={0.15} />
						<Arrow delay={0.4} text="匹配上任务" />
						<Stage label="触发时" sub="读完整 SKILL.md 正文" size="中等 · 只读匹配到的这一个" bg={colors.blue} dark delay={0.55} />
						<Arrow delay={0.8} text="正文引用到" />
						<Stage label="按需" sub="模板 / 脚本 / 参考资料" size="按需 · 真走到那步才读" bg={colors.dark} dark delay={0.95} />
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
						style={{ marginTop: 22, fontSize: 15.5, color: '#666', fontWeight: 600 }}>
						对比 CLAUDE.md / rules：那是每次<strong>全量加载</strong>，不管用不用得上；Skill 是<strong>「用得上才加载」</strong>——这也是为什么 Skill 库能一直攒下去，不会拖慢 Agent。
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
						style={{ marginTop: 20, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
						{BENEFITS.map(([b, c]) => (
							<span key={b} style={{ fontFamily: fonts.mono, fontSize: 13.5, fontWeight: 700, padding: '6px 14px', background: c, color: (c === colors.yellow) ? colors.black : colors.white, border: '2px solid #000' }}>
								{b}
							</span>
						))}
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
