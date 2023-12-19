import React from 'react';
import '../../css/Afdelinger.css'; // Import the CSS file
import icon1 from '../../images/icon7.png';
import icon2 from '../../images/icon8.png';
import icon3 from '../../images/icon9.png';
import icon4 from '../../images/icon10.png';
import icon5 from '../../images/icon11.png';
import icon6 from '../../images/icon12.png';
import icon7 from '../../images/icon13.png';

const Afdelinger = ({ title }) => {
  const buttons = [
    { text: 'JOB I UNGFAXE', icon: icon1, link: '#' },
    { text: 'INFO OM CORONA', icon: icon2, link: '#' },
    { text: 'NYHEDSBREVE', icon: icon3, link: '#' },
    { text: 'BESTYRELSE, VEDTÆGTER OG ORGANISATION', icon: icon4, link: '#' },
    { text: 'BESKYT DINE DATA', icon: icon5, link: '#' },
    { text: 'FORSIKRING - FARLIG SPORT', icon: icon6, link: '#' },
    { text: 'FERIEKALENDER', icon: icon7, link: '#' },
  ];

  return (
    <div className="Afdelinger" aria-label="Links">
      <h3 className="section-title title-afdelinger">{title}</h3>
      <div className="buttons-container">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.link}
            className="button-afdelinger"
            aria-label={button.text}
          >
            <img
              src={button.icon}
              alt={`Icon ${index + 1}`}
              className="button-icon"
              aria-hidden="true"
            />
            <span className="button-text">{button.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Afdelinger;
