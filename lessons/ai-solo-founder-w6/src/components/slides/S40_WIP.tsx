import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const columns = [['LATER', '其他想法'], ['READY', '已过开工门'], ['DOING · 1', '当前唯一主任务'], ['BLOCKED', '等待外部条件'], ['DONE', '有证据完成']];

export default function S40_WIP() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.red}>KANBAN · WIP LIMIT</Tag><Title size="52px" style={{ margin: '14px 0 24px' }}>Stop starting. Start finishing.</Title><Grid cols={5} gap={12}>{columns.map(([title, body], index) => <Card key={title} bg={[colors.warmBg, colors.yellow, colors.red, colors.blue, colors.green][index]} style={{ padding: '18px 12px', minHeight: 150 }}><h3 style={{ fontSize: 19 }}>{title}</h3><p style={{ fontSize: 16, marginTop: 16 }}>{body}</p></Card>)}</Grid><p style={{ fontSize: 21, fontWeight: 900, marginTop: 24 }}>Doing 默认只放 1 项；等待反馈的移入 Blocked，再拉 1 项。</p></Inner></Slide>;
}