# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

Static curriculum site for JR Academy bootcamps. Each bootcamp is a standalone Vite + React 19 + TypeScript app that builds to static HTML. The site is served at `jiangren.com.au/curriculum/`.

Currently contains:
- **ai-adoption-bootcamp/** — AI Adoption Specialist Bootcamp (8-week, for business professionals)
- **ai-engineer-bootcamp/** — AI Engineer Bootcamp (12-week, for developers)

Each bootcamp has two parts:
1. **Slide Deck** — React app with `SlideEngine` (interactive presentation at `index.html`)
2. **Static HTML pages** — Curriculum overview, phase details, internal docs (in `public/`)

---

## 🚨 CRITICAL: Technology Standards

### 核心原则：保持极简

这个项目追求**最小技术栈**，拒绝复杂框架。所有内容最终输出为**纯静态文件**（HTML/CSS/JS），不需要服务端渲染、路由、状态管理等。

### 允许使用的技术

| 技术 | 用途 | 版本 |
|------|------|------|
| **Vite** | 构建工具、Dev Server | 8.x |
| **React 19** | Slide Deck 交互组件 | 19.x |
| **TypeScript** | 类型安全 | 5.9.x |
| **framer-motion** | Slide 动画 | 12.x |
| **Inline styles** | 所有样式（Slide Deck） | — |
| **Plain CSS** | 静态 HTML 页面（`public/styles.css`） | — |
| **bun** | 包管理器 + 运行时 | latest |

### 🔴 禁止使用的技术

| 禁止 | 原因 |
|------|------|
| **Next.js** | 过度复杂，这是纯静态站不需要 SSR/SSG 框架 |
| **Nuxt / Remix / Astro** | 同上，不需要任何全栈框架 |
| **React Router** | 不需要客户端路由，每个页面是独立 HTML 文件 |
| **Redux / Zustand / Jotai** | 不需要状态管理，Slide Deck 状态在 SlideEngine 内部管理 |
| **styled-components / Emotion** | Slide Deck 只用 inline style，HTML 页面用 plain CSS |
| **Tailwind CSS** | 不用 utility class 方案，inline style 更直接 |
| **CSS Modules** | 不需要 CSS 模块化 |
| **Material UI / Ant Design / Chakra** | 不用任何 UI 组件库 |
| **Axios / SWR / React Query** | 不需要数据请求库，这是纯静态内容 |
| **任何 CSS-in-JS 库** | 只用 inline style |
| **任何 ORM / 数据库** | 这是纯静态站 |
| **任何 Node.js 服务端框架** | 这是纯静态站 |

### 为什么这么严格？

1. **纯静态输出** — 最终部署的是 HTML/CSS/JS 文件，nginx 直接 serve，没有任何服务端
2. **最小依赖** — 每个 bootcamp 只有 5 个依赖（react, react-dom, framer-motion + 3 devDeps）
3. **快速构建** — `bun run build` 几秒完成，没有复杂的打包配置
4. **任何人都能维护** — 不需要理解框架概念（SSR、hydration、middleware 等）
5. **零运行时成本** — 没有服务端开销，纯 CDN 可部署

---

## Commands

```bash
# Dev — run from inside a bootcamp directory
cd ai-adoption-bootcamp  # or ai-engineer-bootcamp
bun install
bun run dev              # http://localhost:5173/

# Build
bun run build            # runs tsc -b && vite build → outputs to dist/

# Preview production build
bun run preview
```

There are no tests or linting configured.

## Deployment

Push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`):
1. Builds each bootcamp with bun
2. Assembles all `dist/` + `public/` files into `_site/`
3. Generates an index page at `_site/index.html`
4. SCPs to nginx server at `/var/www/static/curriculum/`

Requires GitHub Secrets: `SERVER_HOST`, `SERVER_USER`, `SSH_PRIVATE_KEY`.

## Adding a New Bootcamp

1. Copy an existing bootcamp directory
2. Update `vite.config.ts` — set `base` to `/curriculum/<new-name>/`
3. Add build + copy steps in `deploy.yml`
4. Add a card to the index page HTML in `deploy.yml`'s "Assemble output" step

---

## Architecture & Conventions

### Slide Deck (React)

- **Stack**: React 19 + framer-motion + inline styles only (no CSS files, no styled-components, no UI libraries)
- **Design system**: Neo-Brutalism — black 3px borders, offset `box-shadow: 6px 6px 0 #000`, hover removes shadow + translates
- **Shared UI**: `src/components/ui.tsx` — `Slide`, `Card`, `CardSm`, `Title`, `Highlight`, `Grid`, `Stagger`, etc.
- **Theme**: `src/styles/theme.ts` — colors, fonts, shared constants
- **Slide naming**: `S01_Cover.tsx`, `S02_Problem.tsx` — two-digit prefix + descriptive name
- **Fonts**: Bricolage Grotesque (headings), DM Sans (body), Space Mono (data/labels), Noto Sans SC (Chinese)
- **Responsive titles**: Always use `clamp()` for font sizes

### Static HTML Pages (public/)

- `curriculum.html` — Full curriculum overview with all phases
- `phase1.html` through `phase4.html` — Individual phase detail pages
- `styles.css` — Shared styles for HTML pages
- `internal.html` — Internal-only docs (lab mapping, teacher assignments, JD comparison, marketing)

Static HTML 页面用**纯 HTML + CSS**，不用 React。这些是独立的 `.html` 文件，Vite build 时直接 copy 到 dist。

### Package.json 标准模板

每个 bootcamp 的 `package.json` 应该保持极简：

```json
{
  "name": "bootcamp-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.x",
    "react": "^19.x",
    "react-dom": "^19.x"
  },
  "devDependencies": {
    "@types/react": "^19.x",
    "@types/react-dom": "^19.x",
    "@vitejs/plugin-react": "^6.x",
    "typescript": "~5.9.x",
    "vite": "^8.x"
  }
}
```

不允许在此基础上添加额外的 npm 包，除非有充分理由并在 PR 中说明。

### 文件结构标准

```
bootcamp-name/
├── package.json
├── index.html              # 入口 HTML，引入 Google Fonts
├── vite.config.ts          # base: '/curriculum/bootcamp-name/'
├── tsconfig.json
├── tsconfig.app.json
├── public/                 # 静态 HTML 页面（直接 copy，不经过 Vite 处理）
│   ├── curriculum.html     # 课程概览
│   ├── phase1.html         # Phase 详情
│   ├── phase2.html
│   ├── ...
│   ├── styles.css          # 共享样式
│   └── internal.html       # 内部资料
├── src/
│   ├── main.tsx            # React 入口
│   ├── App.tsx             # SlideEngine + Slides 组装
│   ├── styles/
│   │   └── theme.ts        # 颜色、字体、常量
│   └── components/
│       ├── SlideEngine.tsx  # 翻页引擎
│       ├── ui.tsx           # 共享 UI 组件
│       └── slides/
│           ├── S01_Cover.tsx
│           ├── S02_xxx.tsx
│           └── ...
└── bun.lock
```

### Design Spec

See `DESIGN.md` for the complete presentation design system including color palette, component catalog, slide layout patterns (cover, stats, split, grid, CTA), and SlideEngine keyboard/touch interactions.
