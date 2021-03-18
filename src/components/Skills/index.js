import React from "react";
import "./style.css";

const Skills = () => {
  return (
    <section class="container skills">
    <div class="skillsCard">
      <h2><i class="fas fa-code"></i></h2>
      <h3>Technical Skills</h3>
      <p>
        HTML5, CSS3, ES6, JavaScript, jQuery, Bootstrap, Bulma, Node.js, AJAX, MySQL, NoSQL, Express,
        HandlebarsJS, Git, Github, npm, Postman
      </p>
      <p id="skillsIcon">
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js-square"></i>
        <i class="fab fa-npm"></i>
        <i class="fab fa-node"></i>
        <i class="fab fa-git"></i>
      </p>
    </div>
  </section>
  )
}

export default Skills;