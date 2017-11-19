import * as actionTypes from "./actionTypes";
import userApi from '../api/mockUserApi';

export function authenticateUser(user) {
    return {type: actionTypes.AUTHENTICATE_USER};
}

export function authenticateUserSuccess(user) {
    return {type: actionTypes.AUTHENTICATE_USER_SUCCESS};
}

export function createUserSuccess(user) {
    let message = {
        message: user.message,
        messageTYpe: 'success'
    };
    return {type: actionTypes.CREATE_USER_SUCCESS, user, message};
}

export function createUserFail(message) {
    message = {
        message: message,
        messageTYpe: 'error'
    };
    return {type: actionTypes.CREATE_USER_FAIL, message};
}

export function createUser(user) {
    return function (dispatch) {
        return userApi.createUser(user).then(user => {
            dispatch(createUserSuccess(user));
        }).catch(error => {
            dispatch(createUserFail(error));
        });
    };
}

export function getCurrentUserSuccess(user) {
    return {type: actionTypes.GET_CURRENT_USER_SUCCESS, user};
}

export function getCurrentUser(token) {
    return function (dispatch) {
        return userApi.getCurrentUser(token).then(user => {
            dispatch(getCurrentUserSuccess(user));
        }).catch(error => {
            throw(error);
        });
    };
}