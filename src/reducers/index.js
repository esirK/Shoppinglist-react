import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import message from './messagesReducer';

const rootReducer = combineReducers({
    user,
    lists,
    message
});

export default rootReducer;
