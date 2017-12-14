import {createStore} from 'redux';
import expect from 'expect';
import rootReducer from '../reducers';
import {initialState} from '../reducers/initialState';
import * as listActions from '../actions/listActions';


describe('Test lists store manipulation ', () => {


    const store = createStore(rootReducer, initialState);

    const lists = [
        {
            id: 1,
            title: "back to school",
            created_on: "2017-10-12 10:40:32",
            modified_on: "",
            user_id: 4567
        }
    ];

    it('Can load shopping lists ', () => {

        const action = listActions.loadShoppingListsSuccess(lists);
        store.dispatch(action);

        const actual = store.getState().lists.existingShoppingList;
        const expected = lists;
        expect(actual).toEqual(expected);
    });

});
