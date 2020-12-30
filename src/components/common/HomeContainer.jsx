import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Layout from '../../containers/Layout';
import Footer from './Footer';

// 로그인 후 화면
export default function HomeContainer(){
    return (
        <>
            <Nav/>
            <Header/>
            <Layout/>
            <Footer/>
        </>
    )
}