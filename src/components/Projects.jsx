import "../App.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-pro section">
      <h2>Projects</h2>
      <p className="section-sub">Some of the work I have built</p>

      <div className="projects-cards">

        <div className="project-card">
          <div className="project-icon">🔐</div>
          <h3>Login & Registration System</h3>
          <p>
            Authentication UI with form validation using HTML, CSS, JavaScript.
          </p>
          <span className="project-tech">HTML • CSS • JavaScript</span>
        </div>

        <div className="project-card">
          <div className="project-icon">🌤️</div>
          <h3>Weather App</h3>
          <p>
            Real-time weather data fetched from public API with dynamic UI.
          </p>
          <span className="project-tech">JavaScript • API</span>
        </div>

        <div className="project-card">
          <div className="project-icon">⚛️</div>
          <h3>React Website</h3>
          <p>
            Multi-page React application with reusable components.
          </p>
          <span className="project-tech">React • CSS</span>
        </div>

        {/* ✅ NEW PROJECT */}
        <div className="project-card">
          <div className="project-icon">🛒</div>
          <h3>Amazon Clone</h3>
          <p>
            E-commerce website clone with product listings and UI components.
          </p>
          <span className="project-tech">HTML • CSS • JavaScript • React</span>
        </div>

      </div>
    </section>
  );
}
