import React from 'react';
import FeedItem from './FeedItem';
import Loader from './Loader';
import '../styles/ProfileList.css';

class ProfileList extends React.Component {
  renderListItems(){
    const { items } = this.props;
    console.log(items);
    return items.map(li => (
      <FeedItem 
        small
        type={'friends'}
        key={li._id}
        id={li._id}
        media={li.media.photos[0]}
        name={li.name}
      />
    ))
  }

  render(){
    const { title, items } = this.props;
    return (
      <div className='ProfileList'>
        <h4>{title}</h4>
        <ul>
          { items.length === 0 ?
            <p>No favorites yet</p> :
            items.length > 0 && items[0].name ?
            this.renderListItems() :
            <Loader />
          }
        </ul>
      </div>
    )
  }
}

export default ProfileList;