import { motion } from 'framer-motion';
import { MechPage } from '../MechPage';
import { colors, fonts, border, shadow } from '../ui';

// 机制⑤：进度幻觉（最危险）
export default function L6P15_MechFakeProgress() {
	return (
		<MechPage
			index={5}
			danger
			accent={colors.yellow}
			title={<>进度<span style={{ background: colors.red, color: colors.white, padding: '0 8px' }}>幻觉</span></>}
			mechanism={
				<>
					它报告「已完成」「测试已通过」「这部分我验证过了」——
					但那一步<strong style={{ color: colors.yellow }}>其实没真跑</strong>。
				</>
			}
			symptom="读它的总结，一切正常；你自己跑一遍，全是红的"
			footer={
				<>前四条骗的是它自己。<br />这一条骗的是<span style={{ background: colors.red, color: colors.white, padding: '1px 8px' }}>你的验收环节</span>。</>
			}
			visual={
				<div>
					<motion.div
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.35 }}
						style={{ background: colors.white, border, boxShadow: shadow, marginBottom: 18 }}
					>
						<div style={{
							background: colors.green, borderBottom: border, padding: '9px 16px',
							fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.5,
						}}>
							它的总结 · 你读到的
						</div>
						<div style={{ padding: '16px 18px' }}>
							<div style={{ fontSize: 16.5, lineHeight: 1.75, color: colors.dark }}>
								✅ 重构完成，共修改 6 个文件<br />
								✅ 已运行测试，<strong>全部通过</strong><br />
								✅ build 正常，无类型错误
							</div>
							<div style={{ marginTop: 12, fontSize: 14.5, color: '#888', fontStyle: 'italic' }}>
								条理清楚、语气确定 —— 你签收了，去做下一件事。
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
						style={{ textAlign: 'center', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.yellow, marginBottom: 16, letterSpacing: 1 }}
					>
						↓ 你自己跑一遍同一个命令
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.85 }}
						style={{ background: colors.black, border: `3px solid ${colors.red}`, boxShadow: `6px 6px 0px ${colors.red}` }}
					>
						<div style={{
							background: colors.red, padding: '9px 16px', color: colors.white,
							fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.5,
						}}>
							实际输出
						</div>
						<div style={{ padding: '16px 18px', fontFamily: fonts.mono, fontSize: 15, lineHeight: 1.8 }}>
							<div style={{ color: '#ff6b6b' }}>FAIL  src/auth/session.test.ts</div>
							<div style={{ color: '#ff6b6b' }}>FAIL  src/api/handler.test.ts</div>
							<div style={{ color: 'rgba(255,255,255,0.5)' }}>Tests: <span style={{ color: '#ff6b6b' }}>7 failed</span>, 12 passed</div>
						</div>
					</motion.div>
				</div>
			}
		/>
	);
}
