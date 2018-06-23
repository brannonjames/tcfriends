import React from 'react';
import Button from './Button';
import TextInput from './TextInput';
import '../styles/Form.css';

class Form extends React.Component {

  componentWillMount(){
    let state = this.props.inputs.reduce((acc, input) => {
      acc[input.name] = input.type === 'number' ? 0 : ""
      return acc;
    }, {})
    this.setState(state);
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  returnInputs = inputs => (
    inputs.map(input => (
      <TextInput
        key={input.name}
        name={input.name}
        label={input.label}
        value={this.state[input.name]}
        type={input.type || 'text'}
        handleChange={this.handleChange}
      />
    ))
  );


  render(){
    let {inputs, handleSubmit, btnLabel} = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(this.state)
      }}>
        <div className="form-inputs">
          {this.returnInputs(inputs)}
        </div>
        <Button label={btnLabel} type='submit' />
      </form>
    )
  }
}



export default Form;
