"use client";

import React, { useState, useEffect, useRef } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseClasses, setCollapseClasses] = useState("");
  const headroomRef = useRef<Headroom | null>(null); // Ref to hold Headroom instance

  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    const navbar = document.getElementById("navbar-main");
    if (navbar) {
      headroomRef.current = new Headroom(navbar);
      headroomRef.current.init();
    }
  }, []); // Ensure this runs only once by adding an empty dependency array

  const toggleNavbar = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className={`navbar-toggler ${collapseOpen ? "collapsed" : ""}`} // Add 'collapsed' class based on state
              aria-label="Toggle navigation"
              id="navbar-toggle"
              title="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Collapse
              isOpen={collapseOpen}
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar-toggle-close"
                      title="Close navigation"
                      onClick={toggleNavbar}
                    >
                      <span className={`navbar-toggler-icon ${collapseOpen ? "collapsed" : ""}`} />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto mt-[-80px]" navbar>
              {socialLinks.facebook && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Facebook"
                      className="nav-link-icon"
                      href={socialLinks.facebook}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebookSquare} />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.instagram && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Instagram"
                      className="nav-link-icon"
                      href={socialLinks.instagram}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.github && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Github"
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Linkedin"
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.twitter && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Twitter"
                      className="nav-link-icon"
                      href={socialLinks.twitter}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
