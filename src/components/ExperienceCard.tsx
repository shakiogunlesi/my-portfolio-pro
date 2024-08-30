import React from "react";
import Image from 'next/image';
import Clogo from "../img/icons/company_logo.png";
import { Card, Col } from "react-bootstrap";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <Card.Body>
          <Image
            src={Clogo}
            alt="Company Logo"
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
            }}
            className="shadow mb-3"
          />
          <Card.Title as="h2" className="text-primary">
            {company}
          </Card.Title>
          <Card.Subtitle as="h6" className="text-muted">
            {role}
          </Card.Subtitle>
          <Card.Text className="text-muted">
            {date}
          </Card.Text>
          <Card.Text as="div" className="description my-3 text-left">
            {desc}
            {descBullets && (
              <ul>
                {descBullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
