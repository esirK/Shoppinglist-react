import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    user,
    lists,
    ajaxCallsInProgress
});

export default rootReducer;
