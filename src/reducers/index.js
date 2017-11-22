import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { reduxTokenAuthReducer } from 'redux-token-auth';

const rootReducer = combineReducers({
    reduxTokenAuth: reduxTokenAuthReducer,
    user,
    lists,
    ajaxCallsInProgress
});

export default rootReducer;
