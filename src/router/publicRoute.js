import { useState } from "react";
import { Route, Redirect } from "react-router-dom";

import isLogin from "../services/isLogin";

const PublicRoute = ({ component: Component, ...rest }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  async function check () {
    let loggedIn = await isLogin();
    setLoggedIn(loggedIn);
  }

  check();

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
