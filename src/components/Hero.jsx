import "../App.css";
import profile from "../assets/image.png";
import { useEffect, useState } from "react"; // ya profile.jpg

export default function Hero() {
  const [line1, setLine1] = useState("");
const [line2, setLine2] = useState("");

useEffect(() => {
  const text1 = "Hi, I'm";
  const text2 = "Kanhaiya Kumar Singh";

  let i = 0;

  const firstTyping = setInterval(() => {
    if (i < text1.length) {
      setLine1(text1.slice(0, i + 1));
      i++;
    } else {
      clearInterval(firstTyping);

      let j = 0;

      const secondTyping = setInterval(() => {
        if (j < text2.length) {
          setLine2(text2.slice(0, j + 1));
          j++;
        } else {
          clearInterval(secondTyping);
        }
      }, 80);
    }
  }, 100);

  return () => clearInterval(firstTyping);
}, []);

  return (
   <section id="home" className="hero hero-flex">

  <div className="hero-left">

<h1 className="hero-title">
  {line1}
  <br />
  <span>{line2}</span>
</h1>

    <p className="subtitle">
      MERN Stack Developer | AI Web Applications | Software Engineer
    </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Contact Me</a>

          {/* ✅ DOWNLOAD CV (PDF) */}
          <a
            href="/resume.pdf"
            className="btn outline"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download CV
          </a>
        </div>
      </div>

      {/* RIGHT PHOTO */}
      <div className="hero-right">
        <div className="profile-ring">
          <img src={profile} alt="Kanhaiya Kumar Singh" />
        </div>
      </div>

    </section>
  );
}

