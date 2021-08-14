import {
    mapStateToProps,
    mapDispatchToProps,
  } from '.';

describe('Coin', () => {
    let state;

    beforeEach(() => {
        state = {
          loading: false,
          gameId: null,
          player: 1,
        };
    });

    describe('mapStatetoProps', () => {
        it('should map state to the correct props', () => {
            const mappedProps = mapStateToProps(state);
            expect(mappedProps).toHaveProperty('loading', false);
            expect(mappedProps).toHaveProperty('gameId', null);
            expect(mappedProps).toHaveProperty('player', 1);
        });
    });

    describe('mapDispatchToProps', () => {
        it('should map actions to the correct props', () => {
            
            const dispatch = jest.fn();
            
            mapDispatchToProps(dispatch).setLoading();
            mapDispatchToProps(dispatch).setGame();

            expect(dispatch.mock.calls).toEqual([
                [{ type: 'SET_LOADING'}],
                [{ type: 'SET_GAME'}]
              ]);
        });
    });

});
