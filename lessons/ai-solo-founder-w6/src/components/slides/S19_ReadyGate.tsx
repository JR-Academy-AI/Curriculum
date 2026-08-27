import { Slide, Inner, Half, Title, Card, Tag, colors } from '../ui';

export default function S19_ReadyGate() {
	return <Slide bg={colors.white}><Inner split><Half><Tag bg={colors.green}>READY GATE</Tag><Title size="58px" style={{ margin: '18px 0' }}>不是所有待办<br />都配得上开工</Title><p style={{ fontSize: 21 }}>Ready 解决“能不能开始”；Done 解决“能不能关单”。</p></Half><Half><Card bg={colors.yellow}>{['服务当前结果？', '交付物说清楚？', '第一动作明确？', '依赖与阻塞可见？'].map((item, index) => <p key={item} style={{ fontSize: 24, fontWeight: 900, margin: '17px 0' }}>{index + 1}. {item}</p>)}</Card></Half></Inner></Slide>;
}