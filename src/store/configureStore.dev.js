import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({});

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
}