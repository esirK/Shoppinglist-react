import {combineReducers} from 'redux';
import user from './usersReducer';
import lists from './listsReducer';
import items from './itemsReducer';
import editList from './updatesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    user,
    lists,
    items,
    editList,
    ajaxCallsInProgress
});

export default rootReducer;
