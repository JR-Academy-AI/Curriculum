import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const LOCAL = [
	'只有你这台电脑能访问',
	'关掉终端 / 重启就没了',
	'没有人替你验证代码好坏',
	'没有版本历史，改坏了回不去',
];
const DELIVERY = [
	'一个公开 URL，谁都能打开',
	'每次提交自动跑验证',
	'坏代码进不了主分支',
	'每个版本有记录，可回滚',
];

// 本地能跑 ≠ 交付
export default function L4P02_LocalIsNotDelivery() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.red}>今天要解决的问题</Tag>
					<Title size="52px" style={{ marginTop: 14, marginBottom: 28 }}>
						<code style={{ fontFamily: fonts.mono }}>localhost:5173</code> 能跑，<span style={{ color: colors.red }}>不等于</span>你交付了产品
					</Title>
					<div style={{ display: 'flex', gap: 28 }}>
						<Half>
							<motion.div {...slideFromLeft}
								style={{ background: colors.white, border, boxShadow: shadow, padding: '24px 26px' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
									<span style={{ fontSize: 26 }}>💻</span>
									<span style={{ fontWeight: 900, fontSize: 24 }}>本地能跑</span>
								</div>
								<ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
									{LOCAL.map((t) => (
										<li key={t} style={{ display: 'flex', gap: 10, fontSize: 18.5, color: '#333' }}>
											<span style={{ color: colors.red, fontWeight: 900 }}>✕</span>{t}
										</li>
									))}
								</ul>
							</motion.div>
						</Half>
						<Half>
							<motion.div {...slideFromRight}
								style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '24px 26px' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
									<span style={{ fontSize: 26 }}>🚀</span>
									<span style={{ fontWeight: 900, fontSize: 24, color: colors.yellow }}>可持续交付</span>
								</div>
								<ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
									{DELIVERY.map((t) => (
										<li key={t} style={{ display: 'flex', gap: 10, fontSize: 18.5 }}>
											<span style={{ color: colors.green, fontWeight: 900 }}>✓</span>{t}
										</li>
									))}
								</ul>
							</motion.div>
						</Half>
					</div>
					<motion.p
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
						style={{ marginTop: 24, fontSize: 19, fontWeight: 600, textAlign: 'center' }}>
						今天这两个多小时，把左边那台孤零零的电脑接成右边这条链路 —— 而且产品有两层：<span style={{ background: colors.yellow, padding: '0 8px' }}>前端</span>让人看得见，<span style={{ background: colors.dark, color: colors.white, padding: '0 8px' }}>后端</span>替你算、替你记住登录过的人。
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
