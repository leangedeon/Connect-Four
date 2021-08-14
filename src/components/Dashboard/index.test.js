import {
    mapStateToProps,
    mapDispatchToProps,
  } from '.';

describe('Dashboard', () => {
    let state;

    beforeEach(() => {
        state = {
          game: {},
          gameId: null,
          loading: false,
        };
    });

    describe('mapStatetoProps', () => {
        it('should map state to the correct props', () => {
            const mappedProps = mapStateToProps(state);
            expect(mappedProps).toHaveProperty('loading', false);
            expect(mappedProps).toHaveProperty('gameId', null);
            expect(mappedProps).toHaveProperty('game', {});
        });
    });

    describe('mapDispatchToProps', () => {
        it('should map actions to the correct props', () => {
            
            const dispatch = jest.fn();
            
            mapDispatchToProps(dispatch).setPlayer();
            mapDispatchToProps(dispatch).setGame();

            expect(dispatch.mock.calls).toEqual([
                [{ type: 'SET_PLAYER'}],
                [{ type: 'SET_GAME'}]
              ]);
        });
    });

});
