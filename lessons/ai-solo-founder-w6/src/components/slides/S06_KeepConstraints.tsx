import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const columns = [
	{ title: '留下约束', color: colors.green, items: ['一个本周目标', '一个有序 backlog', 'Ready / Done 标准', 'WIP 限制', '固定 review'] },
	{ title: '扔掉仪式', color: colors.red, items: ['角色扮演', '多层状态汇报', '每日开会', 'Story Points', '完整 Jira 流程'] },
];

export default function S06_KeepConstraints() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>大厂全家桶 → OPC 随身包</Tag>
		<Title size="58px" style={{ margin: '16px 0 28px' }}>保留约束，不保留仪式</Title>
		<Grid cols={2} gap={30}>{columns.map(column => <Card key={column.title} bg={column.color}>
			<h3 style={{ fontSize: 32, marginBottom: 16 }}>{column.title}</h3>
			{column.items.map(item => <div key={item} style={{ fontSize: 21, fontWeight: 800, padding: '9px 0' }}>→ {item}</div>)}
		</Card>)}</Grid>
	</Inner></Slide>;
}