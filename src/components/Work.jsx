import BirithdayBuddyImg from "../images/BirthdayBuddy-img.png";
import BankistImg from "../images/bankist.png";
import ChromaImg from "../images/chroma.png";
import MyCookbookImg from "../images/cookbook.png";
import PokeverseImg from "../images/pokeverse.png";
import TNParcadeImg from "../images/tnp-arcade.png";
import VanVoyageImg from "../images/van-voyage.png";
import LibraryAppImg from "../images/library.png";
import MaptyImg from "../images/mapty.png";
import FlashcardOMaticImg from "../images/flashcard-o-matic.png";
import DecoderRingImg from "../images/decoder ring.png";
import PigGameImg from "../images/pig-game.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Birthday Buddy App",
    description:
      "A React Native app to manage friends' birthdays and send automated messages.",
    technologies: ["React Native", "Expo", "Auth0", "Flask", "SQL"],
    link: "https://github.com/natali-a-lvarez/BirthdayBuddy",
    image: BirithdayBuddyImg,
    textColor: "dark",
  },
  {
    id: 2,
    title: "Pokeverse",
    description:
      "A Pokémon-themed web app that lets users search and explore pockemon and battle them together",
    technologies: ["React", "Next.js", "PokéAPI", "Tailwind CSS"],
    link: "https://github.com/natali-a-lvarez/Pokeverse",
    image: PokeverseImg,
    textColor: "dark",
  },
  {
    id: 3,
    title: "Bankist",
    description:
      "A modern banking UI that showcases transactions, balance updates, and authentication features.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/natali-a-lvarez/Bankist",
    image: BankistImg,
    textColor: "dark",
  },
  {
    id: 4,
    title: "My Cookbook",
    description:
      "A recipe management app that allows users to store, view, and share their favorite recipes.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "https://github.com/natali-a-lvarez/My-Cookbook",
    image: MyCookbookImg,
    textColor: "light",
  },
  {
    id: 5,
    title: "Chroma",
    description:
      "A color palette generator and color picker tool for designers and developers.",
    technologies: ["React", "TypeScript", "Chakra UI"],
    link: "https://github.com/natali-a-lvarez/Chroma",
    image: ChromaImg,
    textColor: "dark",
  },
  {
    id: 6,
    title: "Van Voyage",
    description:
      "A travel planning app designed for van life enthusiasts to rent camper vans.",
    technologies: ["React Native", "Expo", "Google Maps API"],
    link: "https://github.com/natali-a-lvarez/Van-Voyage",
    image: VanVoyageImg,
    textColor: "dark",
  },
  {
    id: 7,
    title: "TNP Arcade",
    description:
      "A collection of classic arcade-style games built with modern web technologies.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://github.com/Multiverse-Frontend/tnp-arcade",
    image: TNParcadeImg,
    textColor: "light",
  },
  {
    id: 8,
    title: "Library App",
    description: "A digital library app for viewing reading statistics.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/natali-a-lvarez/Library-App",
    image: LibraryAppImg,
    textColor: "dark",
  },
  {
    id: 9,
    title: "Decoder Ring",
    description:
      "A fun cryptography app that lets users encode and decode secret messages.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/natali-a-lvarez/Decoder-ring",
    image: DecoderRingImg,
    textColor: "dark",
  },
  {
    id: 10,
    title: "Pig Game",
    description:
      "A simple dice-based game where players compete to reach a score of 100.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/natali-a-lvarez/Pig-game",
    image: PigGameImg,
    textColor: "dark",
  },
  {
    id: 11,
    title: "Mapty",
    description:
      "A location-based workout tracker that allows users to log and visualize runs and cycling on a map.",
    technologies: ["JavaScript", "Leaflet.js", "HTML", "CSS"],
    link: "https://github.com/natali-a-lvarez/Mapty",
    image: MaptyImg,
    textColor: "light",
  },
  {
    id: 12,
    title: "Flashcard-O-Matic",
    description: "An interactive flashcard app for studying and memorization.",
    technologies: ["React", "React Router", "Bootstrap"],
    link: "https://github.com/natali-a-lvarez/flashcard-o-matic",
    image: FlashcardOMaticImg,
    textColor: "dark",
  },
];

function Work() {
  return (
    <section id="work" className="work">
      <h2 className="heading title-font">// work</h2>
      <div className="work-cards">
        {projects.map((project) => (
          <div className="work-card" key={project.id}>
            <img
              src={project.image}
              alt="birthday buddy app screenshot"
              className="card-img blur zoom"
            />
            <div
              className={
                project.textColor === "dark"
                  ? "card-content slide-left"
                  : "card-content card-content-light slide-left"
              }
            >
              <div className="card-header">
                <h4 className="card-title">{project.title}</h4>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size="1.3em" />
                </a>
              </div>
              <p className="card-text">{project.description}</p>
              <p className="card-text technologies-text">
                <strong>Technologies: </strong>
                {project.technologies.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
