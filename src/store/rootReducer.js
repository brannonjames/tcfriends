import {combineReducers} from 'redux';
import currentUser from './auth/reducer';
import errors from './errors/reducer';
import friends from './friends/reducer';
import shelters from './shelters/reducer';


export default combineReducers({
  currentUser,
  errors,
  friends,
  shelters
});
