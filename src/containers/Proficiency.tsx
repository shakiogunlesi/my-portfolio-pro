"use client";

import React from 'react';
import GreetingLottie from '../components/DisplayLottie';

interface SkillBarsType {
  Stack: string;
  progressPercentage: number;
  // other properties...
}

interface ProficiencyProps {
  skillBarsData?: SkillBarsType[];
}

export const Proficiency: React.FC<ProficiencyProps> = ({ skillBarsData = [] }) => {
  // Handle the case where skillBarsData is undefined or not an array
  if (!Array.isArray(skillBarsData) || skillBarsData.length === 0) {
    return null;
  }

  return (
    <section className="section section-lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="h1">Proficiency</h1>
            {skillBarsData.map((skill, index) => (
              <div key={index} className="progress-info">
                <div className="progress-label">
                  <span>{skill.Stack}</span>
                </div>
                <div className="progress-percentage">
                  <span>{skill.progressPercentage}%</span>
                </div>
                <div
                  aria-label={skill.Stack}
                  className="progress"
                  role="progressbar"
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={skill.progressPercentage}
                  style={{ width: `${skill.progressPercentage}%` }}
                >
                  {/* Progress bar inner div */}
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <GreetingLottie animationPath="/lottie/build.json" />
          </div>
        </div>
      </div>
    </section>
  );
};