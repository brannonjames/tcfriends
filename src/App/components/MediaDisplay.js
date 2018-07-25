import React from 'react';
import FontAwesome from 'App/components/FontAwesome';
import 'App/styles/MediaDisplay.css';
import 'App/styles/Slideshow.css';


class Slideshow extends React.Component {

  state = {
    index: 0
  }

  handlePrev = (e) => {
    let {index} = this.state;
    this.setState(prev => {
      return {
        index: index > 0 ? index - 1 : this.props.media.length - 1
      }
    });
  }
  
  handleNext = (e) => {
    let {index} = this.state;
    this.setState(prev => {
      return {
        index: index < this.props.media.length - 1 ? index + 1 : 0
      }
    });
  }

  render(){
    let {url:src, name:alt} = this.props.media[this.state.index];
    return (
      <div className='Slideshow'>
        <div className='slideshow-nav'>
          <div onClick={this.handlePrev}>
            <FontAwesome icon='chevron-left' size='3x' />
          </div>
          <div onClick={this.handleNext}>
            <FontAwesome icon='chevron-right' size='3x' />
          </div>
        </div>
        <img src={src} alt={alt} />
      </div>
    )
  }
}  


const MediaDisplay = ({media}) => {
  let slideshow = Array.isArray(media);
  let display;
  if(slideshow){
    if(media.length < 2) {
      display = <img src={media[0].url} alt={media[0].name} />;
    } else {
      display = <Slideshow media={media} />
    }    
  } else {
    display = <img src={media.url} alt={media.name} />
  }
  return (
    <div className="MediaDisplay">
      {display}  
    </div>
  )
}


export default MediaDisplay;
