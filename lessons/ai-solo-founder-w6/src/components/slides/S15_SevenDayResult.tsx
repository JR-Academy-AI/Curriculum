import { Slide, Inner, Title, Card, Tag, colors, fonts } from '../ui';

export default function S15_SevenDayResult() {
	return <Slide bg={colors.green}><Inner center>
		<Tag bg={colors.dark}>主案例 · 一周边界</Tag><Title size="58px" style={{ margin: '20px 0 28px' }}>7 天后，什么证据值得存在？</Title>
		<Card bg={colors.white} style={{ maxWidth: 980, textAlign: 'left' }}><p style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900 }}>WEEKLY OUTCOME</p><p style={{ fontSize: 34, lineHeight: 1.45, fontWeight: 900, marginTop: 18 }}>一位真实用户能读懂服务说明，完成预约，并走完一次 60 分钟诊断流程。</p><p style={{ fontSize: 20, marginTop: 20 }}>Appetite：本周真实可用工作块内完成；超出就减范围。</p></Card>
	</Inner></Slide>;
}