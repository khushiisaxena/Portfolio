import React from 'react';

const AchievementsSection = ({ title, items }) => {
  return (
    <div id="achievements" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold text-center mb-5">{title}</h1>
        <div className="row justify-content-center">
          {items.map((achievement, index) => (
            <div key={index} className="col-md-4 d-flex align-items-stretch mb-4">
              <div 
                className="card border-0 shadow-sm p-4"
                style={{ 
                  transition: 'transform 0.3s ease-in-out', 
                  cursor: 'pointer',
                  background: '#ffffff',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <h4 className="text-dark">{achievement.title}</h4>
                <p className="text-muted">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
