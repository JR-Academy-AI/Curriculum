# 第四节课 Runsheet《从 PRD 到 Production》· 直接照讲

> 主题：**把前三节写的文档，接成一条真能交付的链路** —— 而且这次是**前后端分离**：前端上 GitHub Pages，后端 API 上 Vercel，中间靠一条 HTTP 线连起来。
> 时长：~130 分钟（比原来紧，多了前后端联调 + CORS）；**登录/历史留占位**可压回 ~120，**能长就长**，别硬卡点。
> 全程口径：**Vibe Coding —— 你不敲命令，你指挥 Agent**。git、YAML、CORS 头都是 Agent 的活，你只管说人话 + 盯结果。
> 工具：本机 Node + Git + Claude Code（或 Cursor）、GitHub、Vercel、Supabase。deck 24 页，`?page=N` 跳页。
> 红线：不承诺包就业 / 保 offer；只看「链路有没有真跑通、前端有没有真调到后端、有没有对着 PRD 验收」。

> ⚠️ **本 runsheet 已改成「前端 Pages + 后端 Vercel」前后端分离架构。配套 deck 尚未同步**——页码指的是**重排后的目标 deck（24 页）**，逐条改动见文末〈附二：deck 改动清单〉。deck 重建前，按内容名认页即可。

## 课前（老师）先备好

- 一个能公开的 **starter monorepo**：`src/`（React + Vite 前端）+ `api/`（Vercel serverless 后端），验证过前端能上 Pages、后端能上 Vercel、两边能连通。
- 一份小而具体的**兜底 PRD**，给 PRD 还没达标的同学。
- 一段 **`后端上 Vercel → 前端接上 → CORS 报错 → 修好`** 的录屏，登录/网络卡住时救场。
- 一张**浏览器 CORS 报错的截图**（console 里 `blocked by CORS policy` 那一段），第 19 页现场调不出来时直接看图讲。
- starter repo 里放好 `.github/pull_request_template.md`，第 21 页现场能看到 PR 自动带出 body。
- **GitHub Pages 侧先趟一遍**：确认仓库 Settings → Pages 的 Source 能切到「GitHub Actions」，且验证过的 deploy workflow 带 `permissions: pages: write` + `id-token: write` + `github-pages` 环境——第 18 页现场让 Agent 生成时，它若漏了权限或没先开 Pages 会红，心里有数好救场。
- 自己的 GitHub / Vercel / Supabase 都登好，后端环境变量提前配过一遍，投屏就绪。

---

## 课前注册 & 工具清单（网址）

> 学员没号的课前先注册好；GitHub / Vercel / Supabase 都能用 GitHub 账号一键登录，省事。

| 工具 | 干嘛用 | 网址 |
|------|--------|------|
| Node.js（装 LTS 版） | 本机跑 install / build | https://nodejs.org |
| Git | 版本控制（Agent 替你调） | https://git-scm.com/downloads |
| Claude Code / Cursor | 你的 Agent | https://claude.com/product/claude-code ｜ https://cursor.com |
| GitHub | 前端仓库 + Actions + Pages | 注册 https://github.com/signup ｜ 建库 https://github.com/new |
| Vercel | **后端 API** 部署 + Preview | https://vercel.com/signup（选 Continue with GitHub）|
| Vercel CLI（`vercel dev` 本地联调） | 本地同时起前端 + api（同域，先不碰 CORS）| `npm i -g vercel` 或让 Agent 装 |
| Supabase（**后端**登录 + 存历史用）| 邮箱登录 + 数据库 | https://supabase.com/dashboard（GitHub 登录）|
| lunar-javascript | 农历换算 + 值日二十八宿（后端 npm 包，免注册）| https://github.com/6tail/lunar-javascript |

> 星宿形象图 / 星图是**课前内容准备**，不占课堂：用生图工具批量出 28 张统一画风、选允许商用的；课堂演示用占位图即可。

---

## 1. 分钟级 runsheet（建议节奏，可延长）

