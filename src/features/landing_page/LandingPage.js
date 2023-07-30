import React from "react";
import ad1 from "../../assets/images/lessons/ad1.jpg";
import scholar from "../../assets/images/lessons/scholar.jpg";
// import shiba from "../../assets/images/shiba2.jpg";
import math1 from "../../assets/images/math/math1.jpg"

const LandingPage = () => {
  return (
    <div className="home-wrapper">
      <section className="left box">
        <h4>A+ in Core and Elective Maths</h4>
        <img src={ad1} alt="ad1" />
        <h4>Online Maths</h4>
        <h3>Top ten topics to master before WASSSCE</h3>
        <aside>
          <img src={scholar} alt="scholar" />
          <p className="blogpost">
            LearnGH &reg; is dedicated to helping each student score A+ in core
            maths in a fun and easier way!
            <span className="pt5 block">
              <a className="lblue" href="#">
                Read&nbsp;More...
              </a>
            </span>
            <span>Tutor: Elorm</span>
            <span>Telephone: +233 24 446 8253</span>
            <span>Company: &reg;LearnGH</span>
            <span>Date: May 24, 2020</span>
            <span>
              Tags: <a href="#">Core Maths</a>,<a href="#">WASSSCE</a>,
              <a href="#">Education</a>
            </span>
          </p>
        </aside>
      </section>
      <section className="right box">
        <img src={math1} alt="math" />
        <div className="info">
          <h4>How it Works?</h4>
          <span className="white mb30 pr2">
            <p className="white mb30 pr20">
              Watch free videos and participate in exercises.
            </p>
            <p className="white mb30 pr20">Get tips on best practices</p>
            <p className="white mb30 pr20">Study anywhere.</p>
          </span>
          <ol>
            <li>
              <h3> Free Videos</h3>
              <p> Solved Past Questions</p>
            </li>
            <li>
              <h3>Great and experienced teachers</h3>{" "}
              <p> Students, Workers and Remedial Students</p>
            </li>
            <li>
              <h3> Excellent Materials</h3>
              <p> As to how you want it</p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
