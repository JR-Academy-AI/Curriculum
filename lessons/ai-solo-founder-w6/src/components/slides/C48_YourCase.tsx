import { Slide, Inner, Title, Highlight, Tag, colors } from '../ui';

export default function C48_YourCase() {
	return <Slide bg={colors.darkBg}><Inner center><Tag bg={colors.yellow} color={colors.black}>FINAL 30 MINUTES</Tag><Title white size="76px" style={{ margin: '24px 0' }}>现在，轮到你的<br /><Highlight color={colors.green}>真实项目</Highlight></Title><p style={{ color: colors.white, fontSize: 24 }}>没有项目也没关系：复制主案例，先把流程跑通。</p></Inner></Slide>;
}