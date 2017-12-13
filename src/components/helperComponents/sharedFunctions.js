import toastr from "toastr";

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