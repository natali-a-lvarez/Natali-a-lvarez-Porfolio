"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Work from "./components/Work";
import ContactModal from "./components/Modal";
import Footer from "./components/Footer";
import ResumeTxt from "./components/ResumeTxt";
import Scroll from "./components/Scroll";

import "./App.css";
import "./components/Navigation.css";
import "./components/Hero.css";
import "./components/Work.css";
import "./components/Modal.css";
import "./components/Footer.css";
import "./components/ResumeTxt.css";
import "./components/Scroll.css";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle("light");
  };

  return (
    <>
      <Navigation toggleTheme={toggleTheme} setIsModalOpen={setIsModalOpen} />
      <main>
        <Hero />
        <Scroll />
        <Work />
        <ResumeTxt />
        <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        <Footer />
      </main>
    </>
  );
}

export default App;
