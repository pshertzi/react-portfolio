/* eslint-disable jsx-a11y/anchor-has-content */
const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, link, github, resume, website, index } =
    currentPhoto;

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.gif`).default}
          alt="current category"
        />
        <p>{description}</p>
        {link && (
          <button>
            <a
              href={link}
              style={{ textDecoration: "none", color: "#ffffff" }}
              target="_blank"
              rel="noreferrer"
            >
              Check it out!
            </a>
          </button>
        )}
        {github && (
          <button>
            <a
              href={github}
              style={{ textDecoration: "none", color: "#ffffff" }}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        )}
        {resume && (
          <button>
            <a
              href={resume}
              style={{ textDecoration: "none", color: "#ffffff" }}
              target="_blank"
              rel="noreferrer"
            >
              View resume
            </a>
          </button>
        )}
        {website && (
          <button>
            <a
              href={website}
              style={{ textDecoration: "none", color: "#ffffff" }}
              target="_blank"
              rel="noreferrer"
            >
              View company website
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
