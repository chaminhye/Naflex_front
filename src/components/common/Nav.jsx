import React, { useState } from 'react';
import { FiBell, FiGift, FiLogIn, FiSmile } from "react-icons/fi";
import { Link } from 'react-router-dom';
import SearchInput from '../../containers/SearchInput';
import NetflixLogo from '../../static/images/Naflex_Logo.png';

/**
 *      /src/component 폴더는 React 컴포넌트로 구성된 폴더, 컴포넌트를 보통 도메인별로 구분
 *          - container component : 여러개의 프레젠테이션 컴포넌트로 구성, 비즈니스 로직 구현 O
 *          - presentational component : 일반적으로 알고 있는 UI컴포넌트, 비즈니스 로직 구현 X
 * 
*/

const Nav = (props) => {

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

    // token에 따라 Nav상단 메뉴 display 설정
    // 1. 비로그인시 > 좌측 로고, 우측 로그인 버튼만 존재
    // 2. 로그인 이후 > profiles >> 로고만 보임
    //               > home >> 전체 다 노출     

    const isLogin = localStorage.getItem('token').length > 0? true : false;
    console.log(isLogin);
    return (
        <>
            <nav className={"navigation " + (scrolling ? "black" : "" )}>
                <ul className="navigation_container">
                    <div className="navigation_container left">
                        <Link to="/"><img className="navigation_container logo" src={NetflixLogo} alt="logo" /></Link>
                       
                        <Link to="/" className="no--line--link"><div className="navigation_container link">Home</div></Link>
                        <Link to="/tvShow" className="no--line--link"><div className="navigation_container link">TV Shows</div></Link>
                        <Link to="/movies" className="no--line--link"><div className="navigation_container link">Movies</div></Link>
                        <Link to="/recently" className="no--line--link"><div className="navigation_container link">Recently</div></Link>
                        <Link to="/myList" className="no--line--link"><div className="navigation_container link">My List</div></Link>
                    </div>
                    <div className="icons">
                        <div className="search-box">
                            <SearchInput/>
                            {/* <input onChange={onChange} value={value} className="search-txt" type="text" placeholder=" Title "/> */}
                        </div>
                        <div className="navigation_container link"><FiGift/></div>
                        <div className="navigation_container link"><FiBell/></div>
                        <div className="navigation_container link"><FiSmile/></div>
                        <Link to="/login" className="no--line--link"><div className="navigation_container link"><FiLogIn/></div></Link>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default Nav;