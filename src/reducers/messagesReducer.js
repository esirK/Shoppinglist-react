import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function errorReducer(state = initialState.message, action) {
    switch(action.type){

        case actionTypes.CREATE_USER_FAIL:
            return action.message;

        case actionTypes.CREATE_USER_SUCCESS:
            return action.message;

        default:
            return state;
    }
}