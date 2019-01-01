import React, { Component } from 'react';
import classes from './Default.module.css'
import Menu from '../Menu/Menu';
import { Switch, Route } from 'react-router-dom';
//import Query from '../Query/Query';
//import Update from '../Update/Update';
import Delete from '../Delete/Delete';

class Default extends Component {
  render() {
    return (
      <div className={classes.Default}>
        <Menu />
        <Switch>
          <Route path="/update" /* component={Update} */ />
          <Route path="/delete" component={Delete} />
          <Route path="/" /*component={Query} */ />
        </Switch>
      </div>
    );
  }
}

export default Default;