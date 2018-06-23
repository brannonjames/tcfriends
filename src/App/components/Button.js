import React from 'react';
import '../styles/Button.css';

const Button = ({type, handleClick, label, children, buttonStyle, size, color}) => {
  let btnColor = {backgroundColor: color};
  return (
    <button
      type={type || 'button'}
      onClick={handleClick || null}
      className={`Button ${buttonStyle || 'brick-md'}`}
      style={btnColor}
    >
      {label || children || 'Submit'}
    </button>
  )
}



export default Button;
