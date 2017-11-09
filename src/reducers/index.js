import {combineReducers} from 'redux';
import users from './usersReducer';
import lists from './shoppingListsReducer';

const rootReducer = combineReducers({
    users,
    lists
});

export default rootReducer;
