import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const WorkExperience = ({ title, cards }) => {
  return (
    <div id="work" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold text-center mb-5">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              link={value.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const Projects = ({ title, cards }) => {
  return (
    <div id="projects" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold text-center mb-5">Projects</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const Card = ({ title, description, icons }) => {
  return (
    <div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "50rem" }}>
      <h4 className="text-dark">{title}</h4>
      
      {Array.isArray(description) ? (
        <ul className="text-light">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-dark">{description}</p>
      )}
      
      <div className="text-end">
        {icons && icons.map((value, index) => (
          <Link key={index} href={value.link}>
            <a target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
