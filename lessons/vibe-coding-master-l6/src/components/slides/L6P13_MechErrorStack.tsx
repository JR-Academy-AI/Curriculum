import { motion } from 'framer-motion';
import { MechPage } from '../MechPage';
import { colors, fonts, border, shadowSm } from '../ui';

const STEPS = [
	{ n: 1, t: '读了配置，判断入口在这里', bad: false },
	{ n: 2, t: '找到相关模块', bad: false },
	{ n: 3, t: '推断：这个字段是没人用的', bad: true },
	{ n: 4, t: '于是删掉它', bad: false },
	{ n: 5, t: '顺着改了三个引用它的地方', bad: false },
	{ n: 6, t: '…后面二十步全在这条线上', bad: false },
];

// 机制③：错误累积
export default function L6P13_MechErrorStack() {
	return (
		<MechPage
			index={3}
			accent={colors.orange}
			title={<>错误<span style={{ background: colors.yellow, padding: '0 8px' }}>累积</span></>}
			mechanism={
				<>
					第三步它得出了一个错结论，这个错结论进了 context。
					后面二十步，全建立在它上面 —— 而且每一步都是从上一步「正确地」推出来的。
				</>
			}
			symptom="一路都很自信，但整个方向是错的"
			footer={<>这条最难当场看出来 —— 只有你从外面看整体，才发现根子歪了。</>}
			visual={
				<div style={{ background: colors.white, border, boxShadow: shadowSm, padding: '22px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 2, fontWeight: 700, color: '#999', marginBottom: 16 }}>
						它的推理链
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
						{STEPS.map((s, i) => (
							<motion.div
								key={s.n}
								initial={{ opacity: 0, x: 24 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.35 + i * 0.1 }}
							>
								<div style={{
									display: 'flex', alignItems: 'center', gap: 12,
									background: s.bad ? colors.red : '#f7f3f0',
									color: s.bad ? colors.white : colors.black,
									border: `2px solid ${colors.black}`,
									padding: '10px 14px',
								}}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, flexShrink: 0,
										background: s.bad ? colors.white : colors.dark,
										color: s.bad ? colors.red : colors.white,
										width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center',
									}}>{s.n}</span>
									<span style={{ fontSize: 15.5, fontWeight: s.bad ? 800 : 500, minWidth: 0 }}>{s.t}</span>
									{s.bad && (
										<span style={{
											marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700,
											background: colors.white, color: colors.red, padding: '3px 8px', flexShrink: 0,
										}}>错了</span>
									)}
								</div>
								{i < STEPS.length - 1 && (
									<div style={{
										width: 2, height: 10, background: s.bad || i >= 2 ? colors.red : '#ccc', marginLeft: 26,
									}} />
								)}
							</motion.div>
						))}
					</div>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ marginTop: 14, fontSize: 14.5, color: colors.red, fontWeight: 700, textAlign: 'center' }}
					>
						红线以下的每一步，本身都没错 —— 它们只是站在一个错的地基上
					</motion.div>
				</div>
			}
		/>
	);
}
