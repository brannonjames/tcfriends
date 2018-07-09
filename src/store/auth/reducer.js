import {SET_CURRENT_USER, UPDATE_CURRENT_USER, SET_CURRENT_USER_FAVORITES } from 'store/actionTypes';

let initialState = {
  isAuthenticated: false,
  favorites: []
}

function currentUser(state=initialState, action){
  switch(action.type){
    case SET_CURRENT_USER:
      return {isAuthenticated: !!action.user.email, ...action.user}
    case SET_CURRENT_USER_FAVORITES:
      return {...state, favorites: action.favorites}
    case UPDATE_CURRENT_USER:
      return {...state, ...action.user}
    default:
        return state
  }
}

export default currentUser;
