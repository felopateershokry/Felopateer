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
      <section className="cards-section">
        <div className="section-hed">Selected Works &amp; Profile</div>
  
        <div className="grid">
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
