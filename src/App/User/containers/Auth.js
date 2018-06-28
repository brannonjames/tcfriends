import React from 'react';
import {addError} from 'store/errors/actions';
import {authUser} from 'store/auth/actions';
import {connect} from 'react-redux';
import Form from 'App/components/Form';
import Input from 'App/components/Input';

class Auth extends React.Component {

  loginInputs = [
  ]

  signupInputs = [

  ]

  renderLoginInputs = () => {
    return (
      [
        <Input name="email" label="Email" key="name" />,
        <Input name="password" label="Password" key="password" type="password" />
      ]
    )
  }

  renderSignupInputs = () => {
    return (
      [
        <Input name="first" label="First Name" key="first" />,
        <Input name="last" label="Last Name" key="last" />,
        <Input name="displayPhoto" label="Display Photo URL" key="image" />,
        ...this.renderLoginInputs(),
        <Input name="confirmPass" label="Confirm Password" type="password" key="confirm" type="password" />
      ]  
    )
  }

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
    if(signup){
      return (
        <Form
        handleSubmit={this.handleAuth}
        btnLabel={"Sign Up!"}
      >
        {this.renderSignupInputs()}
      </Form>
      )
    } else {
      return (
        <Form
        handleSubmit={this.handleAuth}
        btnLabel={"Login"}
      >
        {this.renderLoginInputs()}
      </Form>
      )
    }
  }
}

export default connect(null, {authUser, addError})(Auth);
