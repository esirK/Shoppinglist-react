import * as actionTypes from './actionTypes';
import {Api} from "../api";
import {initiateAjaxCall} from "./ajaxStatusActions";
import {reAuthenticateIfStatusCodeIs401} from "../helper";

function loadListItemsSuccess(items) {
    return {type: actionTypes.LOAD_ITEM_SUCCESS, items};
}

function loadListItemsFail() {
    return {type: actionTypes.LOAD_ITEM_FAIL};
}

export function loadItems(list_id, item_id=null) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.listItems(list_id, item_id).then(items => {
            dispatch(loadListItemsSuccess(items));
        }).catch(error => {
            dispatch(loadListItemsFail());
            reAuthenticateIfStatusCodeIs401(error);
                throw(error);
            }
        );
    };
}

function deleteItemSuccess(itemId) {
    return {type: actionTypes.DELETE_ITEM_SUCCESS, itemId};
}

function deleteItemsFail() {
    return {type: actionTypes.DELETE_ITEM_FAIL};
}

export function deleteItem(itemId) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.deleteItem(itemId).then(() => {
            dispatch(deleteItemSuccess(itemId));
        }).catch(error => {
            dispatch(deleteItemsFail());
            reAuthenticateIfStatusCodeIs401(error);
                throw(error);
            }
        );
    };
}

function createItemSuccess() {
    return {type: actionTypes.CREATE_ITEM_SUCCESS};
}

function createItemFail() {
    return {type: actionTypes.CREATE_ITEM_FAIL};
}

export function createItem(listId, newItem) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.createItem(listId, newItem).then(() => {
            dispatch(createItemSuccess());
            dispatch(loadItems(listId));
        }).catch(error => {
            dispatch(createItemFail());
            reAuthenticateIfStatusCodeIs401(error);
                throw(error);
            }
        );
    };
}