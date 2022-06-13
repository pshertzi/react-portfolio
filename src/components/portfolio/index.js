import React from "react";
import Projects from "../PhotoList";

function Portfolio() {
  return (
    <section className="page-section" id="portfolio">
      <div className="box">
        <div className="container">
          <div className="text-center">
            <h1 className="title">Portfolio</h1>
            <h4 className="description">
              This consists of projects that I have completed, as well as
              projects that I will continue to work on!
            </h4>
          </div>
        </div>
        <Projects></Projects>
      </div>
    </section>
  );
}

export default Portfolio;
