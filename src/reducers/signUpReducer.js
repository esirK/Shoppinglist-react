export default function signUpReducer(state = [], action) {
    switch(action.type){
        case 'CREATE_USER':
            return [...state, Object.assign({}, action.user)];
        default:
            return state;
    }
}