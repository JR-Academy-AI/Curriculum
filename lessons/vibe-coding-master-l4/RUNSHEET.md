# 第四节课 Runsheet《从 PRD 到 Production》· 直接照讲

> 主题：**把前三节写的文档，接成一条真能交付的链路** —— 让产品变成别人能点开就用、你每次一提交就自动验证、自动上线的东西。
> 时长：~120 分钟，**能长就长**，别硬卡点。
> 全程口径：**Vibe Coding —— 你不敲命令，你指挥 Agent**。git 命令、YAML 都是 Agent 的活，你只管说人话 + 盯结果。
> 工具：本机 Node + Git + Claude Code（或 Cursor）、GitHub、Vercel。deck 22 页，`?page=N` 跳页。
> 红线：不承诺包就业 / 保 offer；只看「链路有没有真跑通、有没有对着 PRD 验收」。

## 课前（老师）先备好

- 一个能公开的 **starter repo**（React + Vite，验证过能上 Pages、能导进 Vercel）。
- 一份小而具体的**兜底 PRD**，给 PRD 还没达标的同学。
- 一段 `PR → Preview → merge → 上线` 的**录屏**，Vercel 或登录卡住时救场。
- starter repo 里放好 `.github/pull_request_template.md`，第 19 页现场能看到 PR 自动带出 body。
- 自己的 GitHub / Vercel 都登好，投屏就绪。

---

## 课前注册 & 工具清单（网址）

> 学员没号的课前先注册好；GitHub / Vercel / Supabase 都能用 GitHub 账号一键登录，省事。

| 工具 | 干嘛用 | 网址 |
|------|--------|------|
| Node.js（装 LTS 版） | 本机跑 install / build | https://nodejs.org |
| Git | 版本控制（Agent 替你调） | https://git-scm.com/downloads |
| Claude Code / Cursor | 你的 Agent | https://claude.com/product/claude-code ｜ https://cursor.com |
| GitHub | 代码仓库 + Actions + Pages | 注册 https://github.com/signup ｜ 建库 https://github.com/new |
| Vercel | Preview + 正式版部署 | https://vercel.com/signup（选 Continue with GitHub）|
| lunar-javascript | 农历换算 + 值日二十八宿（npm 包，免注册）| https://github.com/6tail/lunar-javascript |
| Supabase（本课登录用，可选现场）| 邮箱登录 + 数据库 | https://supabase.com/dashboard（GitHub 登录）|

> 星宿形象图 / 星图是**课前内容准备**，不占课堂：用生图工具批量出 28 张统一画风、选允许商用的；课堂演示用占位图即可。

---

## 1. 分钟级 runsheet（建议节奏，可延长）

| 段 | 建议时长 | deck 页 | 干什么 |
|----|------|--------|--------|
| ① 开场 · 本地能跑 ≠ 交付 | 8' | 1–3 | 讲三层 SoT 都还躺硬盘里；抛问题（§2）|
| ② 今晚这条链路长啥样 | 7' | 4 | 投屏交付地图，讲 Actions vs Vercel 分工（§3）|
| ③ 先检查手上料够不够 | 7' | 5 | 五项检查；不达标发兜底 PRD（§4）|
| ④ 让 Agent 搭骨架 + 本地跑绿 | 26' | 6–9 | Scaffold First；投屏 prompt A；带本地三条命令（§5）|
| ⑤ 🔴 钉死一个观念：你不敲命令 | 4' | 10 | 立「指挥 Agent」的打开方式（§6）|
| ⑥ 让 Agent 把项目变成 GitHub repo | 13' | 11 | 投屏 prompt B；带验证四项，尤其密钥（§7）|
| ⑦ CI + 红灯实验 | 17' | 12–14 | 投屏 prompt C；故意搞坏看它拦不拦（§8）|
| ☕ 休息 | 5' | — | 口头 |
| ⑧ 发到 GitHub Pages | 16' | 15–16 | 投屏 prompt D；讲 base / 404 坑（§9）|
| ⑨ Vercel + 开 PR + PR body | 17' | 17–19 | 投屏 prompt E/F；PR 不是空的（§10）|
| ⑩ 合并上线 + 对着 PRD 验收 | 10' | 20–21 | merge 上线；验收两个线上版本（§11）|
| ⑪ 收尾 + 作业 | 5' | 22 | 小结 + 布置作业（§12）|

---

