import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('Test App.js', () => {

    function setup() {
        return shallow(<App />);
    }

    it('renders a div of class container', () => {
        const wrapper = setup();
        expect(wrapper.find('div').props().className).toBe('container');
    });
});