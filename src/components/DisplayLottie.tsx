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
    fetch(animationPath)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation data:", error));
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
