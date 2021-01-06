import React from 'react';
import Nav from '../common/Nav';
import ProfilesComponent from './ProfilesComponent';
import Footer from '../common/Footer';

export default function ProfilesContainer(){
    return (
        <>
            <Nav/>
            <ProfilesComponent/>
            <Footer/>
        </>
    )
}