import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

export default function S10_BusyVsValidated() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>ONLINE FIRST · A OR B?</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>同样一周，你选哪条路线？</Title>
		<Grid cols={2} gap={28}>
			<Card bg={colors.red}><h3 style={{ fontSize: 32 }}>A · 忙碌版</h3><p style={{ fontSize: 23, lineHeight: 1.7, marginTop: 16 }}>Logo → 官网 → 内容矩阵 → 多平台注册</p><strong style={{ fontSize: 20 }}>看起来像公司，还没有用户证据。</strong></Card>
			<Card bg={colors.green}><h3 style={{ fontSize: 32 }}>B · 验证版</h3><p style={{ fontSize: 23, lineHeight: 1.7, marginTop: 16 }}>访谈 → 服务说明 → 预约测试 → 首次交付</p><strong style={{ fontSize: 20 }}>不够漂亮，但未知正在减少。</strong></Card>
		</Grid>
	</Inner></Slide>;
}