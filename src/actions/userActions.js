import * as actionTypes from "./actionTypes";
import {initiateAjaxCall} from "./ajaxStatusActions";
import {Api} from "../api";
import {redirect} from "../helper";

export function authenticateUser(user) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        user.username = user.username.toLowerCase();
        return Api.loginUser(user).then(response => {
            localStorage.setItem('token', response.token);
            let token = localStorage.getItem('token');
            dispatch(authenticateUserSuccess(token));
        }).catch(error => {
            dispatch(authenticateUserFail());
            throw(error);
        });
    };
}

export function authenticateUserSuccess(token) {
    return {type: actionTypes.AUTHENTICATE_USER_SUCCESS, token};
}

export function authenticateUserFail() {
    return {type: actionTypes.AUTHENTICATE_USER_FAIL};
}

export function createUserSuccess(user) {
    return {type: actionTypes.CREATE_USER_SUCCESS, user};
}

export function createUserFail() {
    return {type: actionTypes.CREATE_USER_FAIL};
}

export function createUser(user) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.createUser(user).then(user => {
            dispatch(createUserSuccess(user));
        }).catch(error => {
            dispatch(createUserFail());
            throw(error);
        });
    };
}

export function logOut() {
    localStorage.clear();
    redirect();
}