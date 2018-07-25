import React from 'react';
import Input from 'App/components/Input';
import Form from 'App/components/Form';

class FriendForm extends React.Component {

  state = {
    name: '',
    species: '',
    age: '',
    url: '',
    gender: '',
    description: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount = () => {
    if (this.props.initialState) {
      this.setState(this.props.initialState);
    }
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
    const { handleSubmit, initialState, btnLabel } = this.props;
    const { name, species, age, gender, url, description } = this.state;
    return (
      <Form
        handleSubmit={() => handleSubmit(this.state)}
        btnLabel={btnLabel}
      >
        <Input 
          name='name'
          label='Name'
          value={name}
          onChange={this.handleChange}
        />
        <Input
          options={this.species} 
          name='species'
          label='Species'
          value={species}
          onChange={this.handleChange}
        />
        <Input 
          options={this.ages}
          name='age'
          label='Age'
          value={age}
          onChange={this.handleChange}
        />
        <Input
          options={this.genders} 
          name='gender'
          label='Gender'
          value={gender}
          onChange={this.handleChange}
        />
        <Input 
          name='url'
          label='Image URL'
          value={url}
          onChange={this.handleChange}
        />
        <Input 
          textarea
          name="description"
          label="All about your friend"
          value={description}
          onChange={this.handleChange}
        />
      </Form>
    )
  }

}


export default FriendForm;
