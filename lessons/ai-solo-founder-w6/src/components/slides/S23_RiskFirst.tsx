import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

export default function S23_RiskFirst() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.orange}>RISK-FIRST SEQUENCING</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>先推最吓人的工作上山</Title><Grid cols={3} gap={20}>
		<CardSm bg={colors.red}><h3 style={{ fontSize: 26 }}>高未知</h3><p style={{ fontSize: 20, marginTop: 16 }}>有人愿意预约吗？<br />收款能走通吗？</p></CardSm>
		<CardSm bg={colors.yellow}><h3 style={{ fontSize: 26 }}>先验证</h3><p style={{ fontSize: 20, marginTop: 16 }}>发出邀请<br />完整跑一次流程</p></CardSm>
		<CardSm bg={colors.green}><h3 style={{ fontSize: 26 }}>后润色</h3><p style={{ fontSize: 20, marginTop: 16 }}>Logo、配色、自动化<br />留到核心已知之后</p></CardSm>
	</Grid><p style={{ marginTop: 28, fontSize: 22, fontWeight: 900 }}>优先级不只看价值，还看“它能消灭多少未知”。</p></Inner></Slide>;
}