import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import '../../css/Header.css';
import logoImage from '../../images/logo2.png';
import { BurgerMenuIcon, CrossIcon } from '../Icons';
import KommunalImage from '../../images/kommunemail.jpg'; // Import your images here
import UNGSYSImage from '../../images/ungsyslogo.png';
import AULAImage from '../../images/aula.png';

const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="header" aria-label="Hjemmeside Header">
            <div className="header_left">
                <Link to="/" aria-label="Ung Faxe Forside">
                    <img
                        className="logo"
                        src={logoImage}
                        alt="UNGFAXE Logo"
                        aria-label="UNGFAXE Logo"
                    />
                </Link>
            </div>
            <div className="header_right">
                <nav className="header-nav" ref={navRef}>
                    <ul className="nav_links" aria-label="Navigation">
                        <li><Link onClick={showNavbar} to="/knallertogførstehjælp" aria-label="Knallert og Førstehjælp">Knallert og Førstehjælp</Link></li>
                        <li><Link onClick={showNavbar} to="/ungdomsklubberne" aria-label="Ungdomsklubberne">Ungdomsklubberne</Link></li>
                        <li><Link onClick={showNavbar} to="/omungfaxe" aria-label="Om Ung Faxe">Om Ung Faxe</Link></li>
                        <li><Link onClick={showNavbar} to="/kontakt" aria-label="Kontakt">Kontakt</Link></li>
                        <ul className="CTA-btns">
                            <li className='findhold-btn-innav padding-0' aria-label="Find Hold"><Link onClick={showNavbar} to="/findhold"><button>Find hold</button></Link></li>
                            <li className='dropdown-btn' aria-label="Log ind">
                                <Link to="/login">
                                    <button onClick={showNavbar} className='button_second hide-laptop' aria-label="Log ind">Log ind</button>
                                </Link>
                                <button onClick={toggleDropdown} className='button_second hide-mobile' aria-label="Log ind">
                                    Log ind
                                </button>
                                {dropdownOpen && (
                                    <div className='dropdown-content'>
                                        <h5 className='white-text' aria-label="Vælg Portal">Vælg portal</h5>
                                        <div className='dropdown-item' aria-label="Log ind Valgmuligheder">
                                            <div className='login-img'>
                                                <img className='kommuneimg' src={KommunalImage} alt='Kommunal' />
                                            </div>
                                            <h6 aria-label="Kommunal email">Kommunal email</h6>
                                        </div>
                                        <div className='dropdown-item'>
                                            <div className='login-img'>
                                                <img className='ungsysimg' src={UNGSYSImage} alt='UNGSYS' />
                                            </div>
                                            <h6 aria-label="UNGSYS Administration">UNGSYS</h6>
                                        </div>
                                        <div className='dropdown-item'>
                                            <div className='login-img'>
                                                <img src={AULAImage} alt='AULA' />
                                            </div>
                                            <h6 aria-label="AULA">AULA</h6>
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>
                        <button 
                            onClick={showNavbar} 
                            className="nav-btn nav-close-btn" 
                            aria-label="Luk Navigation Knap">
                            <CrossIcon />
                        </button>
                    </ul>
                </nav>
                <div className="button-and-bars" aria-label="Knapper og Linjer Del">
                    <li className='findhold-btn hide-laptop' aria-label="Find Hold Knap">
                        <Link to="/findhold"><button>Find hold</button></Link>
                    </li>
                    <li className='findhold-btn' aria-label="Login Knap i Mobil">
                        <Link to="/login">
                            <button className='button_second hide-laptop' aria-label="Log ind">Log ind</button>
                        </Link>
                    </li>
                    <button 
                        onClick={showNavbar} 
                        className="nav-btn nav-open-btn" 
                        aria-label="Åbn Navigation">
                        <BurgerMenuIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
