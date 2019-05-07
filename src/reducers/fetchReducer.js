import { FETCH_PHOTOS, FETCH_USERS, FETCH_POSTS } from '../actions/types'

const initialState ={
    posts: [],
    users: [],
    photos: []
}

export default  function(state = initialState, action) {
    switch(action.type)
    {
        case FETCH_PHOTOS:
        return {
            ...state,
            photos: action.payload
        }
        case FETCH_USERS:
        return {
            ...state,
            users: action.payload,
        }
        case FETCH_POSTS:
        return {
            ...state,
            posts: action.payload,
        }
        default:
        return state;
    }
}