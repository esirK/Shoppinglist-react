import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';

const rootReducer = combineReducers({
    user,
    lists
});

export default rootReducer;
