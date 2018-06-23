import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import '../styles/Header.css';
import FontAwesome from '../components/FontAwesome';

class Header extends React.Component {
  render(){
    return (
      <header>
        <NavLink to='/user'>
          <FontAwesome icon='user' size='2x'/>
        </NavLink>
        <NavLink to='/'>
          <FontAwesome icon='paw' size='2x' />
        </NavLink>
        <NavLink to='/shelters'>
          <FontAwesome icon='home' size='2x' />
        </NavLink>
      </header>
    )
  }
}

export default withRouter(Header);
