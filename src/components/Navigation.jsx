import logo from "../images/logo.png";
import { IoIosContrast } from "react-icons/io";

function Navigation({ toggleTheme, setIsModalOpen }) {
  return (
    <header>
      <nav className="nav">
        <div className="logo-container">
          <a href="#" className="logo">
            <img className="logo" src={logo} alt="Natalia Alvarez Logo" />
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="work-link" href="#work">
              // work
            </a>
          </li>
          <li className="nav-item hello-btn">
            <a href="#" onClick={() => setIsModalOpen(true)}>
              // say hello
            </a>
          </li>
          <li className="nav-item">
            <button onClick={toggleTheme}>
              <IoIosContrast size={"1.4em"} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
