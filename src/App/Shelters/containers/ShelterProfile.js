import React from 'react';
import {connect} from 'react-redux';
import {getShelter} from 'store/shelters/actions';
import Loader from 'App/components/Loader';
import Profile from 'App/components/Profile';

class ShelterProfile extends React.Component {
  componentDidMount(){
    this.props.getShelter(this.props.match.params.shelter_id);
  }
  render(){
    const { pageReady, shelter } = this.props;
    if(!pageReady){
      return <Loader />
    }

    const {
      email,
      address1,
      address2,
      city,
      state,
      zip
    } = shelter.contact;

    return (
      <Profile>
        <h1>{shelter.name}</h1>
        <ul>
          <li>{email}</li>
          <li>{address1}</li>
          <li>{address2}</li>
          <li>{city}</li>
          <li>{state}</li>
          <li>{zip}</li>
        </ul>
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