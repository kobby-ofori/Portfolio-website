import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import { BsLink45Deg, BsTelephoneOutboundFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const gitHubUrl = "https://github.com/kobby-ofori?tab=repositories";
  const linkedInUrl = "https://www.linkedin.com/in/elijah-ofori-55a24622b";
  const twitterUrl =
    "https://twitter.com/KobbyOfori7?t=gP2rllPP7ZeN2yWWkSYQvg&s=09";
  const whatsAppUrl = "https://wa.me/+233501081707";
  return (
    <Container className="contact-page" id="contact">
      <hr />
      <Row className="contact-info">
        <h5>Contact Information</h5>
        <Col xs={12} md={4}>
          <p>
            <strong>Residence:</strong> Accra, Ghana
            <GrLocationPin />
          </p>
          <p>
            <strong>
              Tel <BsTelephoneOutboundFill /> :
            </strong>{" "}
            [+233 557090807] [+233 501081707]
          </p>
          <p>
            
              <SiGmail />
              kobbyofori9@gmail.com
            
          </p>
        </Col>
        <Col xs={12} md={4}>
          <h6>Social Links:</h6>
          <ul className="social-links">
            <li>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
                LinkedIn <BsLink45Deg />
                <FiExternalLink />
              </a>
            </li>
            <li>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp />
                WhatsApp <BsLink45Deg />
                <FiExternalLink />
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <h6>GitHub:</h6>
          <p>
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
              <BsGithub />
              My GitHub Profile <BsLink45Deg />
              <FiExternalLink />
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
