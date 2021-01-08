import React from 'react';
import Nav from '../components/common/Nav';
import Login from '../components/login/Login';
import Footer from '../components/common/Footer';

export default function LoginContainer(){
    return (
        <>
            <Nav/>
            <Login/>
            <Footer/>
        </>
    )
}