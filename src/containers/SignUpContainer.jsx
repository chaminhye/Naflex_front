import React from 'react';
import Nav from '../components/common/Nav';
import SignUp from '../components/login/SignUp';
import Footer from '../components/common/Footer';

export default function SignUpContainer({match}){
    return (
        <>
            <Nav/>
            <SignUp props={match.params.username}/>
            <Footer/>
        </>
    )
}