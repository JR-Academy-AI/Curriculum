export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

export type LessonScene = {
	audioUrl: string;
	audioDurationSeconds: number;
	kicker: string;
	title: string;
	accent: string;
	mode: 'questions' | 'judgement' | 'readiness';
	captionPages: string[];
};

export const lessonScenes: LessonScene[] = [
	{
		audioUrl:
			'https://jr-image.s3.ap-southeast-2.amazonaws.com/classroom-decks/cert-ccarf-exam-overview-v4/scene-0-action-0.mp3',
		audioDurationSeconds: 21.966916,
		kicker: '第一课 · 免费章',
		title: '开始花钱之前，先问清三件事',
		accent: '#ff5757',
		mode: 'questions',
		captionPages: [
			'欢迎来到 Claude 认证架构师备考课程的第一课。',
			'开始花钱之前，你最该问三件事：这门证到底考什么、怎么才报得上名、值不值得你现在去考。',
			'这一章把丑话、实话和别人不告诉你的坑一次性讲透。',
			'所有结论，都能指到官方来源。'
		]
	},
	{
		audioUrl:
			'https://jr-image.s3.ap-southeast-2.amazonaws.com/classroom-decks/cert-ccarf-exam-overview-v4/scene-0-action-1.mp3',
		audioDurationSeconds: 23.06483,
		kicker: 'CCAR-F · 考试定位',
		title: '它考判断力，不考你背 API 参数',
		accent: '#8b5cf6',
		mode: 'judgement',
		captionPages: [
			'全名是 Claude Certified Architect – Foundations，简称 CCAR-F。',
			'名字里“架构师”三个字是重点。',
			'单 Agent 还是多 Agent？Prompt 提醒，还是代码硬拦？',
			'四个选项看着都能用，考试要你选出最合适的那个。'
		]
	},
	{
		audioUrl:
			'https://jr-image.s3.ap-southeast-2.amazonaws.com/classroom-decks/cert-ccarf-exam-overview-v4/scene-0-action-2.mp3',
		audioDurationSeconds: 19.29585,
		kicker: '报考前 · 真实门槛',
		title: '六个月实战，比看过多少文档更重要',
		accent: '#10b981',
		mode: 'readiness',
		captionPages: [
			'官方目标读者是解决方案架构师。',
			'建议有六个月以上 Claude、Agent SDK、Claude Code 和 MCP 的实战经验。',
			'注意是实战，不是看过文档。',
			'它不要求任何前置证书，准备好了就可以直接挑战。'
		]
	}
];

export const sceneDurations = lessonScenes.map(
	scene => Math.ceil(scene.audioDurationSeconds * FPS) + Math.round(FPS * 0.28)
);

export const totalDurationInFrames = sceneDurations.reduce((sum, duration) => sum + duration, 0);
