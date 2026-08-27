import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const steps = [['00–03', '选项目', '自己的项目或保底案例'], ['03–08', '定边界', '7 天结果 + appetite'], ['08–15', '排 backlog', '最多 10 条，过四道门'], ['15–23', '做计划', '5 项 + DoD'], ['23–27', '设 review', '周日 18:00'], ['27–30', '提交', '线上先分享']];

export default function S49_ThirtyMinuteRunbook() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>操作步骤清单</Tag><Title size="52px" style={{ margin: '14px 0 22px' }}>30 分钟，完成最小闭环</Title><Grid cols={3} gap={14}>{steps.map(([time, title, body], index) => <CardSm key={time} bg={index === 5 ? colors.green : colors.white} style={{ minHeight: 105 }}><strong>{time}</strong><h3 style={{ fontSize: 21, margin: '7px 0' }}>{title}</h3><p style={{ fontSize: 15 }}>{body}</p></CardSm>)}</Grid></Inner></Slide>;
}