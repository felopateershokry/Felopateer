import React, { useState } from "react";
import "./Contact.css";
import { assets } from './../assets/assets';
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_3gcoimh",
        "template_a6aoy8s",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "pphilopateershukri@gmail.com",
        },
        "lywJAkNr6ph4Z-IZH",
      );

      console.log("SUCCESS:", result.text);

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED:", error);
      alert("Email failed. Check console for details.");
    }
  };

  return (
    <main className="cp">
      {/* ── MASTHEAD ── */}
      {/* <div className="masthead">
        <div className="masthead-rule-thick" />
        <div className="masthead-inner">
          <div className="masthead-left">
            <span className="masthead-meta">Vol. V · No. 2026</span>
            <span className="masthead-meta">Alexandria, Egypt</span>
          </div>
          <div className="masthead-center">
            <h1 className="masthead-title">
              Felopateer <em className="masthead-name">Shokry</em><span className="masthead-dot">.</span>
            </h1>
            
          </div>
          <div className="masthead-right">
            <span className="masthead-meta">Computer and Communication Engineering</span>
            <span className="masthead-meta">MERN Stack Developer</span>
            <span className="masthead-meta">Est. 2023</span>
          </div>
        </div>
        <div className="masthead-rule-thick" />
        <div className="masthead-rule-thin" />
      </div> */}

      {/* ── SECTION BANNER ── */}
      <div className="section-banner">
        <div className="banner-rule" />
        <div className="banner-inner">
          <span className="banner-kicker">Correspondence</span>
          <h2 className="banner-hed">
            Get In <em>Touch</em>
          </h2>
          <p className="banner-dek">
            Computer and Communication Engineering student, MERN Stack Developer
            <br /> &amp; Est. 2023
          </p>
        </div>
        <div className="banner-rule" />
      </div>

      {/* ── THREE-COLUMN EDITORIAL BODY ── */}
      <div className="ed-body">
        {/* LEFT ASIDE */}
        <aside className="ed-col ed-col--left">
          <div className="col-block">
            <div className="col-hed">Correspondents</div>
            <div className="col-hed-rule" />
            <div className="cline">
              <span className="cline-label">Mail</span>
              <a
                href="mailto:pphilopateershukri@gamil.com"
                className="cline-val"
              >
                pphilopateershukri@gamil.com
              </a>
            </div>
            <div className="cline">
              <span className="cline-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/felopateer-shokry-242a83356"
                target="_blank"
                rel="noreferrer"
                className="cline-val"
              >
                /in/felopateer-shokry-242a83356
              </a>
            </div>
            <div className="cline">
              <span className="cline-label">GitHub</span>
              <a
                href="https://github.com/felopateershokry/"
                target="_blank"
                rel="noreferrer"
                className="cline-val"
              >
                /felopateershokry
              </a>
            </div>
            <div className="cline">
              <span className="cline-label">Location</span>
              <span className="cline-val plain">Alexandria, Egypt</span>
            </div>
          </div>

          <div className="col-block">
            <div className="col-hed">Availability</div>
            <div className="col-hed-rule" />
            <div className="avail-row">
              <span className="avail-pip" />
              <span className="avail-text">Summer Internships</span>
            </div>
            <div className="avail-row">
              <span className="avail-pip" />
              <span className="avail-text">Freelance Projects</span>
            </div>
            <div className="avail-row">
              <span className="avail-pip" />
              <span className="avail-text">Collaborations</span>
            </div>
          </div>

          <div className="pull-matter">
            <div className="pull-open-quote">❝</div>
            <p className="pull-body">
              Every great project starts with a conversation.
            </p>
            <div className="pull-attribution">— Felopateer Shokry</div>
          </div>

          {/* <div className="col-block">
            <div className="col-hed">Response Time</div>
            <div className="col-hed-rule" />
            <div className="resp-stat">24h</div>
            <div className="resp-note">Average reply via email or LinkedIn</div>
          </div> */}
        </aside>

        <div className="col-rule" />

        {/* CENTER — FORM */}
        <section className="ed-col ed-col--center">
          <div className="form-eyebrow">
            <span className="form-eyebrow-label">Reader Correspondence</span>
            <div className="form-eyebrow-rule" />
          </div>

          {submitted ? (
            <div className="success-cover">
              <div className="success-orn">✦</div>
              <h3 className="success-hed">Transmission Received</h3>
              <p className="success-dek">
                Your message has been received and will be answered within
                twenty-four hours. Thank you for writing in.
              </p>
              <button
                className="btn-mag"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                }}
              >
                Write Again
              </button>
            </div>
          ) : (
            <form className="mag-form" onSubmit={handleSubmit} noValidate>
              <div className="mag-form-row">
                <div
                  className={`mag-field ${focused === "name" ? "mag-field--active" : ""}`}
                >
                  <label className="mag-label" htmlFor="f-name">
                    Full Name
                  </label>
                  <input
                    className="mag-input"
                    id="f-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    required
                  />
                  <div className="mag-line" />
                </div>
                <div
                  className={`mag-field ${focused === "email" ? "mag-field--active" : ""}`}
                >
                  <label className="mag-label" htmlFor="f-email">
                    Email Address
                  </label>
                  <input
                    className="mag-input"
                    id="f-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    required
                  />
                  <div className="mag-line" />
                </div>
              </div>

              <div
                className={`mag-field ${focused === "subject" ? "mag-field--active" : ""}`}
              >
                <label className="mag-label" htmlFor="f-subject">
                  Subject
                </label>
                <input
                  className="mag-input"
                  id="f-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused("")}
                  required
                />
                <div className="mag-line" />
              </div>

              <div
                className={`mag-field ${focused === "message" ? "mag-field--active" : ""}`}
              >
                <label className="mag-label" htmlFor="f-message">
                  Your Message
                </label>
                <textarea
                  className="mag-input mag-textarea"
                  id="f-message"
                  name="message"
                  rows={9}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  required
                />
                <div className="mag-line" />
              </div>

              <div className="mag-form-footer">
                <p className="mag-form-note">
                  All correspondence is read personally and replied to with
                  care.
                </p>
                <button type="submit" className="btn-mag">
                  Submit Correspondence
                </button>
              </div>
            </form>
          )}
        </section>

        <div className="col-rule" />

        {/* RIGHT ASIDE */}
        <aside className="ed-col ed-col--right">
          <div className="col-block">
            <div className="col-hed">Directories</div>
            <div className="col-hed-rule" />
            <a
              href="https://github.com/felopateershokry/"
              target="_blank"
              rel="noreferrer"
              className="dir-row"
            >
              <span className="dir-name">GitHub</span>
              <span className="dir-arr">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/felopateer-shokry-242a83356"
              target="_blank"
              rel="noreferrer"
              className="dir-row"
            >
              <span className="dir-name">LinkedIn</span>
              <span className="dir-arr">→</span>
            </a>
            <a href="mailto:pphilopateershukri@gamil.com" className="dir-row">
              <span className="dir-name">Email</span>
              <span className="dir-arr">→</span>
            </a>
            <a
              href="/assets/Felopateer_Shokry_CV.pdf"
              download="Felopateer_Shokry_CV.pdf"
              className="dir-row"
            >
              <span className="dir-name">Résumé / CV</span>
              <span className="dir-arr">↓</span>
            </a>
          </div>

          {/* Classified-ad box */}
          <div className="classified">
            <div className="classified-label">Specialisations</div>
            <div className="classified-rule" />
            <div className="classified-entry">
              <strong>Full-Stack Engineering</strong>
              <br />
              MongoDB · Express · React · Node.js. Production-grade systems &
              clean architecture.
            </div>
            <div className="classified-dots">· · ·</div>
            <div className="classified-entry">
              <strong>Backend Systems</strong>
              <br />
              REST APIs · JWT · Mongoose · bcrypt. Scalable and secure by
              design.
            </div>
            <div className="classified-dots">· · ·</div>
            <div className="classified-entry">
              <strong>UI Engineering</strong>
              <br />
              React · Tailwind · HTML/CSS. Responsive, accessible interfaces.
            </div>
          </div>

          <div className="closing-trio">
            <div className="ct-rule" />
            <div className="ct-marks">✦ ✦ ✦</div>
            <div className="ct-rule" />
          </div>
        </aside>
      </div>

      {/* ── COLOPHON ── */}
      {/* <footer className="colophon">
        <div className="colophon-thick" />
        <div className="colophon-thin" />
        <div className="colophon-inner">
          <span>© 2026 Felopateer Shokry</span>
          <span className="col-sep">✦</span>
          <span>All correspondence welcomed</span>
          <span className="col-sep">✦</span>
          <span>Alexandria, Egypt</span>
          <span className="col-sep">✦</span>
          <em>Designed &amp; built with care</em>
        </div>
      </footer> */}
    </main>
  );
}
