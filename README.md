# JR Academy Curriculum

课程大纲与 Marketing 素材的静态站点。

## 项目结构

```
curriculum/
├── ai-adoption-bootcamp/     # AI Adoption Specialist Bootcamp
│   ├── src/                  # React Slide Deck (13 slides)
│   ├── public/
│   │   └── curriculum.html   # 课程结构详情页 (静态 HTML)
│   └── package.json
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions → SCP to server
└── DESIGN.md                 # 设计规范
```

## 本地开发

```bash
cd ai-adoption-bootcamp
bun install
bun run dev
```

## 部署

Push to `main` → GitHub Actions build → SCP to nginx server → `jiangren.com.au/curriculum/`

## 添加新课程

1. 复制一个现有课程目录
2. 改 `vite.config.ts` 的 `base` 路径
3. 在 `deploy.yml` 中添加 build 和 copy 步骤
4. 遵循 `DESIGN.md` 设计规范
