import React from 'react';
import '../../css/Searchbar.css'; // Import the CSS file
import searchIcon from '../../images/search.png'; // Import your search icon

const Searchbar = ({title}) => {
    return (
        <div className="searchbar" aria-label="Search bar">
        <div className="search-container">
            <img src={searchIcon} alt="Search" className="search-icon" aria-hidden="true" />
            <input type="text" placeholder="Find hold" className="search-input" aria-label="Search for a hold" />
        </div>
            <div class="custom-shape-divider-bottom-1702134035">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        </div>
    );
};

export default Searchbar;