## 2. ① 开场（念，约 3 分钟）

我们先从一个问题开始。

前三节课，我们一直在做同一件事——教 AI「该做什么」。你写了自己的 PROFILE，写了产品的 PRD，第三节定了 tokens.css。人的、产品的、视觉的，三层真相源都齐了。

但有个问题得问：这些东西现在在哪？——都躺在你自己电脑的硬盘里。别人打不开，也没人替你验证对不对；你把终端一关、明天再开机，它还是那几个文件，一动不动。

说到底，你现在手里是一摞「说明书」，还不是一个「产品」。

（对着 page 3）今晚最重要的一句话：**本地能跑，不等于你交付了。** 那个 `localhost`，只有你这台机器看得见；没人验证过；改坏了也回不去。

今晚这两个多小时，我们只做一件事——把这摞躺在硬盘里的文档，接成一条真正能交付的链路：变成别人点开链接就能用、你每改一行提交上去就自动验证、自动上线的东西。

记住第一句：本地能跑，只是起点，不是终点。

---

## 3. ② 今晚这条链路长啥样（念 + 投屏 page 4）

先把整条路画一遍，你心里有个谱。

PRD 加 CLAUDE.md 加 tokens.css，先变成一个能跑的框架；框架推到 GitHub；GitHub 上有个 Actions，你每次提交，它自动帮你验证、帮你发布；最后分两条腿落地——一条 GitHub Pages，一条 Vercel。

这里有个分工要一直记着：**Actions 管「验证 + 发 Pages」，Vercel 管「Preview + 正式版」，两边不重复，各管各的。** 别一上来就纠结「到底用哪个部署」——这不是二选一，是分工。

---

## 4. ③ 先检查手上料够不够（念 + page 5）

动手之前，先检查手上的料够不够，五件事：PRD 里核心用户、核心 Flow 写清楚没有；MVP 是不是只锁一个动作；页面、组件、数据有没有初步描述；有没有一条你自己就能判断的验收标准；tokens.css 里颜色、字体、间距定了没。

上节课大家 PRD 都交了，直接拿来用。还没达标的，我这有一份兜底 PRD，拿去。今晚不花时间从头写需求——那是第二节的事，今晚只有一个主题：交付。

---

## 5. ④ 让 Agent 搭骨架 + 本地跑绿（念 + page 6–9，投屏动手 ~26'）

（page 6，先管住范围）先说个最容易翻车的地方。不要跟 Agent 说「照我的 PRD 把整个产品做完」——你这么说，它会埋头生成二十分钟、生成一大堆，你根本不知道它写了什么，想 review 都没法 review。

所以我们分层：今天做到第二层就够——先让它把骨架搭出来，目录、路由、占位、脚本；再挑一个最核心的 Flow 真正做出来。别的功能往后慢慢加，别贪多。

（page 7–8，示范怎么开口）而且我不会让它直接写代码，我先要一份「计划」。看我投屏这段，我是这么说的：

```
读取 PRD.md、CLAUDE.md 和 tokens.css。
先别实现完整功能，也别自己扩展 PRD。
先给我一份 scaffold plan：技术栈和理由、pages/components/routes/data、
PRD 需求怎么映射到目录、哪些先做占位、install/dev/typecheck/build 命令、
搭完怎么验证。我确认计划了，你再生成最小可运行框架。
```

先要计划、再要代码——它一跑偏，当场就能拦住，不用等它生成一大堆才发现方向错了。

（page 9，本地这关）框架出来了，别急着推上云。先在自己电脑上确认它是活的，三条命令：装依赖、类型检查、build。哪条红了先修，别带病 push。三条全绿、页面用上了第三节那套 tokens，这关才算过。

### ▶ 操作（以二十八星宿 App 为例）

1. 打开项目目录（已备好三层 SoT：`PRD.md` / `CLAUDE.md` / `tokens.css`），启动 Claude Code。
2. **先要计划** —— 把这段发给 Agent（已按星宿项目具体化）：

```
读取 PRD.md、CLAUDE.md、tokens.css。先别实现完整功能、也别扩展 PRD。
先给我一份 scaffold plan：
- 技术栈 React19+Vite+TS，目录 pages/components/data/lib/styles
- PRD 的页面（Landing/Result/Login/History/About）映射到哪些文件
- 测算模块 lib/xiu.ts 用 lunar-javascript 封装 computeBenmingXiu()
- 登录先做 lib/auth.ts 的 authAdapter 占位，不接真后端
- 释义/图先占位，tokens.css 接进 src/styles 并全局引入
- install/dev/typecheck/build 命令 + 搭完怎么验证
我确认后你再生成。
```

