import React from 'react';
import { Link } from 'react-router-dom';
import 'App/styles/FeedItem.css'

class FeedItem extends React.Component {

  render(){
    let {children, small, type, id} = this.props;
    return (
      <Link to={`/${type}/${id}`} className="FeedItem" style={small && styles.small}>
        {children}
      </Link>    
    )
  }
}

const styles = {
  small: {
    width: '46%',
    margin: '2%'
  },
  smallText: {
    textAlign: 'center'
  }
}

export default FeedItem;
