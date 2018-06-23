import {SET_CURRENT_USER} from 'store/actionTypes';
import {apiCall, setTokenHeader} from 'services/api';
import {addError} from 'store/errors/actions';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  }
}




export function logoutUser(){
  return dispatch => {
    localStorage.clear();
    setTokenHeader(false);
    dispatch(setCurrentUser({}));
  }
}


export function authUser(type, userData){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/users/${type}`, null, userData)
        .then(token => {
          localStorage.setItem('jwtToken', token);
          setTokenHeader(token);
          return jwtDecode(token)
        })
        .then(user => {
          dispatch(setCurrentUser(user))
          resolve(user);
        })
        .catch(err => {
          dispatch(addError(err));
          reject(err);
        })
    })
  }
}




export function refreshCurrentUser(id){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('get', `/api/users/${id}`)
        .then(token => {
          localStorage.setItem('jwtToken', token);
          return jwtDecode(token);
        })
        .then(user => {
          dispatch(setCurrentUser(user));
          resolve(user);
        })
        .catch(err => reject(err));
    });
  }
}
