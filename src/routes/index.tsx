import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { PublicRoutes } from './PublicRoutes';

export const Routes = (): JSX.Element => (
  <Router>
    <PublicRoutes />
  </Router>
);
