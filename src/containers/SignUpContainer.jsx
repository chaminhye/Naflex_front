import React from 'react';
import Nav from '../components/common/Nav';
import SignUp from '../components/login/SignUp';
import Footer from '../components/common/Footer';

export default function LoginContainer(){
    return (
        <>
            <Nav/>
            <SignUp/>
            <Footer/>
        </>
    )
}