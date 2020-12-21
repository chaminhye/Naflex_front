import React, { useState } from 'react';
import NetflixLogo from '../static/images/Naflex_Logo.png';
import { FiSmile } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import SearchInput from '../containers/SearchInput';

/**
 *      /src/component 폴더는 React 컴포넌트로 구성된 폴더, 컴포넌트를 보통 도메인별로 구분
 *          - container component : 여러개의 프레젠테이션 컴포넌트로 구성, 비즈니스 로직 구현 O
 *          - presentational component : 일반적으로 알고 있는 UI컴포넌트, 비즈니스 로직 구현 X
 * 
*/

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