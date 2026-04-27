import React from 'react'
import AboutCard      from './AboutCard';
import StatCard       from './StatCard';
import ProjectsCard   from './ProjectsCard';
import SkillsCard     from './SkillsCard';
import ExperienceCard from './ExperienceCard';
import ContactCard from './ContactCard';
import '../components/Cards.css';

function Cards() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">Selected Works & Profile</div>

      <div className="portfolio-grid">
        <AboutCard />
        <StatCard />
        <ProjectsCard />
        <SkillsCard />
        <ExperienceCard />
        <ContactCard />
      </div>
    </section>
  );
}

export default Cards
