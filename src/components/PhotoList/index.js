import React, { useState } from "react";
import Modal from "../modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState([
    {
      name: "Hazai Watchers",
      category: "Portfolio",
      description:
        "Hanzai Watchers or Crime Watchers is an application made with React on the frontend and MongoDB on the backend that allows users to connect with other users around the world about crime information in their area. It also allows users to submit crime tips and search for crime in their zip code. The goal of this app is to make people feel like they have a voice. If you see a crime being committed or feel like you or someone else could be in trouble this is a perfect way to get in touch and figure out the best course of action whether it be turning to other users for guidance or submitting a tip.",
      link: "https://hanzai-watchers.herokuapp.com/",
    },
    {
      name: "Access Tennessee",
      category: "Portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Sheraton",
      category: "Skills",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Jw Marriott",
      category: "Skills",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
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
      <div className="flex-row">
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
