import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록 :</h3>
            <ul>
                <li>
                    <NavLink 
                        to="/profiles/ellsa"
                        activeStyle={{background : 'black', color :'white'}}>
                    ellsa
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/profiles/anna"
                        activeStyle={{background : 'black', color :'white'}}>
                    anna
                    </NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>유저를 선택해주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile}/>
            <WithRouterSample/>
            {/* <RouterHookSample/> */}
        </div>
    );
}

export default Profiles;