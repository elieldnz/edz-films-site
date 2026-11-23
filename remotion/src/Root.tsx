import React from "react";
import { Composition } from "remotion";
import { HeroLoop } from "./HeroLoop";
export const Root: React.FC = () => (
  <>
    <Composition id="HeroLoop" component={HeroLoop} durationInFrames={300} fps={30} width={1280} height={720} />
    <Composition id="HeroCard" component={HeroLoop} durationInFrames={300} fps={30} width={720} height={900} />
  </>
);
