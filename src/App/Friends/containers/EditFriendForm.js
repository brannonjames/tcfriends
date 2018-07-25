import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriend } from 'store/friends/actions';
import Profile from 'App/components/Profile';
import MediaDisplay from 'App/components/MediaDisplay';
import FriendForm from 'App/components/FriendForm';

class EditFriendForm extends Component {


  componentDidMount(){
    const {getFriend, match} = this.props;
    getFriend(match.params.friend_id);
  }

  render(){
    const { media, name, species, age, gender, description } = this.props.currentFriend;
    return (
      <Profile>
        { media && 
          <MediaDisplay media={media.photos} />
        }
        <FriendForm 
          initialState={this.props.currentFriend}
          btnLabel="Update"
        />
      </Profile>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentFriend: state.friends.currentFriend
  }
}

export default connect(mapStateToProps, { getFriend })(EditFriendForm);