import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import message from './messagesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    user,
    lists,
    message,
    ajaxCallsInProgress
});

export default rootReducer;
