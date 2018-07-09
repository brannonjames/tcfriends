import React from 'react';
import { withRouter } from 'react-router-dom';
import ToolBar from 'App/User/containers/ToolBar';
import ToolBarButton from 'App/components/ToolBarButton';

class ImageUploadForm extends React.Component {

  state = { images: [] }

  handleChange(e){
    this.setState({ images: e.target.files });
  }

  handleSubmit(){
    this.props.submitNewImages(this.state.images);
  }

  render(){
    return (
      <ToolBar>
        <form>
          <input 
            multiple
            type="file" 
            onChange={this.handleChange}
          />
        </form>

          <ToolBarButton 
            large
            icon="plus"
            label="Upload"
            handleClick={this.handleSubmit}
          />
          <ToolBarButton 
            icon="times"
            label="cancel"
            handleClick={() => this.props.history.push(`/friends/${this.props.id}`)}
          />

      </ToolBar>
    )
  }
}

export default withRouter(ImageUploadForm);