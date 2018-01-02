import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import SignUpForm from './SignUpForm';


describe('Test signup form component', () => {

    function setup(localProps = {}) {
        const props = {
            user: localProps.user === undefined ? {} : localProps.user,
            onChange: () => {},
            onSubmit: () => {},
            loading: localProps.loading === undefined ? false : localProps.loading
        };
        return shallow(<SignUpForm {...props} />);
    }

    it('renders a form', () => {
        const wrapper = setup();
        expect(wrapper.find('form').length).toBe(1);
    });

    it('Signup form has an onsubmit handler', () => {
        const wrapper = setup();
        expect(typeof wrapper.find('form').props().onSubmit).toBe('function');
    });

    it('Signup form has 5 input fields', () => {
        const wrapper = setup();
        expect(wrapper.find('TextInput').length).toBe(5);
    });

    it('Signup form has a submit button', () => {
        const wrapper = setup();
        expect(wrapper.find('input').props().type).toBe('submit');
    });

    it('Submit button changes value when loading', () => {
        const wrapper = setup({loading: true});
        expect(wrapper.find('input').props().value).toBe('Processing...');
    });

});