import React from 'react';
import {connect} from 'react-redux';
import {addNewShelter} from '../../../store/shelters/actions';
import Form from '../../components/Form';

class NewShelterForm extends React.Component {


  inputs = [
    {name: 'name', label: 'Shelter Name'},
    {name: 'city', label: 'City'},
    {name: 'email', label: 'Email'}
  ]

  handleNewShelter = (data) => {
    let {addNewShelter, history, currentUserId} = this.props;
    addNewShelter(currentUserId, data)
    .then(history.push('/user'));
  }

  render(){
    let {currentUserId} = this.props;
    console.log(currentUserId);
    return (
      <Form
        inputs={this.inputs}
        handleSubmit={this.handleNewShelter}
        btnLabel="Add Shelter"
      />
    )
  }

}



function mapStateToProps(state){
  return {
    currentUserId: state.currentUser._id
  }
}

export default connect(mapStateToProps, {addNewShelter})(NewShelterForm);
