import {createStore} from 'redux';
import expect from 'expect';
import rootReducer from '../reducers';
import {initialState} from '../reducers/initialState';
import * as userActions from '../actions/userActions';


describe('Test Store manipulation ', () => {

    it('Can create a user', () => {
        const store = createStore(rootReducer, initialState);
        const user = {
            username: "my_name",
            firstname: "john",
            lastname: "doe",
            password: "johndoe123",
            security_question: "random question",
            answer: "my answer",
            id: 1
        };

        const action = userActions.createUserSuccess(user);
        store.dispatch(action);

        const  actual = store.getState().user;
        const expected = {
            username: "my_name",
            firstname: "john",
            lastname: "doe",
        };
        expect(actual).toEqual(expected);
    });

});
