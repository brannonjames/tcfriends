import {ADD_ERROR, REMOVE_ERROR} from 'store/actionTypes';

function errors(state={}, action){
  switch(action.type){
    case ADD_ERROR:
      return {error: action.error}
    case REMOVE_ERROR:
      return {}
    default:
        return {...state}
  }
}

export default errors;
