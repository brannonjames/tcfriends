import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriend, updateFriend } from 'store/friends/actions';
import Profile from 'App/components/Profile';
import MediaDisplay from 'App/components/MediaDisplay';
import FriendForm from 'App/components/FriendForm';

class EditFriendForm extends Component {


  componentDidMount(){
    const {getFriend, match} = this.props;
    getFriend(match.params.friend_id);
  }

  handleUpdate = friend => {
    const { updateFriend, history } = this.props;
    updateFriend(friend._id, friend.shelter._id, friend)
      .then(updatedFriend => {
        history.goBack();
      });
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
          handleSubmit={this.handleUpdate}
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

export default connect(mapStateToProps, { getFriend, updateFriend })(EditFriendForm);