import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve('../../..');
const backendRoot = path.join(projectRoot, 'jr-academy');
const requireFromBackend = createRequire(path.join(backendRoot, 'package.json'));
const { MongoClient } = requireFromBackend('mongodb');

const VOICE_ID = 'bhJUNIXWQQ94l8eI2VUf'; // Amy
const TTS_ATEMPO = 1.34;
const outputPath = path.resolve('public/audio/content-ad-voice-elevenlabs.mp3');
const rawPath = `${outputPath}.raw.mp3`;

const script = [
  '[confident] 成为全球华人首批 Claude 官方认证架构师。',
  'C C A R F 考的不是参数背诵，而是生产级架构判断。',
  '课程按官方考纲拆成十六节：Agent 架构、工具与 M C P、Claude Code、结构化输出、上下文可靠性，五大领域全部覆盖。',
  '再练六类场景题、近四百八十道英文原创题，每个选项都有中文精析。',
  '最后用两套六十题全真模考，在平台模式和 Pearson VUE 风格之间切换。',
  '[encouraging] 报名、学习、刷题、模考，一条路径走到考场。现在查看 Claude 官方架构师认证考试直通包。',
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
        voice_settings: { stability: 0.56, similarity_boost: 0.78 },
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
