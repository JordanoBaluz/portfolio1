import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>
          Habilidades
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>
          Trabalhos
        </a>
      </div>
      <div className="web-option">
        <a href="#about">
          <i class="fi-rr-user option-icon"></i>
          Sobre
        </a>
      </div>
    </div>
  );
}

export default Web;
