import React from "react";
import profileImage from "../../assets/cover/paul-photo.jpg";
import Resume from "../../assets/Resume.pdf";

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
          I graduated from The Florida State University in 2015 with a batchlers
          degree in Business. After completing an managment training programs in
          Nasvile and Orlando, I moved to Maui Hawaii and worked for the
          Sheraton Maui. I spent Three years in Maui and worked several hotel
          manager positions. I moved back to my hometown Tampa Florida in 2021
          and after working a half year as a bar manager at the JW Waterside I
          decied to change careers and recived a Web Development and Coding
          Certification at Vanderbilt University.
        </p>
        <button>
          <a
            href="https://github.com/pshertzi"
            style={{ textDecoration: "none", color: "#ffffff" }}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </button>
        <button>
          <a
            href=" https://www.linkedin.com/in/paul-shertzinger-5a9869b3/"
            style={{ textDecoration: "none", color: "#ffffff" }}
            target="_blank"
            rel="noreferrer"
          >
            Linkden
          </a>
        </button>
        <button>
          <a
            href={Resume}
            style={{ textDecoration: "none", color: "#ffffff" }}
            target="_blank"
            rel="noreferrer"
            download
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
