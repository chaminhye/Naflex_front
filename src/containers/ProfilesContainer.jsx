import React from 'react';
import Nav from '../components/common/Nav';
import Profiles from '../components/login/Profiles';
import Footer from '../components/common/Footer';

export default function ProfilesContainer(){
    return (
        <>
            <Nav/>
            <Profiles/>
            <Footer/>
        </>
    )
}