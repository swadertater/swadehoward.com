import React, { ReactElement } from "react";
import "./Introduction.css";

const Introduction = (): ReactElement => {
  return (
    <div className="introduction">
      Born and raised in southern Illinois. Grew up playing a lot of video games
      and baseball. Attended Southern Illinois Unviersity Edwardsville from
      <span className="text-nowrap">2016 - 2020.</span> During my undergrad, I
      did an internship at Hunter Engineering. Taught some web development at
      LaunchCode. Did and internship at World Wide Technology. Did an internship
      at Less Annoying CRM. Did an internship at ArchitectNow. Currently working
      as a software engineer (basically just a full-stack web-dev position) at
      ArchitectNow. In my free time you can catch me at the gym trying to hit
      365 on deadlifts, on Steam playing some video games, or in the kitchen
      cooking (probably making an Indian dish because it's the best cuisine to
      ever exist).
    </div>
  );
};

export default Introduction;
