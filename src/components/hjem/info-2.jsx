import React from 'react';
import '../../css/Info-2.css'; // Import the CSS file
import sampleImage from '../../images/klub1.jpg'; // Replace with your image path
import { PhoneIcon, LocationIcon, EnvelopeIcon } from '../Icons.jsx';

const Om = ({ title }) => {
  // Sample description (Lorem ipsum text)
  const om_description = (
    <>
      <p>
        <b>UNGFAXE</b> er dedikeret til at støtte unge fra 7. klasse til og med 18 år i Faxe kommune. Vi tilbyder fire centrale søjler skabt til at imødekomme deres behov:
      </p>
      <br />
      <p>
        Vores 10. klasses center giver et dynamisk læringsmiljø og støtter eleverne i deres 10. klasses uddannelse. Samtidig tilpasser vores heltidsundervisning sig individuelle behov og støtter de unges uddannelsesrejse på en personlig måde. <br /><br /> I vores ungdomsklubber skaber vi trygge og sociale rum, hvor unge kan mødes, dele interesser og deltage i forskellige arrangementer. Derudover tilbyder vi et bredt udvalg af fritidsaktiviteter inden for sport, kreativitet og kultur, der fremmer personlig udvikling og sjov.
      </p>
      <br />
    </>
  );
  
  return (
    <div className="info-2" aria-label={title}>
      <h2 className="section-title" aria-label={title}>
        {title}
      </h2>
      <div className="om-content">
        <div className="image-container">
          <img src={sampleImage} alt="Sample" aria-label="Sample billede" />
        </div>
        <div className="om-description">
          <p aria-label="Description">{om_description}</p>
          <button aria-label="Læs mere">Læs mere</button>
        </div>
      </div>
      <div className="icons-section" aria-label="Contact Information">
        {/* Phone icon */}
        <a href="tel:+4512345678" className="icon-block" aria-label="Ring til os +45 12 34 56 78">
          <div className="icon-link-om">
            <PhoneIcon />
          </div>
          <h3>Ring til os</h3>
          <p>+45 12 34 56 78</p>
        </a>

        {/* Envelope icon */}
        <a href="mailto:kontakt@mail.dk" className="icon-block" aria-label="Skriv til os kontakt@mail.dk">
          <div className="icon-link-om">
            <EnvelopeIcon />
          </div>
          <h3>Skriv til os</h3>
          <p>kontakt@mail.dk</p>
        </a>

        {/* Location icon */}
        <a href="https://www.example.com" className="icon-block" aria-label="Mød os Norgesvej 11, 8700 Horsens">
          <div className="icon-link-om">
            <LocationIcon />
          </div>
          <h3>Mød os</h3>
          <p>Norgesvej 11, 8700 Horsens</p>
        </a>
      </div>
    </div>
  );
};

export default Om;
