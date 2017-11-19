import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function errorReducer(state = initialState.errorMessage, action) {
    switch(action.type){

        case actionTypes.CREATE_USER_FAIL:
            return action.errorMessage;

        default:
            return state;
    }
}