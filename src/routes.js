import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Lists from './components/lists/Lists';
import Items from './components/items/Items';
import AuthenticationPage from './components/authentication/AuthenticationPage';

const requireSignIn = () => {return;};

export default (
    <Route path="/" component={App}>
            <IndexRoute component={requireSignIn(Lists)} />
            <Route path="signup" component={AuthenticationPage} module="signup" />
            <Route path="login" component={AuthenticationPage} module="login" />
            <Route path="items" component={requireSignIn(Items)} />
            <Route path="lists" component={requireSignIn(Lists)} />
    </Route>
);