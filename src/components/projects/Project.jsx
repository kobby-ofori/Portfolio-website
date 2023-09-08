import React from "react";
import "./Project.css";
import { Col, Container, Row } from "react-bootstrap";
import ecommercePaystack from "../../videos/ecommercePaystack.webm";
import expenseTracker from "../../videos/expenseTracker.webm";
import jumpTheObstaclesGame from "../../videos/jumpTheObstaclesGame.mp4";

const Project = () => {
  return (
    <Container className="project-row" id="projects">
      <hr/>
      <Row className="justify-content-center">
        <Col md={{ span: 6, offset: 3 }}>
          <h5>PROJECTS</h5>
          <p>Built from Concept to Completion: Explore a Collection of Personal Projects.</p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 4, offset: 2 }} className="video-container">
          <video class="video" controls>
            <source src={ecommercePaystack} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <h6>aisiidifiritigiic</h6> <p>pppppppppp</p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <h6>ooooo</h6> <p>pppppppppp</p>
        </Col>
        <Col md={{ span: 4, offset: 2 }} className="video-container">
          <video class="video" controls>
            <source src={expenseTracker} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 2 }} className="video-container">
          <video class="video" controls>
            <source src={jumpTheObstaclesGame} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <h6>ooooo</h6> <p></p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <h6>ooooo</h6> <p></p>
        </Col>
        <Col md={{ span: 4, offset: 2 }} className="video-container"></Col>
      </Row>
    </Container>
  );
};

export default Project;
