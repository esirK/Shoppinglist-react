import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import ListsTableRow from './ListsTableRow';

describe('Test Lists Table Rows', () => {

    function setup(localProps = null) {
        if(localProps === null) {
            localProps = {
                list:{
                    id: ""
                },
                loading:false
            };
        }
        const props = {
            list: localProps.list,
            index: 0,
            loading: localProps.loading,
            deleteHandler: () => {},
            editHandler: {
                initialize: () => {},
                onchange: () => {},
                onblur: () => {},
                listToUpdate:{
                    id:"1",
                    data:""
                }
            }
        };
        return shallow(<ListsTableRow {...props} />);
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
            list: {id: "1"},
            loading: false
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('TextInput').length).toBe(1);
    });

    it('Renders a TextInput with an onblur handler when editing is set to True', () => {
        const localProps = {
            list: {id: "1"},
            loading: false
        };
        const wrapper = setup(localProps);
        expect(typeof wrapper.find('TextInput').props().onBlur).toBe('function');
    });

});