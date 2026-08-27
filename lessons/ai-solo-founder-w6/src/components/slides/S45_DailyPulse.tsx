import { Slide, Inner, Half, Title, Card, Tag, colors, fonts } from '../ui';

export default function S45_DailyPulse() {
	return <Slide bg={colors.yellow}><Inner split><Half><Tag bg={colors.dark}>DAILY · 3 MIN</Tag><Title size="58px" style={{ margin: '18px 0' }}>每天只问<br />四个问题</Title></Half><Half><Card bg={colors.white}><div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>DAILY PULSE</div>{['本周结果仍然成立吗？', 'Doing 从昨天移动了吗？', '现在最大的阻塞是什么？', '今天最小的下一动作是什么？'].map((item, index) => <p key={item} style={{ fontSize: 21, fontWeight: 900, margin: '17px 0' }}>{index + 1}. {item}</p>)}</Card></Half></Inner></Slide>;
}