import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, Stagger, StaggerItem, colors, fonts, border, shadow, shadowSm } from '../ui';

const CHECKS = [
	{ k: '≥3 次', t: '这件事你重复做了 ≥3 次（或明显会反复做）' },
	{ k: '固定套路', t: '它有相对固定的步骤 / 标准 / 模板' },
	{ k: '会漂', t: '每次靠临时 prompt，质量 / 格式会漂' },
	{ k: '值得共享', t: '值得团队里其他人也照同一套做' },
];

// 判断线：什么值得做成 Skill
export default function L5P04_WhenToSkill() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.blue}>判断线</Tag>
				<Title size="46px" style={{ marginTop: 14, marginBottom: 8 }}>
					什么值得做成 <span style={{ background: colors.yellow, padding: '0 10px' }}>Skill</span>？
				</Title>
				<p style={{ fontSize: 19, color: '#555', fontWeight: 500, marginBottom: 22 }}>
					不是所有事都该 Skill 化。满足多条，才值得固化：
				</p>
				<div style={{ display: 'flex', gap: 24 }}>
					<div style={{ flex: 1.1 }}>
						<Stagger style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{CHECKS.map((c) => (
								<StaggerItem key={c.k}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 12, background: colors.white, border, boxShadow: shadowSm, padding: '13px 16px' }}>
										<span style={{ fontSize: 20, color: colors.green, fontWeight: 900 }}>☑</span>
										<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 14, background: colors.dark, color: colors.white, padding: '3px 10px', minWidth: 88, textAlign: 'center' }}>{c.k}</span>
										<span style={{ fontSize: 17, fontWeight: 500 }}>{c.t}</span>
									</div>
								</StaggerItem>
							))}
						</Stagger>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
						style={{ flex: 0.85, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '22px 22px', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<div style={{ fontWeight: 900, fontSize: 19, color: colors.red, marginBottom: 12 }}>✕ 不该做 Skill</div>
						<div style={{ fontSize: 16, lineHeight: 1.6 }}>
							一次性的、每次都不一样、没有固定套路的活——直接 prompt 就好，别为了「显得专业」硬 Skill 化。
						</div>
					</motion.div>
				</div>
				</div>
			</Inner>
		</Slide>
	);
}
