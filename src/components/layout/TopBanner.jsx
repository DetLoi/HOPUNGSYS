import React from 'react';
import '../../css/TopBanner.css'; // Import the CSS file
import { FacebookIcon, InstagramIcon, EnvelopeIcon } from '../Icons.jsx';

const TopBanner = () => {
    return (
        <div className="topbanner" aria-label="Top Banner">
            <div className="topbanner_left" aria-label="Venstre Del af Top Banner">
                <h6 className="contact-text" aria-label="Kontakt Information">
                    <a href="tel:+4556206200">56 20 62 00</a> // <a href="mailto:ungdomsskolen@faxekommune.dk">ungdomsskolen@faxekommune.dk</a>
                </h6>
            </div>
            <div className="topbanner_right" aria-label="Højre Del af Top Banner">
                <div className="contact-icons" aria-label="Kontakt Ikoner">
                    <a href="https://www.facebook.com" className="icon-link" aria-label="Facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com" className="icon-link" aria-label="Instagram">
                        <InstagramIcon />
                    </a>
                    <a href="mailto:ungdomsskolen@faxekommune.dk" className="icon-link" aria-label="E-mail">
                        <EnvelopeIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
