import React from "react";
import "./index.css";
import profilePic from "../../assets/images/profile.jpeg";

function About() {
  return (
    <section class="flex-container">
      <div>
        <img src={profilePic} alt="Paul Shertzinger" width="300" height="400" />
      </div>
      <div class = "flex-child">
        <h2> Paul Shertzinger</h2>
        <p>
          I am a full stack web developer with a background in managment and
          team leadership
        </p>
        <p>
          After graduating from Florida State University I started my
          professional career in Hospitaly with Marriott. For the next six years
          I worked in multiple positions across the country including Maui, HI,
          Nashville, TN and Tampa, FL.
        </p>
        <p>
          I have recently aquired a Web Development and Coding Certification
          from Vanderbilt University in May 2022
        </p>
      </div>
    </section>
    
  );
}

export default About;
