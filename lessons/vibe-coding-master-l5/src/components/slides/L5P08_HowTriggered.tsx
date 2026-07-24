import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const PATHS = [
	{ n: 'A', t: '描述匹配，自动触发', d: 'Agent 读你的任务，跟每个 Skill 的 description 对一遍，匹配上就自动调出来', bg: colors.green, ex: '「帮我做一套小红书海报」→ 自动匹配 xhs-poster' },
	{ n: 'B', t: '显式 /name 调用', d: '你明确知道要用哪个，直接喊它的名字，跳过匹配这一步', bg: colors.blue, ex: '「/talk-deck ai-topic」→ 直接调用 talk-deck' },
];

// Skill 怎么被调用
export default function L5P08_HowTriggered() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.dark}>调用方式</Tag>
					<Title size="46px" style={{ marginTop: 14, marginBottom: 30 }}>
						Skill 怎么被<span style={{ background: colors.yellow, padding: '0 10px' }}>调用</span>
					</Title>
					<div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
						{PATHS.map((p, i) => (
							<motion.div key={p.n}
								initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.2 }}
								style={{ width: 460, background: colors.white, border, boxShadow: shadowSm, padding: '24px 24px', textAlign: 'left' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 22, width: 42, height: 42, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: p.bg, color: colors.black, border: `2px solid ${colors.black}` }}>{p.n}</span>
									<span style={{ fontWeight: 900, fontSize: 20 }}>{p.t}</span>
								</div>
								<div style={{ fontSize: 16, color: '#444', lineHeight: 1.55, marginBottom: 12 }}>{p.d}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 13.5, background: colors.dark, color: colors.white, padding: '8px 12px' }}>{p.ex}</div>
							</motion.div>
						))}
					</div>
					<motion.p
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
						style={{ marginTop: 26, fontSize: 17, color: '#666', fontWeight: 600 }}>
						两条路都行——路径 A 靠好的 description，路径 B 靠你记得住名字。
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
