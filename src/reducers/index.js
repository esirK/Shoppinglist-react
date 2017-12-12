import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import items from './itemsReducer';
import edit from './updatesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    user,
    lists,
    items,
    edit,
    ajaxCallsInProgress
});

export default rootReducer;
