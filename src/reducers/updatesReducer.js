import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function updatesReducer(state = initialState.edit, action) {
    switch(action.type){

        case actionTypes.INITIALIZE_LIST_EDITOR: {
            let newState = Object.assign({}, state);
            newState.id = action.list.id;
            newState.data = action.list.title;
            newState.type = "list";
            return newState;
        }

        case actionTypes.INITIALIZE_ITEM_EDITOR: {
            let newState = Object.assign({}, state);
            newState.id = action.item.id;
            newState.data = action.item.data;
            newState.type = "item";
            return newState;
        }

        case actionTypes.UPDATE_LIST_SUCCESS:
            return initialState.edit;

        default:
            return state;
    }
}