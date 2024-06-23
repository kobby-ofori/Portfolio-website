import React from "react";
import "./Project.css";
import { Col, Container, Row } from "react-bootstrap";
import ecommercePaystack from "../../videos/ecommercePaystack.webm";
import expenseTracker from "../../videos/expenseTracker.webm";
import jumpTheObstaclesGame from "../../videos/jumpTheObstaclesGame.mp4";
import tourGhana from "../../videos/tourGhana.mp4";
import ProjectCard from "./ProjectCard";
import ecommerceLogo from "../../images/ecommerceLogo.png";
import expense from "../../images/expense.png";
import boy from "../../images/boy.png";
import tourGh from "../../images/tourGh.png";

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
        <Col md={{ span: 4, offset: 2 }}>
          <ProjectCard
            projectMedia={ecommercePaystack}
            title="Ecommerce Website"
            projectIcon={ecommerceLogo}
            description="This an online platform that allows users to buy attires. Payment is
            done with paystack. I developed this e-commerce web app using
            React.js and Redux, styled it with React-Bootstrap."
            linkAddress1="https://github.com/kobby-ofori/E-commerce_webapp_with_paystack"
            linkText1="Code"
            linkAddress2="https://shirt-fair.netlify.app/"
            linkText2="Live Demo"
            buttonText="Visit"
          />
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <ProjectCard
            projectMedia={expenseTracker}
            title="Expense Tracker app"
            projectIcon={expense}
            description="A powerful tool to manage your finances efficiently. With this
            user-friendly application, you can effortlessly track your expenses
            and income. Experience seamless Create, Read, Update, and Delete
            (CRUD) operations that put you in control of your financial journey.
            Take charge of your expenses today!"
            linkAddress1="https://github.com/kobby-ofori/Simple-expense-tracker-app"
            linkText1="Code"
            linkAddress2="https://expensetracker-track.netlify.app/"
            linkText2="Live Demo"
            buttonText="Visit"
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <ProjectCard
            projectMedia={jumpTheObstaclesGame}
            title="Jump The Obstacles Game"
            projectIcon={boy}
            description="In this game, the player (red) must jump over the obstacles (green)
            to avoid contact. The timer represents the player's score, with a
            higher timer indicating a higher score. This game was developed
            using HTML5 canvas and JavaScript."
            linkAddress1="https://github.com/kobby-ofori/jump-the-obstacles-game"
            linkText1="Code"
            linkAddress2="https://jump-the-obstacles-game.vercel.app/"
            linkText2="Live Demo"
            buttonText="Play"
          />
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <ProjectCard
            projectMedia={tourGhana}
            title="tourGhana"
            projectIcon={tourGh}
            description="Tour Ghana educates its users on some tourist sites in Ghana. This website introduce visitors to some rich Ghanaian culture & heritage"
            linkAddress1="https://github.com/kobby-ofori/monthly-project3-ver-1.01.23"
            linkText1="Code"
            linkAddress2="https://tour-gh.vercel.app/"
            linkText2="Live Demo"
            buttonText="Visit"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
