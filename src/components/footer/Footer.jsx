import React from "react";
import "./Footer.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import { Link } from "react-scroll";

const Footer = () => {
  const gitHubUrl = "https://github.com/kobby-ofori?tab=repositories";
  const linkedInUrl = "https://www.linkedin.com/in/elijah-ofori-55a24622b";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr />
      <Container className="footer-page" id="footer">
        <Row className="footer-row">
          <div>
            <Nav className="flex-column">
              <Nav.Link>
                <Link to="home" span={true} smooth={true}>
                  <span className="footer-nav">Home</span>
                </Link>
              </Nav.Link>
              <div className="horizontal-row"></div>
              <Nav.Link>
                <Link to="about" span={true} smooth={true}>
                  <span className="footer-nav">About</span>
                </Link>
              </Nav.Link>
              <div className="horizontal-row"></div>
              <Nav.Link>
                <Link to="projects" span={true} smooth={true}>
                  <span className="footer-nav">Projects</span>
                </Link>
              </Nav.Link>
              <div className="horizontal-row"></div>
              <Nav.Link>
                <Link to="contact" span={true} smooth={true}>
                  <span className="footer-nav">Contact</span>
                </Link>
              </Nav.Link>
              <div className="horizontal-row"></div>
            </Nav>
          </div>
        </Row>
        <br />
        <Row className="justify-content-center align-items-center">
          <Col md={{ span: 6, offset: 3 }}>
            {/* github logo with link */}
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github-link" />
            </a>{" "}
            {/* linkedin logo with link */}
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="github-link" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-copyright">
              &copy; 2023 - {currentYear} By Elijah Ofori{" "}
              <p>All Rights Reserved.</p>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
