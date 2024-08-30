"use client";

import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-awesome-reveal";
import { Col, Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";  // Corrected the import to "react-bootstrap"
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

export const Skills: React.FC = () => {
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
                      <OverlayTrigger
                        delay={{ show: 250, hide: 400 }} // Added delay with show/hide settings
                        placement="bottom"
                        overlay={
                          <Tooltip id={`tooltip-${i}`}>
                            {skill.skillName}
                          </Tooltip>
                        }
                      >
                        <div>
                          {/* The div wraps the icon to apply the overlay trigger */}
                        </div>
                      </OverlayTrigger>
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

Skills.displayName = "Skills";
