import React from 'react';
import Nav from '../components/common/Nav';
import Header from '../components/common/Header';
import HomeLayout from './home/HomeLayout';
import Footer from '../components/common/Footer';

// 로그인 후 화면
export default function HomeContainer({match}){
    console.log('HomeContainer || ',match)

    return (
        <>
            <Nav/>
            <Header/>
            <HomeLayout/>
            <Footer/>
        </>
    )
}