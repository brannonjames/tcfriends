import {SET_VISIBLE_USER_PROFILE} from '../actionTypes';

function users(state, action){
  switch(action.type){
    case SET_VISIBLE_USER_PROFILE:
      return {...state, currentProfile: action.user}
    default:
        return {...state}
  }
}

export default users;
