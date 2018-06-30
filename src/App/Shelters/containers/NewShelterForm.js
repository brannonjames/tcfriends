import React from 'react';
import {connect} from 'react-redux';
import {addNewShelter} from 'store/shelters/actions';
import Form from 'App/components/Form';
import Input from 'App/components/Input';

class NewShelterForm extends React.Component {

  handleNewShelter = (data) => {

    let {addNewShelter, history, currentUserId} = this.props;
    addNewShelter(currentUserId, {
      name: data.name,
      contact: {...data}
    })
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
      >
        <Input 
          name="name" 
          label="Shelter Name"
        />        
        <Input 
          name="email" 
          label="Email"
        />
        <Input 
          name="address1" 
          label="Address Line 1"
        />
        <Input 
          name="address2" 
          label="Address Line 2"
        />
        <Input 
          name="zip" 
          label="Zip Code"
        />
      </Form>
    )
  }

}



function mapStateToProps(state){
  return {
    currentUserId: state.currentUser._id
  }
}

export default connect(mapStateToProps, {addNewShelter})(NewShelterForm);
