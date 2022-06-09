import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">Home</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/portfolio">
              <p className="nav">Portfolio</p>
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/about">
              <p className="nav">About</p>
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">
              <p className="nav">Contact</p>
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/resume">
              <p className="nav">Resume</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
