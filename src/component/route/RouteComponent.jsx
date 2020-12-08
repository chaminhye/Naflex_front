import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import AddUserComponent from '../user/AddUserComponent';
import EditUserComponent from '../user/EditUserComponent';


// 다른 페이지로 이동하기 위해 route 설정
const AppRoute = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Switch>
                        <Route exact path="/" component={UserListComponent}/>
                        <Route path="/users" component={UserListComponent}/>
                        <Route path="/add-user" component={AddUserComponent}/>
                        <Route path="/edit-user" component={EditUserComponent}/>
                        <Route path="/naflex" component={EditUserComponent}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop : '20px'
}

export default AppRoute;