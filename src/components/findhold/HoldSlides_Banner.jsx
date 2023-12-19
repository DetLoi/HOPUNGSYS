import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../css/HoldSlides_Banner.css'; // Import the CSS file
import { Nyheder } from '../../data/HoldData';

const HoldSlides_Banner = ({ title }) => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 150,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 1,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <div className="HoldSlides_banner" aria-label={title}>
      <h2 className="section-title" aria-label={title}>
        {title}
      </h2>
      <Carousel
        responsive={responsive}
        arrows={true}
        partialVisible={true}
        containerClass="carousel-container_banner"
        itemClass="carousel-item"
        showDots={true}
        infinite={true}
        aria-hidden={false}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {Nyheder.map((hold, index) => (
          <div
            key={index}
            className="carousel-thumbnail_banner"
            style={{
              backgroundImage: `url(${hold.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-label={hold.title}
          >
            <Link to={`/findhold/${hold.id}`} aria-label={hold.title}>
              {/* Show notification based on image status */}
              {hold.status === 'few spots' && (
                <div className="notification_banner" aria-label="Få pladser tilbage">
                  Få pladser tilbage
                </div>
              )}
              {hold.status === 'sold out' && (
                <div className="notification_banner sold-out" aria-label="Udsolgt">
                  Udsolgt
                </div>
              )}
              <div className='bannertitel_and_button'>
                <h2 className="image-title-banner" aria-label={hold.title}>
                  {hold.title}
                </h2>
                <button className='image-button' aria-label="Tilmeld dig">
                  Tilmeld dig
                </button>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HoldSlides_Banner;
