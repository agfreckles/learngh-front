import React from "react";
import "./learn-home.scss";
import { cardData } from "./data";
import { NavLink } from "react-router-dom";

const LearnHome = () => {
  const cardArray = cardData.map(({ id, header, content }) => {
    return (
      <div className="card" key={id}>
        <NavLink id="nav" to={`/learn/${id}`}>
          <h4>{header}</h4>
          <p>{content}</p>
        </NavLink>
      </div>
    );
  });
  return <div className="learn-home-wrapper">{cardArray}</div>;
};
export default LearnHome;
