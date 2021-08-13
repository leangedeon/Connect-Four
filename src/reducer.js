import {
  SET_GAME,
  SET_MOVE,
  SET_PLAYER,
  SET_LOADING,
} from './actions';

function reducer(state = {}, { type, payload }) {

  switch (type) {
    case SET_PLAYER:
      var game = {...state.game, player:payload};
      return { ...state, game: game };

    case SET_GAME:
      return { ...state, game: payload, gameId: payload._id };
      
    case SET_LOADING: 
      return { ...state, loading: payload };
      
    case SET_MOVE:
      
      var position = null;
      var gameUpdated = {...state.game};
      var { position: positionSelected, player} = payload;
      
      for (var i = 0; i < gameUpdated.dashboard.length; i++) {
        if (gameUpdated.dashboard[i].columns[positionSelected] === null) {
          position = i;
          break;
        }
      }
      if (position !== null && position < gameUpdated.dashboard.length) {
        gameUpdated.dashboard[position].columns[positionSelected] = player;
      }

      return { ...state, game: gameUpdated };

    default:
      return state;
  }
}

export default reducer;
