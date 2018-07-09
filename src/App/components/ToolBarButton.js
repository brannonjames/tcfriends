import React from 'react';
import FontAwesome from 'App/components/FontAwesome';
import Button from 'App/components/Button';
import 'App/styles/ToolBarButton.css';

const ToolBarButton = ({large, handleClick, icon, label}) => {
  return (
    <div className="ToolBarButton">
      <Button
        buttonStyle={large ? 'circle-lg' : 'circle-md'}
        handleClick={handleClick}
      >
        <FontAwesome
          icon={icon}
          size={large ? '4x' : '2x'}
        />
      </Button>
      <p>{label}</p>
    </div>
  )
}

export default ToolBarButton;