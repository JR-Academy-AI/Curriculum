import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// Workshop Lab ④：压力测试 —— 故意让 AI 做深色 hero
export default function L3P15_Lab4() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.green} color={colors.black}>WORKSHOP · LAB ④ / ④ · ~8 min</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 24 }}>
					压力测试：故意让它<span style={{ background: colors.dark, color: colors.white, padding: '0 12px' }}>做深色 hero</span>
				</Title>
				<div style={{ display: 'flex', gap: 24 }}>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
						style={{ flex: 1.2, background: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 14 }}>任务</div>
						<ol style={{ fontSize: 19, lineHeight: 1.9, paddingLeft: 24, margin: 0 }}>
							<li>指令：「做一个深色的 hero 区」—— 你的 token 里<b>没定过</b>深色底方案</li>
							<li>观察：它会不会自己编一个新蓝色 / 新阴影？</li>
							<li>会 → 回 CLAUDE.md 补规则，<b>让它重做</b>，而不是手改这一页</li>
						</ol>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
						style={{ flex: 1, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 14, color: colors.yellow }}>体会</div>
						<p style={{ fontSize: 19, lineHeight: 1.75, margin: 0 }}>
							<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', fontWeight: 800 }}>修宪法 &gt; 改单个页面</span><br /><br />
							宪法每补严一条，AI 以后<b>所有页面</b>都不会再犯。
							这就是给 AI 建 SoT 的复利。
						</p>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
