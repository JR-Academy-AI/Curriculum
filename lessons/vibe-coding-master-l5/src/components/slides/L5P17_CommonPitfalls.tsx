import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const PITFALLS = [
	{ h: '死活不触发', bg: colors.blue, dark: true, items: ['先查 description', '九成是没写清「何时用」', '补上 Use when …'] },
	{ h: '乱触发 / 抢戏', bg: colors.purple, dark: true, items: ['description 太泛', '收窄场景描述', '别写「帮忙做 XX」这种万能句'] },
	{ h: '一个 Skill 塞太多', bg: colors.orange, dark: true, items: ['拆成小而专的多个', '别做「万能 Skill」', '一个 Skill 只认一类事'] },
	{ h: '看不到 skills 目录', bg: colors.green, dark: false, items: ['用显式 /name 调用先跑通', '目录 / 权限问题课后排查', '不阻塞当场的调用体验'] },
];

// 常见坑
export default function L5P17_CommonPitfalls() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.red}>常见坑</Tag>
				<Title size="44px" style={{ marginTop: 14, marginBottom: 22 }}>
					翻车了？先看这四种
				</Title>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{PITFALLS.map((g, i) => (
						<motion.div key={g.h}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.13 }}
							style={{ background: g.dark ? colors.dark : colors.white, color: g.dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '18px 16px' }}>
							<div style={{ display: 'inline-block', background: g.bg, color: (g.bg === colors.green) ? colors.black : colors.white, fontWeight: 900, fontSize: 15, padding: '3px 12px', border: `2px solid #000`, marginBottom: 14 }}>{g.h}</div>
							<ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
								{g.items.map((it) => (
									<li key={it} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.4 }}>
										<span style={{ color: colors.yellow, fontWeight: 900, flexShrink: 0 }}>·</span>{it}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
				<motion.p
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 22, fontSize: 16.5, fontWeight: 600, textAlign: 'center', color: '#444', fontFamily: fonts.mono }}>
					九成的坑都出在 description ——先怀疑它，再怀疑步骤
				</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
