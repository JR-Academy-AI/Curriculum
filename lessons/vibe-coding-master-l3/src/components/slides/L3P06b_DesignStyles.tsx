import { useState, type CSSProperties, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts } from '../ui';

// ── 每种风格 = 一套 token；右侧用同一张"定价卡"骨架换肤渲染 ──
type Tk = {
	name: string; en: string; rep: string;
	panelBg: string;              // 右侧预览面板底
	cardBg: string; radius: number; border: string; shadow: string;
	ink: string; sub: string; accent: string;
	font?: string; heading?: string;
	btnBg: string; btnColor: string; btnRadius: number; btnBorder?: string; btnShadow?: string; btnUpper?: boolean;
	chipBg: string; chipColor: string; chipRadius?: number;
	dot: string;
	custom?: ReactNode;           // 便当格 / 终端等特殊布局直接给 JSX
};

const STYLES: Tk[] = [
	{
		name: 'Neo-Brutalism', en: '新粗野主义', rep: 'Gumroad · 匠人教学物料', panelBg: '#fff1e7',
		cardBg: '#fff', radius: 0, border: '3px solid #000', shadow: '8px 8px 0 #000',
		ink: '#000', sub: '#333', accent: '#FF5757',
		btnBg: '#FFDE59', btnColor: '#000', btnRadius: 0, btnBorder: '2.5px solid #000', btnShadow: '4px 4px 0 #000',
		chipBg: '#FF5757', chipColor: '#fff', chipRadius: 0, dot: '#000',
	},
	{
		name: '精致软风', en: 'Soft UI', rep: 'Linear · Stripe · 匠人官网', panelBg: 'linear-gradient(135deg,#FFF6EE,#F6EFFB)',
		cardBg: '#FFFCF6', radius: 24, border: '1px solid #efe3d4', shadow: '0 18px 44px rgba(120,90,60,.16)',
		ink: '#231d33', sub: '#7a7288', accent: '#FB6A4A',
		btnBg: 'linear-gradient(90deg,#FF7A4D,#FF4F8F)', btnColor: '#fff', btnRadius: 999, btnShadow: '0 10px 22px rgba(255,90,120,.4)',
		chipBg: 'linear-gradient(90deg,#FF7A4D,#9B6BFF)', chipColor: '#fff', chipRadius: 999, dot: '#FB6A4A',
	},
	{
		name: 'Material', en: 'Material Design', rep: 'Google 全家桶', panelBg: '#eceff3',
		cardBg: '#fff', radius: 10, border: 'none', shadow: '0 6px 18px rgba(0,0,0,.16)',
		ink: '#1a1a1a', sub: '#5f6368', accent: '#6200EE',
		btnBg: '#6200EE', btnColor: '#fff', btnRadius: 6, btnShadow: '0 4px 10px rgba(98,0,238,.4)', btnUpper: true,
		chipBg: '#E8DEF8', chipColor: '#4A148C', chipRadius: 6, dot: '#6200EE',
	},
	{
		name: '扁平', en: 'Flat Design', rep: 'Windows Metro · 早期 iOS', panelBg: '#e9edf1',
		cardBg: '#fff', radius: 4, border: 'none', shadow: 'none',
		ink: '#1f2d3d', sub: '#7089a2', accent: '#2D8CFF',
		btnBg: '#2D8CFF', btnColor: '#fff', btnRadius: 4, dot: '#2D8CFF',
		chipBg: '#2D8CFF', chipColor: '#fff', chipRadius: 4,
	},
	{
		name: '毛玻璃', en: 'Glassmorphism', rep: 'macOS · Windows 11', panelBg: 'linear-gradient(135deg,#7b5cff 0%,#ff5c9e 55%,#ffca5c 100%)',
		cardBg: 'rgba(255,255,255,.22)', radius: 22, border: '1px solid rgba(255,255,255,.5)', shadow: '0 20px 50px rgba(40,20,80,.35)',
		ink: '#fff', sub: 'rgba(255,255,255,.8)', accent: '#fff',
		btnBg: 'rgba(255,255,255,.32)', btnColor: '#fff', btnRadius: 999, btnBorder: '1px solid rgba(255,255,255,.6)',
		chipBg: 'rgba(255,255,255,.3)', chipColor: '#fff', chipRadius: 999, dot: '#fff',
	},
	{
		name: '新拟态', en: 'Neumorphism', rep: '概念风，少落地', panelBg: '#e0e5ec',
		cardBg: '#e0e5ec', radius: 22, border: 'none', shadow: '12px 12px 24px #b8bec9, -12px -12px 24px #ffffff',
		ink: '#4b5566', sub: '#8a94a6', accent: '#6d7f9d',
		btnBg: '#e0e5ec', btnColor: '#5b6473', btnRadius: 14, btnShadow: '6px 6px 12px #b8bec9, -6px -6px 12px #ffffff',
		chipBg: '#e0e5ec', chipColor: '#6d7f9d', chipRadius: 999, dot: '#8a94a6',
	},
	{
		name: '极简 / 瑞士', en: 'Minimalism', rep: 'Apple · MUJI', panelBg: '#fafafa',
		cardBg: '#fff', radius: 0, border: '1px solid #ececec', shadow: 'none',
		ink: '#111', sub: '#999', accent: '#111',
		btnBg: '#111', btnColor: '#fff', btnRadius: 0, dot: '#111',
		chipBg: 'transparent', chipColor: '#111', chipRadius: 0,
	},
	{
		name: '暗黑 / 赛博', en: 'Dark / Cyberpunk', rep: 'Vercel · 开发者工具', panelBg: '#0a0a14',
		cardBg: '#12121f', radius: 10, border: '1px solid #1de9ff', shadow: '0 0 40px rgba(29,233,255,.25)',
		ink: '#eaf6ff', sub: '#8ea0b5', accent: '#1de9ff',
		btnBg: 'transparent', btnColor: '#ff2fb0', btnRadius: 6, btnBorder: '1px solid #ff2fb0', btnShadow: '0 0 16px rgba(255,47,176,.6)',
		chipBg: 'rgba(29,233,255,.15)', chipColor: '#1de9ff', chipRadius: 4, dot: '#ff2fb0',
	},
	{
		name: '黏土风', en: 'Claymorphism', rep: '插画型 landing', panelBg: '#efeafd',
		cardBg: '#ffffff', radius: 30, border: 'none', shadow: '0 18px 34px rgba(140,110,220,.28), inset 0 -6px 12px rgba(140,110,220,.15), inset 0 6px 12px #fff',
		ink: '#5b3fbf', sub: '#9a86d6', accent: '#8B6BFF',
		btnBg: '#8B6BFF', btnColor: '#fff', btnRadius: 22, btnShadow: '0 10px 18px rgba(139,107,255,.45), inset 0 -4px 8px rgba(90,60,200,.5), inset 0 4px 8px rgba(255,255,255,.45)',
		chipBg: '#EDE7FF', chipColor: '#6b4fd0', chipRadius: 999, dot: '#8B6BFF',
	},
	{
		name: '千禧复古', en: 'Y2K / Retro', rep: '潮牌 · 音乐站', panelBg: 'radial-gradient(circle at 30% 20%,#3a2f5e,#0f0c1c)',
		cardBg: 'linear-gradient(135deg,#d6dced,#9aa4bd,#eef2fa)', radius: 14, border: '2px solid #6a7490', shadow: '0 12px 30px rgba(0,0,0,.4)',
		ink: '#2a2f45', sub: '#5a6478', accent: '#ff5cf0', font: fonts.mono, heading: fonts.mono,
		btnBg: 'linear-gradient(90deg,#ff5cf0,#5cf0ff)', btnColor: '#101018', btnRadius: 999, btnBorder: '1.5px solid #fff',
		chipBg: 'linear-gradient(90deg,#5cf0ff,#ff5cf0)', chipColor: '#101018', chipRadius: 999, dot: '#ff5cf0',
	},
	{
		name: '高奢黑金', en: 'Luxury', rep: '奢侈品 · 高端品牌', panelBg: '#0d0d0d',
		cardBg: '#141414', radius: 2, border: '1px solid #C6A15B', shadow: '0 20px 50px rgba(0,0,0,.6)',
		ink: '#F4ECD8', sub: '#9c8f74', accent: '#C6A15B', font: 'Georgia, "Noto Serif SC", serif', heading: 'Georgia, "Noto Serif SC", serif',
		btnBg: 'transparent', btnColor: '#C6A15B', btnRadius: 0, btnBorder: '1px solid #C6A15B',
		chipBg: 'transparent', chipColor: '#C6A15B', chipRadius: 0, dot: '#C6A15B',
	},
	{
		name: '极光渐变', en: 'Aurora / Gradient', rep: 'Stripe · AI 产品', panelBg: 'linear-gradient(120deg,#0b1020,#1a1440)',
		cardBg: 'rgba(255,255,255,.06)', radius: 20, border: '1px solid rgba(255,255,255,.12)', shadow: '0 24px 60px rgba(0,0,0,.5)',
		ink: '#fff', sub: '#b9c0e0', accent: '#8b7bff',
		btnBg: 'linear-gradient(90deg,#6d5cff,#c15cff,#ff5ca8)', btnColor: '#fff', btnRadius: 12, btnShadow: '0 10px 30px rgba(140,90,255,.5)',
		chipBg: 'rgba(139,123,255,.2)', chipColor: '#c9c2ff', chipRadius: 999, dot: '#8b7bff',
	},
	{
		name: '游戏化', en: 'Playful / Gamified', rep: 'Duolingo · UniMate', panelBg: '#FFFEF7',
		cardBg: '#fff', radius: 24, border: '3px solid #1F1B2D', shadow: '0 8px 0 #1F1B2D',
		ink: '#1F1B2D', sub: '#6B6478', accent: '#FF6BA9',
		btnBg: '#3DD9A9', btnColor: '#fff', btnRadius: 999, btnShadow: '0 5px 0 #1a9c78',
		chipBg: '#FFD43B', chipColor: '#1F1B2D', chipRadius: 999, dot: '#8B5CF6',
	},
	{
		name: '孟菲斯', en: 'Memphis', rep: '潮流插画 · 80s 复古', panelBg: '#fde9d9',
		cardBg: '#fff', radius: 8, border: '2.5px solid #111', shadow: '5px 5px 0 #35C4C4',
		ink: '#111', sub: '#555', accent: '#FF4D6D',
		btnBg: '#FFD23F', btnColor: '#111', btnRadius: 8, btnBorder: '2.5px solid #111', btnShadow: '3px 3px 0 #FF4D6D',
		chipBg: '#35C4C4', chipColor: '#111', chipRadius: 999, dot: '#FF4D6D',
	},
	{
		name: '企业蓝', en: 'Corporate SaaS', rep: 'Atlassian · 后台 Dashboard', panelBg: '#f4f6fa',
		cardBg: '#fff', radius: 12, border: '1px solid #e3e8ef', shadow: '0 6px 20px rgba(20,40,80,.10)',
		ink: '#1a2b45', sub: '#64748b', accent: '#2563EB',
		btnBg: '#2563EB', btnColor: '#fff', btnRadius: 8, btnShadow: '0 3px 8px rgba(37,99,235,.35)',
		chipBg: '#E0EDFF', chipColor: '#1D4ED8', chipRadius: 6, dot: '#2563EB',
	},
	{
		name: '拟物', en: 'Skeuomorphism', rep: '旧 iOS · 拟真质感', panelBg: 'linear-gradient(#d9d2c4,#c6bda9)',
		cardBg: 'linear-gradient(#fdfbf5,#e9e2d0)', radius: 14, border: '1px solid #b9ad92', shadow: '0 12px 24px rgba(90,75,45,.38), inset 0 1px 0 #fff',
		ink: '#4a3f28', sub: '#8a7d5e', accent: '#c06a2b',
		btnBg: 'linear-gradient(#5aa0e6,#2f6fc0)', btnColor: '#fff', btnRadius: 10, btnBorder: '1px solid #24528f', btnShadow: 'inset 0 1px 0 rgba(255,255,255,.55), 0 3px 7px rgba(0,0,0,.32)',
		chipBg: 'linear-gradient(#f0c14b,#d99a2b)', chipColor: '#4a3f28', chipRadius: 6, dot: '#c06a2b',
	},
	{
		name: '千禧水光', en: 'Frutiger Aero', rep: 'Windows Vista/7 · 2000s', panelBg: 'linear-gradient(160deg,#c3ecff,#7fc9f0,#4aa3d8)',
		cardBg: 'linear-gradient(#ffffff,#e3f3ff)', radius: 16, border: '1px solid #a9d8f0', shadow: '0 14px 30px rgba(30,90,140,.32), inset 0 1px 0 #fff',
		ink: '#0d3b57', sub: '#3d7599', accent: '#0aa5e6',
		btnBg: 'linear-gradient(#7fe3a0,#2fb36a)', btnColor: '#fff', btnRadius: 999, btnBorder: '1px solid #1e9455', btnShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 5px 12px rgba(30,120,60,.38)',
		chipBg: 'linear-gradient(#8fd8ff,#4aa3d8)', chipColor: '#0d3b57', chipRadius: 999, dot: '#0aa5e6',
	},
	{
		name: '终端复古', en: 'Terminal / CRT', rep: '极客 · 开发者站', panelBg: '#020402',
		cardBg: '#050b05', radius: 0, border: '1px solid #22ff88', shadow: '0 0 34px rgba(34,255,136,.22)',
		ink: '#22ff88', sub: '#12a35a', accent: '#22ff88', font: fonts.mono, heading: fonts.mono,
		btnBg: 'transparent', btnColor: '#22ff88', btnRadius: 0, btnBorder: '1px solid #22ff88',
		chipBg: 'transparent', chipColor: '#22ff88', chipRadius: 0, dot: '#22ff88',
	},
	{
		name: '杂志风', en: 'Editorial', rep: 'Medium · 时尚站', panelBg: '#fbfaf7',
		cardBg: '#fff', radius: 0, border: 'none', shadow: 'none',
		ink: '#111', sub: '#555', accent: '#111', font: 'Georgia, "Noto Serif SC", serif', heading: 'Georgia, "Noto Serif SC", serif',
		btnBg: 'transparent', btnColor: '#111', btnRadius: 0, dot: '#111',
		chipBg: 'transparent', chipColor: '#B4442E', chipRadius: 0,
	},
];

