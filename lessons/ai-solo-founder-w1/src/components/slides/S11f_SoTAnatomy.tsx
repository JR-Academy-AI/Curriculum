import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const BUSINESS = ['客户', '问题场景', '现有做法', '方案缺口', '初步交付', '验证动作'];
const CONTROL = ['版本 / 日期 / 负责人', '事实 · 假设 · 待验证', '证据来源', '本周最大未知', '明确不做什么', '必须人工确认的边界'];

export default function S11f_SoTAnatomy() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="一页 SoT 的结构" tagBg={colors.red} title="六个业务字段，加上一层项目控制" sub="前半页说清现在相信什么；后半页说清依据、边界和下一步。" />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
					<div style={{ border, boxShadow: shadow, background: colors.white, padding: '22px 24px' }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900 }}>BUSINESS CORE · 业务核心</div><div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>{BUSINESS.map((item, index) => <div key={item} style={{ border: '2px solid #111', background: index % 2 ? '#FFF6D6' : '#FFE9E4', padding: '10px 12px', fontSize: 18, fontWeight: 850 }}>0{index + 1} · {item}</div>)}</div></div>
					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '22px 24px' }}><div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 900 }}>CONTROL LAYER · 管理层</div><div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>{CONTROL.map((item, index) => <div key={item} style={{ border: '2px solid #fff', background: index === 4 ? colors.red : 'transparent', padding: '10px 12px', fontSize: 17, lineHeight: 1.3, fontWeight: 800 }}>{item}</div>)}</div></div>
				</div>
				<Punchline>没有管理层，它只是一张想法卡；加上管理层，它才能控制任务、AI 和版本变化。</Punchline>
			</Body>
		</Slide>
	);
}
