import React from "react";
import { Route, Redirect } from "react-router";

// If the user is authenticated, render the "component" prop (normal behavior)
// Otherwise, redirect to /login

const ProtectedRoute = ({ component, ...rest }) => {
  if (localStorage.getItem('token')) {
    return (
      <Route component={component} {...rest} />
    )
  }
  else {
    return (
      <Redirect to="/login" />
    )
  }
};

export default ProtectedRoute;