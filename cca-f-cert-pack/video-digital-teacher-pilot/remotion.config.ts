import { Config } from '@remotion/cli/config';
import { existsSync } from 'node:fs';

Config.setCodec('h264');
Config.setPixelFormat('yuv420p');
Config.setVideoImageFormat('jpeg');
Config.setConcurrency(1);
Config.setOverwriteOutput(true);
Config.setChromiumOpenGlRenderer('angle');

const localChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (existsSync(localChrome)) {
  Config.setBrowserExecutable(localChrome);
}
