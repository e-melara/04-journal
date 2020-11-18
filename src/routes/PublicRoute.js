import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
 isAutheticathe,
 component: Component,
 ...props
}) => {
 return (
  <Route
   {...props}
   component={(props) =>
    !isAutheticathe ? <Component {...props} /> : <Redirect to="/" />
   }
  ></Route>
 );
};

PublicRoute.propTypes = {
 component: PropTypes.func.isRequired,
 isAutheticathe: PropTypes.bool.isRequired,
};
