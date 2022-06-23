import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      name: "Access Tennessee",
      link: "https://access-tennesee.herokuapp.com/",
      description:
        "This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.",
      github: "https://github.com/ashleyhodge/Access-Tennessee",
    },
    {
      name: "Hanzai Watchers",
      link: "https://hanzai-watchers.herokuapp.com/",
      description:
        " Hanzai Watchers or Crime Watchers is an application made with React on the frontend and MongoDB on the backend that allows users to connect with other users around the world about crime information in their area. It also allows users to submit crime tips and search for crime in their zip code. The goal of this app is to make people feel like they have a voice. If you see a crime being committed or feel like you or someone else could be in trouble this is a perfect way to get in touch and figure out the best course of action whether it be turning to other users for guidance or submitting a tip.",
      github: "https://github.com/ashleyhodge/anime_crime-watchers",
    },
    {
      name: "Lettuce Talk",
      link: "https://pshertzi.github.io/Food-tracker-/",
      description:
        " This food tracker app allows an individual to track the nutrition of the foods they eat, search for recipes involving the foods they're craving, and search for nearby locations of grocery stores with those items available.",
      github: "https://github.com/pshertzi/Food-tracker-",
    },
  ];

  const RenderCard = (card, i, props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div id={i} key={i}>
        <div
          className="d-flex justify-content-center mb-5"
          style={{ marginBottom: "50px" }}
        >
          <img
            onClick={handleShow}
            alt={Projects.name}
            src={require("../portfolio/project-images/1.jpg")}
          />
        </div>

        <div className="container">
          <Modal
            className="special_modal text-center"
            show={show}
            onHide={handleClose}
            {...props}
            centered
            styles={{ overlay: { background: "FFFF00" } }}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {card.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="img-fluid"
                alt="gif"
                src={require(`../portfolio/project-gifs/${i}.gif`)}
              />
              <div className="pt-4">{card.description}</div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn">
                <a
                  href={card.link}
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  target="_blank"
                >
                  Check it out!
                </a>
              </Button>
              <Button>
                <a
                  href={card.github}
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  target="_blank"
                >
                  Github
                </a>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  };
  return <div className="grid">{projects.map(RenderCard)}</div>;
}
export default Projects;
