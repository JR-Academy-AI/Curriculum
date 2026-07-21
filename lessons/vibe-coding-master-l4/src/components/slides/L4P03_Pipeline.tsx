import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

function Node({ label, sub, bg, dark, delay, wide }: { label: string; sub?: string; bg: string; dark?: boolean; delay: number; wide?: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, type: 'spring', stiffness: 200, damping: 16 }}
			style={{ background: bg, color: dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '13px 18px', textAlign: 'center', minWidth: wide ? 210 : 150 }}>
			<div style={{ fontWeight: 900, fontSize: 19, fontFamily: fonts.mono }}>{label}</div>
			{sub && <div style={{ fontSize: 12.5, marginTop: 3, opacity: 0.85 }}>{sub}</div>}
		</motion.div>
	);
}
function Arrow({ delay, dir = '→' }: { delay: number; dir?: string }) {
	return (
		<motion.span
			initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}
			style={{ fontSize: 28, fontWeight: 900, color: colors.red, margin: '0 4px' }}>{dir}</motion.span>
	);
}

// 今日交付地图：前端 Pages ⇄ API ⇄ 后端 Vercel
export default function L4P03_Pipeline() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.dark}>今日交付地图</Tag>
					<Title size="42px" style={{ marginTop: 12, marginBottom: 30 }}>
						一条链路，把三份文档变成<span style={{ background: colors.yellow, padding: '0 8px' }}>前端 + 后端</span>两个线上版本
					</Title>

					{/* 上游：输入 → scaffold（前后端）→ github monorepo */}
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
						<Node label="INPUT" sub="PRD · CLAUDE.md · tokens.css" bg={colors.yellow} delay={0.15} />
						<Arrow delay={0.3} />
						<Node label="SCAFFOLD" sub="前端 src/ + 后端 api/" bg={colors.blue} dark delay={0.4} wide />
						<Arrow delay={0.5} />
						<Node label="GitHub" sub="monorepo · 项目 SoT" bg={colors.white} delay={0.6} />
					</div>

					{/* 分叉：一条腿走 Actions→Pages，一条腿走 Vercel→后端 */}
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
						style={{ display: 'flex', justifyContent: 'center', gap: 200, margin: '8px 0 6px', fontSize: 28, fontWeight: 900, color: colors.red }}>
						<span>↙</span><span>↘</span>
					</motion.div>

					{/* 下游：前端（Pages）  ⇄ API ⇄  后端（Vercel）*/}
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
						<Node label="Actions → Pages" sub="前端 · you.github.io/star-mansions/" bg={colors.green} delay={1.0} wide />
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}
							style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: colors.red, fontWeight: 900 }}>
							<span style={{ fontSize: 22 }}>⇄</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, background: colors.dark, color: colors.white, padding: '2px 8px', marginTop: 2 }}>API / fetch</span>
						</motion.div>
						<Node label="Vercel → 后端 API" sub="star-mansions-api.vercel.app" bg={colors.orange} dark delay={1.3} wide />
					</div>

					<motion.p
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
						style={{ marginTop: 30, fontSize: 17.5, color: '#555', fontWeight: 600 }}>
						两个不同域名，靠中间一根 HTTP 线连起来 —— 这根线上有两个坎：
						<span style={{ background: colors.blue, color: colors.white, padding: '2px 10px', margin: '0 4px' }}>VITE_API_BASE</span>
						和 <span style={{ background: colors.red, color: colors.white, padding: '2px 10px', marginLeft: 4 }}>CORS</span>，下一页说。
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
