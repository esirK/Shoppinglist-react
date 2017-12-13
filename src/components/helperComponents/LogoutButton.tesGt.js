import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import LogoutButton from './LogoutButton';

describe('Test Logout button', () => {

    function setup() {
        const props = {
            onClick: () => {}
        };
        return shallow(<LogoutButton {...props} />);
    }

    it('renders a div', () => {
        const wrapper = setup();
        expect(wrapper.type()).toBe('div');
    });

    it('renders a div with an onclick handler', () => {
        const wrapper = setup();
        expect(typeof wrapper.find('div').props().onClick).toBe('function');
    });

});