import {
  SET_GAME,
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

    default:
      return state;
  }
}

export default reducer;
