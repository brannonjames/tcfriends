import React from 'react';
import {connect} from 'react-redux';
import {addNewFriend, getFriends} from 'store/friends/actions';
import FriendForm from 'App/components/FriendForm';

class NewFriendForm extends React.Component {

  handleNewFriend = friend => {
    console.log(this.props);
    let {usersShelterId, addNewFriend, getFriends, history} = this.props;
    addNewFriend(usersShelterId, friend)
    .then(friend => {
      getFriends();
      history.push('/');
    })
  }

  render(){
    return (
      <FriendForm 
        btnLabel="Add Friend"
        handleSubmit={this.handleNewFriend}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    usersShelterId: state.currentUser.shelter._id
  }
}

export default connect(mapStateToProps, { addNewFriend, getFriends })(NewFriendForm);
