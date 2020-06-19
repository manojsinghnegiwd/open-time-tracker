import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import Dashboard from './containers/Dashboard';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.Dashboard} component={Dashboard} />
      </Switch>
    </App>
  );
}
