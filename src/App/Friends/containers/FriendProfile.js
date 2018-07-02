import React from 'react';
import {getFriend} from 'store/friends/actions';
import {connect} from 'react-redux';
import Profile from 'App/components/Profile';
import ProfileInfo from 'App/components/ProfileInfo';
import MediaDisplay from 'App/components/MediaDisplay';
import Loader from 'App/components/Loader';
import FeedItem from 'App/components/FeedItem';

class FriendProfile extends React.Component {

  componentDidMount(){
    let {getFriend, match} = this.props;
    getFriend(match.params.friend_id);
  }

  render(){
    let {pageReady, friend} = this.props;
    let {name, species, media, description, shelter, age, gender} = friend;
    if(!pageReady){
      return <Loader />
    }
    return (
      <Profile>
        <MediaDisplay 
          media={media.photos} 
        />
        <ProfileInfo 
          friend
          title={`${name} the ${species}`}
          age={age}
          gender={gender}
          description={description}
        />
        <FeedItem 
          type='shelters'
          name={shelter.name} 
          id={shelter._id} 
        />
      </Profile>
    )
  }
}

function mapStateToProps(state){
  return {
    pageReady: Object.keys(state.friends.currentFriend).length > 0,
    friend: state.friends.currentFriend
  }
}

export default connect(mapStateToProps, {getFriend})(FriendProfile);