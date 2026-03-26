# Presentation Design System

所有 JR Academy Presentation 项目统一遵循此设计规范。新建 presentation 时直接复制 `company-intro/src/styles/theme.ts` 和 `company-intro/src/components/ui.tsx` 作为起点。

---

## Tech Stack

```
React 19 + TypeScript + Vite 8
framer-motion (动画)
styled inline (不用 CSS 文件，全部 inline style)
```

**不要用**：styled-components、Tailwind、CSS Modules、任何 UI 库。Presentation 追求零依赖、纯 inline style。

---

## 视觉风格：Neo-Brutalism

JR Academy 的品牌风格是 **Neo-Brutalism（新野蛮主义）**，核心特征：

| 特征 | 规则 |
|------|------|
| **黑色粗边框** | 所有卡片/按钮: `border: 3px solid #000` |
| **偏移阴影** | `box-shadow: 6px 6px 0px #000`（大）或 `4px 4px 0px #000`（小）|
| **Hover 效果** | hover 时阴影消失 + 位移 `transform: translate(4px, 4px)` |
| **大号粗体标题** | `font-weight: 900`，`clamp()` 响应式字号 |
| **色块强调** | 重要文字用纯色背景 highlight，如 `<span style={{ background: '#FFDE59', padding: '4px 16px' }}>` |
| **倾斜元素** | 装饰性色块 `transform: rotate(±3~15deg)` |
| **无圆角** | 默认不用 `border-radius`（极少数例外） |

---

## 色板

```typescript
export const colors = {
  red: '#ff5757',       // JR 品牌主色
  dark: '#10162f',      // 深色背景、按钮
  yellow: '#FFDE59',    // 强调、高亮
  green: '#7ED957',     // 成功、数据
  blue: '#38B6FF',      // 信息、链接
  purple: '#CB6CE6',    // 装饰
  orange: '#FF914D',    // 警告、次要强调
  warmBg: '#fff1e7',    // 默认浅色背景 ← JR 品牌背景色
  darkBg: '#1a1a2e',    // 深色 slide 背景
  white: '#ffffff',
  black: '#000000',
  indigo: '#6366f1',    // AI/Tech 主题（AI Adoption 用）
  teal: '#10b981',      // AI/Tech 辅助色
} as const;
```

**用法原则**：
- 每个 presentation 可以有自己的主题色（如 AI Adoption 用 indigo/teal），但 `red`、`warmBg`、`dark` 是 JR 品牌色必须保留
- Cover slide 通常用 `dark` 或 `black` 背景
- 内容 slide 用 `warmBg` 或 `white`
- 交替使用不同背景色避免视觉疲劳

---

## 字体

```typescript
export const fonts = {
  heading: '"Bricolage Grotesque", "Noto Sans SC", sans-serif',  // 标题
  body: '"DM Sans", "Noto Sans SC", sans-serif',                  // 正文
  mono: '"Space Mono", monospace',                                  // 数据/标签/代码
} as const;
```

在 `index.html` 中引入：
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet" />
```

**字号规则**：
- 标题：`clamp(36px, 5vw, 64px)` — 响应式，16:9 ratio 下自适应
- 副标题：`clamp(16px, 2vw, 22px)`
- 正文：14-16px
- 标签/badge：12-14px, `font-family: fonts.mono`
- 数据大字：36-56px, `font-weight: 900`

---

## 核心 UI 组件

从 `ui.tsx` 导入使用，不要重新造：

### 布局

| 组件 | 用途 | 示例 |
|------|------|------|
| `<Slide bg={color}>` | Slide 容器，全屏 | `<Slide bg={colors.warmBg}>` |
| `<Inner center>` | 内容居中容器 | 用于统计/标题页 |
| `<Inner split>` | 左右分栏 | 配合 `<Half>` 使用 |
| `<Half>` | 半栏 | 在 `<Inner split>` 内 |
| `<Grid cols={3}>` | 网格布局 | 卡片列表 |

### 文字

| 组件 | 用途 |
|------|------|
| `<Title>` | 大标题，`font-weight: 900` |
| `<Title white>` | 白色标题（深色背景用） |
| `<Subtitle>` | 副标题，灰色 |
| `<Highlight color={bg}>` | 纯色背景高亮文字 |
| `<BulletList items={[...]}>` | 带 `→` 前缀的列表 |
| `<Tag bg={color}>` | 小标签 badge |

### 卡片

| 组件 | 用途 |
|------|------|
| `<Card>` | 大卡片，3px 边框 + 6px 阴影 + hover 动画 |
| `<CardSm>` | 小卡片，2px 边框 + 4px 阴影 |

### 动画

| 组件 | 用途 |
|------|------|
| `<Stagger>` | 子元素依次出现 (stagger 0.08s) |
| `<StaggerItem>` | Stagger 的子项 |
| `<Divider center>` | 标题下的装饰横线 |

---

## Slide 设计模式

### 1. Cover Slide（封面）

```
背景: colors.black 或 colors.dark
元素:
├── 倾斜色块装饰 (absolute positioned, rotate)
├── JR Logo badge (白色卡片 + 黑边 + 阴影)
├── 大号标题 (clamp 响应式, text-shadow)
├── 高亮关键词 (黄色背景 + 黑边)
├── 副标题 (borderLeft 强调)
└── 底部 tag 行 (monospace 标签)
```

### 2. 数据统计 Slide

```
背景: colors.warmBg
布局: <Inner center>
元素:
├── <Title> + <Divider center>
├── <Stagger> 3-4 列 <Card>
│   ├── 大号数字 (56px, font-weight 900)
│   ├── 标题文字
│   └── 说明文字 (灰色)
└── 底部补充说明
```

### 3. 左右对比 Slide

```
背景: colors.white
布局: <Inner split> + <Half> × 2
左半:
├── <Title>
├── <Divider>
├── 说明文字
└── <Tag> 标签
右半:
├── 多个 <Card> 堆叠
└── 或 <BulletList>
```

### 4. 网格卡片 Slide

```
背景: colors.white 或浅色
布局: <Inner center>
元素:
├── <Title> + <Divider center>
└── <Stagger> + grid (3-4 列)
    └── <CardSm> × N
        ├── emoji 图标
        ├── 标题
        └── 内容
