import React from "react";
import ContactForm from "../contact";
import profileImage from "../../assets/cover/paul-photo.jpg";
import Resume from "../../assets/resume.pdf";

function Home() {
  return (
    <section class="flex-parent-element">
      <div class="flex-child-element">
        <h1 id="about">Paul Shertzinger</h1>
        <img src={profileImage} className="my-2" alt="cover" />
      </div>
      <div class="flex-child-element">
        <h1 id="about">About Me</h1>
        <p>
          Heavily experienced customer service manager with a broad tech and
          systems knowledge base. Skilled in people and project management and
          able to work well under pressure. Able to move fast, utilize multiple
          resources, and lead a team effectively. Solutions driven and looking
          to transition into the tech field and incorporate web development and
          coding into my career post education.
        </p>
        <button>
          <a
            href={Resume}
            style={{ textDecoration: "none", color: "#ffffff" }}
            target="_blank"
            rel="noreferrer"
          >
            Check out my resume!
          </a>
        </button>
        <button>
          <a
            href="mailto: pshertzi@gmail.com"
            style={{ textDecoration: "none", color: "#ffffff" }}
            target="_blank"
            rel="noreferrer"
          >
            Contact me!
          </a>
        </button>
      </div>
    </section>
  );
}

export default Home;
