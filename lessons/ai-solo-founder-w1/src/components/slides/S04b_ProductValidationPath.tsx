import { motion } from 'framer-motion';
import { Slide, assetPath } from '../ui';

// 产品验证路径：把 15 周课程动作映射到 Idea → PoC → MVP → Paid Evidence → PMF → Scale。
// 内容来源：COURSE_REDESIGN.md W1/W3/W4/W7/W8-W11；视觉稿由用户确认的咨询式信息图风格生成。
export default function S04b_ProductValidationPath() {
	return (
		<Slide bg="#fbf8f3">
			<motion.img
				src={assetPath('product-validation-path.png')}
				alt="Product Validation Path 产品验证路径"
				initial={{ opacity: 0, scale: 0.99 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4 }}
				style={{
					position: 'absolute',
					top: '3%',
					left: '3%',
					width: '94%',
					height: '94%',
					objectFit: 'contain',
					display: 'block',
				}}
			/>

			{/* 图片自带的右上角 logo 由 SlideEngine 的统一品牌层覆盖，避免重复。 */}
			<div
				aria-hidden="true"
				style={{
					position: 'absolute',
					top: '3%',
					right: '3%',
					width: 240,
					height: 108,
					background: '#fbf8f3',
					zIndex: 2,
				}}
			/>
		</Slide>
	);
}
