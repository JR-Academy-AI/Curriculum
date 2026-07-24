import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {readFileSync, unlinkSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve('../../..');
const backendRoot = path.join(projectRoot, 'jr-academy');
const requireFromBackend = createRequire(path.join(backendRoot, 'package.json'));
const {MongoClient} = requireFromBackend('mongodb');

const VOICE_ID = 'bhJUNIXWQQ94l8eI2VUf'; // Amy
const TTS_ATEMPO = 1.18;
const outputPath = path.resolve('public/audio/youtube-guide-body-elevenlabs.mp3');
const rawPath = `${outputPath}.raw.mp3`;

const script = [
  '[confident] 先看一道典型场景。客服 Agent 可以查询订单，也可以执行退款；公司规定，身份没有验证通过，绝对不能退款。',
  '四个方案：第一，在 system prompt 里再强调一次。第二，退款以后用 Post Tool Use 记日志。第三，失败就自动重试。第四，在工具执行前用 Pre Tool Use 检查验证状态，不满足就 deny。',
  '应该选第四个。因为题干里的“绝对不能”是硬约束。概率性的 prompt 不能提供百分之百保障，事后日志也阻止不了已经发生的退款，盲目重试更没有解决权限问题。',
  '把这个判断压缩成三步：先圈出题干的硬约束；再判断需要概率性引导，还是确定性执行；最后选能在正确时点解决根因的最简单方案。',
  '偏好和语气用 prompt。资金、权限、隐私这类红线用代码或 hook。只有超时等 transient error，才值得有限重试。C C A R F 很多场景题，都能用这套方法先排掉两个干扰项。',
  '课程把官方五大领域拆成十六节，再用六类场景题和近四百八十道英文原创题训练判断，每个选项都有中文精析。',
  '最后进入两套六十题、每套一百二十分钟的模拟考试。平台模式用来学习解析，Pearson VUE 风格用来练考场节奏。',
  '[encouraging] 你学到的不只是答案，而是一套能迁移到新题的架构判断框架。课程详情见视频下方链接。',
].join('');

const env = readFileSync(path.join(backendRoot, '.env'), 'utf8');
const mongoUri = env.match(/^MONGO_URI=(.+)$/m)?.[1]?.trim();
if (!mongoUri) throw new Error('MONGO_URI is missing from jr-academy/.env');

const client = new MongoClient(mongoUri);
await client.connect();

try {
  const settings = await client.db().collection('systemsettings').findOne({key: 'ai_settings'});
  const apiKey = settings?.aiSettings?.providers?.elevenlabs?.apiKey;
  if (!apiKey) throw new Error('ElevenLabs apiKey not found in local admin settings');

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: {'xi-api-key': apiKey, 'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        text: script,
        model_id: 'eleven_v3',
        voice_settings: {stability: 0.56, similarity_boost: 0.78},
      }),
    },
  );

  if (!response.ok) throw new Error(`ElevenLabs error (${response.status}): ${await response.text()}`);

  writeFileSync(rawPath, Buffer.from(await response.arrayBuffer()));
  execFileSync(
    'ffmpeg',
    ['-y', '-i', rawPath, '-filter:a', `atempo=${TTS_ATEMPO}`, '-ar', '48000', '-b:a', '192k', outputPath],
    {stdio: 'ignore'},
  );
  unlinkSync(rawPath);
  console.log(`Generated ${outputPath} with ElevenLabs Amy / eleven_v3 / atempo ${TTS_ATEMPO}`);
} finally {
  await client.close();
}
