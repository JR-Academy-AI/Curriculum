import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const rules = [['先问', '最多 3 个澄清问题'], ['不编', 'deadline、effort、用户数据'], ['标记', '所有未知和假设'], ['解释', '排序理由与反对意见'], ['留给人', '目标、取舍与承诺']];

export default function S20_AIGuardrails() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>AI BACKLOG NORMALIZER</Tag><Title size="54px" style={{ margin: '15px 0 26px' }}>让 AI 整理，不让 AI 编故事</Title><Grid cols={5} gap={14}>{rules.map(([title, body], index) => <CardSm key={title} bg={index === 4 ? colors.green : colors.white} style={{ minHeight: 170 }}><h3 style={{ fontSize: 24 }}>{title}</h3><p style={{ fontSize: 18, lineHeight: 1.45, marginTop: 18 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 20, fontWeight: 900, marginTop: 26 }}>课堂找错：AI 擅自写“周三完成、预计 2 小时”，你接受吗？</p></Inner></Slide>;
}