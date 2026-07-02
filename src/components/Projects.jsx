import "../App.css";

const projects = [
  {
    icon: "💼",
    title: "Remote Job Finder",
    description:
      "Modern job search platform for discovering remote opportunities through a clean and responsive interface.",
    tech: "React • TypeScript • API",
    url: "https://github.com/KANHAIYASINGH337/job-finder",
  },
  {
    icon: "🍽️",
    title: "Recipe Hub",
    description:
      "Full Stack MERN recipe sharing platform for browsing, managing, and sharing recipes.",
    tech: "React • Node.js • Express • MongoDB",
    url: "https://github.com/KANHAIYASINGH337/FoodRecipe",
  },
  {
    icon: "🔐",
    title: "Login & Registration System",
    description:
      "Authentication interface with form validation using HTML, CSS, and JavaScript.",
    tech: "HTML • CSS • JavaScript",
  },
  {
    icon: "🛒",
    title: "Amazon Clone",
    description:
      "E-commerce website clone featuring product listings and responsive UI components.",
    tech: "HTML • CSS • JavaScript • React",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-pro section">
      <h2>Projects</h2>
      <p className="section-sub">Some of the work I have built</p>

      <div className="projects-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="project-tech">{project.tech}</span>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                🔗 View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}