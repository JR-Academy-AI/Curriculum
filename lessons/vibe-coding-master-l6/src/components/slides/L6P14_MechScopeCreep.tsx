import { motion } from 'framer-motion';
import { MechPage } from '../MechPage';
import { colors, fonts, border, shadowSm } from '../ui';

const EXTRA = ['顺手优化了另一个模块', '加了两个你没要的抽象', '补了三段用不到的错误处理', '重排了 import 顺序'];

// 机制④：目标漂移 / 范围膨胀
export default function L6P14_MechScopeCreep() {
	return (
		<MechPage
			index={4}
			accent={colors.green}
			title={<>目标漂移 · <span style={{ background: colors.yellow, padding: '0 8px' }}>范围膨胀</span></>}
			mechanism={
				<>
					你让它改 A，它顺手把 B 也优化了，还加了你没要的抽象、没要的错误处理。
					它不觉得自己越界 —— 它觉得自己很贴心。
				</>
			}
			symptom="diff 比你预期大三倍"
			footer={<>想想 A 组那句指令里的「顺便该修的都修一修」—— 那半句话是它的许可证。</>}
			visual={
				<div style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.35 }}
						style={{ flex: '0 0 190px', background: colors.white, border, boxShadow: shadowSm, padding: '18px 16px', display: 'flex', flexDirection: 'column' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, fontWeight: 700, color: '#999', marginBottom: 12 }}>
							你预期的
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: 700, color: colors.green, lineHeight: 1 }}>3</div>
						<div style={{ fontSize: 14, color: '#777', marginTop: 4, marginBottom: 14 }}>个文件</div>
						<div style={{
							flex: 1, background: '#eef7e9', border: `2px solid ${colors.black}`,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontSize: 13.5, color: '#3b5c22', fontWeight: 700, textAlign: 'center', padding: 10,
						}}>
							就改我说的<br />那一块
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.5 }}
						style={{ flex: 1, background: colors.white, border, boxShadow: shadowSm, padding: '18px 18px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, fontWeight: 700, color: colors.red, marginBottom: 12 }}>
							它实际交回来的
						</div>
						<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: 700, color: colors.red, lineHeight: 1 }}>11</span>
							<span style={{ fontSize: 14, color: '#777' }}>个文件</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
							{EXTRA.map((x, i) => (
								<motion.div
									key={x}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
									style={{
										display: 'flex', gap: 9, alignItems: 'center',
										background: '#fdeeee', border: `2px solid ${colors.red}`, padding: '8px 11px',
									}}
								>
									<span style={{ color: colors.red, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>+</span>
									<span style={{ fontSize: 14.5, fontWeight: 600 }}>{x}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			}
		/>
	);
}
