import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import { Items } from './Items';


describe('Test Items Component', () => {

    function setup() {
        return shallow(<Items/>);
    }

    it('renders a div of class mid-center', () => {
        const wrapper = setup();
        expect(wrapper.find('.mid-center').length).toBe(1);
    });

    it('renders a logout button', () => {
        const wrapper = setup();
        expect(wrapper.find('LogoutButton').length).toBe(1);
    });

    it('renders a table for displaying items', () => {
        const wrapper = setup();
        expect(wrapper.find('ItemsTable').length).toBe(1);
    });

    it('renders a form for creating items', () => {
        const wrapper = setup();
        expect(wrapper.find('CreateItemForm').length).toBe(1);
    });

    it('renders a form for updating items', () => {
        const wrapper = setup();
        expect(wrapper.find('form').length).toBe(1);
    });

});