import { Img } from 'remotion';
import jrAcademyLogo from '../../../../jr-omni/jr-academy-brand/assets/logo/logo-zh-full.svg';

export const BrandLogo: React.FC = () => (
	<Img
		src={jrAcademyLogo}
		style={{
			width: 255,
			height: 60,
			objectFit: 'contain',
			objectPosition: 'left center'
		}}
	/>
);
