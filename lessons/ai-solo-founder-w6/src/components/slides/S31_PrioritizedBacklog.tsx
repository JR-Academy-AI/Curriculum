import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const keep = ['访谈 3 位目标用户', '写一页服务说明', '搭建最短预约路径', '跑通收款与确认', '准备诊断交付模板'];
const later = ['Logo', '完整官网', '20 篇内容', '自动 CRM', '多平台注册'];

export default function S31_PrioritizedBacklog() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.green}>AFTER · 后 50% 已砍</Tag><Title size="52px" style={{ margin: '14px 0 24px' }}>Backlog 的价值，藏在没做的那一半</Title><Grid cols={2} gap={24}><CardSm bg={colors.green}><h3 style={{ fontSize: 27, marginBottom: 10 }}>KEEP · 本周候选</h3>{keep.map((item, index) => <p key={item} style={{ fontSize: 18, fontWeight: 800, margin: '10px 0' }}>{index + 1}. {item}</p>)}</CardSm><CardSm bg={colors.white}><h3 style={{ fontSize: 27, marginBottom: 10 }}>LATER / DELETE</h3>{later.map(item => <p key={item} style={{ fontSize: 18, margin: '10px 0', textDecoration: 'line-through' }}>{item}</p>)}</CardSm></Grid></Inner></Slide>;
}