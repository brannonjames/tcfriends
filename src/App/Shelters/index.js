import React from 'react';
import {connect} from 'react-redux';
import NewShelterForm from './containers/NewShelterForm';
import {Switch, Route, Redirect} from 'react-router-dom';
import withAuth from '../../hocs/withAuth';
import ShelterList from './containers/ShelterList';
import ShelterProfile from './containers/ShelterProfile';

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
