import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './store/rootReducer';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {setCurrentUser} from './store/auth/actions';
import {setTokenHeader} from './services/api';
import jwtDecode from 'jwt-decode';



export default ({children, initialState={}}) => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
 )
  


  if(localStorage.jwtToken){
    setTokenHeader(localStorage.jwtToken);
    try {
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
    } catch(err){
      store.dispatch(setCurrentUser({}));
    }
  }



  return (
    <Provider store={store} >
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}
