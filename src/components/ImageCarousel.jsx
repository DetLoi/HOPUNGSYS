import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/imagecarousel.css';

const ImageCarousel = ({ hold }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className='imagecarousel' aria-label='Hold Image Carousel'>
      <Carousel
        className='hold-carousel'
        selectedItem={selectedIndex}
        onChange={handleSelect}
        showArrows={true}
        showThumbs={true}
        onClickItem={(index) => handleSelect(index)}
      >
        {hold.subImages.map((image, index) => (
          <div className='subimages-container' key={index} aria-label={`Image ${index}`}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
