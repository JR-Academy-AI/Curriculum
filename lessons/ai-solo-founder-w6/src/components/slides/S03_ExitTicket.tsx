import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Card, Tag, colors, fonts } from '../ui';

const outputs = [
	{ tag: '01', title: '已排序 backlog', body: '顶部直接服务本周结果；后 50% 明确 Later 或 Delete。', color: colors.yellow },
	{ tag: '02', title: '下周 5 项计划', body: '每项有时间块、第一动作和一句可验证的 DoD。', color: colors.blue },
	{ tag: '03', title: '周日 review', body: '每周日 18:00 自动提醒，AI 生成复盘草案并回写 backlog。', color: colors.green },
];

export default function S03_ExitTicket() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<Tag bg={colors.red}>今天不是来记笔记</Tag>
				<Title white size="64px" style={{ margin: '18px 0 36px' }}>离场前，交出这三件套</Title>
				<Grid cols={3} gap={24}>
					{outputs.map((item, index) => (
						<motion.div key={item.title} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.15 }}>
							<Card bg={item.color} style={{ minHeight: 230 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900 }}>{item.tag}</div>
								<h3 style={{ fontSize: 30, margin: '20px 0 14px' }}>{item.title}</h3>
								<p style={{ fontSize: 19, lineHeight: 1.55 }}>{item.body}</p>
							</Card>
						</motion.div>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}