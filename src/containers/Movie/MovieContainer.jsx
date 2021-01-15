import React from 'react';
import Nav from '../../components/common/Nav';
import Header from '../../components/common/Header';
import MovieLayout from './MovieLayout';
import Footer from '../../components/common/Footer';

// 로그인 후 화면
export default function HomeContainer(){
    return (
        <>
            <Nav/>
            <Header/>
            <MovieLayout/>
            <Footer/>
        </>
    )
}