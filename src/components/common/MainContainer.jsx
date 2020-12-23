import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Layout from '../../containers/Layout';
import Footer from './Footer';

export default function MainContainer(){
    return (
        <>
            <Nav/>
            <Header/>
            <Layout/>
            <Footer/>
        </>
    )
}