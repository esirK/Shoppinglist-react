import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {requireAuth} from './helper';
import App from './components/App';
import Lists from './components/lists/Lists';
import Items from './components/items/Items';
import AuthenticationPage from './components/authentication/AuthenticationPage';

export default (
    <Route path="/" component={App}>
            <IndexRoute component={Lists}  onEnter={requireAuth} />
            <Route path="signup" component={AuthenticationPage} module="signup" />
            <Route path="login" component={AuthenticationPage} module="login" />
            <Route path="items" component={Items} onEnter={requireAuth} />
            <Route path="lists/:id" component={Items} onEnter={requireAuth} />
            <Route path="lists" component={Lists} onEnter={requireAuth} />
    </Route>
);