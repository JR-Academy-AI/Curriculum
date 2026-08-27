import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Tag, colors, border, shadowSm, fonts } from '../ui';

const layers = [
	['01', 'DIRECTION', '这周唯一结果', colors.red],
	['02', 'PORTFOLIO', 'backlog 取舍', colors.yellow],
	['03', 'FLOW', 'WIP 与阻塞', colors.blue],
	['04', 'COMMITMENT', '时间块 + DoD', colors.green],
	['05', 'FEEDBACK', '每日检查 + 周复盘', colors.purple],
];

export default function C05_ExecutionStack() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<Tag bg={colors.yellow} color={colors.black}>THE OPC EXECUTION STACK</Tag>
				<Title white size="60px" style={{ margin: '18px 0 28px' }}>五层就够。每层只留一个动作。</Title>
				<Grid cols={5} gap={14}>
					{layers.map(([number, label, action, color], index) => (
						<motion.div key={label} initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.12 }} style={{ background: color, border, boxShadow: shadowSm, padding: '22px 16px', minHeight: 210 }}>
							<div style={{ fontFamily: fonts.mono, fontWeight: 900 }}>{number}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, marginTop: 34 }}>{label}</div>
							<div style={{ fontSize: 21, fontWeight: 900, marginTop: 14, lineHeight: 1.35 }}>{action}</div>
						</motion.div>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}