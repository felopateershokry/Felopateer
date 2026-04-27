import React from "react";
import "./About.css";
import { assets } from "../assets/assets";
import { skills } from "../assets/assets";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export default function About() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <main className="about-page">
      {/* ABOUT ME — replaced with editorial lead story */}
      <main className="about-body">
        {/* LEAD STORY */}
        <div className="lead-story">
          <div className="lead-col">
            <div className="section-hed">Profile</div>
            <h1 className="about-title">About Me</h1>

            <p className="lead-drop-cap">
              I'm Felopateer Shokry — a Computer & Communication Engineering
              student at the Faculty of Engineering, Alexandria University, and
              a MERN Stack developer passionate about building scalable,
              high-performance web applications that combine clean architecture
              with intuitive user experience.
            </p>

            <p className="lead-p">
              What began as curiosity about how systems communicate and operate
              evolved into a long-term passion for software engineering. Over
              the past few years, I've worked across the full stack — designing
              RESTful APIs, structuring efficient databases, and developing
              responsive React interfaces focused on performance, reliability,
              and usability.
            </p>

            <p className="lead-p">
              I enjoy transforming complex engineering problems into simple,
              elegant solutions. Whether optimizing backend logic, improving
              system performance, or refining UI interactions, I focus on
              building maintainable, scalable, and meaningful systems that
              bridge software development with communication and engineering
              principles.
            </p>

            <a
              href="/assets/Felopateer_Shokry_CV.pdf"
              download="Felopateer_Shokry_CV.pdf"
              className="cv-btn"
            >
              Download CV
            </a>
          </div>

          <div className="lead-divider" />

          <div className="lead-col">
            <div className="section-hed">Principles</div>

            <div className="philosophy-image-only">
              <img src={assets.me} alt="Philosophy" />
            </div>
          </div>
        </div>

        {/* THREE CARDS */}
        <div className="three-col">
          <div className="t-card">
            <div className="card-tag">Education</div>
            <h3>
              Faculty of <br />
              <em>Engineering</em>
            </h3>
            <p>
              Enrolled in Computer & Communication Engineering at Alexandria
              University, pursuing a degree that blends strong theoretical
              foundations with practical system design and real-world
              engineering problem-solving. Mathematics, networking, and
              analytical thinking shape my approach to technology.
            </p>
          </div>
          <div className="t-card">
            <div className="card-tag">Certification</div>
            <h3>
              MERN Stack <br />
              <em>Professional</em>
            </h3>
            <p>
              Completed a comprehensive professional diploma covering MongoDB,
              Express.js, React, and Node.js. Built production-ready projects
              throughout the program, cementing both theory and hands-on
              execution.
            </p>
          </div>
          <div className="t-card">
            <div className="card-tag">Freelance</div>
            <h3>
              Independent <br />
              <em>Developer</em>
            </h3>
            <p>
              Worked with clients on full-stack web projects — from scoping
              requirements to deployment. Real-world freelance work has
              sharpened my communication, project management, and
              decision-making skills as much as my code.
            </p>
          </div>
        </div>
      </main>

      {/* EDUCATION */}
      <section className="section-block">
        <h2>Education</h2>

        <div className="card">
          <h3>Alexandria University — Faculty of Engineering</h3>
          <p>B.Sc. in Computer & Communication Engineering</p>
          <p>
            <b>Expected Graduation:</b> June 2028
          </p>
          <p>
            <b>CGPA:</b> 3.8 / 4.0
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section-block">
        <h2>Work Experience</h2>

        <div className="card">
          <h3>Digital Egypt Pioneers Initiative (DEPI)</h3>
          <p>Full Stack Web Development (MERN Stack) · 2025–2026</p>
          <p>
            Participated in a government-sponsored technical program delivering
            practical training in modern web development technologies. Developed
            real-world projects using MongoDB, Express.js, React, and Node.js,
            with emphasis on problem solving, teamwork, and software engineering
            practices.
          </p>
        </div>

        <div className="card">
          <h3>Community Web Projects (Church Services)</h3>
          <p>Full Stack Developer · 2025–Present</p>
          <p>
            Developed and supported web-based solutions for church and community
            services to improve engagement and accessibility. Delivered
            full-stack applications using the MERN stack with features for
            announcements, events, and communication, focusing on real-world
            impact and community benefit.
          </p>
        </div>

        <div className="card">
          <h3>Freelance Full Stack Developer</h3>
          <p>2023–Present</p>
          <p>
            Provided freelance web development services using the MERN stack,
            developing scalable and responsive applications tailored to client
            needs. Experience includes building full-stack features, integrating
            APIs, optimizing performance, and collaborating with clients to
            translate requirements into functional products.
          </p>
        </div>

        <div className="card">
          <h3>Backend & Data Structures Projects</h3>
          <p>Academic Work</p>
          <p>
            Worked on academic projects focused on backend development and core
            data structures using Java, C, and Python. Implemented algorithms
            and key concepts such as stacks, queues, trees, sorting, searching,
            and graphs, strengthening problem-solving and software engineering
            skills through practical coding.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-block skills-section">
        <div className="skills-header">
          <div className="skills-kicker">Technical Proficiency</div>
          <h2 className="skills-title">Skills</h2>
        </div>

        {Object.entries(skills).map(([category, items], i) => (
          <div className="skills-category" key={i}>
            <h3 className="skills-category-title">{category}</h3>

            <div className="skills-list">
              {items.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* LANGUAGES */}
      <section className="section-block">
        <h2>Languages</h2>

        <div className="card">
          <p>Arabic — Native</p>
          <p>English — Fluent (B2+)</p>
          <p>German — Fluent (B2)</p>
          <p>Italian — Basic (A2)</p>
        </div>
      </section>
    </main>
  );
}
