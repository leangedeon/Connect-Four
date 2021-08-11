import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import reducer from './reducer';

const initialState = {
  game: {
    "dashboard": [{
            "columns": [null, null, null, null, null, null, ]
        }, {
            "columns": [null, null, null, null, null, null, ]
        }, {
            "columns": [null, null, null, null, null, null, ]
        }, {
            "columns": [null, null, null, null, null, null, ]
        }, {
            "columns": [null, null, null, null, null, null, ]
        }, {
            "columns": [null, null, null, null, null, null, ]
        }],
    "state": "INICIAL",
    "player": 1
  },
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(logger)));

export default store;