| 段 | 建议时长 | deck 页 | 干什么 |
|----|------|--------|--------|
| ① 开场 · 本地能跑 ≠ 交付 | 8' | 1–3 | 三层 SoT 都躺硬盘；产品 = 前端能看 **+ 后端能算/能记住你**（§2）|
| ② 今晚这条链路长啥样 | 8' | 4–5 | 交付地图：前端 Pages ⇄ **API** ⇄ 后端 Vercel；分工 + 预告两个坑（§3）|
| ③ 先检查料 + 划前后端边界 | 7' | 6 | 五项检查 + 哪些归前端、哪些归后端（§4）|
| ④ 让 Agent 搭前端 + api/ 骨架 + 本地跑绿 | 24' | 7–10 | Scaffold First；投屏 prompt A；`vercel dev` 同起前后端联调（§5）|
| ⑤ 🔴 钉死一个观念：你不敲命令 | 4' | 11 | 立「指挥 Agent」的打开方式（§6）|
| ⑥ 让 Agent 把项目变成 GitHub repo | 11' | 12 | 投屏 prompt B；**monorepo** + 密钥 .env 别提交（§7）|
| ⑦ CI + 红灯实验 | 15' | 13–15 | 投屏 prompt C；前后端一起验；故意搞坏看它拦不拦（§8）|
| ☕ 休息 | 5' | — | 口头 |
| ⑧ 后端先上 Vercel（只当 API）| 15' | 16–17 | 投屏 prompt D；curl 验活；Supabase 环境变量放 Vercel（§9）|
| ⑨ 前端上 Pages + 接后端 + 🔴 CORS 红灯 | 18' | 18–19 | 投屏 prompt E；base 坑 + `VITE_API_BASE`；跨域被拦 → 配 CORS → 打通（§10）|
| ⑩ 开 PR + Preview + PR body | 13' | 20–21 | 投屏 prompt F/G；PR 不是空的；诚实讲前后端 Preview 差异（§11）|
| ⑪ 合并上线 + 端到端对着 PRD 验收 | 9' | 22–23 | merge 上线；前端真调到后端、出本命宿才算过（§12）|
| ⑫ 收尾 + 作业 | 5' | 24 | 小结 + 布置作业（§13）|

---

## 2. ① 开场（念，约 3 分钟）

我们先从一个问题开始。

前三节课，我们一直在做同一件事——教 AI「该做什么」。你写了自己的 PROFILE，写了产品的 PRD，第三节定了 tokens.css。人的、产品的、视觉的，三层真相源都齐了。

但有个问题得问：这些东西现在在哪？——都躺在你自己电脑的硬盘里。别人打不开，也没人替你验证对不对；你把终端一关、明天再开机，它还是那几个文件，一动不动。

说到底，你现在手里是一摞「说明书」，还不是一个「产品」。

（对着 page 3）今晚最重要的一句话：**本地能跑，不等于你交付了。** 那个 `localhost`，只有你这台机器看得见；没人验证过；改坏了也回不去。

而且今晚我们做的产品，不只是一个能看的页面。它得**真的算得出你的本命宿、记得住登录过的你**——这就有了「前端」和「后端」两层。前端是别人点开看到的那张脸；后端是背后替你算、替你存的那套逻辑。今晚我们把这两层分别送上线，再用一根线把它们接起来。

记住第一句：本地能跑，只是起点，不是终点。

---

## 3. ② 今晚这条链路长啥样（念 + 投屏 page 4–5）

先把整条路画一遍，你心里有个谱。

PRD 加 CLAUDE.md 加 tokens.css，先变成一个能跑的框架——这个框架里有**两块**：一块前端页面，一块后端 API。框架推到 GitHub。然后**分两条腿上线**：

- **前端**（那张脸）→ 送上 **GitHub Pages**，拿到一个 `你的名.github.io/star-mansions/`。
- **后端**（算和存）→ 送上 **Vercel**，拿到一个 `star-mansions-api.vercel.app`。

（对着 page 5）关键在中间那根线：前端在浏览器里跑，用户点「测我的本命宿」，前端就**发一个 HTTP 请求**去 Vercel 上的后端，后端算完把结果传回来，前端再显示。**两个不同的域名，靠一条 API 连起来。**

这里有两个待会儿一定会撞上的坎，先给你打个预防针，撞上时你就不慌：

1. **API_BASE**——前端得知道「后端住在哪」。本地开发时后端在 `localhost`，上线后在 `vercel.app`，这个地址不能写死，要用环境变量切。
2. **CORS**——前端域名（`github.io`）和后端域名（`vercel.app`）**不一样**，浏览器默认会把这种跨域请求**拦下来**。后端得明确说一句「我允许 `github.io` 来调我」，才放行。这个坎待会儿我们会**故意撞一次**，再当场修好。

还有个分工要一直记着：**GitHub Actions 管「验证 + 发前端 Pages」，Vercel 管「后端 API + Preview」，各管各的一条腿。** 别一上来就纠结「到底用哪个部署」——不是二选一，是一人管一头。

---

## 4. ③ 先检查手上料够不够 + 划前后端边界（念 + page 6）

动手之前，先检查手上的料够不够，五件事：PRD 里核心用户、核心 Flow 写清楚没有；MVP 是不是只锁一个动作；页面、组件、数据有没有初步描述；有没有一条你自己就能判断的验收标准；tokens.css 里颜色、字体、间距定了没。

上节课大家 PRD 都交了，直接拿来用。还没达标的，我这有一份兜底 PRD，拿去。今晚不花时间从头写需求，今晚只有一个主题：交付。

（page 6 下半，这次多一步）分离架构还得多做一件事——**在动手前先划清前后端边界**。拿 PRD 过一遍，每一条问自己：这是「给人看的展示」，还是「算 / 存 / 验的逻辑」？

