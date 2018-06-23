import React from 'react';
import {Switch, Route} from 'react-router-dom';
import User from 'App/User';
import Shelters from 'App/Shelters';
import Friends from 'App/Friends';

const MainSwitch = props => (
  <main>
    <Switch>
      <Route exact path="/" component={Friends} />
      <Route path="/user" component={User} />
      <Route path="/shelters" component={Shelters} />
      <Route path="/friends" component={Friends} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </main>
)

export default MainSwitch;
