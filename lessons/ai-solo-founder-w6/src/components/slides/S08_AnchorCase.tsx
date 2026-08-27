import { Slide, Inner, Half, Title, Tag, Card, colors } from '../ui';

export default function S08_AnchorCase() {
	return <Slide bg={colors.yellow}><Inner split>
		<Half><Tag bg={colors.dark}>贯穿案例</Tag><Title size="62px" style={{ margin: '18px 0' }}>在职专家，推出首个付费诊断</Title><p style={{ fontSize: 22, lineHeight: 1.55 }}>有经验，没有标准产品；白天上班，晚上推进；最大的风险不是做得不够漂亮，而是从未让真实用户走完整个流程。</p></Half>
		<Half><Card bg={colors.white}><h3 style={{ fontSize: 28, marginBottom: 18 }}>当前现实</h3>{['时间：只有晚间和周末', '资源：一个人，没有团队', '资产：专业经验 + 一堆想法', '目标：让首位真实用户完成预约与交付'].map(item => <p key={item} style={{ fontSize: 20, fontWeight: 800, margin: '14px 0' }}>→ {item}</p>)}</Card></Half>
	</Inner></Slide>;
}