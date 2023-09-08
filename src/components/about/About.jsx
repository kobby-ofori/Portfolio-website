import React from "react";
import "./About.css";
import { Col, Container } from "react-bootstrap";
import aboutMe from "../../images/aboutMe.jpg";

const About = () => {
  return (
    <Container className="about-row" id="about">
      <hr/>
      <Col md={{ span: 8, offset: 3 }}>
        <div class="card mb-3" style={{ maxWidth: "900px", border: "none" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={aboutMe}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5>ABOUT ME</h5>
                <p class="card-text">
                  Greetings! I'm Elijah, a passionate🌟 front-end React
                  developer with a knack for crafting engaging and user-centric
                  web experiences. My journey🚀 into web development was sparked
                  by a desire to build captivating and functional websites,
                  leading me to gain expertise💡 in cutting-edge technologies.
                  My forte lies in front-end development, specializing in
                  React.js, where I bring design concepts to life with dynamic,
                  responsive interfaces. Additionally, I'm well-versed in
                  MongoDB, Express.js, React, Node.js, Redux, JavaScript, Markup
                  (HTML, CSS), enabling efficient full-stack application
                  development. Lifelong learning🛠️ drives me to stay updated
                  with the latest trends, and I thrive in collaborative🤝
                  environments, fostering effective teamwork and communication.
                  Let's connect and explore how we can create remarkable web
                  experiences together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default About;
