import { Slide, Inner, Title, Highlight, Tag, colors } from '../ui';

export default function C17_Backlog() {
	return <Slide bg={colors.darkBg}><Inner center><Tag bg={colors.blue}>CHAPTER 2 · PORTFOLIO</Tag><Title white size="76px" style={{ margin: '24px 0' }}>Backlog 不是仓库，<br />是<Highlight color={colors.yellow}>决策队列</Highlight></Title><p style={{ color: colors.white, fontSize: 24 }}>看清工作 · 看清风险 · 决定不做</p></Inner></Slide>;
}