```

### 5. CTA 结尾 Slide

```
背景: colors.dark
元素:
├── 旋转圆圈装饰 (animate rotate 无限循环)
├── 大号标题 + 高亮关键词
├── 副标题 (半透明白色)
├── 按钮组 (黄色主按钮 + 白色边框次按钮)
└── 底部数据指标行
```

---

## SlideEngine 交互

所有 presentation 共用同一个 `SlideEngine.tsx`：

| 功能 | 操作 |
|------|------|
| 下一页 | `→` / `↓` / `Space` / 鼠标滚轮 / 触摸左滑 |
| 上一页 | `←` / `↑` / 触摸右滑 |
| 全屏 | 按 `F` |
| 跳转 | 点击底部导航点 |

Progress bar 颜色可以自定义（company-intro 用 `colors.red`，ai-adoption 用 `colors.indigo`）。

---

## 文件结构

新建 presentation 时按此结构：

```
presentations/
└── your-presentation/
    ├── package.json
    ├── index.html          # 引入 Google Fonts
    ├── vite.config.ts      # base: '/presentation/your-presentation/'
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── public/
    │   └── images/         # 图片资源
    ├── src/
    │   ├── main.tsx
    │   ├── App.tsx          # SlideEngine + Slides 组装
    │   ├── styles/
    │   │   └── theme.ts     # 复制 company-intro 的，按需加主题色
    │   └── components/
    │       ├── SlideEngine.tsx  # 复制 company-intro 的
    │       ├── ui.tsx           # 复制 company-intro 的，按需加组件
    │       └── slides/
    │           ├── S01_Cover.tsx
    │           ├── S02_xxx.tsx
    │           └── ...
    └── bun.lock
```

**命名规则**：Slide 文件用 `S01_Cover.tsx`、`S02_Problem.tsx` 格式，序号两位数 + 下划线 + 描述性名称。

---

## 部署

1. 在 `.github/workflows/deploy.yml` 的 build steps 中添加你的 presentation
2. 在 Assemble output 中 `cp -r your-presentation/dist/* _site/your-presentation/`
3. 在首页索引 `_site/index.html` 中添加链接
4. Push 到 main 分支自动部署到 GitHub Pages

---

## Checklist：新建 Presentation 前检查

- [ ] 复制 `theme.ts` 和 `ui.tsx` 作为基础
- [ ] `vite.config.ts` 设置正确的 `base` 路径
- [ ] `index.html` 引入 Google Fonts
- [ ] 第一张 slide 是 Cover（深色背景 + JR Logo）
- [ ] 最后一张 slide 是 CTA
- [ ] 所有卡片有 `border: 3px solid #000` + `box-shadow`
- [ ] Hover 效果：阴影消失 + 位移
- [ ] 标题用 `clamp()` 响应式字号
- [ ] 数据/标签用 `Space Mono` 字体
- [ ] 配色不超过 3-4 个主色（品牌色 + 1-2 个主题色）
- [ ] 更新 `deploy.yml` 和首页索引
