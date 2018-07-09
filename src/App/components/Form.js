import React, { Component, cloneElement, Children } from 'react';
import Button from 'App/components/Button';
import 'App/styles/Form.css';

class Form extends Component {

  componentWillMount(){
    const { children } = this.props;
    let state = {};
    Children.forEach(children, child => {
      state[child.props.name] = "";
    });
    this.setState(state);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderInputs = () => {
    let { children } = this.props;
    return Children.map(children, child => {
      return cloneElement(child, {
        ...child.props,
        value: this.state[child.props.name],
        handleChange: this.handleChange
      });
    });
  }


  render(){
    let {handleSubmit, btnLabel} = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(this.state)
      }}>
        <div className="form-inputs">
          {this.renderInputs()}
        </div>
        <Button label={btnLabel} type='submit' />
      </form>
    )
  }
}



export default Form;
