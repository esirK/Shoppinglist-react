import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import items from './itemsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    user,
    lists,
    items,
    ajaxCallsInProgress
});

export default rootReducer;
