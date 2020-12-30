import React from 'react';
import Nav from '../common/Nav';
import LoginComponent from '../login/LoginComponent';
import Footer from '../common/Footer';

export default function LoginContainer(){
    return (
        <>
            <Nav/>
            <LoginComponent/>
            <Footer/>
        </>
    )
}