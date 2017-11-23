import * as actionTypes from './actionTypes';
import ItemsApi from '../api/mockApi/mockItemsApi';

function loadListItemsSuccess(items) {
    return {type: actionTypes.LOAD_ITEM_SUCCESS, items};
}

export function loadItems(list_id, item_id=null) {
    return function (dispatch) {
        return ItemsApi.listItems(list_id, item_id).then(items => {
            dispatch(loadListItemsSuccess(items));
        }).catch(error => {
                throw(error);
            }
        );
    };
}