import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const SkillsSection = ({ title, items }) => {
  return (
    <div id="skills" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold text-center mb-5">{title}</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {items.map((skill, index) => (
            <div key={index} className="skill-card text-center mx-3 my-2">
              <FontAwesomeIcon icon={skill.icon} className={`icon-${skill.name.toLowerCase()}`} size="3x" />
              <p className="mt-2 text-dark">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};