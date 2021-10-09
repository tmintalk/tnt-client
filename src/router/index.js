import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { GET_ME_REQUEST } from '../reducers/user';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Join from "../pages/Join";
import PublicRoute from "./publicRoute";
import PrivateRouter from "./privateRoute";

const Router = () => {
  const dispatch = useDispatch();
  const [cookies, ] = useCookies(['Authorization']);

  useEffect(() => {
    if (cookies.Authorization) {
      dispatch({
        type: GET_ME_REQUEST
      })
    }
  }, [cookies, dispatch]);

  return (
    <Suspense>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <PublicRoute path={"/join"} component={Join} />
        <PrivateRouter path={"/test"} component={() => (<><h1>Test</h1></>)} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
