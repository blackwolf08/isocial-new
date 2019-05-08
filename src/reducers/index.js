import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'
import currentUser from './currentUser'
import error from './error'

export default combineReducers({
    currentUser,
    fetch: fetchReducer,
    error
})