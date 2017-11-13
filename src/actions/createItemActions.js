import { CREATE_ITEM, CREATE_ITEM_SUCCESS } from './actionTypes';

export function createItem(item) {
    return {type: CREATE_ITEM};
}

export function createItemSuccess() {
    return {type: CREATE_ITEM_SUCCESS};
}