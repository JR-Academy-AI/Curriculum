import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border } from '../ui';

export default function S21_HillChart() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.purple}>SHAPE UP · HILL CHART</Tag><Title size="54px" style={{ margin: '15px 0 20px' }}>进度不是百分比，是未知变成已知</Title>
		<div style={{ position: 'relative', width: '100%', height: 300, borderBottom: border }}>
			<div style={{ position: 'absolute', left: '8%', right: '8%', bottom: 0, height: 250, borderRadius: '50% 50% 0 0', background: colors.yellow, border }} />
			{[['收款流程', '30%', colors.red], ['服务说明', '54%', colors.blue], ['交付模板', '78%', colors.green]].map(([label, left, color], index) => <motion.div key={label} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.2 }} style={{ position: 'absolute', left, bottom: index === 0 ? 72 : index === 1 ? 205 : 105, transform: 'translateX(-50%)', textAlign: 'center' }}><div style={{ width: 26, height: 26, borderRadius: '50%', background: color, border, margin: '0 auto 8px' }} /><strong>{label}</strong></motion.div>)}
			<div style={{ position: 'absolute', bottom: -35, left: '10%', fontWeight: 900 }}>上坡：还在找解法</div><div style={{ position: 'absolute', bottom: -35, right: '10%', fontWeight: 900 }}>下坡：知道怎么做</div>
		</div></Inner></Slide>;
}