import React from "react";
import "./Hero.css";
import "../App.css";
import HeroImg from "../images/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img-container">
        <img
          className="hero-img"
          src={HeroImg}
          alt="coder girl illustration by Natalia
          Alvarez"
        />
      </div>

      <div className="hero-text-content">
        <p className="hero-text">
          Hi, I'm
          <span className="title-font main-title">Natalia! </span>A
          <span className="title-font main-title">software engineer.</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
