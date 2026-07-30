import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_RealQuestion';
import S03 from './components/slides/S03_ValueRepriced';
import S04 from './components/slides/S04_TaskBasedStudent';
import S05 from './components/slides/S05_ProblemBasedStudent';
import S06 from './components/slides/S06_ExperienceIsNotValue';
import S07 from './components/slides/S07_ProblemPortfolio';
import S08 from './components/slides/S08_HowToUseAI';
import S09 from './components/slides/S09_WhyVdar';
import S10 from './components/slides/S10_OpportunitySystem';
import S11 from './components/slides/S11_ThreeActions';
import S12 from './components/slides/S12_Closing';

export default function App() {
	return (
		<SlideEngine>
			{/* CH 0 · 价值重估 */}
			<S01 />
			<S02 />
			<S03 />

			{/* CH 1 · 从任务进入问题 */}
			<S04 />
			<S05 />
			<S06 />
			<S07 />
			<S08 />

			{/* CH 2 · 工具、系统与行动 */}
			<S09 />
			<S10 />
			<S11 />
			<S12 />
		</SlideEngine>
	);
}
