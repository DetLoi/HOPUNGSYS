import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Footer.css'; // Import the CSS file
import logoImage from '../../images/ungfaxelogo.png';
import { ArrowIcon, FacebookIcon, InstagramIcon, EnvelopeIcon } from '../Icons.jsx';

const Footer = () => {
  return (
    <div className="Footer" aria-label="Footer">
      <div className="footer-content">
        <div className="footer-left">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} aria-label="Ung Faxe homepage">
            <img src={logoImage} alt="Ung Faxe logo" className="footer-logo" aria-label="Ung Faxe logo" />
          </Link>
          <p className="light-text-color" aria-label="About Ung Faxe">
            Ung Faxe er en ungdomsskole for unge i 7. klasse til og med 18 år, der enten bor eller går i skole i Faxe Kommune. Vi tilbyder ungdomsklubber, fritidsaktiviteter, camps, rejser og m.m. Se alle vores tilbud her på siden.
          </p>
          <Link to="/findhold" onClick={() => window.scrollTo(0, 0)} aria-label="Find hold siden">
            <button className="footer-button" aria-label="Find hold">Find hold</button>
          </Link>
        </div>
        <div className="footer-link-box">
          <div className="kontakt-box" aria-label="Kontakt Information">
            <h3 className="light-text-color">Kontakt os</h3>
            <p className="light-text-color">
              UNG FAXE - Ungdomsskole <br />
              Søndergade 12H <br />
              4690 Haslev <br />
            </p>
          </div>
        </div>
        <div className="footer-link-box">
          <div className="info-box" aria-label="Information Links">
            <h3 className="light-text-color">Info</h3>
            <nav className="footer-nav">
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="/link1" className="footer-nav-link" aria-label="Link til Knallert og førstehjælp"><ArrowIcon aria-label="Arrow Icon" />Knallert og førstehjælp</a>
                </li>
                <li className="footer-nav-item">
                  <a href="/link2" className="footer-nav-link" aria-label="Link til Læs højt"><ArrowIcon aria-label="Arrow Icon" />Læs højt</a>
                </li>
                <li className="footer-nav-item">
                  <a href="/link3" className="footer-nav-link" aria-label="Link til Tilgængelighedserklæring"><ArrowIcon aria-label="Arrow Icon" />Tilgængelighedserklæring</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-link-box">
          <div className="login-box" aria-label="Login Links">
            <h3 className="light-text-color">Login</h3>
            <nav className="footer-nav">
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="/login1" className="footer-nav-link" aria-label="Link til Kommunal email"><ArrowIcon aria-label="Arrow Icon" />Kommunal email</a>
                </li>
                <li className="footer-nav-item">
                  <a href="/login2" className="footer-nav-link" aria-label="Link til UNGSYS"><ArrowIcon aria-label="Arrow Icon" />UNGSYS</a>
                </li>
                <li className="footer-nav-item">
                  <a href="/login3" className="footer-nav-link" aria-label="Link til AULA"><ArrowIcon aria-label="Arrow Icon" />AULA</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="ean-and-icons" aria-label="Ekstra Information">
        <div className="ean">
          <p className="light-text-color"> Ean nr: 5798007697884 Cvr nr: 29188475</p>
        </div>
        <div className="footer-icons">
          <FacebookIcon aria-label="Facebook link" />
          <InstagramIcon aria-label="Instagram link" />
          <EnvelopeIcon aria-label="Email link" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
