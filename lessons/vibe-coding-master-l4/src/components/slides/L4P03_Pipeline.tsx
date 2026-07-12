import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

function Node({ label, sub, bg, dark, delay }: { label: string; sub?: string; bg: string; dark?: boolean; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, type: 'spring', stiffness: 200, damping: 16 }}
			style={{ background: bg, color: dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '14px 18px', textAlign: 'center', minWidth: 150 }}>
			<div style={{ fontWeight: 900, fontSize: 20, fontFamily: fonts.mono }}>{label}</div>
			{sub && <div style={{ fontSize: 13, marginTop: 3, opacity: 0.85 }}>{sub}</div>}
		</motion.div>
	);
}
function Arrow({ delay, dir = '→' }: { delay: number; dir?: string }) {
	return (
		<motion.span
			initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}
			style={{ fontSize: 30, fontWeight: 900, color: colors.red, margin: '0 4px' }}>{dir}</motion.span>
	);
}

// 今日交付流水线全景
export default function L4P03_Pipeline() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.dark}>今日交付地图</Tag>
					<Title size="46px" style={{ marginTop: 14, marginBottom: 40 }}>
						一条链路，把三份文档变成两个线上版本
					</Title>

					{/* 上游：输入 → scaffold → github → actions */}
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
						<Node label="INPUT" sub="PRD · CLAUDE.md · tokens.css" bg={colors.yellow} delay={0.15} />
						<Arrow delay={0.3} />
						<Node label="SCAFFOLD" sub="可运行框架" bg={colors.blue} dark delay={0.4} />
						<Arrow delay={0.5} />
						<Node label="GitHub" sub="项目 SoT · repo" bg={colors.white} delay={0.6} />
						<Arrow delay={0.7} />
						<Node label="Actions" sub="CI + 构建" bg={colors.purple} dark delay={0.8} />
					</div>

					{/* 分叉 */}
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
						style={{ display: 'flex', justifyContent: 'center', gap: 140, margin: '10px 0 6px', fontSize: 30, fontWeight: 900, color: colors.red }}>
						<span>↙</span><span>↘</span>
					</motion.div>

					{/* 下游：pages / vercel */}
					<div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: 40 }}>
						<Node label="GitHub Pages" sub="静态 Production URL" bg={colors.green} delay={1.05} />
						<Node label="Vercel" sub="Preview + Production URL" bg={colors.orange} dark delay={1.15} />
					</div>

					<motion.p
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }}
						style={{ marginTop: 34, fontSize: 18, color: '#555', fontWeight: 600 }}>
						<span style={{ background: colors.purple, color: colors.white, padding: '2px 10px' }}>Actions</span> 管 CI + Pages，
						<span style={{ background: colors.orange, color: colors.white, padding: '2px 10px', marginLeft: 6 }}>Vercel</span> 用官方 Git 集成 —— 两边不重复干同一件事。
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
