import React from "react";
import "./Footer.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

const Footer = () => {
  const gitHubUrl = "https://github.com/kobby-ofori?tab=repositories";
  const linkedInUrl = "https://www.linkedin.com/in/elijah-ofori-55a24622b";

  return (
    <>
    <hr/>
    <Container className="footer-page" id="footer">
      <Row className="footer-row">
        <div>
          <Nav className="flex-column">
            <Nav.Link>
              <span className="footer-nav">Home</span>
            </Nav.Link>
            <div className="horizontal-row"></div>
            <Nav.Link>
              <span className="footer-nav">About</span>
            </Nav.Link>
            <div className="horizontal-row"></div>
            <Nav.Link>
              <span className="footer-nav">Projects</span>
            </Nav.Link>
            <div className="horizontal-row"></div>
            <Nav.Link>
              <span className="footer-nav">Contact</span>
            </Nav.Link>
            <div className="horizontal-row"></div>
          </Nav>
        </div>
      </Row>
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
        <Col><p className="footer-copyright">&copy; 2023 by Elijah Ofori</p></Col>
      </Row>
    </Container>
    </>
  );
};

export default Footer;
