import React from "react";
import "./ProjectCard.css";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import ExtendableText from "./ExtendableText";

const ProjectCard = (props) => {
  return (
    <div className="project-info-card">
      <div className="project-video-div">
        <video className="video" controls>
          <source src={props.projectMedia} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-title">
        <img src={props.projectIcon} alt="project-icon" className="project-icon" />
        <span>{props.title}</span>
      </div>
      <div className="project-description">
        <ExtendableText text={props.description} limit={120} />
        {/* <p>{props.description}</p> */}
        <span className="project-description-link">
          <a
            href={props.linkAddress1}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkText1}
            <BsGithub />
          </a>
        </span>{" "}
        <span>
          <a
            href={props.linkAddress2}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkText2}
            <FiExternalLink />
          </a>
        </span>
      </div>
      <div className="project-card-action-btn">
        <a href={props.linkAddress2} target="_blank" rel="noopener noreferrer">
          <button className="action-btn">{props.buttonText}</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
