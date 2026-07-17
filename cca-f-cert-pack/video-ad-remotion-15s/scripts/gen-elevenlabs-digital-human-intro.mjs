import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve('../../..');
const backendRoot = path.join(projectRoot, 'jr-academy');
const requireFromBackend = createRequire(path.join(backendRoot, 'package.json'));
const { MongoClient } = requireFromBackend('mongodb');

const VOICE_ID = 'bhJUNIXWQQ94l8eI2VUf'; // Amy
const SPOKEN_TARGET_SECONDS = 2.86;
const CLIP_SECONDS = 4.3;
const outputPath = path.resolve('public/audio/digital-human-intro-sync.mp3');
const rawPath = `${outputPath}.raw.mp3`;
const trimmedPath = `${outputPath}.trimmed.wav`;

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
        text: '[confident] 欢迎来到 Claude 认证架构师备考课程的第一课。',
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
    ['-y', '-i', rawPath, '-af', 'silenceremove=stop_periods=-1:stop_duration=0.12:stop_threshold=-40dB', trimmedPath],
    { stdio: 'ignore' },
  );

  const duration = Number(
    execFileSync(
      'ffprobe',
      ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', trimmedPath],
      { encoding: 'utf8' },
    ).trim(),
  );
  const tempo = duration / SPOKEN_TARGET_SECONDS;
  if (tempo < 0.5 || tempo > 2) throw new Error(`Unexpected Amy duration ${duration}s; atempo ${tempo} is out of range`);

  execFileSync(
    'ffmpeg',
    [
      '-y', '-i', trimmedPath,
      '-af', `atempo=${tempo.toFixed(6)},apad=whole_dur=${CLIP_SECONDS}`,
      '-t', String(CLIP_SECONDS), '-b:a', '128k', outputPath,
    ],
    { stdio: 'ignore' },
  );
  console.log(`Generated Amy intro: raw ${duration.toFixed(3)}s -> spoken ${SPOKEN_TARGET_SECONDS}s -> clip ${CLIP_SECONDS}s`);
} finally {
  await client.close();
  for (const file of [rawPath, trimmedPath]) {
    try {
      unlinkSync(file);
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
}
