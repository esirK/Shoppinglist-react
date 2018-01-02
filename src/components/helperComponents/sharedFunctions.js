import toastr from "toastr";
import JQuery from "jquery";


JQuery.DataTable = require('datatables.net-se');

export function showNotification(type, message) {
    toastr.clear();
    switch(type) {
        case 'success':
            toastr.success(message);
            break;
        case 'error':
            toastr.error(message);
            break;
        case 'warning':
            toastr.warning(message);
            break;
        default:
            toastr.info(message);
    }

}

function elementIsDatatable(element){
    return JQuery.fn.dataTable.isDataTable(element);
}

export function initializeDataTable(element) {
    if(elementIsDatatable(element)){
        destroyDataTable(element);
    }
    JQuery(element).DataTable({
        "info": false,
        "lengthChange": false
    });
}

export function destroyDataTable(element) {
    if(elementIsDatatable(element)){
        JQuery(element).DataTable().destroy();
    }
}