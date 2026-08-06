import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P13 · 拍 7：他们一致同意的那个结论 —— 先把它讲得可信
// SoT：蓝图 §9.8
// ⚠️ 不要说它错。先说三句实话，让它显得更可信，然后才补唱反调成员。

const TRUTHS = [
	'时间线是真的。',
	'「冷启动会清空内存」这个机制也是真的。',
	'按这个结论去修，你会去研究部署流程、加持久化、改 Vercel 配置 —— 三个方向，全错。',
];

export default function L8P13_TheAgreedAnswer() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 34 }}>
				<div style={{ flex: '0 0 48%' }}>
					<Tag bg={colors.orange}>拍 7 · 收答案</Tag>
					<Title size="34px" style={{ margin: '12px 0 12px', lineHeight: 1.25 }}>
						大部分组交上来的是<br />
						<span style={{ background: colors.yellow, padding: '0 8px' }}>同一个结论</span>
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.15 }}
						style={{ border: `3px solid ${colors.black}`, boxShadow: shadow, background: colors.white }}
					>
						<div style={{
							background: colors.dark, color: colors.white, padding: '9px 15px',
							borderBottom: border, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1,
							display: 'flex', justifyContent: 'space-between',
						}}>
							<span>全组一致结论</span>
							<span style={{ color: colors.green }}>✓ 三人同意</span>
						</div>
						<div style={{ padding: '18px 20px' }}>
							<div style={{ fontSize: 24, fontWeight: 900, color: colors.dark, lineHeight: 1.4, marginBottom: 12 }}>
								根因：部署 / 实例回收<br />导致数据丢失
							</div>
							<div style={{ fontSize: 14.5, color: '#666', lineHeight: 1.6, borderTop: '2px dashed #ddd', paddingTop: 12 }}>
								证据：每次记录消失前 30 秒内都有一次部署，<strong style={{ color: colors.dark }}>时间戳完全吻合</strong>。
							</div>
						</div>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, margin: '16px 0 8px' }}>
						先别说它错 · 三句实话
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
						{TRUTHS.map((t, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.33, delay: 0.5 + i * 0.13 }}
								style={{
									display: 'flex', gap: 10, alignItems: 'flex-start',
									padding: '10px 13px', background: colors.white,
									border: `2px solid ${i === 2 ? colors.red : '#ddd'}`,
								}}
							>
								<span style={{
									flexShrink: 0, fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
									color: i === 2 ? colors.red : colors.green,
								}}>{i === 2 ? '⚠' : '✓'}</span>
								<span style={{ fontSize: 14.5, color: '#444', lineHeight: 1.5, fontWeight: i === 2 ? 700 : 500 }}>{t}</span>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						现在补一个成员 · 只问它一个问题
					</div>

					<motion.div initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
						<PromptBox
							label="唱反调"
							accent={colors.red}
							text={'你的任务不是找根因，是找反例。\n\n现在有一个结论：「部署 / 实例回收导致记录丢失」，\n证据是每次记录消失前 30 秒内都有一次部署，时间戳吻合。\n\n去《线上现象报告》里找：有没有「没有部署，但记录也丢了」的时候？\n或者「有部署，但记录没丢」的时候？\n\n找到就给出具体时间戳。找不到就明确说找不到，不要替这个结论辩护。'}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.75 }}
						style={{ marginTop: 14, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '15px 18px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.3, color: colors.yellow, fontWeight: 700, marginBottom: 8 }}>
							这条 prompt 的技术核心
						</div>
						<div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.5 }}>
							「有没有<span style={{ color: colors.yellow }}>没有 X 但 Y 也发生了</span>的时候」
						</div>
						<div style={{ fontSize: 14.5, opacity: 0.82, marginTop: 8, lineHeight: 1.6 }}>
							把「证伪」变成一个<strong>可检索的动作</strong>。
							「批判性思考」不可执行，「找一条 X 不成立但 Y 成立的记录」可执行。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ marginTop: 12, padding: '10px 14px', border: `2px solid ${colors.orange}`, background: '#fff8e5', fontSize: 13.5, color: '#444', lineHeight: 1.55 }}
					>
						最后半句「<strong>找不到就明确说找不到</strong>」不能省 ——
						不给出口，唱反调的会<strong style={{ color: colors.red }}>硬编一个反例出来</strong>，那比虚假共识更糟。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
