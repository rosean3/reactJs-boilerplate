import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);