3. 看计划 OK，回一句：`计划可以，生成 scaffold + 一个核心 Flow：输入生日 → computeBenmingXiu 出本命宿 → 结果页展示`。
4. 生成完，本地过三关（Agent 会替你跑，你看结果）：`npm install` → `npm run typecheck` → `npm run build`。
5. `npm run dev` 打开看一眼：填生日能出本命宿、页面是 tokens 那套夜空金色 = 过关。

> 装库不用你敲：让 Agent「加依赖 lunar-javascript，在 lib/xiu.ts 里用它」即可（等价 `npm i lunar-javascript`）。

---

## 6. ⑤ 🔴 钉死一个观念：接下来你不敲命令（念 + page 10，这段最重要，别一翻而过）

这一段最重要，我要把一个观念给你钉死：

**从现在开始，你不敲命令。** 后面不管是 GitHub、CI 还是部署，那些 git 命令、那些 YAML，都是 Agent 的活，**不用你背**。

很多人一到「部署」就紧张，觉得是不是得背一堆 `git init`、`git push`，是不是还得手写 workflow、记那些缩进。不用。那是过时的做法。

你做的是 Vibe Coding，只做三件事：**说清楚你要什么、让 Agent 去执行、然后盯住它——做对没、真跑通没、该你拍板的拍了没。** 命令和 YAML 看得懂就行，不用背，也不用手敲。

所以接下来你会看到我一遍遍跟 Agent 说人话，而不是在终端里敲命令。这一页看明白，后面都顺。

---

## 7. ⑥ 让 Agent 把项目变成 GitHub repo（念 + page 11，投屏 prompt B）

现在把项目变成一个 GitHub 仓库。注意——我不去终端敲 `git init`，我跟 Agent 说人话：

```
把这个项目初始化成 git 仓库，写好 .gitignore（.env、密钥一律别提交），
在 GitHub 上建个 repo 推上 main。commit 说明这是「从 PRD 生成的 scaffold」。
```

那些 git 命令它替我跑。我要盯的是四件它保证不了、得自己看的事：密钥有没有被提交、README 能不能让一个陌生人把项目跑起来、PRD 和规则跟代码在不在一个 repo、初始这版在本地能不能 build。

第一条最要紧：密钥一旦进了 git 历史，删文件都删不掉。所以推之前，务必自己扫一眼 `.gitignore`。这种事别指望 Agent 每次都替你想周全，得你自己守着。

### ▶ 操作

给 Agent（星宿版）：

```
把这个项目初始化成 git 仓库，写好 .gitignore（node_modules、.env、任何 key 都别提交）。
我在 GitHub 建好空 repo 后给你地址，你把它推上 main。
commit message：chore: scaffold 二十八星宿 from PRD。
```

1. 建空仓库：打开 **https://github.com/new** → 名字 `star-mansions`、Public、**不要**勾 Add README / .gitignore（免得跟本地冲突）→ Create → 复制那串 `https://github.com/你的名/star-mansions.git`。
2. 把地址回给 Agent，它 push。
3. 刷新仓库页，四查：代码 + `PRD.md` + `CLAUDE.md` + `tokens.css` 都在 · README 能指导启动 · 三份 SoT 与代码同 repo · **没有** `.env`/key。

---

## 8. ⑦ CI + 红灯实验（念 + page 12–14，投屏 prompt C）

（page 12，先讲 CI 是什么）CI 是什么？一句话：你每次提交，GitHub 就在一台干净机器上把验证重跑一遍——装依赖、类型检查、build，哪一步挂了就红灯，坏代码进不了主分支。它就是给你的 `main` 分支站岗的。

（page 13，还是让 Agent 写）这个 `ci.yml` 还是让 Agent 写，但我会先让它一行行讲给我听：

```
帮我加一个最小的 GitHub Actions CI：push 和 PR 时装依赖、typecheck、build，
任何一步失败就标红。先逐行讲清这个 workflow 在拦什么，再创建 ci.yml。
```

你不用背 YAML 缩进。你要能做到的是——一句话说出它拦谁：装不上、类型错、build 挂，就红灯。说得出来，就算懂了。

