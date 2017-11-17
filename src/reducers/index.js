import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import errorMessage from './errorReducer';

const rootReducer = combineReducers({
    user,
    lists,
    errorMessage
});

export default rootReducer;
