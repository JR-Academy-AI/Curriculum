import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const prompts = ['Backlog Normalizer', 'Priority Challenger', 'Scope Hammer', 'Task Slicer', 'DoD Auditor', 'Daily Pulse', 'Sunday Review'];

export default function S47_PromptStack() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.purple}>AI PM · 7 张 Prompt 卡</Tag><Title size="54px" style={{ margin: '15px 0 24px' }}>不是一个万能 Prompt，是七个明确岗位</Title><Grid cols={4} gap={14}>{prompts.map((prompt, index) => <CardSm key={prompt} bg={[colors.white, colors.yellow, colors.red, colors.blue, colors.green, colors.purple, colors.orange][index]} style={{ minHeight: 78, display: 'flex', alignItems: 'center', fontSize: 17, fontWeight: 900 }}>{prompt}</CardSm>)}</Grid><p style={{ fontSize: 19, marginTop: 24 }}>统一护栏：先澄清、不编数字、标记未知、解释反对意见、最终决策留给人。</p></Inner></Slide>;
}