import * as actionTypes from './actionTypes';
import ListApi from '../api/mockListsApi';

export function createList(shoppingList){
    return function (dispatch) {
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
        return ListApi.getLists().then(lists => {
            dispatch(loadShoppingListsSuccess(lists));
        }).catch(error => {
            throw(error);
        });
    };
}