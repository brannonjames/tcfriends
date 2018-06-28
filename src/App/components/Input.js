import React from 'react';
import 'App/styles/Input.css';

class Input extends React.Component {

  renderProps = () => {
    let {
      value,
      label,
      name,
      handleChange,
      type
    } = this.props
    return {
      value: value,
      placeholder: label,
      name: name,
      onChange: handleChange
    }
  }

  renderTextArea = () => {
    return <textarea {...this.renderProps()} ></textarea>
  }

  renderSelect = () => {
    const { options } = this.props;
    return (
      <select {...this.renderProps()}>
        {options.map(o => (
          <option>{o}</option>
        ))}
      </select>
    ) 
  }

  renderInput = () => {
    const { type } = this.props;
    return (
      <input
        type={type || 'text'}
        {...this.renderProps()}
      />
    )
  }

  render(){
    const { textarea, select } = this.props;
    return (
      <div className="Input">
        { textarea ? 
          this.renderInput() :
          select ?
          this.renderSelect() :
          this.renderInput()
        }
      </div>
    )
  }
}

export default Input;