- **给人看的 → 前端**：落地页、结果页的排版、tokens 那套夜空金色、按钮文案。
- **要算 / 要存 / 要验的 → 后端**：本命宿测算（`/api/compute`）、邮箱登录鉴权（`/api/auth`）、查询历史的读写（`/api/history`）。

**为什么测算也要放后端？** 两个实在的理由：一是算法和数据你不想全暴露在浏览器里给人扒；二是以后要接数据库、要记历史，本来就得有个后端。今晚我们把这条边界一次划对，省得以后返工。

> 时间提醒：今晚**核心必做的是测算这条线**（`/api/compute`）。登录和历史**时间够再现场做**，不够就先留占位、课后补——先把「前端真调到后端、出本命宿」这条主干打通。

---

## 5. ④ 让 Agent 搭前端 + api/ 骨架 + 本地跑绿（念 + page 7–10，投屏动手 ~24'）

（page 7，先管住范围）先说个最容易翻车的地方。不要跟 Agent 说「照我的 PRD 把整个产品做完」——你这么说，它会埋头生成二十分钟、生成一大堆，你根本不知道它写了什么，想 review 都没法 review。

所以我们分层：今天做到第二层就够——先让它把骨架搭出来，**前端目录 + `api/` 后端目录都要有**；再挑一个最核心的 Flow（生日 → 本命宿）**从前端一路打通到后端**真正跑起来。登录、历史先占位，别的功能往后慢慢加，别贪多。

（page 8–9，示范怎么开口）而且我不会让它直接写代码，我先要一份「计划」。看我投屏这段，我是这么说的：

```
读取 PRD.md、CLAUDE.md 和 tokens.css。
先别实现完整功能，也别自己扩展 PRD。
先给我一份 scaffold plan：
- 技术栈和理由（前端 / 后端各是什么）
- 目录结构：前端 src/ 和后端 api/ 分开
- PRD 需求哪些归前端、哪些归后端（测算/登录/历史）
- 前后端之间的 API 契约：每个接口的路径、入参、返回长什么样
- 哪些先做占位、install/dev/typecheck/build 命令、本地怎么同时起前后端联调
我确认计划了，你再生成最小可运行框架。
```

先要计划、再要代码——它一跑偏，当场就能拦住。分离架构里，**最该盯的是那份「API 契约」**：前端按什么格式发、后端按什么格式回，这个说清楚了，两边才接得上。

（page 10，本地这关）框架出来了，别急着推上云。先在自己电脑上确认它是活的。分离架构的本地联调有个好用的招：**`vercel dev`**——它一条命令同时起前端和 `api/` 里的后端函数，而且**都在同一个域名（localhost）下，本地暂时不用管 CORS**。三关照旧：装依赖、类型检查、build；再加一步：`vercel dev` 起来后，前端点「测本命宿」，看它**真的调到本地 `/api/compute` 并出结果**。全绿、页面用上了第三节那套 tokens，这关才算过。

### ▶ 操作（以二十八星宿 App 为例）

1. 打开项目目录（已备好三层 SoT：`PRD.md` / `CLAUDE.md` / `tokens.css`），启动 Claude Code。
2. **先要计划** —— 把这段发给 Agent（已按星宿项目具体化）：

```
读取 PRD.md、CLAUDE.md、tokens.css。先别实现完整功能、也别扩展 PRD。
先给我一份 scaffold plan：
- 前端 React19+Vite+TS，目录 src/pages src/components src/lib src/styles
- 后端 Vercel serverless，目录 api/：
  - api/compute.ts   本命宿测算（用 lunar-javascript 封装 computeBenmingXiu）
  - api/auth/*.ts     Supabase 邮箱登录（先占位）
  - api/history.ts   查询历史读写（先占位）
- API 契约：POST /api/compute {birthDate, birthTime?} → {benmingXiu, ...}
- 前端用 src/lib/api.ts 统一封装 fetch，后端地址读环境变量 VITE_API_BASE
- tokens.css 接进 src/styles 并全局引入；释义/星图先占位
- install/typecheck/build 命令 + 用 vercel dev 本地同起前后端怎么验证
我确认后你再生成。
```

3. 看计划 OK，回一句：`计划可以，生成 scaffold + 打通一个核心 Flow：前端输入生日 → 调 /api/compute → 后端算本命宿 → 结果页展示。登录/历史留占位。`
4. 生成完，本地过关（Agent 会替你跑，你看结果）：`npm install` → `npm run typecheck` → `npm run build` → `vercel dev`。
5. `vercel dev` 打开看一眼：填生日、点按钮，网络面板里能看到打到 `/api/compute` 的请求、结果页出本命宿、页面是 tokens 那套夜空金色 = 过关。

