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
      className={`about-section section ${isVisible ? "animate-in" : ""}`}
      ref={sectionRef}
    >
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        {/* Left Column: Bio Card */}
        <div className="about-bio-card">
          <p className="about-text">
            I'm <strong>Kanhaiya Kumar Singh</strong>, a B.Tech IT student passionate about
            <strong> Software Development</strong>, <strong>MERN Stack Engineering</strong>, and
            <strong> AI-Powered Web Solutions</strong>.
          </p>
          <p className="about-text-sub">
            I specialize in building <strong>high-performance web applications</strong>, 
            scalable <strong>REST APIs</strong>, and clean, intuitive user interfaces. Currently pursuing my B.Tech at 
            Haldia Institute of Technology, I love solving complex algorithmic challenges and crafting robust software.
          </p>

          <div className="about-highlights">
            <div className="highlight-pill">
              <span>🎯</span> Full-Stack MERN Developer
            </div>
            <div className="highlight-pill">
              <span>🥇</span> NPTEL Java 100/100 (Elite + Gold)
            </div>
            <div className="highlight-pill">
              <span>🏆</span> Winner: AI For Everyone Hackathon
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Grid */}
        <div className="about-timeline-wrapper">
          <h3 className="about-timeline-heading">Education & Journey</h3>
          <div className="timeline">
            <div className="timeline-item" style={{ animationDelay: "0.2s" }}>
              <span className="dot"></span>
              <div className="content">
                <h3>2023 – 2027</h3>
                <p>
                  <strong>B.Tech in Information Technology</strong><br />
                  Haldia Institute of Technology, West Bengal
                </p>
              </div>
            </div>

            <div className="timeline-item" style={{ animationDelay: "0.45s" }}>
              <span className="dot"></span>
              <div className="content">
                <h3>2023 – 2024</h3>
                <p>
                  <strong>Student Member, ISTE</strong><br />
                  Indian Society for Technical Education
                </p>
              </div>
            </div>

            <div className="timeline-item" style={{ animationDelay: "0.7s" }}>
              <span className="dot"></span>
              <div className="content">
                <h3>2021 – 2022</h3>
                <p>
                  <strong>Higher Secondary (CBSE – Class XII)</strong><br />
                  Percentage: <strong>80%</strong>
                </p>
              </div>
            </div>

            <div className="timeline-item" style={{ animationDelay: "0.95s" }}>
              <span className="dot"></span>
              <div className="content">
                <h3>2019 – 2020</h3>
                <p>
                  <strong>Secondary (CBSE – Class X)</strong><br />
                  Percentage: <strong>89.2%</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


