import React from 'react';
import {addError} from '../../../store/errors/actions';
import {authUser} from '../../../store/auth/actions';
import {connect} from 'react-redux';
import Form from '../../components/Form';

class Auth extends React.Component {

  inputs = [
    {name: 'email', label: 'Email'},
    {name: 'password', label: 'Password', type: 'password'}
  ]

  signupInputs = [
    {name: 'first', label: 'First Name'},
    {name: 'last', label: 'Last Name'},
    {name: 'displayPhoto', label: 'Display Photo URL'},
    ...this.inputs,
    {name: 'confirmPass', label: 'Confirm Password', type: 'password'}
  ]

  handleAuth = userData => {

    let {login, signup, authUser, history} = this.props;
    let user = {
      ...userData,
      name: {
        first: userData.first,
        last: userData.last
      }
    }
    authUser(login ? 'login' : signup ? 'signup' : '404', user)
      .then(user => history.push(`/user`))
  }


  render(){
    let {login, signup} = this.props;
    return (
      <Form
        inputs={signup ? this.signupInputs : this.inputs}
        handleSubmit={this.handleAuth}
        btnLabel={login ? "Login" : "Sign Up!"}
      />
    )
  }
}

export default connect(null, {authUser, addError})(Auth);
