import React from 'react';
import {getFriend} from 'store/friends/actions';
import {connect} from 'react-redux';
import Profile from 'App/components/Profile';
import ProfileInfo from 'App/components/ProfileInfo';
import MediaDisplay from 'App/components/MediaDisplay';
import Loader from 'App/components/Loader';
import FeedItem from 'App/components/FeedItem';
import ListItemInfo from '../../components/ListItemInfo';
import ToolBar from 'App/User/containers/ToolBar';
import ToolBarButton from 'App/components/ToolBarButton';

class FriendProfile extends React.Component {

  componentDidMount(){
    let {getFriend, match} = this.props;
    getFriend(match.params.friend_id);
  }

  renderToolBar(){
    return (
      <ToolBar>
        <ToolBarButton 
          label="Edit"
          handleClick={() => {}}
          icon="edit"
        />
        <ToolBarButton 
          large
          label="Add Photo"
          handleClick={() => {}}
          icon="plus"
        />
        <ToolBarButton 
          label="Delete"
          handleClick={() => {}}
        />
      </ToolBar>
    )
  }

  render(){
    let {pageReady, friend, isFriendMod} = this.props;
    let {name, species, media, description, shelter, age, gender} = friend;
    if(!pageReady){
      return <Loader />
    }
    return (
      <Profile>
        <MediaDisplay 
          media={media.photos} 
        />

        { isFriendMod &&
          this.renderToolBar()
        }

        <ProfileInfo 
          friend
          title={`${name} the ${species}`}
          age={age}
          gender={gender}
          description={description}
        />
        <FeedItem 
          type='shelters'
          id={shelter._id} 
        >
          <ListItemInfo>
            <h3>{shelter.name}</h3>
          </ListItemInfo>
        </FeedItem>

      </Profile>
    )
  }
}

function mapStateToProps(state){
  return {
    pageReady: Object.keys(state.friends.currentFriend).length > 0,
    friend: state.friends.currentFriend,
    isFriendMod: state.currentUser._id === state.friends.currentFriend.creator
  }
}

export default connect(mapStateToProps, {getFriend})(FriendProfile);