import React, { useState } from 'react';
import NetflixLogo from '../static/images/Netflix_Logo.png';
import { FiSmile } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import   from '../containers/SearchInpu5 =8 

const Nav = () => {

    // change nav bg color
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if(window.scrollY === 0) {
            setScrolling(false);
        } else if (window.scrollY > 50) {
            setScrolling(true);
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    return (
        <nav className={"navigation " + (scrolling ? "black" : "" )}>
            <ul className="navigation_container">
                <div className="navigation_container left">
                    <img className="navigation_container logo" src={NetflixLogo} alt="logo" />
                    <div className="navigation_container link">Home</div>
                    <div className="navigation_container link">TV Shows</div>
                    <div className="navigation_container link">Movies</div>
                    <div className="navigation_container link">Recently</div>
                    <div className="navigation_container link">My List</div>
                </div>
                <div className="icons">
                    <div className="search-box">
                        <SearchInput/>
                        {/* <input onChange={onChange} value={value} className="search-txt" type="text" placeholder=" Title "/> */}
                    </div>
                    <div className="navigation_container link"><FiGift/></div>
                    <div className="navigation_container link"><FiBell/></div>
                    <div className="navigation_container link"><FiSmile/></div>
                </div>

            </ul>
        </nav>
    );
}

export default Nav;