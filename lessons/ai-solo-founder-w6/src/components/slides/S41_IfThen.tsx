import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

export default function S41_IfThen() {
	return <Slide bg={colors.blue}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>IMPLEMENTATION INTENTION</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>把“我要做”改成 If–Then</Title><Grid cols={2} gap={28}><Card bg={colors.red}><h3 style={{ fontSize: 26 }}>愿望</h3><p style={{ fontSize: 29, fontWeight: 900, marginTop: 24 }}>下班后完善咨询服务</p></Card><Card bg={colors.green}><h3 style={{ fontSize: 26 }}>触发计划</h3><p style={{ fontSize: 25, fontWeight: 900, lineHeight: 1.45, marginTop: 18 }}>如果周二 20:00 坐到书桌前，那么我就在文档里完成服务说明第一版。</p></Card></Grid></Inner></Slide>;
}