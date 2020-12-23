import React from 'react';
import Nav from '../common/Nav';
import LoginForm from '../login/LoginForm';
import Footer from '../common/Footer';

export default function LoginContainer(){
    return (
        <>
            <Nav/>
            <LoginForm/>
            <Footer/>
        </>
    )
}