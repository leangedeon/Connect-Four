import React from 'react';
import { shallow } from 'enzyme';
import { Status } from './';


describe('Status', () => {
    it('should match snapshot', () => {
        
        const wrapper = shallow(<Status />);

        expect(wrapper).toMatchSnapshot();
    });
});