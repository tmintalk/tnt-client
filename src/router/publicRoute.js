import { Route, Redirect } from "react-router-dom";

import isLogin from "../services/isLogin";

const PublicRoute = ({ component: Component, ...rest }) => {
  console.log(isLogin());
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
