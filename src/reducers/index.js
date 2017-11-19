import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import message from './messagesReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
    user,
    lists,
    message,
    ajaxStatusReducer
});

export default rootReducer;
