import React from "react";
import "./socialmedia.css";
import { SocialMediaData } from "../data/socialmedia";

function SocialMedia() {
  const data = SocialMediaData;
  return (
    <div className="social-media">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} alt={`icon-${item.plataform}`} />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
