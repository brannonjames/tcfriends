import {apiCall} from 'services/api';
import {refreshCurrentUser} from 'store/auth/actions';
import {ADD_SHELTERS, SET_CURRENT_SHELTER} from 'store/actionTypes';
import {addError} from 'store/errors/actions'


function addShelters(shelters){
  return {
    type: ADD_SHELTERS,
    shelters
  }
}

function setCurrentShelter(shelter){
  return {
    type: SET_CURRENT_SHELTER,
    shelter
  }
}


export function addNewShelter(userId, shelter){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/shelters/`, null, shelter)
      .then(shelter => {
        dispatch(refreshCurrentUser(userId));
        resolve(shelter);
      })
      .catch(err => {
        dispatch(addError(err));
        reject(err);
      });
    });
  }
}

export function getShelter(id){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('get', `/api/shelters/${id}`)
        .then(shelter => {
          dispatch(setCurrentShelter(shelter))
          resolve(shelter)
        })
        .catch(err => {
          dispatch(addError(err));
          reject(err);
        })
    })
  }
}

export function getShelters(limit=20, skip=0){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('get', `/api/shelters`, {limit, skip})
      .then(shelters => {
        dispatch(addShelters(shelters));
        resolve(shelters);
      })
      .catch(err => {
        dispatch(addError(err));
        reject(err);
      })
    })
  }
}
