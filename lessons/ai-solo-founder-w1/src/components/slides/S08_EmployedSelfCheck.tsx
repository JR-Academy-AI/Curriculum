import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, DeckTable } from '../DeckTable';

// 「创业公司早知道」B2 · 在职创业的三个自查（+ 签证一条）
// 🚨 全页定位 = 风险自查清单，让学员回去翻自己的合同。
//   不引法条、不写「澳洲法律规定…」、不给「这样做就没事」的结论、不替任何人下判断。
//   本页没有任何数据来源可引 —— 因为它不陈述任何事实，只列「你该去问自己的问题」。

const n = (i: number) => (
	<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 24 }}>{i}</span>
);

const q = (t: string) => <b style={{ fontSize: 19 }}>{t}</b>;

export default function S08_EmployedSelfCheck() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '32px 60px 26px' }}>
				<SlideHead
					tag="§1.5 · 创业公司早知道（2/3）· ⚠️ 今晚回去做"
					tagBg={colors.red}
					title="你们全是在职的 —— 有三样东西，今晚回去翻一遍"
					titleSize="clamp(26px, 2.35vw, 38px)"
					sub="这一页不给答案，只给你三个必须自己去查清楚的问题。趁现在查，比 W7 收到钱之后才发现好。"
				/>

				<DeckTable
					fontSize={18}
					headFontSize={16}
					cellPad="11px 15px"
					cols={[
						{ label: '#', w: '56px', align: 'center' },
						{ label: '翻哪份文件', w: '1fr' },
						{ label: '看哪一类条款', w: '1.1fr' },
						{ label: '你要能回答的问题', w: '2fr', accent: '#FFE9E4' },
					]}
					rowBg={[undefined, undefined, undefined, '#EDE9FE']}
					rows={[
						[
							n(1),
							<b>你的雇佣合同</b>,
							'知识产权 / IP 归属',
							q('你下班后、用自己设备做出来的东西，按合同归谁？条款覆盖的范围是只限工作时间和公司资源，还是写得更宽？'),
						],
						[
							n(2),
							<span>
								<b>雇佣合同 + 员工手册</b>
								<span style={{ display: 'block', fontSize: 15, color: '#555' }}>（手册常常单独一份，别只看合同）</span>
							</span>,
							'对外兼职 / 第二职业',
							q('有没有要求你在做第二份工作 / 对外经营前，先书面申报或拿到批准？流程是什么？'),
						],
						[
							n(3),
							<b>你的雇佣合同</b>,
							'竞业 / 利益冲突',
							q('你打算做的方向，跟你主雇主的业务重不重叠？合同里的竞业和利益冲突条款是怎么写的？'),
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 19 }}>+</span>,
							<b>签证持有者额外一条</b>,
							'工作权限 / 自雇限制',
							q('你的签证条件对「工作权限」和「自雇 / 经营生意」有没有限制？不确定就去问注册移民代理，别自己推测。'),
						],
					]}
				/>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.6 }}
					style={{
						marginTop: 14,
						border,
						boxShadow: shadow,
						background: colors.red,
						color: colors.white,
						padding: '15px 22px',
					}}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>
						🚨 这不是法律意见
					</div>
					<div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.5 }}>
						这一页是<u>提醒你去看自己的合同、去问专业人士</u>，不是法律建议。我们不看你的合同，也不替你判断你的情况。
						<span style={{ display: 'block', marginTop: 6, fontSize: 19, fontWeight: 600 }}>
							有疑问 → 雇佣法律师 / 注册移民代理 / 持牌 CPA。别在班级群里互相「我觉得应该没事」。
						</span>
					</div>
				</motion.div>

				<div
					style={{
						marginTop: 12,
						display: 'flex',
						gap: 14,
						fontSize: 16,
						lineHeight: 1.45,
					}}
				>
					<div style={{ flex: 1.25, padding: '11px 16px', background: colors.white, border: '3px solid #000' }}>
						<b>今晚 10 分钟就能做完：</b>把合同 PDF 打开，搜这几个词看看有没有 ——
						<span style={{ fontFamily: fonts.mono, fontWeight: 700 }}>
							{' '}intellectual property · outside / secondary employment · conflict of interest · non-compete
						</span>
						。搜不到不代表没有，不确定就问专业人士。
					</div>
					<div style={{ flex: 1, padding: '11px 16px', background: '#FFF6D6', border: '3px solid #000' }}>
						<b>为什么今天讲：</b>这三条会直接影响你等下写在 SoT 里的方向，也会影响下周组队时你能承诺什么。
					</div>
				</div>
			</Body>
		</Slide>
	);
}
