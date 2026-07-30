import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const ROWS = [
	{ saw: '越到后面越不守规矩', mech: '① 稀释', check: '那条规矩最后一次出现在多久之前', color: colors.blue },
	{ saw: '后半段风格断层 / 重踩已解决的坑', mech: '② 压缩', check: '中间有没有发生过压缩 / 总结', color: colors.purple },
	{ saw: '每步都有道理，但整体方向错', mech: '③ 累积', check: '往前找第一个「应该 / 大概」在哪一步', color: colors.orange },
	{ saw: 'diff 比预期大很多', mech: '④ 漂移', check: '回看你的指令有没有「顺便 / 一并 / 该修的都修」', color: colors.green },
	{ saw: '总结全绿，自己跑全红', mech: '⑤ 幻觉', check: '它说的那个验证，输出在哪', color: colors.red },
];

// ② 怎么定位 —— 症状 → 机制反查表（学员带走的一页）
export default function L6P17_LookupTable() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
						<Tag bg={colors.orange}>② 怎么定位</Tag>
						<Tag bg={colors.red}>带走这一页</Tag>
					</div>
					<Title size="42px" style={{ marginBottom: 6 }}>
						症状 → 机制 <span style={{ background: colors.yellow, padding: '0 10px' }}>反查表</span>
					</Title>
					<p style={{ fontSize: 17.5, color: '#555', fontWeight: 500, marginBottom: 18 }}>
						工作的时候贴在屏幕边上。从左边那一列开始 —— 你看到什么，就查什么。
					</p>

					{/* 表头 */}
					<div style={{ display: 'flex', background: colors.dark, color: colors.white, border, borderBottom: 'none' }}>
						<div style={{ flex: '1.15', padding: '11px 16px', fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 1.5, fontWeight: 700 }}>
							你看到的
						</div>
						<div style={{ flex: '0 0 140px', padding: '11px 14px', fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 1.5, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)' }}>
							大概是哪条
						</div>
						<div style={{ flex: '1.25', padding: '11px 16px', fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 1.5, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.yellow }}>
							先查什么（30 秒内）
						</div>
					</div>

					{/* 表体 */}
					<div style={{ border, boxShadow: shadow, background: colors.white }}>
						{ROWS.map((r, i) => (
							<motion.div
								key={r.mech}
								initial={{ opacity: 0, x: -22 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.12 + i * 0.1 }}
								style={{
									display: 'flex', alignItems: 'stretch',
									borderBottom: i < ROWS.length - 1 ? '2px solid #eee' : 'none',
									background: r.mech === '⑤ 幻觉' ? '#fdf6f6' : colors.white,
								}}
							>
								<div style={{ flex: '1.15', padding: '13px 16px', fontSize: 17, fontWeight: 700, display: 'flex', alignItems: 'center' }}>
									{r.saw}
								</div>
								<div style={{
									flex: '0 0 140px', padding: '13px 14px', borderLeft: '2px solid #eee',
									display: 'flex', alignItems: 'center',
								}}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
										background: r.color, color: colors.white, padding: '4px 10px',
									}}>{r.mech}</span>
								</div>
								<div style={{
									flex: '1.25', padding: '13px 16px', borderLeft: '2px solid #eee',
									fontSize: 16, color: '#444', lineHeight: 1.5, display: 'flex', alignItems: 'center',
								}}>
									{r.check}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
