"use client";

import React from 'react';
import { Container, Row, ProgressBar, Col } from 'react-bootstrap'; // Corrected import for react-bootstrap
import Fade from 'react-awesome-reveal';
import GreetingLottie from '../components/DisplayLottie';
import { SkillBar } from '../types/sections';

interface ProficiencyProps {
  skillBarsData: SkillBar[];
}

export const Proficiency: React.FC<ProficiencyProps> = ({ skillBarsData }) => {
  return (
    <div>
      <Container className="section section-lg">
        <Fade duration={2000} triggerOnce>
          <Row>
            <Col lg="6">
              <h1 className="h1">Proficiency</h1>
              {skillBarsData.map(skill => (
                <div key={skill.Stack}>
                  <h3>{skill.Stack}</h3>
                  <p>{skill.progressPercentage}%</p>
                  <ProgressBar
                    now={skill.progressPercentage} // Changed from "value" to "now"
                    label={`${skill.progressPercentage}%`} // Added label to show percentage
                    aria-label={skill.Stack}
                  />
                </div>
              ))}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

Proficiency.displayName = 'Proficiency';
