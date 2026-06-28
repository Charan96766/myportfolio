import React, { useState } from "react";
import "./Contact.css";

// ── Web3Forms setup (free, delivers straight to your Gmail) ──────────────
// 1. Go to https://web3forms.com
// 2. Enter your email: vajjalasaicharan123@gmail.com  and click "Create Access Key"
// 3. Check your inbox — copy the access key they email you
// 4. Paste it below, replacing YOUR_WEB3FORMS_ACCESS_KEY
const WEB3FORMS_ACCESS_KEY = "6777bf5c-58ac-4ea4-90db-ff271b841140";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const payload = new FormData(e.target);
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);
    payload.append("subject", `New portfolio message from ${formData.name}`);
    payload.append("from_name", "Portfolio Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="section-label reveal">Get In Touch</span>
        <h2 className="contact-heading reveal">
          Let's <span className="serif-accent">build</span> something great.
        </h2>
      </div>
      <div className="contact-container">
        <div className="contact-info reveal reveal-left delay-1">
          <h3>Let's Connect</h3>
          <p>
            If you have any questions or just want to say hello, fill out the
            form or reach out via email or phone.
          </p>
          <ul className="contact-details">
            <li>
              Email:{" "}
              <a href="mailto:vajjalasaicharan123@gmail.com">
                vajjalasaicharan123@gmail.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+919542379676">+91 95423 79676</a>
            </li>
          </ul>
        </div>
        <form
          className="contact-form reveal reveal-right delay-2"
          onSubmit={handleSubmit}
        >
          {/* Honeypot spam protection (hidden from users) */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="submission-message success">
              Thank you for reaching out! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="submission-message error">
              Something went wrong. Please email me directly at
              vajjalasaicharan123@gmail.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
