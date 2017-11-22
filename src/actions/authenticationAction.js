import { generateAuthActions } from 'redux-token-auth';
import { authUrl } from '../constants';

const config = {
    authUrl,
    userAttributes: {
        firstName: 'firstname',
        lastName: 'lastname',
        username: 'username'
    },
    userRegistrationAttributes: {
        security_question: 'security_question',
        answer: 'answer',
        username: 'username',
        firstName: 'firstname',
        lastName: 'lastname'
    }
};

const {
    registerUser,
    signInUser,
    signOutUser,
    verifyCredentials
} = generateAuthActions(config);

export {
    registerUser,
    signInUser,
    signOutUser,
    verifyCredentials
};