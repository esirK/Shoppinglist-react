import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function signUpReducer(state = initialState.user, action) {
    switch(action.type){

        case actionTypes.CREATE_USER:

            return [...state, Object.assign({}, action.user)];

        case actionTypes.CREATE_USER_SUCCESS:
            delete action.user.password;
            delete action.user.security_question;
            delete action.user.answer;
            delete action.user.id;
            return action.user;

        case actionTypes.AUTHENTICATE_USER_SUCCESS: {
            let newUserState = Object.assign({}, state);
            newUserState.token = action.token;
            return newUserState;
        }

        case actionTypes.AUTHENTICATE_USER_FAIL:
            return state;

        case actionTypes.GET_CURRENT_USER_SUCCESS:
            return [...state, Object.assign({}, action.user)];


        default:
            return state;
    }
}