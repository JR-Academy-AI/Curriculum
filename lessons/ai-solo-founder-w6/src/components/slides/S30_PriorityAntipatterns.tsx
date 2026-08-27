import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const traps = ['RICE 分高就是真理', '紧急自动等于重要', '只看价值，不看依赖', '因为做了一半所以继续', '所有任务都是 P0', '给 idea 填 deadline 装承诺'];

export default function S30_PriorityAntipatterns() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.red}>PRIORITY THEATER</Tag><Title size="53px" style={{ margin: '15px 0 24px' }}>看起来很专业，实际上没做选择</Title><Grid cols={3} gap={15}>{traps.map((trap, index) => <CardSm key={trap} bg={index % 2 ? colors.warmBg : colors.red} style={{ minHeight: 90, fontSize: 19, fontWeight: 900 }}>{trap}</CardSm>)}</Grid></Inner></Slide>;
}