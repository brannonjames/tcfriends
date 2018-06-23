import React from 'react';
import Auth from './containers/Auth';
import UserProfile from './containers/UserProfile';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import withAuth from '../../hocs/withAuth';

class User extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/user" component={withAuth(UserProfile)} />
        <Route path="/user/login" render={props => <Auth login {...props} />} />
        <Route path="/user/signup" render={props => <Auth signup {...props} />} />
        <Redirect to="/404" />
      </Switch>
    )
  }
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

export default connect(mapStateToProps)(User);
