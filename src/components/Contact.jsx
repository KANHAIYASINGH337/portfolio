import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending message...");

    const formData = new FormData(e.target);
    // Web3Forms Access Key for skanahaiya05@gmail.com
    formData.append("access_key", "bdd80518-0ea6-44bd-9062-dc300a60ba54");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("🎉 Message sent successfully! I will get back to you soon.");
        e.target.reset();
      } else {
        // Fallback to mailto if access key is not added yet
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        window.location.href = `mailto:skanahaiya05@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
          name
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        setStatus("Email client opened to complete sending.");
      }
    } catch (error) {
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      window.location.href = `mailto:skanahaiya05@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
        name
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      setStatus("Email client opened to complete sending.");
    }
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

