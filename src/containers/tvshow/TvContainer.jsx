import React from 'react';
import Nav from '../../components/common/Nav';
import HeaderContainer from '../HeaderContainer';
import TvLayout from './TvLayout';
import Footer from '../../components/common/Footer';

// 로그인 후 화면
export default function TvContainer(){
    return (
        <>
            <Nav/>
            <HeaderContainer type="tv"/>
            <TvLayout/>
            <Footer/>
        </>
    )
}