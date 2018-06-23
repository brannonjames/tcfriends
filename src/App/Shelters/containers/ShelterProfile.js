import React from 'react';
import {connect} from 'react-redux';
import {getShelter} from '../../../store/shelters/actions';
import Loader from '../../components/Loader';
import Profile from '../../components/Profile';

class ShelterProfile extends React.Component {
  componentDidMount(){
    this.props.getShelter(this.props.match.params.shelter_id);
  }
  render(){
    if(!this.props.pageReady){
      return <Loader />
    }
    return (
      <Profile>
        <h1>{this.props.shelter.name}</h1>
      </Profile>
    )
  }
}

function mapStateToProps(state){
  return {
    pageReady: Object.keys(state.shelters.currentShelter).length > 0,
    shelter: state.shelters.currentShelter
  }
}

export default connect(mapStateToProps, {getShelter})(ShelterProfile);