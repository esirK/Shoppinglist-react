import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Lists from './components/lists/Lists';
import Items from './components/items/Items';
import Login from './components/login/Login';
import AuthenticationPage from './components/authentication/AuthenticationPage';
import { generateRequireSignInWrapper } from 'redux-token-auth';


const requireSignIn = generateRequireSignInWrapper({
    redirectPathIfNotSignedIn: '/login',
});

export default (
    <Route path="/" component={App}>
            <IndexRoute component={requireSignIn(Lists)} />
            <Route path="signup" component={AuthenticationPage} />
            <Route path="login" component={Login} />
            <Route path="items" component={requireSignIn(Items)} />
            <Route path="lists" component={requireSignIn(Lists)} />
    </Route>
);