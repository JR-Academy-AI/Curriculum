import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadowSm } from '../ui';

const L4_OPTIONS = ['出 scaffold plan（读 PRD/CLAUDE.md/tokens）', '写最小 CI（push/PR 时 typecheck+build）', '填团队 PR body（概述/issue/类型/风险/测试计划）'];
const OWN_OPTIONS = ['写周报 / 周会纪要', '改简历投不同岗位', '生成某类固定格式文件', '某套代码规范 / review checklist'];

// 动手准备：挑一个你的重复动作
export default function L5P10_PickYourRepeat() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.green} color={colors.black}>方案 A · 用 L4 原料</Tag>
						<Title size="34px" style={{ marginTop: 14, marginBottom: 16 }}>没做完 L4？<br/>直接拿它的重复 prompt</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{L4_OPTIONS.map((o, i) => (
								<motion.div key={o}
									initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.12 }}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', fontSize: 15.5, display: 'flex', gap: 8 }}>
									<span style={{ color: colors.green, fontWeight: 900 }}>→</span>{o}
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}>
						<Tag bg={colors.orange}>方案 B · 用你自己的活</Tag>
						<Title size="34px" style={{ marginTop: 14, marginBottom: 16 }}>挑一件<span style={{ background: colors.yellow, padding: '0 8px' }}>本周重复 ≥3 次</span>的活</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{OWN_OPTIONS.map((o, i) => (
								<motion.div key={o}
									initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.12 }}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', fontSize: 15.5, display: 'flex', gap: 8 }}>
									<span style={{ color: colors.orange, fontWeight: 900 }}>→</span>{o}
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
