import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Shelters from './Shelters';
import Friends from './Friends';

const MainSwitch = props => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/shelters" component={Shelters} />
      <Route path="/friends" component={Friends} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </main>
)

export default MainSwitch;
