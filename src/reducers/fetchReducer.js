import { FETCH_PHOTOS, FETCH_USERS, FETCH_POSTS, LOADING } from '../actions/types'

const initialState ={
    posts: [],
    users: [],
    photos: [],
    isLoading: true
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
        case LOADING:
        return {
            ...state,
            isLoading: action.payload
        }
        default:
        return state;
    }
}