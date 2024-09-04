"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

// Define the Props type
type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(animationPath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation data:", error);
      }
    };

    loadAnimation();
  }, [animationPath]);

  return (
    <div onClick={() => null}>
      {animationData ? (
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      ) : null}
    </div>
  );
};

export default GreetingLottie;
