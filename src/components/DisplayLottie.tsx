"use client";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

// Define the Props type
type Props = {
  animationPath: string;
};

type AnimationData = { [key: string]: any }; // Adjust this type based on your data

const GreetingLottie = ({ animationPath }: Props) => {
  const [animationData, setAnimationData] = useState<AnimationData | null>(null);

  useEffect(() => {
    fetch(animationPath)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation data:", error));
  }, [animationPath]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      context: '2d',
    },
  };

  return (
    <div onClick={() => null}>
      {animationData ? <Lottie options={defaultOptions} data-testid="lottie-animation" /> : null}
    </div>
  );
};

export default GreetingLottie;
