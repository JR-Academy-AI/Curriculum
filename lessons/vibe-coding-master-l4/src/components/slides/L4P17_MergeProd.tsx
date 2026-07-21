import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const CHAIN = [
	{ t: 'Preview 验收通过', d: '在 PR 的独立 URL 上确认改动对了', bg: colors.yellow, dark: false },
	{ t: 'Merge 到 main', d: '点 Merge，分支合入主线', bg: colors.blue, dark: true },
	{ t: 'Actions 发前端', d: 'main 触发 deploy-pages，Pages 更新', bg: colors.green, dark: false },
	{ t: 'Vercel 发后端', d: 'Vercel 检测到 main，后端 API 重部署', bg: colors.orange, dark: true },
];

// 阶段 G：Merge → Production
export default function L4P17_MergeProd() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.green} color={colors.black}>Merge → Production</Tag>
					<Title size="48px" style={{ marginTop: 14, marginBottom: 12 }}>
						合并那一刻，前端后端两条腿一起更新
					</Title>
					<p style={{ fontSize: 20, color: '#555', fontWeight: 500, marginBottom: 34 }}>
						你不用手动碰任何一个 —— <code style={{ fontFamily: fonts.mono }}>main</code> 一动，Pages 重发、Vercel 重部署。
					</p>
					<div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
						{CHAIN.map((c, i) => (
							<span key={c.t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
								<motion.div
									initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.18 }}
									style={{ background: c.dark ? colors.dark : colors.white, color: c.dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '16px 16px', width: 210, textAlign: 'left' }}>
									<div style={{ display: 'inline-block', background: c.bg, color: c.bg === colors.blue || c.bg === colors.orange ? colors.white : colors.black, fontWeight: 800, fontSize: 15, padding: '2px 10px', border: `2px solid #000`, marginBottom: 10 }}>{c.t}</div>
									<div style={{ fontSize: 14.5, lineHeight: 1.45, opacity: c.dark ? 0.9 : 1 }}>{c.d}</div>
								</motion.div>
								{i < CHAIN.length - 1 && <span style={{ color: colors.red, fontWeight: 900, fontSize: 24 }}>→</span>}
							</span>
						))}
					</div>
					<motion.p
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
						style={{ marginTop: 34, fontSize: 18.5, fontWeight: 700 }}>
						到这里，你的 PRD 已经变成了 <span style={{ background: colors.green, padding: '2px 10px' }}>一条自动交付流水线</span>。
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
