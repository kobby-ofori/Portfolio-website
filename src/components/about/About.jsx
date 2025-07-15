import React from "react";
import "./About.css";
import { Col, Container } from "react-bootstrap";
import aboutMe from "../../images/aboutMe.jpg";
import ElijahOforiResume from "../../docs/ElijahOforiResume.pdf";
import ContactModal from "./ContactModal";
import Skills from "../skills/Skills";

const About = () => {
  return (
    <Container className="about-row" id="about">
      <hr />
      <Col md={{ span: 8, offset: 3 }}>
        <div class="card mb-3" style={{ maxWidth: "900px", border: "none" }}>
          <div class="row g-0">
            <div class="col-md-4 about-me-img">
              <img src={aboutMe} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5>ABOUT ME</h5>
                <p class="card-text">
                  I'm Elijah, a passionate🌟 web & mobile app
                  developer. My journey into web development was sparked
                  by a desire to build captivating and functional websites,
                  leading me to gain expertise in cutting-edge technologies.
                  I specialize in front-end development, where I bring design concepts to life with dynamic,
                  responsive interfaces. Additionally, I'm well-versed in
                  MongoDB, Express.js, React Native, Expo, Node.js, Redux,
                  JavaScript, Python, Django, HTML, and CSS, enabling efficient
                  full-stack application development. Lifelong learning🛠️ drives
                  me to stay updated with the latest trends, and I thrive in
                  collaborative🤝 environments, fostering effective teamwork and
                  communication. Let's connect and explore how we can create
                  remarkable web experiences together!
                </p>
                <div className="btn-container">
                  <ContactModal />
                  <button onClick={() => window.open(ElijahOforiResume)}>
                    Download resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Skills />
    </Container>
  );
};

export default About;
