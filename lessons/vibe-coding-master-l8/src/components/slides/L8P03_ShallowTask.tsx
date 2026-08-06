import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P04 · 拍 2：三路边界 + 浅题题面
// SoT：蓝图 §9.3 / §19.2
// ⚠️「它看不到什么」这一列老师心里有数，**这一页先不投**（在 P05 之后才揭）。

const ROUTES = [
	{ k: 'A', name: 'frontend', scope: 'frontend/src/', color: colors.blue },
	{ k: 'B', name: 'backend', scope: 'backend/src/ · backend/api/', color: colors.green },
	{ k: 'C', name: 'config', scope: '.env.example · vercel.json · workflows/ · schema.sql', color: colors.orange },
];

const RULES = [
	'全程只读，谁都不许改文件。',
	'三路各自独立 —— 不要把 A 的结果喂给 B。',
	'三路都用同一个产出格式，不然没法比对。',
];

export default function L8P03_ShallowTask() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 34 }}>
				<div style={{ flex: '0 0 52%' }}>
					<div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
						<Tag bg={colors.green}>拍 2 · 动手</Tag>
						<Tag bg={colors.dark}>浅题</Tag>
						<Tag bg={colors.red}>全程只读</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 12 }}>
						三路并跑，<span style={{ background: colors.yellow, padding: '0 8px' }}>互不喂结果</span>
					</Title>

					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
						<PromptBox
							label="统一题面"
							accent={colors.dark}
							text={'用户报告：用同一个邮箱登录，之前保存的星宿记录有时候看不到了。\n不是报错，就是列表空的。重新登录一次有时又出来了。\n\n三路只读调查，各自回答：你这一侧，有没有任何东西会影响\n「这条记录属于谁」这个判断？'}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
						style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}
					>
						{RULES.map((r, i) => (
							<div key={i} style={{ display: 'flex', gap: 9, fontSize: 14.5, color: '#444', lineHeight: 1.5 }}>
								<span style={{
									flexShrink: 0, width: 19, height: 19, background: i === 1 ? colors.red : colors.dark,
									color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
								}}>{i + 1}</span>
								<span style={i === 1 ? { fontWeight: 800, color: colors.dark } : undefined}>{r}</span>
							</div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
						style={{ marginTop: 12, padding: '9px 13px', background: '#fff2f2', border: `2px solid ${colors.red}`, fontSize: 13.5, color: '#444', lineHeight: 1.5 }}
					>
						第 2 条是<strong style={{ color: colors.red }}>今天的实验变量</strong> —— 先把 L7 的结构跑忠实了，等一下才有对照。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						三路只读边界 · 只改三处
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
						{ROUTES.map((r, i) => (
							<motion.div
								key={r.k}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.34, delay: 0.3 + i * 0.12 }}
								style={{ display: 'flex', border, boxShadow: '4px 4px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 46px', background: r.color, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 20, fontWeight: 700,
								}}>{r.k}</div>
								<div style={{ flex: 1, padding: '10px 14px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.dark }}>
										sm-investigator-<span style={{ color: r.color }}>{r.name}</span>
									</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#777', marginTop: 3, wordBreak: 'break-all' }}>
										{r.scope}
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.75 }}
						style={{ marginTop: 16, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '15px 18px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.3, color: colors.yellow, fontWeight: 700, marginBottom: 7 }}>
							三个队友的差别只有几行
						</div>
						<div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.4 }}>
							角色不是人格，<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>是边界</span>。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ marginTop: 14, padding: '10px 14px', border: '2px dashed #ccc', fontSize: 13.5, color: '#666', lineHeight: 1.55 }}
					>
						产出格式沿用你角色文件里那份：<code style={{ fontFamily: fonts.mono }}>findings / checked / not_checked</code>，
						每条结论带 <code style={{ fontFamily: fonts.mono }}>文件:行号</code>。
						<strong style={{ color: colors.dark }}>行号等一下要用来粘贴。</strong>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
