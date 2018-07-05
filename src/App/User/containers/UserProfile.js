import React from 'react';
import {connect} from 'react-redux';
import {logoutUser, getFavorites} from 'store/auth/actions';
import Button from 'App/components/Button';
import {withRouter} from 'react-router-dom';
import Profile from 'App/components/Profile';
import DisplayPhoto from 'App/components/DisplayPhoto';
import Greeting from 'App/components/Greeting';
import ToolBar from 'App/User/containers/ToolBar';
import ProfileList from '../../components/ProfileList';

class UserProfile extends React.Component {

  componentDidMount(){
    this.props.getFavorites();
  }

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

        <ProfileList 
          title='Favorites'
          items={this.props.favorites}
        />

        <Button label='Logout' handleClick={this.handleLogout} />
      </Profile>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.currentUser,
    favorites: state.currentUser.favorites,
    hasShelter: state.currentUser.shelter
  }
}

export default withRouter(connect(mapStateToProps, {logoutUser, getFavorites})(UserProfile));
