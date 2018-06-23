import React from 'react';
import {connect} from 'react-redux';
import {addNewFriend, getFriends} from '../../../store/friends/actions';
import Form from '../../components/Form';

class NewFriendForm extends React.Component {

  inputs = [
    {name: 'name', label: 'Name'},
    {name: 'species', label: 'Species'},
    {name: 'age', label: 'Age', type: 'number'},
    {name: 'photo', label: 'Image URL'}
  ]

  handleNewFriend = friend => {
    let {usersShelterId, addNewFriend, getFriends, history} = this.props;
    addNewFriend(usersShelterId, friend)
    .then(friend => {
      getFriends();
      history.push('/');
    })
  }

  render(){
    return (
      <Form
        inputs={this.inputs}
        handleSubmit={this.handleNewFriend}
        btnLabel="Add Friend"
      />
    )
  }

}



function mapStateToProps(state){
  return {
    usersShelterId: state.currentUser.shelter._id
  }
}

export default connect(mapStateToProps, {addNewFriend, getFriends})(NewFriendForm);
