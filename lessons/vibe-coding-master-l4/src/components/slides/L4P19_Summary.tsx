import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const TAKEAWAYS = [
	'Scaffold first —— 前端 + 后端骨架先跑通，再做一个核心 Flow，绝不「一句话做完」',
	'GitHub monorepo 是 SoT，CI 守门；两个红灯实验（CI + CORS）证明它拦得住、也能通',
	'Actions 发前端 Pages，Vercel 发后端 API，中间靠 API_BASE + CORS 一根线连起来',
	'完成 = 端到端对照 PRD 验收（前端真调到后端），不是「URL 能打开」',
];

const HOMEWORK = [
	'找一个真实问题（前端展示 / 后端算错都行）',
	'写成 PRD v1.1 的一条变更',
	'新分支让 Agent 改 → Actions 验证（后端用 Vercel Preview 验）',
	'验收通过 → merge 到 main',
	'交：Pages URL + Vercel URL + PR + Actions 绿灯 + 前端调通后端截图',
];

// 收尾：从文档到交付系统 + 作业
export default function L4P19_Summary() {
	return (
		<Slide bg={colors.dark}>
			<Inner split>
				<Half style={{ flex: '0 0 640px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.yellow} color={colors.black}>本节小结</Tag>
						<Title white size="46px" style={{ marginTop: 14, marginBottom: 22, lineHeight: 1.14 }}>
							从三份文档，<br />到一套<span style={{ color: colors.yellow }}>交付系统</span>
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
							{TAKEAWAYS.map((t, i) => (
								<motion.div key={i}
									initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }}
									style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 15, color: colors.yellow, flexShrink: 0, marginTop: 2 }}>0{i + 1}</span>
									<span style={{ fontSize: 17.5, color: colors.white, lineHeight: 1.45 }}>{t}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '24px 26px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
							<span style={{ fontSize: 26 }}>📝</span>
							<span style={{ fontWeight: 900, fontSize: 23 }}>作业 · 一个变更闭环</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
							{HOMEWORK.map((h, i) => (
								<motion.div key={i}
									initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
									style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 14, background: colors.dark, color: colors.yellow, width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
									<span style={{ fontSize: 16.5, lineHeight: 1.4 }}>{h}</span>
								</motion.div>
							))}
						</div>
						<div style={{ marginTop: 18, paddingTop: 14, borderTop: '2px dashed #ddd', fontSize: 14.5, color: '#888', fontFamily: fonts.mono }}>
							第五节 · Skills：把你反复对 Agent 说的套路，固化成一句话就能调用的能力
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
