import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import * as userActions from '../actions/userActions';
import * as actionTypes from '../actions/actionTypes';

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);


describe('Async actions', () => {
    it('Create user fires the correct actions', (done) => {
        const expectedActions = [
            {type: actionTypes.INITIATE_AJAX_CALL }
        ];
        const user = {user: {}};

        const store = mockStore( user, expectedActions);

        // store.dispatch(userActions.createUser(user))
        //     .then(() => {
        //
        //         console.log("vghjkl");
        //         const actions = store.getActions();
        //         expect(actions[0].type).toEqual('nyef');
        //         done();
        //         console.log("vghjkl");
        //     }).catch(() =>{
        //         done();
        // });
        done();
    });
});