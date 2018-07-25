import React from 'react';
import { withRouter } from 'react-router-dom';
import ToolBar from 'App/User/containers/ToolBar';
import Button from 'App/components/Button';

class ImageUploadForm extends React.Component {

  // My first ref, woohoo!!
  fileInput = React.createRef();

  handleChange = e => {
    const { files } = e.target;
    const images = [];
    if(files.length > 0) {
      for(let file of files){
        let formData = new FormData();
        formData.append('file', file);
        images.push(formData);
      }
      this.props.submitNewImages(images[0]);
    }
  }

  handleClick = () => {
    this.fileInput.current.click();
  }

  render(){
    return (
      <ToolBar>
        <Button 
          buttonStyle='circle-md'
          label="Cancel"
          handleClick={() => this.props.history.goBack()}
        />
        <input 
          type="file"
          ref={this.fileInput}
          style={{ display: 'none' }}
          onChange={this.handleChange}
        />
        <button 
          onClick={this.handleClick}
          className="button circle-lg"
        >
          Add Photo
        </button>
      </ToolBar>
    )
  }
}

export default withRouter(ImageUploadForm);