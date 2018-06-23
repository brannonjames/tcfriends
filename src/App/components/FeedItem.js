import React from 'react';
import MediaDisplay from 'App/components/MediaDisplay';
import UpButton from 'App/components/UpButton';
import {withRouter} from 'react-router-dom';
import 'App/styles/FeedItem.css'

class FeedItem extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    let {history, type, id} = this.props;
    history.push(`/${type}/${id}`);
  }  

  render(){
    let {name, media, ups, handleUp, type} = this.props;
    return (
      <div onClick={this.handleClick} className="FeedItem">
        { media && 
          <MediaDisplay media={media} />
        }
        <div className="item-info"> 
          <h2>{name}</h2>
          { type === 'friends' &&
            <UpButton
              icon='heart'
              size='2x'
              color='red'
              ups={ups}
              handleClick={handleUp}
            />
          } 
        </div>
      </div>    
    )
  }
}

export default withRouter(FeedItem);
