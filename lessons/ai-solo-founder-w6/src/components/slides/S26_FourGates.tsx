import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const gates = [['1', 'GOAL', '服务本周结果？'], ['2', 'RISK', '解除阻塞或最大未知？'], ['3', 'RICE', '同类候选里更值？'], ['4', 'CAPACITY', '真实日历装得下？']];

export default function S26_FourGates() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>PRIORITY FUNNEL</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>越靠前的门，否决权越大</Title><Grid cols={4} gap={16}>{gates.map(([number, title, body], index) => <motion.div key={title} initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }}><CardSm bg={[colors.red, colors.orange, colors.blue, colors.green][index]} style={{ minHeight: 190 }}><div style={{ fontSize: 42, fontWeight: 900 }}>{number}</div><h3 style={{ fontSize: 22, margin: '8px 0' }}>{title}</h3><p style={{ fontSize: 18 }}>{body}</p></CardSm></motion.div>)}</Grid></Inner></Slide>;
}