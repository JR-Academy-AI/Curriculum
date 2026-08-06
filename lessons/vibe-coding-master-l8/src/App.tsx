import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第八节课 =====
// Agent Team —— 从分派到协作
// 课型：120 分钟「做一步讲一步」工作坊 · 12 拍做/讲交替
//
// 内容 SoT：VIBE_CODING_MASTER_L8_BLUEPRINT.md v0.2 §11.2 逐页表
// 带课讲稿：vibe-coding-master-l8/RUNSHEET.md
// 学员讲义：vibe-coding-master-l8/HANDOUT.md（含课堂全部 prompt 及逐句理由）
// 课堂仓库：https://github.com/Ruixiaoke/star-mansions（与 L7 同一个）
//
// 12 拍（每一拍的「讲」必须解释学员刚亲手做出来的那个东西）：
//   拍 0  P01        🔨 摊开 L7 汇总矩阵 → 🎙 那一列为什么是空的
//   拍 1  P02        🔨 搭第一个 agent   → 🎙 四格收口 + 比对仓库自带的 4 个
//   拍 2  P03–P04    🔨 三路并跑浅题     → 🎙 三份都对（2 分钟，短）
//   拍 3  P05–P08 🔥 🔨 一次粘贴 → 翻转  → 🎙 立论 → 那道墙的两面 → 边界从哪来
//   拍 4  P09–P10    🔨 反向传一次       → 🎙 传证据不传结论 + 三个失败模式
//   拍 5  P11        🎙 谁传给谁         → 🔨 charter 第 2 + 4 项
//   —— 休息 ——
//   拍 6  P12        🔨 手动 Team 跑深题 → 🎙 过程诊断（口播，无页）
//   拍 7  P13–P15 🔥 🔨 补唱反调成员     → 🎙 共因 ≠ 因果 → 价值发生在消息里
//   拍 8  P16        🔨 找一条外部反证   → 🎙 全绿 ≠ 可验收
//   拍 9  P17–P18    👀 同一份文件当 teammate 跑（对照）
//   拍 10 P19        🔴 过度组队红灯（判断题）
//   拍 11 P20        Exit + 作业 + 预告「让 Agent 当 Agent 架构师」
//
// ⚠️ 顺序铁律（蓝图 §8.1）—— 每一条都是踩过的坑：
//   ① 立论（P06）必须在翻转（P05）之后 —— 先撞墙，再给尺子。
//      v0.1 把立论和 charter 全排在唯一一次实验之前，重复了 L7 v0.3 已经付过学费的错误。
//   ② **「tools 是一道墙」（P07）不能放拍 1。** 它在拍 1 就说破「边界也挡证据」，
//      等于在学员撞墙前 40 分钟剧透立论。现在它放在立论之后，作为回收：
//      「回头看你一小时前亲手写的那一行」—— 同一条「先撞墙再给尺子」。
//   ③ **「价值发生在消息里」（P15）不能放拍 6。** 深题刚硬停时全班手里是错答案，
//      而那个错答案恰恰是互相通信之后达成的 —— 此刻问「通信的价值」答不出。
//      放到拍 7 揭穿之后才问得动：通信让我们更快一致 —— 一致地错。
//   ④ 两张拓扑图到 P17 才第一次同屏 —— 学员两种都亲历过了，对比才有基础。
//   ⑤ 拍 1 / 2 / 3 / 6 不可砍。时间不足依次砍：拍 9 → 拍 10 → 拍 8 的做 → 拍 5 压 3 分钟。
//
// 主教具是「手动 Team」（三会话 + 学员当消息总线 + 一个 md 任务板），
// 自动 Agent Team 只占拍 9 的 8 分钟投屏对照 —— 因为自动 Team 一开跑就是黑盒、
// 喊停停不住，结构上不支持「做一步讲一步」（蓝图 §6.10）。本节因此没有工具门槛。
//
// deck 性质：不是讲义，是**白板**。
//   · 只有 P07 / P08 两页是大字页 —— 那 9 分钟不许被任何多余信息稀释
//   · 不放空白填写表：模板一律留在 HANDOUT.md，deck 上只给**填好的样例**
//     （曾做过 4 页课堂填空 + 每页底部三行节拍页脚，Rick 判定太多太抢，已删）
//   · 每一拍的「现在做什么 / 什么时候停 / 贴什么到群里」放 RUNSHEET，不上 deck
//
// 数据纪律（蓝图 §16.3）：deck 上不出现模型名、价格、版本号或开关字面量 ——
// 只讲档位和判断线，具体当天口播，细节见蓝图 §18。

