import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App'
import Lists from './components/lists/Lists'
import Items from './components/items/Items'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Lists} />
        <Route path="signup" component={SignUp} />
        <Route path="login" component={Login} />
        <Route path="items" component={Items} />
        <Route path="lists" component={Lists} />
    </Route>
);