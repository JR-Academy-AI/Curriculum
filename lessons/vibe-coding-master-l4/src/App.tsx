import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第四节课 =====
// 从 PRD 到 Production：Scaffold / GitHub Actions / GitHub Pages / Vercel（120 min 动手工作坊）
// 三层 SoT → 交付地图 → 输入检查 → PRD→Scaffold→本地绿 → GitHub → CI+红灯 → Pages → Vercel(Preview/Prod) → 验收 → 收尾。
// 内容 SoT / 逐页 spec 见 PRD.md。

import L4P00 from './components/slides/L4P00_Cover';
import L4P01 from './components/slides/L4P01_ThreeSoT';
import L4P02 from './components/slides/L4P02_LocalIsNotDelivery';
import L4P03 from './components/slides/L4P03_Pipeline';
import L4P04 from './components/slides/L4P04_InputCheck';
import L4P05 from './components/slides/L4P05_ScaffoldNotProduct';
import L4P06 from './components/slides/L4P06_ExtractArch';
import L4P07 from './components/slides/L4P07_ScaffoldPrompt';
import L4P08 from './components/slides/L4P08_LocalGate';
import L4P08b from './components/slides/L4P08b_VibeWay';
import L4P09 from './components/slides/L4P09_GitHubSoT';
import L4P10 from './components/slides/L4P10_WhatCIProtects';
import L4P11 from './components/slides/L4P11_MinimalCI';
import L4P12 from './components/slides/L4P12_RedLightExp';
import L4P13 from './components/slides/L4P13_PagesPipeline';
import L4P14 from './components/slides/L4P14_PagesPitfalls';
import L4P15 from './components/slides/L4P15_VercelEnvs';
import L4P16 from './components/slides/L4P16_PRPreview';
import L4P16b from './components/slides/L4P16b_PRBody';
import L4P17 from './components/slides/L4P17_MergeProd';
import L4P18 from './components/slides/L4P18_AcceptChecklist';
import L4P19 from './components/slides/L4P19_Summary';

export default function App() {
	return (
		<SlideEngine>
			{/* 开场：手里有什么 + 问题 */}
			<L4P00 />
			<L4P01 />
			<L4P02 />

			{/* 交付地图 + 输入检查 */}
			<L4P03 />
			<L4P04 />

			{/* PRD → Scaffold → 本地绿色基线 */}
			<L4P05 />
			<L4P06 />
			<L4P07 />
			<L4P08 />

			{/* 交付段锚点：不敲命令，指挥 Agent */}
			<L4P08b />

			{/* GitHub = 项目 SoT */}
			<L4P09 />

			{/* GitHub Actions CI + 红灯实验 */}
			<L4P10 />
			<L4P11 />
			<L4P12 />

			{/* GitHub Pages */}
			<L4P13 />
			<L4P14 />

			{/* Vercel + Preview/Production 流程 */}
			<L4P15 />
			<L4P16 />
			<L4P16b />
			<L4P17 />

			{/* 验收与收尾 */}
			<L4P18 />
			<L4P19 />
		</SlideEngine>
	);
}
