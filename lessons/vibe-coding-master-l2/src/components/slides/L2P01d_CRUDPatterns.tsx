import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../ui';
import { motion } from 'framer-motion';

const pages = [
	{ key: 'list', title: 'List Page', zh: '列表页', note: '入口 / 搜索 / 筛选 / 批量操作', color: colors.blue, x: 6, y: 36 },
	{ key: 'create', title: 'Create Page', zh: '新建页', note: '从列表进入，提交后回列表或详情', color: colors.green, x: 36, y: 8 },
	{ key: 'detail', title: 'Detail Page', zh: '详情页', note: '查看单条记录，进入编辑或删除', color: colors.purple, x: 40, y: 58 },
	{ key: 'edit', title: 'Edit Page', zh: '编辑页', note: '从详情进入，保存后回详情', color: colors.orange, x: 70, y: 18 },
	{ key: 'delete', title: 'Delete Confirm', zh: '删除确认', note: '危险动作，确认后回列表', color: colors.red, x: 72, y: 66 },
];

const arrows = [
	{ from: 'List', to: 'Create', text: 'New' },
	{ from: 'Create', to: 'List / Detail', text: 'Submit' },
	{ from: 'List', to: 'Detail', text: 'Open item' },
	{ from: 'Detail', to: 'Edit', text: 'Edit' },
	{ from: 'Edit', to: 'Detail', text: 'Save' },
	{ from: 'Detail', to: 'Delete', text: 'Delete' },
	{ from: 'Delete', to: 'List', text: 'Confirm' },
];

function PageNode({ page, delay }: { page: typeof pages[number]; delay: number }) {
	return (
		<motion.div
			{...springIn}
			transition={{ ...springIn.transition, delay }}
			style={{
				position: 'absolute',
				left: `${page.x}%`,
				top: `${page.y}%`,
				width: 260,
				background: colors.white,
				border,
				boxShadow: shadow,
				padding: '14px 16px',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
				<div style={{ width: 36, height: 36, background: page.color, border, flexShrink: 0 }} />
				<div>
					<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, color: colors.black }}>{page.title}</div>
					<div style={{ fontSize: 14, fontWeight: 900, color: page.color }}>{page.zh}</div>
				</div>
			</div>
			<div style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.35, color: '#374151', fontWeight: 750 }}>{page.note}</div>
		</motion.div>
	);
}

function ArrowList() {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
			{arrows.map((a, i) => (
				<motion.div
					key={`${a.from}-${a.to}`}
					initial={{ opacity: 0, x: 18 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.18 + i * 0.055 }}
					style={{ background: i % 2 === 0 ? colors.yellow : colors.white, border, padding: '8px 11px', fontSize: 14, fontWeight: 900, color: colors.black }}
				>
					<span style={{ fontFamily: fonts.mono, color: colors.red }}>{a.text}</span>
					<span style={{ marginLeft: 8 }}>{a.from} → {a.to}</span>
				</motion.div>
			))}
		</div>
	);
}

export default function L2P01d_CRUDPatterns() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 20 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>拆产品 · 第二刀</Tag>
					<Title size="44px" style={{ marginTop: 12 }}>
						CRUD 不是 5 张孤立页面，<span style={{ color: colors.red }}>要画出页面之间的逻辑关系</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.28fr 0.72fr', gap: 20, alignItems: 'stretch', minHeight: 0 }}>
					<motion.div
						initial={{ opacity: 0, scale: 0.985 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.35, delay: 0.08 }}
						style={{ position: 'relative', minHeight: 510, background: '#f8fafc', border, boxShadow: shadow, overflow: 'hidden' }}
					>
						<svg viewBox="0 0 1000 510" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
							<defs>
								<marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
									<path d="M0,0 L0,6 L9,3 z" fill="#10162f" />
								</marker>
							</defs>
							<path d="M220 205 C300 95 350 80 410 83" stroke="#10162f" strokeWidth="4" strokeDasharray="10 8" fill="none" markerEnd="url(#arrow)" />
							<path d="M540 105 C485 170 355 195 245 220" stroke="#10162f" strokeWidth="4" fill="none" markerEnd="url(#arrow)" />
							<path d="M220 240 C300 280 360 320 430 330" stroke="#10162f" strokeWidth="4" fill="none" markerEnd="url(#arrow)" />
							<path d="M580 318 C640 235 705 172 760 125" stroke="#10162f" strokeWidth="4" strokeDasharray="10 8" fill="none" markerEnd="url(#arrow)" />
							<path d="M818 160 C755 238 665 298 585 330" stroke="#10162f" strokeWidth="4" fill="none" markerEnd="url(#arrow)" />
							<path d="M590 355 C665 365 720 372 790 372" stroke="#10162f" strokeWidth="4" fill="none" markerEnd="url(#arrow)" />
							<path d="M798 405 C590 500 310 455 210 290" stroke="#10162f" strokeWidth="4" strokeDasharray="10 8" fill="none" markerEnd="url(#arrow)" />
						</svg>

						{pages.map((p, i) => <PageNode key={p.key} page={p} delay={0.15 + i * 0.08} />)}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 28 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.16 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '20px 22px', display: 'flex', flexDirection: 'column' }}
					>
						<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.yellow }}>页面关系要写进 PRD</div>
						<div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.45, color: '#d1d5db', fontWeight: 760 }}>
							只写“做 CRUD”还不够。你要告诉 agent：从哪里进、点什么跳、成功后回哪、失败怎么处理。
						</div>
						<div style={{ marginTop: 16 }}>
							<ArrowList />
						</div>
						<div style={{ marginTop: 'auto', background: colors.red, border: `3px solid ${colors.white}`, padding: '13px 15px', fontSize: 17, fontWeight: 900, lineHeight: 1.35 }}>
							PRD 句式：用户在 List 点 New 进入 Create，提交成功后回 Detail；删除必须二次确认，成功后回 List。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
