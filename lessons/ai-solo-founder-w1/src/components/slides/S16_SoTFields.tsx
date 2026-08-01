import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// ② SoT 七个字段 —— 来源：W1_RUNSHEET.md §3「14:35–14:50 讲 SoT 七个字段」好例子 vs 坏例子表
// 好例子用的就是 runsheet 里那个「澳洲会计师事务所报税底稿」范例，一个字没改。
const num = (n: number) => <span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 22 }}>{n}</span>;
const bad = (t: string) => <span style={{ color: '#9b1c1c' }}>{t}</span>;
const good = (t: string) => <b>{t}</b>;

export default function S16_SoTFields() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '36px 56px 30px' }}>
				<SlideHead
					tag="② 锁方向 · 14:35–15:20 ⭐ 本节最硬"
					tagBg={colors.red}
					titleSize="clamp(30px, 2.7vw, 42px)"
					title="一页生意 SoT · 七个字段"
					sub="这一页是后面 14 周所有东西的源头：W2 的 agent 拿它跑调研、W3 拿它做商业验证、W5 拿它出品牌和官网、W14 拿它做 pitch deck。这里写虚了，后面全虚。"
				/>

				<DeckTable
					fontSize={18}
					headFontSize={16}
					cellPad="9px 14px"
					cols={[
						{ label: '#', w: '52px', align: 'center' },
						{ label: '字段', w: '1fr' },
						{ label: '❌ 坏例子', w: '1.05fr' },
						{ label: '✅ 好例子', w: '2.2fr' },
					]}
					rows={[
						[num(1), <b>服务谁</b>, bad('中小企业'), good('澳洲 5-20 人的华人会计师事务所')],
						[
							num(2),
							<b>他现在怎么解决</b>,
							bad('效率低'),
							good('用 Excel + 手工核对，一个客户报税底稿要 3 小时'),
						],
						[
							num(3),
							<b>我用 AI 做掉哪一段</b>,
							bad('用 AI 提效'),
							good('把「原始凭证 → 底稿初稿」这一段从 3 小时压到 20 分钟'),
						],
						[
							num(4),
							<b>不公平优势</b>,
							bad('我懂技术'),
							good('我自己做了 12 年澳洲税务，知道 ATO 会挑哪些毛病'),
						],
						[
							num(5),
							<b>收钱形态假设</b>,
							bad('订阅制'),
							good('按事务所人数订阅，A$99/人/月，先做 3 家试点'),
						],
						[
							num(6),
							<b>6 周后可验证的证据</b>,
							bad('有用户喜欢'),
							good('3 家事务所愿意付费试用，至少 1 家真的付钱'),
						],
						[
							num(7),
							<span style={{ background: colors.yellow, padding: '2px 6px' }}>
								<b>不做什么（必须写满 3 条）</b>
							</span>,
							bad('（空着）'),
							good('不做非澳洲市场 / 不做个人报税 / 不自建 OCR'),
						],
					]}
				/>

				<Punchline bg={colors.dark}>
					第 7 条最重要：一人公司死于「什么都想做」。<span style={{ background: colors.red, padding: '0 8px' }}>不做清单没写满 3 条不算过关。</span>
					<span style={{ display: 'block', marginTop: 6, fontSize: 17, fontWeight: 600, color: '#ddd' }}>
						B / C 类（想加入别人 / 还没 idea）也要写一份 —— 写你最想解决的那个问题。W2 组队时这份东西就是你的敲门砖。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
