import React from 'react';
import Nav from '../components/common/Nav';
import Header from '../components/common/Header';
import Layout from './Layout';
import Footer from '../components/common/Footer';

// 로그인 후 화면
export default function HomeContainer({idx}){
    return (
        <>
            <Nav/>
            <Header/>
            <Layout props={idx}/>
            <Footer/>
        </>
    )
}