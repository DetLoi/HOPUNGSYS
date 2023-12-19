import React from 'react';
import '../../css/Searchbar.css'; // Import the CSS file
import searchIcon from '../../images/search.png'; // Import your search icon

const Searchbar_findhold = () => {
    return (
        <div className="searchbar searchbar-container-findhold" role="search">
            <div className="search-container searchbar-findhold">
                <img src={searchIcon} alt="Search" className="search-icon" aria-hidden="true" />
                <input type="text" placeholder="Find hold" className="search-input" aria-label="Search for holds" />
            </div>
        </div>
    );
};

export default Searchbar_findhold;
