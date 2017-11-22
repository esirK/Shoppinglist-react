import userApi from './mockUserApi';
import {registerUser} from '../actions/authenticationAction';

export const api = {
    createUser : process.env.NODE_ENV === 'production' ? registerUser : userApi.createUser,
    getCurrentUser: process.env.NODE_ENV === 'production' ? '' : userApi.getCurrentUser
};
