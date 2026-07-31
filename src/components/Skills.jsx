import { useEffect, useRef, useState } from "react";
import "../App.css";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "🟨" },
      { name: "C", icon: "🔵" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Redux", icon: "🟣" },
      { name: "HTML5 & CSS3", icon: "🌐" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "🟩" },
      { name: "Express.js", icon: "⚡" },
      { name: "REST APIs", icon: "🔌" },
      { name: "JWT", icon: "🔐" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "SQL", icon: "🐬" },
      { name: "Vercel", icon: "▲" },
      { name: "Render", icon: "🚀" },
    ],
  },
  {
    category: "Tools & IDEs",
    skills: [
      { name: "Git & GitHub", icon: "🛠️" },
      { name: "Postman", icon: "📫" },
      { name: "VS Code", icon: "💻" },
    ],
  },
  {
    category: "Core CS Fundamentals",
    skills: [
      { name: "DSA", icon: "📊" },
      { name: "OOPs", icon: "🧩" },
      { name: "DBMS", icon: "🗄️" },
      { name: "Operating Systems", icon: "💻" },
      { name: "Computer Networks", icon: "🌐" },
    ],
  },
];

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
      { threshold: 0.15 }
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
        A comprehensive look at the languages, frameworks, tools, and CS core fundamentals I work with
      </p>

      <div className={`skills-pill-grid ${isVisible ? "animate-in" : ""}`}>
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="skill-category-box"
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="skill-pills">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-pill">
                  <span className="skill-pill-icon">{skill.icon}</span>
                  <span className="skill-pill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




