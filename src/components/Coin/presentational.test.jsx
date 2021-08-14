import React from 'react';
import { shallow } from 'enzyme';
import { Coin } from './presentational';
import { StyledButton } from './styled.jsx';


describe('Coin', () => {
    let props = {};
    let wrapper = {};
    const makeMovement = jest.fn();

    beforeEach(()=> {    
        props = {
            "position": 1,
            "gameId": 'some_game',
            "player": 1,
            "setGame": jest.fn(),
            "setLoading": jest.fn()
        };

        wrapper = shallow(<Coin {...props} />);
    });

    it('should match snapshot', () => {

        expect(wrapper).toMatchSnapshot();
    });

    it('should call some method when i click it', () => {

        const component = wrapper.find(StyledButton);

        component.simulate('click');
        expect(makeMovement).toHaveBeenCalled();
    });
});