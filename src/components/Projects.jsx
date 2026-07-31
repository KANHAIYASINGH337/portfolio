import "../App.css";

const projects = [
  {
    icon: "🍽️",
    title: "Recipe Hub",
    description:
      "Full-stack MERN recipe sharing platform with 8 RESTful APIs, JWT authentication, Redux state management, and protected navigation.",
    tech: "React • Redux • Node.js • Express • MongoDB",
    url: "https://myrecipehub.vercel.app",
  },
  {
    icon: "📈",
    title: "Zerodha Clone",
    description:
      "Stock trading platform clone featuring interactive dashboard, portfolio management, watchlist, and market buy/sell order simulation.",
    tech: "React • Material UI • Node.js • MongoDB",
    url: "https://github.com/KANHAIYASINGH337/Zerodha",
  },
  {
    icon: "💼",
    title: "Remote Job Finder",
    description:
      "Modern job search platform for discovering remote tech opportunities through a clean, responsive interface.",
    tech: "React • TypeScript • REST API",
    url: "https://github.com/KANHAIYASINGH337/job-finder",
  },
  {
    icon: "🛒",
    title: "Amazon Clone",
    description:
      "E-commerce website clone featuring dynamic product listings, cart state management, and responsive UI components.",
    tech: "React • JavaScript • CSS3 • HTML5",
    url: "https://github.com/KANHAIYASINGH337/Amazon-clone",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-pro section">
      <h2>Projects</h2>
      <p className="section-sub">
        Featured full-stack applications, REST API architectures, and software engineering projects
      </p>

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

