import { useEffect, useRef, useState } from "react";
import "../App.css";

const SKILLS = {
  Languages: [
    { label: "Java", icon: "☕", color: "#ed8b00" },
    { label: "JavaScript", icon: "🟨", color: "#f7df1e" },
    { label: "C", icon: "🔵", color: "#00599c" },
    { label: "SQL", icon: "🐬", color: "#4479a1" },
  ],
  Frontend: [
    { label: "React.js", icon: "⚛️", color: "#61dafb" },
    { label: "Redux", icon: "🟣", color: "#764abc" },
    { label: "HTML5 & CSS3", icon: "🌐", color: "#e34f26" },
  ],
  Backend: [
    { label: "Node.js", icon: "🟩", color: "#339933" },
    { label: "Express.js", icon: "⚡", color: "#ffffff" },
    { label: "REST APIs", icon: "🔌", color: "#0055da" },
    { label: "JWT", icon: "🔐", color: "#ffb703" },
  ],
  Databases: [
    { label: "MongoDB", icon: "🍃", color: "#4ea94b" },
    { label: "SQL Database", icon: "🗄️", color: "#00758f" },
    { label: "Vercel Cloud", icon: "▲", color: "#ffffff" },
    { label: "Render", icon: "🚀", color: "#46e3b7" },
  ],
  "Tools & IDEs": [
    { label: "Git & GitHub", icon: "🛠️", color: "#f05032" },
    { label: "Postman", icon: "📫", color: "#ff6c37" },
    { label: "VS Code", icon: "💻", color: "#0078d4" },
  ],
  "Core CS": [
    { label: "Data Structures & Algorithms", icon: "📊", color: "#38bdf8" },
    { label: "OOPs", icon: "🧩", color: "#22d3ee" },
    { label: "DBMS", icon: "🗄️", color: "#818cf8" },
    { label: "Operating Systems", icon: "💻", color: "#a78bfa" },
    { label: "Computer Networks", icon: "🌐", color: "#f472b6" },
  ],
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-pro section" ref={sectionRef}>
      <h2>Skills & Tooling</h2>
      <p className="section-sub">
        A comprehensive look at the languages, frameworks, tools, and CS core fundamentals I use to build software.
      </p>

      <div className={`skills-pill-grid ${isVisible ? "animate-in" : ""}`}>
        {Object.entries(SKILLS).map(([category, skillsList], catIdx) => (
          <div
            key={category}
            className="skill-category-box"
            style={{ animationDelay: `${catIdx * 0.1}s` }}
          >
            <h3 className="skill-category-title">{category}</h3>
            <div className="skill-pills">
              {skillsList.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="skill-pill"
                  style={{ animationDelay: `${catIdx * 0.1 + sIdx * 0.05}s` }}
                >
                  <span className="skill-pill-icon">{skill.icon}</span>
                  <span className="skill-pill-name">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





