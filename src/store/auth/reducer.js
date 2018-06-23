import {SET_CURRENT_USER, UPDATE_CURRENT_USER} from 'store/actionTypes';

let initialState = {
  isAuthenticated: false
}

function currentUser(state=initialState, action){
  switch(action.type){
    case SET_CURRENT_USER:
      return {isAuthenticated: !!action.user.email, ...action.user}
    case UPDATE_CURRENT_USER:
      return {...state, ...action.user}
    default:
        return {...state}
  }
}

export default currentUser;