（page 14，最关键的动手）然后做今晚最关键的一个动手：红灯实验。我故意搞坏一次——比如把一个字符串赋成数字，推上去。盯着 Actions 看……红了。GitHub 拦下来了，PR 上一个红叉。再把它修好、推上去……绿了。

为什么要故意搞坏一次？因为 CI 过没过关，标准不是「文件建好了」，是你**亲眼看见它真能拦住坏代码**。没亲眼见它红过，你对它就永远只是「希望它没事」。走完这一遍，你才真信 `main` 是被守住的。

### ▶ 操作

给 Agent：

```
帮我加最小 CI：.github/workflows/ci.yml，push 和 PR 时 npm ci → typecheck → build，
任一失败标红。先逐行讲它拦什么，再创建并 push。
```

1. push 后打开仓库 **Actions** 页：`https://github.com/你的名/star-mansions/actions`，看这次 run 变绿。
2. **红灯实验**：让 Agent「在 lib/xiu.ts 里故意写一个类型错误并 push」→ 回 Actions 看它变红、PR 上出红叉。
3. 让 Agent「把刚才的错误修掉再 push」→ 看它重新变绿。过关 = 你亲眼见它**红过又绿**。

---

## 9. ⑧ 发到 GitHub Pages（念 + page 15–16，投屏 prompt D）

（page 15）让 Agent 把 Pages 发布配好，我只验一件事：URL 能不能打开、资源有没有 404。还是说人话：

```
帮我加一个 GitHub Pages 部署 workflow：build 出 dist、上传 artifact、部署到 Pages。
注意 Vite 的 base 要设成仓库子路径，别让上线后资源 404。
```

（page 16，这个坑必须讲）这里有个十有八九会踩的坑——**Vite 的 `base`**。Pages 部署在一个子路径底下，`base` 没配对，页面点开一片白，JS、CSS、图片全 404。我给你看个配错的样子，再改对。记住一句：绝大多数「Pages 白屏」都是 `base` 没配对，改完重新推，Actions 会自动重新发。

过关标准：URL 打得开、资源不 404、手机也能正常打开。

### ▶ 操作

给 Agent：

```
帮我加 GitHub Pages 部署 workflow（.github/workflows/deploy-pages.yml）：
build 出 dist、上传 artifact、部署到 Pages。
vite.config 的 base 设成 '/star-mansions/'（仓库名），别让资源 404。
```

1. 仓库 → **Settings → Pages**：`https://github.com/你的名/star-mansions/settings/pages` → Source 选 **GitHub Actions**。
2. push 后回 Actions 看 deploy 变绿，拿到网址：`https://你的名.github.io/star-mansions/`。
3. 手机也开一下：能开、金字/星图都在、没 404 = 过关。白屏九成是 `base` 没配对。

> 同一份代码既上 Pages（子路径 `/star-mansions/`）又上 Vercel（根路径 `/`）时，让 Agent 把 `base` 做成**按环境条件设置**（只有 Pages 构建时才加子路径），免得 Vercel 那边资源 404。

---

## 10. ⑨ Vercel + 开 PR + PR body（念 + page 17–19，投屏 prompt E/F）

（page 17）Vercel 把环境分成三个：本地、Preview、正式版。你把 GitHub repo 导进去，它用官方 Git 集成自动生成 Preview 和正式版，一行部署脚本都不用写。再强调一遍分工：Actions 管 CI 和 Pages，Vercel 管 Preview 和正式版。

（page 18）然后演示一个真实改动怎么走，还是让 Agent 做：

```
开一个新分支 feat/change-cta，按这条 PRD 反馈改一下 CTA，
提交、推上去，然后开一个 PR。
```

PR 一开，盯四件事：CI 过没、Vercel 给没给一个独立的 Preview URL、在那个 Preview 上对着 PRD 验收、验收过了再合并。记住——没看过 Preview 之前，不要 merge。

（page 19，这点新手最容易漏）还有个容易忽略的：PR 不是 `git push` 一下就完事。一个空 PR、body 什么都不写，没人敢合。为什么？reviewer 不在你脑子里，你得把「这个 PR 做了什么、为什么、有什么风险、怎么测的」讲清楚。

成熟的团队会把 PR 模板固化在仓库里，一个 `.github/pull_request_template.md`，一开 PR 它自动带出来。这个 body 也让 Agent 帮你填：

