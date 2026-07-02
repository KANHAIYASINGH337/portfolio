import "../App.css";
import profile from "../assets/image.png"; // ya profile.jpg

export default function Hero() {
  return (
    <section id="home" className="hero hero-flex">

  <div className="hero-left">

   <h1 className="hero-title">
  Hi, I'm <span>Kanhaiya Kumar Singh</span>
</h1>

    <p className="subtitle">
      B.Tech IT Student | Web Developer
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

