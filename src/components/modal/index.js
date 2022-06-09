const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, link, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.gif`).default}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
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
      </div>
    </div>
  );
};

export default Modal;
