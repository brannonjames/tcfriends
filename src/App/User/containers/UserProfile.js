import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../../store/auth/actions';
import Button from '../../components/Button';
import {withRouter} from 'react-router-dom';
import Profile from '../../components/Profile';
import DisplayPhoto from '../components/DisplayPhoto';
import Greeting from '../components/Greeting';
import ToolBar from '../components/ToolBar';

class UserProfile extends React.Component {

  handleLogout = () => {
    let {history, logoutUser} = this.props;
    logoutUser();
    history.push('/');
  }

  render(){
    let {user, hasShelter} = this.props;
    return (
      <Profile>
        <DisplayPhoto
          image={user.displayPhoto}
          alt={user.name.first}
          round
        />
        <Greeting name={user.name.first} />
        <ToolBar shelter={hasShelter} />
        <Button label='Logout' handleClick={this.handleLogout} />
      </Profile>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.currentUser,
    hasShelter: state.currentUser.shelter
  }
}

export default withRouter(connect(mapStateToProps, {logoutUser})(UserProfile));
