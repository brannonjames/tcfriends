import React from 'react';
import 'App/styles/Error.css';

const Error = ({error}) => (
  <div className="Error">
    <p>{error}</p>
  </div>
)

export default Error;
