import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import ListsTable from './ListsTable';

describe('Test Lists Table', () => {

    function setup(localProps = null) {
        if(localProps === null) {
            localProps = {
                lists:[],
                loading:false
            };
        }
        const props = {
            lists: localProps.lists,
            loading: localProps.loading,
            deleteHandler: () => {},
            editHandler: {
                initialize: () => {},
                onchange: () => {},
                itemToBeUpdated:{
                    id:"1",
                    data:{
                        name:""
                    }
                }
            }
        };
        return shallow(<ListsTable {...props} />);
    }

    it('renders a message when no lists are present', () => {
        const wrapper = setup();
        expect(wrapper.find('h5').length).toBe(1);
    });

    it('renders a table when there are lists present', () => {
        const localProps = {
            lists:[{}],
            loading:false
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('table').length).toBe(1);
    });

    it('renders a table row for every list present', () => {
        const localProps = {
            lists:[{}, {}, {}],
            loading:false
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('ListsTableRow').length).toBe(3);
    });

});