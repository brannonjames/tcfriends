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
        <option disabled defaultValue value="">{this.props.label}</option>
        {options.map(o => (
          <option key={o.name} name={o.name}>{o.label}</option>
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
    const { textarea, options } = this.props;
    return (
      <div className="Input">
        { textarea ? 
          this.renderTextArea() :
          options ?
          this.renderSelect() :
          this.renderInput()
        }
      </div>
    )
  }
}

export default Input;
