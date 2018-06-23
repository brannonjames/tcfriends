import React from 'react';
import 'App/styles/FontAwesome.css';

const FontAwesome = ({icon, size, color}) => {

  return (
    <i className={`fa fa-${icon} fa-${size}`} style={{color}}></i>
  )
}

export default FontAwesome;
