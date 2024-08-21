"use client";


import React from "react";
import Image from 'next/image';
import { Card, Col, Row, Container } from "reactstrap";
import ProfilePix from '../img/my_pix2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
// import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

export const GithubProfileCard = () => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2">
              <Image
                src={ProfilePix}
                style={{ width: "250px", height: "250px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
              <p className="text-white mt-3">I am a Frontend Web Developer with proficient in HTML | CSS | JavaScript |  React.js | Next.js | Tailwind CSS | Bootstrap Framework | Wordpress Builder</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <FontAwesomeIcon icon={faMapMarker} className="text-info mr-2" />
                {/* <i className="fa fa-map-marker  mr-2" /> */}
                <p className="font-semibold pt-6">Mobile No: +2349030941795,<br /> +2348088980170</p>
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

// export default GithubProfileCard;
