import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriend, updateFriend, deleteImage } from 'store/friends/actions';
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

  handleImageDelete = (friend_id, shelter_id, id) => {

    this.props.deleteImage(id, friend_id, shelter_id);
  }

  render(){
    const { media, _id, shelter } = this.props.currentFriend;
    return (
      <Profile>
        { media && 
          <MediaDisplay 
            edit
            media={media.photos} 
            handleDelete={this.handleImageDelete.bind(this, _id, shelter._id)}
          />
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

export default connect(mapStateToProps, { getFriend, updateFriend, deleteImage })(EditFriendForm);