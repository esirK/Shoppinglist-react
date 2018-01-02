import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import ItemsTable from './ItemsTable';

describe('Test Items Table Rows', () => {

    function setup(localProps = null) {
        if(localProps === null) {
            localProps = {
                items:[],
                loading:false
            };
        }
        const props = {
            items: localProps.items,
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
        return shallow(<ItemsTable {...props} />);
    }

    it('renders a message when no items are present', () => {
        const wrapper = setup();
        expect(wrapper.find('h5').length).toBe(1);
    });

    it('renders a table when there are items present', () => {
        const localProps = {
            items:[{}],
            loading:false
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('table').length).toBe(1);
    });

    it('renders a table row for every item present', () => {
        const localProps = {
            items:[{}, {}, {}],
            loading:false
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('ItemsTableRow').length).toBe(3);
    });

});