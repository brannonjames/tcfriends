import React from 'react';
import {connect} from 'react-redux';
import Auth from '../App/User/containers/Auth';

export default function withAuth(Component){
  class Authenticate extends React.Component {
    componentWillMount(){
      if(!this.props.isAuthenticated){
        this.props.history.push('/user/login');
      }
    }

    componentWillUpdate(nextProps){
      if(!nextProps.isAuthenticated){
        this.props.history.push("/user/login");
      }
    }

    render(){
      return this.props.isAuthenticated ? <Component {...this.props} /> : <Auth login {...this.props} />
    }
  }

  function mapStateToProps(state){
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    }
  }

  return connect(mapStateToProps)(Authenticate)
}
