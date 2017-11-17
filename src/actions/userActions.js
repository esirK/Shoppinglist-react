import * as actionTypes from "./actionTypes";
import userApi from '../api/mockUserApi';

export function authenticateUser(user) {
    return {type: actionTypes.AUTHENTICATE_USER};
}

export function authenticateUserSuccess(user) {
    return {type: actionTypes.AUTHENTICATE_USER_SUCCESS};
}

export function createUserSuccess(user) {
    return {type: actionTypes.CREATE_USER_SUCCESS, user};
}

export function createUser(user) {
    return function (dispatch) {
        return userApi.createUser(user).then(user => {
            dispatch(createUserSuccess(user));
        }).catch(error => {
            throw(error);
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