> 装库不用你敲：让 Agent「在 api/ 里加依赖 lunar-javascript，在 api/compute.ts 用它」即可（等价 `npm i lunar-javascript`）。
> 没装 Vercel CLI 也让 Agent 装（`npm i -g vercel`）；实在起不来，退一步用「前端 npm run dev + 后端本地跑」两个终端，效果一样。

---

## 6. ⑤ 🔴 钉死一个观念：接下来你不敲命令（念 + page 11，这段最重要，别一翻而过）

这一段最重要，我要把一个观念给你钉死：

**从现在开始，你不敲命令。** 后面不管是 GitHub、CI、部署，还是待会儿那个 CORS 头，那些 git 命令、那些 YAML、那些跨域配置，都是 Agent 的活，**不用你背**。

很多人一到「部署」就紧张，一听「前后端分离、CORS」更是头大，觉得是不是得背一堆命令、手写一堆配置。不用。那是过时的做法。

你做的是 Vibe Coding，只做三件事：**说清楚你要什么、让 Agent 去执行、然后盯住它——做对没、真跑通没、该你拍板的拍了没。** 命令和配置看得懂就行，不用背，也不用手敲。

所以接下来你会看到我一遍遍跟 Agent 说人话，而不是在终端里敲命令。这一页看明白，后面都顺。

---

## 7. ⑥ 让 Agent 把项目变成 GitHub repo（念 + page 12，投屏 prompt B）

现在把项目变成一个 GitHub 仓库。注意——前端后端在**同一个仓库**里（monorepo），一个 `src/` 一个 `api/`，PRD、规则、tokens 也都在里面。我不去终端敲 `git init`，我跟 Agent 说人话：

```
把这个项目初始化成 git 仓库，写好 .gitignore
（node_modules、.env、任何 Supabase / API key 一律别提交），
在 GitHub 上建个 repo 推上 main。commit 说明这是「从 PRD 生成的 scaffold」。
```

那些 git 命令它替我跑。我要盯的是四件它保证不了、得自己看的事：**密钥有没有被提交**、README 能不能让一个陌生人把前后端都跑起来、PRD 和规则跟代码在不在一个 repo、初始这版在本地能不能 build。

第一条最要紧，而且这次风险更大——因为后端要接 Supabase，会有一串 key。**密钥一旦进了 git 历史，删文件都删不掉。** 所以推之前，务必自己扫一眼 `.gitignore` 里有没有 `.env`。这种事别指望 Agent 每次都替你想周全，得你自己守着。

### ▶ 操作

给 Agent（星宿版）：

```
把这个项目初始化成 git 仓库，写好 .gitignore
（node_modules、.env、.env.local、任何 Supabase / API key 都别提交）。
我在 GitHub 建好空 repo 后给你地址，你把它推上 main。
commit message：chore: scaffold 二十八星宿（前端 src/ + 后端 api/）from PRD。
```

1. 建空仓库：打开 **https://github.com/new** → 名字 `star-mansions`、Public、**不要**勾 Add README / .gitignore（免得跟本地冲突）→ Create → 复制那串 `https://github.com/你的名/star-mansions.git`。
2. 把地址回给 Agent，它 push。
3. 刷新仓库页，四查：`src/` + `api/` + `PRD.md` + `CLAUDE.md` + `tokens.css` 都在 · README 能指导启动前后端 · 三份 SoT 与代码同 repo · **没有** `.env`/key。

---

## 8. ⑦ CI + 红灯实验（念 + page 13–15，投屏 prompt C）

（page 13，先讲 CI 是什么）CI 是什么？一句话：你每次提交，GitHub 就在一台干净机器上把验证重跑一遍——装依赖、类型检查、build，哪一步挂了就红灯，坏代码进不了主分支。它就是给你的 `main` 分支站岗的。分离架构里，它**前端后端一起验**：`src/` 编不过、`api/` 编不过，都得红。

（page 14，还是让 Agent 写）这个 `ci.yml` 还是让 Agent 写，但我会先让它一行行讲给我听：

```
帮我加一个最小的 GitHub Actions CI：push 和 PR 时装依赖、typecheck、
把前端和 api/ 后端都 build 一遍，任何一步失败就标红。
先逐行讲清这个 workflow 在拦什么，再创建 ci.yml。
```

你不用背 YAML 缩进。你要能做到的是——一句话说出它拦谁：装不上、类型错、前端或后端 build 挂，就红灯。说得出来，就算懂了。

（page 15，最关键的动手）然后做今晚**第一个红灯实验**。我故意搞坏一次——比如在 `api/compute.ts` 里把一个字符串赋成数字，推上去。盯着 Actions 看……红了。GitHub 拦下来了，PR 上一个红叉。再把它修好、推上去……绿了。

为什么要故意搞坏一次？因为 CI 过没过关，标准不是「文件建好了」，是你**亲眼看见它真能拦住坏代码**。没亲眼见它红过，你对它就永远只是「希望它没事」。走完这一遍，你才真信 `main` 是被守住的。

