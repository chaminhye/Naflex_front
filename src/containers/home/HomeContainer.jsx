import React from 'react';
import Nav from '../../components/common/Nav';
import HeaderContainer from '../HeaderContainer';
import HomeLayout from './HomeLayout';
import Footer from '../../components/common/Footer';

// 로그인 후 화면
export default function HomeContainer(){
    return (
        <>
            <Nav/>
            <HeaderContainer type="tv"/>
            <HomeLayout/>
            <Footer/>
        </>
    )
}