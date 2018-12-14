import React from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage';

const Main = () => (
  <Layout>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </Layout>
);

export default Main;
