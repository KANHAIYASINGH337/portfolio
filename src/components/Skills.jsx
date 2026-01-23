import "../App.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-pro section">
      <h2>Skills</h2>
      <p className="section-sub">Technologies & tools I work with</p>

      <div className="skills-cards">

        <div className="skill-card">
          <div className="skill-icon">💻</div>
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🧠</div>
          <h3>Backend</h3>
          <p>Node.js, Express, MongoDB</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">📊</div>
          <h3>DSA</h3>
          <p>Java, Arrays, Strings, Recursion</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🛠️</div>
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code, Postman</p>
        </div>

      </div>
    </section>
  );
}

