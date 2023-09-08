import React from "react";
import "./Project.css";
import { Col, Container, Row } from "react-bootstrap";
import ecommercePaystack from "../../videos/ecommercePaystack.webm";
import expenseTracker from "../../videos/expenseTracker.webm";
import jumpTheObstaclesGame from "../../videos/jumpTheObstaclesGame.mp4";
import tourGhana from "../../videos/tourGhana.mp4";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Project = () => {
  return (
    <Container className="project-row project-page" id="projects">
      <hr />
      <Row className="justify-content-center">
        <Col md={{ span: 6, offset: 3 }}>
          <h5>PROJECTS</h5>
          <p>
            Built from Concept to Completion: Explore a Collection of Personal
            Projects.
          </p>
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
          <h6>Ecommerce Website</h6>{" "}
          <p>
            This an online platform that allows users to buy attires. Payment is
            done with paystack. I developed this e-commerce web app using
            React.js and Redux, styled it with React-Bootstrap.
          </p>
          <span>
            <a
              href="https://github.com/kobby-ofori/E-commerce_webapp_with_paystack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
              <BsGithub />
            </a>
          </span>{" "}
          <span>
            <a href="" target="_blank" rel="noopener noreferrer">
              Live Demo
              <FiExternalLink />
            </a>
          </span>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <h6>Explore my React-based Expense Tracker app</h6>{" "}
          <p>
            A powerful tool to manage your finances efficiently. With this
            user-friendly application, you can effortlessly track your expenses
            and income. Experience seamless Create, Read, Update, and Delete
            (CRUD) operations that put you in control of your financial journey.
            Take charge of your expenses today!
          </p>
          <span>
            <a
              href="https://github.com/kobby-ofori/Simple-expense-tracker-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
              <BsGithub />
            </a>
          </span>{" "}
          <span>
            <a href="" target="_blank" rel="noopener noreferrer">
              Live Demo
              <FiExternalLink />
            </a>
            <br />
            <br />
          </span>
        </Col>
        <Col md={{ span: 4, offset: 2 }} className="video-container">
          <video class="video" controls>
            <source src={expenseTracker} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={{ span: 4, offset: 2 }} className="video-container">
          <video class="video" controls>
            <source src={jumpTheObstaclesGame} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <h6>Jump The Obstacles Game</h6>{" "}
          <p>
            In this game, the player (red) must jump over the obstacles (green)
            to avoid contact (being killed). The timer represents the player's
            score, with a higher timer indicating a higher score. This game was
            developed using HTML5 canvas and JavaScript.
          </p>
          <span>
            <a
              href="https://github.com/kobby-ofori/jump-the-obstacles-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
              <BsGithub />
            </a>
          </span>{" "}
          <span>
            <a href="" target="_blank" rel="noopener noreferrer">
              Live Demo
              <FiExternalLink />
            </a>
          </span>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <h6>Tour Ghana Website</h6>{" "}
          <p>
            Tour Ghana educates its users on some tourist sites in Ghana. This
            website introduce visitors to some rich Ghanaian culture & heritage
          </p>
          <span>
            <a
              href="https://github.com/kobby-ofori/monthly-project3-ver-1.01.23"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
              <BsGithub />
            </a>
          </span>{" "}
          <span>
            <a href="" target="_blank" rel="noopener noreferrer">
              Live Demo
              <FiExternalLink />
            </a>
          </span>
        </Col>
        <Col md={{ span: 4, offset: 2 }} className="video-container">
          <video class="video" controls>
            <source src={tourGhana} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
