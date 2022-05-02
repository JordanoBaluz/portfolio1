import React from "react";
import html from "../../assets/skills/001-html-5.png";
import css from "../../assets/skills/002-css-3.png";
import reactjs from "../../assets/skills/003-physics.png";
import js from "../../assets/skills/004-js.png";
import git from "../../assets/skills/005-git.png";
import "./skills.css";

function Skills() {
  return (
    <div className="skills-div">
      <h3>Habilidades</h3>
      <div className="stack-div">
        <div>
          <img src={html} alt="html-png" />
          <p>Conhecimento no uso da linguagem de marcação HTML</p>
        </div>
        <div>
          <img src={css} alt="html-png" />
          <p>Conhecimento no uso da linguagem de estilo CSS</p>
        </div>
        <div>
          <img src={js} alt="html-png" />
          <p>Conhecimento no uso da linguagem de programação JS</p>
        </div>
        <div>
          <img src={reactjs} alt="html-png" />
          <p>Conhecimento no uso da biblioteca ReactJS</p>
        </div>
        <div>
          <img src={git} alt="html-png" />
          <p>Conhecimento no uso do sistema de versionamento Git</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
