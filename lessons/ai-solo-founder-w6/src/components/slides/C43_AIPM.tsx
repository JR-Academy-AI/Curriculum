import { Slide, Inner, Title, Highlight, Tag, colors } from '../ui';

export default function C43_AIPM() {
	return <Slide bg={colors.darkBg}><Inner center><Tag bg={colors.purple}>CHAPTER 5 · FEEDBACK</Tag><Title white size="75px" style={{ margin: '24px 0' }}>让 AI OS 当 PM，<br />不是当<Highlight color={colors.red}>老板</Highlight></Title><p style={{ color: colors.white, fontSize: 24 }}>它负责盯系统；你负责做判断。</p></Inner></Slide>;
}