import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './presentational';
import { Notification } from '../Notification/index.jsx';
import { Status } from '../Status/index.jsx';
import { ListCoins } from "../../components/ListCoins/index.jsx";
import mockGame from './mockGame.json';


describe('Dashboard', () => {

    let props = {};
    let wrapper = {};

    describe('Dashboard when we have loading on false', () => {
        
        beforeEach(()=> {    
            props = {
                "game": mockGame,
                "gameId": null,
                "player": 1,
                "setPlayer": jest.fn(),
                "loading": false,
                "setGame": jest.fn()
            };

            wrapper = shallow(<Dashboard {...props} />);
        });

        it('should match snapshot', () => {

            expect(wrapper).toMatchSnapshot();
        });

        it('we must show Status Game always', () => {
            const component = wrapper.find(Status);

            expect(component).toBeTruthy();
        });

        it('if loading false we must show a ListCoins', () => {
            const component = wrapper.find(ListCoins);

            expect(component).toBeTruthy();

            const componentNotRendered = wrapper.find(Notification);

            expect(componentNotRendered.exists()).toBe(false);

        });
    });

    describe('Dashboard when we have loading on false', () => {

        beforeEach(()=> {    
            props = {
                "game": mockGame,
                "gameId": null,
                "player": 1,
                "setPlayer": jest.fn(),
                "loading": true,
                "setGame": jest.fn()
            };

            wrapper = shallow(<Dashboard {...props} />);
        });

        it('if loading true we must show a Notification', () => {

            const component = wrapper.find(Notification);

            expect(component).toBeTruthy();

            const componentNotRendered = wrapper.find(ListCoins);

            expect(componentNotRendered.exists()).toBe(false);

        });
    });
});