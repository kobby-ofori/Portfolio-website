import React from "react";
import "./Hero.css";
import { Col, Container, Row } from "react-bootstrap";
import wavinghand from "../../images/wavinghand.png";
import profilePic from "../../images/profilePic.png";
import { ImHtmlFive2, ImCss3 } from "react-icons/im";
import {
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPostman,
} from "react-icons/si";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

const hero = () => {
  const gitHubUrl = "https://github.com/kobby-ofori?tab=repositories";
  const linkedInUrl = "https://www.linkedin.com/in/elijah-ofori-55a24622b";

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Col>
            <h2>Web & Mobile App Developer</h2>
            <p>
              Hello World{" "}
              <img src={wavinghand} alt="waving-hand" width="24px" />, I'm
              Elijah Ofori, your passionate IT enthusiast and skilled Web &
              Mobile App Developer hailing from the vibrant tech scene in Accra,
              Ghana. 🌍💻 Let's craft captivating digital experiences together!
            </p>
            <span className="social-contact">
              {/* github logo with link */}
              <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github-link" />
              </a>{" "}
              {/* linkedin logo with link */}
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="github-link" />
              </a>
            </span>
          </Col>
          <Col>
            <div className="right-t">
              <div></div>
              <div></div>
              <img src={profilePic} alt="profil-pic" />
            </div>
          </Col>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 3, offset: 3 }}>
          <div className="tech-stack programing-languages">
            <ImHtmlFive2 /> <ImCss3 /> <SiJavascript /> <SiBootstrap />{" "}
            <SiTailwindcss /> <SiReact /> <SiMongodb /> <SiExpress />{" "}
            <SiNodedotjs /> <SiPostman />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default hero;
