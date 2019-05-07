import { FETCH_PHOTOS, FETCH_POSTS, FETCH_USERS, LOADING } from './types'
import axios from "axios";



export const fetchPhotos = () => dispatch => {

    dispatch({
        type: LOADING,
        payload: true
    })
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(response => response.data)
    .then(json => {dispatch({
        type: FETCH_PHOTOS,
        payload: json
        })
        dispatch({
            type: LOADING,
            payload: false
        })
    }
    );
    
}

export const fetchPosts = () => dispatch => {
    dispatch({
        type: LOADING,
        payload: true
    })
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.data)
    .then(json => {dispatch({
        type: FETCH_POSTS,
        payload: json
        })
        dispatch({
            type: LOADING,
            payload: false
        })
    }
    );
}


export const fetchUsers = () => dispatch => {
    dispatch({
        type: LOADING,
        payload: true
    })
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(json => {dispatch({
        type: FETCH_USERS,
        payload: json
        })
        dispatch({
            type: LOADING,
            payload: false
        })
    }
    );

}
