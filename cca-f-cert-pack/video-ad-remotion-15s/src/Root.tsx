import React from 'react';
import { Composition } from 'remotion';
import { CcarFAd, DURATION_IN_FRAMES, FPS, HEIGHT, WIDTH } from './CcarFAd';
import {
  CcarFContentAd,
  CcarFContentAdDigitalHuman,
  CONTENT_AD_DURATION,
  CONTENT_AD_FPS,
  CONTENT_AD_HEIGHT,
  CONTENT_AD_WIDTH,
} from './CcarFContentAd';
import {
  CcarFYouTubeGuide,
  YOUTUBE_GUIDE_DURATION,
  YOUTUBE_GUIDE_FPS,
  YOUTUBE_GUIDE_HEIGHT,
  YOUTUBE_GUIDE_WIDTH,
} from './CcarFYouTubeGuide';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CcarFAd"
        component={CcarFAd}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="CcarFContentAd"
        component={CcarFContentAd}
        durationInFrames={CONTENT_AD_DURATION}
        fps={CONTENT_AD_FPS}
        width={CONTENT_AD_WIDTH}
        height={CONTENT_AD_HEIGHT}
      />
      <Composition
        id="CcarFContentAdDigitalHuman"
        component={CcarFContentAdDigitalHuman}
        durationInFrames={CONTENT_AD_DURATION}
        fps={CONTENT_AD_FPS}
        width={CONTENT_AD_WIDTH}
        height={CONTENT_AD_HEIGHT}
      />
      <Composition
        id="CcarFYouTubeGuide"
        component={CcarFYouTubeGuide}
        durationInFrames={YOUTUBE_GUIDE_DURATION}
        fps={YOUTUBE_GUIDE_FPS}
        width={YOUTUBE_GUIDE_WIDTH}
        height={YOUTUBE_GUIDE_HEIGHT}
      />
    </>
  );
};
