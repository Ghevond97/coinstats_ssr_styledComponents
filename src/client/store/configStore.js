import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';

const preloadedState = window.__REDUX_STATE__;

const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default store;
