import React from 'react';
import Nav from '../components/common/Nav';
import HeaderContainer from './HeaderContainer';
import HomeLayout from './home/HomeLayout';
import Footer from '../components/common/Footer';

// 로그인 후 화면
export default function HomeContainer(){

    return (
        <>
            <Nav/>
            <HeaderContainer type="home"/>
            <HomeLayout/>
            <Footer/>
        </>
    )
}