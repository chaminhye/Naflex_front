import React from 'react';
import Nav from '../components/common/Nav';
import Profiles from '../components/login/Profiles';
import Footer from '../components/common/Footer';

export default function ProfilesContainer(){
        
    // const users = localStorage.getItem('users') 
    // console.log('ProfilesContainer',users)
    return (
        <>
            <Nav/>
            <Profiles/>
            <Footer/>
        </>
    )
}