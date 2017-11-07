import {CREATE_USER_SUCCESS} from "./actionTypes";
import userApi from '../api/mockUserApi';

export function createUserSuccess(user) {
    return { type:CREATE_USER_SUCCESS, user};
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