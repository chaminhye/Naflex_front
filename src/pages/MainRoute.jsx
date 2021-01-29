import React from 'react';
import { Switch,Route } from 'react-router-dom';
import ProfilesContainer from '../containers/ProfilesContainer';
import MoviePlayer from '../components/movies/MoviePlayer';
import MainContainer from '../containers/MainContainer';
import MyHistoryContainer from '../containers/MyHistoryContainer';
import HomeContainer from '../containers/home/HomeContainer';
import MovieContainer from '../containers/movie/MovieContainer';
import TvContainer from '../containers/tvshow/TvContainer';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';
import CredentialContainer from '../containers/CredentialContainer';

export default function MainRoute(){
    return (
        <Switch>
            <Route path="/" exact component={MainContainer}/>
            <Route path="/home"  component={HomeContainer}/>
            <Route path="/movies"  component={MovieContainer}/>
            <Route path="/tvShow"  component={TvContainer}/>
            <Route path="/recently/:userIdx"  component={MyHistoryContainer}/>
            <Route path="/profiles" component={ProfilesContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/signUp/:username" component={SignUpContainer} />
            <Route path="/MoviePlay/:id" component={MoviePlayer}/>
            <Route path="/credentials" component={CredentialContainer}/>
        </Switch>
    )
}