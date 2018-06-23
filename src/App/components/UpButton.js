import React from 'react';
import FontAwesome from './FontAwesome';
import '../styles/UpButton.css';



class UpButton extends React.Component {

  handleUpClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.handleClick();
  }

  render(){
    let {ups} = this.props;
    return (
      <div className="UpButton" onClick={this.handleUpClick}>
        <p>{ups}</p>
        <FontAwesome icon='heart' size='2x' color='red' />
      </div>
    )
  }
}

export default UpButton;
