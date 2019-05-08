import {apiCall, setTokenHeader} from '../services/api';
import {SET_CURRENT_USER, ERROR} from '../actions/types';


export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function setAuthorizationToken(token){
  setTokenHeader(token);
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function authUser(type, userData){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `https://futura-server.herokuapp.com/api/auth/${type}`, userData).then(({token, ...user}) => {
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(user));
        resolve();
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err.message
        })
      });
    });
  }
}
