"use client";


import React, { useEffect } from "react";
import Image from 'next/image';
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SocialLinks from "../components/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import ProfileImg from '../img/my_pix2.png';


export const Greetings: React.FC = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <Navigation />
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">{greetings.title + " "}</h1>
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-black btn-icon mb-3 mb-sm-0 ml-1 px-4 py-3 font-semibold text-lg"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <FontAwesomeIcon icon={faFile}/>
                        </span>
                        <span className="btn-inner--text text-white">See My Resume</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg={6} className="pt-5">
                  <Image
                    src={ProfileImg}
                    style={{ width: "350px", height: "350px" }}
                    alt=""
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                  />
                </Col>
              </Row>
            </div>
          </Container>
          
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};



Greetings.displayName = 'Greetings';
