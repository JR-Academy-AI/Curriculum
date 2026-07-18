import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const envPath = path.resolve('../../../jr-academy/.env');
const env = await readFile(envPath, 'utf8');
const apiKey = env.match(/^OPENAI_API_KEY=(.+)$/m)?.[1]?.trim();

if (!apiKey) throw new Error(`OPENAI_API_KEY is missing from ${envPath}`);

const script = [
  'Claude 官方架构师认证 CCAR-F，怎么准备？',
  '这套课程把五大考试域，拆成十四章学习路径。',
  '打开网页，先按大纲逐章学习，再进入四百七十九道题库，用英文题干练真实判断。',
  '每道题不只给答案，还逐项解释干扰项为什么错。',
  '模拟考试支持平台模式和 Pearson VUE 风格，配合 AI 解析、错题复盘和分域诊断。',
  '成为全球华人首批 Claude 官方认证架构师。',
].join('');

const response = await fetch('https://api.openai.com/v1/audio/speech', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'tts-1-hd',
    voice: 'nova',
    input: script,
    speed: 1.18,
    response_format: 'mp3',
  }),
});

if (!response.ok) {
  throw new Error(`OpenAI TTS failed: ${response.status} ${await response.text()}`);
}

const outputPath = path.resolve('public/audio/product-tour-voice.mp3');
await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
console.log(`Generated ${outputPath}`);
