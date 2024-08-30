"use client";


import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-awesome-reveal";
import '@fortawesome/fontawesome-free/css/all.css';



export const Projects: React.FC = () => {
  // Inside the Projects component
  if (!projects || projects.length === 0) {
    return null; // or return a placeholder if appropriate
  }
  
  return (
    projects && (
      <Fade duration={2000} triggerOnce>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-laptop"></i>
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Projects</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {projects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};


Projects.displayName = 'Projects';