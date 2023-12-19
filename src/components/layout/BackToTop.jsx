import React, { useState, useEffect } from 'react';
import '../../css/BackToTop.css';
import { ArrowUpIcon } from '../Icons.jsx';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top-button"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
