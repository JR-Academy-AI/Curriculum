import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, Stagger, StaggerItem, colors, fonts, border, shadow, shadowSm } from '../ui';

const CHECKS = [
	{ k: 'PRD', t: '写清核心用户和核心 Flow' },
	{ k: 'MVP', t: '明确只做 1 个核心动作' },
	{ k: '结构', t: 'Pages / Components / Data 至少有初步描述' },
	{ k: '验收', t: '有可以人工判断的验收标准' },
	{ k: 'tokens', t: 'tokens.css 定义了颜色 / 字体 / 间距 / 组件变量' },
];

// 阶段 A：输入包检查
export default function L4P04_InputCheck() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.blue}>阶段 A · 输入检查</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 8 }}>
					生成前，先检查输入包
				</Title>
				<p style={{ fontSize: 20, color: '#555', fontWeight: 500, marginBottom: 24 }}>
					Agent 生成质量 = 输入质量。这五项过关，才让它动手 scaffold。
				</p>
				<div style={{ display: 'flex', gap: 26 }}>
					<div style={{ flex: 1.3 }}>
						<Stagger style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
							{CHECKS.map((c) => (
								<StaggerItem key={c.k}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 14, background: colors.white, border, boxShadow: shadowSm, padding: '13px 18px' }}>
										<span style={{ fontSize: 22, color: colors.green, fontWeight: 900 }}>☑</span>
										<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 15, background: colors.dark, color: colors.white, padding: '3px 10px', minWidth: 78, textAlign: 'center' }}>{c.k}</span>
										<span style={{ fontSize: 18, fontWeight: 500 }}>{c.t}</span>
									</div>
								</StaggerItem>
							))}
						</Stagger>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
						style={{ flex: 1, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '24px 26px', alignSelf: 'flex-start' }}>
						<div style={{ fontWeight: 900, fontSize: 21, color: colors.yellow, marginBottom: 14 }}>你的 PRD 从哪来？</div>
						<p style={{ fontSize: 18.5, lineHeight: 1.75, margin: 0 }}>
							上节课大家已经交了自己的 <span style={{ background: colors.blue, padding: '1px 8px', margin: '0 2px' }}>PRD</span> —— 直接拿来用。
							<br /><br />
							万一你的 PRD 还没过关，用老师准备的<span style={{ background: colors.red, padding: '1px 8px', margin: '0 2px' }}>兜底 PRD</span>。课堂<span style={{ color: colors.yellow }}>不再</span>花 20 分钟从零重写需求 —— 今天的主题是交付。
						</p>
					</motion.div>
				</div>
				</div>
			</Inner>
		</Slide>
	);
}
