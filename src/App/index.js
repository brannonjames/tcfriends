import React from 'react';
import Header from './containers/Header';
import Footer from './components/Footer';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeError} from '../store/errors/actions';
import './styles/index.css';
import MainSwitch from './MainSwitch';
import Error from './components/Error';

const App = ({history, error, removeError}) => {
  history.listen(() => {
    if(error){
      removeError();
    }
  });
  return (
    <div className="App">
      <Header />
      { error && <Error error={error} /> }
      <MainSwitch />
      <Footer />
    </div>
  )
}

function mapStateToProps(state){
  return {
    error: state.errors.error
  }
}

export default withRouter(connect(mapStateToProps, {removeError})(App));
// export default App;
