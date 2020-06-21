import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Stats from './containers/Stats';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.Dashboard} component={Dashboard} />
        <Route exact path={routes.Stats} component={Stats} />
      </Switch>
    </App>
  );
}
