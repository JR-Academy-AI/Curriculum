import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, SourceNote } from '../DeckTable';

// 「把时间买回来」—— 来源：W1_CASE_STUDIES.md AU-1 Paul Stovell §②、AU-2 Keith Pitt §②、
// §A.9.1 表（(B) 这一类是本轮最大的收获）、AU-10 James Schramko §② 当反例、§A.9.7 落点表。
export default function S14_BuyTimeBack() {
	const cards = [
		{
			who: 'Paul Stovell',
			what: 'Octopus Deploy',
			place: '布里斯班 · 副业期人在伦敦',
			head: '用产品收入去请假',
			body: (
				<>
					2010 年在伦敦一家投行做 contractor 时开始写 Octopus，官网原话是
					<i> “a spare time, nights-and-weekends hobby project”</i>。
					<b>卖出头几个 license key 之后，他用这笔钱从合同工作里请假</b> —— 一次请一两天，专门用来做 Octopus
					（官网原文：used the proceeds to “take occasional days off from his contracting work”）。
				</>
			),
			math: '卖掉 2 个 license = 换回 2 天',
			color: '#FFE9E4',
		},
		{
			who: 'Keith Pitt',
			what: 'Buildkite',
			place: '墨尔本',
			head: '去谈一周上 4 天班',
			body: (
				<>
					第一阶段是纯下班时间：<i>“I would do my day job and come home and work on Buildkite in the evenings.”</i>
					<br />
					第二阶段他把上班时间买了回来：<b>在 PIN Payments 谈成一周上 4 天班，空出来的那一天专门做 Buildkite。</b>
				</>
			),
			math: '减 20% 收入 = 换回一周一天',
			color: '#D9F2E4',
		},
	];

	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '38px 56px 32px' }}>
				<SlideHead
					tag="① 案例的共同解法 · 本轮最大的收获"
					tagBg={colors.red}
					titleSize="clamp(32px, 3vw, 46px)"
					title={
						<>
							「我有全职工作，哪来的时间？」——{' '}
							<span style={{ background: colors.yellow, padding: '0 10px' }}>不是怎么熬，是怎么买</span>
						</>
					}
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
					{cards.map((c, i) => (
						<motion.div
							key={c.who}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
							style={{ border, boxShadow: shadow, background: c.color, padding: '18px 20px' }}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
								<span style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900 }}>{c.who}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 15, color: '#444' }}>
									{c.what} · {c.place}
								</span>
							</div>
							<div
								style={{
									display: 'inline-block',
									background: colors.black,
									color: colors.yellow,
									padding: '4px 12px',
									fontSize: 20,
									fontWeight: 800,
									marginBottom: 10,
								}}
							>
								{c.head}
							</div>
							<p style={{ fontSize: 18, lineHeight: 1.5, fontWeight: 500 }}>{c.body}</p>
							<div
								style={{
									marginTop: 12,
									padding: '8px 12px',
									background: colors.white,
									border: '2px solid #000',
									boxShadow: shadowSm,
									fontFamily: fonts.mono,
									fontSize: 19,
									fontWeight: 700,
								}}
							>
								{c.math}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.5 }}
					style={{ display: 'flex', gap: 16, marginTop: 16 }}
				>
					<div style={{ flex: 1.15, padding: '12px 18px', background: '#2b2b2b', color: colors.white, border }}>
						<b style={{ color: colors.red }}>反例（这条别抄）</b> · James Schramko，悉尼奔驰经销商 GM，白天管 70 号人、年 5000 万澳元的生意，晚上{' '}
						<b style={{ fontFamily: fonts.mono }}>9:30pm–凌晨 3:00</b>，这样过了约 <b>两年半</b>（他本人说的）。
						<span style={{ display: 'block', marginTop: 5, fontSize: 16, color: '#ddd' }}>
							不可持续、也不该推荐。<b>你今天有 AI，不需要拿命换那 5.5 小时。</b>
						</span>
					</div>
					<div style={{ flex: 1, padding: '12px 18px', background: colors.yellow, border, fontSize: 19, fontWeight: 700, lineHeight: 1.4 }}>
						📌 今天的一道题：<br />
						<b>减 20% 收入换回一周一天，你的现金流撑得住几个月？</b>
					</div>
				</motion.div>

				<SourceNote>
					来源 · <b>🟢 一手</b>：octopus.com/company（「用 license 收入从合同工作里请假」时间线）；paulstovell.com/about。
					<b> 🟡 准一手</b>：Valley of Doubt《Taking Buildkite from a Side Project to a Global Company》（4 天班、晚上做）；InnovaBiz 播客 Ep.21（Schramko 的「9:30 till 3:00AM」「two and a half years」，<b>这是他自己说的，无第三方审计</b>）。
					<b> ⚠️ 必须主动声明</b>：Stovell 做副业那两年人在伦敦，不在澳洲；Buildkite 后来融了 VC（$28M / $31M），只有副业那两年可复制。
				</SourceNote>
			</Body>
		</Slide>
	);
}
