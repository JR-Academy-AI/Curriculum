import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const causes = [
	['A', '没时间', '日历没有真实容量'],
	['B', '没下一步', '任务仍是一团大词'],
	['C', '开太多', 'Doing 里挤满半成品'],
	['D', '没人追', '没有固定检查节奏'],
];

export default function S04_ProjectAutopsy() {
	return (
		<Slide bg={colors.white}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<Tag bg={colors.dark}>ONLINE FIRST · CHAT A/B/C/D</Tag>
				<Title size="58px" style={{ margin: '18px 0 30px' }}>你的项目，最可能死在哪？</Title>
				<Grid cols={4} gap={18}>
					{causes.map(([key, title, body], index) => (
						<motion.div key={key} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.12 }}>
							<CardSm bg={[colors.yellow, colors.red, colors.blue, colors.green][index]} style={{ height: 190 }}>
								<div style={{ fontSize: 44, fontWeight: 900 }}>{key}</div>
								<h3 style={{ fontSize: 25, margin: '8px 0' }}>{title}</h3>
								<p style={{ fontSize: 17, lineHeight: 1.45 }}>{body}</p>
							</CardSm>
						</motion.div>
					))}
				</Grid>
				<p style={{ marginTop: 34, fontSize: 20, fontWeight: 700 }}>线上先选，不解释；线下再讲一个真实瞬间。</p>
			</Inner>
		</Slide>
	);
}