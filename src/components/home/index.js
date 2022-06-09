import React from "react";
import profileImage from "../../assets/cover/paul-photo.jpg";

function Home() {
  return (
    <section className="my-5">
      <h1 id="about">Paul Shertzinger</h1>
      <img src={profileImage} className="my-2" alt="cover" />
      <div className="my-2">
        <p>Hello and welcome to my portfolio</p>
      </div>
    </section>
  );
}

export default Home;
