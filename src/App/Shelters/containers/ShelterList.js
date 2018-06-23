import React from 'react';
import {connect} from 'react-redux';
import FeedItem from '../../Home/components/FeedItem';
import {getShelters} from '../../../store/shelters/actions';

class ShelterList extends React.Component {
  componentDidMount(){
    let {pageReady, getShelters} = this.props;
    if(!pageReady){
      getShelters()
    }
  }

  render(){
    let shelters = this.props.shelters.all.map(s => {
      let {name, _id} = s;
      return (
        <FeedItem
          id={_id}
          key={_id}
          name={name}
          type='shelters'
        />
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
