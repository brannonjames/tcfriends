import React from 'react';
import {connect} from 'react-redux';
import {getFriends, heartFriend} from 'store/friends/actions';
import FeedItem from 'App/components/FeedItem';
import Loader from 'App/components/Loader';
import MediaDisplay from 'App/components/MediaDisplay';
import UpButton from 'App/components/UpButton';
import ListItemInfo from 'App/components/ListItemInfo';


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

  renderListItems(){
    return this.props.friends.all.map(friend => {
      let {name, media, _id, ups} = friend;
      return (
        <FeedItem
          type='friends'
          key={_id}
          id={_id}
        >
          <MediaDisplay media={media.photos[0] ? media.photos[0] : null} />
          <ListItemInfo>
            <h2>{name}</h2>
            <UpButton
              ups={ups}
              handleClick={this.handleHeart.bind(this, _id)}
            />
          </ListItemInfo>
        </FeedItem>
      )
    })
  }

  render(){
    if(!this.props.pageReady){
      return <Loader />
    }

    return (
      <ul>
        { this.renderListItems() }
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
