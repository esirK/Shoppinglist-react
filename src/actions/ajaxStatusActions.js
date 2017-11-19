import * as actionTypes from './actionTypes';

export function initiateAjaxCall() {
    return {type: actionTypes.INITIATE_AJAX_CALL};
}