import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P18 · 拍 9：它替你做了什么 / 没替你做什么
// SoT：蓝图 §6.10 / §9.10
// 结论定死在两句话上。顺带点 §18.4 两个例外（同一份文件当 teammate 跑时能力边界不一样）。

const DOES = [
	{ t: '传递', s: '证据自动飞到相关成员，不用你复制粘贴' },
	{ t: '认领', s: '成员自己从任务板取活，不用你派' },
	{ t: '状态同步', s: '待办 / 进行中 / 完成自动流转' },
];

const DOESNT = [
	{ t: '裁决', s: '哪条证据说了算，仍然是你拍板' },
	{ t: '外部验收', s: '行号、反证、跑过的命令，仍然是你的活' },
];

export default function L8P18_WhatItDoesForYou() {
	return (
		<Slide bg={colors.dark}>
			<Inner center style={{ gap: 20 }}>
				<Tag bg={colors.purple}>拍 9 · 对照</Tag>

				<div style={{ display: 'flex', gap: 20, width: '100%', maxWidth: 1280 }}>
					<motion.div
						initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.2 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.green, color: colors.black, padding: '10px 18px', borderBottom: border, fontSize: 19, fontWeight: 900 }}>
							✓ 它替你做了
						</div>
						<div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11 }}>
							{DOES.map((d, i) => (
								<motion.div
									key={d.t}
									initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.45 + i * 0.1 }}
									style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}
								>
									<span style={{ fontSize: 20, fontWeight: 900, color: colors.dark, minWidth: 96 }}>{d.t}</span>
									<span style={{ fontSize: 14.5, color: '#666', lineHeight: 1.5 }}>{d.s}</span>
								</motion.div>
							))}
						</div>
						<div style={{ borderTop: '2px dashed #ddd', padding: '11px 18px', fontSize: 14.5, color: colors.dark, background: '#f6fff6' }}>
							—— 就是你刚才<strong>手动干的那三件苦力</strong>。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.35 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 19, fontWeight: 900 }}>
							✕ 它没替你做
						</div>
						<div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11 }}>
							{DOESNT.map((d, i) => (
								<motion.div
									key={d.t}
									initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
									style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}
								>
									<span style={{ fontSize: 20, fontWeight: 900, color: colors.red, minWidth: 96 }}>{d.t}</span>
									<span style={{ fontSize: 14.5, color: '#666', lineHeight: 1.5 }}>{d.s}</span>
								</motion.div>
							))}
							<div style={{ height: 31 }} />
						</div>
						<div style={{ borderTop: '2px dashed #ddd', padding: '11px 18px', fontSize: 14.5, color: colors.dark, background: '#fff6f6' }}>
							—— 那两件事在 L7 是你的活，<strong>在 L8 还是你的活</strong>。
						</div>
					</motion.div>
				</div>

				{/* 同一份文件的两个例外 */}
				<motion.div
					initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.9 }}
					style={{
						width: '100%', maxWidth: 1280,
						border: `3px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.08)', padding: '15px 22px',
					}}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.6, color: colors.yellow, fontWeight: 700, marginBottom: 9 }}>
						同一份角色文件，当 teammate 跑时能力边界不一样
					</div>
					<div style={{ display: 'flex', gap: 26, color: colors.white }}>
						<div style={{ flex: 1, fontSize: 15, lineHeight: 1.6 }}>
							<span style={{ color: colors.red, fontWeight: 900 }}>✕</span>{' '}
							定义里的 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>skills</code> 和{' '}
							<code style={{ fontFamily: fonts.mono, color: colors.yellow }}>mcpServers</code> 两个字段 <strong>不生效</strong>
						</div>
						<div style={{ flex: 1, fontSize: 15, lineHeight: 1.6 }}>
							<span style={{ color: colors.green, fontWeight: 900 }}>✓</span>{' '}
							团队协作工具（发消息、任务管理）<strong>始终可用</strong>，哪怕 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>tools</code> 把别的都限制死了
						</div>
					</div>
					<div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 14.5, color: 'rgba(255,255,255,0.8)' }}>
						所以「<strong style={{ color: colors.white }}>不假设继承</strong>」这条铁律，在 Team 结构里还要<strong style={{ color: colors.yellow }}>再做一次 capability check</strong>。
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25 }}
					style={{ fontSize: 15.5, color: 'rgba(255,255,255,0.6)', textAlign: 'center', lineHeight: 1.6 }}
				>
					没有这个功能的同学：<strong style={{ color: colors.white }}>你今天前 8 拍做的就是它的手动版</strong>。
					判断框架一模一样，只是传递那一步是你自己动的手。
				</motion.div>
			</Inner>
		</Slide>
	);
}
