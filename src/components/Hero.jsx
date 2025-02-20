import HeroImg from "../images/hero-img.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-img-container">
        <img
          className="hero-img"
          src={HeroImg}
          alt="coder girl illustration by Natalia Alvarez"
        />
      </div>

      <div className="hero-text-content">
        <p className="hero-text">
          Hi, I'm
          <span className="title-font main-title-1"> Natalia! </span>A
          <span className="title-font main-title-2"> Software Engineer.</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
