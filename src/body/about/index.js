import React from "react";
import "./about.css";
import webdeveloper from "../../assets/web-developer-removebg.png";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Lorem ipsum dolor sit amet
          <br />
          <span className="about-info">Lorem ipsum dolor sit amet</span>
          <br /> Lorem ipsum dolor sit amet
        </div>
        <div className="about-photo">
          <img
            src={webdeveloper}
            className="about-picture"
            alt="web-developer"
          />
        </div>
        <div className="about-contact">contato</div>
      </div>
    </div>
  );
}

export default About;
