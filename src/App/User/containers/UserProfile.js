import React from 'react';
import {connect} from 'react-redux';
import {logoutUser, getFavorites} from 'store/auth/actions';
import {withRouter} from 'react-router-dom';
import Profile from 'App/components/Profile';
import DisplayPhoto from 'App/components/DisplayPhoto';
import Greeting from 'App/components/Greeting';
import ToolBar from 'App/User/containers/ToolBar';
import ToolBarButton from 'App/components/ToolBarButton';
import ProfileList from '../../components/ProfileList';

class UserProfile extends React.Component {

  componentDidMount(){
    this.props.getFavorites();
  }

  addShelter = () => {
    this.props.history.push('/shelters/new');
  }

  addFriend = () => {
    this.props.history.push('/friends/new');
  }

  handleLogout = () => {
    let {history, logoutUser} = this.props;
    logoutUser();
    history.push('/');
  }

  renderToolBar(){
    const {shelter, history} = this.props;
    return (
      <ToolBar>
        { shelter && 
            <ToolBarButton 
              label="New Friend"
              handleClick={this.addFriend}
              icon="plus"
            />
        }
        { shelter ? 
          <ToolBarButton 
            large
            label={shelter.name}
            handleClick={() => {history.push(`/shelters/${shelter._id}`)}}
            icon="home"
          /> 
          :
          <ToolBarButton 
            label="Add Shelter"
            handleClick={this.addShelter}
            icon="home"
          />
        }    
        
        <ToolBarButton 
          label="Logout"
          handleClick={this.handleLogout}
          icon="logout"
        />
      </ToolBar>
    )
  }

  render(){
    let {user, favorites} = this.props;
    return (
      <Profile>
        <DisplayPhoto
          image={user.displayPhoto}
          alt={user.name.first}
          round
        />

        <Greeting name={user.name.first} />

        {this.renderToolBar()}

        { favorites && 
          favorites.length > 0 && 
          <ProfileList 
            title='Favorites'
            items={favorites}
          />
        }

      </Profile>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.currentUser,
    favorites: state.currentUser.favorites,
    shelter: state.currentUser.shelter
  }
}

export default withRouter(connect(mapStateToProps, {logoutUser, getFavorites})(UserProfile));
