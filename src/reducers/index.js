import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'
import currentUser from './currentUser'

export default combineReducers({
    currentUser,
    fetch: fetchReducer,
})