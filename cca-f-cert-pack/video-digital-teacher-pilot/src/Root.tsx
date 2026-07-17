import { Composition } from 'remotion';
import { CcarfDigitalTeacher } from './Video';
import {
	CcarfRealTeacherPilot,
	REAL_TEACHER_DURATION_IN_FRAMES
} from './RealTeacherPilot';
import { FPS, HEIGHT, totalDurationInFrames, WIDTH } from './data';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="CcarfDigitalTeacher"
				component={CcarfDigitalTeacher}
				durationInFrames={totalDurationInFrames}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
			/>
			<Composition
				id="CcarfRealTeacherPilot"
				component={CcarfRealTeacherPilot}
				durationInFrames={REAL_TEACHER_DURATION_IN_FRAMES}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
			/>
		</>
	);
};
