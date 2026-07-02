export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>

      <p className="contact-sub">
        Let's build something impactful together. Feel free to reach out.
      </p>

      <p
  className="contact-email"
  onClick={() => {
    navigator.clipboard.writeText("skanahaiya05@gmail.com");
    alert("Email copied!");
  }}
>
  📧 skanahaiya05@gmail.com
</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-icons">
        <a href="https://github.com/KANHAIYASINGH337" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kanhaiya-singh-78a8b72a5" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}
