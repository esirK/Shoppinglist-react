import expect from 'expect';
import React from 'react';
import  {shallow} from 'enzyme';
import LoadingAnimation from './LoadingAnimation';


describe('Test loader animation', () => {

    function setup() {
        return shallow(<LoadingAnimation />);
    }

    it('renders a div', () => {
        const wrapper = setup();
        expect(wrapper.type()).toBe('div');
    });


    // it('renders an input text field', () => {
    //     const wrapper = setup();
    //     expect(wrapper.find('input').props().type).toBe('text');
    // });
    //
});