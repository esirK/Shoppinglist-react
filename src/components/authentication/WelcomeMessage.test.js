import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import WelcomeMessage from './WelcomeMessage';


describe('Test welcome message component', () => {

    function setup() {
        return shallow(<WelcomeMessage />);
    }

    it('renders a div of class welcomeMessage', () => {
        const wrapper = setup();
        expect(wrapper.find('div').props().className).toBe('welcomeMessage');
    });

    it('renders an a h1 title', () => {
        const wrapper = setup();
        expect(wrapper.find('h1').length).toBe(1);
    });

});