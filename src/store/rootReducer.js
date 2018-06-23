import {combineReducers} from 'redux';
import currentUser from 'store/auth/reducer';
import errors from 'store/errors/reducer';
import friends from 'store/friends/reducer';
import shelters from 'store/shelters/reducer';


export default combineReducers({
  currentUser,
  errors,
  friends,
  shelters
});
