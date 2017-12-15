import * as actionTypes from './actionTypes';
import ListApi from '../api/mockApi/mockListsApi';
import {initiateAjaxCall} from "./ajaxStatusActions";

export function createList(shoppingList){
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return ListApi.createList(shoppingList).then(() => {
            dispatch(loadShoppingLists());
        }).catch(error => {
            throw(error);
        });
    };
}

function loadShoppingListsSuccess(lists) {
    return {type: actionTypes.LOAD_LISTS_SUCCESS, lists};
}

export function loadShoppingLists() {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return ListApi.getLists().then(lists => {
            dispatch(loadShoppingListsSuccess(lists));
        }).catch(error => {
            throw(error);
        });
    };
}