import {SET_VISIBLE_USER_PROFILE} from '../actionTypes';
import {apiCall} from '../../services/api';


function setVisibileProfile(user){
  return {
    type: SET_VISIBLE_USER_PROFILE,
    user
  }
}



export function getUser(id){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('get', `/api/users/${id}`)
        .then(res => {
          dispatch(setVisibileProfile(res));
          resolve(res);
        })
        .catch(err => reject(err));
    });
  }
}
