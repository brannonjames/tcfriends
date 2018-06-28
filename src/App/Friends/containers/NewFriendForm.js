import React from 'react';
import {connect} from 'react-redux';
import {addNewFriend, getFriends} from 'store/friends/actions';
import Input from 'App/components/Input';
import Form from 'App/components/Form';

class NewFriendForm extends React.Component {

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
        handleSubmit={this.handleNewFriend}
        btnLabel="Add Friend"
      >
        <Input 
          name='name'
          label="Name"
        />
        <Input 
          name='species'
          label="Species"
        />
        <Input 
          name='age'
          label="Age"
        />
        <Input 
          name='photo'
          label="Image URL"
        />
      </Form>
    )
  }

}



function mapStateToProps(state){
  return {
    usersShelterId: state.currentUser.shelter._id
  }
}

export default connect(mapStateToProps, {addNewFriend, getFriends})(NewFriendForm);
