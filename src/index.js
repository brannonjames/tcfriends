import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import {BrowserRouter} from 'react-router-dom';
import Root from 'Root';


ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>, 
  document.getElementById('root'));
