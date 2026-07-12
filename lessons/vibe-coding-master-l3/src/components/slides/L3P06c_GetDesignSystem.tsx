import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 拿到一套 Design System 的 3 条路
const paths: {
	n: string; title: string; sub: string; color: string;
	items: string[]; when: string;
}[] = [
	{
		n: '1', title: '抓现成资源自己拼', sub: '最快起步', color: colors.blue,
		items: [
			'配色：Coolors / Realtime Colors',
			'字体：Google Fonts（字体配对）',
			'图标：Lucide / Heroicons / Phosphor',
			'组件：shadcn/ui / Flowbite',
			'插画：unDraw / Storyset',
		],
		when: '小项目 / 快速起步。缺点：拼出来容易不统一，最后仍要收口成一套 token。',
	},
	{
		n: '2', title: '直接抄大公司成熟 DS', sub: '文档齐全，最省心', color: colors.green,
		items: [
			'Material Design（Google）',
			'Human Interface（Apple）',
			'Ant Design（阿里）/ Carbon（IBM）',
			'Polaris（Shopify）/ Primer（GitHub）',
			'shadcn/ui · Tailwind UI（最快落地）',
		],
		when: '企业级 / 团队协作。token 现成、组件库直接用，跟 AI 说「用 Ant Design 风格」它秒懂。',
	},
	{
		n: '3', title: '做自己的', sub: '要品牌辨识度', color: colors.red,
		items: [
			'挑一种风格锁死（见上一页）',
			'定 --your-* token：色 / 字 / 间距 / 圆角 / 阴影',
			'写设计宪法 DESIGN.md，让 AI 每次引用',
			'像匠人 --jr-* / UniMate --um-*',
			'👉 这就是本节后半程 Lab 要做的',
		],
		when: '要品牌记忆点、要和竞品不撞脸。成本最高，但护城河也最深。',
	},
];

export default function L3P06c_GetDesignSystem() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<div><Tag bg={colors.yellow} color={colors.black}>怎么搞到一套</Tag></div>
				<Title white size="44px" style={{ marginTop: 12, marginBottom: 4, lineHeight: 1.15 }}>
					拿到一套 Design System 的 <span style={{ color: colors.yellow }}>3 条路</span>
				</Title>
				<p style={{ fontSize: 16.5, color: '#cfd3e6', marginBottom: 20, fontWeight: 600 }}>
					从左到右：越省事 → 越有品牌辨识度。多数人从 2 起步，再往 3 走。
				</p>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
					{paths.map((p, i) => (
						<motion.div
							key={p.n}
							initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 * i }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px', display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
								<div style={{ width: 34, height: 34, background: p.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, color: colors.white }}>{p.n}</div>
								<div>
									<div style={{ fontSize: 18.5, fontWeight: 900, color: colors.black, lineHeight: 1.1 }}>{p.title}</div>
									<div style={{ fontSize: 12.5, fontWeight: 800, color: p.color }}>{p.sub}</div>
								</div>
							</div>
							<ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 5 }}>
								{p.items.map((it) => (
									<li key={it} style={{ fontSize: 13.5, color: '#333', lineHeight: 1.35, fontWeight: 650 }}>{it}</li>
								))}
							</ul>
							<div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px dashed #ccc', fontSize: 12.5, color: '#555', lineHeight: 1.4, fontWeight: 650 }}>
								<b style={{ color: p.color }}>适合：</b>{p.when}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 18, background: '#0b0f1e', border: `2px solid ${colors.yellow}`, boxShadow: shadowSm, padding: '13px 20px', fontSize: 15.5, color: '#dfe3f0', lineHeight: 1.5 }}
				>
					<span style={{ color: colors.yellow, fontWeight: 900, fontFamily: fonts.mono }}>三条路不互斥 · </span>
					最常见的做法 = <b style={{ color: colors.white }}>抄大公司 DS 打底</b>（路 2）+ <b style={{ color: colors.white }}>挑一种风格改配色/圆角</b>（路 3）= 一套你自己的 token。
				</motion.div>
			</Inner>
		</Slide>
	);
}
