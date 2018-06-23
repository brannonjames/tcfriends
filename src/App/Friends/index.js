import React from 'react';
import NewFriendForm from 'App/Friends/containers/NewFriendForm';
import FriendProfile from 'App/Friends/containers/FriendProfile';
import {Switch, Route, Redirect} from 'react-router-dom';
import withAuth from 'hocs/withAuth';

class Shelters extends React.Component {
  render(){
    return (
      <Switch>
        <Route path="/friends/:friend_id" component={FriendProfile}/>
        <Route path="/friends/new" component={withAuth(NewFriendForm)} />
        <Redirect to="/404" />
      </Switch>
    )
  }
}


export default Shelters;
