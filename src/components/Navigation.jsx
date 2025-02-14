import React from "react";
import "./Navigation.css";
import "../App.css";
import Logo from "../images/logo.png";

const Navigation = () => {
  return (
    <header>
      <nav className="nav">
        <div className="logo-container">
          <a href="#" className="logo">
            <img className="logo" src={Logo} alt="Natalia Alvarez Logo" />
          </a>
        </div>
        <ul className="nav-list">
          <li className="styles.nav-item">
            <a className="styles.work-link" href="#work">
              // work
            </a>
          </li>
          <li className="nav-item hello-btn">
            <a href="#modal">// say hello</a>
          </li>
          <li className="nav-item">
            <button className="stylx`es.nav-toggle">
              <ion-icon name="contrast-outline"></ion-icon>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
