import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// ② SoT 七个字段 —— 本节只锁定可验证的客户 Job 假设，不冒充完成客户验证。
const num = (n: number) => <span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 22 }}>{n}</span>;
const bad = (t: string) => <span style={{ color: '#9b1c1c' }}>{t}</span>;
const good = (t: string) => <b>{t}</b>;

export default function S16_SoTFields() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '30px 56px 24px' }}>
				<SlideHead
					tag="SoT · 第 3 步 / 6 · 拆结构"
					tagBg={colors.red}
					titleSize="clamp(29px, 2.55vw, 40px)"
					title="写一页生意说明，只回答七个普通问题"
					sub="先别写商业术语。把下面七句话补完整，别人就能听懂你想做什么。"
				/>

				<DeckTable
					fontSize={17}
					headFontSize={15}
					cellPad="8px 13px"
					cols={[
						{ label: '#', w: '50px', align: 'center' },
						{ label: '字段', w: '1fr' },
						{ label: '❌ 坏例子', w: '1fr' },
						{ label: '✅ 写到什么程度才够用', w: '2.35fr' },
					]}
					rows={[
						[num(1), <b>你想服务谁？</b>, bad('所有中小企业'), good('例如：墨尔本 5–20 人的移民中介事务所')],
						[num(2), <b>他们最麻烦的事是什么？</b>, bad('效率低'), good('顾问反复追材料、回答进度，重要信息散在微信、邮件和表格里')],
						[num(3), <b>他们现在怎么处理？</b>, bad('人工处理'), good('具体写出用什么工具、找谁帮忙、哪一步最费时间或最容易出错')],
						[num(4), <b>你先交付什么结果？</b>, bad('全面提效'), good('先把缺失材料整理成一份顾问可以检查的清单')],
						[num(5), <b>AI 做什么，人做什么？</b>, bad('交给 AI 全自动'), good('AI 整理和起草；顾问检查、判断，并对客户负责')],
						[num(6), <b>下周去验证什么？</b>, bad('大家会喜欢'), good('找 5 位目标客户，确认问题是否真实、是否愿意试')],
						[
							num(7),
							<span style={{ background: colors.yellow, padding: '2px 6px' }}><b>这阶段明确不做什么？</b></span>,
							bad('（空着）'),
							good('不代替持牌判断、不自动发给客户、不同时服务所有行业'),
						],
					]}
				/>

				<Punchline bg={colors.dark}>
					写完后，别人应该能用一句话复述：<span style={{ background: colors.red, padding: '0 8px' }}>你帮谁，解决什么，先交付什么。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
