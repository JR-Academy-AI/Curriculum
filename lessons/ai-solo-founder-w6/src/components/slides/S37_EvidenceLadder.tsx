import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadowSm } from '../ui';

const steps = ['写完', '自查通过', '他人看懂', '流程跑通', '用户使用 / 付费'];

export default function S37_EvidenceLadder() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.blue}>DOD 证据阶梯</Tag><Title size="56px" style={{ margin: '15px 0 30px' }}>风险越高，证据等级越高</Title><div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, width: '100%' }}>{steps.map((step, index) => <motion.div key={step} initial={{ height: 0, opacity: 0 }} animate={{ height: 80 + index * 40, opacity: 1 }} transition={{ delay: index * 0.12 }} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 12, background: [colors.warmBg, colors.yellow, colors.blue, colors.green, colors.red][index], border, boxShadow: shadowSm, fontSize: 18, fontWeight: 900 }}>{step}</motion.div>)}</div><p style={{ fontSize: 20, marginTop: 28 }}>不是每项都要最高级；要与当前最大风险匹配。</p></Inner></Slide>;
}