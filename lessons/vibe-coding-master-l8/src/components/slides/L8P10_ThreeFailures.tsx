import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P10 · 拍 4 讲：传证据不传结论 + 三个失败模式
// SoT：蓝图 §9.5
// 深题之前必须先见过这三个失败模式 —— 见过才认得出自己正在犯。

const FAILURES = [
	{
		name: '退化成分工',
		freq: '最常见',
		symptom: '三个人各写各的，一条 CONFLICT 都没有',
		color: colors.red,
	},
	{
		name: '虚假共识',
		freq: '最阴险',
		symptom: '都同意了，但都错。「达成一致」不是外部判据',
		color: colors.orange,
	},
	{
		name: 'Lead 抢活',
		freq: '最隐蔽',
		symptom: 'Lead 自己下场做，没人裁决，辩论根本没发生',
		color: colors.purple,
	},
];

export default function L8P10_ThreeFailures() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 32 }}>
				<div style={{ flex: '0 0 50%' }}>
					<Tag bg={colors.blue}>拍 4 · 讲</Tag>
					<Title size="36px" style={{ margin: '12px 0 14px', lineHeight: 1.25 }}>
						为什么我要求你<span style={{ background: colors.yellow, padding: '0 8px' }}>原样贴</span>？
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.15 }}
						style={{ display: 'flex', gap: 14, marginBottom: 16 }}
					>
						<div style={{ flex: 1, border, boxShadow: shadow, background: '#fff2f2' }}>
							<div style={{ background: colors.red, color: colors.white, padding: '8px 13px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
								✕ 传结论
							</div>
							<div style={{ padding: '13px 15px', fontSize: 14.5, lineHeight: 1.6, color: '#444' }}>
								你总结过了，掺进去的是<strong>你的判断</strong>。
								<br /><br />
								它翻转的是<strong style={{ color: colors.red }}>「同意你」</strong>，
								不是「发现矛盾」。
							</div>
						</div>
						<div style={{ flex: 1, border, boxShadow: shadow, background: '#f0fff4' }}>
							<div style={{ background: colors.green, color: colors.white, padding: '8px 13px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
								✓ 传证据
							</div>
							<div style={{ padding: '13px 15px', fontSize: 14.5, lineHeight: 1.6, color: '#444' }}>
								带 <code style={{ fontFamily: fonts.mono }}>文件:行号</code>，它<strong>可以自己去核对</strong>。
								<br /><br />
								它翻转是因为<strong style={{ color: colors.green }}>自己算出来了</strong>。
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						style={{
							border: `3px solid ${colors.black}`, boxShadow: shadow, background: colors.dark,
							color: colors.white, padding: '16px 20px',
						}}
					>
						<div style={{ fontSize: 21, fontWeight: 900, lineHeight: 1.5 }}>
							成员之间<span style={{ color: colors.red }}>传结论会互相污染</span>，<br />
							<span style={{ color: colors.green }}>传证据才会互相证伪</span>。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
						style={{ marginTop: 14, padding: '10px 14px', border: '2px dashed #ccc', fontSize: 13.5, color: '#666', lineHeight: 1.55 }}
					>
						⚠️ 顺带一个产品事实：<strong style={{ color: colors.dark }}>没有广播。</strong>
						你刚才手动传一次是一次；工具里也是一条一条点名发。
						所以下一页那张表必须写死「什么证据抄送谁」。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						深题之前先认脸 · 三个失败模式
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{FAILURES.map((f, i) => (
							<motion.div
								key={f.name}
								initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.35 + i * 0.14 }}
								style={{ border, boxShadow: shadow, background: colors.white }}
							>
								<div style={{
									display: 'flex', justifyContent: 'space-between', alignItems: 'center',
									background: f.color, color: colors.white, padding: '9px 15px', borderBottom: border,
								}}>
									<span style={{ fontSize: 19, fontWeight: 900 }}>{f.name}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1, opacity: 0.9 }}>{f.freq}</span>
								</div>
								<div style={{ padding: '12px 15px', fontSize: 15, color: '#444', lineHeight: 1.55 }}>
									{f.symptom}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
						style={{
							marginTop: 16, textAlign: 'center', fontSize: 16.5, fontWeight: 700,
							color: colors.dark, padding: '12px 16px', background: colors.yellow,
							border, boxShadow: shadow,
						}}
					>
						接下来 30 分钟，你会亲手犯上面至少一个。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
