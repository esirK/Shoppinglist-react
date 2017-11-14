import * as actionTypes from './actionTypes';
import ListApi from '../api/mockListsApi';

export function createListSuccess() {
    return {type: actionTypes.CREATE_LIST_SUCCESS};
}

export function createList(shoppingList){
    return function (dispatch) {
        return ListApi.createList(shoppingList).then(
            ListApi.getLists().then(lists => {
                dispatch(loadShoppingListsSuccess(lists));
            })
        ).catch(error => {
                throw(error);
            }
        );
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
            }
        );
    };
}