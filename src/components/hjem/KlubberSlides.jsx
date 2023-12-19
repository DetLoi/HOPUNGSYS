import React from 'react';
import '../../css/KlubberSlides.css'; // Import the CSS file
import klub1 from '../../images/klub1.jpg';
import klub2 from '../../images/klub2.jpg';
import klub3 from '../../images/klub3.png';
import klub4 from '../../images/klub4.jpg';
import klub5 from '../../images/klub5.jpg';
import klub6 from '../../images/klub6.jpeg';

const KlubberSlides = ({title}) => {
  const clubs = [
    { src: klub1, title: 'KLUB FAXE' },
    { src: klub2, title: 'KLUB RØNNEDE' },
    { src: klub3, title: 'KLUB DALBY' },
    { src: klub4, title: 'KLUB HASLEV' },
    { src: klub5, title: 'KLUB KARISE' },
    { src: klub6, title: 'KLUB LADEPLADS' },
  ];

  
  return (
    <div className="KlubberSlides" aria-label="Klubber">
      <div class="klubwave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill-klubwave"></path>
    </svg>
</div>
<div className='klubber-animation'>
<h2 className="section-title-klubber" aria-label={title}>
        {title}
      </h2>
      <div className="klub-circles">
        {clubs.map((club, index) => (
          <div key={index} className="klub-circle">
            {/* Add aria-label attributes */}
            <span className="circle"></span>
            <h5 className="image-title-klub" aria-label={club.title}>
              {club.title}
            </h5>
            <button className="klub-button" aria-label="Læs mere">
              Læs mere
            </button>
          </div>
        ))}
      </div>
      </div>
      <div className="custom-shape-divider-bottom-1702133278">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default KlubberSlides;
