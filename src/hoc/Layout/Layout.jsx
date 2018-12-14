import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import classes from './Layout.css';

const Layout = props => (
  <div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </div>
);

Layout.propTypes = { children: PropTypes.node.isRequired };
export default Layout;

