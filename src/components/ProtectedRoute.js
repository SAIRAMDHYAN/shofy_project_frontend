// ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAdmin
      ? <Component {...props} />
      : <Redirect to='/user-dashboard' /> // Redirect to user dashboard if not admin
  )} />
);

export default ProtectedRoute;
