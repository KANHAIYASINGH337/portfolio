import { useEffect, useRef, useState } from "react";
import "../App.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`about-section ${isVisible ? "animate-in" : ""}`}
      ref={sectionRef}
    >
      <h2 className="section-title">About</h2>

      <p className="about-text">
        I'm <strong>Kanhaiya Kumar Singh</strong>, a B.Tech IT student passionate about{" "}
        <strong>Software Development</strong>,{" "}
        <strong>MERN Stack Development</strong>, and{" "}
        <strong>AI-Powered Web Applications</strong>.
        <br />
        I build <strong>user-centric web applications</strong> and{" "}
        <strong>API-driven solutions</strong> while improving my{" "}
        <strong>problem-solving</strong> and{" "}
        <strong>software engineering</strong> skills.
      </p>

      <div className="timeline">
        <div className="timeline-item" style={{ animationDelay: "0.2s" }}>
          <span className="dot"></span>
          <div className="content">
            <h3>
              2023 – 2027 — <strong>B.Tech IT</strong>, Haldia Institute of Technology
            </h3>
          </div>
        </div>

        <div className="timeline-item" style={{ animationDelay: "0.45s" }}>
          <span className="dot"></span>
          <div className="content">
            <h3>
              2023 – 2024 — <strong>Student Member</strong>, ISTE
            </h3>
            <p className="sub-detail">Indian Society for Technical Education</p>
          </div>
        </div>

        <div className="timeline-item" style={{ animationDelay: "0.7s" }}>
          <span className="dot"></span>
          <div className="content">
            <h3>
              2021 – 2022 — <strong>Higher Secondary (CBSE – Class XII)</strong>
            </h3>
            <p className="sub-detail">Percentage: 80%</p>
          </div>
        </div>

        <div className="timeline-item" style={{ animationDelay: "0.95s" }}>
          <span className="dot"></span>
          <div className="content">
            <h3>
              2019 – 2020 — <strong>Secondary (CBSE – Class X)</strong>
            </h3>
            <p className="sub-detail">Percentage: 89.2%</p>
          </div>
        </div>
      </div>
    </section>
  );
}



