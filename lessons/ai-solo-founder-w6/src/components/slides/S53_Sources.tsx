import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const sources = [
	['Scrum Guide 2020', '透明、检查、调整；ordered backlog；Sprint Goal；DoD'],
	['Basecamp · Shape Up', 'Appetite；fixed time, variable scope；Hill Chart'],
	['Atlassian · WIP Limits', '限制进行中工作；暴露瓶颈；停止不断开新任务'],
	['Intercom · RICE', 'Reach × Impact × Confidence ÷ Effort'],
	['NCI · Implementation Intentions', '用精确 If–Then 计划连接情境与行动'],
	['Gary Klein · Premortem', '假设项目已经失败，提前识别风险'],
];

export default function S53_Sources() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>APPENDIX · RESEARCH BASIS</Tag><Title size="49px" style={{ margin: '14px 0 22px' }}>方法有出处，OPC 译法由本课程负责</Title><Grid cols={2} gap={14}>{sources.map(([title, body], index) => <CardSm key={title} bg={index % 2 ? colors.white : colors.yellow} style={{ minHeight: 88 }}><h3 style={{ fontSize: 20 }}>{title}</h3><p style={{ fontSize: 16, marginTop: 8 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 17, marginTop: 20 }}>原始资料：scrumguides.org · basecamp.com/shapeup · atlassian.com/agile · intercom.com · cancercontrol.cancer.gov · hbr.org</p></Inner></Slide>;
}