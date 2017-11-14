import * as actionTypes from '../actions/actionTypes';

export default function shoppingListsReducer(state = [], action) {
    switch(action.type){

        case actionTypes.LOAD_LISTS_SUCCESS:
            return action.lists;

        default:
            return state;
    }
}