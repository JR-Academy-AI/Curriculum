import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// ② SoT 七个字段 —— 把两个课堂模拟案例抽象成学员可直接填写的模板。
const num = (n: number) => <span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 22 }}>{n}</span>;
const bad = (t: string) => <span style={{ color: '#9b1c1c' }}>{t}</span>;
const good = (t: string) => <b>{t}</b>;

export default function S16_SoTFields() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '36px 56px 30px' }}>
				<SlideHead
					tag="SoT · 第 3 步 / 6 · 拆结构"
					tagBg={colors.red}
					titleSize="clamp(30px, 2.7vw, 42px)"
					title="七个字段不是表格作业，是一条因果链"
					sub="客户 → 现有代价 → AI / 人的分工 → 你的优势 → 收费假设 → 6 周证据 → 不做边界。前一格不清，后一格都是猜。"
				/>

				<DeckTable
					fontSize={18}
					headFontSize={16}
					cellPad="9px 14px"
					cols={[
						{ label: '#', w: '52px', align: 'center' },
						{ label: '字段', w: '1fr' },
						{ label: '❌ 坏例子', w: '1.05fr' },
						{ label: '✅ 写到什么程度才够用', w: '2.2fr' },
					]}
					rows={[
						[num(1), <b>服务谁</b>, bad('中小企业'), good('窄到你现在能列出 5 个真实访谈对象')],
						[
							num(2),
							<b>他现在怎么解决</b>,
							bad('效率低'),
							good('写清对方正在用的人、工具、时间或金钱成本'),
						],
						[
							num(3),
							<b>我用 AI 做掉哪一段</b>,
							bad('用 AI 提效'),
							good('明确输入 → AI 输出 → 哪一步必须由人批准'),
						],
						[
							num(4),
							<b>不公平优势</b>,
							bad('我懂技术'),
							good('行业经验 / 独有数据 / 渠道 / 信任，至少占一项'),
						],
						[
							num(5),
							<b>收钱形态假设</b>,
							bad('订阅制'),
							good('先卖什么付费试点；谁付款；按项目、结果还是月费'),
						],
						[
							num(6),
							<b>6 周后可验证的证据</b>,
							bad('有用户喜欢'),
							good('访谈数 + 真实资料试跑数 + 至少 1 个付费证据'),
						],
						[
							num(7),
							<span style={{ background: colors.yellow, padding: '2px 6px' }}>
								<b>不做什么（必须写满 3 条）</b>
							</span>,
							bad('（空着）'),
							good('明确不服务的人 / 不做的功能 / 暂时不碰的渠道'),
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
