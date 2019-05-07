import { FETCH_PHOTOS, FETCH_POSTS, FETCH_USERS } from './types'
import axios from "axios";

export const isLoading = ()=>{
    return true;
};

export const fetchPhotos = () => dispatch => {

    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(response => response.data)
    .then(json => dispatch({
        type: FETCH_PHOTOS,
        payload: json
        })
    );

}

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.data)
    .then(json => dispatch({
        type: FETCH_POSTS,
        payload: json
        })
    );
}


export const fetchUsers = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(json => dispatch({
        type: FETCH_USERS,
        payload: json
        })
    );
}
