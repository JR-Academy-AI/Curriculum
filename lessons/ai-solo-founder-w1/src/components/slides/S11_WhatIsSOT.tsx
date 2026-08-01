import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

export default function S11_WhatIsSOT() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 60px 30px' }}>
				<SlideHead
					tag="SoT · 第 2 步 / 6 · 定义"
					tagBg={colors.red}
					title="Opportunity Card，就是这周的 SoT v0.1"
					titleSize="clamp(30px, 2.7vw, 42px)"
					sub="Single Source of Truth：客户、问题、现有做法、方案缺口、初步方案和验证动作，只保留一个当前版本。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.55fr', gap: 24, alignItems: 'stretch' }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{[
							['只写一页', '不写十页行业分析；先把这一周要验证的想法写清楚。'],
							['写具体，不写口号', '“帮助企业提效”太宽；要写谁遇到什么麻烦，你先帮他得到什么结果。'],
							['可以改，但别到处改', '客户给了新证据，就更新这一页；旧聊天和旧文档不再算当前版本。'],
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
							ONE PAGE · ONE CURRENT VERSION
						</div>
						<div style={{ marginTop: 10, fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, lineHeight: 1.2 }}>
							目标用户 → 问题场景 → 现有做法 → 方案缺口 → 初步方案 → 本周验证动作
						</div>
						<div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
							{[
								['你自己', '知道本周先做什么'],
								['同学', '听完能准确复述'],
								['AI', '知道能做与不能做'],
							].map(([who, label], index) => (
								<motion.div
									key={who}
									initial={{ opacity: 0, y: 14 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.45 + index * 0.08 }}
									style={{ flex: 1, border: '2px solid #fff', padding: '10px 8px', textAlign: 'center' }}
								>
									<div style={{ fontFamily: fonts.mono, fontSize: 17, color: colors.yellow, fontWeight: 700 }}>{who}</div>
									<div style={{ marginTop: 4, fontSize: 15, fontWeight: 700 }}>{label}</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				<div style={{ marginTop: 18, border, boxShadow: shadow, background: colors.red, color: colors.white, padding: '14px 22px', fontSize: 22, fontWeight: 800 }}>
					最短定义：<u>机会卡是起点；每拿到一批新证据，就更新它，而不是重新开一个版本。</u>
				</div>
			</Body>
		</Slide>
	);
}
