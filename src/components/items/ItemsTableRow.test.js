import expect from 'expect';
import React, {PropTypes} from 'react';
import {shallow} from 'enzyme';
import ItemsTableRow from './ItemsTableRow';

describe('Test Items Table Rows', () => {

    function setup(localProps = null) {
        if(localProps === null) {
            localProps = {
                item:{
                    id: ""
                },
                loading:false
            };
        }
        const props = {
            item: localProps.item,
            index: 0,
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
        return shallow(<ItemsTableRow {...props} />);
    }

    it('renders a table row', () => {
        const wrapper = setup();
        expect(wrapper.type()).toBe('tr');
    });

    it("table row has 5 td's", () => {
        const wrapper = setup();
        expect(wrapper.find('td').length).toBe(5);
    });

    it("table row has action buttons", () => {
        const wrapper = setup();
        expect(wrapper.find('button').length).toBe(2);
    });

    it("Edit buttons have onClick handler", () => {
        const wrapper = setup();
        expect(typeof wrapper.find('.edit-btn').props().onClick).toBe('function');
    });

    it("Delete buttons have onClick handler", () => {
        const wrapper = setup();
        expect(typeof wrapper.find('.delete-btn').props().onClick).toBe('function');
    });

    it('Renders input boxes when editing is set to True', () => {
        const localProps = {
            item: {id: "1"},
            loading: false
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('TextInput').length).toBe(3);
    });

    it('Renders a submit button when editing is set to True', () => {
        const localProps = {
            item: {id: "1"},
            loading: false
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('input').props().type).toBe('submit');
    });

    it('Value of submit button changes when loading', () => {
        const localProps = {
            item: {id: "1"},
            loading: true
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('input').props().value).toBe('saving...');
    });

});