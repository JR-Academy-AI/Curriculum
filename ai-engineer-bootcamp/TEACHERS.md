# AI Engineer Bootcamp · 导师名单（Source of Truth）

> 本文件是 AI Engineer Bootcamp **导师阵容的唯一真相源**。
> 对外文案（销售页 / 海报 / 小红书 / 公众号 / Slide Deck）署名与头衔一律以本文件为准，不要各写各的。
> 更新日期：2026-08-11

---

## 一、正在上课的导师（本期带课 · 6 人）

| # | 姓名 | 公司 | 职位 |
|---|------|------|------|
| 1 | Xiaoxiao Ma | —（未公开） | Senior Applied Scientist |
| 2 | Liangjun Song | WiseTech Global | Machine Learning Engineer |
| 3 | Lightman Wang | JR Academy | Co-founder & CEO |
| 4 | Tianyi Li | V2 AI | Lead AI Engineer |
| 5 | Huansong（Winston） Zeng | Canva | Senior Software Engineer |
| 6 | Samuel Shaw | CSIRO | Research Scientist |

---

## 二、可排课导师池（备选 · 23 人）

按需求主题和期次组合排课，不是每期都上。

### 澳洲本地

| # | 姓名 | 公司 | 职位 |
|---|------|------|------|
| 1 | Notail | Smokeball | Senior AI Engineer |
| 2 | Sheldon Lin | Optus | —（待补） |
| 3 | 许光 | New Aim | Tech Lead |
| 4 | Jenny Lin | RACV | Tech Lead |
| 5 | Larry Jiang | AWS | AI Technical Architect |
| 6 | Peiyao Li | AWS | Sr. Specialist SA GenAI |
| 7 | Selina Li | Microsoft | Senior Data & AI Architect |

### 海外（美国 / 欧洲）

| # | 姓名 | 地区 | 公司 | 职位 |
|---|------|------|------|------|
| 8 | Leon | 美国 | Google | AI Engineer |
| 9 | Albert Zhou | 西雅图 | Amazon | Software Engineer |
| 10 | Joey Yang | 瑞典 | Ericsson | AI Engineer |

### 中国大陆

| # | 姓名 | 公司 | 职位 |
|---|------|------|------|
| 11 | Hao Luo | 千锋教育 | 技术总监 |
| 12 | 王刚 | CENTFOR | Senior Data Scientist |
| 13 | 黄靖锋 | 华为 | —（待补） |
| 14 | 孙玉昌 | 青软创新科技集团股份有限公司 | 大数据讲师 |
| 15 | 庞莹（Julie） | 思科 | 软件工程师 |
| 16 | 刘雨杭 | 星凡星启（成都）科技有限公司（大模型算力） | 算法工程师 |
| 17 | 闫俊杰 | 湖州云梯科技有限公司 | AI 专家 |

### 东南亚（马来西亚 / 新加坡）

| # | 姓名 | 地区 | 公司 | 职位 |
|---|------|------|------|------|
| 18 | Seng Yong Ong（Justieens） | 马来西亚 | OSY Marketing Solution | Digital Marketing Director |
| 19 | 岑玲 | 新加坡 | Neurospark Lab | 首席数据科学家 & 技术负责人 |
| 20 | Eyvonne Tan | 马来西亚 | KumHoi Engineering S/B | —（待补） |
| 21 | Wanqi Oh | 马来西亚 | Hitachi eBworx | —（待补） |
| 22 | Celine Tay | 马来西亚 | —（独立） | Practitioner-Led Trainer \| Agile Coach |
| 23 | Yee Yon Yeong | 马来西亚 | —（待补，原始名单写 "Current Company"） | Senior Python Developer & AI Engineer |

---

## 三、待确认事项

- **Xiaoxiao Ma 的公司**：名单未给公司名。Slide Deck 现有 bio 写「头部 AI 公司」，对外沿用这个措辞，直到本人确认可以署名。
- **Jason Li（Future Secure AI · Lead Engineer-Gen AI）**：曾在 Slide Deck 导师阵容里，本次名单两组都没有。**当前状态待确认** —— 未确认前已从 Slide Deck 移除，确认还在池子里就加回「可排课」表。
- **Sheldon Lin / 黄靖锋 / Eyvonne Tan / Wanqi Oh / Yee Yon Yeong 的职位**：名单未给或不完整，署名前补齐。
- **Production 后端 program.teachers**：线上快照（`public/backups/`）里还挂着 `Xia Zhou`、`Yee Yon Yeong`，和本期实际带课的 6 人对不上。需要走 `/bootcamp-sync` 或 admin 改 production，本仓库改文件不会自动同步过去。
- **`public/outline.html` 里的逐课导师署名**（Joey Yang / Samuel Shaw / Liangjun Song / Tianyi Li / Xiaoxiao Ma）是上一期的排课记录，本次没动。要按新阵容重排课，另开一轮。

---

## 四、维护规则

1. 导师有变动 → **先改本文件**，再改下游（`src/components/slides/S24_Teachers.tsx`、销售页、海报、公众号）。
2. 对外只写本文件里已确认的公司 + 职位，**不编、不夸**（不写「前 XX 大厂」除非本人确认可署名）。
3. 头衔一律用本人在职的真实 title，不做营销化改写。
4. 不承诺「导师内推」「导师保就业」这类结果（红线）。
