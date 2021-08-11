export const SET_GAME = 'SET_GAME';
export const SET_MOVE = 'SET_MOVE';
export const SET_PLAYER = 'SET_PLAYER';

export const setGame = (game) => ({
  type: SET_GAME,
  payload: game,
});

export const setMove = (position, player) => ({
  type: SET_MOVE,
  payload: {position, player},
});

export const setPlayer = (player) => ({
  type: SET_PLAYER,
  payload: player,
});
