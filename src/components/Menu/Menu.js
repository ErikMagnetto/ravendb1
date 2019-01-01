import React, { Component } from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className={classes.Menu}>
        <NavLink className={classes.Nav} activeClassName={classes.activeLink} to='/query' exact>Query</NavLink>
        <NavLink className={classes.Nav} activeClassName={classes.activeLink} to='/update'>Update</NavLink>
        <NavLink className={classes.Nav} activeClassName={classes.activeLink} to='/delete'>Delete</NavLink>
      </div>
    );
  }
}

export default Menu;