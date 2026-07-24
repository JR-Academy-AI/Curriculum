import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const HOMEWORK = [
	'挑一件你本周重复做了 ≥3 次的活',
	'把它做成一个 Skill（一个 SKILL.md，description 写清何时用）',
	'真调用一次，完成一件真实任务',
	'用完改一次 SKILL.md（迭代），再调用一次',
	'提交：SKILL.md + 一次调用截图 + 一句话说明它省了你哪类重复劳动',
];

// 从指挥到沉淀：作业 + 下节预告
export default function L5P19_HomeworkAndNext() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 520px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.dark}>从指挥到沉淀</Tag>
						<Title size="38px" style={{ marginTop: 14, marginBottom: 18, lineHeight: 1.2 }}>
							这五节课，你的能力<br/>一直在<span style={{ background: colors.yellow, padding: '0 8px' }}>升级</span>
						</Title>
						<p style={{ fontSize: 16.5, color: '#555', lineHeight: 1.6, marginBottom: 16 }}>
							L1–L4 教你怎么把「人 / 产品 / 视觉 / 交付」写成 Agent 能懂的真相源；L5 教你把「反复讲的话」也变成一份真相源——Skill。
						</p>
						<div style={{ background: colors.dark, color: colors.white, padding: '14px 18px', fontSize: 15, lineHeight: 1.6 }}>
							<strong style={{ color: colors.yellow }}>下节预告 · 第六节</strong><br/>
							从静态到动态：给产品接上 <span style={{ fontFamily: fonts.mono }}>Auth</span> + <span style={{ fontFamily: fonts.mono }}>Database</span>，让它「能登录、能存、只看得到自己的」。
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '24px 26px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
							<span style={{ fontSize: 26 }}>📝</span>
							<span style={{ fontWeight: 900, fontSize: 23 }}>作业 · 一次完整闭环</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
							{HOMEWORK.map((h, i) => (
								<motion.div key={i}
									initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
									style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 14, background: colors.dark, color: colors.yellow, width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
									<span style={{ fontSize: 16, lineHeight: 1.4 }}>{h}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
