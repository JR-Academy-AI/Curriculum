import {execFileSync} from 'node:child_process';
import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const audioDir = path.resolve('public/audio/deep-dive');
const captionsDir = path.resolve('public/captions');
const script = JSON.parse(readFileSync(path.join(audioDir, 'script.json'), 'utf8'));
const sceneSeconds = [28, 29, 29, 32, 36, 33, 33, 26, 27, 44, 33, 29];
const sceneStarts = sceneSeconds.map((_, index) =>
  sceneSeconds.slice(0, index).reduce((sum, seconds) => sum + seconds, 0),
);

const durationOf = (file) =>
  Number(
    execFileSync(
      'ffprobe',
      ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nk=1:nw=1', file],
      {encoding: 'utf8'},
    ).trim(),
  );

const timestamp = (seconds) => {
  const milliseconds = Math.max(0, Math.round(seconds * 1000));
  const hours = Math.floor(milliseconds / 3_600_000);
  const minutes = Math.floor((milliseconds % 3_600_000) / 60_000);
  const secs = Math.floor((milliseconds % 60_000) / 1000);
  const ms = milliseconds % 1000;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`;
};

let captionIndex = 1;
const srt = [];
const transcript = [
  '# Claude 官方架构师认证：考试、课程、题库与模拟考试完整拆解',
  '',
  '> 画面：1920×1080 Remotion；旁白：ElevenLabs Amy / eleven_v3 / atempo 1.18。',
  '',
];

for (const [index, segment] of script.segments.entries()) {
  const cleanText = segment.text
    .replace(/\[[^\]]+\]\s*/g, '')
    .replaceAll('C C A R F', 'CCAR-F')
    .replaceAll('M C P', 'MCP')
    .trim();
  const sentences = cleanText
    .split(/(?<=[。！？])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  const audioDuration = durationOf(path.join(audioDir, `${segment.id}.mp3`));
  const totalWeight = sentences.reduce((sum, sentence) => sum + sentence.length, 0);
  let cursor = sceneStarts[index] + 0.15;

  transcript.push(`## ${String(index + 1).padStart(2, '0')} · ${segment.displayTitle}`, '', cleanText, '');

  for (const sentence of sentences) {
    const sentenceDuration = Math.max(1.1, audioDuration * (sentence.length / totalWeight));
    const end = Math.min(sceneStarts[index] + audioDuration, cursor + sentenceDuration);
    srt.push(String(captionIndex), `${timestamp(cursor)} --> ${timestamp(end)}`, sentence, '');
    captionIndex += 1;
    cursor = end;
  }
}

mkdirSync(captionsDir, {recursive: true});
writeFileSync(path.join(captionsDir, 'ccar-f-youtube-deep-dive-zh-v1.srt'), srt.join('\n'));
writeFileSync(path.join(captionsDir, 'ccar-f-youtube-deep-dive-transcript-v1.md'), transcript.join('\n'));
console.log(`Generated ${captionIndex - 1} captions and transcript`);
