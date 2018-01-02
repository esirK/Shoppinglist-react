import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import { Lists } from './Lists';


describe('Test Lists Component', () => {

    function setup() {
        return shallow(<Lists/>);
    }

    it('renders a div of class mid-center', () => {
        const wrapper = setup();
        expect(wrapper.find('.mid-center').length).toBe(1);
    });

    it('renders a logout button', () => {
        const wrapper = setup();
        expect(wrapper.find('LogoutButton').length).toBe(1);
    });

    it('renders a table for displaying shopping lists', () => {
        const wrapper = setup();
        expect(wrapper.find('ListsTable').length).toBe(1);
    });

    it('renders a form for creating shopping lists', () => {
        const wrapper = setup();
        expect(wrapper.find('CreateListForm').length).toBe(1);
    });

});