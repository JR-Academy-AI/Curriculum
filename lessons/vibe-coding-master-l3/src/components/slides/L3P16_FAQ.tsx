import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadow } from '../ui';

const QA = [
	{
		q: '我没有设计师，token 的值从哪来？',
		a: '直接抄一套成熟的：neo-brutalism、Material、shadcn 都有现成 token。挑一套固定下来 —— 先求统一，再谈好看。',
		punch: '统一本身就是 80% 的「专业感」',
	},
	{
		q: '项目做到一半才想起来要 token，来得及吗？',
		a: '来得及，但越早越省事。先把 token 文件和设计宪法补上，再让 AI 逐页把写死的 hex 换成变量。',
		punch: '这就是下一节 brownfield「安全改造」的预演',
	},
];

// 常见问题
export default function L3P16_FAQ() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.dark}>FAQ</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 28 }}>
					课堂上一定有人问的两件事
				</Title>
				<div style={{ display: 'flex', gap: 24 }}>
					{QA.map((item, i) => (
						<motion.div key={item.q}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 + i * 0.25 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '26px 30px' }}>
							<div style={{ fontWeight: 800, fontSize: 23, marginBottom: 14, lineHeight: 1.35 }}>Q: {item.q}</div>
							<p style={{ fontSize: 19, lineHeight: 1.7, color: '#444', margin: '0 0 16px' }}>{item.a}</p>
							<div style={{ display: 'inline-block', background: colors.yellow, border: `2px solid ${colors.black}`, padding: '6px 16px', fontWeight: 800, fontSize: 17 }}>
								{item.punch}
							</div>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
