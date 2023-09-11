import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../components';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
  </Switch>
);
