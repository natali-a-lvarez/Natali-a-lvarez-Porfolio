import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import Resume from "../files/Natalia Alvarez Resume.pdf";

function ContactModal({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <>
      <div className={`modal ${isOpen ? "active" : ""}`}>
        <div className="modal-section-about">
          <div className="icons modal-icons">
            <a
              href="https://linkedin.com/in/natali-a-lvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="3em" />
            </a>
            <a
              href="https://github.com/natali-a-lvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="3em" />
            </a>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <IoDocumentTextSharp size="3em" />
            </a>
          </div>
          <div className="about-text">
            <h4 className="modal-heading title-font">a little about me</h4>
            <p className="modal-text">
              I'm a <strong className="bold-text">software engineer</strong>{" "}
              with a multi disciplinary background in fitness and fine arts. My
              passion for creative problem solving and attention to detail have
              drawn me to <strong className="bold-text">front-end</strong>{" "}
              development.
            </p>
            <br />
            <p className="modal-text">
              fun facts: I am originally from Colombia and I love to sew my own
              clothes!
            </p>
          </div>
        </div>

        <div className="modal-section-form">
          <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
            <IoMdCloseCircleOutline />
          </button>
          <div>
            <h4 className="modal-heading title-font">lets chat!</h4>
            <p className="modal-sub-text">
              currently open to new opportunities
            </p>
          </div>

          <form
            action="https://formsubmit.co/your-email-here"
            method="POST"
            className="about-form"
          >
            <div className="label-input">
              <label className="label">name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="label-input">
              <label className="label">email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="label-input">
              <label className="label">message</label>
              <textarea
                name="message"
                className="text-area"
                rows={4}
                maxLength={2000}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit title-font">
              Send
            </button>
          </form>
          <p className="modal-sub-text modal-sub-text-centered">
            I will get back to you as soon as possible!
          </p>
        </div>
      </div>
      <div
        id="overlay"
        className={isOpen ? "active" : ""}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}

export default ContactModal;
