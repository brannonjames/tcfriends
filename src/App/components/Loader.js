import React from 'react';
import FontAwesome from './FontAwesome';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className='Loader'>
      <FontAwesome icon='paw' size='4x' />
    </div>
  )
}

export default Loader;