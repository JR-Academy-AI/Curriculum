import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

export default function S35_ReadyVsDone() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.blue}>两扇门</Tag><Title size="56px" style={{ margin: '15px 0 28px' }}>Ready 让你开工，Done 让你停手</Title><Grid cols={2} gap={28}><Card bg={colors.blue}><h3 style={{ fontSize: 32 }}>Definition of Ready</h3><p style={{ fontSize: 21, lineHeight: 1.6, marginTop: 18 }}>结果相关、交付明确、下一动作明确、阻塞可见。</p></Card><Card bg={colors.green}><h3 style={{ fontSize: 32 }}>Definition of Done</h3><p style={{ fontSize: 21, lineHeight: 1.6, marginTop: 18 }}>产出达到约定质量，并有证据让别人也能判断完成。</p></Card></Grid></Inner></Slide>;
}