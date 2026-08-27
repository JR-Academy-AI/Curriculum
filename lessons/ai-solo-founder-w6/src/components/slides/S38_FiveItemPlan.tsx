import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const fields = [['Deliverable', '交付什么'], ['DoD', '凭什么算完'], ['Calendar', '哪块时间做'], ['First action', '前 15 分钟做什么'], ['Dependency', '卡在哪里'], ['Fallback', '时间不够砍什么']];

export default function S38_FiveItemPlan() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>下周 5 项模板</Tag><Title size="54px" style={{ margin: '15px 0 24px' }}>计划不只有 What，还要有 When 与 Proof</Title><Grid cols={3} gap={15}>{fields.map(([title, body], index) => <CardSm key={title} bg={index === 1 ? colors.green : index === 5 ? colors.red : colors.white} style={{ minHeight: 105 }}><h3 style={{ fontSize: 21 }}>{title}</h3><p style={{ fontSize: 17, marginTop: 9 }}>{body}</p></CardSm>)}</Grid></Inner></Slide>;
}