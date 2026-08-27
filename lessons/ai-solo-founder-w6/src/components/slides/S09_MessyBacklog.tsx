import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const tasks = ['做 logo', '研究竞品', '想服务名字', '搭官网', '写 20 篇内容', '问朋友需求', '设计诊断表', '定价', '开收款', '写服务说明', '做预约页', '找访谈对象', '准备交付模板', '学剪辑', '注册多个平台', '优化个人简介', '自动发邮件', '整理反馈'];

export default function S09_MessyBacklog() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.orange}>BEFORE</Tag><Title size="52px" style={{ margin: '14px 0 22px' }}>18 条都合理，所以 18 条都危险</Title>
		<Grid cols={6} gap={12}>{tasks.map((task, index) => <CardSm key={task} bg={index % 3 === 0 ? colors.warmBg : colors.white} style={{ fontSize: 17, fontWeight: 800, minHeight: 56 }}>{task}</CardSm>)}</Grid>
		<p style={{ marginTop: 24, fontSize: 22, fontWeight: 900 }}>Backlog 不是越全越好。它必须帮助你说“不”。</p>
	</Inner></Slide>;
}