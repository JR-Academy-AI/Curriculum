import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
// P16 · 拍 8：⬜ Lead 验收清单（课堂填）+ 「全绿但不可验收」反例
// SoT：蓝图 §6.7 / §9.9
// 空白页 4 / 4。

const ASKS = [
	'根因结论追溯得到 文件:行号 / 命令输出吗？',
	'另外两个假设的排除，有反证，还是只写了「没查到」？',
	'验收判据是不是全部真的执行过？',
	'成员没检查的范围，标出来了吗？',
];

const GREEN_BOARD = [
	{ task: '查前端 save 调用链', st: 'completed' },
	{ task: '查后端存储路径', st: 'completed' },
	{ task: '查生产配置', st: 'completed' },
];

const BUT = [
	'根因结论没有行号',
	'排除项只写「没查到」',
	'验收命令一条没跑过',
];

export default function L8P16_LeadSignoff() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 30 }}>
				<div style={{ flex: '0 0 47%' }}>
					<div style={{ display: 'flex', gap: 8, marginBottom: 10, alignItems: 'center' }}>
						<Tag bg={colors.green}>拍 8 · 动手</Tag>
						<Tag bg={colors.dark}>3 分钟</Tag>
					</div>
					<Title size="34px" style={{ marginBottom: 12, lineHeight: 1.25 }}>
						Lead 的<span style={{ background: colors.yellow, padding: '0 8px' }}>四个追问</span>
					</Title>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
						{ASKS.map((a, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.33, delay: 0.15 + i * 0.11 }}
								style={{ display: 'flex', gap: 12, alignItems: 'center', border, boxShadow: '4px 4px 0 #000', background: colors.white, padding: '11px 14px' }}
							>
								<span style={{
									flexShrink: 0, width: 24, height: 24, background: colors.dark, color: colors.white,
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
								}}>{i + 1}</span>
								<span style={{ fontSize: 15, color: colors.dark, fontWeight: 600, lineHeight: 1.45 }}>{a}</span>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.7 }}
						style={{ marginTop: 16, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '15px 18px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.3, color: colors.yellow, fontWeight: 700, marginBottom: 8 }}>
							这一拍的动作
						</div>
						<div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.6 }}>
							拿你的根因结论，去找<span style={{ background: colors.yellow, color: colors.black, padding: '0 7px' }}>一条成员自述之外的</span>证据。
						</div>
						<div style={{ fontSize: 13.5, opacity: 0.75, marginTop: 9, lineHeight: 1.55 }}>
							这题上通常是：翻到 <code style={{ fontFamily: fonts.mono }}>backend/src/handlers/history.ts</code> 里
							<code style={{ fontFamily: fonts.mono }}> memStore</code> 那一行，写下文件:行号。
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						反例 · 任务板全绿但不可验收
					</div>

					<motion.div
						initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 14 }}
					>
						<div style={{ background: colors.green, color: colors.white, padding: '8px 14px', borderBottom: border, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1 }}>
							task-board.md · 全绿 ✓
						</div>
						{GREEN_BOARD.map((r, i) => (
							<div key={r.task} style={{
								display: 'flex', justifyContent: 'space-between', alignItems: 'center',
								padding: '10px 15px', borderBottom: i < 2 ? '1px solid #eee' : undefined,
								fontSize: 14.5, color: colors.dark,
							}}>
								<span>{r.task}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, fontWeight: 700 }}>✓ {r.st}</span>
							</div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.35, delay: 0.65 }}
						style={{ textAlign: 'center', fontFamily: fonts.mono, fontSize: 30, fontWeight: 700, color: colors.red, marginBottom: 10 }}
					>
						但是 ↓
					</motion.div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
						{BUT.map((b, i) => (
							<motion.div
								key={b}
								initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.8 + i * 0.12 }}
								style={{
									display: 'flex', gap: 10, alignItems: 'center',
									padding: '10px 14px', border: `2px solid ${colors.red}`, background: '#fff2f2',
									fontSize: 15, color: '#444', fontWeight: 600,
								}}
							>
								<span style={{ color: colors.red, fontWeight: 900 }}>✕</span> {b}
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 1.2 }}
						style={{
							marginTop: 18, border: `4px solid ${colors.black}`, boxShadow: '7px 7px 0 #000',
							background: colors.yellow, padding: '16px 20px', textAlign: 'center',
						}}
					>
						<div style={{ fontSize: 21, fontWeight: 900, color: colors.black, lineHeight: 1.45 }}>
							多 Agent 改变的是信息怎样流动，<br />
							<span style={{ background: colors.black, color: colors.yellow, padding: '0 10px' }}>不会转移最终验收责任</span>。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
