import React from 'react';
import NewFriendForm from 'App/Friends/containers/NewFriendForm';
import FriendProfile from 'App/Friends/containers/FriendProfile';
import FriendEditForm from 'App/Friends/containers/FriendEditForm';
import HomePage from 'App/Friends/containers/HomePage';
import {Switch, Route, Redirect} from 'react-router-dom';
import withAuth from 'hocs/withAuth';

class Shelters extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/friends/new" component={withAuth(NewFriendForm)} />
        <Route exact path="/friends/:friend_id" component={FriendProfile} />
        <Route path="/friends/:friend_id/edit" component={withAuth(FriendEditForm)} />
        <Redirect to="/404" />
      </Switch>
    )
  }
}


export default Shelters;
