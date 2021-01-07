import React from 'react';
import { Switch,Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';

export default function MainRoute(){
    return (
        <Switch>
            <Route path="/" exact component={MainContainer}/>
            <Route path="/home" exact component={HomeContainer}/>
            <Route path="/login" component={LoginContainer}/>
        </Switch>
    )
}