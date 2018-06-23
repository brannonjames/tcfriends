import {ADD_SHELTERS, SET_CURRENT_SHELTER} from '../actionTypes';

function shelters(state={all: [], currentShelter: {}}, action){
  switch(action.type){
    case ADD_SHELTERS:
      return {...state, all:[...state.all, ...action.shelters]}
    case SET_CURRENT_SHELTER:
      return {...state, currentShelter: action.shelter}  
    default:
        return state;
  }
}

export default shelters;
