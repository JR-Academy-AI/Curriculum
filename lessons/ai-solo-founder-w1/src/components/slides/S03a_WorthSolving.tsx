import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const PARTS = [
	['谁', '一群具体、能找到的人'], ['何时', '问题发生的场景或触发点'], ['难在哪', '他们想完成但很难完成的事'], ['代价', '不解决会损失什么'], ['现在怎么办', '现有工具、人工、外包或不处理'],
];

export default function S03a_WorthSolving() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead tag="一个问题要写到什么程度" tagBg={colors.red} title="值得验证的问题，必须包含五个部分" sub="如果缺少场景、代价或现有做法，学生和 AI 都只能靠猜。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
					{PARTS.map(([head, body], index) => <div key={head} style={{ border, boxShadow: shadow, background: ['#FFE9E4', '#FFF6D6', '#DCEBFF', '#D9F2E4', '#EDE9FE'][index], padding: '20px 16px', minHeight: 190 }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900 }}>0{index + 1}</div><div style={{ marginTop: 14, fontSize: 25, fontWeight: 900 }}>{head}</div><div style={{ marginTop: 10, fontSize: 17, lineHeight: 1.45 }}>{body}</div></div>)}
				</div>
				<div style={{ marginTop: 22, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '18px 24px', fontSize: 25, lineHeight: 1.5, fontWeight: 850 }}>
					当 <span style={{ color: colors.yellow }}>______</span> 发生时，<span style={{ color: colors.yellow }}>______</span> 类型的用户很难 <span style={{ color: colors.yellow }}>______</span>，导致 <span style={{ color: colors.yellow }}>______</span>；他们目前通过 <span style={{ color: colors.yellow }}>______</span> 处理。
				</div>
				<Punchline bg={colors.red}>问题越具体，越容易找到人、做访谈、设计交付，也越容易让 AI 正确理解。</Punchline>
			</Body>
		</Slide>
	);
}
