import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// ① 三条路的决策对照 —— 来源：W1_RUNSHEET.md §3「14:05–14:20 三条路的决策对照」7 行表 + 收尾那句话
const opc = (t: string) => <b style={{ fontWeight: 800 }}>{t}</b>;

export default function S10_ThreePaths() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '40px 56px 36px' }}>
				<SlideHead
					tag="① 你要走哪条路 · 14:00–14:35"
					title="不讲「心智」，讲：遇到同一件事，三种人怎么选"
					titleSize="clamp(32px, 2.9vw, 44px)"
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
					这门课教的是<span style={{ background: colors.red, padding: '0 8px' }}>第三列</span>
					。不雇人、不融资，目标 $1k → $10k MRR 的自由。想做独角兽的话这门课不适合你 —— 现在说比第 10 周说好。
					<span style={{ display: 'block', marginTop: 8, fontSize: 18, fontWeight: 600, color: colors.yellow }}>
						「我做这个是不是没出息？」—— 小是<u>选的</u>，不是<u>输的</u>。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
