import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function shoppingListsReducer(state = initialState.lists, action) {
    switch(action.type){

        case actionTypes.LOAD_LISTS_SUCCESS:{
            let newState = Object.assign({}, state);
            newState.existingShoppingList = action.lists;
            return newState;
        }

        default:
            return state;
    }
}