import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../css/HoldSlides.css'; // Import the CSS file
import { EventsOgTure } from '../../data/HoldData';

const HoldSlides_2 = ({ title }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <div className="HoldSlides">
      <h3 className="section-title-findhold" aria-label={title}>
        {title}
      </h3>
      <Carousel
        responsive={responsive}
        arrows={true}
        partialVisible={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
        showDots={true}
        infinite={true}
        aria-hidden={false}
      >
        {EventsOgTure.map((hold, index) => (
          <div key={index} className="carousel-thumbnail">
            <Link to={`/findhold/${hold.id}`} aria-label={hold.title}>
              <img src={hold.src} alt={`Thumbnail ${index + 1}`} aria-label={hold.title} />
              {hold.status === 'few spots' && (
                <div className="notification" aria-label="Få pladser tilbage">
                  Få pladser tilbage
                </div>
              )}
              {hold.status === 'sold out' && (
                <div className="notification sold-out" aria-label="Udsolgt">
                  Udsolgt
                </div>
              )}
              <h5 className="image-title" aria-label={hold.title}>
                {hold.title}
              </h5>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HoldSlides_2;
