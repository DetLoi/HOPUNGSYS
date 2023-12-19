import React from 'react';
import '../css/Info-2.css'; // Import the CSS file
import YoutubeEmbed from './YoutubeVideo';

const Omungfaxe = () => {
  const om_ungfaxe_description = (
    <>
     <h2 className='description-title' aria-label='Tilbuddene fra Ung Faxe er til unge fra 7. klasse til og med 18 år, der enten bor eller går i skole i Faxe kommune.'>
        Tilbuddene fra Ung Faxe er til unge fra 7. klasse til og med 18 år, der enten bor eller går i skole i Faxe kommune.
      </h2>

      <p aria-label='Ung Faxe er en vigtig medspiller i unges liv og er delt op i 4 søjler.'>
        Ung Faxe er en vigtig medspiller i unges liv og er delt op i 4 søjler:
      </p>

      <ol>
        <li aria-label='10. klasses center (10. klasse)'>10. klasses center (10. klasse)</li>
        <li aria-label='Heltidsundervisningen (visiteret undervisning)'>Heltidsundervisningen (visiteret undervisning)</li>
        <li aria-label='Ungdomsklubber'>Ungdomsklubber</li>
        <li aria-label='Fritidsaktiviteter'>Fritidsaktiviteter</li>
      </ol>

      <p aria-label='"§1. Ungdomsskolen skal give unge mulighed for at fæstne og uddybe deres kundskaber, give dem forståelse af og dygtiggøre dem til samfundslivet og bidrage til at give deres tilværelse forøget indhold, samt udvikle deres interesse for og evne til aktiv medvirken i et demokratisk samfund".'>
        "§1. Ungdomsskolen skal give unge mulighed for at fæstne og uddybe deres kundskaber, give dem forståelse af og dygtiggøre dem til samfundslivet og bidrage til at give deres tilværelse forøget indhold, samt udvikle deres interesse for og evne til aktiv medvirken i et demokratisk samfund".
      </p>

      <a className='link' href='#' aria-label='Bekendtgørelse af Lov om Ungdomsskoler'>
        Bekendtgørelse af Lov om Ungdomsskoler
      </a>
    </>
  );

  return (
    <div className="om-content-3">
      <div className="image-container-3">
        <YoutubeEmbed aria-label='Embedded YouTube Video' />
      </div>
      <div className="om-description-3">
        <p>{om_ungfaxe_description}</p>
      </div>
    </div>
  );
};

export default Omungfaxe;