> 记住「红灯 → 修好 → 绿灯」这个动作。今晚**待会儿还有第二个红灯实验**——CORS 那个——套路一模一样：先让它红，再让它绿，你才真懂。

### ▶ 操作

给 Agent：

```
帮我加最小 CI：.github/workflows/ci.yml，push 和 PR 时 npm ci → typecheck →
build（前端 + api/ 都覆盖），任一失败标红。先逐行讲它拦什么，再创建并 push。
```

1. push 后打开仓库 **Actions** 页：`https://github.com/你的名/star-mansions/actions`，看这次 run 变绿。
2. **红灯实验**：让 Agent「在 api/compute.ts 里故意写一个类型错误并 push」→ 回 Actions 看它变红、PR 上出红叉。
3. 让 Agent「把刚才的错误修掉再 push」→ 看它重新变绿。过关 = 你亲眼见它**红过又绿**。

---

## 9. ⑧ 后端先上 Vercel（只当 API）（念 + page 16–17，投屏 prompt D）

（page 16，为什么后端先上）我们**先上后端**。为什么？因为前端要「指向」后端——前端得先知道后端住在哪个网址，才能去调它。所以先把后端送上 Vercel，拿到地址，前端待会儿才有的可指。

Vercel 把环境分成三个：本地、Preview、正式版。你把 GitHub repo 导进去，它用官方 Git 集成自动部署，一行部署脚本都不用写。**注意：这个 Vercel 项目我们只当「后端 API」用**——前端待会儿交给 Pages，不在 Vercel 上跑。让 Agent 帮你把 Vercel 配成「只部署 `api/`」就行，你不用手写配置。

后端一上，我只验一件最直接的事：**这个 API 活着吗？** 不用前端，直接拿网址 curl 一下 `/api/compute`，能返回本命宿，后端就算立住了。

（page 17，Supabase 接线 + 密钥去哪）登录和历史要接 Supabase，这就带出一个分离架构必答的问题：**那串 Supabase 密钥放哪？** 答案：**放 Vercel 的环境变量里，绝不进 git。** 我们刚才 `.gitignore` 挡的是「别把 key 提交到代码库」；现在 key 得让**线上的后端**用得到——所以填到 Vercel 项目的 Environment Variables，后端运行时从那里读。这条是密钥管理的正解：代码里没有，运行环境里有。

> 时间够就现场接 Supabase 登录；不够就让 `/api/auth`、`/api/history` 保持占位，先把测算这条线跑通，登录历史课后补。

### ▶ 操作

**后端导入 Vercel（拿 API 网址）**
给 Agent：

```
帮我把这个仓库配成 Vercel 上的「纯后端 API」项目：只部署 api/ 目录的 serverless 函数，
前端不在 Vercel 构建。给我配置（vercel.json 或项目设置）并说清怎么导入。
```

1. 打开 **https://vercel.com/new** → Continue with GitHub → 选 `star-mansions` → Import。
2. 按 Agent 给的设置（只跑 api/）→ Deploy。
3. 拿到后端网址，比如 `https://star-mansions-api.vercel.app`。
4. **curl 验活**（或浏览器直接开）：让 Agent「用这个网址发一个测试请求到 /api/compute，确认返回本命宿」。返回对了 = 后端立住。

**Supabase 接线（时间够再现场）**
1. 打开 **https://supabase.com/dashboard** 建 project → 复制 Project URL + service key。
2. 到 Vercel 项目 → Settings → **Environment Variables** 填进去（**不写进代码**）。
3. 让 Agent「用 Supabase 实现 api/auth 的邮箱验证码登录 + api/history 的读写，密钥从环境变量读」。
4. 时间不够就留 `/api/auth`、`/api/history` 占位、课后补。

---

## 10. ⑨ 前端上 Pages + 接后端 + 🔴 CORS 红灯实验（念 + page 18–19，投屏 prompt E）

（page 18，前端上 Pages + 指向后端）现在把前端送上 GitHub Pages，同时告诉它「后端在哪」。让 Agent 配 Pages 部署，我盯三件事：

**第一，Vite 的 `base` 坑。** Pages 部署在一个子路径底下（`/star-mansions/`），`base` 没配对，页面点开一片白，JS、CSS、图片全 404。绝大多数「Pages 白屏」都是这个。

**第二，`VITE_API_BASE` 指向后端。** 前端本地时调 `localhost` 的后端，上线后要调 Vercel 那个 `star-mansions-api.vercel.app`。这个地址用环境变量注入，别写死。

