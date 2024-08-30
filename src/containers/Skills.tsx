"use client";

import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-awesome-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

export const Skills = () => {
  return (
    skillsSection && (
      <Fade duration={2000} triggerOnce>
        <Container className="text-center my-5 section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => (
            <Row className="my-5" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <DisplayLottie animationPath={section.lottieAnimationFile} />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h3 className="h3 mb-2">{section.title}</h3>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  {section.softwareSkills.map((skill, i) => (
                    <Fragment key={i}>
                      <div
                        className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                        id={skill.skillName.replace(/\s/g, "")}
                        data-testid={`${skill.skillName.replace(/\s/g, "")}-icon`}
                      >
                        <Icon
                          icon={skill.iconifyTag}
                          data-inline="false"
                          aria-label={skill.skillName}
                        />
                      </div>
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={skill.skillName.replace(/\s/g, "")}
                      >
                        {skill.skillName}
                      </UncontrolledTooltip>
                    </Fragment>
                  ))}
                </div>
                <div>
                  {section.skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                  ))}
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </Fade>
    )
  );
};
