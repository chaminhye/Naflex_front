import React from 'react';
import Nav from '../components/common/Nav';
import MyHistoryList from '../components/MyHistoryList';
import Footer from '../components/common/Footer';

const MyHistoryListContainer = ({match}) =>{
    return (
        <>
            <Nav/>
            <MyHistoryList props={match.params.userIdx}/>
            <Footer/>
        </>
    )
}

export default MyHistoryListContainer;