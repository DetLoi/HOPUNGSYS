import React from 'react';
import '../css/info.css'; // Import the CSS file
import Infoimage_1 from '../images/infoimage1.jpg'; // Replace with your image path
import Infoimage_2 from '../images/infoimage2.jpg';
const Info_4 = () => {
  // Sample description (Lorem ipsum text)
  const description = (
    <>
    <h2 className='description-title' aria-label='Ung Faxes dagtilbud består af 10. klasse og heltidsundervisning.'>
        Ung Faxes dagtilbud består af 10. klasse og heltidsundervisning:
      </h2>

      <p aria-label='Beskrivelse af Ung Faxes 10. klasse og heltidsundervisning.'>
        Ung Faxes 10. klasse er det ekstra skoleår, hvor de unge kan finpudse deres kompetencer, inden de skal videre i uddannelsessystemet. Ud over dansk, engelsk og matematik, er der også mulighed for at vælge andre fag.
        <br />
        <br />
        Læs mere om 10. klasse her: <a className="link" href="#" aria-label='Læs mere om 10. klasse her.'>10. klasse</a>
      </p>

      <p>
        Heltidsundervisning, i daglig tale HU, er et tilbud fra 7. klasse, som eleverne visiteres til, og henvender sig til elever der har en eller flere vanskeligheder, der indebærer, at de har svært ved at fungere i det ordinære skolesystem.
      </p>

      <p>
        Undervisningen er en blanding af intensiv undervisning og praktikophold på lokale virksomheder.
      </p>
    </>
  );
  return (
    <div className="padding-15">
      <div className="info-content">
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="image-container-info hide-mobile">
          <img src={Infoimage_2} alt="Sample" />
        </div>
      </div>
    </div>
  );
};
const Info_5 = () => {
    // Sample description (Lorem ipsum text)
    const description = (
      <>
        <h2 className='description-title' aria-label='Ung Faxes fritidstilbud består af ungdomsklubber og fritidshold-/aktiviteter.'>
        Ung Faxes fritidstilbud består af ungdomsklubber og fritidshold-/aktiviteter:
      </h2>

      <p aria-label='Beskrivelse af Ung Faxes fritidstilbud.'>
        Tilbuddene er placeret flere forskellige steder i kommunen i eftermiddags- og aftentimerne, samt i weekender og skolernes ferieperioder.
        <br />
        <br />
        De 6 ungdomsklubber er de unges sociale pusterum fra en travl og til tider præstationspræget hverdag.
        <br />
        <a className="link" href="#" aria-label='Her kan du læse mere om ungdomsklubberne.'>Her kan du læse mere om ungdomsklubberne</a>
      </p>
      
        <br />
      <p>
        Fritidsaktiviteter omfatter bl.a. en lang række hold, fx kreative, sprog, sport og action, knallertkørekort, friluftshold, rejser m.v., og vores mål er, at det skal være sjovt og spændende og lærerigt.
        <br />
        <a className='link' href="#">Her kan du se vores fritidsaktiviteter</a>
      </p>

        <br />
      <p>
        Ung Faxe har omkring 20 fuldtidsansatte, derudover 15 klubmedarbejdere på deltid og ca. 25 timeansatte fritidsdundervisere. De har en bred professionel baggrund, som de bringer i spil i Ung Faxe. Fællesnævneren for medarbejdergruppen er, at de brænder for deres fag og for at arbejde og være sammen med unge.
      </p>

        <br />
      <p>
        Ung Faxe - Ungdomsskoles administration og dagtilbud holder til på Seminariet i Haslev, Søndergade 12H, men vi har aktiviteter flere steder i kommunen.
      </p>
     <a className='link' href="#">Baggrundsmateriale til temadrøftelse d. 4. maj 2022.pdf</a>
      </>
    );
    return (
      <div className="padding-15">
        <div className="info-content">
          <div className="image-container-info-5 hide-mobile">
            <img src={Infoimage_1} alt="Sample" />
          </div>
          <div className="description-5">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };

export {Info_4, Info_5};
