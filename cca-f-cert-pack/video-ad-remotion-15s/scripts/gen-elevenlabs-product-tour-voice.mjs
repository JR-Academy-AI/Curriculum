import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve('../../..');
const backendRoot = path.join(projectRoot, 'jr-academy');
const requireFromBackend = createRequire(path.join(backendRoot, 'package.json'));
const { MongoClient } = requireFromBackend('mongodb');

const VOICE_ID = 'bhJUNIXWQQ94l8eI2VUf'; // Amy
const TTS_ATEMPO = 1.18;
const outputPath = path.resolve('public/audio/product-tour-voice-elevenlabs.mp3');
const rawPath = `${outputPath}.raw.mp3`;

const script = [
  '[curious] Claude 官方架构师认证，C C A R F，怎么准备？',
  '这套课程把五大考试域，拆成十四章学习路径。',
  '打开网页，先按大纲逐章学习，再进入四百七十九道题库，用英文题干练真实判断。',
  '每道题不只给答案，还逐项解释干扰项为什么错。',
  '模拟考试支持平台模式和 Pearson VUE 风格，配合 AI 解析、错题复盘和分域诊断。',
  '[encouraging] 成为全球华人首批 Claude 官方认证架构师。',
].join('');

const env = readFileSync(path.join(backendRoot, '.env'), 'utf8');
const mongoUri = env.match(/^MONGO_URI=(.+)$/m)?.[1]?.trim();
if (!mongoUri) throw new Error('MONGO_URI is missing from jr-academy/.env');

const client = new MongoClient(mongoUri);
await client.connect();

try {
  const settings = await client.db().collection('systemsettings').findOne({ key: 'ai_settings' });
  const apiKey = settings?.aiSettings?.providers?.elevenlabs?.apiKey;
  if (!apiKey) throw new Error('ElevenLabs apiKey not found in local admin settings');

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: { 'xi-api-key': apiKey, 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        text: script,
        model_id: 'eleven_v3',
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`ElevenLabs error (${response.status}): ${await response.text()}`);
  }

  writeFileSync(rawPath, Buffer.from(await response.arrayBuffer()));
  execFileSync(
    'ffmpeg',
    ['-y', '-i', rawPath, '-filter:a', `atempo=${TTS_ATEMPO}`, '-b:a', '128k', outputPath],
    { stdio: 'ignore' },
  );
  unlinkSync(rawPath);
  console.log(`Generated ${outputPath} with ElevenLabs Amy / eleven_v3 / atempo ${TTS_ATEMPO}`);
} finally {
  await client.close();
}
