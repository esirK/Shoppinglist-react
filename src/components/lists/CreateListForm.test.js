import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import CreateListForm from './CreateListForm';


describe('Test Create Lists Form ', () => {

    function setup(localProps = {list: undefined, loading: undefined}) {
        const list = {
            name:"",
            price:"",
            quantity:""
        };

        const props = {
            list: localProps.list === undefined ? list : localProps.list,
            loading: localProps.loading === undefined ? false : localProps.loading,
            onChange: () => {},
            onSubmit: () => {}
        };
        return shallow(<CreateListForm {...props} />);
    }

    it('renders a form', () => {
        const wrapper = setup();
        expect(wrapper.type()).toBe('form');
    });

    it('Create button changes value when loading', () => {
        const localProps = {
            loading:true
        };
        const wrapper = setup(localProps);
        expect(wrapper.find('input').props().value).toBe('Creating...');
    });

});