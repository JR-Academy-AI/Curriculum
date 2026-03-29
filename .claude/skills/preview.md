# /preview — 本地预览网站

启动本地开发服务器，预览当前修改效果。

## 使用方法
```
/preview [bootcamp目录]
```
例如：`/preview ai-adoption-bootcamp`

如果不指定目录，会询问要预览哪个 bootcamp。

## 执行步骤

1. 确认要预览的 bootcamp 目录（ai-adoption-bootcamp 或 ai-engineer-bootcamp）
2. 进入该目录执行 `bun install`（如果 node_modules 不存在）
3. 执行 `bun run dev` 启动开发服务器
4. 告诉用户在浏览器打开 http://localhost:5173/ 查看 Slide Deck
5. 提醒用户：
   - Slide Deck（互动演示）在首页 `/`
   - 静态 HTML 页面直接在 `public/` 目录下，可以用浏览器直接打开文件查看
   - 按 Ctrl+C 可以停止服务器

## 注意
- 静态 HTML 页面（curriculum.html、phase1.html 等）修改后刷新浏览器即可看到变化
- Slide Deck（React）修改后会自动热更新