**第三，Pages 得先「开」+ workflow 得有权限。** 这是最容易被忽略、也是第一次部署最常翻车的地方，分两条：① 仓库 **Settings → Pages → Source 选「GitHub Actions」**——这一步不点，workflow 跑了也没地方发，deploy 直接红（报 `Pages not enabled`）；② 这个 deploy workflow 必须带上 Pages 的权限（`permissions:` 里 `pages: write` + `id-token: write`）和 `github-pages` 环境，少了这段 Actions 会报权限错。这两条都写进给 Agent 的话里，让它一次配对——你不用背 YAML，但得知道「Pages 要先开、workflow 要有权限」这两个前提，不然现场红了不知道在哪。

```
帮我加一个 GitHub Pages 部署 workflow：build 前端 dist、部署到 Pages。
Vite 的 base 设成仓库子路径 /star-mansions/，别让资源 404。
前端调后端的地址用 VITE_API_BASE，Pages 构建时设成我的 Vercel 后端网址。
workflow 要带 Pages 部署权限（permissions: pages: write + id-token: write）、
用 github-pages 环境和官方 actions（configure-pages / upload-pages-artifact / deploy-pages）。
```

（page 19，第二个红灯实验：CORS）前端上线后，你第一次点「测我的本命宿」——**大概率不动，打开浏览器 console 一看：`blocked by CORS policy`（红字）。** 别慌，这就是我课前说的第二个坎，现在它按时来了。

为什么？前端住在 `github.io`，后端住在 `vercel.app`，**两个不同的域名**。浏览器出于安全，默认不让一个网站随便去调另一个域名的接口——它把请求拦在门口。这不是你代码写错，是浏览器的规矩。

怎么修？让**后端明确表态**：「我允许 `github.io` 来调我。」也就是给后端加一段 CORS 响应头。还是说人话让 Agent 加：

```
前端在 GitHub Pages（https://你的名.github.io）调后端时被 CORS 拦了。
帮我在 api/ 的响应里加上 CORS 头，只允许我的 Pages 域名跨域访问，
并正确处理 OPTIONS 预检请求。改完 push，Vercel 会自动重新部署后端。
```

后端重新部署好，回前端再点一次——通了，本命宿出来了。**这就是今晚第二个「红灯 → 绿灯」**：你亲眼看见跨域被拦，又亲眼看见配好放行。以后任何前后端分离项目，第一天几乎都会撞 CORS，你今天见过一次，以后就不慌。

过关标准：Pages URL 打得开、资源不 404、点按钮**真能调到 Vercel 后端并出结果**、手机上也一样。

### ▶ 操作

**前端上 Pages**
给 Agent：

```
帮我加 GitHub Pages 部署 workflow（.github/workflows/deploy-pages.yml）：build 前端、部署到 Pages。
vite.config 的 base 设成 '/star-mansions/'。
前端 fetch 后端用 VITE_API_BASE，Pages 构建时注入我的 Vercel 后端网址
（https://star-mansions-api.vercel.app）。
workflow 要带 permissions: pages: write + id-token: write、用 github-pages 环境，
以及官方 actions（configure-pages / upload-pages-artifact / deploy-pages）。
```

1. **先开 Pages**：仓库 → **Settings → Pages** → Source 选 **GitHub Actions**。⚠️ 这步必须在部署前做，否则第一次 deploy 会红（`Pages not enabled`）；要是已经红过一次，开完这里回 Actions **Re-run** 一次即可。
2. push 后回 Actions 看 deploy 变绿，拿到网址：`https://你的名.github.io/star-mansions/`。（若报权限错，让 Agent 给 workflow 补上 `pages: write` + `id-token: write` 再 push。）
3. 打开，点「测我的本命宿」。

**🔴 CORS 红灯实验**
4. 大概率点了不动 → 打开浏览器 console，看到 `blocked by CORS policy`（这就是要让学员亲眼看到的「红」）。
5. 把上面那段 CORS prompt 发给 Agent → 它给后端加 CORS 头并 push → Vercel 自动重部署。
6. 回前端刷新再点 → 本命宿出来了（这就是「绿」）。手机也开一下：能开、能出结果、没 404 = 过关。

> 白屏九成是 `base` 没配对；点了不动九成是 CORS 或 `VITE_API_BASE` 没设对——先看 console 报的是哪个。

---

## 11. ⑩ 开 PR + Preview + PR body（念 + page 20–21，投屏 prompt F/G）

（page 20）两条腿都上线、也接通了。现在演示一个真实改动怎么走，还是让 Agent 做——用一个**后端改动**，因为 Vercel 的 Preview 正好给后端用：

```
开一个新分支 feat/add-star-lord，给 /api/compute 多返回一个「值日星君」字段，
结果页顺带展示它。提交、推上去，然后开一个 PR。
```

PR 一开，盯几件事：CI 过没、**Vercel 给这个 PR 一个独立的后端 Preview URL**、在那个 Preview 上验证接口返回对了、验收过了再合并。记住——没验过 Preview 之前，不要 merge。