import L8P00 from './components/slides/L8P00_Cover';
import L8P01 from './components/slides/L8P01_TheEmptyColumn';
import L8P02 from './components/slides/L8P02_BuildFirstAgent';
import L8P03 from './components/slides/L8P03_ShallowTask';
import L8P04 from './components/slides/L8P04_AnyWrong';
import L8P05 from './components/slides/L8P05_ThePaste';
import L8P06 from './components/slides/L8P06_BoundaryBug';
import L8P07 from './components/slides/L8P07_ToolsIsAWall';
import L8P08 from './components/slides/L8P08_WhereBoundariesComeFrom';
import L8P09 from './components/slides/L8P09_ThreeMessages';
import L8P10 from './components/slides/L8P10_ThreeFailures';
import L8P11 from './components/slides/L8P11_CharterTwoItems';
import L8P12 from './components/slides/L8P12_DeepTask';
import L8P13 from './components/slides/L8P13_TheAgreedAnswer';
import L8P14 from './components/slides/L8P14_CommonCause';
import L8P15 from './components/slides/L8P15_ValueInMessages';
import L8P16 from './components/slides/L8P16_LeadSignoff';
import L8P17 from './components/slides/L8P17_SameFileTwoStructures';
import L8P18 from './components/slides/L8P18_WhatItDoesForYou';
import L8P19 from './components/slides/L8P19_RedLight';
import L8P20 from './components/slides/L8P20_ExitAndNext';

export default function App() {
	return (
		<SlideEngine>
			{/* 封面 */}
			<L8P00 />

			{/* 拍 0：从他们自己交的作业开始 */}
			<L8P01 />

			{/* 拍 1：搭第一个 agent（今天的三个队友就是这三份文件） */}
			<L8P02 />

			{/* 拍 2：三路并跑浅题 → 三份「我这边没问题」，而且三份都是对的 */}
			<L8P03 />
			<L8P04 />

			{/* 🔥 拍 3：一次粘贴 → 翻转 → 立论 → 回收那道墙 → 边界从哪来
			    全课最重要的一段。墙和边界两页放在立论之后，不能提前。 */}
			<L8P05 />
			<L8P06 />
			<L8P07 />
			<L8P08 />

			{/* 拍 4：三类消息，从自己的动作里命名 */}
			<L8P09 />
			<L8P10 />

			{/* 拍 5：charter 只写两项 */}
			<L8P11 />

			{/* ☕ 休息 —— 拍 5 与拍 6 之间 */}

			{/* 拍 6：手动 Team 跑深题（讲评口播，不占页） */}
			<L8P12 />

			{/* 🔥 拍 7：虚假共识 → 共因≠因果 → 这时候才问得动「通信的价值」 */}
			<L8P13 />
			<L8P14 />
			<L8P15 />

			{/* 拍 8：任务板全绿 ≠ 外部验收完成 */}
			<L8P16 />

			{/* 拍 9：同一份文件，两种结构（可砍） */}
			<L8P17 />
			<L8P18 />

			{/* 拍 10：红灯 */}
			<L8P19 />

			{/* 拍 11：收尾 */}
			<L8P20 />
		</SlideEngine>
	);
}
