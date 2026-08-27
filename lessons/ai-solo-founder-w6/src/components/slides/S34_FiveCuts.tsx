import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const cuts = [['用户旅程', '看到 → 预约 → 支付 → 交付'], ['可交付物', '说明页 / 表单 / 模板'], ['风险', '先验证最不确定部分'], ['依赖', '先做会解锁后续的事'], ['质量层级', '可用版 → 可信版 → 自动化版']];

export default function S34_FiveCuts() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>任务拆分五刀法</Tag><Title size="54px" style={{ margin: '15px 0 26px' }}>优先切出能独立验证的 thin slice</Title><Grid cols={5} gap={14}>{cuts.map(([title, body], index) => <CardSm key={title} bg={index === 2 ? colors.red : colors.white} style={{ minHeight: 170 }}><h3 style={{ fontSize: 22 }}>{title}</h3><p style={{ fontSize: 17, lineHeight: 1.45, marginTop: 16 }}>{body}</p></CardSm>)}</Grid></Inner></Slide>;
}