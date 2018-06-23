import React from 'react';

const TextInput = props => {
  let {label, name, handleChange, value, type} = props;
  return (
    <input
      type={type || 'text'}
      value={value}
      placeholder={label}
      name={name}
      onChange={handleChange}
    />
  )
}

export default TextInput;
