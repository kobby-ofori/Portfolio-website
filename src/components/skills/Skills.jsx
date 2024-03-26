import React from "react";
import "./Skills.css";
import { Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <Container>
      <Row>
        <h5>Skills</h5>
        <Col md={{span:4, offset:2}}>
          <div className="experience-item">
            <div className="experience-info">
              <p>HTML</p>
              <p>95%</p>
            </div>
            <div className="progress-line" data-percent="95%">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>CSS</p>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>JAVASCRIPT</p>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>PYTHON</p>
              <p>70%</p>
            </div>
            <div className="progress-line" data-percent="70%">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
        </Col>

        <Col md={{span:4, offset:2}}>
          <div className="experience-item">
            <div className="experience-info">
              <p>DJANGO</p>
              <p>65%</p>
            </div>
            <div className="progress-line" data-percent="65%">
              <span style={{ width: "65%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>REACT</p>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>REACT-NATIVE</p>
              <p>70%</p>
            </div>
            <div className="progress-line" data-percent="70%">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>AWS CERTIFIED CLOUD PRACTITIONER</p>
              <p>95%</p>
            </div>
            <div className="progress-line" data-percent="95%">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
