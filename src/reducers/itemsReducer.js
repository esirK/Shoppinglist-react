import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function itemsReducer(state = initialState.items, action) {
    switch(action.type){

        case actionTypes.LOAD_ITEM_SUCCESS:
            return action.items;

        default:
            return state;
    }
}