**诚实说一句前后端 Preview 的差别**（这点别糊弄学员）：Vercel 天生给**每个 PR** 一个后端 Preview 网址，改后端很好验；但**前端在 GitHub Pages 上没有自动 per-PR 预览**——前端改动靠 CI 守住构建 + 本地 `vercel dev` 自己先看 + 合并后立刻在 Pages 上验收。这也是为什么很多团队索性把前端也挂到 Vercel。今晚我们特意用「前端 Pages + 后端 Vercel」，就是让你把这个真实取舍看清楚。

（page 21，这点新手最容易漏）还有个容易忽略的：PR 不是 `git push` 一下就完事。一个空 PR、body 什么都不写，没人敢合。为什么？reviewer 不在你脑子里，你得把「这个 PR 做了什么、为什么、有什么风险、怎么测的」讲清楚。

成熟的团队会把 PR 模板固化在仓库里，一个 `.github/pull_request_template.md`，一开 PR 它自动带出来。这个 body 也让 Agent 帮你填：

```
按我们团队的 PR 模板，帮我把这个 PR 的 body 填好：
一句话概述、关联的 issue、改动类型、改了什么/为什么、风险和测试计划
（含：Vercel Preview 上验过后端返回、CI 绿）。
```

它填草稿，你补上判断和证据。一个像样的 PR body 长这样（对着 page 21 右边讲）：概述、关联 issue、改动类型、改了什么为什么、设计说明、检查清单、截图证据。以后进任何一个正规团队，PR 都是这么开的。

### ▶ 操作

给 Agent（星宿版）：

```
开新分支 feat/add-star-lord，给 api/compute.ts 多返回「值日星君」字段，
结果页展示它。提交推上去、开一个 PR，并按 .github/pull_request_template.md
把 PR body 填好（概述、关联 issue、类型、改了啥为啥、风险、测试计划）。
```

1. 开 PR 后在 PR 页看：Actions CI 打勾 + Vercel 机器人贴出一个**后端 Preview URL**。
2. 打开 Preview URL 调 `/api/compute`，确认多返回了「值日星君」→ OK 了再点 **Merge**。

---

## 12. ⑪ 合并上线 + 端到端对着 PRD 验收（念 + page 22–23）

（page 22）Preview 验收过了，合并。合并那一刻，两条腿一起更新——`main` 一动，Actions 重发前端 Pages、Vercel 重部署后端，你不用手动碰任何一个。到这儿，你的 PRD 已经变成一条能自动跑的**前后端交付流水线**了。

（page 23，今晚最后一句重话）最后，最重要的一件事：**完成，不等于 URL 能打开。** 对分离架构还要多加一句：**前端能打开，也不等于产品能用——得前端真的调得到后端。**

把当初写的 PRD 拿出来，做一次**端到端验收**：

- 打开 Pages 前端 → 输入生日 → 点按钮 → **结果页真出本命宿**（说明前端→后端这条线通了）。
- 页面用的是 tokens 那套视觉吗？有没有擅自加 PRD 以外的东西？
- （做了登录/历史的话）能登录吗？登录后看得到自己的查询历史吗？
- 在线的结果，满足你当初写的验收标准吗？

对着清单一条条过，而不是「点开不报错就算完」。这一条，就是专业和业余的分界线。

---

## 13. ⑫ 收尾 + 作业（念，约 2 分钟）

回头看看你今晚做的事：把三份原本躺在硬盘里的文档，接成了一条真正能交付的**前后端流水线**。现在你有一个别人能访问的前端 URL、一个独立部署的后端 API、一条每次提交自动验证的 CI、一个改一行就自动上线的流程——而且你亲手把前后端用一根 API 连了起来，还当场降服了 CORS。这就是「本地能跑」和「真正交付」的区别，也是今晚这两个多小时最值钱的地方。

作业，一个完整闭环：去你的线上产品找一个真实问题（前端展示的，或后端算错的都行），把它写成 PRD 的一条变更；新开分支让 Agent 改，让 Actions 验证——后端改动用 Vercel Preview 验、前端改动本地 + 合并后在 Pages 验；过了，merge 到 `main`。交五样：**Pages 前端 URL、Vercel 后端 URL、PR 链接、一张 Actions 绿灯截图、一张前端成功调到后端出结果的截图**。

最后留一句：今晚你学到的不是几条 git 命令、也不是 CORS 头怎么写——那些 Agent 都会。你学到的是，怎么指挥 AI 替你把一个**有前端有后端的东西**真正交付出去，同时守住那些不能错的东西（密钥别进 git、跨域要放行、对着 PRD 验收、别乱加功能）。这套方法，换任何项目都用得上。

今晚你有没有发现，有几段话你对 Agent 说了一遍又一遍——出 scaffold plan、写 CI、配 CORS、填 PR body。**下节课**我们就把这种反复用的套路，固化成一个 Skill，以后一句话就能调用。下节课见。

---

## 附一：现场卡住了怎么降级

