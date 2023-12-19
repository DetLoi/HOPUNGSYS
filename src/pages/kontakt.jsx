import React from 'react';
import '../css/kontakt.css'; 
import map from '../images/maps.png';
import { LocationIcon, PhoneIcon, EnvelopeIcon, FacebookIcon, InstagramIcon } from '../components/Icons';
import placeholder_img from '../images/woman.jpg'
import placeholder_man from '../images/man.jpg'
function kontakt() {
  return (
    <div className="kontakt" aria-label="Kontaktside">
    <div aria-label="Kontaktinformation">
      <h1 className='page-title' aria-label="Sidetitel">Kontakt</h1>
      <div className='kontakt-container' aria-label="Kontaktinfo">
        <div className='maps'>
          <img src={map} alt="Kort"/>
        </div>
        <div className='kontakt-info-container'>
          <h2>Ung Faxe - Ungdomsskole</h2>
          <div className='kontakt-content'>
            <div>
              <div className='kontakt-item'>
                <LocationIcon/>
                <p>Norgesvej 11<br/>
                8700 Horsens<br/>
                Danmark</p>
              </div>
              <div className='kontakt-item'>
                <PhoneIcon/>
                <p>+45 12 34 56 78</p>
              </div>
              <div className='kontakt-item'>
                <EnvelopeIcon/>
                <p>kontakt@mail.dk</p>
              </div>
            </div>
            <div> 
              <div className='kontakt-item-2'>
                <h5>Kontortid:</h5>
                <p> Mandag - Torsdag kl. 8.30 - 16.30 <br/>
  Fredag kl. 8.30 - 14.30</p>
              </div>
              <div className='kontakt-item-2'>
                <p>CVR nr. 38 57 35 35</p>
                <p>EAN nr. 5798008523080</p>
              </div>
            </div>
          </div>
          <h5>Følg os på:</h5>
          <div className='kontakt-item-3'>
            <FacebookIcon/>
            <p className='link'>UngFaxe</p>
          </div>
          <div className='kontakt-item-3'>
            <InstagramIcon/>
            <p className='link'>@ungfaxe</p>
          </div>
        </div>
      </div>
    </div>
    <div className='white-bg padding-15' aria-label="Personalesektion">
    <div className='kontakt-personer-container' aria-label="Personalesektion">
  <h2>Administration</h2>
  <div className='ledelse-container' aria-label="Administration Medarbejderliste">
    <div className='medarbejder' aria-label="Medarbejder">
      <div className='medarbejder-image'>
        <img src={placeholder_img} alt="Billede af medarbejder"/>
      </div>
      <h4>Susanne Kjeldskov Baptiste</h4>
      <h5>Skolesekretær</h5> 
      <p>+45 12 34 56 78</p>
      <p>kontakt@mail.dk</p>
    </div>
    <div className='medarbejder' aria-label="Medarbejder">
      <div className='medarbejder-image'>
        <img src={placeholder_img} alt="Billede af medarbejder"/>
      </div>
      <h4>Tina Kjeldal Andersen</h4>
      <h5>Skolesekretær</h5>
      <p>+45 12 34 56 78</p>
      <p>kontakt@mail.dk</p>
    </div>
  </div>
</div>
<div className='kontakt-personer-container' aria-label="Ledelsesektion">
  <h2>Ledelse</h2>
  <div className='ledelse-container padding-bottom' aria-label="Ledelse Medarbejderliste">
    <div className='medarbejder' aria-label="Medarbejder">
      <div className='medarbejder-image'>
        <img src={placeholder_man} alt="Billede af medarbejder"/>
      </div>
      <h4>Andreas Behrendt Lau</h4>
      <h5>Afdelingsleder</h5> 
      <p>+45 12 34 56 78</p>
      <p>kontakt@mail.dk</p>
    </div>
    <div className='medarbejder' aria-label="Medarbejder">
      <div className='medarbejder-image'>
        <img src={placeholder_img} alt="Billede af medarbejder"/>
      </div>
      <h4>Camilla Ledsgaard Jensen</h4>
      <h5>Skoleleder</h5>
      <p>+45 12 34 56 78</p>
      <p>kontakt@mail.dk</p>
    </div>
    <div className='medarbejder' aria-label="Medarbejder">
      <div className='medarbejder-image'>
        <img src={placeholder_man} alt="Billede af medarbejder"/>
      </div>
      <h4>Flemming Cederholm</h4>
      <h5>Afdelingsleder </h5>
      <p>+45 12 34 56 78</p>
      <p>kontakt@mail.dk</p>
    </div>
  </div>
</div>
</div>
    </div>


  );
}

export default kontakt;
