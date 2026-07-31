import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Fallback direct mailto link to guarantee email sending without backend setup
    const mailtoUrl = `mailto:skanahaiya05@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatus("Thank you! Your email client has been opened to send the message.");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>

      <p className="contact-sub">
        Ready to contribute, collaborate, and create impactful solutions. Feel free to reach out.
      </p>

      <p
        className="contact-email"
        title="Click to copy email"
        onClick={() => {
          navigator.clipboard.writeText("skanahaiya05@gmail.com");
          alert("Email copied to clipboard!");
        }}
      >
        📧 skanahaiya05@gmail.com
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="contact-status">{status}</p>}

      <div className="contact-icons">
        <a href="https://github.com/KANHAIYASINGH337" target="_blank" rel="noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kanhaiya-singh-78a8b72a5" target="_blank" rel="noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}

