import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const levels = [['IDEA', '也许以后做', '做个人品牌'], ['PROJECT', '多个交付物', '推出诊断服务'], ['DELIVERABLE', '一个工作块产出', '一页服务说明'], ['NEXT ACTION', '立即能开始', '写出目标用户三种痛点']];

export default function S18_WorkHierarchy() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>先分层，再排序</Tag><Title size="54px" style={{ margin: '15px 0 26px' }}>别拿苹果、果园和“去买铲子”一起排</Title><Grid cols={4} gap={16}>{levels.map(([label, meaning, example], index) => <CardSm key={label} bg={[colors.purple, colors.red, colors.yellow, colors.green][index]} style={{ minHeight: 190 }}><strong style={{ fontSize: 16 }}>{label}</strong><h3 style={{ fontSize: 22, margin: '18px 0 10px' }}>{meaning}</h3><p style={{ fontSize: 18 }}>{example}</p></CardSm>)}</Grid></Inner></Slide>;
}