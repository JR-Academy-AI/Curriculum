import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const FILES = [
	['Sponsorship_Deck_FINAL.docx', 'Gold · $5,000'],
	['Sponsorship_Deck_FINAL_FINAL.docx', 'Gold · $6,500'],
	['Sponsor_Price_NEW.xlsx', 'Gold · $7,500'],
	['Deck_USE_THIS_v8.pptx', '权益仍是旧版'],
];

export default function S11b_SoTProjectControl() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '30px 55px 22px' }}>
				<SlideHead
					tag="CASE · 大型活动 Sponsorship Deck"
					tagBg={colors.red}
					title="价格改一次，就多一份 final-final：维护很快变成灾难"
					titleSize="clamp(29px, 2.6vw, 41px)"
					sub="赞助价格、权益、剩余名额、Logo 和联系人不断变化；文件名不能告诉人或 LLM 哪一版算数。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.92fr 0.25fr 1.12fr', gap: 17, alignItems: 'stretch' }}>
					<div style={{ border, boxShadow: shadow, background: colors.white, padding: '16px 17px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.red }}>GOOGLE DRIVE · 版本灾难</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: '#666' }}>4 个“当前版”</div>
						</div>
						<div style={{ marginTop: 11, display: 'grid', gap: 8 }}>
							{FILES.map(([name, value], index) => (
								<motion.div key={name} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.34, delay: 0.07 * index }} style={{ border: '2px solid #111', background: ['#FFE6DF', '#FFF2B8', '#E7E0FF', '#DCEBFF'][index], padding: '9px 11px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 900 }}>{name}</div>
									<div style={{ marginTop: 3, fontSize: 15.5, fontWeight: 850, color: index < 3 ? colors.red : '#333' }}>{value}</div>
								</motion.div>
							))}
						</div>
						<div style={{ marginTop: 9, padding: '8px 11px', background: colors.dark, color: colors.white, fontSize: 14, lineHeight: 1.35, fontWeight: 750 }}>群聊又补了一句：“Gold 现在只剩 2 个。”—— 但没有写回任何文件。</div>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
						<motion.div initial={{ scale: 0.72, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.42, delay: 0.36 }} style={{ width: 74, height: 74, display: 'grid', placeItems: 'center', border, boxShadow: shadowSm, background: colors.red, color: colors.white, fontFamily: fonts.heading, fontSize: 31, fontWeight: 950 }}>AI</motion.div>
						<div style={{ marginTop: 10, fontFamily: fonts.mono, fontSize: 27, fontWeight: 900 }}>→</div>
						<div style={{ marginTop: 3, fontSize: 13.5, lineHeight: 1.35, fontWeight: 850 }}>它该相信<br />哪一个价格？</div>
					</div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.42 }} style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '17px 19px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.yellow }}>SPONSORSHIP SoT · v1.8</div>
							<div style={{ border: '2px solid #fff', padding: '3px 8px', fontFamily: fonts.mono, fontSize: 11, fontWeight: 900 }}>CURRENT</div>
						</div>
						<div style={{ marginTop: 13, display: 'grid', gap: 8 }}>
							{[
								['Gold 价格', '$7,500（课堂示例）'],
								['包含权益', '展位 · 舞台鸣谢 · 4 张通行证'],
								['剩余名额', '2 个'],
								['负责人', '商务负责人审核后才可对外发送'],
								['素材状态', 'Logo / 场地图 / 联系人均为当前版'],
							].map(([label, value]) => (
								<div key={label} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 10, paddingBottom: 7, borderBottom: '1px solid rgba(255,255,255,0.25)' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, fontWeight: 900 }}>{label}</div>
									<div style={{ fontSize: 14.5, lineHeight: 1.3, fontWeight: 750 }}>{value}</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				<div style={{ marginTop: 13, border, boxShadow: shadowSm, background: colors.red, color: colors.white, padding: '10px 16px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 22, alignItems: 'center' }}>
					<div style={{ fontSize: 18, lineHeight: 1.35, fontWeight: 900 }}>正确做法：价格和权益只改 SoT；Word、PPT、邮件和 AI 文案都从当前 SoT 重新生成。</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 850 }}>课堂合成案例<br />金额仅用于演示版本冲突</div>
				</div>
			</Body>
		</Slide>
	);
}
