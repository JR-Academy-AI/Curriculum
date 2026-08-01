import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const OUTPUTS = [
	['W2', 'Agent 调研'],
	['W3', '商业验证'],
	['W5', '品牌官网'],
	['W14', 'Pitch'],
];

export default function S11_WhatIsSOT() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 60px 30px' }}>
				<SlideHead
					tag="SoT · 第 2 步 / 6 · 定义"
					tagBg={colors.red}
					title="SoT = 这门生意当前唯一有效的共同说明"
					titleSize="clamp(30px, 2.7vw, 42px)"
					sub="Single Source of Truth。人用它讨论，AI 用它执行；新证据来了，就更新这一页并留下版本。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.55fr', gap: 24, alignItems: 'stretch' }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{[
							['不是商业计划书', '不写十页市场宏观分析；只写接下来 6 周能验证的假设。'],
							['不是一句口号', '“AI 帮中小企业提效”不能让同学复述，也不能让 Agent 开工。'],
							['不是永远不改', '可以改，但必须因为新证据，不是因为今天又想到一个新点子。'],
						].map(([head, body], index) => (
							<motion.div
								key={head}
								initial={{ opacity: 0, x: -18 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
								style={{ border, boxShadow: shadowSm, background: ['#FFE9E4', '#FFF6D6', '#EDE9FE'][index], padding: '15px 18px' }}
							>
								<div style={{ fontSize: 21, fontWeight: 900 }}>{head}</div>
								<div style={{ marginTop: 5, fontSize: 16, lineHeight: 1.45 }}>{body}</div>
							</motion.div>
						))}
					</div>

					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, fontWeight: 700, letterSpacing: 1.4 }}>
							ONE PAGE · 7 FIELDS
						</div>
						<div style={{ marginTop: 10, fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, lineHeight: 1.2 }}>
							谁有哪个值钱的问题 → 现在怎么解决 → AI 做哪一段 → 为什么是你 → 怎么收钱 → 6 周看什么证据 → 明确不做什么
						</div>
						<div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
							{OUTPUTS.map(([week, label], index) => (
								<motion.div
									key={week}
									initial={{ opacity: 0, y: 14 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.45 + index * 0.08 }}
									style={{ flex: 1, border: '2px solid #fff', padding: '10px 8px', textAlign: 'center' }}
								>
									<div style={{ fontFamily: fonts.mono, fontSize: 17, color: colors.yellow, fontWeight: 700 }}>{week}</div>
									<div style={{ marginTop: 4, fontSize: 15, fontWeight: 700 }}>{label}</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				<div style={{ marginTop: 18, border, boxShadow: shadow, background: colors.red, color: colors.white, padding: '14px 22px', fontSize: 22, fontWeight: 800 }}>
					最短定义：<u>当前版本的事实、假设、边界和验证标准都只认这一页。</u>
				</div>
			</Body>
		</Slide>
	);
}
