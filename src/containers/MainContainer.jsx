import React from 'react';
import Nav from '../components/common/Nav';
import Home from '../components/common/Home';
import Footer from '../components/common/Footer';

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