```
按我们团队的 PR 模板，帮我把这个 PR 的 body 填好：
一句话概述、关联的 issue、改动类型、改了什么/为什么、风险和测试计划。
```

它填草稿，你补上判断和证据。一个像样的 PR body 长这样（对着 page 19 右边讲）：概述、关联 issue、改动类型、改了什么为什么、设计说明、检查清单、截图证据。以后进任何一个正规团队，PR 都是这么开的。

### ▶ 操作

**Vercel 导入（拿正式版）**
1. 打开 **https://vercel.com/new** → Continue with GitHub → 选 `star-mansions` 仓库 → Import。
2. Framework 自动认出 Vite；Build `npm run build`、Output `dist`（一般自动填好）→ Deploy。
3. 拿到 Production 网址 `xxx.vercel.app`。

> 登录（Supabase，时间够再现场）：**https://supabase.com/dashboard** 建 project → 复制 Project URL + anon key → 让 Agent「用 Supabase 实现 lib/auth.ts 的 authAdapter，邮箱验证码登录」。时间不够就留 authAdapter 占位、课后补。

**改一处 → 开 PR → 看 Preview**，给 Agent（星宿版）：

```
开新分支 feat/tweak-cta，把落地页主按钮文案从「推算」改成「测我的本命宿」，
提交推上去、开一个 PR，并按 .github/pull_request_template.md 把 PR body 填好
（概述、关联 issue、类型、改了啥为啥、风险、测试计划）。
```

1. 开 PR 后在 PR 页看：Actions CI 打勾 + Vercel 机器人贴出一个 **Preview URL**。
2. 点 Preview，对着 PRD 验收这条改动 → OK 了再点 **Merge**。

---

## 11. ⑩ 合并上线 + 对着 PRD 验收（念 + page 20–21）

（page 20）Preview 验收过了，合并。合并那一刻，两个线上版本一起更新——你不用手动部署，`main` 就是那个开关，推上去就上线。到这儿，你的 PRD 已经变成一条能自动跑的交付流水线了。

（page 21，今晚最后一句重话）最后，最重要的一件事：**完成，不等于 URL 能打开。**

把当初写的 PRD 拿出来，对着两个线上版本——Pages 和 Vercel——一条条验：核心 Flow 跟 PRD 一致吗？页面用 tokens 了吗？有没有擅自加 PRD 以外的东西？在线的结果满足你当初写的验收标准吗？对着清单过，而不是「点开不报错就算完」。这一条，就是专业和业余的分界线。

---

## 12. ⑪ 收尾 + 作业（念，约 2 分钟）

回头看看你今晚做的事：把三份原本躺在硬盘里的文档，接成了一条真正能交付的流水线。现在你有一个别人能访问的 URL、一条每次提交自动验证的 CI、一个改一行就自动上线的流程。这就是「本地能跑」和「真正交付」的区别，也是今晚这两个多小时最值钱的地方。

作业，一个完整闭环：去你的 Vercel Preview 找一个真实问题，把它写成 PRD 的一条变更；新开分支让 Agent 改，让 Actions 验证，用 Preview 验收；过了，merge 到 `main`。交四样：Pages URL、Vercel URL、PR 链接，加一张 Actions 绿灯截图。

最后留一句：今晚你学到的不是几条 git 命令——那些 Agent 都会。你学到的是，怎么指挥 AI 替你把东西真正交付出去，同时守住那些不能错的东西（密钥、验收、别乱加功能）。这套方法，换任何项目都用得上。

今晚你交付的还是个静态站。**下节课**我们在 Vercel 上用 `api/` Functions 把它变动态——加真的登录、真的存数据，让它从「能看」变成「能用」。下节课见。

---

## 附：现场卡住了怎么降级

- PRD 太大 → 只搭骨架，核心 Flow 只留一个，别的先占位。
- PRD 不完整 → 直接用老师兜底 PRD。
- Agent 生成的项目 build 不过 → 回到 scaffold plan，砍掉不必要的依赖重来。
- GitHub 登录 / 权限出问题 → 两人一组共用一个 repo，课后各自补。
- Pages 资源 404 → 先查 Vite `base`，九成是它。
- Vercel 导入失败 → 先用 Pages 达成最低过关，Vercel 放录屏演示 + 课后补。
- 时间不够 → 保住 Pages 这条线，Vercel Preview 老师演示、学员课后完成。
