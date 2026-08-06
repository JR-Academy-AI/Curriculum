import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { TopoSubagent, TopoTeam } from '../TopoDiagram';

// P17 · 拍 9：同一份文件，两种结构 —— 两张拓扑图**到这里才第一次同屏**
// SoT：蓝图 §9.10 / §11.2
// 学员两种都亲历过了，对比才有基础。L7 是先给图再做，本节反过来。

export default function L8P17_SameFileTwoStructures() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 14 }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<Tag bg={colors.purple}>拍 9 · 看</Tag>
					<Title size="34px">
						同一份文件，<span style={{ background: colors.yellow, padding: '0 8px' }}>两种结构</span>
					</Title>
					<motion.div
						initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{
							marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10,
							border, boxShadow: '4px 4px 0 #000', background: colors.white, padding: '9px 16px',
						}}
					>
						<span style={{ fontSize: 17 }}>📄</span>
						<span style={{ fontSize: 15.5, fontWeight: 700, color: colors.dark }}>
							就是你们一小时前写的那三份 —— <span style={{ color: colors.red }}>一个字没改</span>
						</span>
					</motion.div>
				</div>

				<div style={{ display: 'flex', gap: 20, flex: 1 }}>
					<motion.div
						initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.25 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
					>
						<div style={{
							background: colors.blue, color: colors.white, padding: '9px 16px', borderBottom: border,
							display: 'flex', justifyContent: 'space-between', alignItems: 'center',
						}}>
							<span style={{ fontSize: 16, fontWeight: 800 }}>Subagent · Hub-and-spoke</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11.5, opacity: 0.9 }}>L7 · 拍 2 你跑过</span>
						</div>
						<div style={{ padding: '10px 12px', flex: 1 }}>
							<TopoSubagent height={252} />
						</div>
						<div style={{ borderTop: '2px dashed #ddd', padding: '10px 16px', fontSize: 14, color: '#555', lineHeight: 1.5 }}>
							分工 = <strong style={{ color: colors.dark }}>覆盖</strong>。冲突和缺口全部由你一个人处理。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.45 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
					>
						<div style={{
							background: colors.purple, color: colors.white, padding: '9px 16px', borderBottom: border,
							display: 'flex', justifyContent: 'space-between', alignItems: 'center',
						}}>
							<span style={{ fontSize: 16, fontWeight: 800 }}>Agent Team · 成员互通</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11.5, opacity: 0.9 }}>拍 3–8 你手动当了总线</span>
						</div>
						<div style={{ padding: '10px 12px', flex: 1 }}>
							<TopoTeam height={252} />
						</div>
						<div style={{ borderTop: '2px dashed #ddd', padding: '10px 16px', fontSize: 14, color: '#555', lineHeight: 1.5 }}>
							对抗 = <strong style={{ color: colors.dark }}>收敛</strong>。紫线那三条就是今天全部的价值。
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.85 }}
					style={{ display: 'flex', gap: 12 }}
				>
					<div style={{ flex: 1, padding: '11px 16px', border: `3px solid ${colors.red}`, background: '#fff2f2', fontSize: 14.5, color: '#444', lineHeight: 1.5 }}>
						🚨 <strong style={{ color: colors.red }}>开完立刻验成员名单</strong>：多于一个成员 = team 成型；只有你自己 = 工具给了你三个 subagent。
					</div>
					<div style={{ flex: 1, padding: '11px 16px', border: `3px solid ${colors.dark}`, background: colors.white, fontSize: 14.5, color: '#444', lineHeight: 1.5 }}>
						❓ 当场问自己一句：<strong style={{ color: colors.dark }}>「你怎么知道你现在跑的是 Team 不是三个 Subagent？」</strong>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
