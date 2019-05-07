import { createStore ,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

const initialState = {};

const middleware = [thunk];

export default createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware, loadingBarMiddleware())
  ))