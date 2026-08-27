import { Slide, Inner, Title, Tag, colors } from '../ui';

export default function S24_Break() {
	return <Slide bg={colors.blue}><Inner center><Tag bg={colors.dark}>10 MIN BREAK</Tag><Title size="82px" style={{ margin: '22px 0' }}>休息一下</Title><p style={{ fontSize: 26, fontWeight: 900 }}>回来先判断：Logo 在山的哪一边？它值得现在做吗？</p></Inner></Slide>;
}