const FEATURES = ['无限项目与团队协作', '一套 token，全站统一', 'AI 生成组件自动对齐'];

function Preview({ t }: { t: Tk }) {
	const serif = (t.heading || '').includes('serif');
	return (
		<div style={{ width: '100%', height: '100%', background: t.panelBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30, overflow: 'hidden' }}>
			<div style={{
				width: 320, background: t.cardBg, borderRadius: t.radius, border: t.border, boxShadow: t.shadow,
				padding: '26px 26px 24px', fontFamily: t.font || fonts.body,
				...(t.cardBg.startsWith('rgba') ? { backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' } as CSSProperties : {}),
			}}>
				<div style={{ display: 'inline-block', background: t.chipBg, color: t.chipColor, borderRadius: t.chipRadius ?? 4, padding: t.chipBg === 'transparent' ? '0' : '4px 12px', fontSize: 12, fontWeight: 800, letterSpacing: serif ? 1 : 0.5, border: t.chipBg === 'transparent' ? `1px solid ${t.chipColor}` : 'none', textTransform: serif ? 'uppercase' : 'none' }}>
					PRO
				</div>
				<div style={{ fontFamily: t.heading || fonts.heading, fontSize: 26, fontWeight: 900, color: t.ink, marginTop: 14, lineHeight: 1.1 }}>Design Pro</div>
				<div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
					<span style={{ fontSize: 34, fontWeight: 900, color: t.accent, fontFamily: t.heading || fonts.heading }}>¥199</span>
					<span style={{ fontSize: 14, color: t.sub, fontWeight: 600 }}>/月</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 9, margin: '16px 0 20px' }}>
					{FEATURES.map((f) => (
						<div key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: t.sub, fontWeight: 600 }}>
							<span style={{ width: 7, height: 7, borderRadius: 999, background: t.dot, flexShrink: 0 }} />{f}
						</div>
					))}
				</div>
				<div style={{
					display: 'block', textAlign: 'center', background: t.btnBg, color: t.btnColor, borderRadius: t.btnRadius,
					border: t.btnBorder || 'none', boxShadow: t.btnShadow || 'none', padding: '12px 0', fontSize: 15, fontWeight: 800,
					textTransform: t.btnUpper ? 'uppercase' : 'none', letterSpacing: t.btnUpper ? 1 : 0, fontFamily: t.font || fonts.body,
				}}>
					开始使用
				</div>
			</div>
		</div>
	);
}

