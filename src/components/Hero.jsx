import "../App.css";
import profile from "../assets/image.png"; // ya profile.jpg

export default function Hero() {
  return (
   <section id="home" className="hero hero-flex">

  <div className="hero-left">

    <h1 className="hero-title">
      <span className="typing-line1">Hi, I'm</span>
      <br />
      <span className="typing-line2">Kanhaiya Kumar Singh</span>
    </h1>

    <p className="subtitle">
      Mern Stack Developer | AI Web Applications | Software Engineer
    </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Contact Me</a>

          {/* ✅ DOWNLOAD CV (PDF) */}
          <a
            href="/cv.pdf"
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

