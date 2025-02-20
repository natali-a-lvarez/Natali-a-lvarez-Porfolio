import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import Resume from "../files/Natalia Alvarez Resume.pdf";

function Footer() {
  return (
    <section className="footer">
      <div className="icons">
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
      <div className="footer-content">
        <p className="footer-text">
          Copyright © {new Date().getFullYear()} Natalia Alvarez All Rights
          Reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;
