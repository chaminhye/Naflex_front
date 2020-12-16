import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>  
        <li>
          <Link to="/about">소개</Link>
        </li>  
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>  
        <li>
          <Link to="/history">History</Link>
        </li>  
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route
          render={({location}) => (
            // path를 따로 정의 하지 않는경우, 모든 상황에 랜더링됨
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;



/*
import  Users  from './Users';  
import {UsersProvider} from './UsersContext';


function App() {
  return (
    <UsersProvider>
      <Users/>
    </UsersProvider>
  );
} 
*/