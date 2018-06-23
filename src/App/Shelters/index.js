import React from 'react';
import {connect} from 'react-redux';
import NewShelterForm from 'App/Shelters/containers/NewShelterForm';
import {Switch, Route, Redirect} from 'react-router-dom';
import withAuth from 'hocs/withAuth';
import ShelterList from 'App/Shelters/containers/ShelterList';
import ShelterProfile from 'App/Shelters/containers/ShelterProfile';

class User extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/shelters" component={ShelterList} />
        <Route exact path="/shelters/new" component={withAuth(NewShelterForm)} />
        <Route path="/shelters/:shelter_id" component={ShelterProfile} />
        <Redirect to="/404" />
      </Switch>
    )
  }
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

export default connect(mapStateToProps)(User);
