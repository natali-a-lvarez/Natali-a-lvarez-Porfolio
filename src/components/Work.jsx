import BirithdayBuddyImg from "../images/BirthdayBuddy-img.png";
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
            <div className="card-content slide-left">
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
