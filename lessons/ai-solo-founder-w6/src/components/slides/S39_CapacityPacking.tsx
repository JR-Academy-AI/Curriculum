import { Slide, Inner, Half, Title, Card, Tag, colors } from '../ui';

export default function S39_CapacityPacking() {
	return <Slide bg={colors.yellow}><Inner split><Half><Tag bg={colors.dark}>CAPACITY GATE</Tag><Title size="56px" style={{ margin: '18px 0' }}>先看日历，<br />再装任务</Title><p style={{ fontSize: 21 }}>不要从任务总量反推自己必须加班。</p></Half><Half><Card bg={colors.white}>{['① 标出真实可用工作块', '② 扣掉固定生活与恢复时间', '③ 预留一部分缓冲', '④ 按优先级装入交付物', '⑤ 装不下的回到 backlog'].map(item => <p key={item} style={{ fontSize: 21, fontWeight: 800, margin: '15px 0' }}>{item}</p>)}<div style={{ background: colors.red, padding: 14, fontWeight: 900 }}>80% 承诺 + 20% 缓冲是课堂启发式，不是自然定律。</div></Card></Half></Inner></Slide>;
}