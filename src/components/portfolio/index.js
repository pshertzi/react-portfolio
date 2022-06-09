import { Modal, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Hanzi from "../../assets/images/projects/Hanzi.jpg";
import Access from "../../assets/images/projects/Access.jpg";

function Portfolio(props) {
  const Project1 = {
    name: "Hanzi Watchers",
    description:
      "Hanzai Watchers or Crime Watchers is an application made with React on the frontend and MongoDB on the backend that allows users to connect with other users around the world about crime information in their area. It also allows users to submit crime tips and search for crime in their zip code. The goal of this app is to make people feel like they have a voice. If you see a crime being committed or feel like you or someone else could be in trouble this is a perfect way to get in touch and figure out the best course of action whether it be turning to other users for guidance or submitting a tip.",
    link: "https://hanzai-watchers.herokuapp.com/",
    github: "https://github.com/pshertzi/anime_crime-watchers",
  };
  const Project2 = {
    name: "Access Tennesee",
    description:
      "This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.",
    link: "https://access-tennesee.herokuapp.com/",
    github: "https://github.com/pshertzi/Access-Tennessee",
  };
  return (
    <section>
      <div class>
        <h1>{capitalizeFirstLetter(Project1.name)}</h1>
        <div className="flex-row">
          <img
            src={Hanzi}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          <Button className="btn">
            <a
              href={Project1.link}
              style={{ textDecoration: "none", color: "#ffffff" }}
              target="_blank"
            >
              Check it out!
            </a>
          </Button>
          <Button>
            <a
              href={Project1.github}
              style={{ textDecoration: "none", color: "#ffffff" }}
              target="_blank"
            >
              Github
            </a>
          </Button>
          <p>{Project1.description}</p>
        </div>
      </div>
      <div class>
        <h1>{capitalizeFirstLetter(Project2.name)}</h1>
        <div className="flex-row">
          <img
            src={Access}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          <Button className="btn">
            <a
              href={Project2.link}
              style={{ textDecoration: "none", color: "#ffffff" }}
              target="_blank"
            >
              Check it out!
            </a>
          </Button>
          <Button>
            <a
              href={Project2.github}
              style={{ textDecoration: "none", color: "#ffffff" }}
              target="_blank"
            >
              Github
            </a>
          </Button>
          <p>{Project2.description}</p>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
