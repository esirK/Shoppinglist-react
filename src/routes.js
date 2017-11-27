import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import Lists from './components/lists/Lists';
import Items from './components/items/Items';
import AuthenticationPage from './components/authentication/AuthenticationPage';


function loggedIn() {
   return localStorage.getItem("token") !== null;
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        });
    }
}

export default (
    <Route path="/" component={App}>
            <IndexRoute component={Lists}  onEnter={requireAuth} />
            <Route path="signup" component={AuthenticationPage} module="signup" />
            <Route path="login" component={AuthenticationPage} module="login" />
            <Route path="items" component={Items} onEnter={requireAuth} />
            <Route path="lists" component={Lists} onEnter={requireAuth} />
    </Route>
);