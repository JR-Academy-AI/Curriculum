import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const scopes = [['必须有', '服务说明、预约路径、交付模板'], ['可以粗糙', '视觉、自动邮件、文案润色'], ['明确不做', '官网、内容矩阵、多平台']];

export default function S14_FixedTime() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.blue}>FIXED TIME · VARIABLE SCOPE</Tag><Title size="58px" style={{ margin: '16px 0 28px' }}>时间固定，范围必须会变</Title>
		<Grid cols={3} gap={22}>{scopes.map(([title, body], index) => <CardSm key={title} bg={[colors.green, colors.yellow, colors.red][index]} style={{ minHeight: 180 }}><h3 style={{ fontSize: 29 }}>{title}</h3><p style={{ fontSize: 20, lineHeight: 1.55, marginTop: 18 }}>{body}</p></CardSm>)}</Grid>
		<p style={{ fontSize: 22, fontWeight: 900, marginTop: 30 }}>质量底线不变。先砍“做什么”，不是砍“能不能用”。</p>
	</Inner></Slide>;
}