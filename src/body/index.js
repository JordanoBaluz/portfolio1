import React from "react";
import Contact from "./contact";
import Works from "./works";
import Skills from "./skills";
import Projects from "./projects";
import About from "./about";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Projects />
      </section>
    </div>
  );
}

export default Body;
