import React from 'react';
import '../../css/Afdelinger.css'; // Import the CSS file
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';
import icon6 from '../../images/icon6.png';

const Afdelinger = ({ title }) => {
  const buttons = [
    { text: 'FRITIDSHOLD', icon: icon1, link: '/fritidshold' },
    { text: 'KLUBBEN', icon: icon2, link: '/klubben' },
    { text: 'HOLD OG TILMELDING', icon: icon3, link: '/hold-tilmelding' },
    { text: 'FÅ INDFLYDELSE', icon: icon4, link: '/fa-indflydelse' },
    { text: 'KREATIVE SKOLE', icon: icon5, link: '/kreative-skole' },
    { text: 'FOR MEDARBEJDERE', icon: icon6, link: '/for-medarbejdere' },
  ];

  return (
    <div className="Afdelinger" aria-label={title}>
      <h3 className="section-title title-afdelinger" aria-hidden="true">{title}</h3>
      <div className="buttons-container">
        {buttons.map((button, index) => (
          <button
            key={index}
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
          </button>
        ))}
      </div>
    </div>
  );
};

export default Afdelinger;
