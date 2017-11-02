import * as actionTypes from './actionTypes';

export function createUser(user) {
    console.log(user);
    return { type: actionTypes.CREATE_USER, user};
}