import { useNavigate } from "react-router-dom";
import "./HomeBody.css";

export default function HomeBody() {
  const navigate = useNavigate();

  const go = (path, hash) => {
    navigate(path);

    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 120);
    }
  };

  return (
    <div className="mag-layout">
      {/* HERO FEATURE */}
      <div className="mag-hero" onClick={() => go("/about")}>
        {/* top metadata line */}
        <div className="hero-meta">
          <span className="tag">Featured Story</span>
          <span className="issue">Issue · Engineering Portfolio 2026</span>
        </div>

        {/* headline block */}
        <h1 className="hero-title">About Me</h1>

        {/* subtitle / hook */}
        <h2 className="hero-subtitle">
          Building scalable systems, clean architecture, and real-world software
          solutions.
        </h2>

        {/* body preview */}
        <p className="hero-text">
          I am a Computer & Communication Engineering student focused on backend
          systems, full-stack development (MERN), and software design
          principles. I enjoy turning complex problems into structured,
          maintainable systems.
        </p>

        {/* key highlights (makes it feel magazine-like) */}
        <div className="hero-highlights">
          <div className="highlight">
            <span className="h-label">Focus</span>
            <span className="h-value">Backend · System Design</span>
          </div>

          <div className="highlight">
            <span className="h-label">Stack</span>
            <span className="h-value">MERN · Java · Python</span>
          </div>

          <div className="highlight">
            <span className="h-label">Goal</span>
            <span className="h-value">Scalable Systems</span>
          </div>
        </div>

        {/* call to action */}
        <div className="hero-footer">
          <span className="read">Enter Story →</span>
          <span className="hint">Click to explore full profile</span>
        </div>
      </div>

      {/* SIDE STACK */}
      <div className="mag-stack">
        {/* EXPERIENCE */}
        <div
          className="mag-card small"
          onClick={() => go("/about", "experience")}
        >
          <span className="tag">Career</span>

          <h3 className="card-title">Experience</h3>

          <p className="card-text">
            Internships, engineering practice, and real production exposure.
          </p>

          <div className="card-meta">
            <span>Industry Work</span>
            <span>•</span>
            <span>Engineering Practice</span>
          </div>

          <span className="card-read">Read Story →</span>
        </div>

        {/* SKILLS */}
        <div className="mag-card small" onClick={() => go("/about", "skills")}>
          <span className="tag">Toolkit</span>

          <h3 className="card-title">Skills</h3>

          <p className="card-text">
            Languages, frameworks, systems, and technologies used daily.
          </p>

          <div className="card-meta">
            <span>MERN</span>
            <span>•</span>
            <span>System Design</span>
            <span>•</span>
            <span>Problem Solving</span>
          </div>

          <span className="card-read">Explore →</span>
        </div>

        {/* CONTACT */}
        <div className="mag-card accent" onClick={() => go("/contact")}>
          <span className="tag">Connect</span>

          <h3 className="card-title">Contact</h3>

          <p className="card-text">
            Collaboration, freelance work, or engineering discussions.
          </p>

          <div className="card-meta">
            <span>Open to Opportunities</span>
          </div>

          <span className="card-read">Start Conversation →</span>
        </div>
      </div>

      {/* BOTTOM FEATURE */}
      <div className="mag-wide" onClick={() => go("/projects")}>
        {/* header line */}
        <div className="wide-meta">
          <span className="tag">Work</span>
          <span className="issue">Selected Portfolio · Case Studies</span>
        </div>

        {/* main title */}
        <h2 className="wide-title">Projects</h2>

        {/* editorial subtitle */}
        <h3 className="wide-subtitle">
          Engineering builds, scalable systems, and real-world applications
        </h3>

        {/* description */}
        <p className="wide-text">
          A collection of software projects focused on backend architecture,
          frontend systems, APIs, and problem-solving through clean engineering
          design.
        </p>

        {/* project highlights preview */}
        <div className="wide-grid">
          <div className="wide-item">
            <span className="w-label">System Design</span>
            <span className="w-value">Scalable Architectures</span>
          </div>

          <div className="wide-item">
            <span className="w-label">Frontend</span>
            <span className="w-value">React · UI Systems</span>
          </div>

          <div className="wide-item">
            <span className="w-label">Backend</span>
            <span className="w-value">APIs · Databases</span>
          </div>
        </div>

        {/* CTA footer */}
        <div className="wide-footer">
          <span className="read">Explore Projects →</span>
          <span className="hint">View case studies and breakdowns</span>
        </div>
      </div>
    </div>
  );
}
