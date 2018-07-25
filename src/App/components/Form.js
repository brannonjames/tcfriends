import React, { Component, cloneElement, Children } from 'react';
import Button from 'App/components/Button';
import 'App/styles/Form.css';

const Form = ({ children, handleSubmit, btnLabel }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit()
    }}>

      <div className="form-inputs">
        { children }
      </div>

      <Button label={btnLabel} type='submit' />

    </form>
  )
}

export default Form;
