import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// Workshop Lab ③：AI 一次生成三个组件，检查 var()
export default function L3P14_Lab3() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.green} color={colors.black}>WORKSHOP · LAB ③ / ④ · ~12 min</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 24 }}>
					让 AI 一次生成<span style={{ background: colors.red, color: colors.white, padding: '0 12px' }}>三个组件</span>
				</Title>
				<div style={{ display: 'flex', gap: 24 }}>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
						style={{ flex: 1.2, background: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 14 }}>投屏指令</div>
						<pre style={{ background: '#0c1020', color: '#d8dcea', fontFamily: fonts.mono, fontSize: 15.5, lineHeight: 1.7, padding: '16px 20px', margin: 0, whiteSpace: 'pre-wrap' }}>
{`基于 tokens.css 和 CLAUDE.md 的设计铁律，
一次生成三个组件：
1. 一个价格卡
2. 一个主 CTA 按钮
3. 一个输入框
所有样式值必须引用 --* 变量。`}
						</pre>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
						style={{ flex: 1, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 14, color: colors.yellow }}>验收（逐个查）</div>
						<ul style={{ fontSize: 18.5, lineHeight: 1.9, paddingLeft: 22, margin: 0 }}>
							<li>三个组件都用了 <code style={{ fontFamily: fonts.mono, color: colors.green }}>var(--border)</code> / <code style={{ fontFamily: fonts.mono, color: colors.green }}>var(--shadow-md)</code>？</li>
							<li>有没有偷偷写死 hex？</li>
							<li>三个摆在一起，像不像「一家人」？</li>
						</ul>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
