import React from 'react';
import '../../css/Afdelinger.css'; // Import the CSS file
import icon1 from '../../images/icon1.png';

const Section_Navigation_Findhold = ({ title }) => {
  const buttons = [
    { text: 'Aktiviteter', icon: icon1, link: '/aktiviteter' },
  ];

  return (
    <div className="Afdelinger" role="navigation" aria-label={title}>
      <h3 className="section-title title-afdelinger">{title}</h3>
      <div className="buttons-container buttons-container-findhold">
        {buttons.map((button, index) => (
          <a key={index} href={button.link} className="button-afdelinger button-afdelinger-findhold" role="button">
            <img src={button.icon} alt={`Icon ${index + 1}`} className="button-icon" />
            <span className="button-text">{button.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section_Navigation_Findhold;
