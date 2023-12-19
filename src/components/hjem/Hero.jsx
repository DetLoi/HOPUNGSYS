import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/hero.css'; // Import the CSS file

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="headline"  aria-label="GYSERFILM WORKSHOP">GYSERFILM WORKSHOP</h1>
                <Link to='/findhold/gyserfilmworkshop'><button className="signup-button" aria-label="Tilmeld dig til gyserfilm workshop">Tilmeld dig</button>
          </Link>  </div>
        </div>
    );
};

export default Hero;
