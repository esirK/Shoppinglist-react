import * as actionTypes from './actionTypes';
import {Api} from "../api";
import {initiateAjaxCall} from "./ajaxStatusActions";
import {reAuthenticateIfStatusCodeIs401} from "../helper";

export function createList(shoppingList){
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.createList(shoppingList).then(() => {
            dispatch(createShoppingListsSuccess());
            dispatch(loadShoppingLists());
        }).catch(error => {
            dispatch(createShoppingListsFail());
            reAuthenticateIfStatusCodeIs401(error);
            throw(error);
        });
    };
}

function updateShoppingListSuccess(list) {
    return {type: actionTypes.UPDATE_LIST_SUCCESS, list};
}

function updateShoppingListFail() {
    return {type: actionTypes.UPDATE_LIST_FAIL};
}

export function updateShoppingList(shoppingList){
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.updateList(shoppingList).then((list) => {
            dispatch(updateShoppingListSuccess(list));
            dispatch(loadShoppingLists());
        }).catch(error => {
            dispatch(updateShoppingListFail());
            reAuthenticateIfStatusCodeIs401(error);
            throw(error);
        });
    };
}

function createShoppingListsSuccess() {
    return {type: actionTypes.CREATE_LIST_SUCCESS};
}

function createShoppingListsFail() {
    return {type: actionTypes.CREATE_LIST_FAIL};
}

export function initializeListEditor(list) {
    return {type: actionTypes.INITIALIZE_LIST_EDITOR, list};
}

function loadShoppingListsSuccess(lists) {
    return {type: actionTypes.LOAD_LISTS_SUCCESS, lists};
}

function loadShoppingListsFail() {
    return {type: actionTypes.LOAD_LISTS_FAIL};
}

export function loadShoppingLists() {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.getLists().then(lists => {
            dispatch(loadShoppingListsSuccess(lists));
        }).catch(error => {
            loadShoppingListsFail();
            reAuthenticateIfStatusCodeIs401(error);
            throw(error);
        });
    };
}