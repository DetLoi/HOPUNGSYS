import React from 'react';
import '../../css/info.css'; // Import the CSS file
import sampleImage from '../../images/klub2.jpg'; // Replace with your image path

const Info = ({ title }) => {
  // Sample description (Lorem ipsum text)
  const description = (
    <>
      <p>
        <b>UNGFAXE</b> tilbyder en bred vifte af afdelinger og aktiviteter til unge. Fritidsholdene giver mulighed for at udforske
        interesser som sport, kultur og hobbyer på tværs af forskellige færdighedsniveauer. Klubben skaber et socialt rum, hvor
        unge kan mødes, udveksle idéer og deltage i forskellige arrangementer.
      </p>
      <br />
      <p>
        Der lægges stor vægt på at give de unge indflydelse gennem råd og fora, hvor de kan bidrage til beslutninger og aktiviteter.
        Den kreative skole fremmer kreativitet og innovation gennem kurser og workshops inden for kunst, musik, design og meget
        mere. Endelig fokuserer afdelingen for medarbejdere på at skabe et positivt og udviklende arbejdsmiljø, hvor ansatte kan
        udfolde deres potentiale og bidrage til at støtte de unges udvikling på bedst mulig vis.
      </p>
    </>
  );

  return (
    <div className="info" aria-label={title}>
      <h2 className="section-title afdeling-title" aria-label={title}>
        {title}
      </h2>
      <div className="info-content">
        <div className="description" aria-label="Beskrivelse">
          <p aria-label="afdelings beskrivlese">{description}</p>
        </div>
        <div className="image-container-info hide-mobile">
          <img src={sampleImage} alt="Sample" aria-label="Sample billede" />
        </div>
      </div>
    </div>
  );
};

export default Info;
