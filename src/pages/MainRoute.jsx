import React from 'react';
import { Switch,Route } from 'react-router-dom';
import ProfilesContainer from '../containers/ProfilesContainer';
import Player from '../components/movies/Player';
import MainContainer from '../containers/MainContainer';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';

export default function MainRoute(){
    return (
        <Switch>
            <Route path="/" exact component={MainContainer}/>
            <Route path="/home" exact component={HomeContainer}/>
            <Route path="/profiles" exact component={ProfilesContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/signUp" component={SignUpContainer}/>
            <Route path="/player" component={Player}/>
        </Switch>
    )
}