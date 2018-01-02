import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import CreateItemForm from './CreateItemForm';


describe('Test Create Items Form ', () => {

    function setup(localProps = {item: undefined, loading: undefined}) {
        const item = {
                name:"",
                price:"",
                quantity:""
        };

        const props = {
            item: localProps.item === undefined ? item : localProps.item,
            loading: localProps.loading === undefined ? false : localProps.loading,
            onChange: () => {},
            onSubmit: () => {}
        };
        return shallow(<CreateItemForm {...props} />);
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