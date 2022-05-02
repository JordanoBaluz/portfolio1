import React from "react";
import "./about.css";
import webdeveloper from "../../assets/web-developer-removebg.png";
import SocialMedia from "../../socialmedia";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h4>Olá, sou Jordano Baluz</h4>
          <span className="about-info">
            Sou programador web, atualmente estudando a stack MERN, sigla que
            engloba MongoDB, Express, ReactJS e Node
          </span>
        </div>
        <div className="about-photo">
          <img
            src={webdeveloper}
            className="about-picture"
            alt="web-developer"
          />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}

export default About;
