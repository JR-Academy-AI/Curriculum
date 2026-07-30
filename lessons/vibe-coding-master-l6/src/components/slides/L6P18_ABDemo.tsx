import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 数字是示意性占位 —— 老师投屏时换成自己课前真实跑出来的数据（见蓝图 §14 素材纪律）
const RESULTS = [
	{ k: '跑了多久', a: '41 分钟', b: '23 分钟' },
	{ k: '改了几个文件', a: '11 个', b: '3 个' },
	{ k: '最后验证', a: '红', b: '绿' },
	{ k: '进度幻觉', a: '出现了', b: '没有' },
];

// 定位演示 + A/B 预录对照
export default function L6P18_ABDemo() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
						<Tag bg={colors.orange}>② 怎么定位</Tag>
						<Tag bg={colors.dark}>老师预录 · 投屏</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 18 }}>
						同一个任务，两种交法
					</Title>

					<div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
						{/* A 组 */}
						<motion.div
							initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.12 }}
							style={{ flex: 1, border, boxShadow: shadowSm, background: colors.white }}
						>
							<div style={{ background: colors.red, color: colors.white, padding: '8px 14px', borderBottom: border, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.5 }}>
								A · 裸交
							</div>
							<div style={{ padding: '14px 16px', fontSize: 16, lineHeight: 1.65, minHeight: 132 }}>
								帮我把这个项目里的 xxx 重构一下，
								<span style={{ background: colors.yellow, padding: '1px 5px', fontWeight: 800 }}>顺便该修的都修一修</span>。
							</div>
						</motion.div>

						{/* B 组 */}
						<motion.div
							initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.26 }}
							style={{ flex: 1.45, border, boxShadow: shadow, background: colors.white }}
						>
							<div style={{ background: colors.green, padding: '8px 14px', borderBottom: border, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.5 }}>
								B · 带任务交付单
							</div>
							<div style={{ padding: '14px 16px', fontSize: 14.5, lineHeight: 1.75, minHeight: 132 }}>
								<div><strong style={{ color: colors.blue }}>目标：</strong>把 xxx 重构成 yyy。</div>
								<div><strong style={{ color: colors.green }}>边界：</strong>只动 <span style={{ fontFamily: fonts.mono }}>src/xxx/</span>，不碰配置、不顺手改别的模块、不加新抽象。</div>
								<div><strong style={{ color: colors.orange }}>验证点：</strong>每个文件 typecheck 过；全部改完 build 过。</div>
								<div><strong style={{ color: colors.purple }}>里程碑：</strong>先给我计划，我确认后再动手。</div>
							</div>
						</motion.div>
					</div>

					{/* 结果对照 */}
					<motion.div
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.42 }}
						style={{ display: 'flex', border, boxShadow: shadow, background: colors.white, marginBottom: 16 }}
					>
						{RESULTS.map((r, i) => (
							<div key={r.k} style={{
								flex: 1, padding: '12px 14px',
								borderRight: i < RESULTS.length - 1 ? '2px solid #eee' : 'none',
								textAlign: 'center',
							}}>
								<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: '#999', letterSpacing: 1, fontWeight: 700, marginBottom: 8 }}>
									{r.k}
								</div>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
									<span style={{ fontSize: 17, fontWeight: 800, color: colors.red }}>{r.a}</span>
									<span style={{ color: '#ccc', fontWeight: 900 }}>/</span>
									<span style={{ fontSize: 17, fontWeight: 800, color: '#2d7a1f' }}>{r.b}</span>
								</div>
							</div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 22px' }}
					>
						<div style={{ fontSize: 18.5, lineHeight: 1.6 }}>
							A 那句话里的「顺便该修的都修一修」——
							<span style={{ background: colors.yellow, color: colors.black, padding: '2px 10px', fontWeight: 800 }}>
								就是机制④ 目标漂移的许可证。
							</span>
							<span style={{ color: 'rgba(255,255,255,0.6)', marginLeft: 8, fontSize: 16 }}>是你自己发的。</span>
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
