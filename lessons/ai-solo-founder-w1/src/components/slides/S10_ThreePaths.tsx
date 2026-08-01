import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// ① 三条路的决策对照 —— 来源：W1_RUNSHEET.md §3「14:05–14:20 三条路的决策对照」7 行表；
// 叙事参考 public/session-deck.html #6「创业先分清哪一种」，并与产品验证路径的 Paid Evidence 口径对齐。
const opc = (t: string) => <b style={{ fontWeight: 800 }}>{t}</b>;

export default function S10_ThreePaths() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '40px 56px 36px' }}>
				<SlideHead
					tag="① 创业先分清你做的是哪一种"
					title="这门课先让你做一门有人付钱的 Business"
					titleSize="clamp(32px, 2.9vw, 44px)"
					sub="不是否定融资。先证明有人愿意付钱，再决定要不要用资本把它放大。"
				/>

				<DeckTable
					fontSize={19}
					headFontSize={17}
					cellPad="10px 16px"
					cols={[
						{ label: '遇到这件事', w: '1.05fr' },
						{ label: 'VC Startup', w: '1fr' },
						{ label: '传统创业', w: '0.9fr' },
						{ label: 'OPC 一人公司 ← 这门课教的', w: '1.75fr', accent: '#FFE9E4' },
					]}
					rows={[
						['活干不完', '招人、扩团队', '招人', opc('上 AI / 自动化，不招人')],
						['缺钱', '融资', '贷款、自己垫', opc('靠第一笔收入养活自己')],
						['怎么算成功', '估值、下一轮', '营业额、规模', opc('每月进你口袋多少钱 + 你有多自由')],
						['做小了算什么', '失败', '失败', opc('是主动选的')],
						['营销怎么做', '烧钱买增长', '销售团队', opc('内容 + 人脉 + AI 放大')],
						['财务长什么样', '烧钱换增长', '现金流管理', opc('低成本、高毛利、当月见现金')],
						['你是谁', 'CEO，管团队', '老板，管员工', opc('你既是瓶颈，也是护城河')],
					]}
				/>

				<Punchline bg={colors.dark}>
					这门课先走<span style={{ background: colors.red, padding: '0 8px' }}>第三列</span>
					：低成本做出来，用真实付费判断是不是需求。W7 的第一笔钱是 <u>Paid Evidence</u>，不是 PMF。
					<span style={{ display: 'block', marginTop: 8, fontSize: 18, fontWeight: 600, color: colors.yellow }}>
						站稳之后，你仍然可以选择融资；但不要拿一个还没人付过钱的想法去烧钱。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
