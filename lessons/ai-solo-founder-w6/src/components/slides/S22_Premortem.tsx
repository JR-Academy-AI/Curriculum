import { Slide, Inner, Half, Title, Card, Tag, colors } from '../ui';

export default function S22_Premortem() {
	return <Slide bg={colors.red}><Inner split><Half><Tag bg={colors.dark}>PREMORTEM · 事前验尸</Tag><Title size="56px" style={{ margin: '18px 0' }}>假设下周日，<br />项目已经失败</Title><p style={{ fontSize: 23, fontWeight: 800 }}>不是问“会不会失败”，而是问“它是怎么死的”。</p></Half><Half><Card bg={colors.white}>{['一直改文案，没有邀请用户', '收款或预约流程走不通', '下班太累，计划块全部跳过', '任务太大，每项都只完成一半', '临时工作挤占，范围没有收缩'].map((item, index) => <p key={item} style={{ fontSize: 19, fontWeight: 800, margin: '13px 0' }}>{index + 1}. {item}</p>)}</Card></Half></Inner></Slide>;
}