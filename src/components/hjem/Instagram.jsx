import React from 'react';
import '../../css/Instagram.css'; // Import the CSS file
import {  InstagramIcon } from '../Icons.jsx';
import ig1 from '../../images/ig1.png';
import ig2 from '../../images/ig2.png';
import ig3 from '../../images/ig3.png';
import ig4 from '../../images/ig4.png';

const Instagram = ({ title }) => {
  return (
    <div className="instagram" aria-label={title}>
      <h2 className="section-title" aria-label={title}>
        {title}
      </h2>
      <div className="image-container-ig">
        {/* Four pictures */}
        <div className="picture">
          <a href="https://www.instagram.com/p/C0gsOghII9V/?img_index=1" target="_blank" rel="noopener noreferrer" aria-label="Instagram Picture 1">
            <img src={ig1} alt="Picture 1" aria-label="Picture 1" />
          </a>
        </div>
        <div className="picture">
          <a href="https://www.instagram.com/p/C0eAppcod08/?img_index=1" target="_blank" rel="noopener noreferrer" aria-label="Instagram Picture 2">
            <img src={ig2} alt="Picture 2" aria-label="Picture 2" />
          </a>
        </div>
        <div className="picture">
          <a href="https://www.instagram.com/p/C0dsZpXoBHD/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Picture 3">
            <img src={ig3} alt="Picture 3" aria-label="Picture 3" />
          </a>
        </div>  
        <div className="picture">
          <a href="https://www.instagram.com/p/C0T0f7xob4x/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Picture 4">
            <img src={ig4} alt="Picture 4" aria-label="Picture 4" />
          </a>
        </div>
      </div>
      <div className="button-and-icon">
        {/* Button underneath the pictures */}
        <a href="https://www.instagram.com/ungfaxe/" className="instagram-link" aria-label="See more Instagram posts">
          <button className="Se flere Instagram post">Se flere Instagram post</button>
          {/* Instagram icon */}
          <a href="https://www.instagram.com" className="icon-link-instagram" aria-label="Instagram">
            <InstagramIcon aria-label="Instagram" />
          </a>
        </a>
      </div>
    </div>
  );
};

export default Instagram;
