import "../App.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-pro section">
      <h2>Skills & Core CS</h2>
      <p className="section-sub">
        Technical skills, frameworks, database systems, and core computer science fundamentals
      </p>

      <div className="skills-cards">
        <div className="skill-card">
          <div className="skill-icon">💻</div>
          <h3>Languages</h3>
          <p>Java, JavaScript, C</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🎨</div>
          <h3>Frontend</h3>
          <p>React.js, Redux, HTML5, CSS3</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">⚙️</div>
          <h3>Backend & APIs</h3>
          <p>Node.js, Express.js, REST APIs, JWT, bcrypt</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🗄️</div>
          <h3>Databases & Cloud</h3>
          <p>MongoDB, SQL, Vercel, Render</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🛠️</div>
          <h3>Tools & Core CS</h3>
          <p>Git, GitHub, Postman, VS Code • DSA, OOP, DBMS, OS, CN</p>
        </div>
      </div>
    </section>
  );
}


