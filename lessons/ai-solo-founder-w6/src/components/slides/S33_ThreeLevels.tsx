import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const levels = [['MILESTONE', '1–4 周', '首位用户完成诊断'], ['DELIVERABLE', '一个工作块', '预约路径可走通'], ['NEXT ACTION', '5–30 分钟', '创建预约表单并写 4 个字段']];

export default function S33_ThreeLevels() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>任务粒度</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>大词负责指路，小动作负责启动</Title><Grid cols={3} gap={20}>{levels.map(([label, time, example], index) => <Card key={label} bg={[colors.red, colors.yellow, colors.green][index]}><strong>{label} · {time}</strong><p style={{ fontSize: 25, fontWeight: 900, marginTop: 24 }}>{example}</p></Card>)}</Grid></Inner></Slide>;
}