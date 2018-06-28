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

  species = [
    {
      name: 'dog',
      label: 'Dog'
    },
    {
      name: 'cat',
      label: 'Cat'
    }
  ]

  genders = [
    {
      name: 'male',
      label: 'Male'
    },
    {
      name: 'female',
      label: 'Female'
    },
    {
      name: 'unknown',
      label: 'Unknown'
    }
  ]

  ages = [
    {
      name: 'young',
      label: 'Young'
    },
    {
      name: 'adult',
      label: 'Adult'
    },
    {
      name: 'senior',
      label: 'Senior'
    }
  ]

  render(){
    return (
      <Form
        handleSubmit={this.handleNewFriend}
        btnLabel="Add Friend"
      >
        <Input 
          name='name'
          label='Name'
        />
        <Input
          options={this.species} 
          name='species'
          label='Species'
        />
        <Input 
          options={this.ages}
          name='age'
          label='Age'
        />
        <Input
          options={this.genders} 
          name='gender'
          label='Gender'
        />
        <Input 
          name='photo'
          label='Image URL'
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
