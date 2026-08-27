import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const costs = [['执行成本', '要花多少工作块'], ['等待成本', '晚做会卡住什么'], ['切换成本', '需要重建多少上下文'], ['机会成本', '做它就放弃什么']];

export default function S29_FourCosts() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>分数之外</Tag><Title size="56px" style={{ margin: '15px 0 28px' }}>任务真正昂贵的四种方式</Title><Grid cols={4} gap={16}>{costs.map(([title, body], index) => <CardSm key={title} bg={index === 1 ? colors.red : colors.white} style={{ minHeight: 155 }}><h3 style={{ fontSize: 24 }}>{title}</h3><p style={{ fontSize: 18, lineHeight: 1.5, marginTop: 16 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 21, fontWeight: 900, marginTop: 26 }}>30 分钟访谈可能优先于 3 小时 Logo，因为它解除更大的未知。</p></Inner></Slide>;
}