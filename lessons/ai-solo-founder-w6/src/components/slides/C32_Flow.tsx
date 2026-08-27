import { Slide, Inner, Title, Highlight, Tag, colors } from '../ui';

export default function C32_Flow() {
	return <Slide bg={colors.darkBg}><Inner center><Tag bg={colors.green}>CHAPTER 4 · FLOW</Tag><Title white size="76px" style={{ margin: '24px 0' }}>从“排好了”到<br /><Highlight color={colors.red}>真的做完</Highlight></Title><p style={{ color: colors.white, fontSize: 24 }}>粒度 · DoD · WIP · 时间块</p></Inner></Slide>;
}