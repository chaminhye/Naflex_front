import React from 'react';
import { Switch,Route } from 'react-router-dom';
import MainContainer from '../components/common/MainContainer';
import HomeContainer from '../components/common/HomeContainer';
import LoginContainer from '../components/login/LoginContainer';
import Player from '../components/movies/Player';


export default function MainRoute(){
    return (
        <Switch>
            <Route path="/" exact component={MainContainer}/>
            <Route path="/home" exact component={HomeContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/player" component={Player}/>
        </Switch>
    )
}