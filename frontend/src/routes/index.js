import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Incidents from '~/pages/Incidents';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/incidents/new" component={Incidents} isPrivate />
      <Route path="/incidents/edit/:id" component={Incidents} isPrivate />
    </Switch>
  );
};

export default Routes;
