import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

// 로그인 전 화면
export default function MainContainer(){
    return (
        <>
            <Nav/>
            <Home/>
            <Footer/>
        </>
    )
}