import {AUTHENTICATE_USER, AUTHENTICATE_USER_SUCCESS} from './actionTypes';


export function authenticateUser(user) {
    console.log(user);
    return {type: AUTHENTICATE_USER};
}

export function authenticateUserSuccess(user) {
    return {type: AUTHENTICATE_USER_SUCCESS};
}