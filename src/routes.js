import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App'
import SignUp from './components/signup/SignUp'

export default (
    <Route path="/" component={App}>
        <Route path="signup" component={SignUp} />
    </Route>
);