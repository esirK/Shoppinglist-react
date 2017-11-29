import {browserHistory} from 'react-router';
import toastr from 'toastr';

function loggedIn() {
    return localStorage.getItem("token") !== null;
}

export const requireAuth = (nextState, replace) => {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        });
    }
};

const reAuthenticate = ()=> {
    localStorage.clear();
    // todo: show a explanation message
    toastr.error('Your session has expired. Please login to continue');
    // todo: find a better way of redirecting
    window.location.href = '/';
};

export const reAuthenticateIfErrorIs401 = (error) => {
    if(String(error).includes('401')) {
        reAuthenticate();
    }
};