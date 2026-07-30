import { motion } from 'framer-motion';
import { MechPage } from '../MechPage';
import { colors, fonts, border, shadowSm } from '../ui';

const TIMELINE = [
	{ t: '第 5 分钟', s: '守', h: 100, color: colors.green },
	{ t: '第 15 分钟', s: '基本守', h: 76, color: colors.green },
	{ t: '第 28 分钟', s: '开始飘', h: 48, color: colors.orange },
	{ t: '第 40 分钟', s: '不守了', h: 24, color: colors.red },
];

// 机制①：context 稀释
export default function L6P11_MechDilution() {
	return (
		<MechPage
			index={1}
			accent={colors.blue}
			title={<>context <span style={{ background: colors.yellow, padding: '0 8px' }}>稀释</span></>}
			mechanism={
				<>
					你在第一分钟说的规范，跑到第四十分钟，已经埋在几万 token 之前了。
					它还在 context 里，但它说话的声音变小了 —— 不再影响它这一轮的决定。
				</>
			}
			symptom="越到后面越不守规矩"
			footer={<>抬头看一眼你自己那个 —— 它后面写的代码风格，跟前面一样吗？</>}
			visual={
				<div style={{ background: colors.white, border, boxShadow: shadowSm, padding: '24px 24px 18px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 2, fontWeight: 700, color: '#999', marginBottom: 20 }}>
						它对你那条规范的服从程度
					</div>
					<div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 200, marginBottom: 14 }}>
						{TIMELINE.map((x, i) => (
							<div key={x.t} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
								<div style={{ fontSize: 14.5, fontWeight: 800, textAlign: 'center', marginBottom: 8, color: x.color }}>{x.s}</div>
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: `${x.h}%` }}
									transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
									style={{ background: x.color, border: `2px solid ${colors.black}` }}
								/>
							</div>
						))}
					</div>
					<div style={{ display: 'flex', gap: 16, borderTop: `2px solid ${colors.black}`, paddingTop: 10 }}>
						{TIMELINE.map((x) => (
							<div key={x.t} style={{ flex: 1, fontFamily: fonts.mono, fontSize: 11.5, color: '#777', textAlign: 'center', fontWeight: 700 }}>
								{x.t}
							</div>
						))}
					</div>
				</div>
			}
		/>
	);
}
