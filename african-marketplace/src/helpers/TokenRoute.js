import React from "react";
import { Route, Redirect } from "react-router";

// If the user is authenticated, render the "component" prop (normal behavior)
// Otherwise, redirect to /login

const TokenRoute = ({ component, ...rest }) => {
  if (localStorage.getItem('token')) {
    return (
      <Redirect to="/" />
    )
  }
  else {
    return (
        <Route component={component} {...rest} />
    )
  }
};

export default TokenRoute;