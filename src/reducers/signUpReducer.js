import * as actionTypes from '../actions/actionTypes';

export default function signUpReducer(state = [], action) {
    switch(action.type){

        case actionTypes.CREATE_USER:
            return [...state, Object.assign({}, action.user)];

        case actionTypes.CREATE_USER_SUCCESS:
            return action.user;

        default:
            return state;
    }
}