import { Slide, Inner, Half, Title, Card, Tag, colors, fonts } from '../ui';

export default function S28_RICE() {
	return <Slide bg={colors.blue}><Inner split><Half><Tag bg={colors.dark}>RICE · 相对比较器</Tag><Title size="56px" style={{ margin: '18px 0' }}>只比较<br />同一层候选项</Title><p style={{ fontSize: 21 }}>没有可靠数字，就用 Low / Medium / High，并保留理由。</p></Half><Half><Card bg={colors.white}><div style={{ fontFamily: fonts.mono, fontSize: 25, fontWeight: 900, padding: 18, background: colors.yellow, textAlign: 'center' }}>(Reach × Impact × Confidence) ÷ Effort</div>{['Reach：影响多少目标用户', 'Impact：对结果影响多大', 'Confidence：证据有多扎实', 'Effort：消耗多少真实工作块'].map(item => <p key={item} style={{ fontSize: 19, fontWeight: 800, margin: '15px 0' }}>→ {item}</p>)}</Card></Half></Inner></Slide>;
}