export default function L3P06b_DesignStyles() {
	const [sel, setSel] = useState(0);
	const t = STYLES[sel];
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ justifyContent: 'flex-start', paddingTop: 26, gap: 14 }}>
				<div>
					<div><Tag bg={colors.dark}>选风格 · 别自己发明</Tag></div>
					<Title size="36px" style={{ marginTop: 10, marginBottom: 2, lineHeight: 1.12 }}>
						常见设计风格：<span style={{ background: colors.yellow, padding: '0 10px' }}>点左边看右边长啥样</span>
					</Title>
					<p style={{ fontSize: 14, color: '#555', fontWeight: 600 }}>
						同一张定价卡，只换一套 token → 完全不同的风格。neo-brutalism 只是其中一种（匠人教学物料在用），风格没有高下，关键是<b>选一种锁死</b>。
					</p>
				</div>

				<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
					{/* 左：风格列表（19 种，压紧到一屏，SlideEngine 滚轮翻页所以不靠滚动） */}
					<div style={{ width: 268, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
						{STYLES.map((s, i) => {
							const on = i === sel;
							return (
								<div key={s.name} onClick={() => setSel(i)}
									style={{
										cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 8,
										background: on ? colors.dark : '#fff', color: on ? '#fff' : '#111',
										border: `2px solid ${colors.black}`, boxShadow: on ? '2px 2px 0 #000' : 'none',
										padding: '3px 10px', transform: on ? 'translateX(-1px)' : 'none', lineHeight: 1.3,
									}}>
									<span style={{ fontSize: 12.5, fontWeight: 900 }}>{s.name}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 9, opacity: on ? 0.7 : 0.4, marginLeft: 'auto' }}>{s.en}</span>
								</div>
							);
						})}
					</div>

					{/* 右：大预览 */}
					<div style={{ flex: 1, minWidth: 0, border: `3px solid ${colors.black}`, boxShadow: '6px 6px 0 #000', overflow: 'hidden', position: 'relative' }}>
						<motion.div key={sel} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.28 }} style={{ height: '100%' }}>
							<Preview t={t} />
						</motion.div>
						<div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, background: '#000', color: '#fff', padding: '7px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
							<span style={{ fontSize: 14, fontWeight: 900 }}>{t.name} <span style={{ fontFamily: fonts.mono, fontSize: 11, opacity: 0.65 }}>{t.en}</span></span>
							<span style={{ fontSize: 11.5, opacity: 0.7 }}>{t.rep}</span>
						</div>
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
