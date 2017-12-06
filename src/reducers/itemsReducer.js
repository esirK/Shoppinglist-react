import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function itemsReducer(state = initialState.items, action) {
    switch(action.type){

        case actionTypes.LOAD_ITEM_SUCCESS:
            return action.items;

        case actionTypes.DELETE_ITEM_SUCCESS: {
            let newItemsState = Object.assign([], state);
            newItemsState.splice(newItemsState.findIndex(a => parseInt(a.id) === parseInt(action.itemId)), 1);
            return newItemsState;
        }

        default:
            return state;
    }
}