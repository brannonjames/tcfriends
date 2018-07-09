import React from 'react';
import {connect} from 'react-redux';
import FeedItem from 'App/components/FeedItem';
import ListItemInfo from 'App/components/ListItemInfo';
import {getShelters} from 'store/shelters/actions';

class ShelterList extends React.Component {
  componentDidMount(){
    let {pageReady, getShelters} = this.props;
    if(!pageReady){
      getShelters()
    }
  }

  render(){
    let shelters = this.props.shelters.all.map(s => {
      let {name, _id, friends} = s;
      return (
        <FeedItem
          id={_id}
          key={_id}
          type='shelters'
        >
          <ListItemInfo>
            <h2>{name}</h2>
            <h4>{friends.length + ' friends'}</h4>
          </ListItemInfo>
        </FeedItem>
      )
    })
    return (
      <ul>
        {shelters}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    pageReady: state.shelters.all.length > 0,
    shelters: state.shelters
  }
}

export default connect(mapStateToProps, {getShelters})(ShelterList);
