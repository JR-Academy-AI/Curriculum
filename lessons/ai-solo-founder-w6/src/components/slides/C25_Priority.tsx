import { Slide, Inner, Title, Highlight, Tag, colors } from '../ui';

export default function C25_Priority() {
	return <Slide bg={colors.darkBg}><Inner center><Tag bg={colors.red}>CHAPTER 3 · PRIORITY</Tag><Title white size="76px" style={{ margin: '24px 0' }}>排序不是算分，<br />是通过<Highlight color={colors.blue}>四道门</Highlight></Title><p style={{ color: colors.white, fontSize: 24 }}>目标 · 风险 · 相对价值 · 真实容量</p></Inner></Slide>;
}