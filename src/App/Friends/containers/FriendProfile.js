import React from 'react';
import {getFriend} from 'store/friends/actions';
import {connect} from 'react-redux';
import Profile from 'App/components/Profile';
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
    let {name, species, media, description, shelter} = friend;
    if(!pageReady){
      return <Loader />
    }
    return (
      <Profile>
        <MediaDisplay 
          media={media.photos} 
        />
        <h3>{`This is ${name} the ${species}.`}</h3>
        <p>{description}</p>
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