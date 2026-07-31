import "../App.css";

const projects = [
  {
    icon: "🏥",
    title: "ElderGuard AI",
    description:
      "AI-powered healthcare monitoring system with real-time vitals tracking, SpO₂ analytics, and emergency alerts. Won Best AI Solution & People's Choice Award (70+ teams).",
    tech: "React.js • FastAPI • MediaPipe • WebSockets",
    url: "https://github.com/KANHAIYASINGH337",
    badge: "🏆 Hackathon Winner",
  },
  {
    icon: "🍽️",
    title: "Recipe Hub",
    description:
      "Full-stack MERN platform with 8 RESTful APIs, JWT authentication, Redux state management, and protected navigation.",
    tech: "React • Redux • Node.js • Express • MongoDB",
    url: "https://myrecipehub.vercel.app",
    badge: "🚀 Live Demo",
  },
  {
    icon: "💼",
    title: "Remote Job Finder",
    description:
      "Modern job search platform for discovering remote opportunities through a clean, responsive interface.",
    tech: "React • TypeScript • REST API",
    url: "https://github.com/KANHAIYASINGH337/job-finder",
  },
  {
    icon: "🛒",
    title: "Amazon Clone",
    description:
      "E-commerce application featuring dynamic product listings, cart state management, and responsive UI components.",
    tech: "React • JavaScript • CSS3 • HTML5",
    url: "https://github.com/KANHAIYASINGH337/Amazon-clone",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-pro section">
      <h2>Projects</h2>
      <p className="section-sub">Featured work & production applications</p>

      <div className="projects-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <div className="project-card-header">
                <span className="project-icon">{project.icon}</span>
                {project.badge && (
                  <span className="project-badge">{project.badge}</span>
                )}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div>
              <span className="project-tech">{project.tech}</span>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  🔗 {project.title === "Recipe Hub" ? "Visit Live Site" : "View Code"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}