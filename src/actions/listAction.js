import * as actionTypes from './actionTypes';
import {Api} from "../api";
import {initiateAjaxCall} from "./ajaxStatusActions";

export function createList(shoppingList){
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.createList(shoppingList).then(() => {
            dispatch(createShoppingListsSuccess());
            dispatch(loadShoppingLists());
        }).catch(error => {
            dispatch(createShoppingListsFail());
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

function loadShoppingListsSuccess(lists) {
    return {type: actionTypes.LOAD_LISTS_SUCCESS, lists};
}

export function loadShoppingLists() {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.getLists().then(lists => {
            dispatch(loadShoppingListsSuccess(lists));
        }).catch(error => {
            throw(error);
        });
    };
}