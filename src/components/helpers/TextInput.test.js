import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TextInput from './TextInput';


describe('Test input text box helper', () => {

    function setup(localProps = null) {
        const props = {
            onChange: () => {}
        };

        return shallow(<TextInput {...props} {...localProps} />);
    }

    it('renders a div of class form-group', () => {
        const wrapper = setup();
        expect(wrapper.find('div').props().className).toBe('form-group');
    });

    it('renders an input text-box', () => {
        const wrapper = setup();
        expect(wrapper.find('input').props().type).toBe('text');
    });

    it('can render an input password field', () => {
        const localProps = {type: 'password'};
        const wrapper = setup(localProps);
        expect(wrapper.find('input').props().type).toBe('password');
    });

});