export default {
    user: [],
    lists: [],
    ajaxCallsInProgress: 0,
    reduxTokenAuth: {
        currentUser: {
            isLoading: false,
            isSignedIn: false,
            attributes: {
                firstName: null,
                lastName: null,
                userName: null
            }
        }
    }
};