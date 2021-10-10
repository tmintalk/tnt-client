import { Route, Redirect } from "react-router-dom";

import isLogin from "../services/isLogin";

const PrivateRouter = ({ component: Component, ...rest }) => {
  console.log(isLogin());
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/join" />
        )
      }
    />
  );
};
export default PrivateRouter;
