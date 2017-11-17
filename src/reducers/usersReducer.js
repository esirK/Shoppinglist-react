import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function signUpReducer(state = initialState.user, action) {
    switch(action.type){

        case actionTypes.CREATE_USER:
            return [...state, Object.assign({}, action.user)];

        case actionTypes.CREATE_USER_SUCCESS:
            return action.user;

        case actionTypes.GET_CURRENT_USER_SUCCESS:
            return [...state, Object.assign({}, action.user)];


        default:
            return state;
    }
}