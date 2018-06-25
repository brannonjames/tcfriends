import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './store/rootReducer';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {setCurrentUser} from './store/auth/actions';
import {setTokenHeader} from './services/api';
import jwtDecode from 'jwt-decode';



export default ({children, initialState={}}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  //   // compose(
  //   //   applyMiddleware(thunk),
  //   //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   // )
  // )
  
  // // if(localStorage.jwtToken){
  // //   setTokenHeader(localStorage.jwtToken);
  // //   try {
  // //     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  // //   } catch(err){
  // //     store.dispatch(setCurrentUser({}));
  // //   }
  // // }

  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}
