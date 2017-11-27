import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function shoppingListsReducer(state = initialState.lists, action) {
    switch(action.type){

        case actionTypes.LOAD_LISTS_SUCCESS:
            return action.lists;

        default:
            return state;
    }
}