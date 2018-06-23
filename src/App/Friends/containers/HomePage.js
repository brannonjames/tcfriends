import React from 'react';
import {connect} from 'react-redux';
import {getFriends, heartFriend} from 'store/friends/actions';
import FeedItem from 'App/components/FeedItem';
import Loader from 'App/components/Loader';


class HomePage extends React.Component {
  componentDidMount(){
    if(!this.props.pageReady){
      this.props.getFriends();
    }
  }

  handleHeart = (friendId) => {
    let {isAuthenticated, heartFriend} = this.props;
    if(isAuthenticated){
      heartFriend(friendId)
    }
  }

  render(){
    if(!this.props.pageReady){
      return <Loader />
    }
    let friends = this.props.friends.all.map(friend => {
      let {name, media, _id, ups} = friend;
      return (
        <FeedItem
          type='friends'
          key={_id}
          name={name}
          media={media.photos[0] ? media.photos[0] : null}
          id={_id}
          ups={ups}
          handleUp={this.handleHeart.bind(this, _id)}
        />
      )
    })


    return (
      <ul>
        {friends}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    friends: state.friends,
    pageReady: state.friends.all.length > 0,
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

export default connect(mapStateToProps, {getFriends, heartFriend})(HomePage);