- PRD 太大 → 只搭骨架，核心 Flow 只留「生日 → 本命宿」一条，登录/历史占位。
- PRD 不完整 → 直接用老师兜底 PRD。
- `vercel dev` 起不来 → 退成两个终端：前端 `npm run dev` + 后端本地跑，效果一样。
- 后端 build/部署不过 → 回到 scaffold plan，砍掉登录/历史，只留 `/api/compute`。
- Supabase 接不上 / 没时间 → `/api/auth`、`/api/history` 保持占位，只跑通测算这条线。
- Pages deploy workflow 红了 / 报「Pages not enabled」或权限错 → ① Settings → Pages → Source 选 **GitHub Actions**；② 让 Agent 给 workflow 补 `permissions: pages: write` + `id-token: write` + `github-pages` 环境；补好回 Actions **Re-run**。
- Pages 资源 404 → 先查 Vite `base`，九成是它。
- 点按钮不动 → 看 console：`CORS` 就配后端 CORS 头；否则查 `VITE_API_BASE` 是不是没注入 / 指错。
- Vercel 后端导入失败 → 老师放录屏演示后端上线 + CORS 修复，学员先把前端 Pages 达成最低过关，后端课后补。
- 时间不够 → 保住「前端 Pages + `/api/compute` 后端 + CORS 打通」这条主干；登录/历史/PR Preview 老师演示、学员课后完成。

---

## 附二：deck 改动清单（配套 24 页 deck 待重建）

> 本 runsheet 已按前后端分离重排，原 22 页 deck 需要**改内容 + 调顺序 + 加 3 页**。逐条如下（旧 slide 文件名 → 目标页）：

| 目标页 | 内容 | 来源 / 改动 |
|--------|------|------------|
| 1 | Cover | `L4P00_Cover` 复用 |
| 2 | 三层 SoT 都躺硬盘 | `L4P01_ThreeSoT` 复用 |
| 3 | 本地能跑 ≠ 交付（产品 = 前端能看 + 后端能算/能记）| `L4P02` 微调 |
| 4 | 交付地图：前端 Pages ⇄ **API** ⇄ 后端 Vercel | `L4P03_Pipeline` **重画**（原「同一份站发两处」作废）|
| 5 | 分工（Actions vs Vercel）+ 两个坑预告（API_BASE / CORS）| **新增** |
| 6 | 检查料 + **划前后端边界** | `L4P04_InputCheck` 扩展 |
| 7 | 别让 Agent 一次做完 · 分层 | `L4P05` 复用 |
| 8 | 架构：前端 src/ + 后端 api/ 边界 + **API 契约** | `L4P06_ExtractArch` **改** |
| 9 | Scaffold prompt（前端+api/、测算真做、登录/历史占位）| `L4P07_ScaffoldPrompt` **改** |
| 10 | 本地跑绿：**`vercel dev` 同起前后端** | `L4P08_LocalGate` **改** |
| 11 | 🔴 你不敲命令，指挥 Agent | `L4P08b_VibeWay` 复用 |
| 12 | Agent 变 GitHub repo（**monorepo** + 密钥）| `L4P09_GitHubSoT` 微调 |
| 13 | CI 在拦什么（前后端一起）| `L4P10_WhatCIProtects` 微调 |
| 14 | 最小 CI | `L4P11_MinimalCI` 微调 |
| 15 | 🔴 CI 红灯实验 | `L4P12_RedLightExp` 复用 |
| 16 | **后端先上 Vercel**（只当 API + 三环境 + curl 验活）| `L4P15_VercelEnvs` **改 + 前移** |
| 17 | Supabase 接线 + **密钥放 Vercel 不进 git** | **新增** |
| 18 | 前端上 Pages：`base` 坑 + `VITE_API_BASE` + **启用 Pages / workflow 权限** | `L4P13_PagesPipeline` + `L4P14_PagesPitfalls` **并 + 改**（补第三点：Settings→Pages 选 GitHub Actions、`permissions: pages/id-token` + `github-pages` 环境）|
| 19 | 🔴 **CORS 红灯实验** | **新增** |
| 20 | 开 PR + Preview（诚实讲前后端 Preview 差异）| `L4P16_PRPreview` **改** |
| 21 | PR body 不能空 | `L4P16b_PRBody` 复用 |
| 22 | 合并上线，两条腿一起活 | `L4P17_MergeProd` 微调 |
| 23 | 端到端对着 PRD 验收（前端真调到后端）| `L4P18_AcceptChecklist` **改** |
| 24 | 收尾 + 作业（下节固化成 Skill）| `L4P19_Summary` 微调 |

> 净变化：**+2 页**（新增 5/17/19，Pages 两页并成一页）；`Pages` 段与 `Vercel` 段**顺序对调**（后端先、前端后）。deck 重建时记得同步更新 `curriculum/lessons.html` 的登记卡片（slide 数 22 → 24）。
