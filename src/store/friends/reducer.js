import {ADD_FRIENDS, REFRESH_FRIEND, SET_CURRENT_FRIEND} from 'store/actionTypes';

function friends(state={all: [], currentFriend: {}}, action){
  switch(action.type){
    case ADD_FRIENDS:
      return {...state, all: [...action.friends]};
    case REFRESH_FRIEND:
      return {...state, all: state.all.map(friend => (
        friend._id === action.friend._id ? action.friend : friend
      ))}
    case SET_CURRENT_FRIEND:
      return {...state, currentFriend: action.friend}  
    default:
      return state;
  }
}

export default friends;
