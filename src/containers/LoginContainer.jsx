import React from 'react';
import Nav from '../components/common/Nav';
import LoginComponent from '../components/login/LoginComponent';
import Footer from '../components/common/Footer';

export default function LoginContainer(){
    return (
        <>
            <Nav/>
            <LoginComponent/>
            <Footer/>
        </>
    )
}