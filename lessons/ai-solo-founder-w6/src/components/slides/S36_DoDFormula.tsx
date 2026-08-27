import { Slide, Inner, Title, Card, Tag, colors, fonts } from '../ui';

export default function S36_DoDFormula() {
	return <Slide bg={colors.green}><Inner center><Tag bg={colors.dark}>DEFINITION OF DONE</Tag><Title size="56px" style={{ margin: '18px 0 26px' }}>一句话，让“完成”不再靠感觉</Title><Card bg={colors.white} style={{ maxWidth: 1100, textAlign: 'left' }}><p style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 900 }}>DOD FORMULA</p><p style={{ fontSize: 35, lineHeight: 1.45, fontWeight: 900, marginTop: 18 }}>当［可观察证据］出现，并由［人或系统］验证，即完成。</p><p style={{ fontSize: 21, marginTop: 20 }}>例：当预约链接可打开，且由一位朋友完整提交测试预约，即完成。</p></Card></Inner></Slide>;
}