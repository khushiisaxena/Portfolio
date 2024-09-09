import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { WorkExperience, Projects } from '../components/WorkExperience';
import { Footer, Contact } from '../components/Footer';
import { SkillsSection } from '../components/SkillsSection';
import AchievementsSection from '../components/AchievementsSection';
import { about, contact, intro, navigation, skills, projects, SEO, work, achievements } from '../config/config';
import { Header } from '../components/Header';


export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={about.title}
        description={about.description}
      />
      <WorkExperience
        title={work.title}
        cards={work.cards}
      />
      <SkillsSection 
          title={skills.title} 
          items={skills.items} 
      />
      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <AchievementsSection 
        title={achievements.title} 
        items={achievements.items} 
      />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
