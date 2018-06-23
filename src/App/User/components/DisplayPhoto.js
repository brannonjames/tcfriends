import React from 'react';
import classNames from 'classnames';
import '../styles/DisplayPhoto.css';

const DisplayPhoto = ({image, round, alt}) => {
  let imgClass = classNames({
    'DisplayPhoto': true,
    'round': round,
  });
  return (
    <div className={imgClass}>
      <img src={image} alt={alt} />
    </div>
  )
};

export default DisplayPhoto;
