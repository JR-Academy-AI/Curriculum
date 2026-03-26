import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Problem';
import S03 from './components/slides/S03_WhatIs';
import S04 from './components/slides/S04_WhoFor';
import S05 from './components/slides/S05_Curriculum';
import S06 from './components/slides/S06_Scenarios';
import S07 from './components/slides/S07_Tools';
import S08 from './components/slides/S08_TeacherAI';
import S09 from './components/slides/S09_WeeklyFlow';
import S10 from './components/slides/S10_Competitors';
import S11 from './components/slides/S11_Pricing';
import S12 from './components/slides/S12_Journey';
import S13 from './components/slides/S13_CTA';

export default function App() {
	return (
		<SlideEngine>
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<S05 />
			<S06 />
			<S07 />
			<S08 />
			<S09 />
			<S10 />
			<S11 />
			<S12 />
			<S13 />
		</SlideEngine>
	);
}
