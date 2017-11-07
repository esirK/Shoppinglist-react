import {CREATE_LIST, CREATE_LIST_SUCCESS} from './actionTypes';

export function createListSuccess() {
    return {type: CREATE_LIST_SUCCESS};
}

export function createList(shoppingList){
    return {type: CREATE_LIST, shoppingList};
}