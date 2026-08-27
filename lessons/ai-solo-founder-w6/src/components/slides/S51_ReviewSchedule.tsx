import { Slide, Inner, Half, Title, Card, Tag, colors } from '../ui';

export default function S51_ReviewSchedule() {
	return <Slide bg={colors.blue}><Inner split><Half><Tag bg={colors.dark}>最后一步</Tag><Title size="58px" style={{ margin: '18px 0' }}>没有自动任务？<br />照样能自动发生</Title></Half><Half><Card bg={colors.white}><h3 style={{ fontSize: 27 }}>日历降级方案</h3>{['创建每周日 18:00 重复事件', '标题：W6 · AI PM Weekly Review', '描述里粘贴 Sunday Review Prompt', '附上 backlog 文档链接', '提醒：提前 10 分钟'].map((item, index) => <p key={item} style={{ fontSize: 19, fontWeight: 800, margin: '14px 0' }}>{index + 1}. {item}</p>)}</Card></Half></Inner></Slide>;
}