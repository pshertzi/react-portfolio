import React, { useState } from "react";
import Modal from "../modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState([
    {
      name: "Paul Shertzinger",
      category: "Welcome",
      resume:
        "https://www.canva.com/design/DAE1KUo7v6Y/U_nvagew7zFmpAW9l5n3kA/view?utm_content=DAE1KUo7v6Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    },
    {
      name: "Hazai Watchers",
      category: "Portfolio",
      description:
        "Hanzai Watchers or Crime Watchers is an application made with React on the frontend and MongoDB on the backend that allows users to connect with other users around the world about crime information in their area. It also allows users to submit crime tips and search for crime in their zip code. The goal of this app is to make people feel like they have a voice. If you see a crime being committed or feel like you or someone else could be in trouble this is a perfect way to get in touch and figure out the best course of action whether it be turning to other users for guidance or submitting a tip.",
      link: "https://hanzai-watchers.herokuapp.com/",
      github: "https://github.com/pshertzi/anime_crime-watchers",
    },
    {
      name: "Access Tennessee",
      category: "Portfolio",
      description:
        "Access Tennessee is an app that strives to make this state more accommodating and accessible to all people. By giving individuals the chance to rate and directly interact with businesses in the community about what accommodations are needed for specific types of impairments/ disabilities",
      link: "https://access-tennesee.herokuapp.com/",
      github: "https://github.com/pshertzi/Access-Tennessee",
    },
    {
      name: "Lettuce Talk",
      category: "Portfolio",
      description:
        "This food tracker app allows an individual to track the nutrition of the foods they eat, search for recipes involving the foods they're craving, and search for nearby locations of grocery stores with those items available.",
      link: "https://pshertzi.github.io/Food-tracker-/",
      github: "https://github.com/pshertzi/Food-tracker-",
    },
    {
      name: "Sheraton",
      category: "Summary",
      description:
        "Managed Front Office, F&B, and was acting MOD of hotel during COVID operations.  Scheduled and implemented procedures for outlet projects such as Dinner Under the Stars, holiday programing, and group events. Opened and managed new lobby bar post renovation.",
      website:
        "https://www.marriott.com/en-us/hotels/hnmsi-sheraton-maui-resort-and-spa/overview/",
      resume:
        "https://www.canva.com/design/DAEtGke3SKM/ml9TJ5wvh0dUrp2zdfEJ6A/edit?utm_content=DAEtGke3SKM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      name: "Jw Marriott",
      category: "Summary",
      description:
        "Managed Food and beverage operations for hotel's most popular outlet through multiple concerts, sporting events, and private parties for high profile guests.",
      website:
        "https://www.marriott.com/en-us/hotels/tpajd-jw-marriott-tampa-water-street/events/meetings-at-jw-marriott-tampa-water-street/",
      resume:
        "https://www.canva.com/design/DAEtGke3SKM/ml9TJ5wvh0dUrp2zdfEJ6A/edit?utm_content=DAEtGke3SKM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="img-thumbnail flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
