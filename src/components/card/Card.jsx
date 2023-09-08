import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-categories">
      <div className="category">
        <video src={props.video} className="card-video" fluid ></video>
      </div>
    </div>
  );
};

export default Card;
