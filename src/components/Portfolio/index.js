import React from "react";
import "./style.css";
import Project from "../Project";
const Portfolio = () => {
  return (
    <section id="portfolio" class="container p-3">
      <div id="portfolioHeader">

        <h1>Recent Projects</h1>
        <h4 class="subtitle">Visit my
      <span id="gitHub"><a href="https://github.com/sugerhater" target="_blank"> GitHub </a></span>
      to see more works by me.
    </h4>
      </div>
      <div class=" row justify-content-center">
        <Project />
        <Project />
      </div>
    </section>
  )
}

export default Portfolio;