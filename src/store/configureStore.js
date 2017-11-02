import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; // TODO: REMOVE THIS MIDDLEWARE
import { composeWithDevTools } from 'redux-devtools-extension'; // TODO: REMOVE THIS DEBUG TOOL

const composeEnhancers = composeWithDevTools({}); // TODO: REMOVE THIS DEBUG TOOL

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())), // TODO: REMOVE THIS MIDDLEWARE
    );
}