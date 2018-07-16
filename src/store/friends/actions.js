import {apiCall} from 'services/api';
import {addError} from 'store/errors/actions';
import {ADD_FRIENDS, REFRESH_FRIEND, SET_CURRENT_FRIEND} from 'store/actionTypes';


function addFriends(friends){
  return {
    type: ADD_FRIENDS,
    friends
  }
}

function refreshFriend(friend){
  return {
    type: REFRESH_FRIEND,
    friend
  }
}

function setCurrentFriend(friend){
  return {
    type: SET_CURRENT_FRIEND,
    friend
  }
}

export function getFriends(options={}){
  return dispatch => {
    return new Promise((resolve, reject) => {
      let {limit=20, skip=0} = options
      let queryStr = `?limit=${limit}&skip=${skip}`;
      return apiCall('get', `/api/friends${queryStr}`)
      .then(friends => {
        dispatch(addFriends(friends));
        resolve(friends);
      })
      .catch(err => {
        dispatch(addError(err));
        reject(err);
      });
    });
  }
}

export function getFriend(id){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('get', `/api/friends/${id}`)
      .then(friend => {
        dispatch(setCurrentFriend(friend))
        resolve(friend)
      })
      .catch(err => {
        dispatch(addError(err));
        reject(err);
      })
    })
  }
}

export function addNewFriend(shelterId, friend){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/friends/`, {shelterId}, friend)
      .then(friend => resolve(friend))
      .catch(err => reject(err));
    });
  };
}

export function heartFriend(id){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('put', `/api/friends/${id}`, {heart: true}, null)
      .then(friend => {
        dispatch(refreshFriend(friend));
        resolve(friend);
      })
      .catch(err => {
        console.log(err)
        dispatch(addError(err));
        reject(err);
      });
    });
  }
}

export function uploadImages(id, shelterId, images){
  return dispatch => {
    apiCall('post', `/api/friends/${id}/images`, { shelterId }, images)
      .then(() => {})
      .catch(err => console.log(err));
  }
}
