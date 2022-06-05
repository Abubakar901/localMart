import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";

const ProtectedRoute = ({ isAdmin, isSeller, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <ErrorPage />;
            }
            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;