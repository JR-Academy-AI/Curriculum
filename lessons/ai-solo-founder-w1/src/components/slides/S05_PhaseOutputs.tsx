import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// 四个 Phase 的出关物 —— 来源：../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md
//   「全课总览」表（Phase / 周 / 主题 / 出关物）+ 每个 Phase 标题下那句 blockquote 定位。
const ph = (no: string, name: string, bg: string) => (
	<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		<span
			style={{
				fontFamily: fonts.mono,
				fontWeight: 700,
				fontSize: 18,
				background: bg,
				border: '2px solid #000',
				padding: '2px 9px',
			}}
		>
			{no}
		</span>
		<b style={{ fontSize: 19 }}>{name}</b>
	</span>
);

const wk = (t: string) => (
	<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 18 }}>{t}</span>
);

const out = (t: string) => <b style={{ fontSize: 20 }}>{t}</b>;

export default function S05_PhaseOutputs() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '40px 56px 34px' }}>
				<SlideHead
					tag="§1 · 出关物"
					tagBg={colors.orange}
					title="每个 Phase 结束，你手上必须多出一样东西"
					titleSize="clamp(30px, 2.7vw, 42px)"
					sub="不是「学完了」，是「多出一个别人能看到、能用、能查的东西」。"
				/>

				<DeckTable
					fontSize={19}
					cellPad="13px 16px"
					cols={[
						{ label: 'Phase', w: '1.15fr' },
						{ label: '周', w: '150px' },
						{ label: '这一段在干什么', w: '1.7fr' },
						{ label: '出关物 · 走出这一段你手上有什么', w: '1.55fr', accent: '#FFE9E4' },
					]}
					rows={[
						[
							ph('1', 'AI Enable Business', '#FFE9E4'),
							wk('W1–W7'),
							'建成一个验证过、AI 化的产品，立起品牌，并刷脸卖出第一单',
							out('被付过一次钱的 AI 化产品 + 品牌官网'),
						],
						[
							ph('2', 'Go To Market', '#DCEBFF'),
							wk('W8–W11'),
							'把刷脸首单变成一台不靠刷脸、会自己复利的获客机器',
							out('会复利的获客机器'),
						],
						[
							ph('3', 'Australia Operations', '#D9F2E4'),
							wk('W12–W13'),
							'全球独家护城河：AI 一人创业 × 澳洲税务 / Grant',
							out('合法 · 财务自动 · 能退税'),
						],
						[
							ph('4', 'Founder Club', '#EDE9FE'),
							wk('W14–W15+'),
							'从「有个在跑的生意」到「能 pitch 给任何人、能融到钱、能被看见」',
							out('毕业入会，进入创业者网络'),
						],
					]}
				/>

				<Punchline bg={colors.red}>
					这四样是<u>串起来</u>的：没有 Phase 1 那笔真钱，Phase 2 的获客机器没东西可卖；没有 Phase 2 的真实数据，Phase 4 的 pitch 只能靠讲故事。
					<span style={{ display: 'block', marginTop: 6, fontSize: 18, fontWeight: 600, color: colors.yellow }}>
						所以每个 Phase 的出关物不是「加分项」，是下一段的原料。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
