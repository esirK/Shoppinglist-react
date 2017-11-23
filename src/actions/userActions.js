import * as actionTypes from "./actionTypes";
import {initiateAjaxCall} from "./ajaxStatusActions";
import {Api} from "../api";

export function authenticateUser(user) {
    return {type: actionTypes.AUTHENTICATE_USER};
}

export function authenticateUserSuccess(user) {
    return {type: actionTypes.AUTHENTICATE_USER_SUCCESS};
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

export function getCurrentUserSuccess(user) {
    return {type: actionTypes.GET_CURRENT_USER_SUCCESS, user};
}
//
// export function getCurrentUser(token) {
//     return function (dispatch) {
//         dispatch(initiateAjaxCall());
//         return Api.getCurrentUser(token).then(user => {
//             dispatch(getCurrentUserSuccess(user));
//         }).catch(error => {
//             throw(error);
//         });
//     };
// }