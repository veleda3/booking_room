import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers';
const logger = createLogger();
const initialState = {};
const store = createStore(reducers, initialState, compose(applyMiddleware(logger, thunk)));
export default store;